export declare const getTextColor: (
  type: any,
  mode: any,
  foregroundColor: any,
  isDarkText: any
) => any;
export declare const getLinkColor: (
  state: any,
  foregroundColor: any,
  isDarkText: any
) => any;
declare const Hero: {
  baseStyle?: {};
  sizes?: {
    [key: string]: import("@chakra-ui/styled-system").PartsStyleInterpolation<{
      keys: (
        | "base"
        | "content"
        | "imgWrapper"
        | "bodyText"
        | "heading"
        | "interior"
      )[];
    }>;
  };
  variants?: {
    primary: ({
      foregroundColor,
      isDarkText,
    }: import("@chakra-ui/styled-system").StyleFunctionProps) => {
      base: {
        alignItems: string;
        backgroundSize: string;
        backgroundPosition: string;
        display: string;
        flexFlow: {
          base: "column nowrap";
          md: "row nowrap";
        };
        justifyContent: string;
        minHeight: string;
        p: string;
      };
      content: {
        bg: string;
        color: any;
        flex: {
          base: string;
          md: string;
        };
        maxWidth: {
          md: "860px";
        };
        padding: {
          base: "inset.default";
          lg: "inset.wide";
        };
        paddingEnd: {
          lg: "inset.wide";
        };
        paddingStart: {
          lg: "inset.wide";
        };
        a: {
          color: string;
          display: string;
        };
        bodyText: {
          marginBottom: string;
        };
        ".chakra-heading": {
          color: any;
        };
        _dark: {
          bgColor: string;
          color: any;
          ".chakra-heading": {
            color: any;
          };
        };
      };
      heading: {
        color: any;
      };
    };
    secondary: {
      heading: {
        color: string;
        _before: {
          bg: string;
          content: string;
          height: string;
          left: string;
          position: string;
          width: string;
          zIndex: string;
        };
        _dark: {
          color: string;
          _before: {
            bg: string;
          };
        };
        marginBottom: string;
        flex: string;
        marginTop: string;
        paddingBottom: string;
        position: string;
        zIndex: string;
        order: string;
      };
      base: {
        overflowX: string;
        bgColor: string;
        _dark: {
          bgColor: string;
        };
      };
      content: {
        paddingEnd: string;
        paddingStart: string;
        display: string;
        flexFlow: {
          base: "column nowrap";
          md: "row wrap";
        };
        marginY: string;
        marginX: string;
        maxWidth: string;
        padding: string;
        width: string;
      };
      imgWrapper: {
        marginEnd: {
          base: "calc(-50vw + 50%)";
          md: "0";
        };
        marginStart: {
          base: "calc(-50vw + 50%)";
          md: "0";
        };
        flex: {
          base: string;
          md: string;
        };
        order: {
          base: "2";
          md: "3";
        };
        img: {
          height: string;
          minWidth: string;
          objectFit: string;
          width: string;
        };
      };
      bodyText: {
        paddingBottom: string;
        paddingEnd: {
          md: "inset.default";
        };
        paddingTop: string;
        flex: {
          md: string;
        };
        order: {
          base: "3";
          md: "2";
        };
      };
    };
    secondaryBooksAndMore: {
      heading: {
        color: string;
        _before: {
          bg: string;
          content: string;
          height: string;
          left: string;
          position: string;
          width: string;
          zIndex: string;
        };
        _dark: {
          color: string;
          _before: {
            bg: string;
          };
        };
        marginBottom: string;
        flex: string;
        marginTop: string;
        paddingBottom: string;
        position: string;
        zIndex: string;
        order: string;
      };
      base: {
        overflowX: string;
        bgColor: string;
        _dark: {
          bgColor: string;
        };
      };
      content: {
        paddingEnd: string;
        paddingStart: string;
        display: string;
        flexFlow: {
          base: "column nowrap";
          md: "row wrap";
        };
        marginY: string;
        marginX: string;
        maxWidth: string;
        padding: string;
        width: string;
      };
      imgWrapper: {
        marginEnd: {
          base: "calc(-50vw + 50%)";
          md: "0";
        };
        marginStart: {
          base: "calc(-50vw + 50%)";
          md: "0";
        };
        flex: {
          base: string;
          md: string;
        };
        order: {
          base: "2";
          md: "3";
        };
        img: {
          height: string;
          minWidth: string;
          objectFit: string;
          width: string;
        };
      };
      bodyText: {
        paddingBottom: string;
        paddingEnd: {
          md: "inset.default";
        };
        paddingTop: string;
        flex: {
          md: string;
        };
        order: {
          base: "3";
          md: "2";
        };
      };
    };
    secondaryLocations: {
      heading: {
        color: string;
        _before: {
          bg: string;
          content: string;
          height: string;
          left: string;
          position: string;
          width: string;
          zIndex: string;
        };
        _dark: {
          color: string;
          _before: {
            bg: string;
          };
        };
        marginBottom: string;
        flex: string;
        marginTop: string;
        paddingBottom: string;
        position: string;
        zIndex: string;
        order: string;
      };
      base: {
        overflowX: string;
        bgColor: string;
        _dark: {
          bgColor: string;
        };
      };
      content: {
        paddingEnd: string;
        paddingStart: string;
        display: string;
        flexFlow: {
          base: "column nowrap";
          md: "row wrap";
        };
        marginY: string;
        marginX: string;
        maxWidth: string;
        padding: string;
        width: string;
      };
      imgWrapper: {
        marginEnd: {
          base: "calc(-50vw + 50%)";
          md: "0";
        };
        marginStart: {
          base: "calc(-50vw + 50%)";
          md: "0";
        };
        flex: {
          base: string;
          md: string;
        };
        order: {
          base: "2";
          md: "3";
        };
        img: {
          height: string;
          minWidth: string;
          objectFit: string;
          width: string;
        };
      };
      bodyText: {
        paddingBottom: string;
        paddingEnd: {
          md: "inset.default";
        };
        paddingTop: string;
        flex: {
          md: string;
        };
        order: {
          base: "3";
          md: "2";
        };
      };
    };
    secondaryResearch: {
      heading: {
        color: string;
        _before: {
          bg: string;
          content: string;
          height: string;
          left: string;
          position: string;
          width: string;
          zIndex: string;
        };
        _dark: {
          color: string;
          _before: {
            bg: string;
          };
        };
        marginBottom: string;
        flex: string;
        marginTop: string;
        paddingBottom: string;
        position: string;
        zIndex: string;
        order: string;
      };
      base: {
        overflowX: string;
        bgColor: string;
        _dark: {
          bgColor: string;
        };
      };
      content: {
        paddingEnd: string;
        paddingStart: string;
        display: string;
        flexFlow: {
          base: "column nowrap";
          md: "row wrap";
        };
        marginY: string;
        marginX: string;
        maxWidth: string;
        padding: string;
        width: string;
      };
      imgWrapper: {
        marginEnd: {
          base: "calc(-50vw + 50%)";
          md: "0";
        };
        marginStart: {
          base: "calc(-50vw + 50%)";
          md: "0";
        };
        flex: {
          base: string;
          md: string;
        };
        order: {
          base: "2";
          md: "3";
        };
        img: {
          height: string;
          minWidth: string;
          objectFit: string;
          width: string;
        };
      };
      bodyText: {
        paddingBottom: string;
        paddingEnd: {
          md: "inset.default";
        };
        paddingTop: string;
        flex: {
          md: string;
        };
        order: {
          base: "3";
          md: "2";
        };
      };
    };
    secondaryWhatsOn: {
      heading: {
        color: string;
        _before: {
          bg: string;
          content: string;
          height: string;
          left: string;
          position: string;
          width: string;
          zIndex: string;
        };
        _dark: {
          color: string;
          _before: {
            bg: string;
          };
        };
        marginBottom: string;
        flex: string;
        marginTop: string;
        paddingBottom: string;
        position: string;
        zIndex: string;
        order: string;
      };
      base: {
        overflowX: string;
        bgColor: string;
        _dark: {
          bgColor: string;
        };
      };
      content: {
        paddingEnd: string;
        paddingStart: string;
        display: string;
        flexFlow: {
          base: "column nowrap";
          md: "row wrap";
        };
        marginY: string;
        marginX: string;
        maxWidth: string;
        padding: string;
        width: string;
      };
      imgWrapper: {
        marginEnd: {
          base: "calc(-50vw + 50%)";
          md: "0";
        };
        marginStart: {
          base: "calc(-50vw + 50%)";
          md: "0";
        };
        flex: {
          base: string;
          md: string;
        };
        order: {
          base: "2";
          md: "3";
        };
        img: {
          height: string;
          minWidth: string;
          objectFit: string;
          width: string;
        };
      };
      bodyText: {
        paddingBottom: string;
        paddingEnd: {
          md: "inset.default";
        };
        paddingTop: string;
        flex: {
          md: string;
        };
        order: {
          base: "3";
          md: "2";
        };
      };
    };
    tertiary: ({
      foregroundColor,
      isDarkText,
    }: import("@chakra-ui/styled-system").StyleFunctionProps) => {
      base: {
        p: {
          marginBottom: "0";
        };
      };
      content: {
        color: any;
        display: string;
        flexFlow: string;
        px: string;
        py: {
          base: "inset.default";
          xl: "inset.wide";
        };
        a: {
          color: any;
          _hover: {
            color: any;
          };
          _visited: {
            color: any;
            svg: {
              fill: any;
            };
          };
        };
        p: {
          marginBottom: "0";
          marginTop: {
            base: "xxs";
            xl: "xs";
          };
        };
        ".chakra-heading": {
          color: any;
        };
        _dark: {
          a: {
            color: any;
            _hover: {
              color: any;
            };
            _visited: {
              color: any;
              svg: {
                fill: any;
              };
            };
          };
          p: {
            color: any;
          };
          ".chakra-heading": {
            color: any;
          };
        };
        marginY: string;
        marginX: string;
        maxWidth: string;
        padding: string;
        width: string;
      };
      heading: {
        color: string;
        marginBottom: string;
        _lastChild: {
          marginBottom: string;
        };
      };
    };
    campaign: ({
      foregroundColor,
      isDarkText,
    }: import("@chakra-ui/styled-system").StyleFunctionProps) => {
      base: {
        alignItems: string;
        display: string;
        justifyContent: string;
        padding: {
          base: "inset.wide";
          md: "calc(var(--nypl-space-xxl) + var(--nypl-space-s)) var(--nypl-space-s) 0";
        };
        position: string;
        a: {
          color: string;
          display: string;
        };
        img: {
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
      content: {
        alignItems: string;
        bg: string;
        color: any;
        display: string;
        flexFlow: {
          base: "column nowrap";
          lg: "row nowrap";
        };
        minHeight: string;
        flex: {
          md: string;
        };
        maxWidth: {
          md: "1248px";
        };
        position: {
          md: "relative";
        };
        zIndex: number;
        a: {
          color: any;
          _hover: {
            color: any;
          };
          _visited: {
            color: any;
            svg: {
              fill: any;
            };
          };
        };
        ".chakra-heading": {
          color: any;
        };
        _dark: {
          color: any;
          a: {
            color: any;
            _hover: {
              color: any;
            };
            _visited: {
              color: any;
              svg: {
                fill: any;
              };
            };
          };
          ".chakra-heading": {
            color: any;
          };
        };
      };
      heading: {
        color: string;
      };
      imgWrapper: {
        backgroundPosition: string;
        backgroundSize: string;
        minHeight: string;
        width: {
          base: "100%";
          lg: "50%";
        };
      };
      interior: {
        alignSelf: string;
        maxWidth: {
          md: "960px";
        };
        padding: string;
        width: {
          base: "100%";
          lg: "50%";
        };
      };
    };
    fiftyFifty: {
      base: {
        img: {
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
      content: {
        alignItems: string;
        display: string;
        flexFlow: {
          base: "column nowrap";
          lg: "row nowrap";
        };
        marginY: string;
        marginX: string;
        maxWidth: string;
        padding: string;
        width: string;
      };
      imgWrapper: {
        backgroundPosition: string;
        backgroundSize: string;
        minHeight: string;
        width: {
          base: "100%";
          lg: "50%";
        };
      };
      bodyText: {
        alignSelf: string;
        maxWidth: {
          md: "960px";
        };
        padding: {
          base: "inset.default";
          md: "inset.wide";
        };
        width: {
          base: "100%";
          lg: "50%";
        };
      };
    };
  };
  defaultProps?: {
    size?: string | number;
    variant?:
      | "primary"
      | "secondary"
      | "tertiary"
      | "secondaryBooksAndMore"
      | "secondaryLocations"
      | "secondaryResearch"
      | "secondaryWhatsOn"
      | "campaign"
      | "fiftyFifty";
    colorScheme?: string;
  };
  parts: (
    | "base"
    | "content"
    | "imgWrapper"
    | "bodyText"
    | "heading"
    | "interior"
  )[];
};
export default Hero;
