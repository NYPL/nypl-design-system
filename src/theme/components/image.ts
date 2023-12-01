interface CustomImageBaseStyle {
  ratio: keyof typeof imageRatios;
  size: keyof typeof imageSizes | keyof typeof imageSizesBasedOnHeight;
  sizeBasedOn: "height" | "width";
}

const sizes = {
  xxxsmall: 32,
  xxsmall: 64,
  xsmall: 96,
  small: 165,
  medium: 225,
  large: 360,
};

const imageWrap = (sizeBasedOn: "height" | "width") => {
  return {
    position: "relative",
    width: sizeBasedOn === "width" ? "100%" : "auto",
    height: sizeBasedOn === "width" ? "auto" : "100%",
    overflow: "hidden",
  };
};

const sideMarginsAuto = {
  marginStart: "auto",
  marginEnd: "auto",
};
const imageSizes = {
  default: {
    maxWidth: "100%",
  },
  xxxsmall: {
    ...sideMarginsAuto,
    maxWidth: "32px",
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
const imageSizesBasedOnHeight = {
  default: {
    maxHeight: "100%",
    maxWidth: "100%",
    width: "100%",
  },
  xxxsmall: {
    ...sideMarginsAuto,
    maxHeight: "32px",
  },
  xxsmall: {
    ...sideMarginsAuto,
    maxHeight: "64px",
  },
  xsmall: {
    ...sideMarginsAuto,
    maxHeight: "96px",
  },
  small: {
    ...sideMarginsAuto,
    maxHeight: "165px",
  },
  medium: {
    ...sideMarginsAuto,
    maxHeight: "225px",
  },
  large: {
    ...sideMarginsAuto,
    maxHeight: "360px",
  },
};
const imageRatios = {
  fourByThree: {
    paddingBottom: "75%",
  },
  oneByTwo: {
    paddingBottom: "200%",
  },
  original: {},
  sixteenByNine: {
    paddingBottom: "56.25%",
  },
  square: {
    paddingBottom: "100%",
  },
  threeByFour: {
    paddingBottom: "133.33%",
  },
  threeByTwo: {
    paddingBottom: "66.66%",
  },
  twoByOne: {
    paddingBottom: "50%",
  },
};

const imageWidthsBasedOnHeight = (height: number) => {
  return {
    fourByThree: {
      maxWidth: `${(4 / 3) * height}px`,
    },
    oneByTwo: {
      maxWidth: `${height / 2}px`,
    },
    original: {},
    sixteenByNine: {
      maxWidth: `${(16 / 9) * height}px`,
    },
    square: {
      maxWidth: `${height}px`,
    },
    threeByFour: {
      maxWidth: `${(3 / 4) * height}px`,
    },
    threeByTwo: {
      maxWidth: `${(3 / 2) * height}px`,
    },
    twoByOne: {
      maxWidth: `${2 * height}px`,
    },
  };
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
  baseStyle: ({
    ratio = "original",
    size = "default",
    sizeBasedOn = "width",
  }: CustomImageBaseStyle) => ({
    figure: {
      margin: "auto",
      ...(sizeBasedOn === "width"
        ? { ...imageSizes[size], width: "100%" }
        : {
            ...imageSizesBasedOnHeight[size],
            ...imageWidthsBasedOnHeight(sizes[size])[ratio],
            height: "100%",
            width:
              ratio === "original" && size !== "default"
                ? "max-content"
                : "100%",
          }),
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
    },
    img: {
      display: "block",
      backgroundColor: "ui.bg.default",
      boxSizing: "border-box",
      objectFit: "cover",
      position: "relative",
      ...(sizeBasedOn === "width"
        ? { ...imageSizes[size], width: "100%" }
        : {
            ...imageSizesBasedOnHeight[size],
            ...imageWidthsBasedOnHeight(sizes[size])[ratio],
            height: "100%",
          }),
      _dark: {
        backgroundColor: "dark.ui.bg.default",
      },
    },
  }),
};
const CustomImageWrapper = {
  parts: ["crop"],
  baseStyle: ({
    ratio = "original",
    size = "default",
    sizeBasedOn = "width",
  }: CustomImageBaseStyle) => ({
    marginStart: "auto",
    marginEnd: "auto",
    ...(sizeBasedOn === "width"
      ? { ...imageSizes[size], width: "100%" }
      : {
          ...imageSizesBasedOnHeight[size],
          ...imageWidthsBasedOnHeight(sizes[size])[ratio],
          height: "100%",
        }),
    crop: {
      ...imageWrap(sizeBasedOn),
      ...imageRatios[ratio],
      ...(sizeBasedOn === "height" && {
        ...imageWidthsBasedOnHeight(sizes[size])[ratio],
      }),
    },
    img: {
      ...(sizeBasedOn === "width"
        ? { maxWidth: "100%" }
        : { maxHeight: "100%" }),
      backgroundColor: "ui.bg.default",
      height: "100%",
      left: "0",
      width: "100%",
      position: "absolute",
      top: "0",
      _dark: {
        backgroundColor: "dark.ui.bg.default",
      },
    },
  }),
};

export { CustomImage, CustomImageWrapper };
