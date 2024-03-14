import type { Meta, StoryObj } from "@storybook/react";
import Logo from "./Logo";
declare const meta: Meta<typeof Logo>;
export default meta;
type Story = StoryObj<typeof Logo>;
/**
 * Main Story for the Logo component. This must contains the `args`
 * and `parameters` properties in this object.
 */
export declare const WithControls: Story;
export declare const Sizes: Story;
export declare const SizesBasedOnHeight: Story;
export declare const AllLogos: Story;
export declare const CustomLogos: Story;
