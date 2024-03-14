declare const StyledList: {
    baseStyle: ({ textSize }: {
        textSize?: string;
    }) => {
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
    variants: {
        capped: {
            li: {
                borderStart: string;
                borderEnd: {
                    base: string;
                    md: string;
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
};
export default StyledList;
