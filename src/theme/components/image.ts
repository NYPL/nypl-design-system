const imageWrap = {
  boxSizing: "border-box",
  overflow: "hidden",
  paddingBottom: "100%",
  position: "relative",
  width: "100%",
};
const sideMarginsAuto = {
  marginLeft: "auto",
  marginRight: "auto",
};
const imageSizes = {
  default: {},
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
      maxWidth: "100%",
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
const CustomImageWrapper = {
  parts: ["size", "ratio"],
  baseStyle: ({ size = "default", ratio = "original" }) => {
    const updatedSize = imageSizes[size];
    const updatedRatio = imageRatios[ratio];

    return {
      size: {
        marginBottom: "s",
        width: "100%",
        ...updatedSize,
      },
      ratio: {
        // Only update the height of the image element
        // when the aspect ratio is modified.
        img: ratio !== "original" ? { height: "100%" } : null,
        ...updatedRatio,
      },
    };
  },
};

export { CustomImage, CustomImageWrapper };
