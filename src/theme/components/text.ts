interface TextBaseStyle {
  isBold: boolean;
  isItalic: boolean;
  isCapitalized: boolean;
  isUppercase: boolean;
  isLowercase: boolean;
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
  baseStyle: ({
    isBold,
    isItalic,
    isCapitalized,
    isUppercase,
    isLowercase,
    noSpace,
    variant,
  }: TextBaseStyle) => {
    const fontWeight = isBold
      ? variant === "tag" || variant === "mini"
        ? "medium"
        : "bold"
      : null;
    const fontStyle = isItalic ? "italic" : null;
    const textTransform = isCapitalized
      ? "capitalize"
      : isUppercase
      ? "uppercase"
      : isLowercase
      ? "lowercase"
      : null;

    return {
      fontStyle: fontStyle,
      fontWeight: fontWeight,
      textTransform: textTransform,
      marginBottom: noSpace ? "0 !important" : null,
    };
  },
  variants,
};

export default Text;
