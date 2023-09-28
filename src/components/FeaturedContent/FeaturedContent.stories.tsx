import { action } from "@storybook/addon-actions";
import type { Meta, StoryObj } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";

import FeaturedContent from "./FeaturedContent";

const meta: Meta<typeof FeaturedContent> = {
  title: "Components/Page Layout/FeaturedContent",
  component: FeaturedContent,
  decorators: [withDesign],
  argTypes: {
    className: { control: false },
    id: { control: false },
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
 * Main Story for the FeaturedContent component. This must contains the `args`
 * and `parameters` properties in this object.
 */

export const WithControls: Story = {
  args: {
    className: undefined,
    id: "FeaturedContent-id",
    textContent: (
      <div>
        <h1>Lorem ipsum dolor sit amet </h1>
        <p>
          tempor incididunt ut labore et dolore magna aliqua. Pellentesque massa
        </p>
      </div>
    ),
    "imageProps.alt": "Alt text",
    "imageProps.position": "end",
    "imageProps.width": "default",
    "imageProps.src": "//placekitten.com/200/200",
  },
  render: (args) => (
    <FeaturedContent
      className={args.className}
      id={args.id}
      textContent={args.textContent}
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
