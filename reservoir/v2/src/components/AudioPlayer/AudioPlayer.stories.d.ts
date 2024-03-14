import type { Meta, StoryObj } from "@storybook/react";
import AudioPlayer from "./AudioPlayer";
declare const meta: Meta<typeof AudioPlayer>;
export default meta;
type Story = StoryObj<typeof AudioPlayer>;
/**
 * Main Story for the AudioPlayer component. This must contains the `args`
 * and `parameters` properties in this object.
 */
export declare const WithControls: Story;
export declare const WithCustomHeading: Story;
export declare const LibsynExample: Story;
export declare const SoundcloudExample: Story;
export declare const SpotifyExample: Story;
export declare const ErroredExample: Story;
