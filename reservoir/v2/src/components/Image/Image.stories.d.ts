import type { Meta, StoryObj } from "@storybook/react";
import Image from "./Image";
declare const meta: Meta<typeof Image>;
export default meta;
type Story = StoryObj<typeof Image>;
/**
 * Main Story for the Image component. This must contains the `args`
 * and `parameters` properties in this object.
 */
export declare const WithControls: Story;
export declare const FigureAndFigcaption: Story;
export declare const Sizes: Story;
export declare const SizesBasedOnHeight: Story;
export declare const AspectRatios: Story;
export declare const Types: Story;
export declare const HTMLAttributes: Story;
export declare const LazyLoading: Story;
