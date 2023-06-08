interface HorizontalRuleBaseStyle {
    align: string;
}
declare const HorizontalRule: {
    baseStyle: ({ align }: HorizontalRuleBaseStyle) => {
        bg: string;
        border: string;
        height: string;
        marginBottom: string;
        marginTop: string;
        marginStart: string | number;
        marginEnd: string | number;
        _dark: {
            bg: string;
        };
    };
};
export default HorizontalRule;
