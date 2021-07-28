// OH-30 Header with Image Right
import * as React from "react";
import bem from "../../utils/bem";
import { HeroTypes } from "./HeroTypes";

export interface HeroProps {
  /** Optional hex color value used to override the default background color for a given `Hero` variation; Note: not all `Hero` variations utilize this prop */
  backgroundColor?: string;
  /** Optional path to an image that will be used as a background image for the `Hero` component; Note: not all `Hero` variations utilize this prop */
  backgroundImageSrc?: string;
  /** BlockName for use with BEM. See how to work with blockNames and BEM here: http://getbem.com/introduction/ */
  blockName?: string;
  /** Optional className that appears in addition to `hero` */
  className?: string;
  /** Optional hex color value used to override the default text color for a given `Hero` variation; Note: not all `Hero` variations utilize this prop */
  foregroundColor?: string;
  /** Required heading element. */
  heading?: JSX.Element;
  /** Used to control how the `Hero` component will be rendered. */
  heroType?: HeroTypes;
  /** Optional `Image` component used for SECONDARY, FIFTYFIFTY and CAMPAIGN `Hero` types; Note: `image` can only be used in conjunction with `backgroundImageSrc` for CAMPAIGN Hero type; Note: not all `Hero` variations utilize this prop */
  image?: JSX.Element;
  /** Optional details area that contains location data; Note: not all `Hero` variations utilize this prop */
  locationDetails?: JSX.Element;
  /** Modifiers array for use with BEM. See how to work with modifiers and BEM here: http://getbem.com/introduction/ */
  modifiers?: string[];
  /** Optional string used for the subheader that displays underneath the heading element */
  subHeaderText?: JSX.Element;
}

export default function Hero(props: React.PropsWithChildren<HeroProps>) {
  const heroBaseClass = "hero";

  const {
    backgroundColor,
    backgroundImageSrc,
    blockName,
    className,
    foregroundColor,
    heading,
    heroType,
    image,
    modifiers = [],
    locationDetails,
    subHeaderText,
  } = props;

  if (heroType === HeroTypes.Primary) {
    modifiers.push("primary");
  } else if (heroType === HeroTypes.Secondary) {
    modifiers.push("secondary");
  } else if (heroType === HeroTypes.Tertiary) {
    modifiers.push("tertiary");
  } else if (heroType === HeroTypes.FiftyFifty) {
    modifiers.push("50-50");
  } else if (heroType === HeroTypes.Campaign) {
    modifiers.push("campaign");
  }

  if (heroType === HeroTypes.Primary && !backgroundImageSrc) {
    console.warn(
      `Warning: it is recommended to use the "backgroundImageSrc" prop for PRIMARY hero`
    );
    modifiers.push("warning");
  }

  if (heroType === HeroTypes.Primary && image) {
    console.warn(
      `Warning: the "image" prop has been passed, but PRIMARY hero will not use it`
    );
    modifiers.push("warning");
  }

  if (heroType === HeroTypes.Secondary && backgroundImageSrc) {
    console.warn(
      `Warning: the "backgroundImageSrc" prop has been passed, but SECONDARY hero will not use it`
    );
    modifiers.push("warning");
  }

  if (heroType === HeroTypes.Tertiary && (backgroundImageSrc || image)) {
    console.warn(`Warning: TERTIARY hero will not use any of the image props`);
    modifiers.push("warning");
  }

  if (heroType === HeroTypes.FiftyFifty && backgroundImageSrc) {
    console.warn(
      `Warning: the "backgroundImageSrc" prop has been passed, but FIFTYFIFTY hero will not use it`
    );
    modifiers.push("warning");
  }

  if (heroType === HeroTypes.Campaign && (!backgroundImageSrc || !image)) {
    console.warn(
      `Warning: it is recommended to use both "backgroundImageSrc" and "image" props for CAMPAIGN hero`
    );
    modifiers.push("warning");
  }

  if (heroType !== HeroTypes.Primary && locationDetails) {
    console.warn(
      `Warning: Please provide "locationDetails" only to PRIMARY hero`
    );
    modifiers.push("warning");
  }

  let backgroundImageStyle = {};
  if (heroType === HeroTypes.Primary) {
    backgroundImageStyle = backgroundImageSrc
      ? { backgroundImage: `url(${backgroundImageSrc})` }
      : null;
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

  let contentBoxStyling = {};
  if (
    heroType === HeroTypes.Primary ||
    heroType === HeroTypes.Tertiary ||
    heroType === HeroTypes.FiftyFifty ||
    heroType === HeroTypes.Campaign
  ) {
    contentBoxStyling = {
      color: foregroundColor,
      backgroundColor,
    };
  } else {
    if (foregroundColor || backgroundColor) {
      console.warn(
        `Warning: the "foregroundColor" and/or "backgroundColor" props have been passed, but SECONDARY Hero will not use them`
      );
      modifiers.push("warning");
    }
  }

  const childrenToRender =
    heroType === HeroTypes.Campaign ? (
      <>
        {image}
        <div className="interior">
          {heading}
          {subHeaderText}
        </div>
      </>
    ) : (
      <>
        {heroType !== HeroTypes.Primary &&
          heroType !== HeroTypes.Tertiary &&
          image}
        {heading}
        {heroType === HeroTypes.Tertiary ? (
          <p>{subHeaderText}</p>
        ) : (
          subHeaderText
        )}
      </>
    );

  return (
    <div
      className={bem(heroBaseClass, modifiers, blockName, [className])}
      data-responsive-background-image
      style={backgroundImageStyle}
    >
      <div
        className={bem("content", [], heroBaseClass)}
        style={contentBoxStyling}
      >
        {childrenToRender}
      </div>

      {locationDetails}
    </div>
  );
}
