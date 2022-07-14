import { renderHook, act } from "@testing-library/react-hooks";
import useCarouselStyles from "../useCarouselStyles";

describe("useCarouselStyles hook", () => {
  it("returns two functions and a CSS style object", () => {
    const { result } = renderHook(() => useCarouselStyles());

    expect(typeof result.current.nextSlide).toEqual("function");
    expect(typeof result.current.prevSlide).toEqual("function");
    expect(result.current.carouselStyle).toEqual({
      marginStart: "-0%",
      transition: "all .5s",
    });
  });

  it("updates the style object when the nextSlide function is clicked", () => {
    // Mocking we have an array of five slides.
    const slides = [1, 2, 3, 4, 5];
    const { result } = renderHook(() => useCarouselStyles(slides.length));
    const nextSlide = result.current.nextSlide;

    // Start at the first slide.
    expect(result.current.carouselStyle).toEqual({
      marginStart: "-0%",
      transition: "all .5s",
    });

    act(() => nextSlide());
    // Each slide takes up a width of 100% by default.
    // So now we move by 100% to the left for the next slide.
    expect(result.current.carouselStyle).toEqual({
      marginStart: "-100%",
      transition: "all .5s",
    });

    act(() => nextSlide());
    // Move on to the next slide.
    expect(result.current.carouselStyle).toEqual({
      marginStart: "-200%",
      transition: "all .5s",
    });

    // We now click through all five slides and we expect to wrap around
    // back to the first slide which starts at "-0%" (the negative value
    // is set for direction but -0 is still 0).
    act(() => nextSlide());
    act(() => nextSlide());
    act(() => nextSlide());
    expect(result.current.carouselStyle).toEqual({
      marginStart: "-0%",
      transition: "all .5s",
    });
  });

  it("updates the style object when the prevSlide function is clicked", () => {
    // Mocking we have an array of five slides.
    const slides = [1, 2, 3, 4, 5];
    const { result } = renderHook(() => useCarouselStyles(slides.length));
    const prevSlide = result.current.prevSlide;

    // Start at the first slide.
    expect(result.current.carouselStyle).toEqual({
      marginStart: "-0%",
      transition: "all .5s",
    });

    act(() => prevSlide());
    // We started on the first slide and nwo we expect to wrap around
    // to the last element.
    expect(result.current.carouselStyle).toEqual({
      marginStart: "-400%",
      transition: "all .5s",
    });

    act(() => prevSlide());
    // Move on to the previous slide.
    expect(result.current.carouselStyle).toEqual({
      marginStart: "-300%",
      transition: "all .5s",
    });

    // We now clicked through all five slides and we expect to
    // be at the first slide.
    act(() => prevSlide());
    act(() => prevSlide());
    act(() => prevSlide());
    expect(result.current.carouselStyle).toEqual({
      marginStart: "-0%",
      transition: "all .5s",
    });
  });

  it("resets the slide back to the first slide", () => {
    // Mocking we have an array of five slides.
    const slides = [1, 2, 3, 4, 5];
    const { result } = renderHook(() => useCarouselStyles(slides.length));
    const { nextSlide, goToStart } = result.current;

    // Start at the first slide.
    expect(result.current.carouselStyle).toEqual({
      marginStart: "-0%",
      transition: "all .5s",
    });

    // Move on to the third slide.
    act(() => nextSlide());
    act(() => nextSlide());
    act(() => nextSlide());
    expect(result.current.carouselStyle).toEqual({
      marginStart: "-300%",
      transition: "all .5s",
    });

    act(() => goToStart());
    expect(result.current.carouselStyle).toEqual({
      marginStart: "-0%",
      transition: "all .5s",
    });
  });

  it("can set a custom slide count and slide width", () => {
    const slides = [1, 2, 3];
    const slideWidth = 50;
    const { result } = renderHook(() =>
      useCarouselStyles(slides.length, slideWidth)
    );

    expect(result.current.carouselStyle).toEqual({
      marginStart: "-0%",
      transition: "all .5s",
    });

    act(() => result.current.nextSlide());
    // Since each slide is of length 50, we expect to move by a 50%.
    expect(result.current.carouselStyle).toEqual({
      marginStart: "-50%",
      transition: "all .5s",
    });
  });
});
