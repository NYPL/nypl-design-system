// OH-30 Header with Image Right
import * as React from "react";
import bem from "../../../utils/bem";
import Image from "../../01-atoms/Images/Image/Image";
import BodyText from "../../01-atoms/Text/Text/BodyText";
import Heading from "../../01-atoms/Text/Headings/Heading";

export interface HeroProps {
  heroPrimary: boolean;

  headerId: string;
  headerText: string;
  subHeaderText?: string;

  imageUrl: string;
  imageAltText?: string;
  imgAttributes?: {};
  imageModifiers?: string[];

  bodyText?: JSX.Element;
}

export default function Hero(props: React.PropsWithChildren<HeroProps>) {

  const heroBaseClass = "hero";

  let {
    heroPrimary, 

    headerId, 
    headerText, 

    imageUrl,
  } = props;

  let heroModifiers = heroPrimary ? ["primary"] : [];

  let imageModifiers = heroPrimary ? ["background"] : [];

  return (
    <div className={bem(heroBaseClass, heroModifiers)}>
      <Heading level={1} id={headerId}
        blockName="hero"
        text={headerText}>
      </Heading>

      <Image 
        src={imageUrl} 
        isDecorative={true} 
        imageBlockname={heroBaseClass} 
        imageModifiers={imageModifiers} 
      ></Image>
    </div>
  );
}

