interface LabelBaseStyle {
    isInlined: boolean;
}
declare const Label: {
    baseStyle: ({ isInlined }: LabelBaseStyle) => {
        flex: string;
        whiteSpace: string;
        color: string;
        display: string;
        fontSize: string;
        fontWeight: string;
        marginBottom: string;
        width: string;
        span: {
            fontWeight: string;
        };
        _dark: {
            color: string;
        };
    };
};
export default Label;
