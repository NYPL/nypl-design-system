// OH-30 Header with Image Right
import * as React from "react";
import bem from "../../utils/bem";
import { HeroTypes } from "./HeroTypes";

export interface HeroProps {
  /** Content creators can modify the background color
   * when this component is used on Exhibition pages.
   */
  backgroundColor?: string;
  /** Image used for primary Hero types. Note, cannot
   * be used in conjunction with image.
   */
  backgroundImageSrc?: string;
  /** BlockName for use with BEM. See how to work with blockNames and BEM here: http://getbem.com/introduction/ */
  blockName?: string;
  /** ClassName that appears in addition to "hero" */
  className?: string;
  /** Content creators can modify the foreground color
   * when this component is used on Exhibition pages.
   */
  foregroundColor?: string;
  /** Required heading element. */
  heading?: JSX.Element;
  /** Can be Primary, secondary, tertiary, or 50/50. */
  heroType?: HeroTypes;
  /** Image used for secondary Hero types. Note, cannot
   * be used in conjunction with backgroundImageSrc.
   */
  image?: JSX.Element;
  /** Optional details area that contains location data. */
  locationDetails?: JSX.Element;
  /** Optional subheader that displays underneath the
   * required heading element.
   */
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
    locationDetails,
    subHeaderText,
  } = props;

  let heroModifiers;

  if (heroType === HeroTypes.Primary) {
    heroModifiers = ["primary"];
  } else if (heroType === HeroTypes.Secondary) {
    heroModifiers = ["secondary"];
  } else if (heroType === HeroTypes.Tertiary) {
    heroModifiers = ["tertiary"];
  } else if (heroType === HeroTypes.FiftyFifty) {
    heroModifiers = ["50-50"];
  }

  if (heroType === HeroTypes.Primary && !backgroundImageSrc) {
    throw new Error(`backgroundImageSrc required on PRIMARY heroTypes`);
  }

  if (backgroundImageSrc && image) {
    throw new Error(
      `Please only either backgroundImageSrc or image into Hero, got both`
    );
  }

  if (heroType !== HeroTypes.Primary && locationDetails) {
    throw new Error(`Please provide locationDetails only to PRIMARY heroTypes`);
  }

  const backgroundImageStyle = backgroundImageSrc
    ? { backgroundImage: "url(" + backgroundImageSrc + ")" }
    : { backgroundColor: backgroundColor };

  let contentBoxStyling = {};
  if (
    heroType === HeroTypes.Primary ||
    heroType === HeroTypes.Tertiary ||
    heroType === HeroTypes.FiftyFifty
  ) {
    if (foregroundColor && backgroundColor) {
      contentBoxStyling = {
        color: foregroundColor,
        backgroundColor: backgroundColor,
      };
    } else if (foregroundColor || backgroundColor) {
      const receivedColor = foregroundColor
        ? "foregroundColor"
        : "backgroundColor";
      throw new Error(
        `Please provide both foregroundColor and backgroundColor to Hero, only got ` +
          receivedColor
      );
    }
  } else {
    if (foregroundColor || backgroundColor) {
      throw new Error(
        `Received foregroundColor and/or backgroundColor, but these are only accepted on HeroTypes.Primary and HeroTypes.FiftyFifty`
      );
    }
  }

  return (
    <div
      className={bem(heroBaseClass, heroModifiers, blockName, [className])}
      data-responsive-background-image
      style={backgroundImageStyle}
    >
      <div
        className={bem("content", [], heroBaseClass)}
        style={contentBoxStyling}
      >
        {heading}

        {image}

        {subHeaderText}
      </div>

      {locationDetails}
    </div>
  );
}
