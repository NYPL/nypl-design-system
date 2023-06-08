import type { Meta, StoryObj } from "@storybook/react";
import SimpleGrid from "./SimpleGrid";
declare const meta: Meta<typeof SimpleGrid>;
export default meta;
type Story = StoryObj<typeof SimpleGrid>;
/**
 * Main Story for the SimpleGrid component. This must contains the `args`
 * and `parameters` properties in this object.
 */
export declare const WithControls: Story;
export declare const IconExample: Story;
export declare const ImageExample: Story;
export declare const CardExample: Story;
