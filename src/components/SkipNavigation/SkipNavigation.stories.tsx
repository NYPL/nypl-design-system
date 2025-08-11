import type { Meta, StoryObj } from "@storybook/react-vite";

import Button from "../Button/Button";
import SkipNavigation from "./SkipNavigation";

const meta: Meta<typeof SkipNavigation> = {
  title: "Components/Navigation/SkipNavigation",
  component: SkipNavigation,
  argTypes: {
    target: { control: false },
  },
};

export default meta;
type Story = StoryObj<typeof SkipNavigation>;

/**
 * Main Story for the SkipNavigation component. This must contains the `args`
 * and `parameters` properties in this object.
 */
export const WithControls: Story = {
  args: {
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
