declare const Breadcrumb: {
  baseStyle?: {
    bg: string;
    color: string;
    fontSize: string;
    fontWeight: string;
    paddingBottom: string;
    paddingTop: string;
    _dark: {
      bg: string;
      color: string;
    };
    ol: {
      alignItems: {
        base: "center";
        md: "unset";
      };
      display: {
        base: "flex";
        md: "block";
      };
      margin: string;
      maxWidth: string;
      paddingStart: string;
      paddingEnd: string;
    };
    a: {
      _visited: {
        color: string;
      };
      _hover: {
        color: string;
        textDecoration: string;
      };
      _focus: {
        boxShadow: string;
        outline: string;
        outlineOffset: string;
        outlineColor: any;
        zIndex: string;
        _dark: {
          outlineColor: any;
        };
      };
    };
    "li:last-child": {
      fontWeight: {
        base: string;
        md: string;
      };
      ".chakra-breadcrumb__link": {
        _hover: {
          color: string;
          cursor: string;
          textDecoration: string;
        };
        _dark: {
          _hover: {
            color: string;
          };
        };
      };
      ".icon": {
        display: string;
      };
    };
    "li:not(:last-child)": {
      display: {
        base: "none";
        md: "inline-block";
      };
      a: {
        marginEnd: {
          base: "xs";
          md: "0";
        };
        display: {
          base: "flex";
          md: "unset";
        };
      };
      ".icon": {
        display: {
          base: "inline";
          md: "none";
        };
      };
      "span:not(.breadcrumb-label)": {
        clip: string;
        height: {
          base: string;
          md: string;
        };
        overflow: string;
        position: {
          base: string;
          md: string;
        };
        width: {
          base: string;
          md: string;
        };
        wordWrap: string;
        marginInlineEnd: string;
        marginInlineStart: string;
      };
    };
    "li:nth-last-of-type(2)": {
      display: string;
      span: {
        clip: string;
        height: {
          base: string;
          md: string;
        };
        overflow: string;
        position: {
          base: string;
          md: string;
        };
        width: {
          base: string;
          md: string;
        };
        wordWrap: string;
      };
    };
  };
  sizes?: {
    [key: string]: import("@chakra-ui/styled-system").SystemStyleInterpolation;
  };
  variants?: {
    blogs: {
      bg: string;
      color: string;
      _dark: {
        bg: string;
      };
      a: {
        _hover: {
          color: string;
        };
        _dark: {
          _hover: {
            color: string;
          };
        };
        _focus: {
          boxShadow: string;
          outline: string;
          outlineOffset: string;
          outlineColor: any;
          zIndex: string;
          _dark: {
            outlineColor: any;
          };
        };
      };
      "li:last-child": {
        ".chakra-breadcrumb__link": {
          _hover: {
            color: string;
          };
        };
      };
      svg: {
        fill: string;
      };
    };
    booksAndMore: {
      bg: string;
      _dark: {
        bg: string;
      };
    };
    brand: {
      bg: string;
      _dark: {
        bg: string;
      };
    };
    connect: {
      bg: string;
      _dark: {
        bg: string;
      };
    };
    digitalCollections: {
      bg: string;
      color: string;
      _dark: {
        bg: string;
      };
      a: {
        _hover: {
          color: string;
        };
        _dark: {
          _hover: {
            color: string;
          };
        };
        _focus: {
          boxShadow: string;
          outline: string;
          outlineOffset: string;
          outlineColor: any;
          zIndex: string;
          _dark: {
            outlineColor: any;
          };
        };
      };
      "li:last-child": {
        ".chakra-breadcrumb__link": {
          _hover: {
            color: string;
          };
          _dark: {
            _hover: {
              color: string;
            };
          };
        };
      };
      svg: {
        fill: string;
        _dark: {
          fill: string;
        };
      };
    };
    education: {
      bg: string;
      _dark: {
        bg: string;
      };
    };
    locations: {
      bg: string;
      _dark: {
        bg: string;
      };
    };
    research: {
      bg: string;
      _dark: {
        bg: string;
      };
    };
    whatsOn: {
      bg: string;
      _dark: {
        bg: string;
      };
    };
  };
  defaultProps?: {
    size?: string | number;
    variant?:
      | "blogs"
      | "booksAndMore"
      | "brand"
      | "connect"
      | "digitalCollections"
      | "education"
      | "locations"
      | "research"
      | "whatsOn";
    colorScheme?: string;
  };
};
export default Breadcrumb;
