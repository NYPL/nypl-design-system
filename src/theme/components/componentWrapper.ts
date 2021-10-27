const ComponentWrapper = {
  baseStyle: ({ hasChildren }) => ({
    helperText: {
      marginBottom: "0",
      marginTop: hasChildren ? "xs" : "0",
    },
  }),
};

export default ComponentWrapper;
