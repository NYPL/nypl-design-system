const variants = {
  default: {},
  caption: {
    fontSize: "text.caption",
  },
  tag: {
    fontSize: "text.tag",
  },
  mini: {
    fontSize: "text.mini",
  },
};
const Text = {
  baseStyle: (props) => {
    const fontWeight = props.isBold
      ? props.variant === "tag" || props.variant === "mini"
        ? "medium"
        : "bold"
      : null;
    const fontStyle = props.isItalic ? "italic" : null;

    return {
      fontStyle: fontStyle,
      fontWeight: fontWeight,
      marginBottom: props.noSpace ? "0 !important" : null,
    };
  },
  variants,
};

export default Text;
