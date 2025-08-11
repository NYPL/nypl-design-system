import { StyleFunctionProps } from "@chakra-ui/system";
interface SelectBaseStyle extends StyleFunctionProps {
  labelPosition: string;
}
declare const Select: {
  baseStyle?: ({ labelPosition }: SelectBaseStyle) => {
    inline: {
      display: {
        md: "flex";
      };
      gap: {
        md: string;
      };
      alignItems: {
        md: "center";
      };
    };
    label: {
      marginBottom: string;
    };
    select: {
      backgroundColor: string;
      borderRadius: string;
      borderColor: string;
      fontSize: string;
      minHeight: {
        base: string;
        md: string;
      };
      paddingTop: string;
      paddingEnd: string;
      paddingBottom: string;
      paddingStart: string;
      flex: {
        md: string;
      };
      _hover: {
        borderColor: string;
      };
      _active: {
        borderColor: string;
        _dark: {
          borderColor: string;
          boxShadow: string;
          outline: string;
          outlineOffset: string;
          outlineColor: string;
          zIndex: string;
          _dark: {
            outlineColor: string;
          };
        };
        boxShadow: string;
        outline: string;
        outlineOffset: string;
        outlineColor: string;
        zIndex: string;
      };
      _disabled: {
        bg: string;
        borderColor: string;
        color: string;
        opacity: string;
        _dark: {
          bg: string;
          borderColor: string;
          color: string;
        };
      };
      _focus: {
        "+ .chakra-select__icon-wrapper": {
          zIndex: string;
        };
        borderColor: string;
        _dark: {
          borderColor: string;
          boxShadow: string;
          outline: string;
          outlineOffset: string;
          outlineColor: string;
          zIndex: string;
          _dark: {
            outlineColor: string;
          };
        };
        boxShadow: string;
        outline: string;
        outlineOffset: string;
        outlineColor: string;
        zIndex: string;
      };
      _invalid: {
        border: string;
        borderColor: string;
        boxShadow: string;
        color: string;
      };
      _dark: {
        backgroundColor: string;
        borderColor: string;
        color: string;
        _hover: {
          borderColor: string;
        };
        _invalid: {
          borderColor: string;
          color: string;
        };
      };
    };
  };
  sizes?: {
    [key: string]: import("@chakra-ui/styled-system").PartsStyleInterpolation<{
      keys: ("select" | "inline" | "helperText")[];
    }>;
  };
  variants?: {
    searchbar: {
      select: {
        flex: string;
      };
    };
  };
  defaultProps?: {
    size?: string | number;
    variant?: "searchbar";
    colorScheme?: string;
  };
  parts: ("select" | "inline" | "helperText")[];
};
export default Select;
