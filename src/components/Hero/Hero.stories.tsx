import { Stack } from "@chakra-ui/react";
import type { Meta, StoryObj } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";
import { useState } from "react";

import Button from "../Button/Button";
import ButtonGroup from "../ButtonGroup/ButtonGroup";
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
const deprecatedMessage = (
  <Text mt="s" noSpace>
    This variant has been deprecated.
  </Text>
);
const otherSubHeaderText =
  "With 92 locations across the Bronx, Manhattan, and Staten Island, The New York Public Library is an essential part of neighborhoods across the city. Visit us today.";
const otherSubHeaderTextLong = (
  <>
    <Heading
      level="h2"
      size="heading3"
      subtitle="Lorem Parturient Bibendum Aenean Cras"
    >
      Subheading
    </Heading>
    <Heading level="h3" noSpace size="heading6">
      Subheading
    </Heading>
    <Text>
      Donec ullamcorper nulla non metus auctor fringilla. Cras mattis
      consectetur purus sit amet fermentum. Nulla vitae elit libero, a pharetra
      augue. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
      Aenean lacinia bibendum nulla sed consectetur. Vestibulum id ligula porta
      felis euismod semper. Donec sed odio dui. Nullam quis risus eget urna
      mollis ornare vel eu leo.
    </Text>
    <ButtonGroup>
      <Button id="other-button-example-1">Button</Button>
      <Button id="other-button-example-2" buttonType="secondary">
        Button
      </Button>
    </ButtonGroup>
  </>
);
const imageProps = {
  alt: "Image example",
  src: "//placekitten.com/800/400",
};

const meta: Meta<typeof Hero> = {
  title: "Components/Basic Elements/Hero",
  component: Hero,
  decorators: [withDesign],
  argTypes: {
    backdropBackgroundColor: { control: false },
    backgroundColor: { control: false },
    foregroundColor: { control: false },
    heading: { control: false },
    heroType: {
      control: { type: "select" },
      options: heroTypesArray,
      table: { defaultValue: { summary: "primary" } },
    },
    imageProps: { control: false },
    isDarkBackgroundImage: {
      control: { type: "boolean" },
      table: { defaultValue: { summary: "false" } },
    },
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
    backdropBackgroundColor: undefined,
    backgroundColor: undefined,
    backgroundImageSrc: undefined,
    foregroundColor: undefined,
    heading: undefined,
    heroType: "primary",
    imageProps,
    "imageProps.alt": "",
    "imageProps.src": "",
    isDarkBackgroundImage: undefined,
    locationDetails: undefined,
    subHeaderText: undefined,
  },
  render: (args) =>
    (args.heroType === "primary" && (
      <Hero
        {...args}
        backgroundImageSrc="//placekitten.com/2400/800"
        heading={
          <Heading
            level="h1"
            id="1"
            subtitle="Example Subtitle"
            text="Hero Primary"
          />
        }
        heroType={args.heroType}
        subHeaderText="Nullam id dolor id nibh ultricies vehicula ut id elit. Sed posuere consectetur est at lobortis."
      />
    )) ||
    (heroSecondaryTypes.includes(args.heroType) && (
      <div className="nypl--books-and-more">
        <Hero
          {...args}
          heading={
            <Heading
              level="h1"
              id="1"
              size="heading2"
              text="Hero Secondary (deprecated)"
            />
          }
          heroType={args.heroType}
          imageProps={args.imageProps}
          subHeaderText={
            <>
              {secondarySubHeaderText} {deprecatedMessage}
            </>
          }
        />
      </div>
    )) ||
    (args.heroType === "tertiary" && (
      <Hero
        {...args}
        heading={
          <Heading level="h1" id="1" size="heading2" text="Hero Tertiary" />
        }
        heroType={args.heroType}
        subHeaderText={otherSubHeaderText}
      />
    )) ||
    (args.heroType === "campaign" && (
      <Hero
        {...args}
        backgroundImageSrc="//placekitten.com/2400/800"
        heading={<Heading level="h1" id="1" text="Hero Campaign" />}
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
          src: "//placekitten.com/1200/400",
        }}
        subHeaderText={
          <>
            {otherSubHeaderText} {deprecatedMessage}
          </>
        }
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
      backgroundImageSrc="//placekitten.com/1600/800"
      heading={
        <Heading
          id="primary-hero"
          level="h1"
          noSpace
          overline="Hero Example"
          subtitle="Integer posuere erat a ante venenatis dapibus posuere velit aliquet."
          text="Hero Primary"
        />
      }
      heroType="primary"
    />
  ),
};

