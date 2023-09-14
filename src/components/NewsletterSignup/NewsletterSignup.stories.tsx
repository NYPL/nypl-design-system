import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { withDesign } from "storybook-addon-designs";

import NewsletterSignup, {
  newsletterSignupViewTypeArray,
} from "./NewsletterSignup";
import useStateWithDependencies from "../../hooks/useStateWithDependencies";
import { sectionTypeArray } from "../../helpers/types";

const meta: Meta<typeof NewsletterSignup> = {
  title: "Components/Form Elements/NewsletterSignup",
  component: NewsletterSignup,
  decorators: [withDesign],
  parameters: {
    jest: ["NewsletterSignup.test.tsx"],
  },
  argTypes: {
    className: { control: false },
    hiddenFields: { control: false },
    id: { control: false },
    isInvalidEmail: { table: { defaultValue: { summary: false } } },
    newsletterSignupType: {
      control: { type: "select" },
      options: sectionTypeArray,
      table: { defaultValue: { summary: "whatsOn" } },
    },
    onSubmit: { control: false },
    view: {
      control: { type: "select" },
      options: newsletterSignupViewTypeArray,
      table: { defaultValue: { summary: "form" } },
    },
  },
};

export default meta;
type Story = StoryObj<typeof NewsletterSignup>;

const NewsletterSignupWithControls = (args) => {
  // This hook is used because the `view` prop can be controlled
  // by Storybook controls.
  const [internalView, setInternalView] = useStateWithDependencies(args.view);
  const [count, setCount] = useState(0);
  // Example hidden field values.
  const hiddenFields = {
    "hidden-field-1": "hidden-field-value-1",
    "hidden-field-2": "hidden-field-value-2",
  };
  // For the purposes of the Storybook example, the confirmation and
  // error screens display on alternate form submissions.
  const onSubmit = (values) => {
    setCount((prev) => prev + 1);
    setInternalView(count % 2 === 0 ? "confirmation" : "error");
    console.log("Submitted values:", values);
  };
  return (
    <NewsletterSignup
      {...args}
      hiddenFields={hiddenFields}
      onSubmit={onSubmit}
      view={internalView}
    />
  );
};

/**
 * Main Story for the NewsletterSignup component. This must contains the `args`
 * and `parameters` properties in this object.
 */
export const WithControls: Story = {
  args: {
    className: undefined,
    confirmationText: "",
    descriptionText: undefined,
    hiddenFields: undefined,
    id: "newsletterSignup-id",
    isInvalidEmail: false,
    newsletterSignupType: "whatsOn",
    onSubmit: undefined,
    title: undefined,
    view: "form",
  },
  parameters: {
    design: {
      type: "figma",
      url: "",
    },
    jest: "NewsletterSignup.test.tsx",
  },
  render: (args) => <NewsletterSignupWithControls {...args} />,
};
