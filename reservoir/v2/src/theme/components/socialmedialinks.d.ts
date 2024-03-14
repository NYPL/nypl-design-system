import { StyleFunctionProps } from "@chakra-ui/theme-tools";
declare const SocialMediaLinks: {
    baseStyle: {
        display: string;
        alignItems: string;
        gap: string;
        width: {
            base: string;
            md: string;
        };
        marginBottom: string;
        li: {
            marginInlineEnd: string;
            marginTop: string;
            width: {
                base: string;
                md: string;
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
                md: string;
            };
            minHeight: {
                base: string;
                md: string;
            };
            fontStyle: string;
            fontSize: string;
            textDecoration: string;
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
    variants: {
        straight(props: StyleFunctionProps): {
            flexDirection: {
                base: string;
                md: any;
            };
            gap: string;
            a: {
                color: string;
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
            flexDirection: {
                base: string;
                md: any;
            };
            gap: string;
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
            flexDirection: {
                base: string;
                md: any;
            };
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
    defaultProps: {
        variant: string;
    };
};
export default SocialMediaLinks;
