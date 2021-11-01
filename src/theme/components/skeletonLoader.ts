import { keyframes } from "@chakra-ui/system";

const element = {
  borderRadius: "2px",
  boxSizing: "border-box",
  marginBottom: "xs",
};
const borderRules = {
  border: "1px solid",
  borderColor: "ui.gray.light-cool",
  padding: "s",
};
const imagePaddingBottomStyles = {
  default: "100%",
  landscape: "50%",
  portrait: "200%",
  square: "100%",
};
const imageRowHeightStyles = {
  default: "0",
  landscape: "110px",
  portrait: "440px",
  square: "220px",
};
// NYPL's skeleton loader component.
const SkeletonLoader = {
  parts: ["section", "image", "container", "heading", "content", "button"],
  baseStyle: ({ border, imageAspectRatio }) => {
    const borderStyles = border ? { ...borderRules } : {};

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
    row: ({ imageAspectRatio }) => ({
      display: { md: "flex" },
      section: {
        marginRight: { md: "m" },
      },
      image: {
        overflow: { md: "visible" },
        paddingBottom: { md: "0" },
        position: { md: "relative" },
        width: { md: "220px" },
        height: { md: imageRowHeightStyles[imageAspectRatio] },
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
    ["50%"]: { opacity: 0.7 },
    to: { opacity: 0.9 },
  });
// Overriding Chakra's Skeleton animation.
const Skeleton = {
  baseStyle: {
    borderRadius: "2px",
    background: "ui.gray.light-warm",
    animation: `${fade()} 1000ms cubic-bezier(0.25, -0.5, 1, 0) infinite`,
  },
};

export { Skeleton, SkeletonLoader };
