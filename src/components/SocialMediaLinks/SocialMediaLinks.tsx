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

//
// import { useBreakpoint } from '@chakra-ui/react'
//
// function GetBreakpoint(breakpoint) {return useBreakpoint(breakpoint)}
//
// console.log(GetBreakpoint('sm'));

export const borderTypeArray = ["none", "circular", "straight"] as const;
export type BorderType = typeof borderTypeArray[number];

export const colorTypeArray = ["link", "textDefault", "textInverse"] as const;
export type ColorType = typeof colorTypeArray[number];

export const sizeTypeArray = ["small", "medium", "large"] as const;
export type SizeType = typeof sizeTypeArray[number];

// @todo The below export fails TS, for reasons I do not yet understand. But it would be useful so that we don't
//   need to update in two places if any names are changed / added / subtracted.
//   export const socialMediaLinkTypeArray  = socialMediaDataMap.map(({ type }) => type) as const;
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
  /** Optional border: straight, circular or none. */
  borders?: BorderType;
  /** Optional className you can add in addition to "social-media-links." */
  className?: string;
  /** Optional color */
  color?: ColorType;
  /** ID that other components can cross-reference for accessibility purposes */
  id?: string;
  /** Optional desktop layout. Smaller viewports are always in a column. */
  layout?: LayoutTypes;
  /** Optional array of social media platform types, urls, and label texts */
  linksData?: SocialMediaLinkDataProps[];
  /** Optional true/false to display names of platform along with icon
   *  NOTE: Labels will NOT be shown with a circular border */
  showLabels?: boolean;
  /** Optional size: medium, large, xlarge */
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
  }); // end foreach

  return allData;
}

/* Helper function for .mdx <Table... /> component.
 * It is located in SocialMediaLinks.tsx because I cannot figure out how to create a function in the .mdx file
 *
 * @returns the SocialMediaDataMap values as an array of arrays
 */
export function GetTableData() {
  let tableData = [];
  socialMediaDataMap.forEach((smPlatform) => {
    let row = [
      smPlatform.type,
      smPlatform.labelText,
      smPlatform.url,
      smPlatform.iconName,
    ];
    tableData.push(row);
  });
  return tableData;
}

/**
 * The SocialMediaLinks component renders a list of links for accessing social media sites.
 */
export const SocialMediaLinks = chakra(
  // @todo This throws a JS error b/c it expects a ref parameter. But if I add it, I get a TS error
  //   because I don't know what to do with the ref, and it says, "unused." The List component doesn't like
  //   receiving the ref prop and throws a different TS error.
  forwardRef<HTMLDivElement, SocialMediaLinksProps>((props) => {
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

    // If the viewport is equal to or less than 600px we must use large icons to meet the minimum clickable space.
    // @todo this doesn't work in an iframe, as in Storybook, for example.
    const responsiveLayout = window.innerWidth <= 600 ? "column" : layout;

    // Turns out you can pass whatever props you want to this thing in order to do logic in the theme.
    const styles = useMultiStyleConfig("SocialMediaLinks", {
      variant: borders,
      size,
      color, // Shortcut: if the key and variable names are the same, you can just pass the variable.
      layout: responsiveLayout,
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
        // ref={ref}
        __css={styles}
        {...rest}
      />
    );
  }),
  { shouldForwardProp: () => true }
);

export default SocialMediaLinks;
