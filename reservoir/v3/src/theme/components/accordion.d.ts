declare const Accordion: {
    baseStyle?: {
        container: {
            border: string;
            width: string;
            _dark: {
                bg: string;
                borderColor: string;
            };
        };
        button: {
            borderWidth: string;
            " > span ": {
                display: string;
                alignItems: string;
                minHeight: string;
            };
            color: string;
            fontWeight: string;
            svg: {
                marginStart: string;
            };
            _dark: {
                bg: string;
                color: string;
            };
        };
        panel: {
            padding: string;
            borderLeftWidth: string;
            borderRightWidth: string;
            borderBottomWidth: string;
            _dark: {
                bg: string;
                color: string;
                borderColor: string;
            };
        };
    };
    sizes?: {
        [key: string]: import("@chakra-ui/styled-system").PartsStyleInterpolation<{
            keys: ("button" | "container" | "panel")[];
        }>;
    };
    variants?: {
        [key: string]: import("@chakra-ui/styled-system").PartsStyleInterpolation<{
            keys: ("button" | "container" | "panel")[];
        }>;
    };
    defaultProps?: {
        size?: string | number;
        variant?: string | number;
        colorScheme?: string;
    };
    parts: ("button" | "container" | "panel")[];
};
export default Accordion;
