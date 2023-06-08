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
        caption: {
            fontSize: string;
        };
        tag: {
            fontSize: string;
        };
        mini: {
            fontSize: string;
        };
    };
};
export default Text;
