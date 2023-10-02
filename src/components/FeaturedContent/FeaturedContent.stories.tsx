import type { Meta, StoryObj } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";
import Button from "../Button/Button";
import Heading from "../Heading/Heading";
import Text from "../Text/Text";

import FeaturedContent from "./FeaturedContent";

const meta: Meta<typeof FeaturedContent> = {
  title: "Components/Basic Elements/FeaturedContent",
  component: FeaturedContent,
  decorators: [withDesign],
  argTypes: {
    className: { control: false },
    id: { control: false },
    fullLayout: {
      table: { defaultValue: { summary: false } },
    },
    imageProps: { disable: false },
    "imageProps.alt": {
      control: { type: "text" },
      table: { defaultValue: { summary: "" } },
    },
    "imageProps.width": {
      control: { type: "text" },
      table: { defaultValue: { summary: "oneHalf" } },
    },
    "imageProps.position": {
      control: { type: "text" },
      table: { defaultValue: { summary: "end" } },
    },
    "imageProps.src": {
      table: { defaultValue: { summary: "" } },
    },
  },
};

export default meta;
type Story = StoryObj<typeof FeaturedContent>;

/**
 * Main Story for the FeaturedContent component. This must contain the `args`
 * and `parameters` properties in this object.
 */

export const WithControls: Story = {
  args: {
    className: undefined,
    id: "FeaturedContent-id",
    fullLayout: false,
    //textContent: (
    // <div>
    //   <Button id="test" />
    //   <p>
    //     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    //     eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
    //     minim veniam, quis nostrud exercitation ullamco laboris nisi ut
    //     aliquip ex ea commodo consequat. Duis aute irure dolor in
    //     reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
    //     pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
    //     do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
    //     ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
    //     aliquip ex ea commodo consequat. Duis aute irure dolor in
    //     reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
    //     pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
    //     do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
    //     ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
    //     aliquip ex ea commodo consequat. Duis aute irure dolor in
    //     reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
    //     pariatur.
    //   </p>
    // </div>
    //),
    "imageProps.alt": "Alt text",
    "imageProps.position": "end",
    "imageProps.width": "default",
    "imageProps.src": "//placekitten.com/600/600",
  },
  render: (args) => (
    <FeaturedContent
      className={args.className}
      id={args.id}
      fullLayout={args.fullLayout}
      textContent={
        <div>
          <br />
          <Text size="overline1"> Featured </Text>
          <Heading level="h1"> Spotlight on the Public Domain </Heading>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam
          </p>
          <Button id="test"> Discover more </Button>
        </div>
      }
      imageProps={{
        alt: args["imageProps.alt"],
        width: args["imageProps.width"],
        position: args["imageProps.position"],
        src: args["imageProps.src"],
      }}
    ></FeaturedContent>
  ),
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Main?type=design&node-id=80613-80958&mode=design&t=HerPVZJXMF8fVMUb-0",
    },
    jest: ["FeaturedContent.test.tsx"],
  },
};
