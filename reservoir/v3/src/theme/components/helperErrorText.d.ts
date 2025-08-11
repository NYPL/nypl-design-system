import { StyleFunctionProps } from "@chakra-ui/system";
interface HelperErrorTextBaseStyle extends StyleFunctionProps {
  isInvalid: boolean;
}
declare const helperErrorText: {
  baseStyle?: ({ isInvalid }: HelperErrorTextBaseStyle) => {
    fontSize: string;
    color: string;
    _dark: {
      color: string;
    };
    innerChild: {
      marginTop: string;
      marginBottom: string;
    };
  };
  sizes?: {
    [key: string]: import("@chakra-ui/styled-system").PartsStyleInterpolation<{
      keys: "innerChild"[];
    }>;
  };
  variants?: {
    [key: string]: import("@chakra-ui/styled-system").PartsStyleInterpolation<{
      keys: "innerChild"[];
    }>;
  };
  defaultProps?: {
    size?: string | number;
    variant?: string | number;
    colorScheme?: string;
  };
  parts: "innerChild"[];
};
export default helperErrorText;
