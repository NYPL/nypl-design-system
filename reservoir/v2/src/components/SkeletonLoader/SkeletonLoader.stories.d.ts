import type { Meta, StoryObj } from "@storybook/react";
import SkeletonLoader from "./SkeletonLoader";
declare const meta: Meta<typeof SkeletonLoader>;
export default meta;
type Story = StoryObj<typeof SkeletonLoader>;
/**
 * Main Story for the SkeletonLoader component. This must contains the `args`
 * and `parameters` properties in this object.
 */
export declare const WithControls: Story;
export declare const GridExample: Story;
export declare const ListExample: Story;
