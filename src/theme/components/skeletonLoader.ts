import { keyframes } from "@chakra-ui/system";
import { createMultiStyleConfigHelpers } from "@chakra-ui/styled-system";
import { StyleFunctionProps } from "@chakra-ui/system";

interface SkeletonLoaderBaseStyle extends StyleFunctionProps {
  imageAspectRatio: keyof typeof imagePaddingBottomStyles;
  isBordered: boolean;
  showImage?: boolean;
}

const { defineMultiStyleConfig, definePartsStyle } =
  createMultiStyleConfigHelpers([
    "base",
    "button",
    "container",
    "content",
    "heading",
    "image",
    "imageContainer",
    "loader",
    "section",
  ]);

const element = {
  borderRadius: "v5.faint",
  boxSizing: "border-box",
  marginBottom: "v5.xs",
};
const borderRules = {
  border: "1px solid",
  borderColor: "v5.border.subtle.neutral.emphasis",
  borderRadius: "v5.softer",
  padding: "v5.s",
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
        container: {
          marginTop: "v5.s",
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
          marginBottom: "v5.s",
          _last: {
            marginBottom: "0",
          },
        },
      };
    }
  ),
  variants: {
    // From the md breakpoint up, the row layout uses a 12-column grid: the
    // image spans 4 columns and the content spans the remaining 8 (or all
    // 12 when there's no image). The image height comes from its aspect
    // ratio, so it scales with the column width.
    row: definePartsStyle(({ showImage }: SkeletonLoaderBaseStyle) => ({
      base: {
        alignItems: "start",
        columnGap: {
          md: "v5.grid.gap.normal.tablet",
          xl: "v5.grid.gap.normal.desktop",
        },
        display: { md: "grid" },
        gridTemplateColumns: { md: "repeat(12, minmax(0, 1fr))" },
      },
      button: {
        margin: { md: "0" },
      },
      container: {
        gridColumn: { md: showImage ? "span 8" : "1 / -1" },
        marginTop: { md: "0" },
      },
      image: {
        // A grid item doesn't collapse its child's margin, so remove it to
        // keep the image skeleton at its true aspect ratio.
        marginBottom: { md: "0" },
      },
      imageContainer: {
        gridColumn: { md: "span 4" },
      },
    })),
  },
});

export default SkeletonLoader;
