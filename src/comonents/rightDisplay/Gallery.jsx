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

        // FIX: Check if galleryImages exists and is an array
        if (data && Array.isArray(data.galleryImages)) {
          setGalleryImages(data.galleryImages);
          setTotalGalleryImages(data.galleryImages.length);
          localStorage.setItem("galleryImagesCount", data.galleryImages.length);
        } else {
          // If no data or invalid format, set empty array
          setGalleryImages([]);
          setTotalGalleryImages(0);
          localStorage.setItem("galleryImagesCount", 0);
        }

      } catch (err) {
        console.log(err.message);
        // On error, set empty array instead of leaving undefined
        setGalleryImages([]);
        setTotalGalleryImages(0);
        showError("Failed to load gallery images");
      } finally {
        setGalleryImagesLoading(false);
      }

    })()
  }, [setTotalGalleryImages])

  const handleGalleryImageDelete = async (image) => {
    try {
      const res = await axios({
        url: `${process.env.REACT_APP_BACKEND_URL}/api/gallery/delete/${image._id}`,
        method: "delete",
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })

      // FIX: Add safety check
      setGalleryImages(prev => {
        if (!Array.isArray(prev)) return [];
        return prev.filter(img => img._id !== image._id)
      })

      const data = res.data;

      if (data.error) {
        showError(data.error);
        return;
      }

      setTotalGalleryImages(prev => {
        localStorage.setItem("galleryImagesCount", prev - 1);
        return prev - 1
      });

      showSuccess(data.success);

    } catch (err) {
      console.log(err.message);
      showError(err.message);
    }
  }

  if (galleryImagesLoading) {
    return <Flex h={"50px"} justifyContent={"center"} alignItems={"center"} >
      <Spinner size={"xl"} />
    </Flex>
  }

  // FIX: Ensure galleryImages is always an array before rendering
  const safeGalleryImages = Array.isArray(galleryImages) ? galleryImages : [];

  return (
    <div className='scroller w-[100%] p-2 relative h-[100%] overflow-scroll'>

      <div className='flex justify-center items-center w-[100%]'>
        <DeleteButton setDeleteActivate={setDeleteActivate} deleteActivate={deleteActivate} />
      </div>

      <Flex flexWrap={"wrap"} gap={"20px"} justifyContent={"center"} alignItems={"center"} >
        {safeGalleryImages.map((gallery, index) => {
          return <div key={index} className='shadow-lg transition-all duration-500 flex-wrap lg:max-w-[350px] max-w-[300px] rounded-md mt-[20px]' >

            <MdCancel onClick={() => handleGalleryImageDelete(gallery)} cursor={"pointer"} className={`${deleteActivate ? "block" : "hidden"} ml-auto`} size={"25px"} />

            <div className='h-[100%] w-[100%]'>
              <img className='rounded-md' src={gallery.img} alt={gallery.img} />
            </div>

          </div>
        })}

        {safeGalleryImages.length === 0 && (
          <div className='text-center p-4 text-gray-500'>
            No gallery images available
          </div>
        )}
      </Flex>

      <GalleryUpload setTotalGalleryImages={setTotalGalleryImages} setGalleryImages={setGalleryImages} galleryImages={safeGalleryImages} />

    </div>
  )
}

export default Gallery
