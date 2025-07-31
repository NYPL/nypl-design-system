import {
  BoxProps,
  ChakraComponent,
  chakra,
  useStyleConfig,
} from "@chakra-ui/react";
import List from "../List/List";
import Link from "../Link/Link";
import Icon, { IconNames as DsIconNames, IconSizes } from "../Icons/Icon";
import { LayoutTypes } from "../../helpers/types";
import React, { forwardRef } from "react";
import { sizesArray } from "../../theme/sharedTypes";

export const borderTypeArray = ["none", "circular", "straight"] as const;
export type BorderType = typeof borderTypeArray[number];

export const colorTypeArray = ["link", "textDefault", "textInverse"] as const;
export type ColorType = typeof colorTypeArray[number];
export type SizeType = typeof sizesArray[number];

type IconNames =
  | "fileTypeGenericDoc"
  | "socialFacebook"
  | "socialInstagram"
  | "socialPinterest"
  | "socialSoundCloud"
  | "socialTikTok"
  | "socialTumblr"
  | "socialTwitter"
  | "socialX"
  | "socialYoutube";

// Verify that SocialMediaIconNames is a subset of IconNames
type VerifyIconNames = IconNames extends DsIconNames ? true : false;
// TYPE SAFETY: verified will throw an error if a value has been added to IconNames that is not a Design System IconName
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const verified: VerifyIconNames = true;

export interface SocialMediaLinkDataProps {
  /** Required. Label rendered on page is showLabel is true  */
  labelText: string;
  /** Required. Should match the social media platform that it's linking to */
  icon: IconNames;
  /** Required. Url to link to the platform */
  url: string;
}

interface BaseSocialMediaLinksProps extends BoxProps {
  /** Any of three optional values that will change the color of the svg and label text (if any). */
  color?: ColorType;
  /** Optional desktop layout. Smaller viewports are always in a column if there are labels and
   * in a row if there are no labels. */
  layout?: LayoutTypes;
  /** Required. Array of social media platform types, urls, and label texts. */
  linksData: SocialMediaLinkDataProps[];
  /** Optional size: small, medium, or large. */
  size?: SizeType;
}

type ConditionalSocialMediaLinksProps =
  | { showLabels?: true; borders?: Exclude<BorderType, "circular"> }
  | { showLabels?: false; borders?: BorderType };

export type SocialMediaLinksProps = BaseSocialMediaLinksProps &
  ConditionalSocialMediaLinksProps;
/**
 * The SocialMediaLinks component renders a list of links for accessing social media sites.
 * The data passed to the `linksData` prop controls which social media icons are displayed,
 * the order they appear, the url they link to, and the text used for the label of each.
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
      id,
      linksData,
      layout = "row",
      showLabels = false,
      size = "small",
      ...rest
    } = props;
    const styles = useStyleConfig("SocialMediaLinks", {
      variant: borders,
      color,
      showLabels,
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

      return (
        <Link
          href={modifiedPlatform.url}
          key={modifiedPlatform.icon}
          screenreaderOnlyText={!showLabels ? modifiedPlatform.labelText : null}
          rel="nofollow noopener noreferrer"
          target="_blank"
        >
          <div className="ds-socialMediaLinks-icon">
            <Icon
              name={modifiedPlatform.icon}
              size={iconSize}
              title={modifiedPlatform.labelText}
            />
            {showLabels ? <span>{modifiedPlatform.labelText}</span> : null}
          </div>
        </Link>
      );
    });

    return (
      <List
        data-testid="ds-socialMediaLinks"
        id={id}
        inline={layout === "row"}
        listItems={LinksDataComponents}
        noStyling
        ref={ref}
        variant="ul"
        __css={styles}
        {...rest}
      />
    );
  }),
  { shouldForwardProp: () => true }
);

export default SocialMediaLinks;
