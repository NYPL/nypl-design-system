import { Stack } from "@chakra-ui/react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";

import Button from "../Button/Button";
import ButtonGroup from "../ButtonGroup/ButtonGroup";
import Heading from "../Heading/Heading";
import Hero, { heroVariantsArray } from "./Hero";
import Link from "../Link/Link";
import Text from "../Text/Text";
import { getPlaceholderImage } from "../../utils/utils";

const otherSubHeaderText = (
  <>
    With 92 locations across the Bronx, Manhattan, and Staten Island,{" "}
    <Link href="https://www.nypl.org/locations/snfl/childrens">
      The New York Public Library
    </Link>{" "}
    is an essential part of neighborhoods across the city. Visit us today.
  </>
);
const otherSubHeaderTextLong = (
  <>
    <Heading
      level="h2"
      mb="s"
      size="heading3"
      subtitle="Lorem Parturient Bibendum Aenean Cras"
    >
      Subheading
    </Heading>
    <Heading level="h3" size="heading6">
      Subheading
    </Heading>
    <Text mb="s">
      Donec ullamcorper nulla non metus auctor fringilla. Cras mattis elit{" "}
      <Link href="https://www.nypl.org/locations/snfl/childrens">
        The New York Public Library
      </Link>{" "}
      consectetur purus sit amet fermentum. Nulla vitae elit libero, a pharetra
      augue. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
      Aenean lacinia{" "}
      <Link href="https://google.com" type="external">
        Google
      </Link>{" "}
      bibendum nulla sed consectetur. Vestibulum id ligula porta felis euismod
      semper. Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel
      eu leo.
    </Text>
    <ButtonGroup>
      <Button id="other-button-example-1">Button</Button>
      <Button id="other-button-example-2" variant="secondary">
        Button
      </Button>
    </ButtonGroup>
  </>
);
const imageProps = {
  alt: "Image example",
  src: getPlaceholderImage(),
};

