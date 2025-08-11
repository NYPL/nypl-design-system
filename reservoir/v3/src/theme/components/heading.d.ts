export declare const headings: {
    one: {
        base: {
            width: string;
            a: {
                textUnderlineOffset: string;
            };
            marginTop: string;
            marginStart: string;
            marginEnd: string;
            fontSize: string;
            fontWeight: string;
            letterSpacing: string;
            lineHeight: string;
        };
    };
    two: {
        base: {
            width: string;
            a: {
                textUnderlineOffset: string;
            };
            marginTop: string;
            marginStart: string;
            marginEnd: string;
            fontSize: string;
            fontWeight: string;
            lineHeight: string;
        };
    };
    three: {
        base: {
            width: string;
            marginTop: string;
            marginStart: string;
            marginEnd: string;
            fontSize: string;
            fontWeight: string;
            lineHeight: string;
        };
    };
    four: {
        base: {
            width: string;
            marginTop: string;
            marginStart: string;
            marginEnd: string;
            fontSize: string;
            fontWeight: string;
            lineHeight: string;
        };
    };
    fallback: {
        base: {
            width: string;
            marginTop: string;
            marginStart: string;
            marginEnd: string;
            fontSize: string;
            fontWeight: string;
            lineHeight: string;
        };
    };
    display1: {
        base: {
            fontSize: {
                base: "mobile.heading.display1";
                md: "desktop.heading.display1";
            };
            fontWeight: string;
            letterSpacing: string;
            lineHeight: {
                base: "1.15";
                md: "1.10";
            };
            width: string;
            a: {
                textUnderlineOffset: string;
            };
        };
    };
    heading1: {
        base: {
            fontSize: {
                base: "mobile.heading.heading1";
                md: "desktop.heading.heading1";
            };
            fontWeight: string;
            letterSpacing: string;
            lineHeight: {
                base: "1.20";
                md: "1.15";
            };
            width: string;
            a: {
                textUnderlineOffset: string;
            };
        };
    };
    heading2: {
        base: {
            fontSize: {
                base: "mobile.heading.heading2";
                md: "desktop.heading.heading2";
            };
            fontWeight: string;
            letterSpacing: string;
            lineHeight: {
                base: "1.25";
                md: "1.20";
            };
            width: string;
            a: {
                textUnderlineOffset: string;
            };
        };
    };
    heading3: {
        base: {
            fontSize: {
                base: "mobile.heading.heading3";
                md: "desktop.heading.heading3";
            };
            fontWeight: string;
            letterSpacing: string;
            lineHeight: {
                base: "1.30";
                md: "1.25";
            };
            width: string;
            a: {
                textUnderlineOffset: string;
            };
        };
    };
    heading4: {
        base: {
            fontSize: {
                base: "mobile.heading.heading4";
                md: "desktop.heading.heading4";
            };
            fontWeight: string;
            letterSpacing: string;
            lineHeight: {
                base: "1.35";
                md: "1.30";
            };
            width: string;
            a: {
                textUnderlineOffset: string;
            };
        };
    };
    heading5: {
        base: {
            fontSize: {
                base: "mobile.heading.heading5";
                md: "desktop.heading.heading5";
            };
            fontWeight: string;
            letterSpacing: string;
            lineHeight: {
                base: "1.40";
                md: "1.35";
            };
            width: string;
        };
    };
    heading6: {
        base: {
            fontSize: {
                base: "mobile.heading.heading6";
                md: "desktop.heading.heading6";
            };
            fontWeight: string;
            letterSpacing: string;
            lineHeight: {
                base: "1.45";
                md: "1.40";
            };
            width: string;
        };
    };
    heading7: {
        base: {
            fontSize: {
                base: "mobile.heading.heading7";
                md: "desktop.heading.heading7";
            };
            fontWeight: string;
            letterSpacing: string;
            lineHeight: {
                base: "1.50";
                md: "1.45";
            };
            width: string;
        };
    };
    heading8: {
        base: {
            fontSize: {
                base: "mobile.heading.heading8";
                md: "desktop.heading.heading8";
            };
            fontWeight: string;
            letterSpacing: string;
            lineHeight: string;
            width: string;
        };
    };
};
declare const Heading: {
    baseStyle?: ({ isCapitalized, isUppercase, isLowercase, noSpace }: import("@chakra-ui/styled-system").StyleFunctionProps) => {
        base: {
            "a:only-child": {
                textDecoration: string;
                _dark: {
                    color: string;
                };
                _hover: {
                    _dark: {
                        color: string;
                    };
                    textDecoration: string;
                    textDecorationStyle: string;
                    textDecorationThickness: string;
                    color: string;
                };
                textDecorationStyle: string;
                textDecorationThickness: string;
                color: string;
                textUnderlineOffset: string;
            };
            color: string;
            margin: string;
            textTransform: string;
            _dark: {
                color: string;
            };
        };
        headingWrapper: {
            marginTop: string;
            marginStart: string;
            marginEnd: string;
            marginBottom: string;
        };
    };
    sizes?: {
        [key: string]: import("@chakra-ui/styled-system").PartsStyleInterpolation<{
            keys: ("base" | "headingWrapper")[];
        }>;
    };
    variants?: {
        h1: {
            base: {
                fontSize: {
                    base: "mobile.heading.heading1";
                    md: "desktop.heading.heading1";
                };
                fontWeight: string;
                letterSpacing: string;
                lineHeight: {
                    base: "1.20";
                    md: "1.15";
                };
                width: string;
                a: {
                    textUnderlineOffset: string;
                };
            };
        };
        h2: {
            base: {
                fontSize: {
                    base: "mobile.heading.heading2";
                    md: "desktop.heading.heading2";
                };
                fontWeight: string;
                letterSpacing: string;
                lineHeight: {
                    base: "1.25";
                    md: "1.20";
                };
                width: string;
                a: {
                    textUnderlineOffset: string;
                };
            };
        };
        h3: {
            base: {
                fontSize: {
                    base: "mobile.heading.heading3";
                    md: "desktop.heading.heading3";
                };
                fontWeight: string;
                letterSpacing: string;
                lineHeight: {
                    base: "1.30";
                    md: "1.25";
                };
                width: string;
                a: {
                    textUnderlineOffset: string;
                };
            };
        };
        h4: {
            base: {
                fontSize: {
                    base: "mobile.heading.heading4";
                    md: "desktop.heading.heading4";
                };
                fontWeight: string;
                letterSpacing: string;
                lineHeight: {
                    base: "1.35";
                    md: "1.30";
                };
                width: string;
                a: {
                    textUnderlineOffset: string;
                };
            };
        };
        h5: {
            base: {
                fontSize: {
                    base: "mobile.heading.heading5";
                    md: "desktop.heading.heading5";
                };
                fontWeight: string;
                letterSpacing: string;
                lineHeight: {
                    base: "1.40";
                    md: "1.35";
                };
                width: string;
            };
        };
        h6: {
            base: {
                fontSize: {
                    base: "mobile.heading.heading6";
                    md: "desktop.heading.heading6";
                };
                fontWeight: string;
                letterSpacing: string;
                lineHeight: {
                    base: "1.45";
                    md: "1.40";
                };
                width: string;
            };
        };
        one: {
            base: {
                width: string;
                a: {
                    textUnderlineOffset: string;
                };
                marginTop: string;
                marginStart: string;
                marginEnd: string;
                fontSize: string;
                fontWeight: string;
                letterSpacing: string;
                lineHeight: string;
            };
        };
        two: {
            base: {
                width: string;
                a: {
                    textUnderlineOffset: string;
                };
                marginTop: string;
                marginStart: string;
                marginEnd: string;
                fontSize: string;
                fontWeight: string;
                lineHeight: string;
            };
        };
        three: {
            base: {
                width: string;
                marginTop: string;
                marginStart: string;
                marginEnd: string;
                fontSize: string;
                fontWeight: string;
                lineHeight: string;
            };
        };
        four: {
            base: {
                width: string;
                marginTop: string;
                marginStart: string;
                marginEnd: string;
                fontSize: string;
                fontWeight: string;
                lineHeight: string;
            };
        };
        five: {
            base: {
                width: string;
                marginTop: string;
                marginStart: string;
                marginEnd: string;
                fontSize: string;
                fontWeight: string;
                lineHeight: string;
            };
        };
        six: {
            base: {
                width: string;
                marginTop: string;
                marginStart: string;
                marginEnd: string;
                fontSize: string;
                fontWeight: string;
                lineHeight: string;
            };
        };
        display1: {
            base: {
                fontSize: {
                    base: "mobile.heading.display1";
                    md: "desktop.heading.display1";
                };
                fontWeight: string;
                letterSpacing: string;
                lineHeight: {
                    base: "1.15";
                    md: "1.10";
                };
                width: string;
                a: {
                    textUnderlineOffset: string;
                };
            };
        };
        heading1: {
            base: {
                fontSize: {
                    base: "mobile.heading.heading1";
                    md: "desktop.heading.heading1";
                };
                fontWeight: string;
                letterSpacing: string;
                lineHeight: {
                    base: "1.20";
                    md: "1.15";
                };
                width: string;
                a: {
                    textUnderlineOffset: string;
                };
            };
        };
        heading2: {
            base: {
                fontSize: {
                    base: "mobile.heading.heading2";
                    md: "desktop.heading.heading2";
                };
                fontWeight: string;
                letterSpacing: string;
                lineHeight: {
                    base: "1.25";
                    md: "1.20";
                };
                width: string;
                a: {
                    textUnderlineOffset: string;
                };
            };
        };
        heading3: {
            base: {
                fontSize: {
                    base: "mobile.heading.heading3";
                    md: "desktop.heading.heading3";
                };
                fontWeight: string;
                letterSpacing: string;
                lineHeight: {
                    base: "1.30";
                    md: "1.25";
                };
                width: string;
                a: {
                    textUnderlineOffset: string;
                };
            };
        };
        heading4: {
            base: {
                fontSize: {
                    base: "mobile.heading.heading4";
                    md: "desktop.heading.heading4";
                };
                fontWeight: string;
                letterSpacing: string;
                lineHeight: {
                    base: "1.35";
                    md: "1.30";
                };
                width: string;
                a: {
                    textUnderlineOffset: string;
                };
            };
        };
        heading5: {
            base: {
                fontSize: {
                    base: "mobile.heading.heading5";
                    md: "desktop.heading.heading5";
                };
                fontWeight: string;
                letterSpacing: string;
                lineHeight: {
                    base: "1.40";
                    md: "1.35";
                };
                width: string;
            };
        };
        heading6: {
            base: {
                fontSize: {
                    base: "mobile.heading.heading6";
                    md: "desktop.heading.heading6";
                };
                fontWeight: string;
                letterSpacing: string;
                lineHeight: {
                    base: "1.45";
                    md: "1.40";
                };
                width: string;
            };
        };
        heading7: {
            base: {
                fontSize: {
                    base: "mobile.heading.heading7";
                    md: "desktop.heading.heading7";
                };
                fontWeight: string;
                letterSpacing: string;
                lineHeight: {
                    base: "1.50";
                    md: "1.45";
                };
                width: string;
            };
        };
        heading8: {
            base: {
                fontSize: {
                    base: "mobile.heading.heading8";
                    md: "desktop.heading.heading8";
                };
                fontWeight: string;
                letterSpacing: string;
                lineHeight: string;
                width: string;
            };
        };
        primary: {
            base: {
                width: string;
                a: {
                    textUnderlineOffset: string;
                };
                marginTop: string;
                marginStart: string;
                marginEnd: string;
                fontSize: string;
                fontWeight: string;
                letterSpacing: string;
                lineHeight: string;
            };
        };
        secondary: {
            base: {
                width: string;
                a: {
                    textUnderlineOffset: string;
                };
                marginTop: string;
                marginStart: string;
                marginEnd: string;
                fontSize: string;
                fontWeight: string;
                lineHeight: string;
            };
        };
        tertiary: {
            base: {
                width: string;
                marginTop: string;
                marginStart: string;
                marginEnd: string;
                fontSize: string;
                fontWeight: string;
                lineHeight: string;
            };
        };
        callout: {
            base: {
                width: string;
                marginTop: string;
                marginStart: string;
                marginEnd: string;
                fontSize: string;
                fontWeight: string;
                lineHeight: string;
            };
        };
    };
    defaultProps?: {
        size?: string | number;
        variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "display1" | "heading1" | "heading2" | "heading3" | "heading4" | "heading5" | "heading6" | "heading7" | "heading8" | "primary" | "secondary" | "tertiary" | "callout" | "one" | "two" | "three" | "four" | "five" | "six";
        colorScheme?: string;
    };
    parts: ("base" | "headingWrapper")[];
};
export default Heading;
