import { Flex, Spacer } from "@chakra-ui/react";
import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";

import Button from "../Button/Button";
import ButtonGroup from "../ButtonGroup/ButtonGroup";
import Checkbox from "../Checkbox/Checkbox";
import CheckboxGroup from "../CheckboxGroup/CheckboxGroup";
import Form, { FormRow, FormField } from "./Form";
import { gridGapsArray } from "../Grid/SimpleGrid";
import Heading from "../Heading/Heading";
import HorizontalRule from "../HorizontalRule/HorizontalRule";
import MultiSelect from "../MultiSelect/MultiSelect";
import MultiSelectGroup from "../MultiSelectGroup/MultiSelectGroup";
import Radio from "../Radio/Radio";
import RadioGroup from "../RadioGroup/RadioGroup";
import Select from "../Select/Select";
import Text from "../Text/Text";
import TextInput from "../TextInput/TextInput";
import useMultiSelect from "../../hooks/useMultiSelect";

const FormExampleStory = (args) => {
  const { onChange, onMixedStateChange, onClear, selectedItems } =
    useMultiSelect();
  const multiSelectItems = [
    {
      id: "colors",
      name: "Colors",
      items: [
        { id: "red", name: "Red" },
        { id: "blue", name: "Blue" },
        { id: "yellow", name: "Yellow" },
      ],
    },
    {
      id: "pets",
      name: "Pets",
      items: [
        { id: "cat", name: "Cat" },
        {
          id: "dog",
          name: "Dog",
          children: [
            { id: "corgy", name: "Corgy" },
            { id: "german-sheperd", name: "German Sheperd" },
            { id: "afghan-hound", name: "Afghan Hound" },
          ],
        },
        { id: "rat", name: "Rat" },
      ],
    },
  ];
  return (
    <Form id="form-id" action="/end/point" method="get" {...args}>
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
          <TextInput
            helperText="This is an optional field."
            id="text-input-example"
            labelText="Text input"
          />
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
          <TextInput
            helperText="This is an optional field."
            id="text-input-alignment-example"
            labelText="Text input"
          />
        </FormField>
        <FormField>
          <MultiSelectGroup
            showLabel={true}
            id="row-full"
            layout="row"
            labelText="MultiSelect example"
            multiSelectWidth="full"
            renderMultiSelect={({ isBlockElement, multiSelectWidth }) => {
              return multiSelectItems.map((multiSelect) => (
                <MultiSelect
                  buttonText="MultiSelect"
                  defaultItemsVisible={5}
                  id={`${multiSelect.id}-3`}
                  isBlockElement={isBlockElement}
                  items={multiSelect.items}
                  key={`${multiSelect.id}-3`}
                  onChange={(e) => {
                    onChange(e.target.id, `${multiSelect.id}-3`);
                  }}
                  onMixedStateChange={(e) => {
                    return onMixedStateChange({
                      parentId: e.target.id,
                      multiSelectId: `${multiSelect.id}-3`,
                      items: multiSelect.items,
                    });
                  }}
                  onClear={() => {
                    onClear(`${multiSelect.id}-3`);
                  }}
                  selectedItems={selectedItems}
                  width={multiSelectWidth}
                />
              ));
            }}
          />
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
  );
};

const meta: Meta<typeof Form> = {
  title: "Components/Form Elements/Form",
  component: Form,
  argTypes: {
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
    gap: "grid.l",
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Main?type=design&node-id=10734-2768",
    },
    jest: "Form.test.tsx",
  },
  render: (args) => <FormExampleStory {...args} />,
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
      <HorizontalRule my="s" />
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

function FormInvalidTextExample() {
  // Mock invalid form state to show updated layout.
  const [isInvalid, setIsInvalid] = useState(false);
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsInvalid(true);
  };
  return (
    <>
      <Text>
        Hit the Submit button to test the layout with only invalid text.
      </Text>
      <Form id="form-id" action="/end/point" method="get" onSubmit={onSubmit}>
        <FormRow>
          <FormField>
            <TextInput
              id="first-name"
              labelText="First Name"
              isInvalid={isInvalid}
              invalidText="Oops, something is wrong."
            />
          </FormField>
          <FormField>
            <TextInput
              id="last-name"
              labelText="Last Name"
              isInvalid={isInvalid}
              invalidText="Oops, something is wrong."
            />
          </FormField>
          <FormField>
            <DatePicker
              dateType="full"
              dateFormat="yyyy-MM-dd"
              helperTextFrom="From this date."
              helperTextTo="To this date."
              id="date-range"
              invalidText="Invalid date range."
              isDateRange
              labelText="Select the date range you want to visit NYPL"
              minDate="1/1/2021"
              maxDate="1/1/2022"
              nameFrom="visit-dates"
              showLabel={false}
              isInvalid={isInvalid}
            />
          </FormField>
        </FormRow>
        <FormField>
          <TextInput
            id="username"
            labelText="Username"
            isInvalid={isInvalid}
            invalidText="Oops, something is wrong."
          />
        </FormField>
        <FormField>
          <TextInput
            id="password"
            labelText="Password"
            isInvalid={isInvalid}
            invalidText="Oops, something is wrong."
          />
        </FormField>
        <FormRow>
          <FormField>
            <TextInput
              id="phone"
              labelText="Phone Field"
              type="tel"
              isInvalid={isInvalid}
              invalidText="Oops, something is wrong."
            />
          </FormField>
          <FormField>
            <TextInput
              id="url"
              labelText="URL Field"
              type="url"
              isInvalid={isInvalid}
              invalidText="Oops, something is wrong."
            />
          </FormField>
          <FormField>
            <TextInput
              id="age"
              labelText="Age"
              type="number"
              isInvalid={isInvalid}
              invalidText="Oops, something is wrong."
            />
          </FormField>
        </FormRow>
        <FormRow>
          <FormField>
            <ButtonGroup>
              <Button id="submit" type="submit">
                Submit
              </Button>
            </ButtonGroup>
          </FormField>
        </FormRow>
      </Form>
    </>
  );
}

export const FormWithoutHelperText: Story = {
  render: () => FormInvalidTextExample(),
};
