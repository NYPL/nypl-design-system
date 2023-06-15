import { Stack } from "@chakra-ui/react";
import type { Meta, StoryObj } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";

import Heading from "../Heading/Heading";
import Hero, { heroSecondaryTypes, heroTypesArray } from "./Hero";
import SimpleGrid from "../Grid/SimpleGrid";
import Text from "../Text/Text";

const secondarySubHeaderText = (
  <>
    Explore our collection of hundreds of online resources and databases. Use
    our free online content to help with your research, whether it's finding a
    single article, tracing a family tree, learning a new language, or anything
    in between.
  </>
);
const otherSubHeaderText =
  "With 92 locations across the Bronx, Manhattan, and Staten Island, The New York Public Library is an essential part of neighborhoods across the city. Visit us today.";
const otherSubHeaderTextLong = (
  <>
    <Heading level="two" noSpace>
      Subheading
    </Heading>
    <Text size="caption">Lorem Parturient Bibendum Aenean Cras</Text>
    <Heading level="three">Subheading</Heading>
    <Text noSpace>
      Donec ullamcorper nulla non metus auctor fringilla. Cras mattis
      consectetur purus sit amet fermentum. Nulla vitae elit libero, a pharetra
      augue. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
      Aenean lacinia bibendum nulla sed consectetur. Vestibulum id ligula porta
      felis euismod semper. Donec sed odio dui. Nullam quis risus eget urna
      mollis ornare vel eu leo.
    </Text>
  </>
);
const imageProps = {
  alt: "Image example",
  src: "http://placekitten.com/800/400",
};

const meta: Meta<typeof Hero> = {
  title: "Components/Basic Elements/Hero",
  component: Hero,
  decorators: [withDesign],
  argTypes: {
    backgroundColor: { control: false },
    foregroundColor: { control: false },
    heading: { control: false },
    heroType: {
      control: { type: "select" },
      options: heroTypesArray,
      table: { defaultValue: { summary: "primary" } },
    },
    imageProps: { control: false },
    locationDetails: { control: false },
    subHeaderText: { control: false },
  },
};

export default meta;
type Story = StoryObj<typeof Hero>;

/**
 * Main Story for the Hero component. This must contains the `args`
 * and `parameters` properties in this object.
 */
export const WithControls: Story = {
  args: {
    backgroundColor: undefined,
    backgroundImageSrc: undefined,
    foregroundColor: undefined,
    heading: undefined,
    heroType: "primary",
    imageProps,
    locationDetails: undefined,
    subHeaderText: undefined,
  },
  render: (args) =>
    (args.heroType === "primary" && (
      <Hero
        {...args}
        backgroundImageSrc="http://placekitten.com/2400/800"
        heading={<Heading level="one" id="1" text="Hero Primary" />}
        heroType={args.heroType}
        subHeaderText="Example Subtitle"
      />
    )) ||
    (heroSecondaryTypes.includes(args.heroType) && (
      <div className="nypl--books-and-more">
        <Hero
          {...args}
          heading={<Heading level="one" id="1" text="Hero Secondary" />}
          heroType={args.heroType}
          imageProps={args.imageProps}
          subHeaderText={secondarySubHeaderText}
        />
      </div>
    )) ||
    (args.heroType === "tertiary" && (
      <Hero
        {...args}
        heading={<Heading level="one" id="1" text="Hero Tertiary" />}
        heroType={args.heroType}
        subHeaderText={otherSubHeaderText}
      />
    )) ||
    (args.heroType === "campaign" && (
      <Hero
        {...args}
        backgroundImageSrc="http://placekitten.com/2400/800"
        heading={<Heading level="one" id="1" text="Hero Campaign" />}
        heroType={args.heroType}
        imageProps={args.imageProps}
        subHeaderText={otherSubHeaderText}
      />
    )) ||
    (args.heroType === "fiftyFifty" && (
      <Hero
        {...args}
        heroType={args.heroType}
        imageProps={{
          ...args.imageProps,
          src: "http://placekitten.com/1200/400",
        }}
        subHeaderText={otherSubHeaderText}
      />
    )),
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Main?node-id=36817%3A23704",
    },
    jest: "Hero.test.tsx",
  },
};

