import * as React from "react";

import Hero from "./Hero";

export default {
  title: "Hero",
  component: Hero,
};

export const hero = () => <Hero
  heroPrimary={true}
  headerId="1"
  headerText="Title Of Page"
  imageUrl="https://placeimg.com/200/100/arch">
</Hero>;
