declare const Pagination: {
  baseStyle?: {
    display: string;
    minWidth: {
      base: string;
      md: string;
    };
    width: string;
    link: {
      lineHeight: string;
      textDecoration: string;
      _hover: {
        textDecoration: string;
      };
      _visited: {
        color: string;
      };
      _dark: {
        _visited: {
          color: string;
        };
      };
    };
    ul: {
      display: string;
      justifyContent: string;
      alignItems: string;
      marginBottom: string;
      justifyItems: string;
    };
    previousNextElement: {
      alignItems: string;
      color: string;
      _hover: {
        textDecoration: string;
        svg: {
          fill: string;
        };
        color: string;
      };
      _visited: {
        color: string;
        svg: {
          fill: string;
        };
      };
      svg: {
        fill: string;
      };
      _dark: {
        color: string;
        svg: {
          fill: string;
        };
        _visited: {
          color: string;
          svg: {
            fill: string;
          };
        };
      };
    };
    disabledElement: {
      color: string;
      pointerEvents: string;
      svg: {
        fill: string;
      };
      _dark: {
        color: string;
        svg: {
          fill: string;
        };
      };
    };
  };
  sizes?: {
    [key: string]: import("@chakra-ui/styled-system").PartsStyleInterpolation<{
      keys: ("link" | "previousNextElement" | "disabledElement")[];
    }>;
  };
  variants?: {
    [key: string]: import("@chakra-ui/styled-system").PartsStyleInterpolation<{
      keys: ("link" | "previousNextElement" | "disabledElement")[];
    }>;
  };
  defaultProps?: {
    size?: string | number;
    variant?: string | number;
    colorScheme?: string;
  };
  parts: ("link" | "previousNextElement" | "disabledElement")[];
};
export default Pagination;
