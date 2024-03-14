import React from "react";
export declare const linkTypesArray: readonly ["action", "backwards", "button", "buttonPrimary", "buttonSecondary", "buttonPill", "buttonCallout", "buttonNoBrand", "buttonDisabled", "default", "external", "forwards", "standalone"];
export type LinkTypes = typeof linkTypesArray[number];
export interface LinkProps {
    /** Any child node passed to the component. */
    children: React.ReactNode;
    /** Additional class name to render in the `Link` component. */
    className?: string;
    /** Used to include or remove visited state styles. Default is true. */
    hasVisitedState?: boolean;
    /** The `href` attribute for the anchor element. */
    href?: string;
    /** ID used for accessibility purposes. */
    id?: string;
    /** Used to explicitly set the underline style for a text link. If true, link
     * text will always be underlined; if false, link text will only show
     * underline in hover state. */
    isUnderlined?: boolean;
    onClick?: (event: React.MouseEvent<HTMLDivElement | HTMLAnchorElement, MouseEvent>) => void;
    rel?: string;
    /** Visibly hidden text that will only be read by screenreaders. */
    screenreaderOnlyText?: string;
    /** Prop that sets the HTML attribute to target where the link should go. */
    target?: "_blank" | "_parent" | "_self" | "_top";
    /** Controls the link visuals: action, button, backwards, forwards,
     * standalone, or default. */
    type?: LinkTypes;
}
/**
 * A component that uses an `href` prop or a child anchor element, to create
 * an anchor element with added styling and conventions.
 */
export declare const Link: import("@chakra-ui/react").ChakraComponent<React.ForwardRefExoticComponent<LinkProps & React.RefAttributes<HTMLDivElement & HTMLAnchorElement>>, {}>;
export default Link;
