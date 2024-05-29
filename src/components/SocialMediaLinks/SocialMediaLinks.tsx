import { ChakraComponent, chakra, useStyleConfig } from "@chakra-ui/react";
import List from "../List/List";
import Link from "../Link/Link";
import Icon, { IconSizes } from "../Icons/Icon";
import { LayoutTypes } from "../../helpers/types";
import React, { forwardRef } from "react";

export const borderTypeArray = ["none", "circular", "straight"] as const;
export type BorderType = typeof borderTypeArray[number];

export const colorTypeArray = ["link", "textDefault", "textInverse"] as const;
export type ColorType = typeof colorTypeArray[number];

export const sizeTypeArray = ["small", "medium", "large"] as const;
export type SizeType = typeof sizeTypeArray[number];

const socialMediaIconMap = {
  blog: "fileTypeGenericDoc",
  facebook: "socialFacebook",
  instagram: "socialInstagram",
  pinterest: "socialPinterest",
  soundcloud: "socialSoundCloud",
  tiktok: "socialTikTok",
  tumblr: "socialTumblr",
  twitter: "socialTwitter",
  youtube: "socialYoutube",
};
export const socialMediaTypeArray = Object.keys(socialMediaIconMap);
type SocialMediaLinkType = typeof socialMediaTypeArray[number];

export interface SocialMediaLinkDataProps {
  /** Optional override for default platform name */
  labelText: string;
  /** Required. Must be one of socialMediaLinkTypeArray */
  type: SocialMediaLinkType;
  /** Optional override for default social media url */
  url: string;
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
  /** Optional desktop layout. Smaller viewports are always in a column if there are labels and
   * in a row if there are no labels. */
  layout?: LayoutTypes;
  /** Optional array of social media platform types, urls, and label texts. */
  linksData: SocialMediaLinkDataProps[];
  /** Optional true/false to display names of platforms along with icons.
   *  NOTE: Labels will NOT be shown with a circular border */
  showLabels?: boolean;
  /** Optional size: small, medium, or large. */
  size?: SizeType;
}

/**
 * The SocialMediaLinks component renders a list of links for accessing social media sites.
 */
export const SocialMediaLinks: ChakraComponent<
  React.ForwardRefExoticComponent<
    SocialMediaLinksProps &
      React.RefAttributes<HTMLDivElement & HTMLUListElement & HTMLOListElement>
  >,
  SocialMediaLinksProps
> = chakra(
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

    let labelsOn = showLabels;

    if (labelsOn && borders === "circular") {
      labelsOn = false;
      console.error(
        "NYPL Reservoir SocialMediaLinks: 'showLabels' is set to true, but labels can not be shown with a circular border."
      );
    }

    const styles = useStyleConfig("SocialMediaLinks", {
      variant: borders,
      color,
      labelsOn,
      layout,
      size,
    });

    // Loop through the platform data array and build an array of links.
    const LinksDataComponents = linksData.map((modifiedPlatform) => {
      // Adjust Icon size to match the convention for SocialMediaLinks size prop.
      let iconSize: IconSizes = "medium";
      switch (size) {
        case "medium":
          iconSize = "large";
          break;
        case "large":
          iconSize = "xlarge";
          break;
      }
      const iconName = socialMediaIconMap[modifiedPlatform.type];

      return (
        <Link
          href={modifiedPlatform.url}
          key={modifiedPlatform.type}
          screenreaderOnlyText={!labelsOn ? modifiedPlatform.labelText : null}
          rel="nofollow noopener noreferrer"
          target="_blank"
        >
          <div className={"platLink"}>
            <Icon
              name={iconName}
              size={iconSize}
              title={modifiedPlatform.labelText}
            />
            {labelsOn ? <span>{modifiedPlatform.labelText}</span> : null}
          </div>
        </Link>
      );
    });

    return (
      <List
        type="ul"
        listItems={LinksDataComponents}
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
