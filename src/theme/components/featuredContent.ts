interface FeaturedContentBaseStyleProps {
  imagePosition: string;
  imageWidth: string;
  fullLayout: boolean;
}

const FeaturedContent = {
  baseStyle: ({
    imagePosition,
    imageWidth,
    fullLayout,
  }: FeaturedContentBaseStyleProps) => {
    const imageAtEnd = imagePosition === "end";
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
    let full = fullLayout === true;
    return {
      wrapper: {
        width: full ? "100vw" : "100%",
        left: full ? "50%" : "auto",
        right: full ? "50%" : "auto",
        paddingX: full ? "10%" : "auto",
        position: full ? "relative" : "auto",
        marginLeft: full ? "-50vw" : "auto",
        marginRight: full ? "-50vw" : "auto",
        bgColor: "ui.gray.x-light-cool",
        _dark: {
          bgColor: "dark.ui.bg.default",
        },
        minHeight: "320px",
        display: "flex",
        flexDirection: imageAtEnd
          ? { sm: "column-reverse", md: "row-reverse" }
          : { sm: "column", md: "row" },
      },
      text: {
        display: "flex",
        alignSelf: "start",
        paddingX: "20px",
        marginY: "auto",
        flex: 1,
      },
      imgWrapper: {
        display: "flex",
        height: { sm: "320px", md: "auto" },
        width: { sm: "100%", md: wrapperWidth },
      },
      img: {
        width: "100%",
        height: "100%",
      },
    };
  },
};

export default FeaturedContent;
