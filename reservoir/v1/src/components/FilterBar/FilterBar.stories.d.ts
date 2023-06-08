import type { Meta, StoryObj } from "@storybook/react";
import FilterBar from "./FilterBar";
declare const meta: Meta<typeof FilterBar>;
export default meta;
type Story = StoryObj<typeof FilterBar>;
/**
 * Main Story for the FilterBar component. This must contains the `args`
 * and `parameters` properties in this object.
 */
export declare const WithControls: Story;
export declare const LayoutPatterns: Story;
export declare const UIContainers: Story;
export declare const ColumnLayout: Story;
