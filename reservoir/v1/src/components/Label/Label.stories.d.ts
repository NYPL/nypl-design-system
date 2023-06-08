import type { Meta, StoryObj } from "@storybook/react";
import Label from "./Label";
declare const meta: Meta<typeof Label>;
export default meta;
type Story = StoryObj<typeof Label>;
/**
 * Main Story for the Label component. This must contains the `args`
 * and `parameters` properties in this object.
 */
export declare const WithControls: Story;
export declare const RequiredState: Story;
export declare const CustomRequiredText: Story;
