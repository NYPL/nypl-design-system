import * as React from "react";

import Image from "../../01-atoms/Images/Image/Image";
import Heading from "../../01-atoms/Text/Headings/Heading";
import Hero from "./Hero";

export default {
  title: "Hero",
  component: Hero,
};

export const heroPrimary = () => <Hero
  heroPrimary={true}
  heroId="2"
  heading={<Heading 
    level={1} 
    id={"1"} 
    text={"Hero Primary"}
    blockName={"hero"}
  />}
  backgroundImageSrc="https://placeimg.com/1600/800/arch"
/>;

export const heroSecondary = () => <Hero
  heroPrimary={false}
  heroId="2"
  heading={<Heading 
    level={1} 
    id={"1"} 
    text={"Hero Secondary"}
    blockName={"hero"}
  />}
  subHeaderText="Example subtitle"
  image={<Image 
    src="https://placeimg.com/200/100/arch" 
    isDecorative={true}
    imageBlockname={"hero"}
  />}
/>;

export const heroTertiary = () => <Hero
  heroPrimary={false}
  heroId="2"
  heading={<Heading 
    level={1} 
    id={"1"} 
    text={"Title of Page"}
    blockName={"hero"}
  />}
  image={<Image 
    src="https://placeimg.com/200/100/arch" 
    isDecorative={true} 
    imageBlockname={"hero"}
  />}
/>;

export const heroStaffPicks = () => <Hero
  heroPrimary={true}
  heroId="2"
  heading={<Heading 
    level={1} 
    id={"1"} 
    text={"Staff Picks"}
    blockName={"hero"}
  />}
  subHeaderText="Nobody loves books more than our experts. Browse and filter hundreds of their favorites. Want more suggestions? Check out <a href='#'>Best Books</a> and <a href='#'>125 Books We Love</a>."
  foregroundColor="#ffffff"
  backgroundColor="#bb1d12"
  backgroundImageSrc="https://placeimg.com/1600/800/arch"
/>;

export const heroExhibitions = () => <Hero
  heroPrimary={true}
  heroId="2"
  heading={<Heading 
    level={1} 
    id={"1"} 
    text={"Syncretic Vibrations: Exploring the Mosaic of Blackness through the Melville J. and Frances S.Herskovits Collection"}
    blockName={"hero"}
  />}
  foregroundColor="#ffffff"
  backgroundColor="#0071ce"
  backgroundImageSrc="https://images.nypl.org/index.php?id=419627&t=w"
/>;

export const heroResearchNow = () => <Hero
  heroPrimary={false}
  heroId="2"
  heading={<Heading 
    level={1} 
    id={"1"} 
    text={"ResearchNow"}
    blockName={"hero"}
  />}
  subHeaderText="The internet’s search engine for research collections and e-books you can use right now.
  Powered by the New York Public Library."
  image={<Image 
    src="https://placeimg.com/200/100/arch" 
    isDecorative={true}
    imageBlockname={"hero"}
  />}
/>;
