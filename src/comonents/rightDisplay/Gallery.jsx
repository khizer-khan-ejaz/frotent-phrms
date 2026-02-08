import React, { useContext, useState, useEffect, useCallback } from 'react'
import GalleryUpload from './GalleryUpload'
import axios from 'axios';
import { Flex, Spinner } from '@chakra-ui/react';
import { Context } from '../../context/Context';
import DeleteButton from "./DeleteButton";
import { MdCancel } from "react-icons/md";
import useToast from "../../hooks/useToast";


const Gallery = () => {
  const { showSuccess, showError } = useToast();
  const [state, setState] = useState({
    images: [],
    loading: false,
    deleteActivate: false
  });

  const contextValue = useContext(Context);
  const { setTotalGalleryImages, user } = contextValue || {};
  const token = user?.token;

  // Protected setter that CANNOT accept undefined
  const setGalleryImages = useCallback((value) => {
    setState(prev => {
      let newImages;

      if (typeof value === 'function') {
        newImages = value(prev.images || []);
      } else {
        newImages = value;
      }

      // FORCE array, reject undefined/null
      const safeImages = Array.isArray(newImages) ? newImages : [];

      console.log("Setting gallery images:", safeImages);

      return {
        ...prev,
        images: safeImages
      };
    });
  }, []);

  const setGalleryImagesLoading = useCallback((loading) => {
    setState(prev => ({ ...prev, loading }));
  }, []);

  const setDeleteActivate = useCallback((activate) => {
    setState(prev => ({ ...prev, deleteActivate: activate }));
  }, []);


  useEffect(() => {
    if (!setTotalGalleryImages) return;

    (async () => {
      try {
        setGalleryImagesLoading(true);
        const res = await axios({
          method: "get",
          url: "/api/gallery",
        })

        const data = res.data;
        const images = Array.isArray(data?.galleryImages) ? data.galleryImages : [];

        console.log("API Response:", data);
        console.log("Extracted images:", images);

        setGalleryImages(images);
        setTotalGalleryImages(images.length);
        localStorage.setItem("galleryImagesCount", images.length);

      } catch (err) {
        console.error("Gallery fetch error:", err);
        setGalleryImages([]);
        showError?.("Failed to load gallery images");
      } finally {
        setGalleryImagesLoading(false);
      }
    })()
  }, [setTotalGalleryImages, setGalleryImages, setGalleryImagesLoading, showError])


  const handleGalleryImageDelete = async (image) => {
    if (!token) {
      showError?.("Authentication required");
      return;
    }

    try {
      const res = await axios({
        url: `${process.env.REACT_APP_BACKEND_URL}/api/gallery/delete/${image._id}`,
        method: "delete",
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })

      setGalleryImages(prev => prev.filter(img => img._id !== image._id));

      const data = res.data;

      if (data?.error) {
        showError?.(data.error);
        return;
      }

      if (setTotalGalleryImages) {
        setTotalGalleryImages(prev => {
          const newCount = Math.max(0, (prev || 1) - 1);
          localStorage.setItem("galleryImagesCount", newCount);
          return newCount;
        });
      }

      showSuccess?.(data?.success || "Image deleted successfully");

    } catch (err) {
      console.error("Delete error:", err);
      showError?.(err.message || "Failed to delete image");
    }
  }

  // Extract from state
  const { images, loading, deleteActivate } = state;

  if (loading) {
    return <Flex h={"50px"} justifyContent={"center"} alignItems={"center"} >
      <Spinner size={"xl"} />
    </Flex>
  }

  if (!contextValue) {
    return <div className='text-center p-4 text-red-500'>
      Context not initialized
    </div>
  }

  return (
    <div className='scroller w-[100%] p-2 relative h-[100%] overflow-scroll'>

      <div className='flex justify-center items-center w-[100%]'>
        <DeleteButton setDeleteActivate={setDeleteActivate} deleteActivate={deleteActivate} />
      </div>

      <Flex flexWrap={"wrap"} gap={"20px"} justifyContent={"center"} alignItems={"center"} >
        {images.map((gallery, index) => {
          if (!gallery) return null;

          return <div key={gallery._id || index} className='shadow-lg transition-all duration-500 flex-wrap lg:max-w-[350px] max-w-[300px] rounded-md mt-[20px]' >

            <MdCancel
              onClick={() => handleGalleryImageDelete(gallery)}
              cursor={"pointer"}
              className={`${deleteActivate ? "block" : "hidden"} ml-auto`}
              size={"25px"}
            />

            <div className='h-[100%] w-[100%]'>
              <img className='rounded-md' src={gallery.img} alt={gallery.img || 'Gallery image'} />
            </div>

          </div>
        })}

        {images.length === 0 && (
          <div className='text-center p-4 text-gray-500'>
            No gallery images available
          </div>
        )}
      </Flex>

      <GalleryUpload
        setTotalGalleryImages={setTotalGalleryImages}
        setGalleryImages={setGalleryImages}
        galleryImages={images}
      />

    </div>
  )
}

export default Gallery
