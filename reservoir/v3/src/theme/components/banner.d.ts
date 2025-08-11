declare const Banner: {
    baseStyle?: ({ backgroundColor, highlightColor }: import("@chakra-ui/styled-system").StyleFunctionProps) => {
        base: {
            alignItems: string;
            backgroundColor: any;
            borderLeft: string;
            borderColor: any;
            display: string;
            fontSize: string;
            flexDirection: string;
            gap: string;
            justifyContent: string;
            py: string;
            paddingEnd: string;
            paddingStart: {
                base: "s";
                md: "l";
            };
            position: string;
            width: string;
            a: {
                color: string;
                _hover: {
                    color: string;
                };
            };
            svg: {
                fill: any;
            };
            _dark: {
                a: {
                    color: string;
                    _hover: {
                        color: string;
                    };
                };
            };
        };
        dismissibleButton: {
            alignItems: string;
            border: string;
            bgColor: string;
            color: string;
            display: string;
            margin: string;
            minWidth: string;
            position: string;
            right: string;
            top: string;
            svg: {
                fill: string;
                _dark: {
                    fill: string;
                };
            };
            _hover: {
                bg: string;
            };
            _dark: {
                color: string;
            };
        };
    };
    sizes?: {
        [key: string]: import("@chakra-ui/styled-system").PartsStyleInterpolation<{
            keys: ("base" | "dismissibleButton")[];
        }>;
    };
    variants?: {
        neutral: {
            base: {
                bgColor: string;
                svg: {
                    fill: string;
                    _dark: {
                        fill: string;
                    };
                };
                _dark: {
                    bgColor: string;
                };
                borderColor: string;
            };
        };
        informative: {
            base: {
                svg: {
                    fill: string;
                    _dark: {
                        fill: string;
                    };
                };
                bgColor: string;
                borderColor: string;
                _dark: {
                    bgColor: string;
                    borderColor: string;
                };
            };
        };
        positive: {
            base: {
                svg: {
                    fill: string;
                    _dark: {
                        fill: string;
                    };
                };
                bgColor: string;
                borderColor: string;
                _dark: {
                    bgColor: string;
                    borderColor: string;
                };
            };
        };
        negative: {
            base: {
                color: string;
                a: {
                    color: string;
                    _hover: {
                        color: string;
                    };
                    _visited: {
                        color: string;
                    };
                };
                svg: {
                    fill: string;
                    _hover: {
                        fill: string;
                    };
                    _dark: {
                        fill: string;
                    };
                };
                _dark: {
                    a: {
                        color: string;
                        _hover: {
                            color: string;
                        };
                        _visited: {
                            color: string;
                        };
                    };
                    color: string;
                };
                bgColor: string;
                borderColor: string;
            };
        };
        warning: {
            base: {
                svg: {
                    fill: string;
                    _dark: {
                        fill: string;
                    };
                };
                bgColor: string;
                borderColor: string;
                _dark: {
                    bgColor: string;
                    borderColor: string;
                };
            };
        };
        recommendation: {
            base: {
                svg: {
                    fill: string;
                    _dark: {
                        fill: string;
                    };
                };
                bgColor: string;
                borderColor: string;
                _dark: {
                    bgColor: string;
                    borderColor: string;
                };
            };
        };
    };
    defaultProps?: {
        size?: string | number;
        variant?: "neutral" | "informative" | "positive" | "negative" | "warning" | "recommendation";
        colorScheme?: string;
    };
    parts: ("base" | "dismissibleButton")[];
};
export default Banner;
