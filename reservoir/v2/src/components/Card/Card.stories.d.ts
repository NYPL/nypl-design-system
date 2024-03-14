import type { Meta, StoryObj } from "@storybook/react";
import Card from "./Card";
declare const meta: Meta<typeof Card>;
export default meta;
type Story = StoryObj<typeof Card>;
/**
 * Main Story for the Card component. This must contains the `args`
 * and `parameters` properties in this object.
 */
export declare const WithControls: Story;
export declare const ImagePositionColumnCards: Story;
export declare const ImagePositionRowCards: Story;
export declare const ImageSizeColumnCards: Story;
export declare const ImageSizeRowCards: Story;
export declare const CustomImageComponent: Story;
export declare const HeadingAsLink: Story;
export declare const FullClick: Story;
export declare const CardFullClickTurbineExample: Story;
export declare const CardWithRightSideCardActions: Story;
export declare const GridExample: Story;
export declare const StackExample: Story;
export declare const WithoutImages: Story;
