export declare const multiSelectWidths: {
  fitContent: {
    width: {
      base: string;
      md: string;
    };
    minWidth: {
      md: string;
    };
    maxWidth: {
      md: string;
    };
  };
  full: {
    width: string;
  };
};
declare const MultiSelect: {
  baseStyle?: ({
    isBlockElement,
    width,
  }: import("@chakra-ui/styled-system").StyleFunctionProps) => {
    base: {
      position: string;
    };
    menuChildren: {
      paddingLeft: string;
      marginBottom: number;
    };
    viewAllButton: {
      color: string;
      marginLeft: string;
      px: string;
      py: string;
      _hover: {
        bg: string;
      };
      _dark: {
        color: string;
        _hover: {
          bg: string;
        };
      };
    };
    buttonTextLabel: {
      marginLeft: string;
      textOverflow: string;
      overflow: string;
      marginBottom: number;
    };
    menuSearchInputBox: {
      button: {
        height: string;
        minWidth: string;
        right: string;
        top: string;
        width: {
          base: string;
          md: "34px";
        };
      };
      input: {
        backgroundColor: string;
        border: string;
        fontSize: string;
        height: string;
        lineHeight: string;
        minHeight: {
          base: string;
          md: "auto";
        };
      };
    };
    accordionStyles: {
      ".chakra-accordion__item": {
        _dark: {
          bgColor: string;
        };
      };
      ".chakra-accordion__button": {
        backgroundColor: string;
        fontWeight: string;
        minWidth: string;
        position: string;
        width:
          | string
          | {
              base: "100%";
              md: "fit-content";
            };
        overflow: string;
        zIndex: number;
        div: {
          overflow: string;
          textOverflow: string;
          whiteSpace: string;
        };
        span: {
          overflow: string;
        };
        _hover: {
          backgroundColor: string;
        };
        _dark: {
          backgroundColor: string;
          borderStartColor: string;
          borderStartWidth: string;
          _hover: {
            borderStartColor: string;
          };
        };
        _expanded: {
          bgColor: string;
          _dark: {
            bgColor: string;
          };
        };
      };
      ".chakra-collapse": any;
      ".chakra-accordion__panel": {
        overflow: string;
        maxHeight: string;
        padding: string;
        bgColor: string;
        _dark: {
          bgColor: string;
        };
      };
    };
  };
  sizes?: {
    [key: string]: import("@chakra-ui/styled-system").PartsStyleInterpolation<{
      keys: (
        | "base"
        | "accordionStyles"
        | "buttonTextLabel"
        | "menuChildren"
        | "menuSearchInputBox"
        | "viewAllButton"
      )[];
    }>;
  };
  variants?: {
    [key: string]: import("@chakra-ui/styled-system").PartsStyleInterpolation<{
      keys: (
        | "base"
        | "accordionStyles"
        | "buttonTextLabel"
        | "menuChildren"
        | "menuSearchInputBox"
        | "viewAllButton"
      )[];
    }>;
  };
  defaultProps?: {
    size?: string | number;
    variant?: string | number;
    colorScheme?: string;
  };
  parts: (
    | "base"
    | "accordionStyles"
    | "buttonTextLabel"
    | "menuChildren"
    | "menuSearchInputBox"
    | "viewAllButton"
  )[];
};
export default MultiSelect;
