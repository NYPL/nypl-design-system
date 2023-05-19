import type { Meta, StoryObj } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";

import Button from "../Button/Button";
import SkipNavigation from "./SkipNavigation";

const meta: Meta<typeof SkipNavigation> = {
  title: "Components/Navigation/SkipNavigation",
  component: SkipNavigation,
  decorators: [withDesign],
  argTypes: {
    className: { control: false },
    id: { control: false },
    target: { control: false },
  },
};

export default meta;
type Story = StoryObj<typeof SkipNavigation>;

/**
 * Main Story for the SkipNavigation component. This must contains the `args`
 * and `parameters` properties in this object.
 */
export const Controls: Story = {
  args: {
    className: undefined,
    id: "skip-nav",
    target: "#mainContent",
  },
  render: (args) => (
    <>
      <Button id="example-btn">Focus on me and then press "tab"</Button>
      <SkipNavigation {...args} />
    </>
  ),
  parameters: {
    jest: ["SkipNavigation.test.tsx"],
  },
};
