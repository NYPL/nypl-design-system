declare const Breadcrumb: {
    baseStyle: {
        bg: string;
        color: string;
        fontSize: string;
        fontWeight: string;
        paddingBottom: string;
        paddingTop: string;
        _dark: {
            bg: string;
            color: string;
        };
        ol: {
            alignItems: {
                base: string;
                md: string;
            };
            display: {
                base: string;
                md: string;
            };
            margin: string;
            maxWidth: string;
            paddingStart: string;
            paddingEnd: string;
        };
        a: {
            _hover: {
                color: string;
                textDecoration: string;
            };
            _focus: {
                boxShadow: string;
                outline: string;
                outlineOffset: string;
                outlineColor: any;
                zIndex: string;
                _dark: {
                    outlineColor: any;
                };
            };
        };
        "li:last-child": {
            fontWeight: {
                base: string;
                md: string;
            };
            ".chakra-breadcrumb__link": {
                _hover: {
                    color: string;
                    cursor: string;
                    textDecoration: string;
                };
                _dark: {
                    _hover: {
                        color: string;
                    };
                };
            };
            ".icon": {
                display: string;
            };
        };
        "li:not(:last-child)": {
            display: {
                base: string;
                md: string;
            };
            a: {
                marginEnd: {
                    base: string;
                    md: string;
                };
            };
            ".icon": {
                display: {
                    base: string;
                    md: string;
                };
            };
            "span:not(.breadcrumb-label)": {
                marginInlineEnd: string;
                marginInlineStart: string;
            };
        };
        "li:nth-last-of-type(2)": {
            display: string;
            span: {
                display: {
                    base: string;
                    md: string;
                };
            };
        };
    };
    variants: {
        blogs: {
            bg: string;
            color: string;
            _dark: {
                bg: string;
            };
            a: {
                _hover: {
                    color: string;
                };
                _dark: {
                    _hover: {
                        color: string;
                    };
                };
                _focus: {
                    boxShadow: string;
                    outline: string;
                    outlineOffset: string;
                    outlineColor: any;
                    zIndex: string;
                    _dark: {
                        outlineColor: any;
                    };
                };
            };
            "li:last-child": {
                ".chakra-breadcrumb__link": {
                    _hover: {
                        color: string;
                    };
                };
            };
            svg: {
                fill: string;
            };
        };
        booksAndMore: {
            bg: string;
            _dark: {
                bg: string;
            };
        };
        brand: {
            bg: string;
            _dark: {
                bg: string;
            };
        };
        connect: {
            bg: string;
            _dark: {
                bg: string;
            };
        };
        education: {
            bg: string;
            _dark: {
                bg: string;
            };
        };
        locations: {
            bg: string;
            _dark: {
                bg: string;
            };
        };
        research: {
            bg: string;
            _dark: {
                bg: string;
            };
        };
        whatsOn: {
            bg: string;
            _dark: {
                bg: string;
            };
        };
    };
};
export default Breadcrumb;
