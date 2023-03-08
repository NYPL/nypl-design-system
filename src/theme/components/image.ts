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
  marginStart: "auto",
  marginEnd: "auto",
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
        backgroundColor: "ui.bg.default",
        marginBottom: "xxs",
        _dark: {
          backgroundColor: "dark.ui.bg.default",
        },
      },
    },
    figcaption: {
      fontStyle: "italic",
      fontSize: "text.tag",
    },
    img: {
      display: "block",
      backgroundColor: "ui.bg.default",
      boxSizing: "border-box",
      objectFit: "cover",
      position: "relative",
      width: "100%",
      ...imageSizes[size],
      _dark: {
        backgroundColor: "dark.ui.bg.default",
      },
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
    marginStart: "auto",
    marginEnd: "auto",
    width: "100%",
    ...imageSizes[size],
    crop: {
      ...imageRatios[ratio],
    },
    img: {
      backgroundColor: "ui.bg.default",
      height: "100%",
      left: "0",
      maxWidth: "100%",
      position: "absolute",
      top: "0",
      width: "100%",
      _dark: {
        backgroundColor: "dark.ui.bg.default",
      },
    },
  }),
};

export { CustomImage, CustomImageWrapper };
