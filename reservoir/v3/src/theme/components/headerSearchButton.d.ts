declare const HeaderSearchButton: {
    baseStyle: ({ isOpen }: {
        isOpen: any;
    }) => {
        alignItems: string;
        borderRadius: string;
        backgroundColor: string;
        color: string;
        display: string;
        fontFamily: string;
        fontSize: string;
        fontWeight: string;
        justifyContent: string;
        minHeight: {
            mh: string;
        };
        minWidth: {
            mh: string;
        };
        textDecoration: string;
        _dark: {
            bgColor: string;
            color: string;
        };
        span: {
            alignItems: string;
            borderBottom: {
                mh: string;
            };
            display: string;
            _dark: {
                borderBottom: string | {
                    mh: string;
                };
                borderColor: {
                    mh: string;
                };
            };
        };
        svg: {
            marginLeft: {
                base: string;
                mh: string;
            };
            fill: {
                base: string;
                mh: string;
            };
            _dark: {
                fill: {
                    base: string;
                    mh: string;
                };
            };
        };
        _hover: {
            backgroundColor: string;
            color: string;
            textDecoration: string;
            svg: {
                fill: {
                    base: string;
                    mh: string;
                };
            };
            _dark: {
                color: string;
                svg: {
                    fill: {
                        base: string;
                        mh: string;
                    };
                };
            };
        };
        _focus: {
            borderRadius: string;
            outlineColor: string;
            outlineOffset: string;
            outlineStyle: string;
            outlineWidth: string;
        };
    };
};
export default HeaderSearchButton;
