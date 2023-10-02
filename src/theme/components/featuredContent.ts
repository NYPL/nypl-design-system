interface FeaturedContentBaseStyleProps {
  imagePosition: string;
  imageWidth: string;
}
import { screenreaderOnly } from "./globalMixins";

const FeaturedContent = {
  baseStyle: ({ imagePosition, imageWidth }: FeaturedContentBaseStyleProps) => {
    const imageAtEnd = imagePosition == "end";
    //Emma note: this canNOT be the best way to implement this logic
    var txtwidth = "50%";
    if (imageWidth == "oneThird") {
      txtwidth = "66%";
    }
    return {
      wrapper: {
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
        padding: "20px",
        flex: 1,
      },
      imgWrapper: {
        display: "flex",
        position: "relative",
        maxHeight: "100%",
      },
      img: {
        width: "100%",
        maxHeight: "100%",
      },
    };
  },
};

export default FeaturedContent;
