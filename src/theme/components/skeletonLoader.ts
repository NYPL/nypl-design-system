import { keyframes } from "@chakra-ui/system";
import { createMultiStyleConfigHelpers } from "@chakra-ui/styled-system";
import { StyleFunctionProps } from "@chakra-ui/system";
import { responsiveSpacing } from "./global";

interface SkeletonLoaderBaseStyle extends StyleFunctionProps {
  imageAspectRatio: keyof typeof imagePaddingBottomStyles;
  isBordered: boolean;
  showImage?: boolean;
}

const { defineMultiStyleConfig, definePartsStyle } =
  createMultiStyleConfigHelpers([
    "base",
    "button",
    "content",
    "contentContainer",
    "heading",
    "image",
    "imageContainer",
    "loader",
    "section",
  ]);

const element = {
  borderRadius: "v5.faint",
  boxSizing: "border-box",
  marginBottom: "v5.density.condensed",
};
const borderRules = {
  border: "1px solid",
  borderColor: "v5.border.subtle.neutral.emphasis",
  borderRadius: "v5.softer",
  padding: "v5.inset.normal",
};
const imagePaddingBottomStyles = {
  landscape: "50%",
  portrait: "133%",
  square: "100%",
};
// Fade animation
const fade = () =>
  keyframes({
    from: { opacity: 0.9 },
    "50%": { opacity: 0.7 },
    to: { opacity: 0.9 },
  });

// NYPL's skeleton loader component.
const SkeletonLoader = defineMultiStyleConfig({
  baseStyle: definePartsStyle(
    ({ imageAspectRatio, isBordered }: SkeletonLoaderBaseStyle) => {
      const borderStyles = isBordered ? { ...borderRules } : {};

      return {
        base: {
          margin: "auto",
          width: "100%",
          ...borderStyles,
        },
        button: {
          borderRadius: "v5.button.rounded",
          height: "40px",
          maxWidth: "160px",
          overflow: "hidden",
          width: "100%",
        },
        contentContainer: {
          marginTop: "v5.density.normal",
          width: "100%",
        },
        content: {
          ...element,
          height: "16px",
        },
        heading: {
          ...element,
          height: "32px",
        },
        image: {
          ...element,
          flexShrink: "0",
          height: "0",
          overflow: "hidden",
          paddingBottom: imagePaddingBottomStyles[imageAspectRatio],
          position: "relative",
          width: "100%",
        },
        loader: {
          borderRadius: "v5.faint",
          bg: "v5.surface.subtle.neutral.default",
          animation: `${fade()} 1000ms cubic-bezier(0.25, -0.5, 1, 0) infinite`,
        },
        section: {
          marginBottom: "v5.density.normal",
          _last: {
            marginBottom: "0",
          },
        },
      };
    }
  ),
  variants: {
    // The component only applies the row variant from the md breakpoint up
    // (it always uses the column layout below md), so these styles don't
    // need their own breakpoints. The row layout uses a 12-column grid: the
    // image spans 4 columns and the content spans the remaining 8 (or all
    // 12 when there's no image). The image height comes from its aspect
    // ratio, so it scales with the column width.
    row: definePartsStyle(({ showImage }: SkeletonLoaderBaseStyle) => ({
      base: {
        alignItems: "start",
        columnGap: responsiveSpacing.gridGap,
        display: "grid",
        gridTemplateColumns: "repeat(12, minmax(0, 1fr))",
      },
      button: {
        margin: "0",
      },
      contentContainer: {
        gridColumn: showImage ? "span 8" : "1 / -1",
        marginTop: "0",
      },
      image: {
        // A grid item doesn't collapse its child's margin, so remove it to
        // keep the image skeleton at its true aspect ratio.
        marginBottom: "0",
      },
      imageContainer: {
        gridColumn: "span 4",
      },
    })),
  },
});

export default SkeletonLoader;
