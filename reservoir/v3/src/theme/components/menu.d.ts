import { StyleFunctionProps } from "@chakra-ui/system";
import { SectionTypes } from "../../helpers/types";
interface MenuStyleProps extends StyleFunctionProps {
  highlightColor: SectionTypes;
  showBorder: boolean;
  showLabel: boolean;
}
declare const Menu: {
  baseStyle?: ({ highlightColor, showBorder, showLabel }: MenuStyleProps) => {
    groupItem: {
      paddingY: string;
      paddingX: string;
      lineHeight: string;
      fontWeight: string;
      fontSize: string;
      textColor: string;
      margin: string;
      _dark: {
        textColor: string;
        bg: string;
      };
    };
    dividerItem: {
      margin: string;
      _dark: {
        textColor: string;
        bg: string;
      };
    };
    actionItem: {
      fontSize: string;
      fontWeight: string;
      lineHeight: string;
      outline: string;
      paddingX: string;
      paddingY: string;
      textColor: string;
      _hover: {
        bg: string;
        fontWeight: string;
      };
      _focus: {
        bg: string;
        fontWeight: string;
      };
      _dark: {
        bg: string;
        textColor: string;
        "> div > svg": {
          fill: string;
        };
        _hover: {
          bg: string;
          fontWeight: string;
          textColor: string;
        };
        _focus: {
          bg: string;
          fontWeight: string;
          textColor: string;
        };
      };
    };
    selected: {
      fontWeight: string;
      borderLeftColor:
        | string
        | {
            primary: string;
            secondary: string;
          };
      textColor:
        | string
        | {
            primary: string;
            secondary: string;
          };
      borderWidth: string;
      background: string;
      _dark: {
        textColor: string;
        _hover: {
          textColor: string;
          fontWeight: string;
          background: string;
        };
        _focus: {
          textColor: string;
          fontWeight: string;
          bg: string;
        };
        background: string;
      };
    };
    menuButton: {
      minHeight: {
        base: string;
        md: "40px";
      };
      minWidth: {
        base: string;
        md: "40px";
      };
      whiteSpace: string;
      paddingY: string;
      paddingX: string;
      borderRadius: string;
      fontSize: string;
      textColor: string;
      border: string;
      borderColor: string;
      _hover: {
        bg: string;
        textColor: string;
        borderColor: string;
        "> span > svg ": {
          fill: string;
        };
      };
      _active: {
        bg: string;
        textColor: string;
        borderColor: string;
        "> span > svg ": {
          fill: string;
        };
      };
      "> span ": {
        alignItems: string;
        display: string;
        justifyContent: string;
      };
      "> span > svg ": {
        fill: string;
      };
      _dark: {
        textColor: string;
        borderColor: string;
        _hover: {
          bg: string;
          borderColor: string;
          textColor: string;
        };
        _active: {
          bg: string;
        };
        "> span > svg": {
          fill: string;
        };
      };
    };
    menuList: {
      minWidth: string;
      outline: string;
      maxWidth: string;
      padding: string;
      borderRadius: string;
      border: string;
      borderColor: string;
      _dark: {
        borderColor: string;
        bgColor: string;
      };
      boxShadow: string;
      overflowY: string;
      maxHeight: string;
    };
  };
  sizes?: {
    [key: string]: import("@chakra-ui/styled-system").PartsStyleInterpolation<{
      keys: (
        | "groupItem"
        | "actionItem"
        | "dividerItem"
        | "selected"
        | "menuButton"
        | "menuList"
      )[];
    }>;
  };
  variants?: {
    [key: string]: import("@chakra-ui/styled-system").PartsStyleInterpolation<{
      keys: (
        | "groupItem"
        | "actionItem"
        | "dividerItem"
        | "selected"
        | "menuButton"
        | "menuList"
      )[];
    }>;
  };
  defaultProps?: {
    size?: string | number;
    variant?: string | number;
    colorScheme?: string;
  };
  parts: (
    | "groupItem"
    | "actionItem"
    | "dividerItem"
    | "selected"
    | "menuButton"
    | "menuList"
  )[];
};
export default Menu;
