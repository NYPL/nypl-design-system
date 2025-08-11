import { StyleFunctionProps } from "@chakra-ui/system";
interface StructuredContentBaseStyle extends StyleFunctionProps {
  hasFigureImage: boolean;
  imageAspectRatio: string;
  imagePosition: string;
}
declare const StructuredContent: {
  baseStyle?: ({
    hasFigureImage,
    imageAspectRatio,
    imagePosition,
  }: StructuredContentBaseStyle) => {
    one: {
      base: {
        width: string;
        a: {
          textUnderlineOffset: string;
        };
        marginTop: string;
        marginStart: string;
        marginEnd: string;
        fontSize: string;
        fontWeight: string;
        letterSpacing: string;
        lineHeight: string;
      };
    };
    two: {
      base: {
        width: string;
        a: {
          textUnderlineOffset: string;
        };
        marginTop: string;
        marginStart: string;
        marginEnd: string;
        fontSize: string;
        fontWeight: string;
        lineHeight: string;
      };
    };
    three: {
      base: {
        width: string;
        marginTop: string;
        marginStart: string;
        marginEnd: string;
        fontSize: string;
        fontWeight: string;
        lineHeight: string;
      };
    };
    four: {
      base: {
        width: string;
        marginTop: string;
        marginStart: string;
        marginEnd: string;
        fontSize: string;
        fontWeight: string;
        lineHeight: string;
      };
    };
    fallback: {
      base: {
        width: string;
        marginTop: string;
        marginStart: string;
        marginEnd: string;
        fontSize: string;
        fontWeight: string;
        lineHeight: string;
      };
    };
    display1: {
      base: {
        fontSize: {
          base: "mobile.heading.display1";
          md: "desktop.heading.display1";
        };
        fontWeight: string;
        letterSpacing: string;
        lineHeight: {
          base: "1.15";
          md: "1.10";
        };
        width: string;
        a: {
          textUnderlineOffset: string;
        };
      };
    };
    heading1: {
      base: {
        fontSize: {
          base: "mobile.heading.heading1";
          md: "desktop.heading.heading1";
        };
        fontWeight: string;
        letterSpacing: string;
        lineHeight: {
          base: "1.20";
          md: "1.15";
        };
        width: string;
        a: {
          textUnderlineOffset: string;
        };
      };
    };
    heading2: {
      base: {
        fontSize: {
          base: "mobile.heading.heading2";
          md: "desktop.heading.heading2";
        };
        fontWeight: string;
        letterSpacing: string;
        lineHeight: {
          base: "1.25";
          md: "1.20";
        };
        width: string;
        a: {
          textUnderlineOffset: string;
        };
      };
    };
    heading3: {
      base: {
        fontSize: {
          base: "mobile.heading.heading3";
          md: "desktop.heading.heading3";
        };
        fontWeight: string;
        letterSpacing: string;
        lineHeight: {
          base: "1.30";
          md: "1.25";
        };
        width: string;
        a: {
          textUnderlineOffset: string;
        };
      };
    };
    heading4: {
      base: {
        fontSize: {
          base: "mobile.heading.heading4";
          md: "desktop.heading.heading4";
        };
        fontWeight: string;
        letterSpacing: string;
        lineHeight: {
          base: "1.35";
          md: "1.30";
        };
        width: string;
        a: {
          textUnderlineOffset: string;
        };
      };
    };
    heading5: {
      base: {
        fontSize: {
          base: "mobile.heading.heading5";
          md: "desktop.heading.heading5";
        };
        fontWeight: string;
        letterSpacing: string;
        lineHeight: {
          base: "1.40";
          md: "1.35";
        };
        width: string;
      };
    };
    heading6: {
      base: {
        fontSize: {
          base: "mobile.heading.heading6";
          md: "desktop.heading.heading6";
        };
        fontWeight: string;
        letterSpacing: string;
        lineHeight: {
          base: "1.45";
          md: "1.40";
        };
        width: string;
      };
    };
    heading7: {
      base: {
        fontSize: {
          base: "mobile.heading.heading7";
          md: "desktop.heading.heading7";
        };
        fontWeight: string;
        letterSpacing: string;
        lineHeight: {
          base: "1.50";
          md: "1.45";
        };
        width: string;
      };
    };
    heading8: {
      base: {
        fontSize: {
          base: "mobile.heading.heading8";
          md: "desktop.heading.heading8";
        };
        fontWeight: string;
        letterSpacing: string;
        lineHeight: string;
        width: string;
      };
    };
    imageFigure: {
      marginBottom: string;
      maxWidth?: string;
      float: string[];
      marginStart: string[];
      marginEnd: string[];
      width: string;
    };
    imageWrapper: {
      marginBottom: string;
      maxWidth?: string;
      float: string[];
      marginStart: string[];
      marginEnd: string[];
      width: string;
    };
    image: {
      maxWidth?: string;
      float: string[];
      marginStart: ("m" | "auto")[];
      marginEnd: ("m" | "auto")[];
      marginBottom: string;
    };
    /** The following styles are meant to target HTML elements that are
     * not rendered from the Reservoir DS. Typically, these HTML elements
     * are added from an API response.
     */
    ".structuredcontent-body > div": {
      marginTop: string;
      marginInlineEnd: string;
      marginBottom: string;
      marginInlineStart: string;
    };
    a: {
      _dark: {
        color: string;
      };
      _hover: {
        _dark: {
          color: string;
        };
        textDecoration: string;
        textDecorationStyle: string;
        textDecorationThickness: string;
        color: string;
      };
      textDecoration: string;
      textDecorationStyle: string;
      textDecorationThickness: string;
      color: string;
      textUnderlineOffset: string;
    };
    ul: {
      listStyle: string;
      li: {
        _before: {
          color: string;
          content: string;
          display: string;
          fontWeight: string;
          fontSize: string;
          lineHeight: string;
          marginStart: string;
          width: string;
        };
        _dark: {
          _before: {
            color: string;
          };
        };
      };
      margin: string;
      marginBottom: string;
      marginInlineStart: string;
      paddingStart: string;
      padding: string;
      display: string;
    };
    ol: {
      margin: string;
      marginBottom: string;
      listStyle: string;
      marginInlineStart: string;
      paddingStart: string;
      padding: string;
      display: string;
      li: {
        marginEnd: string;
        listStyleType: string;
        _notFirst: {
          marginTop: string;
        };
      };
    };
    section: {
      borderBottom: string;
      borderColor: string;
      paddingStart: string;
      h2: {
        borderTop: string;
        borderColor: string;
        margin: string;
        padding: string;
        _dark: {
          borderColor: string;
        };
      };
      _dark: {
        borderColor: string;
      };
    };
    dl: {
      display: string;
      gridTemplateColumns: {
        base: string;
        md: string;
      };
      gridTemplateRows: string;
      margin: string;
    };
    dt: {
      borderTop: string;
      borderColor: string;
      color: string;
      fontWeight: string;
      paddingBottom: {
        base: string;
        md: string;
      };
      paddingTop: string
      /** The following styles are meant to target HTML elements that are
       * not rendered from the Reservoir DS. Typically, these HTML elements
       * are added from an API response.
       */;
      _dark: {
        borderColor: string;
        color: string;
      };
    };
    dd: {
      margin: string;
      paddingBottom: string;
      borderTop: {
        base: string;
        md: string;
      };
      borderColor: {
        md: string;
      };
      paddingStart: {
        md: string;
      };
      paddingTop: {
        md: string;
      };
      _dark: {
        borderColor: {
          md: string;
        };
      };
    };
    table: {
      width: string;
      th: {
        color: string;
        fontWeight: string;
        fontSize: string;
        textTransform: string;
        _first: {
          backgroundColor: string;
          borderRight:
            | string
            | {
                base: any;
                md: string;
              };
          left: {
            base: any;
            md: string;
          };
          position: string;
          zIndex: string;
          _dark: {
            backgroundColor: string;
            borderRight:
              | string
              | {
                  base: any;
                  md: string;
                };
          };
        };
        _dark: {
          color: string;
        };
        border: string;
        borderBottom: string;
        borderColor: string;
        display: {
          base: string;
          md: string;
        };
        gap: string;
        letterSpacing: string;
        lineHeight: number;
        paddingBottom:
          | string
          | {
              base: string;
              md: string;
            };
        paddingEnd: string;
        paddingStart:
          | string
          | {
              base: string;
              md: string;
            };
        paddingTop:
          | string
          | {
              base: string;
              md: string;
            };
        _last: {
          borderBottom: string;
          borderColor: string;
        };
        "> span": {
          flexBasis: string;
          paddingBottom: {
            base: string;
            md: string;
          };
          paddingTop: {
            base: string;
            md: string;
          };
          _first: {
            bg: string;
            color: string;
            fontWeight: string;
            paddingStart: string;
            _dark: {
              color: string;
            };
          };
        };
        textAlign: string;
        paddingInlineStart: string;
        paddingInlineEnd: string;
      };
      td: {
        _last: {
          borderBottom:
            | string
            | {
                base: number;
                md: string;
              };
        };
        border: string;
        borderBottom: string;
        borderColor: string;
        display: {
          base: string;
          md: string;
        };
        fontSize: string;
        gap: string;
        letterSpacing: string;
        lineHeight: number;
        paddingBottom:
          | string
          | {
              base: string;
              md: string;
            };
        paddingEnd: string;
        paddingStart:
          | string
          | {
              base: string;
              md: string;
            };
        paddingTop:
          | string
          | {
              base: string;
              md: string;
            };
        _first: {
          borderBottom: string;
          _dark: {
            borderBottom: string;
          };
        };
        "> span": {
          flexBasis: string;
          paddingBottom: {
            base: string;
            md: string;
          };
          paddingTop: {
            base: string;
            md: string;
          };
          _first: {
            bg: string;
            color: string;
            fontWeight: string;
            paddingStart: string;
            _dark: {
              color: string;
            };
          };
        };
        textAlign: string;
        paddingInlineStart: string;
        paddingInlineEnd: string;
      };
    };
  };
  sizes?: {
    [key: string]: import("@chakra-ui/styled-system").PartsStyleInterpolation<{
      keys: ("image" | "imageFigure" | "imageWrapper")[];
    }>;
  };
  variants?: {
    [key: string]: import("@chakra-ui/styled-system").PartsStyleInterpolation<{
      keys: ("image" | "imageFigure" | "imageWrapper")[];
    }>;
  };
  defaultProps?: {
    size?: string | number;
    variant?: string | number;
    colorScheme?: string;
  };
  parts: ("image" | "imageFigure" | "imageWrapper")[];
};
export default StructuredContent;
