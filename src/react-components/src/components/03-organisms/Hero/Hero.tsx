// OH-30 Header with Image Right
import * as React from "react";
import bem from "../../../utils/bem";
import Image from "../../01-atoms/Images/Image/Image";
import Heading from "../../01-atoms/Text/Headings/Heading";

export interface HeroProps {
  /** Might get deleted?
    */
  heroPrimary: boolean;
  /** Might get deleted?
    */
  heroId: string;

  /** Required heading element.
    */
   heading: JSX.Element;

   /** Optional subheader that displays underneath the
    * required heading element.
     */
  subHeaderText?: string;

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
    heroPrimary, 
    heroId, 

    heading,

    subHeaderText,

    foregroundColor,
    backgroundColor,

    backgroundImageSrc,
    image,
  } = props;

  if (backgroundImageSrc && image) {
    throw new Error(`Please only either backgroundImageSrc or image into Hero, got both`);
  }

  let heroModifiers = backgroundImageSrc ? ["primary"] : ["secondary"];

  let backgroundImage = backgroundImageSrc ? "data-responsive-background-image" : "";

  let backgroundImageStyle = backgroundImageSrc ? {backgroundImage: 'url(' + backgroundImageSrc + ')'} : {};

  function createMarkup() {
    return {__html: subHeaderText};
  }

  let headersStyling;

  if (foregroundColor && backgroundColor) {
    headersStyling = {
      color: foregroundColor,
      backgroundColor: backgroundColor,
    }
  } else {
    console.log("Foreground and background not provided");
    headersStyling = {};
  }

  return (
    <div className={bem(heroBaseClass, heroModifiers)} data-responsive-background-image id={heroId} style={backgroundImageStyle}>
      <div className={bem('content', [], heroBaseClass)} style={headersStyling}>
        {heading}
        <p className={bem('subtitle', [], heroBaseClass)} dangerouslySetInnerHTML={createMarkup()} />
      </div>
      {image}
    </div>
  );
}

