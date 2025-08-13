/**
 * Custom hook that controls the sliding function for the carousel wrapper.
 * This returns functions to use for the "previous" and "next" buttons as well
 * as a CSS style object that should be use to transition between slides. There
 * is also a function to programmatically slide to the first slide.
 * Inspired by: https://codesandbox.io/s/fxjeo
 */
export declare const useCarouselStyles: (slidesCount?: number, slideWidth?: number) => {
    prevSlide: () => void;
    nextSlide: () => void;
    carouselStyle: {
        transition: string;
        marginStart: string;
    };
    goToStart: () => void;
};
export default useCarouselStyles;
