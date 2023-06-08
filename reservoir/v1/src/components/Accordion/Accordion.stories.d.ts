import type { Meta, StoryObj } from "@storybook/react";
import { Accordion } from "./Accordion";
declare const meta: Meta<typeof Accordion>;
export default meta;
type Story = StoryObj<typeof Accordion>;
/**
 * Main Story for the Accordion component. This must contains the `args`
 * and `parameters` properties in this object.
 */
export declare const WithControls: Story;
export declare const FaqContent: Story;
export declare const PanelMaxHeightExample: Story;
export declare const PanelMaxHeightExample2: Story;
export declare const IsAlwaysRendered: Story;
