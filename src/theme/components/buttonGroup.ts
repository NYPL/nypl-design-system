const ButtonGroup = {
  baseStyle: ({ buttonWidth }) => ({
    width: buttonWidth === "default" ? "fit-content" : "100%",
    button: {
      flexGrow: buttonWidth === "default" ? undefined : "1",
    },
  }),
};

export default ButtonGroup;
