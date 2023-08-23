import Image from "next/image";
import { useState } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

const Carousel = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const handlePrevClick = () => {
    if (currentImage === 0) {
      setCurrentImage(images.length - 1);
    } else {
      setCurrentImage(currentImage - 1);
    }
  };

  const handleNextClick = () => {
    if (currentImage === images.length - 1) {
      setCurrentImage(0);
    } else {
      setCurrentImage(currentImage + 1);
    }
  };

  const setImageIndex = (index) => {
    setCurrentImage(index);
  };

  return (
    <div className="flex justify-center items-center w-full">
      <div className="relative">
        <div
          className="rounded-full hover:border bg-sh-dark-500 absolute top-1/2 left-1 transform -translate-y-1/2 z-10 cursor-default"
          onClick={handlePrevClick}
        >
          <HiChevronLeft size={30} />
        </div>
        <div className="flex justify-center items-center p-0">
          <Image
            src={images[currentImage]}
            objectFit="cover"
            alt=""
            width={4000}
            height={3000}
            className="rounded-lg"
          />
        </div>
        <div
          className="rounded-full hover:border bg-sh-dark-500 absolute top-1/2 right-1 transform -translate-y-1/2 z-10 cursor-default"
          onClick={handleNextClick}
        >
          <HiChevronRight size={30} />
        </div>
        <div className="absolute bottom-2 left-0 right-0 flex justify-center space-x-2">
          {images.map((image, index) => (
            <div
              key={index}
              onClick={() => setImageIndex(index)}
              className={`w-1.5 h-1.5 rounded-full ${
                index === currentImage ? "bg-white" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
