import * as React from "react";

import Hero from "./Hero";

export default {
  title: "Hero",
  component: Hero,
};

export const heroPrimary = () => <Hero
  heroPrimary={true}
  heroId="2"
  headerId="1"
  headerText="Example Hero"
  imageUrl="https://placeimg.com/1600/800/arch">
</Hero>;

export const heroPrimaryWithSubtitleAndCustomColor = () => <Hero
  heroPrimary={true}
  heroId="2"
  headerId="1"
  headerText="Staff Picks"
  subHeaderText="Nobody loves books more than our experts. Browse and filter hundreds of their favorites. Want more suggestions? Check out <a href='#'>Best Books</a> and <a href='#'>125 Books We Love</a>."
  foregroundColor="#ffffff"
  backgroundColor="#bb1d12"
  imageUrl="https://placeimg.com/1600/800/arch">
</Hero>;

export const heroPrimaryWithLocationDetails = () => <Hero
  heroPrimary={true}
  heroId="2"
  headerId="1"
  headerText="Syncretic Vibrations: Exploring the Mosaic of Blackness through the Melville J. and Frances S.Herskovits Collection"
  foregroundColor="#ffffff"
  backgroundColor="#0071ce"
  imageUrl="https://images.nypl.org/index.php?id=419627&t=w">
</Hero>;

export const heroSecondary = () => <Hero
  heroPrimary={false}
  heroId="2"
  headerId="1"
  headerText="Title Of Page"
  imageUrl="https://placeimg.com/200/100/arch">
</Hero>;

export const heroTertiary = () => <Hero
  heroPrimary={false}
  heroId="2"
  headerId="1"
  headerText="Title Of Page"
  imageUrl="https://placeimg.com/200/100/arch">
</Hero>;
