import React from "react";

/**
 * Custom hook that controls the sliding function for the carousel wrapper.
 * This returns functions to use for the "previous" and "next" buttons as well
 * as a CSS style object that should be use to transition between slides.
 * Inspired by: https://codesandbox.io/s/fxjeo
 */
const useCarouselStyles = (slidesCount = 0, slideWidth = 100) => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  // This wraps around to the last slide if this is invoked while the
  // first slide is active.
  const prevSlide = () => {
    setCurrentSlide((slide) => (slide === 0 ? slidesCount - 1 : slide - 1));
  };
  // This wraps around to the first slide if this is invoked while the
  // last slide is active.
  const nextSlide = () => {
    setCurrentSlide((slide) => (slide === slidesCount - 1 ? 0 : slide + 1));
  };
  // Updates the left margin for the carousel so the elements can
  // slide inside the container.
  const carouselStyle = {
    transition: "all .5s",
    marginLeft: `-${currentSlide * slideWidth}%`,
  };

  return { prevSlide, nextSlide, carouselStyle };
};

export default useCarouselStyles;
