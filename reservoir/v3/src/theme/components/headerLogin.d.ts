declare const HeaderLogin: {
    parts: string[];
    baseStyle: ({ patronName }: {
        patronName: any;
    }) => {
        bg: {
            base: string;
            mh: string;
        };
        boxShadow: {
            base: string;
            mh: string;
        };
        display: {
            base: string;
            mh: string;
        };
        flexDirection: string;
        left: {
            base: string;
            mh: any;
        };
        marginTop: {
            mh: string;
        };
        minHeight: {
            base: string;
            mh: string;
        };
        minWidth: {
            base: string;
            mh: string;
        };
        position: string;
        padding: {
            base: string;
            mh: string;
        };
        zIndex: string;
        ul: {
            display: {
                base: string;
                mh: string;
            };
            marginBottom: string;
            marginTop: {
                base: string;
                mh: string;
            };
            width: string;
            li: {
                _first: {
                    gridColumn: {
                        base: string;
                        mh: any;
                    };
                };
                _last: {
                    gridColumn: {
                        base: string;
                        mh: any;
                    };
                };
            };
        };
        li: {
            _first: {
                marginEnd: {
                    base: string;
                    mh: string;
                };
                marginTop: {
                    base: string;
                    mh: string;
                };
                marginBottom: {
                    mh: string;
                };
            };
        };
        "li a": {
            alignItems: string;
            border: {
                base: string;
                mh: string;
            };
            borderColor: string;
            borderRadius: {
                base: string;
                mh: string;
            };
            bg: {
                base: string;
                mh: string;
            };
            color: string;
            display: string;
            fontSize: string;
            fontWeight: string;
            justifyContent: {
                mh: string;
            };
            lineHeight: {
                base: string;
                mh: string;
            };
            marginTop: {
                base: string;
            };
            minHeight: {
                base: string;
                mh: string;
            };
            padding: {
                base: string;
                mh: string;
            };
            textTransform: string;
            whiteSpace: string;
            width: string;
            svg: {
                marginRight: {
                    base: string;
                    mh: any;
                };
            };
            span: {
                width: {
                    base: string;
                    mh: string;
                };
            };
            _hover: {
                bg: {
                    base: string;
                    mh: string;
                };
                color: string;
            };
            _focus: {
                borderRadius: {
                    base: string;
                    mh: string;
                };
                boxShadow: {
                    base: any;
                    mh: string;
                };
                outline: {
                    base: string;
                    mh: string;
                };
                outlineStyle: {
                    base: string;
                    mh: any;
                };
                outlineWidth: {
                    base: string;
                    mh: any;
                };
            };
            _dark: {
                bgColor: {
                    base: string;
                    mh: string;
                };
                color: {
                    base: string;
                    mh: string;
                };
                svg: {
                    fill: {
                        base: string;
                        mh: string;
                    };
                };
                _hover: {
                    bgColor: {
                        base: string;
                        mh: string;
                    };
                    color: {
                        base: string;
                        mh: string;
                    };
                };
            };
            _visited: {
                color: string;
            };
        };
        patronGreeting: {
            alignSelf: string;
            color: string;
            fontSize: {
                base: string;
                mh: string;
            };
            fontWeight: string;
            lineHeight: string;
            margin: {
                base: string;
                mh: string;
            };
            minHeight: {
                base: string;
                mh: string;
            };
            textAlign: string;
            textTransform: string;
            width: {
                mh: string;
            };
            _focus: {
                boxShadow: {
                    base: any;
                    mh: string;
                };
                outline: {
                    base: string;
                    mh: string;
                };
                outlineStyle: {
                    base: string;
                    mh: any;
                };
                outlineWidth: {
                    base: string;
                    mh: any;
                };
            };
            ".greeting": {
                fontStyle: string;
                margin: {
                    base: string;
                    mh: string;
                };
            };
            ".name": {
                margin: number;
            };
        };
        logoutButton: {
            alignSelf: string;
            bg: {
                base: string;
                mh: string;
            };
            borderRadius: {
                base: string;
                mh: string;
            };
            color: {
                base: string;
                mh: string;
            };
            fontSize: {
                base: string;
                mh: string;
            };
            marginTop: {
                base: string;
                mh: string;
            };
            marginBottom: {
                base: string;
                mh: string;
            };
            padding: {
                base: string;
                mh: any;
            };
            textDecoration: {
                base: string;
                mh: any;
            };
            textTransform: string;
            width: {
                base: string;
                mh: string;
            };
            svg: {
                fill: string;
            };
            _hover: {
                bg: {
                    base: string;
                    mh: string;
                };
                color: {
                    base: string;
                    mh: string;
                };
                textDecoration: {
                    base: string;
                    mh: any;
                };
            };
            _focus: {
                borderRadius: {
                    base: string;
                    mh: string;
                };
                boxShadow: {
                    base: any;
                    mh: string;
                };
                outline: {
                    base: string;
                    mh: string;
                };
                outlineStyle: {
                    base: string;
                    mh: any;
                };
                outlineWidth: {
                    base: string;
                    mh: any;
                };
            };
            _dark: {
                color: string;
                svg: {
                    fill: string;
                };
                _hover: {
                    color: string;
                };
            };
        };
    };
};
export default HeaderLogin;
