import type { Meta, StoryObj } from "@storybook/react";
import FeaturedContent from "./FeaturedContent";
declare const meta: Meta<typeof FeaturedContent>;
export default meta;
type Story = StoryObj<typeof FeaturedContent>;
/**
 * Main Story for the FeaturedContent component. This must contain the `args`
 * and `parameters` properties in this object.
 */
export declare const WithControls: Story;
export declare const LayoutVariations: Story;
export declare const ImagePositionVariations: Story;
export declare const imageWidthVariations: Story;
export declare const textContentVariations: Story;
