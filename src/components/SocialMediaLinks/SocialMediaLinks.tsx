import {
  chakra,
  useMultiStyleConfig,
  // useColorModeValue,
} from "@chakra-ui/react";
import List from "../List/List";
import Link from "../Link/Link";
import Icon, { IconSizes } from "../Icons/Icon";
import { LayoutTypes } from "../../helpers/types";
import { socialMediaDataMap } from "./SocialMediaDataMap";
import React, { forwardRef } from "react";

export const borderTypeArray = ["none", "circular", "straight"] as const;
export type BorderType = typeof borderTypeArray[number];

export const colorTypeArray = ["link", "textDefault", "textInverse"] as const;
export type ColorType = typeof colorTypeArray[number];

export const sizeTypeArray = ["small", "medium", "large"] as const;
export type SizeType = typeof sizeTypeArray[number];

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

export interface SocialMediaLinkDataProps {
  /** Optional override for default platform name */
  labelText?: string;
  /** Required. Must be one of socialMediaLinkTypeArray */
  type: SocialMediaLinkType;
  /** Optional override for default social media url */
  url?: string;
}

export interface SocialMediaLinksProps {
  /** Optional border: straight, circular or none */
  borders?: BorderType;
  /** Optional className you can add in addition to `social-media-links`. */
  className?: string;
  /** Optional color */
  color?: ColorType;
  /** ID that other components can cross-reference for accessibility purposes */
  id?: string;
  /** Optional layout */
  layout?: LayoutTypes;
  /** Optional array of social media platform types, urls, and label texts */
  linksData?: SocialMediaLinkDataProps[];
  /** Optional true/false to display names of platform along with icon */
  showLabels?: boolean;
  /** Optional size: medium, large, xlarge */
  size?: SizeType;
}



/* Accepts an array containing one or more data objects, each representing a social media platform and optional overrides for the label and/or URL.
 *
 *  @returns an array of data objects for each requested platform type that includes type, iconName, labelText and url where the latter two may include values supplied to override the defaults.
 */
function getLinksData(platforms: SocialMediaLinkDataProps[]) {
  let allData = [];
  platforms.forEach((myPlatform) => {
    // Test if the type is allowed
    if (!socialMediaLinkTypeArray.includes(myPlatform.type)) {
      console.error(
        "NYPL Reservoir SocialMediaLinks: " +
          myPlatform.type +
          " is either not a supported platform or is misspelled.\n" +
          "Supported platforms include: " +
          socialMediaLinkTypeArray.join(", ")
      );
      return;
    }

    // Get the dataset for this platform.
    let thisPlatformArray = socialMediaDataMap.filter(
      (socialMediaSlice) => socialMediaSlice.type === myPlatform.type
    );

    // The filter function returns an array of objects, so let's just get the objects out of the array.
    let thisPlatformData = thisPlatformArray[0];

    // If a url value exists in myPlatform use it, else use the default.
    let newUrl = myPlatform.url ?? thisPlatformData.url;

    // If a labelText value exists in myPlatform use it, else use the default.
    let newLabelText = myPlatform.labelText ?? thisPlatformData.labelText;

    let thisObj = {
      type: thisPlatformData.type,
      iconName: thisPlatformData.iconName,
      labelText: newLabelText,
      url: newUrl,
    };
    allData.push(thisObj);
  }); // end foreach

  return allData;
}

/**
 * The SocialMediaLinks component renders a list of links for accessing social media sites.
 */
export const SocialMediaLinks = chakra(
  forwardRef<HTMLDivElement, SocialMediaLinksProps>((props) => {
    const {
      borders = "none",
      color = "textDefault",
      className,
      id,
      linksData,
      layout = "row",
      showLabels = false,
      size = "medium",
      ...rest
    } = props;

    // Turns out you can pass whatever props you want to this thing in order to do logic in the theme.
    const styles = useMultiStyleConfig("SocialMediaLinks", {
      variant: borders,
      size: size,
      color: color,
      layout: layout,
    });

    if (showLabels && borders === "circular") {
      console.error(
        "NYPL Reservoir SocialMediaLinks: `showLabels` is set to true, but labels are disallowed when also using borders='circular'."
      );
      return (
        <p>
          <Icon name={"alertWarningFilled"} size={"xlarge"} color={"red"} />
          Error: See Console Log
        </p>
      );
    }

    // If linksData has values, use them, else use the entire list of platforms.
    const socialMediaDataArray = linksData
      ? getLinksData(linksData)
      : socialMediaDataMap;

    // Loop through the platform data array and build an array of links.
    const thisLinksData = [];
    socialMediaDataArray.forEach((myPlatform) => {
      // The size prop for the Icon component does not exactly match the convention for SocialMediaLinks size prop.
      // So let's set the correct Icon size.
      let iconSize: IconSizes = "medium";
      switch (size) {
        case "medium":
          iconSize = "large";
          break;
        case "large":
          iconSize = "xlarge";
      }

      const linkData = (
        <Link
          href={myPlatform.url}
          key={myPlatform.type}
          screenreaderOnlyText={!showLabels ? myPlatform.labelText : ""}
          rel="nofollow noopener noreferrer"
        >
          <Icon name={myPlatform.iconName} size={iconSize} />
          {showLabels ? <span>{myPlatform.labelText}</span> : ""}
        </Link>
      );

      thisLinksData.push(linkData);
    }); // end socialMediaDataArray foreach

    return (
      <List
        type="ul"
        listItems={thisLinksData}
        inline={layout === "row"}
        noStyling={true}
        className={className}
        id={id}
        __css={styles}
        {...rest}
      />
    );
  }),
  { shouldForwardProp: () => true }
);

export default SocialMediaLinks;
