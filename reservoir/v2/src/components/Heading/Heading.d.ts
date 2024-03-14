import React from "react";
export declare const headingSizesArray: readonly ["display1", "heading1", "heading2", "heading3", "heading4", "heading5", "heading6", "primary", "secondary", "tertiary", "callout"];
export declare const headingLevelsArray: readonly ["h1", "h2", "h3", "h4", "h5", "h6", "one", "two", "three", "four", "five", "six"];
export type HeadingSizes = typeof headingSizesArray[number];
export type HeadingLevels = typeof headingLevelsArray[number];
export interface HeadingProps {
    /** Optional className that appears in addition to `heading` */
    className?: string;
    /** Optional ID that other components can cross reference for accessibility
     * purposes */
    id?: string;
    /** Optional prop used to show capitalized text */
    isCapitalized?: boolean;
    /** Optional prop used to show upper case text */
    isUppercase?: boolean;
    /** Optional prop used to show lower case text */
    isLowercase?: boolean;
    /** Optional number 1-6 used to create the `<h*>` tag; if prop is not passed,
     * `Heading` will default to `<h2>` */
    level?: HeadingLevels;
    /** Optional prop used to remove default spacing */
    noSpace?: boolean;
    /** String to populate the overline element */
    overline?: string;
    /** Optional size used to override the default styles of the native HTML `<h>`
     * elements */
    size?: HeadingSizes;
    /** String to populate the subtitle element */
    subtitle?: string;
    /** Inner text of the `<h*>` element */
    text?: string;
    /** Optional URL that header points to; when `url` prop is passed to
     * `Heading`, a child `<a>` element is created and the heading text becomes an
     * active link */
    url?: string;
    /** Optional className for the URL when the `url` prop is passed */
    urlClass?: string;
}
export declare const Heading: import("@chakra-ui/react").ChakraComponent<React.ForwardRefExoticComponent<HeadingProps & {
    children?: React.ReactNode;
} & React.RefAttributes<HTMLHeadingElement>>, {}>;
export default Heading;
