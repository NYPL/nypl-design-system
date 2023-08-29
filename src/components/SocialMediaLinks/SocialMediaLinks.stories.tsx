import type { Meta, StoryObj } from "@storybook/react";
import SocialMediaLinks, {
  borderTypeArray,
  colorTypeArray,
  sizeTypeArray,
} from "./SocialMediaLinks";
import { withDesign } from "storybook-addon-designs";
import { layoutTypesArray } from "../../helpers/types";

const meta: Meta<typeof SocialMediaLinks> = {
  title: "Components/Navigation/SocialMediaLinks",
  component: SocialMediaLinks,
  decorators: [withDesign],
};

export default meta;
type Story = StoryObj<typeof SocialMediaLinks>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {
  argTypes: {
    borders: {
      table: { disable: true },
    },
    className: { table: { disable: true } },
    color: {
      table: { disable: true },
    },
    id: { table: { disable: true } },
    layout: {
      table: { disable: true },
    },
    linksData: { table: { disable: true } },
    showLabels: { table: { disable: true } },
    size: {
      table: { disable: true },
    },
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Main?node-id=77103-126004&t=Yx1GyAfBJyhuGIGs-4",
    },
    jest: ["SocialMediaLinks.test.tsx"],
  },
};

export const WithControls: Story = {
  args: {
    borders: "none",
    color: "textDefault",
    className: undefined,
    id: undefined,
    layout: "row",
    linksData: [
      { type: "facebook" },
      {
        type: "twitter",
        url: "twitter.com/elsewhere",
        labelText: "Alt Twitter",
      },
      {
        type: "instagram",
      },
    ],
    showLabels: true,
    size: "small",
  },
  argTypes: {
    borders: {
      control: { type: "radio" },
      options: borderTypeArray,
      table: { defaultValue: { summary: "none" } },
    },
    className: { control: false },
    color: {
      control: { type: "radio" },
      options: colorTypeArray,
      table: { defaultValue: { summary: "textDefault" } },
    },
    id: { control: false },
    layout: {
      control: { type: "radio" },
      options: layoutTypesArray,
      table: { defaultValue: { summary: "row" } },
    },
    showLabels: { table: { defaultValue: { summary: false } } },
    size: {
      control: { type: "radio" },
      options: sizeTypeArray,
      table: { defaultValue: { summary: "small" } },
    },
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Main?node-id=77103-126004&t=Yx1GyAfBJyhuGIGs-4",
    },
    jest: ["SocialMediaLinks.test.tsx"],
  },
};
