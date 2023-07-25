import {
  Breadcrumb as ChakraSocialMediaLink,
  BreadcrumbItem as SocialMediaLinkItem,
  BreadcrumbLink as SocialMediaLinkLink,
  chakra,
  useStyleConfig,
} from "@chakra-ui/react";
import React, { forwardRef } from "react";

import Icon from "../Icons/Icon";
import Tooltip from "../Tooltip/Tooltip";
import { truncateText } from "../../utils/utils";

export const socialMediaLinkTypeArray = [
  "blogs",
  "booksAndMore",
  "brand",
  "connect",
  "education",
  "locations",
  "research",
  "whatsOn",
] as const;
export type SocialMediaLinksTypes = typeof socialMediaLinkTypeArray[number];
export interface SocialMediaLinksDataProps {
  url: string;
  text: string | React.ReactNode;
}

export interface SocialMediaLinkProps {
  /** SocialMediaLink links as an array */
  socialMediaLinksData: SocialMediaLinksDataProps[];
  /** Used to control how the `Hero` component will be rendered. */
  socialMediaLinksType?: SocialMediaLinksTypes;
  /** className you can add in addition to 'input' */
  className?: string;
  /** ID that other components can cross reference for accessibility purposes */
  id?: string;
}

const socialMediaLinkTextLength = 40;

/**
 * Truncate socialMediaLink text if it is more than 40 characters in length and
 * then add ellipsis at the end.
 */
const tooltipWrapperOrText = (
  socialMediaLinksData: SocialMediaLinksDataProps,
  socialMediaLinksID,
  renderIcon = false,
  isCurrentPage = false
) => {
  const textLength = (socialMediaLinksData.text as string).length;
  const renderTooltip = textLength >= socialMediaLinkTextLength;
  // If the text is more than 40 characters in length, truncate it.
  const updatedText =
    textLength <= socialMediaLinkTextLength
      ? socialMediaLinksData.text
      : truncateText(socialMediaLinksData.text as string, socialMediaLinkTextLength);
  const linkWrapper = (
    <SocialMediaLinkLink
      href={socialMediaLinksData.url}
      aria-current={isCurrentPage ? "page" : undefined}
    >
      {renderIcon && (
        <Icon
          name="arrow"
          size="small"
          iconRotation="rotate90"
          id={`${socialMediaLinksID}__backarrow`}
          className="socialMediaLinks-icon"
          type="breadcrumbs"
        />
      )}
      <span className="socialMediaLink-label">{updatedText}</span>
    </SocialMediaLinkLink>
  );
  // If the text is more than 40 characters in length, we need a ToolTip
  // component wrapped *directly* around the anchor element for
  // accessibility purposes.
  const socialMediaLinkLink = renderTooltip ? (
    <Tooltip
      content={socialMediaLinksData.text}
      id={`socialMediaLink-${socialMediaLinksID}-tooltip`}
    >
      {linkWrapper}
    </Tooltip>
  ) : (
    <>{linkWrapper}</>
  );

  return socialMediaLinkLink;
};

const getElementsFromData = (
  data: SocialMediaLinksDataProps[],
  socialMediaLinksID?: string
) => {
  if (!data?.length) {
    return null;
  }

  const socialMediaLinksItems = data.map((socialMediaLinksData, index) => {
    // The icon renders only on mobile and it should be
    // part of the second to last element in the nav.
    const renderIcon = index === data.length - 2;
    // The current page is the last item in the socialMediaLinks
    // and needs an additional aria attribute.
    const isCurrentPage = index === data.length - 1;
    return (
      <SocialMediaLinkItem key={index}>
        {tooltipWrapperOrText(
          socialMediaLinksData,
          socialMediaLinksID,
          renderIcon,
          isCurrentPage
        )}
      </SocialMediaLinkItem>
    );
  });

  return socialMediaLinksItems;
};

/**
 * The `SocialMediaLinks` component is a navigation element that provides a
 * socialMediaLink path that reflects the site structure and allows a user to
 * navigate to any page available in the socialMediaLink hierarchy.
 */
export const SocialMediaLinks = chakra(
  forwardRef<HTMLDivElement, SocialMediaLinkProps>((props, ref?) => {
    const {
      socialMediaLinksData,
      socialMediaLinksType = "whatsOn",
      className,
      id,
      ...rest
    } = props;

    if (!socialMediaLinksData || socialMediaLinksData.length === 0) {
      throw new Error(
        "NYPL Reservoir SocialMediaLinks: No data was passed to the `socialMediaLinksData` prop."
      );
    }

    const styles = useStyleConfig("SocialMediaLinks", { variant: socialMediaLinksType });
    const socialMediaLinkItems = getElementsFromData(socialMediaLinksData, id);

    return (
      <ChakraSocialMediaLink
        aria-label="SocialMediaLink"
        className={className}
        id={id}
        ref={ref}
        __css={styles}
        {...rest}
      >
        {socialMediaLinkItems}
      </ChakraSocialMediaLink>
    );
  })
);

export default SocialMediaLinks;
