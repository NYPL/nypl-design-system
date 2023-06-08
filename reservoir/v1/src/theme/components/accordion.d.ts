declare const Accordion: {
    parts: string[];
    baseStyle: {
        container: {
            border: string;
            width: string;
            _dark: {
                bg: string;
                color: string;
                borderColor: string;
            };
        };
        button: {
            borderWidth: string;
            fontWeight: string;
            _dark: {
                bg: string;
                color: string;
            };
        };
        panel: {
            padding: string;
            borderLeftWidth: string;
            borderRightWidth: string;
            borderBottomWidth: string;
            _dark: {
                bg: string;
                color: string;
                borderColor: string;
            };
        };
    };
};
export default Accordion;
