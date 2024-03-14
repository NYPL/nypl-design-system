import type { Meta, StoryObj } from "@storybook/react";
import StyledList from "./StyledList";
declare const meta: Meta<typeof StyledList>;
export default meta;
type Story = StoryObj<typeof StyledList>;
/**
 * Main Story for the StyledList component. This must contains the `args`
 * and `parameters` properties in this object.
 */
export declare const WithControls: Story;
export declare const FontSizes: Story;
export declare const DeprecatedFontSizes: Story;
