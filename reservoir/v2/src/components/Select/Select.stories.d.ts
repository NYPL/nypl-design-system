import type { Meta, StoryObj } from "@storybook/react";
import Select from "./Select";
declare const meta: Meta<typeof Select>;
export default meta;
type Story = StoryObj<typeof Select>;
/**
 * Main Story for the Select component. This must contains the `args`
 * and `parameters` properties in this object.
 */
export declare const WithControls: Story;
export declare const LabellingVariations: Story;
export declare const Errored: Story;
export declare const Disabled: Story;
export declare const GetInputValue: Story;
export declare const GetUncontrolledInputValue: Story;
