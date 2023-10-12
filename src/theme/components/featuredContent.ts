import { wrapperStyles } from "./global";
import { screenreaderOnly } from "./globalMixins";

interface FeaturedContentBaseStyleProps {
  imagePosition: string;
  imageWidth: string;
  isFullWidth: boolean;
}

const FeaturedContent = {
  baseStyle: ({
    imagePosition,
    imageWidth,
    isFullWidth,
  }: FeaturedContentBaseStyleProps) => {
    let imageAtEnd = imagePosition === "end";
    let full = isFullWidth === true;
    let wrapperWidth = "50%";
    if (imageWidth === "oneQuarter") {
      wrapperWidth = "25%";
    } else if (imageWidth === "oneThird") {
      wrapperWidth = "33%";
    } else if (imageWidth === "twoThirds") {
      wrapperWidth = "66%";
    } else if (imageWidth === "threeQuarters") {
      wrapperWidth = "75%";
    }
    return {
      bgColor: "ui.bg.default",
      _dark: {
        bgColor: "dark.ui.bg.default",
      },
      width: full ? "100vw" : "100%",
      left: full ? "50%" : "auto",
      right: full ? "50%" : "auto",
      position: "relative",
      marginLeft: full ? "-50vw" : "auto",
      marginRight: full ? "-50vw" : "auto",
      wrapper: {
        ...wrapperStyles,
        minHeight: "320px",
        maxWidth: full ? "1280px" : "100%",
        display: "flex",
        alignItems: "stretch",
        flexDirection: imageAtEnd
          ? { sm: "column-reverse", md: "row-reverse" }
          : { sm: "column", md: "row" },
      },
      text: {
        display: "flex",
        padding: "l",
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
      },
      imgWrapper: {
        backgroundPosition: "center",
        backgroundSize: "cover",
        height: { sm: "320px", md: "auto" },
        width: { sm: "100%", md: wrapperWidth },
      },
      img: screenreaderOnly(),
    };
  },
};

export default FeaturedContent;
