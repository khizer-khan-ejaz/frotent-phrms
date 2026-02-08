import React, { useContext, useState, useEffect } from 'react'
import GalleryUpload from './GalleryUpload'
import axios from 'axios';
import { Flex, Spinner } from '@chakra-ui/react';
import { Context } from '../../context/Context';
import DeleteButton from "./DeleteButton";
import { MdCancel } from "react-icons/md";
import useToast from "../../hooks/useToast";


const Gallery = () => {
  const { showSuccess, showError } = useToast();
  const [galleryImages, setGalleryImages] = useState([]);
  const [galleryImagesLoading, setGalleryImagesLoading] = useState(false);
  const [deleteActivate, setDeleteActivate] = useState(false);
  const contextValue = useContext(Context);
  const { setTotalGalleryImages, user } = contextValue || {};
  const token = user?.token;

  // CRITICAL: Wrapper function to ensure state is NEVER undefined
  const setSafeGalleryImages = (value) => {
    if (typeof value === 'function') {
      setGalleryImages(prev => {
        const result = value(Array.isArray(prev) ? prev : []);
        return Array.isArray(result) ? result : [];
      });
    } else {
      setGalleryImages(Array.isArray(value) ? value : []);
    }
  };

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

        setSafeGalleryImages(images);
        setTotalGalleryImages(images.length);
        localStorage.setItem("galleryImagesCount", images.length);

      } catch (err) {
        console.error("Gallery fetch error:", err);
        setSafeGalleryImages([]);
        showError?.("Failed to load gallery images");
      } finally {
        setGalleryImagesLoading(false);
      }
    })()
  }, [setTotalGalleryImages])


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

      // Use safe setter
      setSafeGalleryImages(prev => prev.filter(img => img._id !== image._id));

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

  // Force galleryImages to always be an array before render
  const safeGalleryImages = Array.isArray(galleryImages) ? galleryImages : [];

  if (galleryImagesLoading) {
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
        {/* USE safeGalleryImages instead of galleryImages */}
        {safeGalleryImages.map((gallery, index) => {
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

        {safeGalleryImages.length === 0 && (
          <div className='text-center p-4 text-gray-500'>
            No gallery images available
          </div>
        )}
      </Flex>

      <GalleryUpload
        setTotalGalleryImages={setTotalGalleryImages}
        setGalleryImages={setSafeGalleryImages}
        galleryImages={safeGalleryImages}
      />

    </div>
  )
}

export default Gallery
