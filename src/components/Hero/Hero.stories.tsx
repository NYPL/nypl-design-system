import * as React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { withDesign } from "storybook-addon-designs";

import sections from "../../utils/siteSections";
import Image from "../Image/Image";
import Heading from "../Heading/Heading";
import { HeroTypes } from "./HeroTypes";
import Hero from "./Hero";

export default {
  title: "Hero",
  component: Hero,
  decorators: [withDesign],
  argTypes: {
    section: {
      type: "select",
      options: sections,
    },
  },
} as Meta;

const HeroTemplate = ({ section, ...args }) => (
  <div className={"nypl-ds " + section}>
    <Hero {...args} />
  </div>
);

export const heroPrimary = HeroTemplate.bind({});

heroPrimary.args = {
  heroType: HeroTypes.Primary,
  heading: (
    <Heading level={1} id={"1"} text={"Hero Primary"} blockName={"hero"} />
  ),
  subHeaderText: "Example subtitle",
  backgroundColor: "#000000",
  foregroundColor: "#ffffff",
  backgroundImageSrc: "https://placeimg.com/1600/800/arch",
};

heroPrimary.argTypes = {
  heroType: { table: { disable: true } },
  heading: { table: { disable: true } },
  image: { table: { disable: true } },
  foregroundColor: { control: { type: "color" } },
  backgroundColor: { control: { type: "color" } },
  blockName: { table: { disable: true } },
  className: { table: { disable: true } },
  modifiers: { table: { disable: true } },
  children: { table: { disable: true } },
};

heroPrimary.parameters = {
  design: {
    type: "figma",
    url:
      "https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Master?node-id=10968%3A5314",
  },
  layout: "fullscreen",
};

export const heroSecondary = HeroTemplate.bind({});

heroSecondary.args = {
  heroType: HeroTypes.Secondary,
  heading: (
    <Heading level={1} id={"1"} text={"Hero Secondary"} blockName={"hero"} />
  ),
  subHeaderText: <div className="hero__body-text">Example subtitle</div>,
  image: (
    <Image
      src="https://placeimg.com/800/400/arch"
      blockName={"hero"}
      alt={""}
    />
  ),
  section: sections[0],
};

heroSecondary.argTypes = {
  heroType: { table: { disable: true } },
  heading: { table: { disable: true } },
  backgroundImageSrc: { table: { disable: true } },
  subHeaderText: { table: { disable: true } },
  foregroundColor: { table: { disable: true } },
  backgroundColor: { table: { disable: true } },
  image: { table: { disable: true } },
  blockName: { table: { disable: true } },
  className: { table: { disable: true } },
  locationDetails: { table: { disable: true } },
  children: { table: { disable: true } },
  section: {
    control: {
      type: "select",
      options: sections,
    },
  },
};

heroSecondary.parameters = {
  design: {
    type: "figma",
    url:
      "https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Master?node-id=10968%3A5314",
  },
  layout: "fullscreen",
};

export const heroTertiary = HeroTemplate.bind({});

heroTertiary.args = {
  heroType: HeroTypes.Tertiary,
  heading: (
    <Heading level={1} id={"1"} text={"Hero Tertiary"} blockName={"hero"} />
  ),
  subHeaderText: (
    <p>
      Explore our collection of hundreds of online resources and databases. Use
      our free online content to help with your research, whether it's finding a
      single article, tracing a family tree, learning a new language, or
      anything in between.
    </p>
  ),
  backgroundColor: "#424242",
  foregroundColor: "#FFFFFF",
};

heroTertiary.argTypes = {
  heroType: { table: { disable: true } },
  heading: { table: { disable: true } },
  backgroundImageSrc: { table: { disable: true } },
  foregroundColor: { table: { disable: true } },
  subHeaderText: { table: { disable: true } },
  image: { table: { disable: true } },
  blockName: { table: { disable: true } },
  className: { table: { disable: true } },
  locationDetails: { table: { disable: true } },
  children: { table: { disable: true } },
};

heroTertiary.parameters = {
  design: {
    type: "figma",
    url:
      "https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Master?node-id=10968%3A5314",
  },
  layout: "fullscreen",
};

export const hero5050 = HeroTemplate.bind({});

hero5050.args = {
  heroType: HeroTypes.FiftyFifty,
  subHeaderText:
    "With 92 locations across the Bronx, Manhattan, and Staten Island, The New York Public Library is an essential part of neighborhoods across the city. Visit us today.",
  image: (
    <Image
      src="https://placeimg.com/600/200/arch"
      blockName={"hero"}
      alt={""}
    />
  ),
  backgroundColor: "#d0343a",
  foregroundColor: "#ffffff",
};

hero5050.argTypes = {
  heroType: { table: { disable: true } },
  blockName: { table: { disable: true } },
  className: { table: { disable: true } },
  heading: { table: { disable: true } },
  backgroundImageSrc: { table: { disable: true } },
  subHeaderText: { table: { disable: true } },
  image: { table: { disable: true } },
  locationDetails: { table: { disable: true } },
  children: { table: { disable: true } },
};

hero5050.parameters = {
  design: {
    type: "figma",
    url:
      "https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Master?node-id=10968%3A5314",
  },
  layout: "fullscreen",
};
