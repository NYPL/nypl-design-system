/**
 * These objects are also SCSS mixins but are now JS objects in the
 * context of css-in-js and the custom NYPL-theme.
 */
/**
 * If the element that should be visually hidden should only be hidden on
 * small screens, then pass in true for the `isMobileOnly` argument. Otherwise,
 * this will set an element to always be visually hidden regardless of the
 * screen size.
 */
declare const screenreaderOnly: (isMobileOnly?: boolean) => {
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
declare const displayScreenreaderOnly: {
    position: string;
    height: string;
    width: string;
};
declare const wrapperStyles: {
    marginY: string;
    marginX: string;
    maxWidth: string;
    padding: string;
    width: string;
};
export { displayScreenreaderOnly, screenreaderOnly, wrapperStyles };
