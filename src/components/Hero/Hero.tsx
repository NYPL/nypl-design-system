import * as React from "react";
import { Box, useMultiStyleConfig } from "@chakra-ui/react";

import { HeroTypes, HeroSecondaryTypes } from "./HeroTypes";
import Image from "../Image/Image";

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
  /** Text description of the image; to follow best practices for accessibility,
   * this prop should not be left blank if `imageSrc` is passed. */
  imageAlt?: string;
  /** Optional `imageSrc` used for SECONDARY, FIFTYFIFTY and CAMPAIGN
   * `Hero` types; Note: `imageSrc` can only be used in conjunction with
   * `backgroundImageSrc` for the CAMPAIGN `Hero` type.
   * Note: not all `Hero` variations utilize this prop. */
  imageSrc?: string;
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
    imageAlt,
    imageSrc,
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

  if (imageSrc && !imageAlt) {
    console.warn(
      `Hero: the "imageSrc" prop was passed but the "imageAlt" props was not. This will make the rendered image inaccessible.`
    );
  }

  if (heroType === HeroTypes.Primary) {
    if (!backgroundImageSrc) {
      console.warn(
        `Hero: it is recommended to use the "backgroundImageSrc" prop for the PRIMARY Hero.`
      );
    }
    if (imageAlt && imageSrc) {
      console.warn(
        `Hero: the "imageSrc" and "imageAlt" props have been passed, but the "PRIMARY" Hero will not use it.`
      );
    }
  } else if (locationDetails) {
    console.warn(
      `Hero: Please provide "locationDetails" only to PRIMARY hero.`
    );
  }
  if (HeroSecondaryTypes.includes(heroType) && backgroundImageSrc) {
    console.warn(
      `Hero: the "backgroundImageSrc" prop has been passed, but SECONDARY hero will not use it.`
    );
  }
  if (heroType === HeroTypes.Tertiary && (backgroundImageSrc || imageSrc)) {
    console.warn(`Hero: TERTIARY hero will not use any of the image props.`);
  }
  if (heroType === HeroTypes.Campaign && (!backgroundImageSrc || !imageSrc)) {
    console.warn(
      `Hero: it is recommended to use both "backgroundImageSrc" and "image" props for CAMPAIGN hero.`
    );
  }
  if (heroType === HeroTypes.FiftyFifty && backgroundImageSrc) {
    console.warn(
      `Hero: the "backgroundImageSrc" prop has been passed, but FIFTYFIFTY hero will not use it.`
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
      `Hero: the "foregroundColor" and/or "backgroundColor" props have been passed, but SECONDARY Hero will not use them.`
    );
  }

  const childrenToRender =
    heroType === HeroTypes.Campaign ? (
      <>
        <Image alt={imageAlt} src={imageSrc} />
        <Box __css={styles.interior}>
          {finalHeading}
          {subHeaderText}
        </Box>
      </>
    ) : (
      <>
        {heroType !== HeroTypes.Primary && heroType !== HeroTypes.Tertiary && (
          <Image alt={imageAlt} src={imageSrc} />
        )}
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
