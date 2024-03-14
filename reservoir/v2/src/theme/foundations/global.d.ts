/**
 * These rules affect all the global elements on the `body` element of the
 * page when the `DSProvider` component is used.
 */
declare const global: {
    body: {
        boxSizing: string;
        bg: string;
        color: string;
        fontFamily: string;
        fontSize: string;
        fontWeight: string;
        lineHeight: string;
        overflowX: string;
        _dark: {
            bg: string;
            color: string;
        };
    };
    a: {
        color: string;
    };
    svg: {
        display: string;
    };
    "button, select, input, textarea": {
        "&:not([disabled])": {
            _focus: {
                boxShadow: string;
                outline: string;
                outlineOffset: string;
                outlineColor: string;
                zIndex: string;
                _dark: {
                    outlineColor: string;
                };
            };
        };
    };
    "iframe, [href], [tabindex], [contentEditable='true']": {
        _focus: {
            boxShadow: string;
            outline: string;
            outlineOffset: string;
            outlineColor: string;
            zIndex: string;
            _dark: {
                outlineColor: string;
            };
        };
    };
    p: {
        margin: string;
        marginBottom: string;
    };
    ul: {
        margin: string;
        marginBottom: string;
    };
    ol: {
        margin: string;
        marginBottom: string;
    };
    "*, *::before, &::after": {
        boxSizing: string;
    };
};
export default global;
