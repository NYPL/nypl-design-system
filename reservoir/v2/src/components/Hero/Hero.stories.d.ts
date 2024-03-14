import type { Meta, StoryObj } from "@storybook/react";
import Hero from "./Hero";
declare const meta: Meta<typeof Hero>;
export default meta;
type Story = StoryObj<typeof Hero>;
/**
 * Main Story for the Hero component. This must contains the `args`
 * and `parameters` properties in this object.
 */
export declare const WithControls: Story;
export declare const Primary: Story;
export declare const Secondary: Story;
export declare const Tertiary: Story;
export declare const Campaign: Story;
export declare const CampaignDarkBackgroundImage: Story;
export declare const CampaignBackgroundColors: Story;
export declare const FiftyFifty: Story;
export declare const ColorVariations: Story;
