import { StyleFunctionProps } from "@chakra-ui/system";
interface TextBaseStyle extends Partial<StyleFunctionProps> {
  isBold?: boolean;
  isItalic?: boolean;
  isCapitalized?: boolean;
  isUppercase?: boolean;
  isLowercase?: boolean;
  noSpace?: boolean;
  variant?: string;
}
declare const Text: {
  baseStyle?: ({
    isBold,
    isItalic,
    isCapitalized,
    isUppercase,
    isLowercase,
    noSpace,
    variant,
  }: TextBaseStyle) => {
    fontStyle: string;
    fontWeight: string;
    textTransform: string;
    marginBottom: string;
  };
  sizes?: {
    [key: string]: import("@chakra-ui/styled-system").SystemStyleInterpolation;
  };
  variants?: {
    default: {};
    body1: {};
    body2: {
      fontSize: string;
    };
    caption: {
      fontSize: string;
      fontWeight: string;
    };
    overline1: {
      fontSize: string;
      fontWeight: string;
      lineHeight: number;
      textTransform: string;
    };
    overline2: {
      fontSize: string;
      fontWeight: string;
      lineHeight: number;
      textTransform: string;
    };
    subtitle1: {
      fontSize: {
        base: "mobile.subtitle.subtitle1";
        md: "desktop.subtitle.subtitle1";
      };
      fontWeight: string;
      lineHeight: number;
    };
    subtitle2: {
      fontSize: {
        base: "mobile.subtitle.subtitle2";
        md: "desktop.subtitle.subtitle2";
      };
      fontWeight: string;
      lineHeight: number;
    };
    tag: {
      fontSize: string;
      fontWeight: string;
    };
    mini: {
      fontSize: string;
      fontWeight: string;
    };
  };
  defaultProps?: {
    size?: string | number;
    variant?:
      | "caption"
      | "default"
      | "body1"
      | "body2"
      | "tag"
      | "mini"
      | "overline1"
      | "overline2"
      | "subtitle1"
      | "subtitle2";
    colorScheme?: string;
  };
};
export default Text;
