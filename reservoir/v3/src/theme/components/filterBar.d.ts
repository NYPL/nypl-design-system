export declare const filterBarWidth: {
    default: {
        width: {
            base: string;
            md: string;
        };
    };
    full: {
        width: string;
    };
};
declare const FilterBar: {
    parts: string[];
    baseStyle: ({ width }: {
        width: any;
    }) => {
        width: string;
        modalBody: {
            _dark: {
                background: string;
            };
        };
        modalHeader: {
            bg: string;
            _dark: {
                background: string;
                borderBottom: string;
                borderColor: string;
            };
        };
        modalFooter: {
            bg: string;
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
        globalButtonGroupWrapper: any;
    };
};
export default FilterBar;
