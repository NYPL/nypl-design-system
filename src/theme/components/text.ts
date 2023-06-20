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
    fontSize: "desktop.caption",
  },
  tag: {
    fontSize: "desktop.tag",
  },
  mini: {
    fontSize: "text.mini",
  },
  overline1: {
    fontSize: "desktop.overline.overline1",
    fontWeight: "text.overline",
    lineHeight: 1.35,
    textTransform: "uppercase",
  },
  overline2: {
    fontSize: "desktop.overline.overline2",
    fontWeight: "text.overline",
    lineHeight: 1.4,
    textTransform: "uppercase",
  },
  subtitle1: {
    fontSize: "desktop.subtitle.subtitle1",
    fontWeight: "text.subtitle",
    lineHeight: 1.25,
  },
  subtitle2: {
    fontSize: "desktop.subtitle.subtitle2",
    fontWeight: "text.subtitle",
    lineHeight: 1.3,
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
