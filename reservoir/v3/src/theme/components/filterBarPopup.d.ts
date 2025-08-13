declare const FilterBarPopup: {
    baseStyle?: {
        width: string;
        modalBody: {
            _dark: {
                background: string;
            };
        };
        modalHeader: {
            bg: string;
            borderBottom: string;
            borderColor: string;
            _dark: {
                background: string;
                borderBottom: string;
                borderColor: string;
            };
        };
        modalFooter: {
            bg: string;
            borderTop: string;
            borderColor: string;
            _dark: {
                background: string;
                borderTop: string;
                borderColor: string;
                color: string;
            };
        };
        modalCloseButton: {
            mt: string;
        };
    };
    sizes?: {
        [key: string]: import("@chakra-ui/styled-system").PartsStyleInterpolation<{
            keys: ("modalBody" | "modalHeader" | "modalFooter" | "modalCloseButton")[];
        }>;
    };
    variants?: {
        [key: string]: import("@chakra-ui/styled-system").PartsStyleInterpolation<{
            keys: ("modalBody" | "modalHeader" | "modalFooter" | "modalCloseButton")[];
        }>;
    };
    defaultProps?: {
        size?: string | number;
        variant?: string | number;
        colorScheme?: string;
    };
    parts: ("modalBody" | "modalHeader" | "modalFooter" | "modalCloseButton")[];
};
export default FilterBarPopup;
