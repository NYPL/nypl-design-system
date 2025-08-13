declare const HeaderLoginButton: {
    baseStyle: ({ isOpen }: {
        isOpen: any;
    }) => {
        alignItems: {
            base: string;
        };
        bg: {
            base: string;
            mh: string;
        };
        borderRadius: string;
        color: string;
        display: string;
        fontFamily: string;
        fontSize: string;
        fontWeight: string;
        justifyContent: string;
        minHeight: {
            mh: string;
        };
        paddingY: {
            mh: string;
        };
        svg: {
            fill: string;
            marginLeft: {
                base: string;
                mh: string;
            };
            marginTop: {
                base: string;
            };
        };
        textDecoration: string;
        textTransform: string;
        _hover: {
            backgroundColor: {
                base: string;
                mh: string;
            };
            color: string;
            svg: {
                fill: string;
            };
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
            bg: {
                base: string;
                mh: string;
            };
            color: string;
            svg: {
                fill: string;
            };
            _hover: {
                svg: {
                    fill: string;
                };
            };
        };
    };
};
export default HeaderLoginButton;
