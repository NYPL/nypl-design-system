declare const StyledList: {
    baseStyle?: ({ textSize }: import("@chakra-ui/styled-system").StyleFunctionProps) => {
        listStyle: string;
        li: {
            _before: {
                color: string;
                content: string;
                display: string;
                fontWeight: string;
                fontSize: string;
                lineHeight: string;
                marginStart: string;
                width: string;
            };
            _dark: {
                _before: {
                    color: string;
                };
            };
        };
        margin: string;
        marginBottom: string;
        marginInlineStart: string;
        paddingStart: string;
        padding: string;
        display: string;
        fontSize: string;
    };
    sizes?: {
        [key: string]: import("@chakra-ui/styled-system").SystemStyleInterpolation;
    };
    variants?: {
        capped: {
            li: {
                borderStart: string;
                borderEnd: {
                    base: "1px solid";
                    md: "none";
                };
                borderColor: string;
                my: string;
                px: string;
            };
            _dark: {
                li: {
                    borderColor: string;
                };
            };
        };
    };
    defaultProps?: {
        size?: string | number;
        variant?: "capped";
        colorScheme?: string;
    };
};
export default StyledList;
