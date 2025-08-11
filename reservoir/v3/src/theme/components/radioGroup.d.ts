declare const RadioGroup: {
  baseStyle?: ({
    isFullWidth,
    isLegendHidden,
  }: import("@chakra-ui/styled-system").StyleFunctionProps) => {
    helperErrorText: {
      marginTop: string;
    };
    label: {
      display: string;
      width: string;
    };
    spanLegend: {
      clip?: string;
      height?: {
        base: string;
        md: string;
      };
      overflow?: string;
      position?: {
        base: string;
        md: string;
      };
      width:
        | string
        | {
            base: string;
            md: string;
          };
      wordWrap?: string;
      display: string;
      color: string;
      fontSize: string;
      fontWeight: string;
      marginBottom: string;
      span: {
        fontWeight: string;
      };
      _dark: {
        color: string;
      };
    };
  };
  sizes?: {
    [key: string]: import("@chakra-ui/styled-system").PartsStyleInterpolation<{
      keys: ("label" | "legend" | "helperErrorText")[];
    }>;
  };
  variants?: {
    [key: string]: import("@chakra-ui/styled-system").PartsStyleInterpolation<{
      keys: ("label" | "legend" | "helperErrorText")[];
    }>;
  };
  defaultProps?: {
    size?: string | number;
    variant?: string | number;
    colorScheme?: string;
  };
  parts: ("label" | "legend" | "helperErrorText")[];
};
export default RadioGroup;
