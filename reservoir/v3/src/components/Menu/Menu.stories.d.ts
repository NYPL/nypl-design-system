import type { Meta, StoryObj } from "@storybook/react-vite";
import Menu from "./Menu";
declare const meta: Meta<typeof Menu>;
export default meta;
type Story = StoryObj<typeof Menu>;
/**
 * Main Story for the Menu component. This must contain the `args`
 * and `parameters` properties in this object.
 */
export declare const WithControls: Story;
export declare const MenuTypes: Story;
export declare const MenuLabel: Story;
export declare const MenuContent: Story;
export declare const MenuHighlightColors: Story;
