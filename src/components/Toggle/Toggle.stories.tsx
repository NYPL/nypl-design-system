import { VStack } from "@chakra-ui/react";
import type { Meta, StoryObj } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";

import Heading from "../Heading/Heading";
import SimpleGrid from "../Grid/SimpleGrid";
import Toggle, { toggleSizesArray } from "./Toggle";

const meta: Meta<typeof Toggle> = {
  title: "Components/Form Elements/Toggle",
  component: Toggle,
  decorators: [withDesign],
  argTypes: {
    defaultChecked: { control: false },
    id: { control: false },
    key: { table: { disable: true } },
    name: { control: false },
    onChange: { control: false },
    ref: { table: { disable: true } },
    size: {
      control: { type: "radio" },
      options: toggleSizesArray,
      table: { defaultValue: { summary: "default" } },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Toggle>;

/**
 * Main Story for the Toggle component. This must contains the `args`
 * and `parameters` properties in this object.
 */
export const WithControls: Story = {
  args: {
    defaultChecked: false,
    helperText: "This is the helper text!",
    id: "toggle-1",
    invalidText: "",
    isChecked: undefined,
    isDisabled: false,
    isInvalid: false,
    isRequired: false,
    labelText: "Test Label",
    name: "toggle-1",
    onChange: undefined,
    size: "default",
  },
  render: (args) => <Toggle {...args} />,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Main?node-id=31581%3A302",
    },
    jest: ["Toggle.test.tsx"],
  },
};

// The following are additional Toggle example Stories.
export const Sizes: Story = {
  render: () => (
    <SimpleGrid columns={2}>
      <VStack align="left" spacing="s">
        <Heading level="h3" size="heading6">
          Default
        </Heading>
        <Toggle defaultChecked={true} id="default-checked" labelText="On" />
        <Toggle id="default" labelText="Off" />
      </VStack>
      <VStack align="left" spacing="s">
        <Heading level="h3" size="heading6">
          Small
        </Heading>
        <Toggle
          defaultChecked={true}
          id="small-checked"
          size="small"
          labelText="On"
        />
        <Toggle id="default-small" size="small" labelText="Off" />
      </VStack>
    </SimpleGrid>
  ),
};
export const ControlledToggle: Story = {
  render: () => (
    <Toggle
      id="toggle"
      isChecked={true}
      labelText="Controlled Toggle"
      onChange={(e) => {
        console.log(e.target.value);
      }}
    />
  ),
};

export const BrowserStates: Story = {
  render: () => (
    <SimpleGrid columns={3}>
      <VStack align="left" spacing="s">
        <Heading level="h3" size="heading6">
          Default
        </Heading>
        <Toggle defaultChecked={true} id="checked-default2" labelText="On" />
        <Toggle id="default2" labelText="Off" />
      </VStack>
      <VStack align="left" spacing="s">
        <Heading level="h3" size="heading6">
          Disabled
        </Heading>
        <Toggle
          defaultChecked={true}
          id="disabled-checked"
          isDisabled={true}
          labelText="On"
        />
        <Toggle id="disabled2" isDisabled={true} labelText="Off" />
      </VStack>
      <VStack align="left" spacing="s">
        <Heading level="h3" size="heading6">
          Error
        </Heading>
        <Toggle
          defaultChecked={true}
          id="error-default"
          isInvalid={true}
          labelText="On"
        />
        <Toggle id="error2" isInvalid={true} labelText="Off" />
      </VStack>
    </SimpleGrid>
  ),
};

export const Layouts: Story = {
  render: () => (
    <SimpleGrid columns={2}>
      <VStack align="left" spacing="s">
        <Heading level="h3" size="heading6">
          Grouped
        </Heading>
        <Toggle defaultChecked={true} id="layout1" labelText="On" />
        <Toggle defaultChecked={true} id="layout2" labelText="On" />
        <Toggle defaultChecked={true} id="layout3" labelText="On" />
        <Toggle defaultChecked={true} id="layout4" labelText="On" />
        <Toggle defaultChecked={true} id="layout5" labelText="On" />
      </VStack>
      <VStack align="left" spacing="s">
        <Heading level="h3" size="heading6">
          With Helper Text
        </Heading>
        <Toggle
          defaultChecked={true}
          helperText="Component Helper Text"
          id="helper-text"
          labelText="On"
        />
      </VStack>
    </SimpleGrid>
  ),
};
