import type { Meta, StoryObj } from "@storybook/react";
import Form from "./Form";
declare const meta: Meta<typeof Form>;
export default meta;
type Story = StoryObj<typeof Form>;
/**
 * Main Story for the Form component. This must contains the `args`
 * and `parameters` properties in this object.
 */
export declare const WithControls: Story;
export declare const FormSpacing: Story;
