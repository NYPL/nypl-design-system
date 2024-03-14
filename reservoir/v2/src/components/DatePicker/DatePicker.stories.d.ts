import type { Meta, StoryObj } from "@storybook/react";
import DatePicker from "./DatePicker";
declare const meta: Meta<typeof DatePicker>;
export default meta;
type Story = StoryObj<typeof DatePicker>;
/**
 * Main Story for the DatePicker component. This must contains the `args`
 * and `parameters` properties in this object.
 */
export declare const WithControls: Story;
export declare const DateRange: Story;
export declare const MonthDateInput: Story;
export declare const YearDateInput: Story;
export declare const OtherStates: Story;
export declare const InitialDate: Story;
export declare const Placeholder: Story;
export declare const DateFormat: Story;
export declare const MaxMinDateValues: Story;
