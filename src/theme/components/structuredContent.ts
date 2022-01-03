const StructuredContent = {
  parts: ["image"],
  baseStyle: ({ imagePosition }) => {
    const styles = {};
    if (imagePosition === "center") {
      (styles as any).maxWidth = "100%";
    }
    return {
      image: {
        float: imagePosition !== "center" ? imagePosition : undefined,
        marginLeft:
          imagePosition === "center"
            ? null
            : imagePosition === "left"
            ? "0"
            : "s",
        marginRight:
          imagePosition === "center"
            ? null
            : imagePosition === "left"
            ? "s"
            : "0",
        ...styles,
      },
    };
  },
};

export default StructuredContent;
