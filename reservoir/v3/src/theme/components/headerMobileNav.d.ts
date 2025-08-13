declare const HeaderMobileNav: {
    parts: string[];
    baseStyle: () => {
        backgroundColor: string;
        color: string;
        left: string;
        minHeight: string;
        position: string;
        whiteSpace: string;
        width: string;
        zIndex: string;
        logo: {
            marginTop: string;
            marginLeft: string;
        };
        sideNav: {
            lineHeight: string;
            marginBottom: string;
            padding: string;
            textAlign: string;
            "li:not(:first-child)": {
                marginTop: string;
            };
            a: {
                color: string;
                fontSize: string;
                fontWeight: string;
                textDecoration: string;
                _hover: {
                    color: string;
                    textDecoration: string;
                };
                _focus: {
                    outlineColor: string;
                    borderRadius: string;
                    outlineOffset: string;
                    outlineStyle: string;
                    outlineWidth: string;
                };
                _visited: {
                    color: string;
                };
            };
        };
        bottomLinks: {
            display: string;
            gridTemplateColumns: string;
            a: {
                alignItems: string;
                color: string;
                display: string;
                fontWeight: string;
                justifyContent: string;
                textDecoration: string;
                paddingY: string;
                paddingLeft: string;
                svg: {
                    marginRight: string;
                };
                _hover: {
                    color: string;
                    backgroundColor: string;
                    textDecoration: string;
                };
                _focus: {
                    outlineColor: string;
                    borderRadius: string;
                    outlineOffset: string;
                    outlineStyle: string;
                    outlineWidth: string;
                };
                _visited: {
                    color: string;
                };
                _last: {
                    backgroundColor: string;
                    _hover: {
                        backgroundColor: string;
                    };
                    _dark: {
                        bgColor: string;
                        color: string;
                        _hover: {
                            bgColor: string;
                        };
                    };
                };
            };
        };
    };
};
export default HeaderMobileNav;
