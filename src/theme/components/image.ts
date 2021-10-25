const imageWrap = {
  position: "relative",
  width: "100%",
  height: "auto",
  overflow: "hidden",
};
const sideMarginsAuto = {
  marginLeft: "auto",
  marginRight: "auto",
};
const imageSizes = {
  default: {
    maxWidth: "100%",
  },
  small: {
    ...sideMarginsAuto,
    maxWidth: "165px",
  },
  medium: {
    ...sideMarginsAuto,
    maxWidth: "225px",
  },
  large: {
    ...sideMarginsAuto,
    maxWidth: "360px",
  },
};
const imageRatios = {
  "four-by-three": {
    ...imageWrap,
    paddingBottom: "75%",
  },
  "one-by-two": {
    ...imageWrap,
    paddingBottom: "200%",
  },
  original: {
    ...imageWrap,
  },
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
  baseStyle: ({ size = "default" }) => ({
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
      boxSizing: "border-box",
      objectFit: "cover",
      position: "relative",
      width: "100%",
      ...imageSizes[size],
    },
    captionWrappers: {
      marginBottom: "xxs",
      fontSize: "-1",
    },
  }),
};
const CustomImageWrapper = {
  baseStyle: ({ ratio = "original" }) => ({
    ...imageRatios[ratio],
    img: {
      width: "100%",
      height: "100%",
      position: "absolute",
      top: "0",
      left: "0",
    },
  }),
};

export { CustomImage, CustomImageWrapper };
