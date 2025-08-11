export declare const neutral: {
    borderColor: string;
    _dark: {
        borderColor: string;
    };
};
export declare const informative: {
    bgColor: string;
    borderColor: string;
    _dark: {
        bgColor: string;
        borderColor: string;
    };
};
export declare const positive: {
    bgColor: string;
    borderColor: string;
    _dark: {
        bgColor: string;
        borderColor: string;
    };
};
export declare const negative: {
    bgColor: string;
    borderColor: string;
    _dark: {
        bgColor: string;
        borderColor: string;
    };
};
export declare const warning: {
    bgColor: string;
    borderColor: string;
    _dark: {
        bgColor: string;
        borderColor: string;
    };
};
export declare const recommendation: {
    bgColor: string;
    borderColor: string;
    _dark: {
        bgColor: string;
        borderColor: string;
    };
};
declare const StatusBadge: {
    baseStyle?: ({ labelFontSize }: import("@chakra-ui/styled-system").StyleFunctionProps) => {
        alignItems: string;
        bgColor: string;
        borderLeft: string;
        borderColor: string;
        borderRadius: string;
        color: string;
        display: string;
        fontSize: any;
        fontWeight: string;
        py: string;
        paddingInlineEnd: string;
        paddingInlineStart: string;
        whiteSpace: string;
        width: string;
        _dark: {
            backgroundColor: string;
            borderColor: string;
            color: string;
        };
    };
    sizes?: {
        [key: string]: import("@chakra-ui/styled-system").SystemStyleInterpolation;
    };
    variants?: {
        low: {};
        medium: {
            borderColor: string;
            _dark: {
                borderColor: string;
            };
        };
        high: {
            borderColor: string;
            _dark: {
                borderColor: string;
            };
        };
        neutral: {
            borderColor: string;
            _dark: {
                borderColor: string;
            };
        };
        informative: {
            bgColor: string;
            borderColor: string;
            _dark: {
                bgColor: string;
                borderColor: string;
            };
        };
        positive: {
            bgColor: string;
            borderColor: string;
            _dark: {
                bgColor: string;
                borderColor: string;
            };
        };
        negative: {
            bgColor: string;
            borderColor: string;
            _dark: {
                bgColor: string;
                borderColor: string;
            };
        };
        warning: {
            bgColor: string;
            borderColor: string;
            _dark: {
                bgColor: string;
                borderColor: string;
            };
        };
        recommendation: {
            bgColor: string;
            borderColor: string;
            _dark: {
                bgColor: string;
                borderColor: string;
            };
        };
    };
    defaultProps?: {
        size?: string | number;
        variant?: "medium" | "neutral" | "informative" | "positive" | "negative" | "warning" | "recommendation" | "low" | "high";
        colorScheme?: string;
    };
};
export default StatusBadge;
