import { defineStyleConfig } from "@chakra-ui/react";
import { defineStyle, StyleFunctionProps } from "@chakra-ui/system";

interface TextBaseStyle extends Partial<StyleFunctionProps> {
  isBold?: boolean;
  isItalic?: boolean;
  isCapitalized?: boolean;
  isUppercase?: boolean;
  isLowercase?: boolean;
  noSpace?: boolean;
  variant?: string;
}

const baseStyle = defineStyle(
  ({
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
  }
);

const variants = {
  default: defineStyle({}),
  body1: defineStyle({}),
  body2: defineStyle({
    fontSize: "desktop.body.body2",
  }),
  caption: defineStyle({
    fontSize: "desktop.caption",
    fontWeight: "caption",
  }),
  overline1: defineStyle({
    fontSize: "desktop.overline.overline1",
    fontWeight: "overline.overline1",
    lineHeight: 1,
    textTransform: "uppercase",
  }),
  overline2: defineStyle({
    fontSize: "desktop.overline.overline2",
    fontWeight: "overline.overline2",
    lineHeight: 1,
    textTransform: "uppercase",
  }),
  subtitle1: defineStyle({
    fontSize: "desktop.subtitle.subtitle1",
    fontWeight: "subtitle.subtitle1",
    lineHeight: 1.35,
  }),
  subtitle2: defineStyle({
    fontSize: "desktop.subtitle.subtitle2",
    fontWeight: "subtitle.subtitle2",
    lineHeight: 1.4,
  }),
  // Deprecated options
  tag: defineStyle({
    fontSize: "text.tag",
    fontWeight: "text.tag",
  }),
  mini: defineStyle({
    fontSize: "text.mini",
    fontWeight: "text.mini",
  }),
};

const Text = defineStyleConfig({
  baseStyle,
  variants,
});

export default Text;