const meta: Meta<typeof Hero> = {
  title: "Components/Basic Elements/Hero",
  component: Hero,
  argTypes: {
    backdropBackgroundColor: { control: { type: "color" } },
    backgroundColor: { control: { type: "color" } },
    foregroundColor: { control: { type: "color" } },
    heading: { control: false },
    imageProps: { control: false },
    isDarkBackgroundImage: {
      control: { type: "boolean" },
      table: { defaultValue: { summary: "false" } },
    },
    isDarkText: {
      control: { type: "boolean" },
      table: { defaultValue: { summary: "false" } },
    },
    subHeaderText: { control: false },
    textBackgroundColor: { control: { type: "color" } },
    textColor: { control: { type: "color" } },
    variant: {
      control: { type: "select" },
      options: heroVariantsArray,
      table: { defaultValue: { summary: "primary" } },
    },
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
    imageProps,
    "imageProps.alt": "",
    "imageProps.src": "",
    isDarkBackgroundImage: undefined,
    isDarkText: undefined,
    subHeaderText: undefined,
    textBackgroundColor: undefined,
    textColor: undefined,
    variant: "primary",
  },
  render: (args) =>
    (args.variant === "primary" && (
      <Hero
        {...args}
        backgroundImageSrc={getPlaceholderImage()}
        heading={
          <Heading
            id="1"
            level="h1"
            mb="s"
            subtitle="Example Subtitle"
            text="Hero Primary"
          />
        }
        variant={args.variant}
        subHeaderText="Nullam id dolor id nibh ultricies vehicula ut id elit. Sed posuere consectetur est at lobortis."
      />
    )) ||
    (args.variant === "tertiary" && (
      <Hero
        {...args}
        heading={
          <Heading level="h1" id="1" size="heading2" text="Hero Tertiary" />
        }
        variant={args.variant}
        subHeaderText={otherSubHeaderText}
      />
    )) ||
    (args.variant === "campaign" && (
      <Hero
        {...args}
        backgroundImageSrc={getPlaceholderImage()}
        heading={<Heading level="h1" id="1" mb="s" text="Hero Campaign" />}
        variant={args.variant}
        imageProps={args.imageProps}
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

// https://iiif.nypl.org/iiif/2/5164274/full/!900,900/0/default.jpg
// The following are additional Accordion example Stories.
export const Primary: Story = {
  render: () => (
    <Hero
      backgroundImageSrc="https://iiif.nypl.org/iiif/2/5164274/full/!900,900/0/default.jpg"
      heading={
        <Heading
          id="primary-hero"
          level="h1"
          overline="Hero Example"
          subtitle="Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Donec sed odio dui. Vestibulum id ligula porta felis euismod semper. Aenean eu leo quam."
          text="Hero Primary"
        />
      }
      variant="primary"
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
            id="tertiary-hero-subtitle-subheading"
            size="heading2"
            subtitle="This is the subtitle"
            text="Hero Tertiary with Subtitle & Sub-Heading"
          />
        }
        variant="tertiary"
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
        variant="tertiary"
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
        variant="tertiary"
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
          level="h4"
          mb="s"
          size="heading6"
          text="Campaign Hero at Default Height"
        />
        <Hero
          backgroundImageSrc={getPlaceholderImage()}
          variant="campaign"
          heading={
            <Heading
              level="h1"
              id="campaign-hero-default-heading"
              text="Hero Campaign"
              mb="s"
            />
          }
          imageProps={{
            alt: "",
            src: "https://iiif.nypl.org/iiif/2/5164274/full/!900,900/0/default.jpg",
          }}
          subHeaderText={otherSubHeaderText}
        />
      </div>
      <div>
        <Heading
          id="campaign-hero-long-text"
          level="h4"
          mb="s"
          size="heading6"
          text="Campaign Hero with Long Text"
        />
        <Hero
          backgroundImageSrc={getPlaceholderImage()}
          variant="campaign"
          heading={
            <Heading
              level="h1"
              id="campaign-hero-long-text-heading"
              overline="Example"
              subtitle="Donec id elit non mi porta gravida at eget metus."
              text="Hero Campaign"
              mb="s"
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
    <Hero
      backgroundImageSrc="https://iiif.nypl.org/iiif/2/5164274/full/!900,900/0/default.jpg"
      variant="campaign"
      heading={
        <Heading
          level="h1"
          id="campaign-hero-default-heading"
          mb="s"
          text="Hero Campaign"
        />
      }
      imageProps={imageProps}
      isDarkBackgroundImage
      subHeaderText={otherSubHeaderText}
    />
  ),
};
export const CampaignBackgroundColors: Story = {
  render: () => (
    <Hero
      backdropBackgroundColor="section.research.primary"
      variant="campaign"
      heading={
        <Heading
          level="h1"
          id="campaign-hero-long-text-heading"
          mb="s"
          text="Hero Campaign"
        />
      }
      imageProps={imageProps}
      subHeaderText={otherSubHeaderTextLong}
    />
  ),
};
export const TextBackgroundColor: Story = {
  render: () => (
    <Stack spacing="l">
      <div>
        <Hero
          backgroundImageSrc="https://iiif.nypl.org/iiif/2/5164274/full/!900,900/0/default.jpg"
          heading={
            <Heading
              id="primary-hero"
              level="h1"
              overline="Hero Example"
              subtitle="Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Donec sed odio dui. Vestibulum id ligula porta felis euismod semper. Aenean eu leo quam."
              text="Hero Primary"
            />
          }
          textBackgroundColor="brand.primary"
          textColor="ui.white"
          variant="primary"
        />
      </div>
      <div>
        <Hero
          heading={
            <Heading
              level="h1"
              id="tertiary-hero-subtitle-subheading"
              size="heading2"
              subtitle="This is the subtitle"
              text="Hero Tertiary with Subtitle & Sub-Heading"
            />
          }
          subHeaderText={otherSubHeaderText}
          textBackgroundColor="brand.primary"
          textColor="ui.white"
          variant="tertiary"
        />
      </div>
      <div>
        <Hero
          backgroundImageSrc={getPlaceholderImage()}
          heading={
            <Heading
              level="h1"
              id="campaign-hero-default-heading"
              text="Hero Campaign"
              mb="s"
            />
          }
          imageProps={{
            alt: "",
            src: "https://iiif.nypl.org/iiif/2/5164274/full/!900,900/0/default.jpg",
          }}
          subHeaderText={otherSubHeaderText}
          textBackgroundColor="brand.primary"
          textColor="ui.white"
          variant="campaign"
        />
      </div>
    </Stack>
  ),
};
export const TextColorStyles: Story = {
  render: () => (
    <Stack spacing="l">
      <div>
        <Heading
          id="campaign-hero-default"
          mb="s"
          size="heading6"
          text="Default Colors"
        />
        <Hero
          backgroundImageSrc="https://images.nypl.org/index.php?id=swope_244712&t=w"
          heading={
            <Heading
              level="h1"
              mb="s"
              id="campaign-hero-default-heading"
              text="Hero Campaign"
            />
          }
          imageProps={imageProps}
          isDarkBackgroundImage
          subHeaderText={otherSubHeaderText}
          variant="campaign"
        />
      </div>
      <div>
        <Heading
          id="campaign-hero-default"
          mb="s"
          size="heading6"
          text="Custom Background and Text Colors"
        />
        <Hero
          backgroundImageSrc="https://images.nypl.org/index.php?id=swope_244712&t=w"
          heading={
            <Heading
              level="h1"
              mb="s"
              id="campaign-hero-default-heading"
              text="Hero Campaign"
            />
          }
          imageProps={imageProps}
          isDarkBackgroundImage
          subHeaderText={otherSubHeaderText}
          textBackgroundColor="ui.status.primary"
          textColor="ui.error.secondary"
          variant="campaign"
        />
      </div>
      <div>
        <Heading
          id="campaign-hero-long-text"
          mb="s"
          size="heading6"
          text='Custom Background Color and Default "dark" Text'
        />
        <Hero
          backgroundImageSrc="https://images.nypl.org/index.php?id=swope_244712&t=w"
          heading={
            <Heading
              level="h1"
              id="campaign-hero-long-text-heading"
              mb="s"
              text="Hero Campaign"
            />
          }
          imageProps={imageProps}
          isDarkBackgroundImage
          isDarkText
          subHeaderText={otherSubHeaderTextLong}
          textBackgroundColor="ui.status.primary"
          variant="campaign"
        />
      </div>
    </Stack>
  ),
};
const CampaignFallBackExample = () => {
  const [imageSrc, setImageSrc] = useState("foobar.jpg");
  const fallbackImageSrc =
    "https://iiif.nypl.org/iiif/2/105224/full/!900,900/0/default.jpg";

  return (
    <Stack spacing="0">
      <Heading
        id="campaign-hero-default"
        mb="s"
        size="heading6"
        text="Campaign Hero with fallback image"
      />
      <Hero
        backgroundImageSrc={imageSrc}
        variant="campaign"
        heading={
          <Heading
            level="h1"
            id="campaign-fallback-image"
            mb="s"
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
