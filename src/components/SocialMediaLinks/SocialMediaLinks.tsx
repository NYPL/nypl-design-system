import {
    chakra,
 //   useStyleConfig,
} from "@chakra-ui/react";
import List from "../List/List";
import Link from '../Link/Link';
import Icon from "../Icons/Icon";
import React, { forwardRef } from "react";

export const socialMediaLinkTypeArray = [
    "blogs",
    "facebook",
    "instagram",
    "pinterest",
    "soundcloud",
    "tiktok",
    "tumbler",
    "twitter",
    "youtube",
] as const;
export type SocialMediaLinkType = typeof socialMediaLinkTypeArray[number];

export const colorTypeArray = [
    "link",
    "textDefault",
    "textInverse",
] as const;
export type ColorType = typeof colorTypeArray[number];

export const borderTypeArray = [
    "none",
    "circular",
    "straight",
] as const;
export type BorderType = typeof borderTypeArray[number];

export const layoutTypeArray = [
    "column",
    "row",
] as const;
export type LayoutType = typeof layoutTypeArray[number];

export const sizeTypeArray = [
    "small",
    "medium",
    "large",
] as const;
export type SizeType = typeof sizeTypeArray[number];

export interface SocialMediaLinkDataProps {
    /** Required. Must be one of socialMediaLinkTypeArray */
    type: SocialMediaLinkType;
    /** Optional override for default social media url */
    url?: string;
}

export interface SocialMediaLinksProps {
    /** Optional color */
    color?: ColorType;
    /** Optional layout */
    layout?: LayoutType;
    /** Optional array of link types and urls */
    linksData?: SocialMediaLinkDataProps[];
    /** Optional true/false to display names of platform along with icon */
    showLabels?: boolean;
    /** Optional size: small, medium, large */
    size?: SizeType;
    /** Optional border: straight, circular or none */
    borders?: BorderType;
    /** Optional className you can add in addition to `social-media-links`. */
    className?: string;
    /** ID that other components can cross reference for accessibility purposes */
    id?: string;
}

const socialMediaMapData = [
    {
        type: 'facebook',
        iconName: 'socialFacebook',
        platformName: 'Facebook',
        url: 'facebook.com'
    },
    {
        type: 'twitter',
        iconName: 'socialTwitter',
        platformName: 'Twitter',
        url: 'twitter.com'
    },
    {
        type: 'instagram',
        iconName: 'socialInstagram',
        platformName: 'Instagram',
        url: 'instagram.com'
    },
];

function getLinksData(platforms) {
    let allData = [];
    platforms.forEach((myPlatform) => {
        let thisPlatformName = (typeof myPlatform === 'string') ? myPlatform : myPlatform.type;
        if (!socialMediaLinkTypeArray.includes(thisPlatformName)) {
            throw new Error(
                "NYPL Reservoir SocialMediaLinks: " + thisPlatformName + " is either not a supported platform or is misspelled.\n" +
                "Supported platforms include: " + socialMediaLinkTypeArray.join(", ")
            );
        }
        let thisPlatformArray = socialMediaMapData.filter( socialMediaSlice =>
            socialMediaSlice.type === thisPlatformName);

        // filter function returns an array of objects, so let's just get the objects out of the array.
        let thisPlatformData = thisPlatformArray[0];

        // If a url value exists in myPlatform (i.e. not undefined), use it instead of the official url.
        let newUrl =  (typeof myPlatform.url !== "undefined") ? myPlatform.url : thisPlatformData.url;

        let thisObj = {
            type: thisPlatformData.type,
            iconName: thisPlatformData.iconName,
            platformName: thisPlatformData.platformName,
            url: newUrl
        };
        allData.push(thisObj);
    }) // end foreach

    return allData;
}

/**
 * The `SocialMediaLinks` component is a navigation element that provides a
 * socialMediaLink path that reflects the site structure and allows a user to
 * navigate to any page available in the socialMediaLink hierarchy.
 */
export const SocialMediaLinks = chakra(
    forwardRef<HTMLDivElement, SocialMediaLinksProps>((props) => {
        const {
//            borders = "none",
//            color = "textDefault",
//            className,
//            id,
            linksData,
            layout = "row",
//            showLabels = false,
//            size = "small",
//            ...rest
        } = props;


        // If the linksData prop has data, set the map data to only include the passed values, else set it to
        // include every platform.
        const socialMediaDataArray  = (linksData) ? getLinksData(linksData) : socialMediaMapData;

        const socialMediaLinkList= socialMediaDataArray.map(platformData => (
                <Link href={platformData.url} rel="nofollow noopener noreferrer" key={platformData.type}>
                    <Icon name={platformData.iconName} align="left" size="small"/>
                    {platformData.platformName}
                </Link>
            )
        )

        // If the layout prop is set to "row", we want the List inline prop value to be true.
        const inlineVal = (layout === "row") ? true : false;

        return (
            <List type='ul' listItems={socialMediaLinkList} inline={inlineVal} noStyling={true} />
        );
    })
);

export default SocialMediaLinks;
