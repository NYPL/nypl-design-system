const ComponentWrapper = {
  parts: ["helperErrorText"],
  baseStyle: ({ hasChildren }) => ({
    helperErrorText: {
      marginTop: hasChildren ? "xs" : "0",
    },
  }),
};

export default ComponentWrapper;
