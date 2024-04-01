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
  borderRadius: "2px",
  boxSizing: "border-box",
  marginBottom: "xs",
};
const borderRules = {
  border: "1px solid",
  borderColor: "ui.gray.x-light-cool",
  padding: "s",
  _dark: {
    borderColor: "ui.gray.xx-dark",
  },
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
          height: "32px",
          margin: "auto",
          maxWidth: "160px",
          width: "100%",
        },
        container: {
          marginTop: "s",
          width: "100%",
        },
        content: {
          ...element,
          height: "20px",
        },
        heading: {
          ...element,
          height: "32px",
        },
        image: {
          ...element,
          boxSizing: "border-box",
          flexShrink: "0",
          height: "0",
          overflow: "hidden",
          paddingBottom: imagePaddingBottomStyles[imageAspectRatio],
          position: "relative",
          width: "100%",
        },
        loader: {
          borderRadius: "2px",
          bg: "ui.gray.light-cool",
          animation: `${fade()} 1000ms cubic-bezier(0.25, -0.5, 1, 0) infinite`,
          _dark: {
            bg: "dark.ui.bg.hover",
          },
        },
        section: {
          marginBottom: "s",
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
          marginStart: showImage ? { md: "m" } : null,
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
