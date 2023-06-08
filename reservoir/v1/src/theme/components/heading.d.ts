export declare const headings: {
    h1: {
        width: string;
        marginTop: string;
        marginStart: string;
        marginEnd: string;
        fontSize: string;
        fontWeight: string;
        letterSpacing: string;
        lineHeight: string;
    };
    h2: {
        width: string;
        marginTop: string;
        marginStart: string;
        marginEnd: string;
        fontSize: string;
        fontWeight: string;
        lineHeight: string;
    };
    h3: {
        width: string;
        marginTop: string;
        marginStart: string;
        marginEnd: string;
        fontSize: string;
        fontWeight: string;
        lineHeight: string;
    };
    h4: {
        width: string;
        marginTop: string;
        marginStart: string;
        marginEnd: string;
        fontSize: string;
        fontWeight: string;
        lineHeight: string;
    };
    fallback: {
        width: string;
        marginTop: string;
        marginStart: string;
        marginEnd: string;
        fontSize: string;
        fontWeight: string;
        lineHeight: string;
    };
};
declare const Heading: {
    baseStyle: ({ isCapitalized, isUppercase, isLowercase, noSpace }: {
        isCapitalized: any;
        isUppercase: any;
        isLowercase: any;
        noSpace: any;
    }) => {
        a: {
            color: string;
            textDecoration: string;
            _dark: {
                color: string;
            };
            _hover: {
                color: string;
                _dark: {
                    color: string;
                };
            };
        };
        marginBottom: string;
        textTransform: string;
        _dark: {
            color: string;
        };
    };
    variants: {
        h1: {
            width: string;
            marginTop: string;
            marginStart: string;
            marginEnd: string;
            fontSize: string;
            fontWeight: string;
            letterSpacing: string;
            lineHeight: string;
        };
        h2: {
            width: string;
            marginTop: string;
            marginStart: string;
            marginEnd: string;
            fontSize: string;
            fontWeight: string;
            lineHeight: string;
        };
        h3: {
            width: string;
            marginTop: string;
            marginStart: string;
            marginEnd: string;
            fontSize: string;
            fontWeight: string;
            lineHeight: string;
        };
        h4: {
            width: string;
            marginTop: string;
            marginStart: string;
            marginEnd: string;
            fontSize: string;
            fontWeight: string;
            lineHeight: string;
        };
        h5: {
            width: string;
            marginTop: string;
            marginStart: string;
            marginEnd: string;
            fontSize: string;
            fontWeight: string;
            lineHeight: string;
        };
        h6: {
            width: string;
            marginTop: string;
            marginStart: string;
            marginEnd: string;
            fontSize: string;
            fontWeight: string;
            lineHeight: string;
        };
        primary: {
            width: string;
            marginTop: string;
            marginStart: string;
            marginEnd: string;
            fontSize: string;
            fontWeight: string;
            letterSpacing: string;
            lineHeight: string;
        };
        secondary: {
            width: string;
            marginTop: string;
            marginStart: string;
            marginEnd: string;
            fontSize: string;
            fontWeight: string;
            lineHeight: string;
        };
        tertiary: {
            width: string;
            marginTop: string;
            marginStart: string;
            marginEnd: string;
            fontSize: string;
            fontWeight: string;
            lineHeight: string;
        };
        callout: {
            width: string;
            marginTop: string;
            marginStart: string;
            marginEnd: string;
            fontSize: string;
            fontWeight: string;
            lineHeight: string;
        };
    };
    defaultProps: {
        variant: string;
    };
};
export default Heading;
