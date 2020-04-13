import * as React from "react";

import Image from "../../01-atoms/Images/Image/Image";
import Heading from "../../01-atoms/Text/Headings/Heading";
import BodyText from "../../01-atoms/Text/Text/BodyText";
import { HeroTypes } from "./HeroTypes";
import Hero from "./Hero";
import SectionName from "../../00-base/SectionName";
import Placeholder from "../../00-base/Placeholder";

export default {
  title: "Hero",
  component: Hero,
};

export const heroPrimary = () => <Hero
  heroType={HeroTypes.Primary}
  heading={<Heading
    level={1}
    id={"1"}
    text={"Hero Primary"}
    blockName={"hero"}
  />}
  backgroundImageSrc="https://placeimg.com/1600/800/arch"
/>;

export const heroSecondary = () => <Hero
  heroType={HeroTypes.Secondary}
  heading={<Heading
    level={1}
    id={"1"}
    text={"Hero Secondary"}
    blockName={"hero"}
  />}
  subHeaderText={<BodyText blockName="hero">Example subtitle</BodyText>}
  image={<Image
    src="https://placeimg.com/800/400/arch"
    isDecorative={true}
    imageBlockname={"hero"}
  />}
/>;

export const heroStaffPicks = () => <Hero
  heroType={HeroTypes.Primary}
  heading={<Heading
    level={1}
    id={"1"}
    text={"Staff Picks"}
    blockName={"hero"}
  />}
  subHeaderText={<BodyText blockName="hero">Nobody loves books more than our experts. Browse and filter hundreds of their favorites. Want more suggestions? Check out <a href="#etc">Best Books</a> and <a href="#etc2">125 Books We Love</a>.</BodyText>}
  foregroundColor="#ffffff"
  backgroundColor="#bb1d12"
  backgroundImageSrc="https://placeimg.com/1600/800/arch"
/>;

export const ExhibitionsHero = () => <Hero
  heroType={HeroTypes.Primary}
  heading={<Heading
    level={1}
    id={"1"}
    text={"Syncretic Vibrations: Exploring the Mosaic of Blackness through the Melville J. and Frances S.Herskovits Collection"}
    blockName={"hero"}
  />}
  locationDetails={<Placeholder>Placeholder for locationDetails, which doesn't exist yet</Placeholder>}
  foregroundColor="#ffffff"
  backgroundColor="#0071ce" // have these default to section colors
  backgroundImageSrc="https://p24.f4.n0.cdn.getcloudapp.com/items/NQuDO4xO/index.jpeg?v=d49888fbe420dd2fd163adc2ad0cdac6"
/>;

export const DigitalResearchBooksHeader = () => <SectionName><Hero
  heroType={HeroTypes.Secondary}
  heading={<Heading
    level={1}
    id={"1"}
    text={"ResearchNow"}
    blockName={"hero"}
  />}
  subHeaderText={<BodyText blockName="hero">The internet’s search engine for research collections and e-books you can use right now.
  Powered by the New York Public Library.</BodyText>}
  image={<Image
    src="https://placeimg.com/200/100/arch"
    isDecorative={true}
    imageBlockname={"hero"}
  />}
/></SectionName>;
