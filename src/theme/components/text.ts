const variants = {
  default: {},
  caption: {
    fontSize: "-1",
  },
  tag: {
    fontSize: "-2",
  },
  mini: {
    fontSize: "-3",
  },
};
const Text = {
  baseStyle: (props) => {
    const fontWeight = props.isBold
      ? "bold"
      : props.variant === "tag" || props.variant === "min"
      ? "regular"
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
