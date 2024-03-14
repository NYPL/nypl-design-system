import type { Meta, StoryObj } from "@storybook/react";
import ProgressIndicator from "./ProgressIndicator";
declare const meta: Meta<typeof ProgressIndicator>;
export default meta;
type Story = StoryObj<typeof ProgressIndicator>;
/**
 * Main Story for the ProgressIndicator component. This must contains the `args`
 * and `parameters` properties in this object.
 */
export declare const WithControls: Story;
export declare const LinearType: Story;
export declare const CircularType: Story;
export declare const LinearSizes: Story;
export declare const CircularSizes: Story;
export declare const Labels: Story;
export declare const IndeterminateState: Story;
export declare const WorkingExample: Story;
