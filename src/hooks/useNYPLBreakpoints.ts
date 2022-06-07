import { useMediaQuery } from "@chakra-ui/react";

/**
 * This hook is used to determine if the current screen size is larger than
 * the specific NYPL breakpoint values. The returned value is an object with
 * boolean values for each breakpoint.
 */
const useNYPLBreakpoints = () => {
  const [
    isLargerThanSmall,
    isLargerThanMedium,
    isLargerThanLarge,
    isLargerThanXLarge,
  ] = useMediaQuery([
    "(min-width: 320px)",
    "(min-width: 600px)",
    "(min-width: 960px)",
    "(min-width: 1280px)",
  ]);

  return {
    isLargerThanSmall,
    isLargerThanMedium,
    // NYPL uses the medium 600px breakpoint to determine if the screen is
    // in the mobile view. This is the recommended boolean value to use.
    isLargerThanMobile: isLargerThanMedium,
    isLargerThanLarge,
    isLargerThanXLarge,
  };
};

export default useNYPLBreakpoints;
