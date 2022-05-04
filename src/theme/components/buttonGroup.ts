const ButtonGroup = {
  baseStyle: ({ buttonWidth }) => ({
    width: buttonWidth === "default" ? "fit-content" : "100%",
    button: {
      flexGrow: buttonWidth === "default" ? "1" : "2",
    },
  }),
};

export default ButtonGroup;
