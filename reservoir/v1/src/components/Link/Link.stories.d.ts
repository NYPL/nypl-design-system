import type { Meta, StoryObj } from "@storybook/react";
import Link from "./Link";
declare const meta: Meta<typeof Link>;
export default meta;
type Story = StoryObj<typeof Link>;
/**
 * Main Story for the Link component. This must contains the `args`
 * and `parameters` properties in this object.
 */
export declare const WithControls: Story;
export declare const Accessibility: Story;
export declare const LinksWithIcons: Story;
