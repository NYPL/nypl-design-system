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
  body1: {},
  body2: {
    fontSize: "desktop.body.body2",
  },
  caption: {
    fontSize: "desktop.caption",
    fontWeight: "caption",
  },
  overline1: {
    fontSize: "desktop.overline.overline1",
    fontWeight: "overline.overline1",
    lineHeight: 1.35,
    textTransform: "uppercase",
  },
  overline2: {
    fontSize: "desktop.overline.overline2",
    fontWeight: "overline.overline2",
    lineHeight: 1.4,
    textTransform: "uppercase",
  },
  subtitle1: {
    fontSize: "desktop.subtitle.subtitle1",
    fontWeight: "subtitle.subtitle1",
    lineHeight: 1.25,
  },
  subtitle2: {
    fontSize: "desktop.subtitle.subtitle2",
    fontWeight: "subtitle.subtitle2",
    lineHeight: 1.3,
  },
  // Deprecated options
  tag: {
    fontSize: "text.tag",
    fontWeight: "text.tag",
  },
  mini: {
    fontSize: "text.mini",
    fontWeight: "text.mini",
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
      ? variant === "tag" || variant === "mini" || variant === "caption"
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
