import type { Meta, StoryObj } from "@storybook/react-vite";

import ComponentWrapper from "./ComponentWrapper";
import Link from "../Link/Link";

const defaultHelperText = "This is the helper text!";
const defaultInvalidText = "This is the error text :(";

const meta: Meta<typeof ComponentWrapper> = {
  title: "Components/Content Display/ComponentWrapper",
  component: ComponentWrapper,
  argTypes: {
    descriptionText: { control: { type: "text" } },
    headingText: { control: { type: "text" } },
    helperText: { control: { type: "text" } },
    helperTextStyles: { control: { type: "object" } },
    invalidText: { control: { type: "text" } },
    isInvalid: {
      table: { defaultValue: { summary: "false" } },
    },
    showHelperInvalidText: {
      table: { defaultValue: { summary: "true" } },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ComponentWrapper>;

/**
 * Main Story for the ComponentWrapper component. This must contain the `args`
 * and `parameters` properties in this object.
 */
export const WithControls: Story = {
  args: {
    descriptionText: "This is the description text.",
    headingText: "ComponentWrapper heading",
    helperText: defaultHelperText,
    id: "componentWrapper",
    invalidText: defaultInvalidText,
    isInvalid: false,
    showHelperInvalidText: true,
  },
  parameters: {
    jest: ["ComponentWrapper.test.tsx"],
  },
  render: (args) => (
    <ComponentWrapper {...args}>
      <div>Child content rendered by the wrapped component.</div>
    </ComponentWrapper>
  ),
};

// The following are additional ComponentWrapper example Stories.
export const HeadingAndDescription: Story = {
  name: "Heading and Description",
  render: () => (
    <ComponentWrapper
      descriptionText="The description renders between the heading and the children."
      headingText="Heading text"
      helperText={defaultHelperText}
      id="headingAndDescription"
    >
      <div>Child content</div>
    </ComponentWrapper>
  ),
};

export const InvalidState: Story = {
  name: "Invalid State",
  render: () => (
    <ComponentWrapper
      helperText={defaultHelperText}
      id="invalidState"
      invalidText={defaultInvalidText}
      isInvalid
    >
      <div>Child content</div>
    </ComponentWrapper>
  ),
};

export const HiddenHelperText: Story = {
  name: "Hidden Helper Text",
  render: () => (
    <ComponentWrapper
      helperText={defaultHelperText}
      id="hiddenHelperText"
      showHelperInvalidText={false}
    >
      <div>
        The helper text container still renders in the DOM, but its text is not
        displayed.
      </div>
    </ComponentWrapper>
  ),
};

export const JSXText: Story = {
  name: "JSX Text",
  render: () => (
    <ComponentWrapper
      descriptionText={
        <>
          The description can be JSX, such as a <Link href="#">link</Link>.
        </>
      }
      helperText={
        <>
          So can the helper text, such as a <Link href="#">link</Link>.
        </>
      }
      id="jsxText"
    >
      <div>Child content</div>
    </ComponentWrapper>
  ),
};
