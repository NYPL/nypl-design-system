declare const SearchBar: {
  baseStyle?: ({
    hasSelectElem,
  }: import("@chakra-ui/styled-system").StyleFunctionProps) => {
    ".textInput": {
      flexGrow: number;
      "div > input": {
        borderRight: number;
        borderRightRadius: number;
      };
    };
    ".searchButton": {
      minWidth: string;
      borderLeftRadius: string;
      lineHeight: string;
      marginBottom: string;
      gap: string;
      borderRightRadius: string;
      " > svg": {
        margin: number;
      };
    };
    select: {
      flexShrink: string;
      textOverflow: string;
      _hover: {
        zIndex: string;
        "+ .chakra-select__icon-wrapper": {
          zIndex: string;
        };
      };
    };
    display: string;
  };
  sizes?: {
    [key: string]: import("@chakra-ui/styled-system").PartsStyleInterpolation<{
      keys: ("select" | "button")[];
    }>;
  };
  variants?: {
    [key: string]: import("@chakra-ui/styled-system").PartsStyleInterpolation<{
      keys: ("select" | "button")[];
    }>;
  };
  defaultProps?: {
    size?: string | number;
    variant?: string | number;
    colorScheme?: string;
  };
  parts: ("select" | "button")[];
};
export default SearchBar;
