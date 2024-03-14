import type { Meta, StoryObj } from "@storybook/react";
import NewsletterSignup from "./NewsletterSignup";
declare const meta: Meta<typeof NewsletterSignup>;
export default meta;
type Story = StoryObj<typeof NewsletterSignup>;
/**
 * Main Story for the NewsletterSignup component. This must contains the `args`
 * and `parameters` properties in this object.
 */
export declare const WithControls: Story;
export declare const NewsletterSignupOnSubmitExample: Story;
export declare const DescriptionUsingJSXElements: Story;
export declare const CustomHeadings: Story;
export declare const ComponentStates: Story;
