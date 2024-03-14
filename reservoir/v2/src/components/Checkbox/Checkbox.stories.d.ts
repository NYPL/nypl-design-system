import type { Meta, StoryObj } from "@storybook/react";
import Checkbox from "./Checkbox";
declare const meta: Meta<typeof Checkbox>;
export default meta;
type Story = StoryObj<typeof Checkbox>;
/**
 * Main Story for the Checkbox component. This must contains the `args`
 * and `parameters` properties in this object.
 */
export declare const WithControls: Story;
export declare const Checked: Story;
export declare const Indeterminate: Story;
export declare const AdditionalStates: Story;
export declare const LabelUsingJSXElements: Story;
