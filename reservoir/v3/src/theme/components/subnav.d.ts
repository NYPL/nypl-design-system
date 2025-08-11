import { StyleFunctionProps } from "@chakra-ui/system";
interface SubNavStyleProps extends StyleFunctionProps {
  backgroundColor: string;
  highlightColor: string;
}
interface SubNavChildrenStyleProps extends StyleFunctionProps {
  isOutlined: boolean;
}
declare const SubNav: {
  baseStyle?: ({ backgroundColor, highlightColor }: SubNavStyleProps) => {
    base: {
      ".selectedItem": {
        color: string;
        fontWeight: string;
        backgroundColor: string;
        "&:hover": {
          color: string;
        };
        _dark: {
          color: string;
          "&:hover": {
            color: string;
          };
        };
      };
      borderBottom: string;
      borderColor: string;
      display: string;
      justifyContent: string;
      _dark: {
        borderColor: string;
      };
    };
    container: {
      maxWidth: string;
      px: {
        base: "0";
        md: "xs";
      };
      width: string;
    };
    scrollableList: {
      display: string;
      overflowX: string;
      whiteSpace: string;
      position: string;
      scrollbarWidth: string;
    };
    primaryActions: {
      width: string;
      button: {
        _dark: {
          color: string;
        };
        svg: {
          fill: string;
          margin: {
            base: string;
            md: any;
          };
          _dark: {
            fill: string;
          };
        };
        _hover: {
          backgroundColor: string;
          color: string;
          _dark: {
            backgroundColor: string;
            color: string;
          };
          svg: {
            fill: string;
            _dark: {
              fill: string;
            };
          };
        };
        alignItems: string;
        display: string;
        fontSize: string;
        fontWeight: string;
        gap: string;
        height: {
          base: string;
          md: string;
        };
        lineHeight: string;
        position: string;
        px: string;
        py: string;
        textDecoration: string;
        transition: string;
        color: string;
      };
      a: {
        _dark: {
          color: string;
        };
        svg: {
          fill: string;
          margin: {
            base: string;
            md: any;
          };
          _dark: {
            fill: string;
          };
        };
        _hover: {
          backgroundColor: string;
          color: string;
          _dark: {
            backgroundColor: string;
            color: string;
          };
          svg: {
            fill: string;
            _dark: {
              fill: string;
            };
          };
        };
        alignItems: string;
        display: string;
        fontSize: string;
        fontWeight: string;
        gap: string;
        height: {
          base: string;
          md: string;
        };
        lineHeight: string;
        position: string;
        px: string;
        py: string;
        textDecoration: string;
        transition: string;
        color: string;
      };
      p: {
        base: string;
        md: string;
      };
      gap: string;
      li: {
        marginEnd: string;
      };
      margin: string;
    };
    secondaryActions: {
      width: string;
      whiteSpace: string;
      button: {
        _dark: {
          color: string;
        };
        color: string;
        svg: {
          fill: string;
          margin: {
            base: string;
            md: any;
          };
          _dark: {
            fill: string;
          };
        };
        _hover: {
          background: string;
          color: string;
          _dark: {
            backgroundColor: string;
            color: string;
          };
          svg: {
            fill: string;
            _dark: {
              fill: string;
            };
          };
        };
        alignItems: string;
        display: string;
        fontSize: string;
        fontWeight: string;
        gap: string;
        height: {
          base: string;
          md: string;
        };
        lineHeight: string;
        position: string;
        px: string;
        py: string;
        textDecoration: string;
        transition: string;
      };
      a: {
        _dark: {
          color: string;
        };
        color: string;
        svg: {
          fill: string;
          margin: {
            base: string;
            md: any;
          };
          _dark: {
            fill: string;
          };
        };
        _hover: {
          background: string;
          color: string;
          _dark: {
            backgroundColor: string;
            color: string;
          };
          svg: {
            fill: string;
            _dark: {
              fill: string;
            };
          };
        };
        alignItems: string;
        display: string;
        fontSize: string;
        fontWeight: string;
        gap: string;
        height: {
          base: string;
          md: string;
        };
        lineHeight: string;
        position: string;
        px: string;
        py: string;
        textDecoration: string;
        transition: string;
      };
      p: {
        base: string;
        md: string;
      };
      gap: string;
      li: {
        marginEnd: string;
      };
      margin: string;
    };
    fadeEffect: {
      position: string;
      top: number;
      right: number;
      height: string;
      width: string;
      background: string;
      pointerEvents: string;
      zIndex: number;
      _dark: {
        background: string;
      };
    };
    primaryList: {
      position: string;
      display: string;
      width: string;
      overflowX: string;
    };
  };
  sizes?: {
    [key: string]: import("@chakra-ui/styled-system").PartsStyleInterpolation<{
      keys: (
        | "base"
        | "container"
        | "primaryActions"
        | "selectedItem"
        | "secondaryActions"
      )[];
    }>;
  };
  variants?: {
    [key: string]: import("@chakra-ui/styled-system").PartsStyleInterpolation<{
      keys: (
        | "base"
        | "container"
        | "primaryActions"
        | "selectedItem"
        | "secondaryActions"
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
    | "container"
    | "primaryActions"
    | "selectedItem"
    | "secondaryActions"
  )[];
};
declare const SubNavChildren: {
  baseStyle?: ({ isOutlined }: SubNavChildrenStyleProps) => {
    outLine: {
      border: string;
      borderRadius: string;
    };
  };
  sizes?: {
    [key: string]: import("@chakra-ui/styled-system").PartsStyleInterpolation<{
      keys: "outLine"[];
    }>;
  };
  variants?: {
    [key: string]: import("@chakra-ui/styled-system").PartsStyleInterpolation<{
      keys: "outLine"[];
    }>;
  };
  defaultProps?: {
    size?: string | number;
    variant?: string | number;
    colorScheme?: string;
  };
  parts: "outLine"[];
};
export { SubNav, SubNavChildren };
