declare const CheckboxGroup: {
    parts: string[];
    baseStyle: ({ isFullWidth }: {
        isFullWidth?: boolean;
    }) => {
        helperErrorText: {
            marginTop: string;
        };
        label: {
            width: string;
        };
    };
};
export default CheckboxGroup;
