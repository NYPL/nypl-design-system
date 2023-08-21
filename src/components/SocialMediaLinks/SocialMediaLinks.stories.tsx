import type { Meta, StoryObj } from "@storybook/react";
import SocialMediaLinks, {
    borderTypeArray,
    colorTypeArray,
    sizeTypeArray,
} from "./SocialMediaLinks";
import { withDesign } from "storybook-addon-designs";
import {layoutTypesArray} from "../../helpers/types";

const meta: Meta<typeof SocialMediaLinks> = {
  title: "Components/Navigation/SocialMediaLinks",
  component: SocialMediaLinks,
  decorators: [withDesign],
  argTypes: {
      borders: {
          control: { type: "radio" },
          options: borderTypeArray,
          table: { defaultValue: { summary: "none" } },
      },
      color: {
          control: { type: "radio" },
          options: colorTypeArray,
          table: { defaultValue: { summary: "textDefault" } },
      },
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
};

export default meta;
type Story = StoryObj<typeof SocialMediaLinks>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: () => <SocialMediaLinks />,
};

export const WithTypes: Story = {
    render: () => (
        <SocialMediaLinks
            linksData={[
                { type: "facebook" },
                { type: "instagram" },
            ]}
        />
    ),
};

export const WithOverrides: Story = {
    render: () => (
        <SocialMediaLinks
            showLabels={true}
            linksData={[
                { type: "facebook" },
                { type: "twitter", url: "twitter.com/elsewhere", labelText: "Alt Twitter" },
                { type: "instagram" },
            ]}
            size={"medium"}
            color={"link"}
            borders={"straight"}
            layout={"row"}
        />
    ),
};
