declare const CheckboxGroup: {
  baseStyle?: ({
    isFullWidth,
  }: import("@chakra-ui/styled-system").StyleFunctionProps) => {
    helperErrorText: {
      marginTop: string;
    };
    label: {
      display: string;
      width: string;
    };
  };
  sizes?: {
    [key: string]: import("@chakra-ui/styled-system").PartsStyleInterpolation<{
      keys: "helperErrorText"[];
    }>;
  };
  variants?: {
    [key: string]: import("@chakra-ui/styled-system").PartsStyleInterpolation<{
      keys: "helperErrorText"[];
    }>;
  };
  defaultProps?: {
    size?: string | number;
    variant?: string | number;
    colorScheme?: string;
  };
  parts: "helperErrorText"[];
};
export default CheckboxGroup;