export const Tertiary: Story = {
  render: () => (
    <>
      <Hero
        heading={
          <Heading
            level="h1"
            id="tertiary-hero-subheading"
            size="heading2"
            subtitle="This is the subtitle"
            text="Hero Tertiary with Subtitle & Sub-Heading"
          />
        }
        heroType="tertiary"
        subHeaderText={otherSubHeaderText}
      />
      <br />
      <Hero
        heading={
          <Heading
            level="h1"
            id="tertiary-hero-subheading"
            size="heading2"
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
            level="h1"
            id="tertiary-hero"
            size="heading2"
            text="Hero Tertiary without Additional Elements"
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
          size="heading6"
          text="Campaign Hero at Default Height"
        />
        <Hero
          backgroundImageSrc="//placekitten.com/1600/800"
          heroType="campaign"
          heading={
            <Heading
              level="h1"
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
          size="heading6"
          text="Campaign Hero with Long Text"
        />
        <Hero
          backgroundImageSrc="//placekitten.com/1600/800"
          heroType="campaign"
          heading={
            <Heading
              level="h1"
              id="campaign-hero-long-text-heading"
              overline="Example"
              subtitle="Donec id elit non mi porta gravida at eget metus."
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
export const CampaignDarkBackgroundImage: Story = {
  render: () => (
    <Stack spacing="l">
      <div>
        <Hero
          backgroundImageSrc="//placekitten.com/1600/800"
          heroType="campaign"
          heading={
            <Heading
              level="h1"
              id="campaign-hero-default-heading"
              text="Hero Campaign"
            />
          }
          imageProps={imageProps}
          isDarkBackgroundImage
          subHeaderText={otherSubHeaderText}
        />
      </div>
    </Stack>
  ),
};
export const CampaignBackgroundColors: Story = {
  render: () => (
    <Stack spacing="l">
      <div>
        <Heading
          id="campaign-hero-custom-background-color"
          size="heading6"
          text="Campaign Hero with backdrop background color"
        />
        <Hero
          backdropBackgroundColor="section.research.primary"
          heroType="campaign"
          heading={
            <Heading
              level="h1"
              id="campaign-hero-long-text-heading"
              text="Hero Campaign"
            />
          }
          imageProps={imageProps}
          subHeaderText={otherSubHeaderTextLong}
        />
      </div>
      <div>
        <Heading
          id="campaign-hero-custom-background-and-foreground-colors"
          size="heading6"
          text="Campaign Hero with separate backdrop and foreground background design token color"
        />
        <Hero
          backdropBackgroundColor="section.education.primary"
          backgroundColor="ui.warning.primary"
          foregroundColor="ui.typgraphy.heading"
          heroType="campaign"
          heading={
            <Heading
              color="ui.typgraphy.heading"
              level="h1"
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

const CampaignFallBackExample = () => {
  const [imageSrc, setImageSrc] = useState("foobar.jpg");
  const fallbackImageSrc =
    "https://images.nypl.org/index.php?id=swope_244712&t=w";
  // For some reason IIIF image as fallback does not work...
  // const fallbackImageSrc = "https://iiif.nypl.org/iiif/2/105224/full/!900,900/0/default.jpg";

  return (
    <Stack spacing="l">
      <Heading
        id="campaign-hero-default"
        size="heading6"
        text="Campaign Hero with fallback image"
      />
      <Hero
        backgroundImageSrc={imageSrc}
        heroType="campaign"
        heading={
          <Heading
            level="h1"
            id="campaign-fallback-image"
            text="Hero Campaign"
          />
        }
        imageProps={{
          alt: "NYPL Image",
          src: imageSrc,
          fallbackSrc: fallbackImageSrc,
          onError: (_event) => {
            setImageSrc(fallbackImageSrc);
          },
        }}
        subHeaderText={otherSubHeaderText}
      />
    </Stack>
  );
};

export const CampaignFallbackImage: Story = {
  render: () => <CampaignFallBackExample />,
};

export const Secondary: Story = {
  name: "Secondary (deprecated)",
  render: () => (
    <Hero
      heading={
        <Heading
          level="h1"
          id="secondary-hero"
          size="heading2"
          text="Hero Secondary (deprecated)"
        />
      }
      heroType="secondary"
      imageProps={imageProps}
      subHeaderText={
        <>
          {secondarySubHeaderText} {deprecatedMessage}
        </>
      }
    />
  ),
};

export const FiftyFifty: Story = {
  name: "FiftyFifty (deprecated)",
  render: () => (
    <Stack spacing="l">
      <div>
        <Heading
          id="fiftyfifty-default"
          overline="Deprecated"
          text="FiftyFifty Hero at Default Height (deprecated)"
        />
        <Hero
          heroType="fiftyFifty"
          imageProps={imageProps}
          subHeaderText={
            <>
              {otherSubHeaderText} {deprecatedMessage}
            </>
          }
        />
      </div>
      <div>
        <Heading
          id="fiftyfifty-long-text"
          overline="Deprecated"
          text="FiftyFifty Hero with Long Text (deprecated)"
        />
        <Hero
          heroType="fiftyFifty"
          imageProps={imageProps}
          subHeaderText={
            <>
              {otherSubHeaderTextLong} {deprecatedMessage}
            </>
          }
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
          <Heading
            level="h1"
            size="heading2"
            id="main-secondary-hero"
            text="Secondary (deprecated)"
          />
        }
        heroType="secondary"
        imageProps={imageProps}
        subHeaderText={
          <>
            {secondarySubHeaderText} {deprecatedMessage}
          </>
        }
      />
      <Heading id="books-heading" text="secondaryBooksAndMore" />
      <Hero
        heading={
          <Heading
            level="h1"
            size="heading2"
            id="books-hero"
            text="Books and More (deprecated)"
          />
        }
        heroType="secondaryBooksAndMore"
        imageProps={imageProps}
        subHeaderText={
          <>
            {secondarySubHeaderText} {deprecatedMessage}
          </>
        }
      />
      <Heading id="location-heading" text="secondaryLocations" />
      <Hero
        heading={
          <Heading
            level="h1"
            size="heading2"
            id="locations-hero"
            text="Locations (deprecated)"
          />
        }
        heroType="secondaryLocations"
        imageProps={imageProps}
        subHeaderText={
          <>
            {secondarySubHeaderText} {deprecatedMessage}
          </>
        }
      />
      <Heading id="research-heading" text="secondaryResearch" />
      <Hero
        heading={
          <Heading
            level="h1"
            size="heading2"
            id="research-hero"
            text="Research (deprecated)"
          />
        }
        heroType="secondaryResearch"
        imageProps={imageProps}
        subHeaderText={
          <>
            {secondarySubHeaderText} {deprecatedMessage}
          </>
        }
      />
      <Heading id="whats-on-heading" text="secondaryWhatsOn" />
      <Hero
        heading={
          <Heading
            level="h1"
            size="heading2"
            id="whats-on-hero"
            text="What's On (deprecated)"
          />
        }
        heroType="secondaryWhatsOn"
        imageProps={imageProps}
        subHeaderText={
          <>
            {secondarySubHeaderText} {deprecatedMessage}
          </>
        }
      />
    </SimpleGrid>
  ),
};