// The following are additional Accordion example Stories.
export const Primary: Story = {
  render: () => (
    <Hero
      backgroundImageSrc="http://placekitten.com/1600/800"
      heading={<Heading level="one" id="primary-hero" text="Hero Primary" />}
      heroType="primary"
    />
  ),
};

export const Secondary: Story = {
  render: () => (
    <Hero
      heading={
        <Heading level="one" id="secondary-hero" text="Hero Secondary" />
      }
      heroType="secondary"
      imageProps={imageProps}
      subHeaderText={secondarySubHeaderText}
    />
  ),
};

export const Tertiary: Story = {
  render: () => (
    <>
      <Hero
        heading={
          <Heading
            level="one"
            id="tertiary-hero-subheading"
            text="Hero Tertiary with Sub-Heading"
          />
        }
        heroType="tertiary"
        subHeaderText={otherSubHeaderText}
      />
      <br />
      <Hero
        heading={
          <Heading
            level="one"
            id="tertiary-hero"
            text="Hero Tertiary without Sub-Heading text"
          />
        }
        heroType="tertiary"
      />
    </>
  ),
};

export const Campaign: Story = {
  render: () => (
    <Stack spacing="l">
      <div>
        <Heading
          id="campaign-hero-default"
          text="Campaign Hero at Default Height"
        />
        <Hero
          backgroundImageSrc="http://placekitten.com/g/2400/800"
          heroType="campaign"
          heading={
            <Heading
              level="one"
              id="campaign-hero-default-heading"
              text="Hero Campaign"
            />
          }
          imageProps={imageProps}
          subHeaderText={otherSubHeaderText}
        />
      </div>
      <div>
        <Heading
          id="campaign-hero-long-text"
          text="Campaign Hero with Long Text"
        />
        <Hero
          backgroundImageSrc="http://placekitten.com/g/2400/800"
          heroType="campaign"
          heading={
            <Heading
              level="one"
              id="campaign-hero-long-text-heading"
              text="Hero Campaign"
            />
          }
          imageProps={imageProps}
          subHeaderText={otherSubHeaderTextLong}
        />
      </div>
    </Stack>
  ),
};

export const FiftyFifty: Story = {
  render: () => (
    <Stack spacing="l">
      <div>
        <Heading
          id="fiftyfifty-default"
          text="FiftyFifty Hero at Default Height"
        />
        <Hero
          heroType="fiftyFifty"
          imageProps={imageProps}
          subHeaderText={otherSubHeaderText}
        />
      </div>
      <div>
        <Heading
          id="fiftyfifty-long-text"
          text="FiftyFifty Hero with Long Text"
        />
        <Hero
          heroType="fiftyFifty"
          imageProps={imageProps}
          subHeaderText={otherSubHeaderTextLong}
        />
      </div>
    </Stack>
  ),
};
export const ColorVariations: Story = {
  name: "Color Variations for Secondary Hero",
  render: () => (
    <SimpleGrid columns={1}>
      <Heading id="main-secondary-heading" text="secondary" />
      <Hero
        heading={
          <Heading level="one" id="main-secondary-hero" text="Secondary" />
        }
        heroType="secondary"
        imageProps={imageProps}
        subHeaderText={secondarySubHeaderText}
      />
      <Heading id="books-heading" text="secondaryBooksAndMore" />
      <Hero
        heading={<Heading level="one" id="books-hero" text="Books and More" />}
        heroType="secondaryBooksAndMore"
        imageProps={imageProps}
        subHeaderText={secondarySubHeaderText}
      />
      <Heading id="location-heading" text="secondaryLocations" />
      <Hero
        heading={<Heading level="one" id="locations-hero" text="Locations" />}
        heroType="secondaryLocations"
        imageProps={imageProps}
        subHeaderText={secondarySubHeaderText}
      />
      <Heading id="research-heading" text="secondaryResearch" />
      <Hero
        heading={<Heading level="one" id="research-hero" text="Research" />}
        heroType="secondaryResearch"
        imageProps={imageProps}
        subHeaderText={secondarySubHeaderText}
      />
      <Heading id="whats-on-heading" text="secondaryWhatsOn" />
      <Hero
        heading={<Heading level="one" id="whats-on-hero" text="What's On" />}
        heroType="secondaryWhatsOn"
        imageProps={imageProps}
        subHeaderText={secondarySubHeaderText}
      />
    </SimpleGrid>
  ),
};
