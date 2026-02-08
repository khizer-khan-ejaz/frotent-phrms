import { Flex, Spinner } from '@chakra-ui/react';
import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { MdCancel } from "react-icons/md";
import { Context } from '../../context/Context';
import useToast from "../../hooks/useToast";
import DeleteButton from "./DeleteButton";
import GalleryUpload from './GalleryUpload';


const Gallery = () => {
  const { showSuccess, showError } = useToast();
  const [galleryImages, setGalleryImages] = useState([]);
  const [galleryImagesLoading, setGalleryImagesLoading] = useState(false);
  const [deleteActivate, setDeleteActivate] = useState(false);
  const { setTotalGalleryImages, user } = useContext(Context);
  const token = user.token;


  useEffect(() => {
    (async () => {
      try {
        setGalleryImagesLoading(true);
        const res = await axios({
          method: "get",
          // url: "https://phrmsbackend.vercel.app/api/gallery",
          url: "/api/gallery",
        })

        const data = res.data;

        // Add validation and fallback
        const images = data?.galleryImages || [];
        setGalleryImages(images);
        setTotalGalleryImages(images.length);
        localStorage.setItem("galleryImagesCount", images.length);

      } catch (err) {
        console.log(err.message);
        // Ensure state remains an array even on error
        setGalleryImages([]);
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

      setGalleryImages(prev => {
        // Add safety check
        if (!prev) return [];
        return prev.filter(img => img._id !== image._id)
      })

      const data = res.data;

      if (data.error) {
        showError(data.error);
        return;
      }

      setTotalGalleryImages(prev => {
        const newCount = prev - 1;
        localStorage.setItem("galleryImagesCount", newCount);
        return newCount;
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


  return (
    <div className='scroller w-[100%] p-2 relative h-[100%] overflow-scroll'>

      <div className='flex justify-center items-center w-[100%]'>
        <DeleteButton setDeleteActivate={setDeleteActivate} deleteActivate={deleteActivate} />
      </div>

      <Flex flexWrap={"wrap"} gap={"20px"} justifyContent={"center"} alignItems={"center"} >
        {/* Add safety check with optional chaining and fallback */}
        {(galleryImages || []).map((gallery, index) => {
          return <div key={index} className='shadow-lg transition-all duration-500 flex-wrap lg:max-w-[350px] max-w-[300px] rounded-md mt-[20px]' >

            <MdCancel
              onClick={() => handleGalleryImageDelete(gallery)}
              cursor={"pointer"}
              className={`${deleteActivate ? "block" : "hidden"} ml-auto`}
              size={"25px"}
            />

            <div className='h-[100%] w-[100%]'>
              <img className='rounded-md' src={gallery.img} alt={gallery.img} />
            </div>

          </div>
        })}

        {/* Show message when no images */}
        {galleryImages.length === 0 && !galleryImagesLoading && (
          <div className='text-center p-4 text-gray-500'>
            No gallery images available
          </div>
        )}
      </Flex>

      <GalleryUpload
        setTotalGalleryImages={setTotalGalleryImages}
        setGalleryImages={setGalleryImages}
        galleryImages={galleryImages}
      />

    </div>
  )
}


export default Gallery
