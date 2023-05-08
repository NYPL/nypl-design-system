import { VStack } from "@chakra-ui/react";
import type { Meta, StoryObj } from "@storybook/react";

import Label from "./Label";

const meta: Meta<typeof Label> = {
  title: "Components/Form Elements/Label",
  component: Label,
  argTypes: {
    className: { control: false },
    id: { control: false },
    isInlined: { table: { disable: true } },
    text: {
      description: "Only used for Storybook",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Label>;

/**
 * Main Story for the Label component. This must contains the `args`
 * and `parameters` properties in this object.
 */
export const WithControls: Story = {
  args: {
    className: undefined,
    htmlFor: "id-of-input-element",
    id: "label-id",
    isRequired: false,
    text: "A label for a villager.",
  },
  render: (args) => <Label {...args}>{args.text}</Label>,
  parameters: {
    jest: "Label.test.tsx",
  },
};

// The following are additional Accordion example Stories.
export const RequiredState: Story = {
  render: () => (
    <VStack>
      <Label htmlFor="label-id1" id="regular">
        A regular label
      </Label>
      <Label htmlFor="label-id2" id="required" isRequired>
        A label that is required
      </Label>
    </VStack>
  ),
};

export const CustomRequiredText: Story = {
  render: () => (
    <VStack>
      <Label htmlFor="label-id1" id="regular" isRequired>
        A regular isRequired label
      </Label>
      <Label
        htmlFor="label-id2"
        id="required"
        isRequired
        requiredLabelText="Obligatoire"
      >
        A label that has a customized required label
      </Label>
    </VStack>
  ),
};
