import { StyleFunctionProps } from "@chakra-ui/system";
interface TagSetFilterProps extends StyleFunctionProps {
    isDismissible: boolean;
}
declare const _default: {
    TagSet: {
        baseStyle?: {
            alignItems: string;
            display: string;
            flexWrap: string;
            gap: string;
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
    TagSetExplore: {
        baseStyle?: {
            _focusWithin: {
                boxShadow: string;
                outline: string;
                outlineOffset: string;
                outlineColor: string;
                zIndex: string;
                _dark: {
                    outlineColor: string;
                };
            };
            a: {
                border: string;
                _focus: {
                    outline: string;
                };
            };
            "> span": {
                display: string;
                overflow: string;
                textOverflow: string;
                whiteSpace: string;
            };
            svg: {
                fill: string;
            };
            _hover: {
                bg: string;
                borderColor: string;
                a: {
                    color: string;
                };
                svg: {
                    fill: string;
                };
                "> span": {
                    color: string;
                };
            };
            _dark: {
                bg: string;
                borderColor: string;
                color: string;
                a: {
                    color: string;
                };
                svg: {
                    fill: string;
                };
                _hover: {
                    bg: string;
                    borderColor: string;
                    a: {
                        color: string;
                    };
                    svg: {
                        fill: string;
                    };
                    "> span": {
                        color: string;
                    };
                };
            };
            transitionDuration: string;
            transitionTimingFunction: string;
            textDecoration: string;
            textDecorationStyle: string;
            textDecorationThickness: string;
            display: string;
            alignItems: string;
            justifyContent: string;
            bg: string;
            border: string;
            borderColor: string;
            borderRadius: string;
            color: string;
            cursor: string;
            fontSize: string;
            height: {
                base: "32px";
                md: "22px";
            };
            minHeight: string;
            maxWidth: string;
            py: string;
            px: string;
            textUnderlineOffset: string;
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
    TagSetFilter: {
        baseStyle?: ({ isDismissible }: TagSetFilterProps) => {
            base: {
                "> span": {
                    display: string;
                    overflow: string;
                    textOverflow: string;
                    whiteSpace: string;
                };
                _hover: {
                    bg: string;
                    borderColor: string;
                };
                _dark: {
                    bg: string;
                    borderColor: string;
                    color: string;
                    _hover: {
                        bg: string;
                        borderColor: string;
                        color: string;
                    };
                };
                transitionDuration: string;
                transitionTimingFunction: string;
                alignItems: string;
                bg: string;
                border: string;
                borderColor: string;
                borderRadius: string;
                color: string;
                cursor: string;
                display: string;
                fontSize: string;
                height: {
                    base: "32px";
                    md: "22px";
                };
                justifyContent: string;
                minHeight: string;
                maxWidth: string;
                py: string;
                paddingLeft: string;
                paddingRight: string | {
                    base: "8px";
                    md: "6px";
                };
            };
        };
        sizes?: {
            [key: string]: import("@chakra-ui/styled-system").PartsStyleInterpolation<{
                keys: ("base" | "clearAll")[];
            }>;
        };
        variants?: {
            [key: string]: import("@chakra-ui/styled-system").PartsStyleInterpolation<{
                keys: ("base" | "clearAll")[];
            }>;
        };
        defaultProps?: {
            size?: string | number;
            variant?: string | number;
            colorScheme?: string;
        };
        parts: ("base" | "clearAll")[];
    };
};
export default _default;
