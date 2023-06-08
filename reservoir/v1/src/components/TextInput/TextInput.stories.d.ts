import type { Meta, StoryObj } from "@storybook/react";
import TextInput from "./TextInput";
declare const meta: Meta<typeof TextInput>;
export default meta;
type Story = StoryObj<typeof TextInput>;
/**
 * Main Story for the TextInput component. This must contains the `args`
 * and `parameters` properties in this object.
 */
export declare const WithControls: Story;
export declare const LabellingVariations: Story;
export declare const BrowserStates: Story;
export declare const isClearableButton: Story;
export declare const ControlledExample: Story;
export declare const NumberType: Story;
export declare const AlternateNumberPattern: Story;
export declare const HTMLHelperText: Story;
export declare const Textarea: Story;
