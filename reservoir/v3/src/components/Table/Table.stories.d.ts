import type { Meta, StoryObj } from "@storybook/react-vite";
import Table from "./Table";
declare const meta: Meta<typeof Table>;
export default meta;
type Story = StoryObj<typeof Table>;
/**
 * Main Story for the Table component. This must contains the `args`
 * and `parameters` properties in this object.
 */
export declare const WithControls: Story;
export declare const ShowTitleText: Story;
export declare const HideTitleText: Story;
export declare const RowDividers: Story;
export declare const RowHeaders: Story;
export declare const CustomHeaderColors: Story;
export declare const NativeColumnStyles: Story;
export declare const CustomColumnStyles: Story;
export declare const HorizontalScrolling: Story;
export declare const JSXElements: Story;
