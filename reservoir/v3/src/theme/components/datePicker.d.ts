declare const DatePicker: {
    baseStyle?: {
        fieldset: {
            legend: {
                marginBottom: string;
            };
        };
        subLabels: {
            label: {
                fontSize: string;
                fontWeight: string;
                marginBottom: string;
            };
        };
    };
    sizes?: {
        [key: string]: import("@chakra-ui/styled-system").PartsStyleInterpolation<{
            keys: ("fieldset" | "subLabels")[];
        }>;
    };
    variants?: {
        [key: string]: import("@chakra-ui/styled-system").PartsStyleInterpolation<{
            keys: ("fieldset" | "subLabels")[];
        }>;
    };
    defaultProps?: {
        size?: string | number;
        variant?: string | number;
        colorScheme?: string;
    };
    parts: ("fieldset" | "subLabels")[];
};
export default DatePicker;
