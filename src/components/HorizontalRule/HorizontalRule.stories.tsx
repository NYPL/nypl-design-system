import type { Meta, StoryObj } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";

import HorizontalRule from "./HorizontalRule";

const meta: Meta<typeof HorizontalRule> = {
  title: "Components/Page Layout/HorizontalRule",
  component: HorizontalRule,
  decorators: [withDesign],
  argTypes: {
    className: { control: false },
  },
};

export default meta;
type Story = StoryObj<typeof HorizontalRule>;

/**
 * Main Story for the HorizontalRule component. This must contains the `args`
 *  and `parameters` properties in this object.
 */
export const WithControls: Story = {
  args: { align: undefined, className: undefined },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Main?node-id=36818-25303&t=R7gWIzMTzUAGN7Sw-4",
    },
    jest: "HorizontalRule.test.tsx",
  },
};
