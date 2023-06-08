import type { Meta, StoryObj } from "@storybook/react";
import StatusBadge from "./StatusBadge";
declare const meta: Meta<typeof StatusBadge>;
export default meta;
type Story = StoryObj<typeof StatusBadge>;
/**
 * Main Story for the StatusBadge component. This must contains the `args`
 *  and `parameters` properties in this object.
 */
export declare const WithControls: Story;
export declare const HigherBarrier: Story;
export declare const LowerBarrier: Story;
