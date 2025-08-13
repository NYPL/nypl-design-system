import { StyleFunctionProps } from "@chakra-ui/react";
declare const SocialMediaLinks: {
    baseStyle?: (props: StyleFunctionProps) => {
        display: string;
        alignItems: string;
        flexDirection: {
            base: "column" | "row";
            md: any;
        };
        justifyContent: {
            base: "center";
            md: "unset";
        };
        flexWrap: string;
        gap: {
            base: string;
            md: string;
        };
        marginBottom: string;
        li: {
            marginInlineEnd: string;
            marginTop: string;
            width: {
                base: "100%" | "unset";
                md: "unset";
            };
            _notFirst: {
                marginTop: string;
            };
        };
        a: {
            display: string;
            justifyContent: string;
            alignContent: string;
            flexWrap: string;
            minWidth: {
                base: string;
                md: "unset";
            };
            minHeight: {
                base: string;
                md: "unset";
            };
            fontStyle: string;
            fontSize: string;
            textDecoration: string;
            color: string;
            _hover: {
                color: string;
                textDecoration: string;
            };
            _visited: {
                color: string;
            };
            _dark: {
                color: string;
                _hover: {
                    color: string;
                };
                _visited: {
                    color: string;
                };
            };
        };
        div: {
            display: string;
            alignItems: string;
            gap: string;
            alignSelf: string;
            justifyContent: string;
            width: string;
            height: string;
        };
        svg: {
            fill: string;
            _dark: {
                fill: string;
            };
        };
    };
    sizes?: {
        [key: string]: import("@chakra-ui/styled-system").SystemStyleInterpolation;
    };
    variants?: {
        straight(props: StyleFunctionProps): {
            gap: string;
            a: {
                color: string;
                ".platLink": {
                    minHeight: {
                        base: string;
                        md: "0";
                    };
                    minWidth: {
                        base: string;
                        md: "0";
                    };
                };
                _hover: {
                    color: string;
                };
                _visited: {
                    color: string;
                };
                _dark: {
                    borderColor: string;
                    color: string;
                    _hover: {
                        color: string;
                    };
                    _visited: {
                        color: string;
                    };
                };
            };
            div: {
                padding: string;
                borderRadius: string;
                borderWidth: string;
                borderStyle: string;
                borderColor: string;
                width: string;
                _dark: {
                    borderColor: string;
                };
            };
            svg: {
                fill: string;
                _dark: {
                    fill: string;
                    borderColor: string;
                };
            };
        };
        circular(props: StyleFunctionProps): {
            gap: string;
            a: {
                color: string;
                ".platLink": {
                    minHeight: {
                        base: string;
                        md: "0";
                    };
                    minWidth: {
                        base: string;
                        md: "0";
                    };
                };
                _hover: {
                    color: string;
                };
                _visited: {
                    color: string;
                };
                _dark: {
                    color: string;
                    _hover: {
                        color: string;
                    };
                    _visited: {
                        color: string;
                    };
                };
            };
            div: {
                padding: string;
                borderRadius: string;
                borderColor: string;
                borderWidth: string;
                borderStyle: string;
                _dark: {
                    borderColor: string;
                };
            };
            svg: {
                fill: string;
                _dark: {
                    fill: string;
                };
            };
        };
        none(props: StyleFunctionProps): {
            a: {
                color: string;
                _hover: {
                    color: string;
                };
                _visited: {
                    color: string;
                };
                _dark: {
                    color: string;
                    _hover: {
                        color: string;
                    };
                    _visited: {
                        color: string;
                    };
                };
            };
            svg: {
                fill: string;
                _dark: {
                    fill: string;
                };
            };
        };
    };
    defaultProps?: {
        size?: string | number;
        variant?: "none" | "circular" | "straight";
        colorScheme?: string;
    };
};
export default SocialMediaLinks;
