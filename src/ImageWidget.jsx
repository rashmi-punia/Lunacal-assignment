import React, { useCallback, useState } from "react";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { SiWindows11 } from "react-icons/si";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

const ImageWidget = () => {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);


  console.log(images);
  
  const handleAddImage = (e) => {
    const files = Array.from(e.target.files);
    const newImages = files.map((file) => URL.createObjectURL(file));
    setImages((prev) => [...prev, ...newImages]);
  };
  const handleNext=()=>{
    if(currentIndex < images.length ){
      setCurrentIndex(currentIndex+1);
      
    }

  }
  const handlePrev=()=>{
    if(currentIndex > 0){
      setCurrentIndex(currentIndex - 1);

    }

  }

  return (
    <div className="rightBoxes w-full md:w-[720px] flex items-start gap-3 p-2">
      <div className="flex flex-col items-center gap-[105px] text-rd1text">
        <IoMdHelpCircleOutline className="size-8" />
        <SiWindows11 className="size-5 " />
      </div>
      <div className="w-full space-y-10">
        <div className="w-full flex justify-between items-center">
          <p className="bg-blackG rounded-[20px] box  py-3.5 px-6 font-semibold">Gallery</p>
          <div className="flex gap-4">
            <input
              type="file"
              id="file-input"
              multiple
              onChange={handleAddImage}
              className="hidden"
            />
            <label htmlFor="file-input" className="add_image uppercase font-semibold mr-4 flex justify-center items-center">
              + Add Image
            </label>
            <button
              onClick={handlePrev}
              className="slidebutton p-4 rounded-full"
              disabled={currentIndex === 0}
            >
              <FaArrowLeft />
            </button>
            <button
              disabled={currentIndex >= images.length}
              onClick={handleNext}
              className="slidebutton p-4 rounded-full"
            >
              <FaArrowRight />
            </button>
          </div>
        </div>

        <Images currentIndex={currentIndex} images={images} />
      </div>
    </div>
  );
};

export default ImageWidget;

const Images=({currentIndex,images})=>{
    return (
      <div className="overflow-hidden w-full">
        <div
          className="flex gap-8 transition-transform duration-300 grayscale"
          style={{ transform: `translateX(-${(currentIndex * 100) / 3}%)` }}
        >
          <img
            src="https://s3-alpha-sig.figma.com/img/2dff/d2b7/1745c822191edd472339021e67b723d0?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=D6H89TChaoFBeAlz1owe1RE3kzJ1~H0lf1CDbIGJgUxlr7znQ9nJO27KixQAYnEXlj1Xbxdd1R~UooNNkQavS5UjOyv0bClwaI5NvxIDARYiWu65rNhrufzA0QWjCPFAjqlHwFg8RYa~H5iOfxKXUSfumpvHaHu11oZKdVSdC-i63-4hevhtH2g52ggP40e6vImXrrAZCxD0~xqW18TY5pAgPOYElQxqv6wLa96VdgkAD63wENhVMXxh4Dhyp5BSe62HgKji~RwpxvdjZ41CxiKl5Mtpq1m3aPSGFmAnUmy8b3Qq1Tt-ANw00-9VBhT0GDOLNCqZL9vUnotAuX1dDw__"
            className="sm:w-48 sm:h-40 w-32 h-32 rounded-[24px] shrink-0 object-cover "
          />
          <img
            src="https://s3-alpha-sig.figma.com/img/2dff/d2b7/1745c822191edd472339021e67b723d0?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=D6H89TChaoFBeAlz1owe1RE3kzJ1~H0lf1CDbIGJgUxlr7znQ9nJO27KixQAYnEXlj1Xbxdd1R~UooNNkQavS5UjOyv0bClwaI5NvxIDARYiWu65rNhrufzA0QWjCPFAjqlHwFg8RYa~H5iOfxKXUSfumpvHaHu11oZKdVSdC-i63-4hevhtH2g52ggP40e6vImXrrAZCxD0~xqW18TY5pAgPOYElQxqv6wLa96VdgkAD63wENhVMXxh4Dhyp5BSe62HgKji~RwpxvdjZ41CxiKl5Mtpq1m3aPSGFmAnUmy8b3Qq1Tt-ANw00-9VBhT0GDOLNCqZL9vUnotAuX1dDw__"
            className="sm:w-48 sm:h-40 w-32 h-32 rounded-[24px] shrink-0 object-cover"
          />
          <img
            src="https://s3-alpha-sig.figma.com/img/2dff/d2b7/1745c822191edd472339021e67b723d0?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=D6H89TChaoFBeAlz1owe1RE3kzJ1~H0lf1CDbIGJgUxlr7znQ9nJO27KixQAYnEXlj1Xbxdd1R~UooNNkQavS5UjOyv0bClwaI5NvxIDARYiWu65rNhrufzA0QWjCPFAjqlHwFg8RYa~H5iOfxKXUSfumpvHaHu11oZKdVSdC-i63-4hevhtH2g52ggP40e6vImXrrAZCxD0~xqW18TY5pAgPOYElQxqv6wLa96VdgkAD63wENhVMXxh4Dhyp5BSe62HgKji~RwpxvdjZ41CxiKl5Mtpq1m3aPSGFmAnUmy8b3Qq1Tt-ANw00-9VBhT0GDOLNCqZL9vUnotAuX1dDw__"
            className="sm:w-48 sm:h-40 w-32 h-32 rounded-[24px] shrink-0 object-cover"
          />
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Slide ${index}`}
              className="sm:w-48 sm:h-40 w-32 h-32 rounded-[24px] shrink-0 object-cover"
            />
          ))}
        </div>
      </div>
    );
}
