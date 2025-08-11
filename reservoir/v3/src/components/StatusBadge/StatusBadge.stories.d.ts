import type { Meta, StoryObj } from "@storybook/react-vite";
import StatusBadge from "./StatusBadge";
declare const meta: Meta<typeof StatusBadge>;
export default meta;
type Story = StoryObj<typeof StatusBadge>;
/**
 * Main Story for the StatusBadge component. This must contains the `args`
 *  and `parameters` properties in this object.
 */
export declare const WithControls: Story;
export declare const Types: Story;
export declare const Levels: Story;
export declare const FontSize: Story;
export declare const Labeling: Story;
export declare const Icons: Story;
