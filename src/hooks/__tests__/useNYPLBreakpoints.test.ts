import { act, renderHook } from "@testing-library/react-hooks";
import useNYPLBreakpoints from "../useNYPLBreakpoints";

describe("useNYPLBreakpoints", () => {
  beforeAll(() => {
    window.resizeTo = function resizeTo(width, height) {
      Object.assign(this, {
        innerWidth: width,
        innerHeight: height,
        outerWidth: width,
        outerHeight: height,
      }).dispatchEvent(new this.Event("resize"));
    };
  });

  it("should report the correct media query match on window resize", () => {
    const { result } = renderHook(() => useNYPLBreakpoints());

    act(() => window.resizeTo(300, 600));
    expect(result.current).toEqual({
      isLargerThanSmall: false,
      isLargerThanMedium: false,
      isLargerThanMobile: false,
      isLargerThanLarge: false,
      isLargerThanXLarge: false,
    });

    act(() => window.resizeTo(360, 600));
    expect(result.current).toEqual({
      isLargerThanSmall: true,
      isLargerThanMedium: false,
      isLargerThanMobile: false,
      isLargerThanLarge: false,
      isLargerThanXLarge: false,
    });

    act(() => window.resizeTo(736, 600));
    expect(result.current).toEqual({
      isLargerThanSmall: true,
      isLargerThanMedium: true,
      isLargerThanMobile: true,
      isLargerThanLarge: false,
      isLargerThanXLarge: false,
    });

    act(() => window.resizeTo(1000, 600));
    expect(result.current).toEqual({
      isLargerThanSmall: true,
      isLargerThanMedium: true,
      isLargerThanMobile: true,
      isLargerThanLarge: true,
      isLargerThanXLarge: false,
    });

    act(() => window.resizeTo(1300, 600));
    expect(result.current).toEqual({
      isLargerThanSmall: true,
      isLargerThanMedium: true,
      isLargerThanMobile: true,
      isLargerThanLarge: true,
      isLargerThanXLarge: true,
    });
  });
});
