import { StyleFunctionProps } from "@chakra-ui/system";
import { iconSizeStyles } from "../sharedStyles";
declare const align: Record<string, {
    marginEnd?: string;
    marginStart?: string;
}>;
declare const iconRotation: Record<string, {
    transform: string;
}>;
interface IconBaseStyle extends StyleFunctionProps {
    align: keyof typeof align;
    color: string;
    iconRotation: keyof typeof iconRotation;
    size: keyof typeof iconSizeStyles;
}
declare const Icon: {
    baseStyle?: (props: IconBaseStyle) => {
        svg: {
            height: string;
            width: string;
            transform: string;
            fill: string;
            marginEnd?: string;
            marginStart?: string;
            display: string;
        };
        height: string;
        width: string;
        transform: string;
        fill: string;
        marginEnd?: string;
        marginStart?: string;
        display: string;
    };
    sizes?: {
        [key: string]: import("@chakra-ui/styled-system").SystemStyleInterpolation;
    };
    variants?: {
        default: {};
        breadcrumbs: {
            fill: string;
            display: {
                md: "none";
            };
        };
    };
    defaultProps?: {
        size?: string | number;
        variant?: "default" | "breadcrumbs";
        colorScheme?: string;
    };
};
export default Icon;
