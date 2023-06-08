interface HelperErrorTextBaseStyle {
    isInvalid: boolean;
}
declare const helperErrorText: {
    baseStyle: ({ isInvalid }: HelperErrorTextBaseStyle) => {
        marginTop: string;
        marginBottom: string;
        fontSize: string;
        color: string;
        _dark: {
            color: string;
        };
    };
};
export default helperErrorText;
