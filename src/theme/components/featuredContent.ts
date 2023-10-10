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
      bgColor: "ui.gray.x-light-cool",
      _dark: {
        bgColor: "dark.ui.bg.default",
      },
      ...wrapperStyles,
      width: full ? "100vw" : "100%",
      left: full ? "50%" : "auto",
      right: full ? "50%" : "auto",
      paddingX: full ? "10%" : "auto",
      position: full ? "relative" : "auto",
      marginLeft: full ? "-50vw" : "auto",
      marginRight: full ? "-50vw" : "auto",
      minHeight: "320px",
      display: "flex",
      alignItems: "stretch",
      flexDirection: imageAtEnd
        ? { sm: "column-reverse", md: "row-reverse" }
        : { sm: "column", md: "row" },
      text: {
        display: "flex",
        padding: "20px",
        flex: 1,
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
