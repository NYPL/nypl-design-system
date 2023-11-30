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
      left: full ? "50%" : "auto",
      marginLeft: full ? "-50vw" : "auto",
      marginRight: full ? "-50vw" : "auto",
      position: "relative",
      right: full ? "50%" : "auto",
      width: full ? "100vw" : "100%",
      _dark: {
        bgColor: "dark.ui.bg.default",
      },
      wrapper: {
        ...wrapperStyles,
        alignItems: "stretch",
        display: "flex",
        flexDirection: imageAtEnd
          ? { sm: "column-reverse", md: "row-reverse" }
          : { sm: "column", md: "row" },
        maxWidth: full ? "1280px" : "100%",
        minHeight: "320px",
        paddingLeft: full ? { base: null, md: "s" } : 0,
        paddingRight: full ? { base: null, md: "s" } : 0,
      },
      text: {
        display: "flex",
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        padding: "l",
        /** The `paddingLeft` attribute is used to adjust the spacing around the
         * text when the image is positioned at the end. For aesthetic reasons,
         * we opted to not adjust the spacing around the text when the image is
         * positioned at the start.
         * */
        paddingLeft: full && imageAtEnd ? { base: null, md: 0 } : null,
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
