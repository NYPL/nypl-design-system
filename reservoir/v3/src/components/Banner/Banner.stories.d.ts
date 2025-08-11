import type { Meta, StoryObj } from "@storybook/react-vite";
import Banner from "./Banner";
declare const meta: Meta<typeof Banner>;
export default meta;
type Story = StoryObj<typeof Banner>;
/**
 * Main Story for the Banner component. This must contains the `args`
 * and `parameters` properties in this object.
 */
export declare const WithControls: Story;
export declare const TypeVariants: Story;
export declare const BannerHeading: Story;
export declare const CustomBannerIcon: Story;
export declare const HTMLContent: Story;
export declare const CustomColors: Story;
export declare const Dismissible: Story;
export declare const StringContentWithHTML: Story;
