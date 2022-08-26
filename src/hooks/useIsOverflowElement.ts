import { useEffect, useRef, useState } from "react";

/**
 * useIsOverflowElement checks whether an element overflows its container. The
 * element that needs to be checked must use the `overflowRef` value that is
 * returned by this hook. The `isOverflow` value will be true if the element
 * does overflow its container.
 */
export const useIsOverflowElement = () => {
  const overflowRef = useRef<any>();
  const [isOverflow, setIsOverflow] = useState<boolean>(false);

  useEffect(() => {
    if (overflowRef.current?.offsetWidth < overflowRef.current?.scrollWidth) {
      setIsOverflow(true);
    }
  }, []);

  return { isOverflow, overflowRef };
};

export default useIsOverflowElement;
