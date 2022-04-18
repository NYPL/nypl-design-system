const StructuredContent = {
  parts: ["image", "imageFigure", "imageWrapper"],
  baseStyle: ({ hasFigureImage, imageAspectRatio, imagePosition }) => {
    const styles: { maxWidth?: string } = {};
    const wrapperStyles = {
      float: [
        "none",
        "none",
        imagePosition !== "center" ? imagePosition : undefined,
      ],
      marginLeft: [
        "auto",
        "auto",
        imagePosition === "center"
          ? null
          : imagePosition === "left"
          ? "0"
          : "l",
      ],
      marginRight: [
        "auto",
        "auto",
        imagePosition === "center"
          ? null
          : imagePosition === "left"
          ? "m"
          : "0",
      ],
      width: imagePosition !== "center" ? "100%" : undefined,
      ...styles,
    };
    if (imagePosition === "center") {
      styles.maxWidth = "100%";
    }
    return {
      imageFigure: {
        ...wrapperStyles,
        marginBottom: "m",
      },
      imageWrapper: {
        ...wrapperStyles,
        marginBottom: !hasFigureImage ? "m" : null,
      },
      image: {
        // To handle the case when the image does not have a container,
        // e.g. when there is no image caption or credit.
        float: [
          "none",
          "none",
          imagePosition !== "center" ? imagePosition : undefined,
        ],
        marginLeft: [
          "auto",
          "auto",
          imagePosition === "right" && imageAspectRatio === "original"
            ? "m"
            : undefined,
        ],
        marginRight: [
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

export default StructuredContent;
