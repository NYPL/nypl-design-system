import type { Meta, StoryObj } from "@storybook/react";
import StructuredContent from "./StructuredContent";
declare const meta: Meta<typeof StructuredContent>;
export default meta;
type Story = StoryObj<typeof StructuredContent>;
/**
 * Main Story for the StructuredContent component. This must contains the `args`
 * and `parameters` properties in this object.
 */
export declare const Controls: Story;
/**
 * The following are additional StructuredContent example Stories.
 */
export declare const WithHTMLStringTextContent: Story;
export declare const WithHTMLElementTextContent: Story;
export declare const ExampleWithTwoComponents: Story;
export declare const ExampleWithThreeComponents: Story;
export declare const ExampleWithMixedContent: Story;
