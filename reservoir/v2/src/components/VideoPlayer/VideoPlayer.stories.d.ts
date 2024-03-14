import type { Meta, StoryObj } from "@storybook/react";
import VideoPlayer from "./VideoPlayer";
declare const meta: Meta<typeof VideoPlayer>;
export default meta;
type Story = StoryObj<typeof VideoPlayer>;
/**
 * Main Story for the VideoPlayer component. This must contains the `args`
 * and `parameters` properties in this object.
 */
export declare const WithControls: Story;
export declare const WithCustomHeading: Story;
export declare const Errored: Story;
export declare const HTMLInHelperText: Story;
