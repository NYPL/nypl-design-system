import { VStack } from "@chakra-ui/react";
import type { Meta, StoryObj } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";
import Heading from "../Heading/Heading";

import DatePicker, { datePickerTypesArray } from "./DatePicker";

const currentYear = new Date().getFullYear();

const meta: Meta<typeof DatePicker> = {
  title: "Components/Form Elements/DatePicker",
  component: DatePicker,
  decorators: [withDesign],
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Main?node-id=11689%3A0",
    },
    jest: ["DatePicker.test.tsx"],
  },
  argTypes: {
    className: { control: false },
    dateFormat: {
      table: { defaultValue: { summary: "yyyy-MM-dd" } },
    },
    dateType: {
      control: { type: "select" },
      options: datePickerTypesArray,
      table: { defaultValue: { summary: "full" } },
    },
    id: { control: false },
    isDateRange: {
      table: { defaultValue: { summary: false } },
    },
    isDisabled: {
      table: { defaultValue: { summary: false } },
    },
    isInvalid: {
      table: { defaultValue: { summary: false } },
    },
    isRequired: {
      table: { defaultValue: { summary: false } },
    },
    key: { table: { disable: true } },
    labelText: {
      table: { defaultValue: { summary: "From" } },
    },
    nameFrom: { control: false },
    nameTo: { control: false },
    onChange: { control: false, action: "onChange" },
    ref: { table: { disable: true } },
    refTo: { control: false },
    showHelperInvalidText: {
      table: { defaultValue: { summary: true } },
    },
    showLabel: {
      table: { defaultValue: { summary: true } },
    },
    showRequiredLabel: {
      table: { defaultValue: { summary: true } },
    },
  },
};

export default meta;
type Story = StoryObj<typeof DatePicker>;

/**
 * Main Story for the DatePicker component. This must contains the `args`
 * and `parameters` properties in this object.
 */
export const WithControls: Story = {
  args: {
    className: undefined,
    dateFormat: "yyyy-MM-dd",
    dateType: "full",
    helperText: "Note that the Library may be closed on Sundays.",
    helperTextFrom: "Select start date.",
    helperTextTo: "Select end date.",
    id: "datePicker-id",
    initialDate: `1/1/${currentYear}`,
    initialDateTo: `12/31/${currentYear}`,
    invalidText: "Please select a valid date.",
    isDateRange: false,
    isDisabled: false,
    isInvalid: false,
    isRequired: false,
    labelText: "Select the date you want to visit NYPL",
    maxDate: "1/1/2025",
    minDate: "1/1/2022",
    nameFrom: "visit-dates-from",
    nameTo: "visit-dates-to",
    refTo: undefined,
    showHelperInvalidText: true,
    showLabel: true,
    showRequiredLabel: true,
  },
  render: (args) => <DatePicker {...args} />,
};

// The following are additional DatePicker example Stories.
export const DateRange: Story = {
  render: () => (
    <DatePicker
      id="date-range"
      dateFormat="yyyy-MM-dd"
      dateType="full"
      minDate="9/1/2022"
      maxDate="12/31/2023"
      labelText="Select the date range you want to visit NYPL"
      nameFrom="visit-dates-from"
      nameTo="visit-dates-to"
      helperTextFrom="From this date."
      helperTextTo="To this date."
      helperText="Select a valid date range."
      invalidText="There was an error with the date range :("
      isDateRange
    />
  ),
};

export const MonthDateInput: Story = {
  render: () => (
    <DatePicker
      id="month-date"
      dateType="month"
      labelText="Select the month you want to visit NYPL"
      helperText="Note that the Library may be closed on Sundays."
      invalidText="Please select a valid month."
    />
  ),
};

export const YearDateInput: Story = {
  render: () => (
    <DatePicker
      id="year-date"
      dateType="year"
      labelText="Select the year you want to visit NYPL"
      helperText="Note that the Library may be closed on Sundays."
    />
  ),
};

export const OtherStates: Story = {
  render: () => (
    <VStack align="stretch" spacing="s">
      <Heading level="h3" size="heading6">
        Errored State
      </Heading>
      <DatePicker
        id="invalid-date"
        dateType="full"
        labelText="Select the year you want to visit NYPL"
        helperText="Note that the Library may be closed on Sundays."
        invalidText="Please select a valid date."
        isInvalid
        isDateRange
      />
      <Heading level="h3" size="heading6">
        Disabled State
      </Heading>
      <DatePicker
        id="disabled-date"
        dateType="full"
        labelText="Select the year you want to visit NYPL"
        isDateRange
        isDisabled
      />
      <Heading level="h3" size="heading6">
        Required State
      </Heading>
      <p>
        The "Required" text in the legend in the date range, or the label in a
        normaldate input, can be hidden when `showRequiredLabel` is set to
        `false`.
      </p>
      <DatePicker
        id="required-date"
        dateType="full"
        labelText="Select the year you want to visit NYPL"
        isDateRange
        isRequired
      />
    </VStack>
  ),
};

export const InitialDate: Story = {
  render: () => (
    <DatePicker
      id="init-dates"
      dateType="full"
      labelText="Select the date you want to visit NYPL"
      initialDate="12/1/21"
      initialDateTo="12/10/21"
      isDateRange
    />
  ),
};

export const DateFormat: Story = {
  render: () => (
    <DatePicker
      id="format-date"
      dateFormat="MM-dd-yyyy"
      dateType="full"
      labelText="Select the date you want to visit NYPL"
      initialDate="12/1/21"
      initialDateTo="12/10/21"
      isDateRange
    />
  ),
};

export const MaxMinDateValues: Story = {
  render: () => (
    <DatePicker
      id="max-min-dates"
      dateFormat="MM-dd-yyyy"
      dateType="full"
      labelText="Select the date you want to visit NYPL"
      minDate="1/1/2022"
      maxDate="3/1/2022"
      isDateRange
    />
  ),
};
