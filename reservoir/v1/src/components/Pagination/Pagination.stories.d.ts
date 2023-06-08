import type { Meta, StoryObj } from "@storybook/react";
import Pagination from "./Pagination";
declare const meta: Meta<typeof Pagination>;
export default meta;
type Story = StoryObj<typeof Pagination>;
/**
 * The Pagination component doesn't have a "main" story. Both variations are
 * equally important with two separate features so they will both be highlighted.
 * This must contains the `args` and `parameters` properties in this object.
 */
export declare const URLUpdates: Story;
export declare const UnchangingURL: Story;
export declare const UpdateProgrammatically: Story;
