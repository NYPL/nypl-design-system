import type { Meta, StoryObj } from "@storybook/react";
import Toggle from "./Toggle";
declare const meta: Meta<typeof Toggle>;
export default meta;
type Story = StoryObj<typeof Toggle>;
/**
 * Main Story for the Toggle component. This must contains the `args`
 * and `parameters` properties in this object.
 */
export declare const WithControls: Story;
export declare const Sizes: Story;
export declare const ControlledToggle: Story;
export declare const BrowserStates: Story;
export declare const Layouts: Story;
