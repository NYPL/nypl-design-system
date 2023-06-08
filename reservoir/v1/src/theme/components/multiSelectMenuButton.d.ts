declare const MultiSelectMenuButton: {
    parts: string[];
    baseStyle: ({ hasSelectedItems, isOpen }: {
        hasSelectedItems?: boolean;
        isOpen?: boolean;
    }) => {
        buttonLabel: {
            justifyContent: string;
            overflow: string;
            marginLeft: string;
            marginRight: string;
            textAlign: string;
            textOverflow: string;
            whiteSpace: string;
            transition: string;
        };
        menuButton: {
            alignItems: string;
            backgroundColor: string;
            borderBottomLeftRadius: string;
            borderBottomRightRadius: string;
            borderColor: string;
            borderRadius: string;
            borderWidth: string;
            fontSize: string;
            minHeight: {
                base: string;
                md: string;
            };
            px: string;
            py: string;
            display: string;
            justifyContent: string;
            width: string;
            _hover: {
                backgroundColor: string;
                borderColor: string;
            };
            svg: {
                marginTop: string;
            };
            _dark: {
                backgroundColor: string;
                borderBottomLeftRadius: string;
                borderBottomRightRadius: string;
                borderColor: string;
                svg: {
                    fill: string;
                };
                _hover: {
                    backgroundColor: string;
                    borderColor: string;
                };
            };
        };
        selectedItemsCountButton: {
            alignItems: string;
            backgroundColor: string;
            border: string;
            borderRadius: string;
            borderColor: string;
            display: string;
            flexShrink: number;
            fontSize: string;
            justifyContent: string;
            left: string;
            marginRight: string;
            position: string;
            top: {
                base: string;
                md: string;
            };
            width: string;
            _hover: {
                borderColor: string;
            };
            svg: {
                marginLeft: string;
                marginRight: string;
                marginTop: string;
            };
            _dark: {
                backgroundColor: string;
                borderColor: string;
                svg: {
                    fill: string;
                };
                _hover: {
                    borderColor: string;
                };
            };
        };
    };
};
export default MultiSelectMenuButton;
