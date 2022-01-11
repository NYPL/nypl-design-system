const StructuredContent = {
  parts: ["image", "imageFigure", "imageWrapper"],
  baseStyle: ({ imageAspectRatio, imagePosition }) => {
    const styles: { maxWidth?: string } = {};
    const wrapperStyles = {
      float: imagePosition !== "center" ? imagePosition : undefined,
      marginBottom: "m",
      marginLeft:
        imagePosition === "center"
          ? null
          : imagePosition === "left"
          ? "0"
          : "m",
      marginRight:
        imagePosition === "center"
          ? null
          : imagePosition === "left"
          ? "m"
          : "0",
      width: imagePosition !== "center" ? "100%" : undefined,
      ...styles,
    };
    if (imagePosition === "center") {
      styles.maxWidth = "100%";
    }
    return {
      imageFigure: wrapperStyles,
      imageWrapper: {
        ...wrapperStyles,
        marginBottom: "m",
      },
      image: {
        // To handle the case when the image does not have a container,
        // e.g. when there is no image caption or credit.
        float: imagePosition !== "center" ? imagePosition : undefined,
        marginLeft:
          imagePosition === "right" && imageAspectRatio === "original"
            ? "m"
            : undefined,
        marginRight:
          imagePosition === "left" && imageAspectRatio === "original"
            ? "m"
            : undefined,
        marginBottom: "var(--nypl-space-m) !important",
        ...styles,
      },
    };
  },
};

export default StructuredContent;
