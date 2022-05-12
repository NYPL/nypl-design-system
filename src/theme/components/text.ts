interface TextBaseStyle {
  isBold: boolean;
  isItalic: boolean;
  noSpace: boolean;
  variant: string;
}

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
  baseStyle: ({ isBold, isItalic, noSpace, variant }: TextBaseStyle) => {
    const fontWeight = isBold
      ? variant === "tag" || variant === "mini"
        ? "medium"
        : "bold"
      : null;
    const fontStyle = isItalic ? "italic" : null;

    return {
      fontStyle: fontStyle,
      fontWeight: fontWeight,
      marginBottom: noSpace ? "0 !important" : null,
    };
  },
  variants,
};

export default Text;
