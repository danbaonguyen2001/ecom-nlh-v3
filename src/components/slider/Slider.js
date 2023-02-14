import React, { useState } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

const url = [
  "https://cdn.tgdd.vn/Products/Images/42/269831/Slider/SLIDE5-1020x570.jpg",
  "https://cdn.tgdd.vn/Products/Images/42/269831/Slider/note-110-1020x570.jpeg",
  "https://cdn.tgdd.vn/Products/Images/42/269831/Slider/SLIDE5-1020x570.jpg",
  "https://cdn.tgdd.vn/Products/Images/42/269831/Slider/note-110-1020x570.jpeg",
];

const size = {
  width: "600px",
  height: "450px",
};
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const Slider = () => {
  const [curIndex, setCurIndex] = useState(0);

  const precvSlider = () => {
    const isFirstIndex = curIndex === 0;
    const nextIndex = isFirstIndex ? url.length - 1 : curIndex - 1;
    setCurIndex(nextIndex);
  };

  const nextSlider = () => {
    const isLastIndex = curIndex === url.length - 1;
    const nextIndex = isLastIndex ? 0 : curIndex + 1;
    setCurIndex(nextIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurIndex(slideIndex);
  };
  return (
    <div
      style={{ width: `${size.width}`, height: `${size.height}` }}
      className="max-w-[1400px]  m-auto relative group pb-8"
    >
      <div
        style={{ backgroundImage: `url(${url[curIndex]})` }}
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
      ></div>

      {/* Left arrow */}
      <div
        className="hidden group-hover:block absolute top-[50%] -translate-x-0 -translate-y-[-50%] left-5 text-2xl 
      rounded-full p-2 bg-black/20 text-white cursor-pointer opacity-70 hover:opacity-100 hover:bg-black/50"
      >
        <BsChevronLeft onClick={precvSlider} size={30} />
      </div>
      {/* Right arrow */}
      <div
        className="hidden group-hover:block absolute top-[50%] -translate-x-0 -translate-y-[-50%] right-5 text-2xl 
      rounded-full p-2 bg-black/20 text-white cursor-pointer opacity-70 hover:opacity-100 hover:bg-black/50"
      >
        <BsChevronRight onClick={nextSlider} size={30} />
      </div>
      <div className="flex top-4 justify-center py-2 ">
        {url.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            className={classNames(
              slideIndex === curIndex
                ? "text-2xl opacity-40"
                : "text-2xl cursor-pointer"
            )}
          >
            <RxDotFilled onClick={() => goToSlide(slideIndex)} size={20} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
