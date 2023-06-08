import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";
declare const meta: Meta<typeof Button>;
export default meta;
type Story = StoryObj<typeof Button>;
/**
 * Main Story for the Button component. This must contains the `args`
 * and `parameters` properties in this object.
 */
export declare const WithControls: Story;
export declare const ButtonGroups: Story;
export declare const TextWithIcon: Story;
export declare const IconOnly: Story;
export declare const Patterns: Story;
export declare const ButtonTypes: Story;
export declare const DisabledButtons: Story;
export declare const ButtonSizes: Story;
