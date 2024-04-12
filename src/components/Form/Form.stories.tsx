import { Flex, Spacer } from "@chakra-ui/react";
import type { Meta, StoryObj } from "@storybook/react";

import Button from "../Button/Button";
import ButtonGroup from "../ButtonGroup/ButtonGroup";
import Checkbox from "../Checkbox/Checkbox";
import CheckboxGroup from "../CheckboxGroup/CheckboxGroup";
import DatePicker from "../DatePicker/DatePicker";
import Form, { FormRow, FormField } from "./Form";
import { gridGapsArray } from "../Grid/SimpleGrid";
import Heading from "../Heading/Heading";
import HorizontalRule from "../HorizontalRule/HorizontalRule";
import Radio from "../Radio/Radio";
import RadioGroup from "../RadioGroup/RadioGroup";
import Select from "../Select/Select";
import TextInput from "../TextInput/TextInput";

const meta: Meta<typeof Form> = {
  title: "Components/Form Elements/Form",
  component: Form,
  argTypes: {
    action: { control: false },
    id: { control: false },
    method: {
      control: { type: "radio" },
      options: ["get", "post"],
    },
    gap: {
      control: { type: "select" },
      table: { defaultValue: { summary: "grid.l" } },
      options: gridGapsArray,
    },
  },
};

export default meta;
type Story = StoryObj<typeof Form>;

/**
 * Main Story for the Form component. This must contains the `args`
 * and `parameters` properties in this object.
 */
export const WithControls: Story = {
  args: {
    action: "/end/point",
    className: undefined,
    id: "form-id",
    method: "get",
    gap: "grid.l",
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Main?type=design&node-id=10734-2768",
    },
    jest: "Form.test.tsx",
  },
  render: (args) => (
    <Form {...args} id="form-id">
      <FormRow>
        <FormField>
          <TextInput
            helperText="Make sure to complete this field."
            id="first-name"
            isRequired
            labelText="First Name"
          />
        </FormField>
        <FormField>
          <TextInput
            helperText="Make sure to complete this field."
            id="last-name"
            isRequired
            labelText="Last Name"
          />
        </FormField>
        <FormField>
          <DatePicker
            dateType="full"
            dateFormat="yyyy-MM-dd"
            helperTextFrom="From this date."
            helperTextTo="To this date."
            helperText="Select a valid date range."
            id="date-range"
            invalidText="Please select a valid date range."
            isDateRange
            labelText="Select the date range you want to visit NYPL"
            minDate="1/1/2021"
            maxDate="1/1/2022"
            nameFrom="visit-dates"
            showLabel={false}
          />
        </FormField>
      </FormRow>
      <FormField>
        <TextInput
          helperText="Make sure to complete this field."
          id="username"
          isRequired
          labelText="Username"
        />
      </FormField>
      <FormField>
        <TextInput
          helperText="Make sure to complete this field."
          id="password"
          isRequired
          labelText="Password"
        />
      </FormField>
      <FormRow>
        <FormField>
          <TextInput
            helperText="This one is up to you."
            id="phone"
            labelText="Phone Field"
            type="tel"
          />
        </FormField>
        <FormField>
          <TextInput
            helperText="This one is up to you."
            id="url"
            labelText="URL Field"
            type="url"
          />
        </FormField>
        <FormField>
          <TextInput
            helperText="This one is up to you."
            id="age"
            labelText="Age"
            type="number"
          />
        </FormField>
      </FormRow>
      <FormRow>
        <FormField>
          <CheckboxGroup
            id="checkbox-group"
            isFullWidth
            labelText="Checkbox Group"
            name="checkbox-example"
          >
            <Checkbox
              id="arts"
              labelText={
                <Flex>
                  <span>Arts</span>
                  <Spacer />
                  <span>4</span>
                </Flex>
              }
              value="arts"
            />
            <Checkbox
              id="english"
              labelText={
                <Flex>
                  <span>English</span>
                  <Spacer />
                  <span>23</span>
                </Flex>
              }
              value="English"
            />
            <Checkbox
              id="science"
              labelText={
                <Flex>
                  <span>Science</span>
                  <Spacer />
                  <span>10</span>
                </Flex>
              }
              value="Science"
            />
            <Checkbox
              id="math"
              labelText={
                <Flex>
                  <span>Math</span>
                  <Spacer />
                  <span>3</span>
                </Flex>
              }
              value="Math"
            />
          </CheckboxGroup>
        </FormField>
        <FormField>
          <RadioGroup id="radio-group" labelText="Radio Group" name="rg1">
            <Radio id="radio1" labelText="Radio 1" value="radio1" />
            <Radio id="radio2" labelText="Radio 2" value="radio2" />
            <Radio id="radio3" labelText="Radio 3" value="radio3" />
            <Radio id="radio4" labelText="Radio 4" value="radio4" />
          </RadioGroup>
        </FormField>
        <FormField>
          <Select
            helperText="The select field helper text."
            id="select"
            labelText="Select Field"
            name="select"
            showLabel={true}
          >
            <option>Option 1</option>
            <option>Option 2</option>
            <option>Option 3</option>
            <option>Option 4</option>
            <option>Option 5</option>
          </Select>
        </FormField>
      </FormRow>
      <FormRow>
        <FormField>
          <ButtonGroup>
            <Button id="submit">Submit</Button>
          </ButtonGroup>
        </FormField>
      </FormRow>
    </Form>
  ),
};

// The following functions are used in the remaining Form example stories
const formRow = (gapValue) => {
  const labelText = `Size: ${gapValue}`;
  return (
    <li key={gapValue}>
      <Heading level="h3" size="heading6">
        {labelText}
      </Heading>
      <Form gap={gapValue} id={`form-spacing-${gapValue}`}>
        <FormRow>
          <FormField>
            <Select
              helperText="The select field helper text."
              id={`select-spacing-${gapValue}-1`}
              labelText="Select Field"
              name={`select-spacing-${gapValue}-1`}
              showLabel={true}
            >
              <option>Option 1</option>
              <option>Option 2</option>
              <option>Option 3</option>
              <option>Option 4</option>
            </Select>
          </FormField>
          <FormField>
            <Select
              helperText="The select field helper text."
              id={`select-spacing-${gapValue}-2`}
              labelText="Select Field"
              name={`select-spacing-${gapValue}-2`}
              showLabel={true}
            >
              <option>Option 1</option>
              <option>Option 2</option>
              <option>Option 3</option>
              <option>Option 4</option>
            </Select>
          </FormField>
          <FormField>
            <Select
              helperText="The select field helper text."
              id={`select-spacing-${gapValue}-3`}
              labelText="Select Field"
              name={`select-spacing-${gapValue}-3`}
              showLabel={true}
            >
              <option>Option 1</option>
              <option>Option 2</option>
              <option>Option 3</option>
              <option>Option 4</option>
            </Select>
          </FormField>
        </FormRow>
      </Form>
      <HorizontalRule />
    </li>
  );
};
const sizes = [];
const gapValues = gridGapsArray;
for (const gap in gapValues) {
  sizes.push(formRow(gapValues[gap]));
}
const getForms = (list) => <ul style={{ listStyle: "none" }}>{list}</ul>;

// The following are additional Form example Stories.
export const FormSpacing: Story = {
  render: () => getForms(sizes),
};
