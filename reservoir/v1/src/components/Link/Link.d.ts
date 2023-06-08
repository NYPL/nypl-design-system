import React from "react";
export declare const linkTypesArray: readonly ["action", "backwards", "button", "buttonPrimary", "buttonSecondary", "buttonPill", "buttonCallout", "buttonNoBrand", "buttonDisabled", "default", "external", "forwards"];
export type LinkTypes = typeof linkTypesArray[number];
export interface LinkProps {
    /** Any child node passed to the component. */
    children: React.ReactNode;
    /** Additional class name to render in the `Link` component. */
    className?: string;
    /** The `href` attribute for the anchor element. */
    href?: string;
    /** ID used for accessibility purposes. */
    id?: string;
    onClick?: (event: React.MouseEvent<HTMLDivElement | HTMLAnchorElement, MouseEvent>) => void;
    /** Prop that sets the HTML attribute to target where the link should go. */
    target?: "_blank" | "_parent" | "_self" | "_top";
    /** Controls the link visuals: action, button, backwards, forwards, or default. */
    type?: LinkTypes;
}
/**
 * A component that uses an `href` prop or a child anchor element, to create
 * an anchor element with added styling and conventions.
 */
export declare const Link: import("@chakra-ui/react").ChakraComponent<React.ForwardRefExoticComponent<LinkProps & React.RefAttributes<HTMLDivElement & HTMLAnchorElement>>, {}>;
export default Link;
