import type { Meta, StoryObj } from "@storybook/react";
import Tooltip from "./Tooltip";
declare const meta: Meta<typeof Tooltip>;
export default meta;
type Story = StoryObj<typeof Tooltip>;
/**
 * Main Story for the Tooltip component. This must contains the `args`
 * and `parameters` properties in this object.
 */
export declare const WithControls: Story;
export declare const OnFormElements: Story;
export declare const OnImageComponents: Story;
export declare const OnLinkedIcons: Story;
export declare const UsingIconContent: Story;
export declare const UsingImageContent: Story;
export declare const DisablingTooltip: Story;
export declare const DisablingTooltipButton: Story;
