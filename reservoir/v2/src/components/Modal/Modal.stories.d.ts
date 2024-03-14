import type { Meta, StoryObj } from "@storybook/react";
import { ModalTrigger } from "./Modal";
declare const meta: Meta<typeof ModalTrigger>;
export default meta;
type Story = StoryObj<typeof ModalTrigger>;
/**
 * Main Story for the Modal component. This must contains the `args`
 * and `parameters` properties in this object.
 */
export declare const WithControls: Story;
export declare const useModalStory: Story;
export declare const ContentWindowScrolling: Story;
