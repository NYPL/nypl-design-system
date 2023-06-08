import type { Meta, StoryObj } from "@storybook/react";
import Tabs from "./Tabs";
declare const meta: Meta<typeof Tabs>;
export default meta;
type Story = StoryObj<typeof Tabs>;
/**
 * Main Story for the Tabs component. This must contains the `args`
 * and `parameters` properties in this object.
 */
export declare const WithControls: Story;
export declare const CallbackEventFunction: Story;
export declare const URLHashOption: Story;
export declare const ChildrenComponents: Story;
