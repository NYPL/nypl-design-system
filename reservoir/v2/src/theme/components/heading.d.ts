/**
 * Heading Styles
 *
 * Chakra's standard responsive style method is not working for the fontSize
 * attribute. Because of the, we are including our own @media queries to set
 * fontSize.
 *
 * For the deprecated variants, the base and 600px breakpoints use the same
 * values. This was needed for consistency and necessary to override the styles
 * set later in the file for the new heading variants.
 */
export declare const headings: {
    one: {
        width: string;
        a: {
            textUnderlineOffset: string;
        };
        "@media (min-width: 0px)": {
            fontSize: string;
        };
        "@media (min-width: 600px)": {
            fontSize: string;
        };
        marginTop: string;
        marginStart: string;
        marginEnd: string;
        fontWeight: string;
        letterSpacing: string;
        lineHeight: string;
    };
    two: {
        width: string;
        a: {
            textUnderlineOffset: string;
        };
        "@media (min-width: 0px)": {
            fontSize: string;
        };
        "@media (min-width: 600px)": {
            fontSize: string;
        };
        marginTop: string;
        marginStart: string;
        marginEnd: string;
        fontWeight: string;
        lineHeight: string;
    };
    three: {
        width: string;
        "@media (min-width: 0px)": {
            fontSize: string;
        };
        "@media (min-width: 600px)": {
            fontSize: string;
        };
        marginTop: string;
        marginStart: string;
        marginEnd: string;
        fontWeight: string;
        lineHeight: string;
    };
    four: {
        width: string;
        "@media (min-width: 0px)": {
            fontSize: string;
        };
        "@media (min-width: 600px)": {
            fontSize: string;
        };
        marginTop: string;
        marginStart: string;
        marginEnd: string;
        fontWeight: string;
        lineHeight: string;
    };
    fallback: {
        width: string;
        "@media (min-width: 0px)": {
            fontSize: string;
        };
        "@media (min-width: 600px)": {
            fontSize: string;
        };
        marginTop: string;
        marginStart: string;
        marginEnd: string;
        fontWeight: string;
        lineHeight: string;
    };
    display1: {
        fontWeight: string;
        letterSpacing: string;
        lineHeight: string;
        width: string;
        a: {
            textUnderlineOffset: string;
        };
        "@media (min-width: 0px)": {
            fontSize: string;
        };
        "@media (min-width: 600px)": {
            fontSize: string;
        };
    };
    heading1: {
        fontWeight: string;
        letterSpacing: string;
        lineHeight: string;
        width: string;
        a: {
            textUnderlineOffset: string;
        };
        "@media (min-width: 0px)": {
            fontSize: string;
        };
        "@media (min-width: 600px)": {
            fontSize: string;
        };
    };
    heading2: {
        fontWeight: string;
        letterSpacing: string;
        lineHeight: string;
        width: string;
        a: {
            textUnderlineOffset: string;
        };
        "@media (min-width: 0px)": {
            fontSize: string;
        };
        "@media (min-width: 600px)": {
            fontSize: string;
        };
    };
    heading3: {
        fontWeight: string;
        letterSpacing: string;
        lineHeight: string;
        width: string;
        a: {
            textUnderlineOffset: string;
        };
        "@media (min-width: 0px)": {
            fontSize: string;
        };
        "@media (min-width: 600px)": {
            fontSize: string;
        };
    };
    heading4: {
        fontWeight: string;
        letterSpacing: string;
        lineHeight: string;
        width: string;
        a: {
            textUnderlineOffset: string;
        };
        "@media (min-width: 0px)": {
            fontSize: string;
        };
        "@media (min-width: 600px)": {
            fontSize: string;
        };
    };
    heading5: {
        fontWeight: string;
        letterSpacing: string;
        lineHeight: string;
        width: string;
        "@media (min-width: 0px)": {
            fontSize: string;
        };
        "@media (min-width: 600px)": {
            fontSize: string;
        };
    };
    heading6: {
        fontWeight: string;
        letterSpacing: string;
        lineHeight: string;
        width: string;
        "@media (min-width: 0px)": {
            fontSize: string;
        };
        "@media (min-width: 600px)": {
            fontSize: string;
        };
    };
};
declare const Heading: {
    parts: string[];
    baseStyle: ({ isCapitalized, isUppercase, isLowercase, noSpace, url }: {
        isCapitalized: any;
        isUppercase: any;
        isLowercase: any;
        noSpace: any;
        url: any;
    }) => {
        a: {
            textDecoration: string;
            color: string;
            textDecorationStyle: string;
            textDecorationThickness: string;
            textUnderlineOffset: string;
            _dark: {
                color: string;
            };
            _hover: {
                color: string;
                textDecorationStyle: string;
                textDecorationThickness: string;
                _dark: {
                    color: string;
                };
            };
        };
        color: string;
        textTransform: string;
        _dark: {
            color: string;
        };
        headingWrapper: {
            marginTop: string;
            marginStart: string;
            marginEnd: string;
            marginBottom: string;
        };
    };
    variants: {
        h1: {
            fontWeight: string;
            letterSpacing: string;
            lineHeight: string;
            width: string;
            a: {
                textUnderlineOffset: string;
            };
            "@media (min-width: 0px)": {
                fontSize: string;
            };
            "@media (min-width: 600px)": {
                fontSize: string;
            };
        };
        h2: {
            fontWeight: string;
            letterSpacing: string;
            lineHeight: string;
            width: string;
            a: {
                textUnderlineOffset: string;
            };
            "@media (min-width: 0px)": {
                fontSize: string;
            };
            "@media (min-width: 600px)": {
                fontSize: string;
            };
        };
        h3: {
            fontWeight: string;
            letterSpacing: string;
            lineHeight: string;
            width: string;
            a: {
                textUnderlineOffset: string;
            };
            "@media (min-width: 0px)": {
                fontSize: string;
            };
            "@media (min-width: 600px)": {
                fontSize: string;
            };
        };
        h4: {
            fontWeight: string;
            letterSpacing: string;
            lineHeight: string;
            width: string;
            a: {
                textUnderlineOffset: string;
            };
            "@media (min-width: 0px)": {
                fontSize: string;
            };
            "@media (min-width: 600px)": {
                fontSize: string;
            };
        };
        h5: {
            fontWeight: string;
            letterSpacing: string;
            lineHeight: string;
            width: string;
            "@media (min-width: 0px)": {
                fontSize: string;
            };
            "@media (min-width: 600px)": {
                fontSize: string;
            };
        };
        h6: {
            fontWeight: string;
            letterSpacing: string;
            lineHeight: string;
            width: string;
            "@media (min-width: 0px)": {
                fontSize: string;
            };
            "@media (min-width: 600px)": {
                fontSize: string;
            };
        };
        one: {
            width: string;
            a: {
                textUnderlineOffset: string;
            };
            "@media (min-width: 0px)": {
                fontSize: string;
            };
            "@media (min-width: 600px)": {
                fontSize: string;
            };
            marginTop: string;
            marginStart: string;
            marginEnd: string;
            fontWeight: string;
            letterSpacing: string;
            lineHeight: string;
        };
        two: {
            width: string;
            a: {
                textUnderlineOffset: string;
            };
            "@media (min-width: 0px)": {
                fontSize: string;
            };
            "@media (min-width: 600px)": {
                fontSize: string;
            };
            marginTop: string;
            marginStart: string;
            marginEnd: string;
            fontWeight: string;
            lineHeight: string;
        };
        three: {
            width: string;
            "@media (min-width: 0px)": {
                fontSize: string;
            };
            "@media (min-width: 600px)": {
                fontSize: string;
            };
            marginTop: string;
            marginStart: string;
            marginEnd: string;
            fontWeight: string;
            lineHeight: string;
        };
        four: {
            width: string;
            "@media (min-width: 0px)": {
                fontSize: string;
            };
            "@media (min-width: 600px)": {
                fontSize: string;
            };
            marginTop: string;
            marginStart: string;
            marginEnd: string;
            fontWeight: string;
            lineHeight: string;
        };
        five: {
            width: string;
            "@media (min-width: 0px)": {
                fontSize: string;
            };
            "@media (min-width: 600px)": {
                fontSize: string;
            };
            marginTop: string;
            marginStart: string;
            marginEnd: string;
            fontWeight: string;
            lineHeight: string;
        };
        six: {
            width: string;
            "@media (min-width: 0px)": {
                fontSize: string;
            };
            "@media (min-width: 600px)": {
                fontSize: string;
            };
            marginTop: string;
            marginStart: string;
            marginEnd: string;
            fontWeight: string;
            lineHeight: string;
        };
        display1: {
            fontWeight: string;
            letterSpacing: string;
            lineHeight: string;
            width: string;
            a: {
                textUnderlineOffset: string;
            };
            "@media (min-width: 0px)": {
                fontSize: string;
            };
            "@media (min-width: 600px)": {
                fontSize: string;
            };
        };
        heading1: {
            fontWeight: string;
            letterSpacing: string;
            lineHeight: string;
            width: string;
            a: {
                textUnderlineOffset: string;
            };
            "@media (min-width: 0px)": {
                fontSize: string;
            };
            "@media (min-width: 600px)": {
                fontSize: string;
            };
        };
        heading2: {
            fontWeight: string;
            letterSpacing: string;
            lineHeight: string;
            width: string;
            a: {
                textUnderlineOffset: string;
            };
            "@media (min-width: 0px)": {
                fontSize: string;
            };
            "@media (min-width: 600px)": {
                fontSize: string;
            };
        };
        heading3: {
            fontWeight: string;
            letterSpacing: string;
            lineHeight: string;
            width: string;
            a: {
                textUnderlineOffset: string;
            };
            "@media (min-width: 0px)": {
                fontSize: string;
            };
            "@media (min-width: 600px)": {
                fontSize: string;
            };
        };
        heading4: {
            fontWeight: string;
            letterSpacing: string;
            lineHeight: string;
            width: string;
            a: {
                textUnderlineOffset: string;
            };
            "@media (min-width: 0px)": {
                fontSize: string;
            };
            "@media (min-width: 600px)": {
                fontSize: string;
            };
        };
        heading5: {
            fontWeight: string;
            letterSpacing: string;
            lineHeight: string;
            width: string;
            "@media (min-width: 0px)": {
                fontSize: string;
            };
            "@media (min-width: 600px)": {
                fontSize: string;
            };
        };
        heading6: {
            fontWeight: string;
            letterSpacing: string;
            lineHeight: string;
            width: string;
            "@media (min-width: 0px)": {
                fontSize: string;
            };
            "@media (min-width: 600px)": {
                fontSize: string;
            };
        };
        primary: {
            width: string;
            a: {
                textUnderlineOffset: string;
            };
            "@media (min-width: 0px)": {
                fontSize: string;
            };
            "@media (min-width: 600px)": {
                fontSize: string;
            };
            marginTop: string;
            marginStart: string;
            marginEnd: string;
            fontWeight: string;
            letterSpacing: string;
            lineHeight: string;
        };
        secondary: {
            width: string;
            a: {
                textUnderlineOffset: string;
            };
            "@media (min-width: 0px)": {
                fontSize: string;
            };
            "@media (min-width: 600px)": {
                fontSize: string;
            };
            marginTop: string;
            marginStart: string;
            marginEnd: string;
            fontWeight: string;
            lineHeight: string;
        };
        tertiary: {
            width: string;
            "@media (min-width: 0px)": {
                fontSize: string;
            };
            "@media (min-width: 600px)": {
                fontSize: string;
            };
            marginTop: string;
            marginStart: string;
            marginEnd: string;
            fontWeight: string;
            lineHeight: string;
        };
        callout: {
            width: string;
            "@media (min-width: 0px)": {
                fontSize: string;
            };
            "@media (min-width: 600px)": {
                fontSize: string;
            };
            marginTop: string;
            marginStart: string;
            marginEnd: string;
            fontWeight: string;
            lineHeight: string;
        };
    };
    defaultProps: {
        variant: string;
    };
};
export default Heading;
