import { StyleFunctionProps } from "@chakra-ui/system";
interface CustomLinkStyleProps extends StyleFunctionProps {
  finalIsUnderlined: boolean;
  hasVisitedState: boolean;
}
export declare const linkUnderlineStyles: {
  textDecoration: string;
  textDecorationStyle: string;
  textDecorationThickness: string;
};
export declare const baseLinkStyles: {
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
declare const Link: {
  baseStyle?: ({
    finalIsUnderlined,
    hasVisitedState,
  }: CustomLinkStyleProps) => {
    base: {
      _visited:
        | {
            color: string;
            _dark: {
              color: string;
            };
          }
        | {
            color?: undefined;
            _dark?: undefined;
          };
      textDecoration: string;
      /** This is needed for custom anchor elements or link components
       * that are passed as children to the `Link` component. */
      a: {
        _hover: {
          color: string;
        };
      };
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
      textDecorationStyle: string;
      textDecorationThickness: string;
      color: string;
      textUnderlineOffset: string;
    };
    /** The element will handle descriptive text added to aid
     * screen readers. */
    screenreaderOnly: {
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
  sizes?: {
    [key: string]: import("@chakra-ui/styled-system").PartsStyleInterpolation<{
      keys: ("base" | "screenreaderOnly")[];
    }>;
  };
  variants?: {
    button: {
      base: {
        width: string;
        borderRadius: string;
        lineHeight: string;
        display: string;
        cursor: string;
        color: string;
        justifyContent: string;
        py: string;
        px: string;
        textDecoration: string;
        fontWeight: string;
        bg: string;
        _dark: {
          color: string;
          bg: string;
        };
        _hover: {
          color: string;
          bg: string;
          textDecoration: string;
          textDecorationStyle: string;
          textDecorationThickness: string;
          _dark: {
            color: string;
            bg: string;
          };
        };
        _visited: {
          color: string;
          _dark: {
            _visited: {
              color: string;
            };
          };
        };
      };
    };
    buttonCallout: ({ hasVisitedState }: CustomLinkStyleProps) => {
      base: any;
    };
    buttonDisabled: ({ hasVisitedState }: CustomLinkStyleProps) => {
      base: any;
    };
    buttonNoBrand: ({ hasVisitedState }: CustomLinkStyleProps) => {
      base: any;
    };
    buttonPill: ({ hasVisitedState }: CustomLinkStyleProps) => {
      base: any;
    };
    buttonPrimary: ({ hasVisitedState }: CustomLinkStyleProps) => {
      base: any;
    };
    buttonSecondary: ({ hasVisitedState }: CustomLinkStyleProps) => {
      base: any;
    };
    moreLink: ({ hasVisitedState }: CustomLinkStyleProps) => {
      base: {
        alignItems: string;
        display: string;
        whiteSpace: string;
        svg: {
          height: string;
          width: string;
          textDecoration: string;
          fill: string;
        };
        _hover: {
          color: string;
          textDecoration: string;
          textDecorationStyle: string;
          textDecorationThickness: string;
        };
        _visited:
          | {
              svg: {
                fill: string;
              };
              _dark: {
                svg: {
                  fill: string;
                };
              };
            }
          | {
              svg?: undefined;
              _dark?: undefined;
            };
      };
    };
  };
  defaultProps?: {
    size?: string | number;
    variant?:
      | "button"
      | "buttonCallout"
      | "buttonDisabled"
      | "buttonNoBrand"
      | "buttonPill"
      | "buttonPrimary"
      | "buttonSecondary"
      | "moreLink";
    colorScheme?: string;
  };
  parts: ("base" | "screenreaderOnly")[];
};
export default Link;
