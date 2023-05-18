import { VStack } from "@chakra-ui/react";
import type { Meta, StoryObj } from "@storybook/react";
import { createRef, useState } from "react";
import { withDesign } from "storybook-addon-designs";

import Button from "../Button/Button";
import Form, { FormField } from "../Form/Form";
import Select, { labelPositionsArray } from "./Select";

const meta: Meta<typeof Select> = {
  title: "Components/Form Elements/Select",
  component: Select,
  decorators: [withDesign],
  argTypes: {
    children: { table: { disable: true } },
    id: { control: false },
    isDisabled: {
      table: { defaultValue: { summary: false } },
    },
    isInvalid: {
      table: { defaultValue: { summary: false } },
    },
    isRequired: {
      table: { defaultValue: { summary: false } },
    },
    labelPosition: {
      controls: { type: "select" },
      options: labelPositionsArray,
      table: { defaultValue: { summary: "default" } },
    },
    name: { control: false },
    key: { table: { disable: true } },
    onChange: { control: false },
    ref: { table: { disable: true } },
    showHelperInvalidText: {
      table: { defaultValue: { summary: true } },
    },
    showLabel: {
      table: { defaultValue: { summary: true } },
    },
    showRequiredLabel: {
      table: { defaultValue: { summary: true } },
    },
    selectType: {
      control: false,
      table: { defaultValue: { summary: "default" } },
    },
    value: { control: false },
  },
};

export default meta;
type Story = StoryObj<typeof Select>;

/**
 * Main Story for the Select component. This must contains the `args`
 * and `parameters` properties in this object.
 */
export const WithControls: Story = {
  args: {
    className: undefined,
    helperText: "This is the helper text.",
    id: "select-id",
    invalidText: "This is the error text :(",
    isDisabled: false,
    isInvalid: false,
    isRequired: false,
    labelPosition: "default",
    labelText: "What is your favorite color?",
    name: "color",
    onChange: undefined,
    showHelperInvalidText: undefined,
    showLabel: true,
    showRequiredLabel: true,
    selectType: "default",
    value: undefined,
  },
  render: (args) => (
    <Select {...args}>
      <option value="red">Red</option>
      <option value="green">Green</option>
      <option value="blue">Blue</option>
      <option value="black">Black</option>
      <option value="white">White</option>
    </Select>
  ),
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Master?node-id=11895%3A549",
    },
    jest: ["Select.test.tsx"],
  },
};

// The following are additional Select example Stories.
export const LabellingVariations: Story = {
  render: () => (
    <VStack align="stretch" spacing={8}>
      <Select
        helperText="Display the label"
        id="label-example1"
        labelText="What is your favorite color?"
        name="color"
      >
        <option value="red">Red</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
        <option value="black">Black</option>
        <option value="white">White</option>
      </Select>
      <Select
        helperText="Do not display the label"
        id="label-example2"
        labelText="What is your favorite color?"
        name="color"
        showLabel={false}
      >
        <option value="red">Red</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
        <option value="black">Black</option>
        <option value="white">White</option>
      </Select>
      <Select
        helperText="Display the Required text"
        id="label-example3"
        isRequired
        labelText="What is your favorite color?"
        name="color"
      >
        <option value="red">Red</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
        <option value="black">Black</option>
        <option value="white">White</option>
      </Select>
      <Select
        helperText="Do not display the Required text"
        id="label-example4"
        isRequired
        labelText="What is your favorite color?"
        name="color"
        showRequiredLabel={false}
      >
        <option value="red">Red</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
        <option value="black">Black</option>
        <option value="white">White</option>
      </Select>
      <Select
        helperText="Display the label inline"
        id="label-example5"
        isRequired
        labelText="What is your favorite color?"
        name="color"
        labelPosition="inline"
      >
        <option value="red">Red</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
        <option value="black">Black</option>
        <option value="white">White</option>
      </Select>
    </VStack>
  ),
};

export const Errored: Story = {
  render: () => (
    <Select
      helperText="This is the helper text."
      id="errored"
      invalidText="This is the error text :("
      isInvalid
      labelText="What is your favorite color?"
      name="color"
    >
      <option value="red">Red</option>
      <option value="green">Green</option>
      <option value="blue">Blue</option>
      <option value="black">Black</option>
      <option value="white">White</option>
    </Select>
  ),
};

export const Disabled: Story = {
  render: () => (
    <Select
      helperText="This is the helper text."
      id="disabled"
      invalidText="This is the error text :("
      isDisabled
      labelText="What is your favorite color?"
      name="color"
    >
      <option value="red">Red</option>
      <option value="green">Green</option>
      <option value="blue">Blue</option>
      <option value="black">Black</option>
      <option value="white">White</option>
    </Select>
  ),
};

function SelectControlledExample() {
  const [value, setValue] = useState();
  const onChange = (e) => {
    // This will return the value selected through the event object.
    console.log("Controlled value:", e.target.value);
    setValue(e.target.value);
  };

  return (
    <Select
      helperText="This is the helper text."
      id="example-1"
      labelText="What is your favorite color?"
      name="color"
      onChange={onChange}
      value={value}
    >
      <option value="red">Red</option>
      <option value="green">Green</option>
      <option value="blue">Blue</option>
      <option value="black">Black</option>
      <option value="white">White</option>
    </Select>
  );
}
export const GetInputValue: Story = {
  render: () => <SelectControlledExample />,
};

function SelectUncontrolledExample() {
  const selectRef: any = createRef();
  const onSubmit = () => {
    const selectValue = selectRef.current.value;
    console.log("Using uncontrolled ref:", selectValue);
  };

  return (
    <Form id="form">
      <FormField>
        <Select
          helperText="This is the helper text."
          id="example-2"
          labelText="What is your favorite color?"
          name="color"
          ref={selectRef}
        >
          <option value="red">Red</option>
          <option value="green">Green</option>
          <option value="blue">Blue</option>
          <option value="black">Black</option>
          <option value="white">White</option>
        </Select>
        <Button id="submit" onClick={onSubmit}>
          Submit
        </Button>
      </FormField>
    </Form>
  );
}

export const GetUncontrolledInputValue: Story = {
  render: () => <SelectUncontrolledExample />,
};
