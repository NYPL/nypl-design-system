import { keyframes } from "@chakra-ui/system";

interface SkeletonLoaderBaseStyle {
  imageAspectRatio: keyof typeof imagePaddingBottomStyles;
  isBordered: boolean;
  showImage?: boolean;
}

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
  }
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
// NYPL's skeleton loader component.
const SkeletonLoader = {
  parts: ["section", "image", "container", "heading", "content", "button"],
  baseStyle: ({ imageAspectRatio, isBordered }: SkeletonLoaderBaseStyle) => {
    const borderStyles = isBordered ? { ...borderRules } : {};

    return {
      margin: "auto",
      width: "100%",
      ...borderStyles,
      section: {
        marginBottom: "s",
        _last: {
          marginBottom: "0",
        },
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
      container: {
        marginTop: "s",
        width: "100%",
      },
      heading: {
        ...element,
        height: "32px",
      },
      content: {
        ...element,
        height: "20px",
      },
      button: {
        height: "32px",
        margin: "auto",
        maxWidth: "160px",
        width: "100%",
      },
    };
  },
  variants: {
    row: ({ imageAspectRatio, showImage }: SkeletonLoaderBaseStyle) => ({
      alignItems: "flex-start",
      display: { md: "flex" },
      image: {
        overflow: { md: "visible" },
        paddingBottom: { md: "0" },
        position: { md: "relative" },
        width: { md: "220px" },
        height: { md: imageRowHeightStyles[imageAspectRatio] },
      },
      container: {
        marginStart: showImage ? { md: "m" } : null,
        marginTop: { md: "0" },
      },
      button: {
        margin: { md: "0" },
      },
    }),
  },
};

// Fade animation
const fade = () =>
  keyframes({
    from: { opacity: 0.9 },
    "50%": { opacity: 0.7 },
    to: { opacity: 0.9 },
  });
// Overriding Chakra's Skeleton animation.
const Skeleton = {
  baseStyle: {
    borderRadius: "2px",
    bg: "ui.gray.light-cool",
    animation: `${fade()} 1000ms cubic-bezier(0.25, -0.5, 1, 0) infinite`,
    _dark: {
      bg: "dark.ui.bg.hover",
    },
  },
};

export { Skeleton, SkeletonLoader };
