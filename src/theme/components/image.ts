const imageWrap = {
  boxSizing: "border-box",
  height: "0",
  overflow: "hidden",
  paddingBottom: "100%",
  position: "relative",
  width: "100%",
};
const CustomImage = {
  parts: ["captionWrappers", "imgCrop"],
  variants: {
    circle: {
      img: {
        borderRadius: "50%",
      },
    },
  },
  baseStyle: {
    figure: {
      margin: "unset",
      img: {
        marginBottom: "xxs",
      },
      "> div": {
        margin: "unset",
      },
    },
    figcaption: {
      fontStyle: "italic",
    },
    img: {
      display: "block",
      height: "100%",
      maxWidth: "100%",
      // from card
      boxSizing: "border-box",
      objectFit: "cover",
      position: "relative",
      width: "100%",
    },
    imgCrop: {
      boxSizing: "border-box",
      height: "100%",
      left: "0",
      position: "absolute",
      top: "0",
      width: "100%",
    },
    captionWrappers: {
      marginBottom: "xxs",
      fontSize: "-1",
    },
  },
};
const ImageSizesWrapper = {
  variants: {
    default: {
      marginBottom: "s",
      width: "100%",
    },
    small: {
      marginBottom: "s",
      width: "100%",
      marginLeft: "auto",
      marginRight: "auto",
      maxWidth: "165px",
    },
    medium: {
      marginBottom: "s",
      width: "100%",
      marginLeft: "auto",
      marginRight: "auto",
      maxWidth: "225px",
    },
    large: {
      marginBottom: "s",
      width: "100%",
      marginLeft: "auto",
      marginRight: "auto",
      maxWidth: "360px",
    },
  },
};
const ImageAspectRatioWrapper = {
  variants: {
    "four-by-three": {
      ...imageWrap,
      paddingBottom: "75%",
    },
    "one-by-two": {
      ...imageWrap,
      paddingBottom: "200%",
    },
    original: { ...imageWrap },
    "sixteen-by-nine": {
      ...imageWrap,
      paddingBottom: "56.25%",
    },
    square: {
      ...imageWrap,
      paddingBottom: "100%",
    },
    "three-by-four": {
      ...imageWrap,
      paddingBottom: "133.33%",
    },
    "three-by-two": {
      ...imageWrap,
      paddingBottom: "66.66%",
    },
    "two-by-one": {
      ...imageWrap,
      paddingBottom: "50%",
    },
  },
};

export { CustomImage, ImageSizesWrapper, ImageAspectRatioWrapper };
