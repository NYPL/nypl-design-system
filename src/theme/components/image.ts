interface CustomImageBaseStyle {
  size: keyof typeof imageSizes;
}
interface CustomImageWrapperBaseStyle {
  ratio: keyof typeof imageRatios;
  size: keyof typeof imageSizes;
}

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
  xxsmall: {
    ...sideMarginsAuto,
    maxWidth: "64px",
  },
  xsmall: {
    ...sideMarginsAuto,
    maxWidth: "96px",
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
  parts: ["captionWrappers"],
  variants: {
    circle: {
      img: {
        borderRadius: "50%",
      },
    },
  },
  baseStyle: ({ size = "default" }: CustomImageBaseStyle) => ({
    figure: {
      margin: "auto",
      width: "100%",
      ...imageSizes[size],
      img: {
        backgroundColor: "ui.gray.x-light-cool",
        marginBottom: "xxs",
      },
    },
    figcaption: {
      fontStyle: "italic",
      fontSize: "text.tag",
    },
    img: {
      display: "block",
      backgroundColor: "ui.gray.x-light-cool",
      boxSizing: "border-box",
      objectFit: "cover",
      position: "relative",
      width: "100%",
      ...imageSizes[size],
    },
    captionWrappers: {
      marginTop: "xxs",
    },
  }),
};
const CustomImageWrapper = {
  parts: ["crop"],
  baseStyle: ({
    ratio = "original",
    size = "default",
  }: CustomImageWrapperBaseStyle) => ({
    marginLeft: "auto",
    marginRight: "auto",
    width: "100%",
    ...imageSizes[size],
    crop: {
      ...imageRatios[ratio],
    },
    img: {
      backgroundColor: "ui.gray.x-light-cool",
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
