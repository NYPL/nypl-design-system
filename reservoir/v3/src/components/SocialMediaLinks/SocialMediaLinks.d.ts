import { ChakraComponent } from "@chakra-ui/react";
import { LayoutTypes } from "../../helpers/types";
import React from '../../../node_modules/react';
export declare const borderTypeArray: readonly ["none", "circular", "straight"];
export type BorderType = typeof borderTypeArray[number];
export declare const colorTypeArray: readonly ["link", "textDefault", "textInverse"];
export type ColorType = typeof colorTypeArray[number];
export declare const sizeTypeArray: readonly ["small", "medium", "large"];
export type SizeType = typeof sizeTypeArray[number];
type IconNames = "fileTypeGenericDoc" | "socialFacebook" | "socialInstagram" | "socialPinterest" | "socialSoundCloud" | "socialTikTok" | "socialTumblr" | "socialTwitter" | "socialX" | "socialYoutube";
export interface SocialMediaLinkDataProps {
    /** Required. Label rendered on page is showLabel is true  */
    labelText: string;
    /** Required. Should match the social media platform that it's linking to */
    icon: IconNames;
    /** Required. Url to link to the platform */
    url: string;
}
interface BaseSocialMediaLinksProps {
    /** Optional className you can add in addition to "social-media-links." */
    className?: string;
    /** Any of three optional values that will change the color of the svg and label text (if any). */
    color?: ColorType;
    /** ID that other components can cross-reference for accessibility purposes. */
    id?: string;
    /** Optional desktop layout. Smaller viewports are always in a column if there are labels and
     * in a row if there are no labels. */
    layout?: LayoutTypes;
    /** Required. Array of social media platform types, urls, and label texts. */
    linksData: SocialMediaLinkDataProps[];
    /** Optional size: small, medium, or large. */
    size?: SizeType;
}
type ConditionalSocialMediaLinksProps = {
    showLabels?: true;
    borders?: Exclude<BorderType, "circular">;
} | {
    showLabels?: false;
    borders?: BorderType;
};
export type SocialMediaLinksProps = BaseSocialMediaLinksProps & ConditionalSocialMediaLinksProps;
/**
 * The SocialMediaLinks component renders a list of links for accessing social media sites.
 * The data passed to the `linksData` prop controls which social media icons are displayed,
 * the order they appear, the url they link to, and the text used for the label of each.
 */
export declare const SocialMediaLinks: ChakraComponent<React.ForwardRefExoticComponent<SocialMediaLinksProps & React.RefAttributes<HTMLDivElement & HTMLUListElement & HTMLOListElement>>, SocialMediaLinksProps>;
export default SocialMediaLinks;
