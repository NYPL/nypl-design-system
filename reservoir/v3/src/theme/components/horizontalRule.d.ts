import { StyleFunctionProps } from "@chakra-ui/react";
interface HorizontalRuleBaseStyle extends StyleFunctionProps {
    align: string;
}
declare const HorizontalRule: {
    baseStyle?: (props: HorizontalRuleBaseStyle) => {
        bg: string;
        border: string;
        height: string;
        marginBottom: string;
        marginTop: string;
        marginStart: string | number;
        marginEnd: string | number;
        _dark: {
            bg: string;
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
export default HorizontalRule;
