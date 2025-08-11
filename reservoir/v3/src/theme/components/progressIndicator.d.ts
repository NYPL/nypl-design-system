import { ProgressIndicatorLabelPlacements, ProgressIndicatorSizes } from "../../components/ProgressIndicator/ProgressIndicator";
import { StyleFunctionProps } from "@chakra-ui/system";
interface ProgressIndicatorBaseStyle extends StyleFunctionProps {
    darkMode: boolean;
    size: ProgressIndicatorSizes;
    labelPlacement: ProgressIndicatorLabelPlacements;
}
declare const ProgressIndicator: {
    baseStyle?: ({ darkMode, size, labelPlacement }: ProgressIndicatorBaseStyle) => {
        color: string;
        fontSize: string;
        _dark: {
            color: string;
        };
        circular: {
            svg: {
                height: string;
                width: string;
                display: string;
                circle: {
                    _first: {
                        stroke: string;
                        _dark: {
                            stroke: string;
                        };
                    };
                    _last: {
                        stroke: string;
                        _dark: {
                            stroke: string;
                        };
                    };
                };
            };
        };
        circularContainer: {
            alignItems: string;
            display: string;
            flexDirection: any;
            width: string;
        };
        circularLabel: {
            marginBottom: string | number;
            marginLeft: string | number;
            marginRight: string | number;
            marginTop: string | number;
            fontSize: string;
        };
        linear: {
            "> div": {
                bg: string;
                _dark: {
                    bg: string;
                };
            };
            flex: number;
            bg: string;
            height: {
                base: "4px";
                md: "4px" | "8px";
            };
            _dark: {
                bg: string;
                color: string;
            };
        };
        linearContainer: {
            display: string;
            alignItems: string;
        };
        linearPercentage: {
            padding: string;
            flex: number;
        };
    };
    sizes?: {
        [key: string]: import("@chakra-ui/styled-system").PartsStyleInterpolation<{
            keys: ("linear" | "circular" | "circularLabel" | "linearContainer" | "linearPercentage")[];
        }>;
    };
    variants?: {
        [key: string]: import("@chakra-ui/styled-system").PartsStyleInterpolation<{
            keys: ("linear" | "circular" | "circularLabel" | "linearContainer" | "linearPercentage")[];
        }>;
    };
    defaultProps?: {
        size?: string | number;
        variant?: string | number;
        colorScheme?: string;
    };
    parts: ("linear" | "circular" | "circularLabel" | "linearContainer" | "linearPercentage")[];
};
export default ProgressIndicator;
