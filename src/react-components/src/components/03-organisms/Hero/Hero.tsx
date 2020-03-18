// OH-30 Header with Image Right
import * as React from "react";
import bem from "../../../utils/bem";
import BodyText from "../../01-atoms/Text/Text/BodyText";
import Image from "../../01-atoms/Images/Image/Image";
import Heading from "../../01-atoms/Text/Headings/Heading";

export interface HeroProps {
  heroPrimary: boolean;
  heroId: string;

  headerId: string;
  headerText: string;

  subHeaderText?: string;

  foregroundColor?: string;
  backgroundColor?: string;

  imageUrl: string;
  imageAltText?: string;
  imgAttributes?: {};
  imageModifiers?: string[];

  additionalDetails?: JSX.Element;
}

export default function Hero(props: React.PropsWithChildren<HeroProps>) {

  const heroBaseClass = "hero";

  let {
    heroPrimary, 
    heroId, 

    headerId, 
    headerText, 

    subHeaderText,

    foregroundColor,
    backgroundColor,

    imageUrl,
    additionalDetails,
  } = props;

  // Set imageUrl as background if it's a primary hero
  // else, display normally
  let heroModifiers = heroPrimary ? ["primary"] : [];

  let backgroundImage = heroPrimary ? "data-responsive-background-image" : "";

  let backgroundImageStyle = heroPrimary ? {backgroundImage: 'url(' + imageUrl + ')'} : {};

  let image = heroPrimary ? 
    '' : <Image 
      src={imageUrl} 
      isDecorative={true} 
      imageBlockname={heroBaseClass} 
    ></Image>;

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

      <div className={bem('headers', [], heroBaseClass)} style={headersStyling}>
        <Heading level={1} id={headerId}
          blockName="hero"
          text={headerText}>
        </Heading>

        <p className={bem('subtitle', [], heroBaseClass)} dangerouslySetInnerHTML={createMarkup()} />
      </div>

      {image}

      {/* <BodyText bodyContent={additionalDetails}></BodyText> */}
    </div>
  );
}

