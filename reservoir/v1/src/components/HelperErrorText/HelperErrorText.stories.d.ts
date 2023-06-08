import type { Meta, StoryObj } from "@storybook/react";
import HelperErrorText from "./HelperErrorText";
declare const meta: Meta<typeof HelperErrorText>;
export default meta;
type Story = StoryObj<typeof HelperErrorText>;
/**
 * Main Story for the HelperErrorText component. This must contains the `args`
 * and `parameters` properties in this object.
 */
export declare const WithControls: Story;
export declare const TextInputExample: Story;
export declare const AriaControls: Story;
export declare const HTMLChildren: Story;
export declare const InvalidState: Story;
