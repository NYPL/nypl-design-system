declare const FeedbackBox: {
    parts: string[];
    baseStyle: {
        closeButton: {
            /** This is overriding the default min-height value in order to keep the
             * button spacing symmetrical. */
            minHeight: string;
            right: string;
            p: string;
            position: string;
            span: {
                clip: string;
                height: {
                    base: string;
                    md: string;
                };
                overflow: string;
                position: {
                    base: string;
                    md: string;
                };
                width: {
                    base: string;
                    md: string;
                };
                wordWrap: string;
            };
            top: string;
            _dark: {
                svg: {
                    fill: string;
                };
            };
        };
        drawerBody: {
            borderLeft: {
                base: any;
                md: string;
            };
            borderColor: {
                base: any;
                md: string;
            };
            paddingTop: string;
            paddingBottom: string;
            _dark: {
                background: string;
                borderColor: {
                    base: any;
                    md: string;
                };
            };
        };
        drawerContent: {
            marginStart: string;
            width: {
                base: string;
                md: string;
            };
        };
        drawerHeader: {
            alignItems: string;
            background: string;
            borderBottomWidth: string;
            borderLeftWidth: {
                base: any;
                md: string;
            };
            borderTopWidth: string;
            display: string;
            fontSize: string;
            px: string;
            paddingTop: string;
            paddingBottom: string;
            p: {
                marginBottom: string;
            };
            _dark: {
                background: string;
                borderColor: string;
            };
        };
        openButton: {
            position: string;
            borderRadius: string;
            bottom: string;
            right: string;
            zIndex: string;
        };
    };
};
export default FeedbackBox;
