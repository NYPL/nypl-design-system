import { VStack } from "@chakra-ui/react";
import type { Meta, StoryObj } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";
import Icon from "../Icons/Icon";

import StatusBadge, { statusBadgeTypeArray } from "./StatusBadge";

const meta: Meta<typeof StatusBadge> = {
  title: "Components/Content Display/StatusBadge",
  component: StatusBadge,
  decorators: [withDesign],
  argTypes: {
    className: { control: false },
    id: { control: false },
    level: {
      table: { defaultValue: { summary: "low" } },
      control: { type: "select" },
      options: statusBadgeTypeArray,
    },
  },
};

export default meta;
type Story = StoryObj<typeof StatusBadge>;

/**
 * Main Story for the StatusBadge component. This must contains the `args`
 *  and `parameters` properties in this object.
 */
export const WithControls: Story = {
  args: {
    className: undefined,
    id: "statusBadge-id",
    level: "low",
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Main?node-id=11256%3A0",
    },
    jest: "StatusBadge.test.tsx",
  },
  render: ({ ...args }) => {
    return <StatusBadge {...args}>Registration Required</StatusBadge>;
  },
};

// The following are additional StatusBadge example Stories.
export const HigherBarrier: Story = {
  render: () => (
    <VStack spacing="s" align="stretch">
      <StatusBadge level="high">On-Site Access Only</StatusBadge>
      <StatusBadge level="medium">Cancelled</StatusBadge>
    </VStack>
  ),
};

export const LowerBarrier: Story = {
  render: () => (
    <VStack spacing="s" align="stretch">
      <StatusBadge level="low">Library Card Required</StatusBadge>
      <StatusBadge level="low">Registration Required</StatusBadge>
    </VStack>
  ),
};

export const Icons: Story = {
  render: () => (
    <VStack spacing="s" align="stretch">
      <StatusBadge level="high">
        <Icon color="brand.primary" mr="xs" name="errorFilled" size="medium" />
        On-Site Access Only
      </StatusBadge>
      <StatusBadge level="low">
        Registration Required
        <Icon
          color="ui.black"
          ml="xs"
          name="actionIdentityFilled"
          size="medium"
        />
      </StatusBadge>
    </VStack>
  ),
};
