declare const ButtonGroup: {
  baseStyle?: ({
    buttonWidth,
  }: import("@chakra-ui/styled-system").StyleFunctionProps) => {
    width: {
      base: "100%";
      md: "100%" | "fit-content";
    };
    button: {
      flexGrow: string;
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
export default ButtonGroup;
