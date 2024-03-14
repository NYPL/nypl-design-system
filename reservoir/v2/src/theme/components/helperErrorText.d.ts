interface HelperErrorTextBaseStyle {
    isInvalid: boolean;
}
declare const helperErrorText: {
    parts: string[];
    baseStyle: ({ isInvalid }: HelperErrorTextBaseStyle) => {
        fontSize: string;
        color: string;
        _dark: {
            color: string;
        };
        innerChild: {
            marginTop: string;
            marginBottom: string;
        };
    };
};
export default helperErrorText;
