import { StyleFunctionProps } from "@chakra-ui/react";
interface LabelBaseStyle extends StyleFunctionProps {
    isInlined: boolean;
}
declare const Label: {
    baseStyle?: (props: LabelBaseStyle) => {
        flex: string;
        whiteSpace: string;
        span: {
            fontWeight: string;
        };
        color: string;
        display: string;
        fontSize: string;
        fontWeight: string;
        marginBottom: string;
        width: string;
        _dark: {
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
export default Label;
