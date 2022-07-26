const MultiSelectGroup = {
  baseStyle: ({ multiSelectWidth }) => ({
    width:
      multiSelectWidth === "default"
        ? "default"
        : multiSelectWidth === "fitContent"
        ? "fit-content"
        : "100%",
    div: {
      flexGrow: multiSelectWidth === "full" ? "1" : undefined,
    },
  }),
};

export default MultiSelectGroup;
