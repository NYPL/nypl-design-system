declare const Tooltip: {
  baseStyle?: {
    [x: string]:
      | string
      | {
          [x: string]: string;
          color: string;
        };
    borderRadius: string;
    boxShadow: string;
    color: string;
    fontSize: string;
    marginBottom: string;
    maxWidth: string;
    marginTop: string;
    px: string;
    py: string;
    _dark: {
      [x: string]: string;
      color: string;
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
export default Tooltip;
