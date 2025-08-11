export declare const headerBlack = "#2b2b2b";
export declare const headerBlue = "#1B7FA7";
export declare const headerDarkBlue = "#135772";
export declare const headerFocusColor = "#0F465C";
export declare const headerLightBlue = "#78CCED";
export declare const headerLightBlueIcon = "#1DA1D4";
export declare const headerRed = "#ED1C24";
export declare const headerRedDarkMode = "dark.ui.error.primary";
export declare const headerRedDonate = "#E32B31";
export declare const headerYellow = "#FEE34A";
export declare const headerYellowDark = "#403B2D";
export declare const headerFocus: {
    borderRadius: string;
    outlineColor: string;
    outlineOffset: string;
    outlineStyle: string;
    outlineWidth: string;
};
declare const Header: {
    parts: string[];
    baseStyle: {
        fontFamily: string;
        fontSize: string;
        fontWeight: string;
        "& > nav li": {
            marginBottom: string;
        };
        "& > nav a": {
            lineHeight: string;
            _focus: {
                boxShadow: string;
                outline: string;
                outlineOffset: string;
                outlineColor: string;
                zIndex: string;
                _dark: {
                    outlineColor: string;
                };
            };
        };
        a: {
            _visited: {
                color: string;
            };
        };
        button: {
            cursor: string;
        };
        container: {
            paddingX: {
                base: string;
                mh: string;
            };
            paddingY: {
                mh: string;
            };
            maxWidth: string;
            minHeight: {
                mh: string;
            };
            margin: string;
        };
        navContainer: {
            height: {
                mh: string;
                lh: string;
            };
            gap: {
                mh: string;
                lh: string;
            };
        };
        horizontalRule: {
            bg: string;
            marginTop: string;
            marginBottom: string;
            _dark: {
                backgroundColor: string;
            };
        };
        logo: {
            lineHeight: string;
            svg: {
                height: {
                    base: string;
                    mh: string;
                    lh: string;
                };
            };
            _focus: {
                borderRadius: string;
                outlineColor: string;
                outlineOffset: string;
                outlineStyle: string;
                outlineWidth: string;
            };
        };
    };
};
export default Header;
