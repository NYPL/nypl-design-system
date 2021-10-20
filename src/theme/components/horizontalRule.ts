const HorizontalRule = {
  baseStyle: ({ align }) => ({
    bg: "ui.gray.light-cool",
    border: "0",
    height: "2px",
    marginBottom: "s",
    marginTop: "s",
    marginLeft: align === "left" ? 0 : null,
    marginRight: align === "right" ? 0 : null,
  }),
};

export default HorizontalRule;
