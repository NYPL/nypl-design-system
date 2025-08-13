declare const AlphabetFilter: {
    baseStyle?: {
        button: {
            minWidth: {
                base: string;
                md: "auto";
            };
            height: {
                base: string;
                md: "auto";
            };
            padding: string;
            margin: string;
            fontSize: {
                base: "mobile.subtitle.subtitle1";
                md: "desktop.subtitle.subtitle1";
            };
            lineHeight: string;
            _last: {
                fontSize: string;
                fontWeight: string;
                px: {
                    base: "s";
                    md: "xs";
                };
                py: {
                    base: any;
                    md: "xxs";
                };
                whiteSpace: string;
            };
            _disabled: {
                color: string;
                cursor: string;
            };
        };
    };
    sizes?: {
        [key: string]: import("@chakra-ui/styled-system").PartsStyleInterpolation<{
            keys: "button"[];
        }>;
    };
    variants?: {
        [key: string]: import("@chakra-ui/styled-system").PartsStyleInterpolation<{
            keys: "button"[];
        }>;
    };
    defaultProps?: {
        size?: string | number;
        variant?: string | number;
        colorScheme?: string;
    };
    parts: "button"[];
};
export default AlphabetFilter;
