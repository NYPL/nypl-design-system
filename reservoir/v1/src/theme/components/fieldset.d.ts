interface FieldSetProps {
    isLegendHidden?: boolean;
}
declare const Fieldset: {
    baseStyle: ({ isLegendHidden }: FieldSetProps) => {
        border: number;
        padding: number;
        legend: {
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
};
export default Fieldset;
