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
  borderColor: "v5.border.subtle.neutral.muted",
  padding: "v5.s",
};
const imagePaddingBottomStyles = {
  landscape: "50%",
  portrait: "133%",
  square: "100%",
};
const imageRowHeightStyles = {
  landscape: "110px",
  portrait: "294px",
  square: "220px",
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
    row: definePartsStyle(
      ({ imageAspectRatio, showImage }: SkeletonLoaderBaseStyle) => ({
        base: {
          alignItems: "flex-start",
          display: { md: "flex" },
        },
        button: {
          margin: { md: "0" },
        },
        container: {
          marginStart: showImage ? { md: "v5.m" } : null,
          marginTop: { md: "0" },
        },
        image: {
          overflow: { md: "visible" },
          paddingBottom: { md: "0" },
          position: { md: "relative" },
          width: { md: "220px" },
          height: { md: imageRowHeightStyles[imageAspectRatio] },
        },
      })
    ),
  },
});

export default SkeletonLoader;
