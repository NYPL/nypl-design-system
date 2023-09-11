import { chakra, useStyleConfig } from "@chakra-ui/react";
import List from "../List/List";
import Link from "../Link/Link";
import Icon, { IconSizes } from "../Icons/Icon";
import { LayoutTypes } from "../../helpers/types";
import { socialMediaDataMap } from "./SocialMediaLinksUtils";
import React, { forwardRef } from "react";

export const borderTypeArray = ["none", "circular", "straight"] as const;
export type BorderType = typeof borderTypeArray[number];

export const colorTypeArray = ["link", "textDefault", "textInverse"] as const;
export type ColorType = typeof colorTypeArray[number];

export const sizeTypeArray = ["small", "medium", "large"] as const;
export type SizeType = typeof sizeTypeArray[number];

// This list of allowed types is defined in the SocialMediaDataMap found in SocialMediaLinksUtils.ts and extracted here.
export const socialMediaLinkTypeArray = socialMediaDataMap.map(
  ({ type }) => type
);
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

/* Accepts an array containing one or more data objects, each representing a social media platform and optional
 * overrides for the label and/or URL.
 *
 * @returns an array of data objects for each requested platform type that includes type, iconName, labelText and
 * url. The labelText and url props will include any values supplied to override the defaults.
 */
function getLinksData(platforms: SocialMediaLinkDataProps[]) {
  let allData = [];
  platforms.forEach((myPlatform) => {
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
  }); // end forEach

  return allData;
}

/**
 * The SocialMediaLinks component renders a list of links for accessing social media sites.
 */
export const SocialMediaLinks = chakra(
  forwardRef<
    HTMLDivElement & HTMLUListElement & HTMLOListElement,
    SocialMediaLinksProps
  >((props, ref?) => {
    const {
      borders = "none",
      color = "textDefault",
      className,
      id,
      linksData,
      layout = "row",
      showLabels = false,
      size = "small",
      ...rest
    } = props;

    // Turns out you can pass whatever props you want to this thing in order to do logic in the theme.
    const styles = useStyleConfig("SocialMediaLinks", {
      variant: borders,
      size, // Shortcut: if the key and variable names are the same, you can just pass the variable.
      color,
      layout,
    });

    let labelsOn = showLabels;
    if (labelsOn && borders === "circular") {
      labelsOn = false;
      console.error(
        "NYPL Reservoir SocialMediaLinks: 'showLabels' is set to true, but labels can not be shown with a circular border."
      );
    }

    // If linksData has values, use them, else use the entire list of platforms.
    const socialMediaDataArray = linksData
      ? getLinksData(linksData)
      : socialMediaDataMap;

    // Loop through the platform data array and build an array of links.
    const thisLinksData = [];
    socialMediaDataArray.forEach((modifiedPlatform) => {
      // The size prop for the Icon component does not exactly match the convention for SocialMediaLinks size prop.
      // So let's set the correct Icon size.
      let iconSize: IconSizes = "medium";
      switch (size) {
        case "medium":
          iconSize = "large";
          break;
        case "large":
          iconSize = "xlarge";
          break;
      }

      const linkData = (
        <Link
          href={modifiedPlatform.url}
          key={modifiedPlatform.type}
          screenreaderOnlyText={!labelsOn ? modifiedPlatform.labelText : null} // If labels are on, this is redundant, so turn it off
          rel="nofollow noopener noreferrer"
          target="_blank"
        >
          <div className={"platLink"}>
            <Icon name={modifiedPlatform.iconName} size={iconSize} />
            {labelsOn ? <span>{modifiedPlatform.labelText}</span> : null}
          </div>
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
        ref={ref}
        {...rest}
      />
    );
  }),
  { shouldForwardProp: () => true }
);

export default SocialMediaLinks;
