import { LayoutTypes } from "../../helpers/types";
import React from "react";
export declare const borderTypeArray: readonly ["none", "circular", "straight"];
export type BorderType = typeof borderTypeArray[number];
export declare const colorTypeArray: readonly ["link", "textDefault", "textInverse"];
export type ColorType = typeof colorTypeArray[number];
export declare const sizeTypeArray: readonly ["small", "medium", "large"];
export type SizeType = typeof sizeTypeArray[number];
export declare const socialMediaLinkTypeArray: string[];
export type SocialMediaLinkType = typeof socialMediaLinkTypeArray[number];
export interface SocialMediaLinkDataProps {
    /** Optional override for default platform name */
    labelText?: string;
    /** Required. Must be one of socialMediaLinkTypeArray */
    type: SocialMediaLinkType;
    /** Optional override for default social media url */
    url?: string;
}
export interface SocialMediaLinksProps {
    /** Optional border: straight, circular or none. */
    borders?: BorderType;
    /** Optional className you can add in addition to "social-media-links." */
    className?: string;
    /** Any of three optional values that will change the color of the svg and label text (if any). */
    color?: ColorType;
    /** ID that other components can cross-reference for accessibility purposes. */
    id?: string;
    /** Optional desktop layout. Smaller viewports are always in a column. */
    layout?: LayoutTypes;
    /** Optional array of social media platform types, urls, and label texts. */
    linksData?: SocialMediaLinkDataProps[];
    /** Optional true/false to display names of platforms along with icons.
     *  NOTE: Labels will NOT be shown with a circular border */
    showLabels?: boolean;
    /** Optional size: small, medium, or large. */
    size?: SizeType;
}
/**
 * The SocialMediaLinks component renders a list of links for accessing social media sites.
 */
export declare const SocialMediaLinks: import("@chakra-ui/react").ChakraComponent<React.ForwardRefExoticComponent<SocialMediaLinksProps & React.RefAttributes<HTMLDivElement & HTMLUListElement & HTMLOListElement>>, {}>;
export default SocialMediaLinks;
