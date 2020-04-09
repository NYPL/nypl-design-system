// OH-30 Header with Image Right
import * as React from "react";
import bem from "../../../utils/bem";
import Image from "../../01-atoms/Images/Image/Image";
import Heading from "../../01-atoms/Text/Headings/Heading";
import { HeroTypes } from "./HeroTypes";

export interface HeroProps {
  /** Can be Primary, secondary, tertiary, or 50/50. */
  heroType?: HeroTypes;

  /** Required heading element. */
  heading: JSX.Element;

   /** Optional subheader that displays underneath the
    * required heading element.
    */
  subHeaderText?: JSX.Element;

  /** Optional details area that contains location data. */
  locationDetails?: JSX.Element;

  /** Content creators can modify the foreground color
    * when this component is used on Exhibition pages.
    */
  foregroundColor?: string;
  /** Content creators can modify the background color
    * when this component is used on Exhibition pages.
    */
  backgroundColor?: string;

  /** Image used for primary Hero types. Note, cannot
    * be used in conjunction with image.
    */
  backgroundImageSrc?: string;
  /** Image used for secondary Hero types. Note, cannot
    * be used in conjunction with backgroundImageSrc.
    */
  image?: JSX.Element;
}

export default function Hero(props: React.PropsWithChildren<HeroProps>) {

  const heroBaseClass = "hero";

  let {
    heroType,

    heading,

    subHeaderText,

    locationDetails,

    foregroundColor,
    backgroundColor,

    backgroundImageSrc,
    image,
  } = props;

  let heroModifiers;

  if (heroType === HeroTypes.Primary) {
    heroModifiers = ["primary"];
  } else if (heroType === HeroTypes.Secondary) {
    heroModifiers = ["secondary"];
  }

  if (heroType === HeroTypes.Primary && !backgroundImageSrc) {
    throw new Error(`backgroundImageSrc required on PRIMARY heroTypes`);
  }

  if (backgroundImageSrc && image) {
    throw new Error(`Please only either backgroundImageSrc or image into Hero, got both`);
  }

  if (heroType !== HeroTypes.Primary && locationDetails) {
    throw new Error(`Please provide locationDetails only to PRIMARY heroTypes`);
  }

  let backgroundImage = backgroundImageSrc ? "data-responsive-background-image" : "";

  let backgroundImageStyle = backgroundImageSrc ? {backgroundImage: "url(" + backgroundImageSrc + ")"} : {};

  let contentBoxStyling;
  if (heroType === HeroTypes.Primary) {
    if (foregroundColor && backgroundColor) {
      contentBoxStyling = {
        color: foregroundColor,
        backgroundColor: backgroundColor,
      };
    } else if (foregroundColor || backgroundColor) {
      let receivedColor = foregroundColor ? "foregroundColor" : "backgroundColor";
      throw new Error(`Please provide both foregroundColor and backgroundColor to Hero, only got ` + receivedColor);
    }
    else {
      contentBoxStyling = {};
    }
  } else {
    if (foregroundColor || backgroundColor) {
      throw new Error(`Received foregroundColor and/or backgroundColor, but these are only accepted on HeroTypes.Primary`);
    }
  }

  return (
    <div className={bem(heroBaseClass, heroModifiers)} data-responsive-background-image style={backgroundImageStyle}>
      <div className={bem("content", [], heroBaseClass)} style={contentBoxStyling}>
        {heading}

        {image}

        {subHeaderText}
      </div>

      {locationDetails}

    </div>
  );
}

