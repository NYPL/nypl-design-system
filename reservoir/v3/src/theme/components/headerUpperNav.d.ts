declare const HeaderUpperNav: {
    parts: string[];
    baseStyle: {
        height: string;
        ul: {
            alignItems: string;
            display: string;
            margin: string;
            whiteSpace: string;
            li: {
                fontSize: string;
                fontWeight: string;
                marginRight: string;
                _last: {
                    marginRight: string;
                };
            };
        };
        a: {
            color: string;
            position: string;
            textDecoration: string;
            _hover: {
                color: string;
                textDecoration: string;
            };
            _focus: {
                borderRadius: string;
                outlineColor: string;
                outlineOffset: string;
                outlineStyle: string;
                outlineWidth: string;
            };
            _dark: {
                color: string;
                _hover: {
                    color: string;
                };
            };
        };
        svg: {
            _dark: {
                fill: string;
            };
        };
        donateLink: {
            color: string;
            _hover: {
                color: string;
            };
            _dark: {
                bgColor: string;
                _hover: {
                    bgColor: string;
                };
            };
        };
    };
};
export default HeaderUpperNav;
