declare const MultiSelectItemsCountButton: {
  baseStyle?: ({
    isOpen,
  }: import("@chakra-ui/styled-system").StyleFunctionProps) => {
    alignItems: string;
    backgroundColor: string;
    border: string;
    borderRadius: string;
    borderColor: string;
    display: string;
    flexShrink: number;
    fontSize: string;
    justifyContent: string;
    left: string;
    marginRight: string;
    position: string;
    top: {
      base: "12px";
      md: "10px";
    };
    width: string;
    zIndex: number;
    py: string;
    _focus: {
      zIndex: string;
    };
    _hover: {
      borderColor: string;
    };
    svg: {
      marginLeft: string;
      marginRight: string;
      marginTop: string;
    };
    _dark: {
      backgroundColor: string;
      borderColor: string;
      svg: {
        fill: string;
      };
      _hover: {
        borderColor: string;
      };
    };
  };
  sizes?: {
    [key: string]: import("@chakra-ui/styled-system").SystemStyleInterpolation;
  };
  variants?: {
    [key: string]: import("@chakra-ui/styled-system").SystemStyleInterpolation;
  };
  defaultProps?: {
    size?: string | number;
    variant?: string | number;
    colorScheme?: string;
  };
};
export default MultiSelectItemsCountButton;
