const StructuredContent = {
  parts: ["image", "imageContainer"],
  baseStyle: ({ imagePosition, noImageWrapper }) => {
    const styles: { maxWidth?: string } = {};
    if (imagePosition === "center") {
      styles.maxWidth = "100%";
    }
    return {
      imageContainer: {
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
      },
      image: {
        // To handle the case when the image does not have a container,
        // e.g. when there is no image caption or credit.
        float: imagePosition !== "center" ? imagePosition : undefined,
        marginBottom: noImageWrapper ? "m" : null,
        ...styles,
      },
    };
  },
};

export default StructuredContent;
