import type { Meta, StoryObj } from "@storybook/react";
import Table from "./Table";
declare const meta: Meta<typeof Table>;
export default meta;
type Story = StoryObj<typeof Table>;
/**
 * Main Story for the Table component. This must contains the `args`
 * and `parameters` properties in this object.
 */
export declare const WithControls: Story;
export declare const Title: Story;
export declare const RowDividers: Story;
export declare const RowHeaders: Story;
export declare const CustomHeaderColors: Story;
export declare const JSXElements: Story;
