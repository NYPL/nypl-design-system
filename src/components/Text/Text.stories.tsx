import type { Meta, StoryObj } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";

import Text, { textSizesArray } from "./Text";
import Heading from "../Heading/Heading";
import Image from "../Image/Image";
import { Box } from "@chakra-ui/react";

const meta: Meta<typeof Text> = {
  title: "Components/Typography & Styles/Text",
  component: Text,
  decorators: [withDesign],
  argTypes: {
    className: { control: false },
    isBold: { table: { defaultValue: { summary: false } } },
    isItalic: { table: { defaultValue: { summary: false } } },
    isCapitalized: { table: { defaultValue: { summary: false } } },
    isUppercase: { table: { defaultValue: { summary: false } } },
    isLowercase: { table: { defaultValue: { summary: false } } },
    noSpace: { table: { defaultValue: { summary: false } } },
    size: {
      control: {
        type: "select",
      },
      options: textSizesArray,
      table: { defaultValue: { summary: "default" } },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Text>;

/**
 * Main Story for the Text component. This must contains the `args`
 * and `parameters` properties in this object.
 */
export const WithControls: Story = {
  args: {
    className: undefined,
    size: "default",
    isBold: false,
    isItalic: false,
    isCapitalized: false,
    isUppercase: false,
    isLowercase: false,
    noSpace: false,
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Main?type=design&node-id=10975-52&t=AEGDRpspvTyuSWSA-4",
    },
    jest: "Text.test.tsx",
  },
  render: (args) => (
    <>
      <Text {...args}>
        Animal Crossing[a] is a social simulation video game series developed
        and published by Nintendo. The series was conceptualized and created by
        Katsuya Eguchi and Hisashi Nogami. In Animal Crossing, the player
        character is a human who lives in a village inhabited by various
        anthropomorphic animals and can do various activities like fishing, bug
        catching, and fossil hunting. The series is notable for its open-ended
        gameplay and use of the video game console's internal clock and calendar
        to simulate real passage of time.
      </Text>
      <Text {...args}>
        Since its initial release in 2001, five Animal Crossing games have been
        released worldwide, one each for the Nintendo 64/iQue Player (enhanced
        and reissued for the GameCube), Nintendo DS, Wii, Nintendo 3DS and
        Nintendo Switch. The series has been both critically and commercially
        successful and has sold over 60 million units worldwide. Three spin-off
        games have also been released: Animal Crossing: Happy Home Designer for
        Nintendo 3DS, Animal Crossing: Amiibo Festival for Wii U, and Animal
        Crossing: Pocket Camp for mobile devices.
      </Text>
    </>
  ),
};

// The following are additional Heading example Stories.
export const SizeStyles: Story = {
  render: () => (
    <>
      <Text size="subtitle1">Subtitle 1</Text>
      <Text size="subtitle2">Subtitle 2</Text>
      <Text size="overline1">Overline 1</Text>
      <Text size="overline2">Overline 2</Text>
      <Text size="default">Default text</Text>
      <Text size="caption">Caption text</Text>
      <Text size="tag">Tag text</Text>
      <Text size="mini">Mini text (deprecated)</Text>
    </>
  ),
};
export const DefaultExample: Story = {
  render: () => (
    <>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
        commodo cursus magna, vel scelerisque nisl consectetur et. Donec id elit
        non mi porta gravida at eget metus. Aenean lacinia bibendum nulla sed
        consectetur. Vestibulum id ligula porta felis euismod semper. Cras justo
        odio, dapibus ac facilisis in, egestas eget quam.
      </Text>
    </>
  ),
};
export const CaptionExample: Story = {
  render: () => (
    <>
      <Box width="fit-content">
        <Image src="//placekitten.com/400/400" size="medium" />
        <Text size="caption">This is a kitten</Text>
      </Box>
    </>
  ),
};
export const TagExample: Story = {
  render: () => (
    <>
      <Text size="tag">Tag text</Text>
    </>
  ),
};
export const MiniExample: Story = {
  render: () => (
    <>
      <Text size="mini">Mini text</Text>
    </>
  ),
};
export const Overline1Example: Story = {
  render: () => (
    <>
      <Text size="overline1" noSpace>
        Category
      </Text>
      <Heading size="heading2">Lorem ipsum dolor</Heading>
    </>
  ),
};
export const Overline2Example: Story = {
  render: () => (
    <>
      <Text size="overline2" noSpace>
        Category
      </Text>
      <Heading size="heading5">Lorem ipsum dolor</Heading>
    </>
  ),
};
export const Subtitle1Example: Story = {
  render: () => (
    <>
      <Heading size="heading2">Lorem ipsum dolor</Heading>
      <Text size="subtitle1" noSpace>
        Nullam id dolor id nibh ultricies vehicula ut id elit.
      </Text>
    </>
  ),
};
export const Subtitle2Example: Story = {
  render: () => (
    <>
      <Heading size="heading5">Lorem ipsum dolor</Heading>
      <Text size="subtitle2" noSpace>
        Nullam id dolor id nibh ultricies vehicula ut id elit.
      </Text>
    </>
  ),
};
