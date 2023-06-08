import type { Meta, StoryObj } from "@storybook/react";
import Heading from "./Heading";
declare const meta: Meta<typeof Heading>;
export default meta;
type Story = StoryObj<typeof Heading>;
/**
 * Main Story for the Heading component. This must contains the `args`
 * and `parameters` properties in this object.
 */
export declare const WithControls: Story;
export declare const DefaultStyles: Story;
export declare const SizeStyles: Story;
export declare const BoldText: Story;
export declare const Links: Story;
