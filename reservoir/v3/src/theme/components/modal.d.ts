declare const Modal: {
    baseStyle?: {
        dialog: {
            _dark: {
                bg: string;
            };
            borderRadius: string;
        };
        header: {
            color: string;
            fontWeight: string;
            _dark: {
                color: string;
            };
            paddingTop: string;
            paddingLeft: string;
            paddingRight: string;
            paddingBottom: string;
            "h2, h3, h4, h5, h6": {
                marginBottom: number;
            };
        };
        body: {
            _dark: {
                color: string;
            };
            paddingTop: number;
            paddingLeft: string;
            paddingRight: string;
            paddingBottom: string;
        };
        footer: {
            paddingTop: number;
            paddingBottom: string;
            paddingLeft: string;
            paddingRight: string;
        };
        closeButton: {
            marginRight: string;
        };
    };
    sizes?: {
        [key: string]: import("@chakra-ui/styled-system").PartsStyleInterpolation<{
            keys: ("body" | "dialog" | "footer" | "header" | "overlay" | "closeButton" | "dialogContainer")[];
        }>;
    };
    variants?: {
        [key: string]: import("@chakra-ui/styled-system").PartsStyleInterpolation<{
            keys: ("body" | "dialog" | "footer" | "header" | "overlay" | "closeButton" | "dialogContainer")[];
        }>;
    };
    defaultProps?: {
        size?: string | number;
        variant?: string | number;
        colorScheme?: string;
    };
    parts: ("body" | "dialog" | "footer" | "header" | "overlay" | "closeButton" | "dialogContainer")[];
};
export default Modal;
