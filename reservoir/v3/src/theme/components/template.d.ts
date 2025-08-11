declare const _default: {
  Template: {
    baseStyle?: {
      boxSizing: string;
      color: string;
      display: string;
      gridTemplateColumns: string;
      rowGap: string;
      _dark: {
        color: string;
      };
    };
    sizes?: {};
    variants?: {
      [
        key: string
      ]: import("@chakra-ui/styled-system").SystemStyleInterpolation;
    };
    defaultProps?: {
      size?: never;
      variant?: string | number;
      colorScheme?: string;
    };
  };
  TemplateBreakout: {
    baseStyle?: {
      width: string;
      gridColumn: string;
    };
    sizes?: {
      [
        key: string
      ]: import("@chakra-ui/styled-system").SystemStyleInterpolation;
    };
    variants?: {
      [
        key: string
      ]: import("@chakra-ui/styled-system").SystemStyleInterpolation;
    };
    defaultProps?: {
      size?: string | number;
      variant?: string | number;
      colorScheme?: string;
    };
  };
  TemplateContent: {
    baseStyle?: {
      gridColumn: string;
      display: {
        base: "flex";
        md: "grid";
      };
      flexDirection: {
        base: "column";
        md: any;
      };
      gridTemplateColumns: string;
      paddingY: number;
      rowGap: string;
    };
    sizes?: {
      [
        key: string
      ]: import("@chakra-ui/styled-system").SystemStyleInterpolation;
    };
    variants?: {
      left: {
        gridTemplateColumns: {
          md: "271px 1fr";
        };
      };
      right: {
        gridTemplateColumns: {
          md: "1fr 271px";
        };
      };
    };
    defaultProps?: {
      size?: string | number;
      variant?: "right" | "left";
      colorScheme?: string;
    };
  };
  TemplateContentTopBottom: {
    baseStyle?: {
      gridColumn: {
        base: "1";
        md: "1 / span 2";
      };
      height: string;
      paddingX: string;
    };
    sizes?: {
      [
        key: string
      ]: import("@chakra-ui/styled-system").SystemStyleInterpolation;
    };
    variants?: {
      [
        key: string
      ]: import("@chakra-ui/styled-system").SystemStyleInterpolation;
    };
    defaultProps?: {
      size?: string | number;
      variant?: string | number;
      colorScheme?: string;
    };
  };
  TemplateContentPrimary: {
    baseStyle?: {
      gridColumn: {
        base: "1";
        md: "1 / span 2";
      };
      paddingX: string;
    };
    sizes?: {
      [
        key: string
      ]: import("@chakra-ui/styled-system").SystemStyleInterpolation;
    };
    variants?: {
      left: {
        gridColumn: {
          base: "1";
          md: "2";
        };
        marginEnd: {
          md: number;
        };
        minWidth: {
          md: number;
        };
        paddingRight: string;
        paddingLeft: {
          base: "s";
          md: "l";
        };
        overflow: {
          base: "unset";
          md: "hidden";
        };
      };
      right: {
        gridColumn: string;
        paddingRight: {
          base: "s";
          md: "l";
        };
        paddingLeft: string;
        overflow: {
          base: "unset";
          md: "hidden";
        };
      };
    };
    defaultProps?: {
      size?: string | number;
      variant?: "right" | "left";
      colorScheme?: string;
    };
  };
  TemplateContentSidebar: {
    baseStyle?: import("@chakra-ui/styled-system").SystemStyleInterpolation;
    sizes?: {
      [
        key: string
      ]: import("@chakra-ui/styled-system").SystemStyleInterpolation;
    };
    variants?: {
      left: {
        gridColumn: string;
        paddingLeft: string;
        paddingRight: {
          base: "s";
          md: number;
        };
      };
      right: {
        gridColumn: {
          base: "1";
          md: "2";
        };
        paddingLeft: {
          base: "s";
          md: number;
        };
        paddingRight: string;
      };
    };
    defaultProps?: {
      size?: string | number;
      variant?: "right" | "left";
      colorScheme?: string;
    };
  };
};
export default _default;
