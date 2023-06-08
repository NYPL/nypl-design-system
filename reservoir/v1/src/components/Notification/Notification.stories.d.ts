import type { Meta, StoryObj } from "@storybook/react";
import Notification from "./Notification";
declare const meta: Meta<typeof Notification>;
export default meta;
type Story = StoryObj<typeof Notification>;
/**
 * Main Story for the Notification component. This must contains the `args`
 * and `parameters` properties in this object.
 */
export declare const WithControls: Story;
export declare const NotificationHeading: Story;
export declare const NotificationIcon: Story;
export declare const CustomIcon: Story;
export declare const HTMLContent: Story;
export declare const Dismissible: Story;
