import type { Meta, StoryObj } from "@storybook/react";
import List from "./List";
declare const meta: Meta<typeof List>;
export default meta;
type Story = StoryObj<typeof List>;
/**
 * Main Story for the List component. This must contains the `args`
 * and `parameters` properties in this object.
 */
export declare const WithControls: Story;
export declare const DescriptionList: Story;
export declare const DescriptionListWithLinks: Story;
export declare const ListWithDataProps: Story;
