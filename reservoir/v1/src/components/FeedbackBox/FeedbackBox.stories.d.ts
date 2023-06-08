import type { Meta, StoryObj } from "@storybook/react";
import FeedbackBox from "./FeedbackBox";
declare const meta: Meta<typeof FeedbackBox>;
export default meta;
type Story = StoryObj<typeof FeedbackBox>;
/**
 * Main Story for the FeedbackBox component. This must contains the `args`
 * and `parameters` properties in this object.
 */
export declare const WithControls: Story;
