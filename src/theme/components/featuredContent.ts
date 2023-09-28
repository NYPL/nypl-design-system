interface FeaturedContentBaseStyleProps {
  imagePosition: string;
  imageWidth: string;
}

const FeaturedContent = {
  baseStyle: ({ imageWidth, imagePosition }: FeaturedContentBaseStyleProps) => {
    const styles: { maxWidth?: string } = {};
    const wrapperStyles = {
      float: [
        "none",
        "none",
        imagePosition !== "center" ? imagePosition : undefined,
      ],
      marginStart: ["auto", "auto", imagePosition === "start" ? "0" : "l"],
      marginEnd: ["auto", "auto", imagePosition === "start" ? "m" : "0"],
      width: imagePosition !== "center" ? "100%" : undefined, //ugh
      ...styles,
    };
    if (imagePosition === "center") {
      styles.maxWidth = "100%";
    }
    return {
      image: {
        // To handle the case when the image does not have a container,
        // e.g. when there is no image caption or credit.
        float: [
          "none",
          "none",
          imagePosition !== "center" ? imagePosition : undefined,
        ],
        marginStart: [
          "auto",
          "auto",
          imagePosition === "right" && imageAspectRatio === "original"
            ? "m"
            : undefined,
        ],
        marginEnd: [
          "auto",
          "auto",
          imagePosition === "left" && imageAspectRatio === "original"
            ? "m"
            : undefined,
        ],
        marginBottom:
          !hasFigureImage || imageAspectRatio === "original" ? "m" : null,
        ...styles,
      },
    };
  },
};

export default FeaturedContent;
