import * as React from "react";
import { Box, useMultiStyleConfig } from "@chakra-ui/react";

import { HeroTypes, HeroSecondaryTypes } from "./HeroTypes";

export interface HeroProps {
  /** Optional hex color value used to override the default background
   * color for a given `Hero` variation.
   * Note: not all `Hero` variations utilize this prop. */
  backgroundColor?: string;
  /** Optional path to an image that will be used as a background image for the
   * `Hero` component.
   * Note: not all `Hero` variations utilize this prop. */
  backgroundImageSrc?: string;
  /** Optional hex color value used to override the default text color for a
   * given `Hero` variation.
   * Note: not all `Hero` variations utilize this prop. */
  foregroundColor?: string;
  /** Optional heading element. */
  heading?: JSX.Element;
  /** Used to control how the `Hero` component will be rendered. */
  heroType?: HeroTypes;
  /** Optional `Image` component used for SECONDARY, FIFTYFIFTY and CAMPAIGN
   * `Hero` types; Note: `image` can only be used in conjunction with
   * `backgroundImageSrc` for CAMPAIGN the `Hero` type.
   * Note: not all `Hero` variations utilize this prop. */
  image?: JSX.Element;
  /** Optional details area that contains location data.
   * Note: not all `Hero` variations utilize this prop. */
  locationDetails?: JSX.Element;
  /** Optional string used for the subheader that displays
   * underneath the heading element. */
  subHeaderText?: string | JSX.Element;
}

// Used to map between HeroTypes enum values and Chakra variant options.
const variantMap = {};
for (const type in HeroTypes) {
  variantMap[HeroTypes[type]] = HeroTypes[type];
}
/**
 * Map the HeroTypes to the Hero Chakra theme variant object. If a wrong
 * value is passed (typically in non-Typescript scenarios), then the default
 * is the "primary" variant.
 */
const getVariant = (type) => variantMap[type] || HeroTypes.Primary;

export default function Hero(props: React.PropsWithChildren<HeroProps>) {
  const {
    backgroundColor,
    backgroundImageSrc,
    foregroundColor,
    heading,
    heroType,
    image,
    locationDetails,
    subHeaderText,
  } = props;
  const variant = getVariant(heroType);
  const styles = useMultiStyleConfig("Hero", { variant });
  const headingStyles = styles.heading;
  // We want to add `Hero`-specific styling to the `Heading` component.
  const finalHeading =
    heading && React.cloneElement(heading, { additionalStyles: headingStyles });
  let backgroundImageStyle = {};
  let contentBoxStyling = {};

  if (heroType === HeroTypes.Primary) {
    if (!backgroundImageSrc) {
      console.warn(
        "NYPL Reservoir Hero: It is recommended to use the `backgroundImageSrc` " +
          "prop for the `HeroTypes.Primary` `heroType` variant."
      );
    }
    if (image) {
      console.warn(
        "NYPL Reservoir Hero: The `image` prop has been passed, but the " +
          "`HeroTypes.Primary` `heroType` variant will not use it."
      );
    }
  } else if (locationDetails) {
    console.warn(
      "NYPL Reservoir Hero: The `locationDetails` prop should only be used " +
        "with the `HeroTypes.Primary` `heroType` variant."
    );
  }
  if (HeroSecondaryTypes.includes(heroType) && backgroundImageSrc) {
    console.warn(
      "NYPL Reservoir Hero: The `backgroundImageSrc` prop has been passed, " +
        "but the `HeroTypes.Secondary` `heroType` variant will not use it."
    );
  }
  if (heroType === HeroTypes.Tertiary && (backgroundImageSrc || image)) {
    console.warn(
      "NYPL Reservoir Hero: The `HeroTypes.Tertiary` `heroType` variant hero " +
        "will not use any of the image props."
    );
  }
  if (heroType === HeroTypes.Campaign && (!backgroundImageSrc || !image)) {
    console.warn(
      "NYPL Reservoir Hero: It is recommended to use both the " +
        "`backgroundImageSrc` and `image` props for the `HeroTypes.Campaign` " +
        "`heroType` variant."
    );
  }
  if (heroType === HeroTypes.FiftyFifty && backgroundImageSrc) {
    console.warn(
      "NYPL Reservoir Hero: The `backgroundImageSrc` prop has been passed, " +
        "but the `HeroTypes.FiftyFifty` `heroType` variant hero will not use it."
    );
  }

  if (heroType === HeroTypes.Primary) {
    backgroundImageStyle = backgroundImageSrc
      ? { backgroundImage: `url(${backgroundImageSrc})` }
      : {};
  } else if (heroType === HeroTypes.Campaign) {
    backgroundImageStyle = backgroundImageSrc
      ? { backgroundImage: `url(${backgroundImageSrc})` }
      : { backgroundColor };
  } else if (
    heroType === HeroTypes.Tertiary ||
    heroType === HeroTypes.FiftyFifty
  ) {
    backgroundImageStyle = { backgroundColor };
  }

  if (!HeroSecondaryTypes.includes(heroType)) {
    contentBoxStyling = {
      color: foregroundColor,
      backgroundColor,
    };
  } else if (foregroundColor || backgroundColor) {
    console.warn(
      "NYPL Reservoir Hero: The `foregroundColor` and/or `backgroundColor` " +
        "props have been passed, but the `HeroTypes.Secondary` `heroType` " +
        "variant will not use them."
    );
  }

  const childrenToRender =
    heroType === HeroTypes.Campaign ? (
      <>
        {image}
        <Box __css={styles.interior}>
          {finalHeading}
          {subHeaderText}
        </Box>
      </>
    ) : (
      <>
        {heroType !== HeroTypes.Primary &&
          heroType !== HeroTypes.Tertiary &&
          image}
        {finalHeading}
        {heroType === HeroTypes.Tertiary && subHeaderText ? (
          <p>{subHeaderText}</p>
        ) : (
          <Box __css={styles.bodyText}>{subHeaderText}</Box>
        )}
      </>
    );

  return (
    <Box
      data-testid="hero"
      data-responsive-background-image
      style={backgroundImageStyle}
      __css={styles}
    >
      <Box
        data-testid="hero-content"
        style={contentBoxStyling}
        __css={styles.content}
      >
        {childrenToRender}
      </Box>
      {locationDetails}
    </Box>
  );
}
