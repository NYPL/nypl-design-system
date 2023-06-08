import type { Meta, StoryObj } from "@storybook/react";
import { TemplateAppContainer } from "./Template";
declare const meta: Meta<typeof TemplateAppContainer>;
export default meta;
type Story = StoryObj<typeof TemplateAppContainer>;
/**
 * Main Story for the Template component. This must contains the `args`
 * and `parameters` properties in this object.
 */
export declare const WithControls: Story;
export declare const ChildrenComponentProps: Story;
export declare const FullExampleWithTemplateChildrenComponents: Story;
