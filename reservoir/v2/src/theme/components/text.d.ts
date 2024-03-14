interface TextBaseStyle {
    isBold: boolean;
    isItalic: boolean;
    isCapitalized: boolean;
    isUppercase: boolean;
    isLowercase: boolean;
    noSpace: boolean;
    variant: string;
}
declare const Text: {
    baseStyle: ({ isBold, isItalic, isCapitalized, isUppercase, isLowercase, noSpace, variant, }: TextBaseStyle) => {
        fontStyle: string;
        fontWeight: string;
        textTransform: string;
        marginBottom: string;
    };
    variants: {
        default: {};
        body1: {};
        body2: {
            fontSize: string;
        };
        caption: {
            fontSize: string;
            fontWeight: string;
        };
        overline1: {
            fontSize: {
                base: string;
                md: string;
            };
            fontWeight: string;
            lineHeight: number;
            textTransform: string;
        };
        overline2: {
            fontSize: {
                base: string;
                md: string;
            };
            fontWeight: string;
            lineHeight: number;
            textTransform: string;
        };
        subtitle1: {
            fontSize: {
                base: string;
                md: string;
            };
            fontWeight: string;
            lineHeight: number;
        };
        subtitle2: {
            fontSize: {
                base: string;
                md: string;
            };
            fontWeight: string;
            lineHeight: number;
        };
        tag: {
            fontSize: string;
            fontWeight: string;
        };
        mini: {
            fontSize: string;
            fontWeight: string;
        };
    };
};
export default Text;
