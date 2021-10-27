import React from "react";

interface WindowSize {
  width: number;
  height: number;
}

/**
 * React hook used to get the window size on device resizing.
 * Based on https://usehooks-typescript.com/react-hook/use-window-size
 */
function useWindowSize(): WindowSize {
  const [windowSize, setWindowSize] = React.useState<WindowSize>({
    width: 0,
    height: 0,
  });

  React.useEffect(() => {
    const handler = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Set size at the first client-side load
    handler();

    window.addEventListener("resize", handler);

    // Remove event listener on cleanup
    return () => {
      window.removeEventListener("resize", handler);
    };
  }, []);

  return windowSize;
}

export default useWindowSize;
