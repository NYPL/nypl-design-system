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
  fourByThree: {
    ...imageWrap,
    paddingBottom: "75%",
  },
  oneByTwo: {
    ...imageWrap,
    paddingBottom: "200%",
  },
  original: {
    ...imageWrap,
  },
  sixteenByNine: {
    ...imageWrap,
    paddingBottom: "56.25%",
  },
  square: {
    ...imageWrap,
    paddingBottom: "100%",
  },
  threeByFour: {
    ...imageWrap,
    paddingBottom: "133.33%",
  },
  threeByTwo: {
    ...imageWrap,
    paddingBottom: "66.66%",
  },
  twoByOne: {
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
      margin: "auto",
      ...imageSizes[size],
      img: {
        marginBottom: "xxs",
      },
      "> div": {
        // margin: "unset",
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
  baseStyle: ({ ratio = "original", size = "default" }) => ({
    marginLeft: "auto",
    marginRight: "auto",
    width: "100%",
    ...imageSizes[size],
    crop: {
      ...imageRatios[ratio],
    },
    img: {
      height: "100%",
      left: "0",
      maxWidth: "100%",
      position: "absolute",
      top: "0",
      width: "100%",
    },
  }),
};

export { CustomImage, CustomImageWrapper };
