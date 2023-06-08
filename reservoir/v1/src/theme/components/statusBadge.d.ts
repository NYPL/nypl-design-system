declare const StatusBadge: {
    baseStyle: {
        borderRadius: string;
        color: string;
        display: string;
        fontSize: string;
        fontStyle: string;
        py: string;
        px: string;
        textAlign: string;
        width: string;
        _dark: {
            backgroundColor: string;
            borderLeft: string;
            borderColor: string;
            color: string;
        };
    };
    variants: {
        low: {
            bg: string;
        };
        medium: {
            bg: string;
            _dark: {
                borderColor: string;
            };
        };
        high: {
            bg: string;
            _dark: {
                borderColor: string;
            };
        };
    };
};
export default StatusBadge;
