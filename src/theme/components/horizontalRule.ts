const HorizontalRule = {
  baseStyle: ({ align }) => ({
    bg: "ui.gray.light-cool",
    border: "0",
    height: "2px",
    marginBottom: "s",
    marginTop: "s",
    marginLeft: align === "left" ? 0 : "auto",
    marginRight: align === "right" ? 0 : "auto",
  }),
};

export default HorizontalRule;
