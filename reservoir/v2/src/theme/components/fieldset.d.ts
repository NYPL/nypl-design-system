interface FieldSetProps {
    isLegendHidden?: boolean;
}
declare const Fieldset: {
    baseStyle: ({ isLegendHidden }: FieldSetProps) => {
        border: number;
        padding: number;
        legend: {
            _dark: {
                color: string;
            };
            color: string;
            display: string;
            fontSize: string;
            fontWeight: string;
            marginBottom: string;
            width: string;
            span: {
                fontWeight: string;
            };
        };
    };
};
export default Fieldset;
