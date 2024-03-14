declare const CustomTabs: {
    parts: string[];
    baseStyle: {
        tablist: {
            borderColor: string;
        };
        tab: {
            background: string;
            border: string;
            borderBottom: string;
            color: string;
            height: {
                base: string;
            };
            marginEnd: {
                base: string;
                md: string;
            };
            paddingEnd: {
                base: string;
                md: string;
                lg: string;
            };
            paddingInlineStart: string;
            paddingStart: string;
            whiteSpace: string;
            _hover: {
                bg: string;
                borderTopRadius: string;
                borderBottom: string;
                borderBottomColor: string;
            };
            _selected: {
                fontWeight: string;
                bg: string;
                border: string;
                borderTopRadius: string;
                borderBottom: string;
                borderBottomColor: string;
                paddingBottom: string;
            };
            _focus: {
                boxShadow: string;
            };
            _dark: {
                color: string;
                border: string;
                borderBottom: string;
                borderBottomColor: string;
                _hover: {
                    bg: string;
                };
                _selected: {
                    color: string;
                    border: string;
                    bg: string;
                    borderBottom: string;
                };
            };
        };
        buttonArrows: {
            bg: string;
            color: string;
            border: string;
            borderRadius: string;
            display: {
                md: string;
            };
            height: string;
            width: string;
            top: string;
            marginStart: string;
            marginEnd: string;
            pos: string;
            transition: string;
            zIndex: string;
            _hover: {
                bg: string;
                color: string;
                borderColor: string;
            };
            _disabled: {
                color: string;
            };
            _dark: {
                color: string;
                _disabled: {
                    color: string;
                };
            };
        };
        tablistWrapper: {
            display: string;
            alignItems: string;
            borderBottom: {
                base: string;
                md: string;
            };
            height: {
                base: string;
                md: string;
            };
            margin: string;
            overflowX: {
                base: string;
                md: string;
            };
            paddingBottom: {
                base: string;
                md: string;
            };
            paddingStart: {
                base: string;
                md: string;
            };
            paddingEnd: {
                base: string;
                md: string;
            };
            paddingTop: {
                base: string;
                md: string;
            };
            position: string;
            _dark: {
                borderColor: string;
            };
        };
        tabpanels: {
            paddingTop: string;
        };
        carouselParent: {
            position: {
                base: string;
                md: string;
            };
            left: {
                base: string;
                md: string;
            };
            paddingBottom: {
                base: string;
                md: string;
            };
            paddingStart: string;
            paddingEnd: string;
            paddingTop: {
                base: string;
            };
            right: {
                base: string;
                md: string;
            };
            top: {
                base: string;
            };
            scrollbarWidth: string;
            "::-webkit-scrollbar": {
                display: string;
            };
            overflowY: string;
            overflowX: {
                base: string;
                md: string;
            };
        };
    };
    defaultProps: {
        colorScheme: string;
    };
};
export default CustomTabs;
