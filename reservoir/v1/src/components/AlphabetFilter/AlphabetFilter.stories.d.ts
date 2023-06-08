import type { Meta, StoryObj } from "@storybook/react";
import AlphabetFilter from "./AlphabetFilter";
declare const meta: Meta<typeof AlphabetFilter>;
export default meta;
type Story = StoryObj<typeof AlphabetFilter>;
/**
 * Main Story for the AlphabetFilter component. This must contains the `args`
 * and `parameters` properties in this object.
 */
export declare const WithControls: Story;
export declare const SetActiveLetters: Story;
export declare const SetCurrentLetter: Story;
export declare const UsingOnClick: Story;
