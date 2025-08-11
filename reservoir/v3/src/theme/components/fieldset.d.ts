import { StyleFunctionProps } from "@chakra-ui/react";
interface FieldSetProps extends StyleFunctionProps {
  isLegendHidden?: boolean;
}
declare const Fieldset: {
  baseStyle?: (props: FieldSetProps) => {
    border: number;
    padding: number;
    legend: {
      span: {
        fontWeight: string;
      };
      _dark: {
        color: string;
      };
      color: string;
      display: string;
      fontSize: string;
      fontWeight: string;
      marginBottom: string;
      width: string;
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
export default Fieldset;
