export declare const multiSelectWidths: {
    default: {
        width: {
            base: string;
            md: string;
        };
    };
    fitContent: {
        width: {
            base: string;
            md: string;
        };
        minWidth: {
            md: string;
        };
    };
    full: {
        width: string;
    };
};
declare const MultiSelect: {
    parts: string[];
    baseStyle: ({ isBlockElement, isOpen, width }: {
        isBlockElement: any;
        isOpen: any;
        width?: string;
    }) => any;
};
export default MultiSelect;
