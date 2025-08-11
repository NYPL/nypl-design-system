import { VStack } from "@chakra-ui/react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { createRef, useState } from "react";

import Button from "../Button/Button";
import Form, { FormField } from "../Form/Form";
import Select, { labelPositionsArray, selectVariantsArray } from "./Select";
import { argsBooleanType } from "../../helpers/storybookUtils";
import { expect, userEvent, within } from "storybook/test";

const meta: Meta<typeof Select> = {
  title: "Components/Form Elements/Select",
  component: Select,
  argTypes: {
    defaultValue: { control: false },
    helperText: { control: "text" },
    invalidText: { control: "text" },
    isDisabled: argsBooleanType(),
    isInvalid: argsBooleanType(),
    isRequired: argsBooleanType(),
    labelPosition: {
      controls: { type: "select" },
      options: labelPositionsArray,
      table: { defaultValue: { summary: "default" } },
      control: { type: "radio" },
    },
    name: { control: false },
    onChange: { control: false },
    placeholder: { control: "text" },
    ref: { table: { disable: true } },
    variant: {
      control: false,
      options: selectVariantsArray,
      table: { defaultValue: { summary: "default" } },
    },
    showHelperInvalidText: argsBooleanType("true"),
    showLabel: argsBooleanType("true"),
    showRequiredLabel: argsBooleanType("true"),
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
    defaultValue: undefined,
    helperText: "This is the helper text.",
    invalidText: "This is the error text :(",
    isDisabled: false,
    isInvalid: false,
    isRequired: false,
    labelPosition: "default",
    labelText: "What is your favorite color?",
    name: "color",
    onChange: undefined,
    placeholder: undefined,
    showHelperInvalidText: undefined,
    showLabel: true,
    showRequiredLabel: true,
    variant: "default",
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
  play: async ({ canvasElement }) => {
    const screen = within(canvasElement);
    const select = screen.getByRole("combobox");

    await userEvent.selectOptions(select, "green");
    expect(
      (screen.getByText("Green") as HTMLOptionElement).selected
    ).toBeTruthy();

    await userEvent.selectOptions(select, "black");
    expect(
      (screen.getByText("Black") as HTMLOptionElement).selected
    ).toBeTruthy();
    expect(
      (screen.getByText("Green") as HTMLOptionElement).selected
    ).toBeFalsy();
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
        helperText="Display the required text"
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
        helperText="Do not display the required text"
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
        helperText="Display a custom required text"
        id="label-example4"
        isRequired
        labelText="What is your favorite color?"
        name="color"
        requiredLabelText="* custom required label"
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

export const AutoComplete: Story = {
  render: () => (
    <Select
      autoComplete="country-name"
      id="autocomplete"
      labelText="Select a country"
      name="country"
    >
      <option value="algeria">Algeria</option>
      <option value="argentina">Argentina</option>
      <option value="australia">Australia</option>
      <option value="brazil">Brazil</option>
      <option value="canada">Canada</option>
      <option value="china">China</option>
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
          defaultValue="white"
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
