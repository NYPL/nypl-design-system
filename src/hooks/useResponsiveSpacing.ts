import { responsiveSpacing } from "../theme/components/global";

/**
 * A custom hook This hook returns responsive gap and padding values that align
 * with NYPL design standards for responsive grids and columns. The values will
 * adjust based on the width of the viewport.
 */
function useResponsiveSpacing() {
  return {
    responsiveGap: responsiveSpacing.gridGap,
    responsiveMargin: responsiveSpacing.margin,
    responsivePadding: responsiveSpacing.padding,
  };
}

export default useResponsiveSpacing;
