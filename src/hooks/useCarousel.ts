import React from "react";

// https://codesandbox.io/s/fxjeo

const useCarouselStyles = (length = 0) => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const slidesCount = length;

  const prevSlide = () => {
    setCurrentSlide((s) => (s === 0 ? slidesCount - 1 : s - 1));
  };
  const nextSlide = () => {
    setCurrentSlide((s) => (s === slidesCount - 1 ? 0 : s + 1));
  };
  const carouselStyle = {
    transition: "all .5s",
    // Arbitrary value of 40 for now.
    ml: `-${currentSlide * 40}%`,
    overflow: "hidden",
    paddingLeft: "40px",
  };

  return { prevSlide, nextSlide, carouselStyle };
};

export default useCarouselStyles;
