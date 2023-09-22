import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { withDesign } from "storybook-addon-designs";

import NewsletterSignup, {
  newsletterSignupViewTypeArray,
} from "./NewsletterSignup";
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
  const [view, setView] = useState("form");
  const [isInvalidEmail, setIsInvalidEmail] = useState(false);
  const onSubmit = (values?: { [key: string]: string }) => {
    switch (values.email) {
      case "":
        setIsInvalidEmail(true);
        break;
      case "error@nypl.org":
        setView("error");
        break;
    }
    console.log("Submitted values:", values, isInvalidEmail, view);
  };
  return <NewsletterSignup {...args} onSubmit={onSubmit} />;
};

// Example hidden field values.
const hiddenFields = {
  "hidden-field-1": "hidden-field-value-1",
  "hidden-field-2": "hidden-field-value-2",
};

/**
 * Main Story for the NewsletterSignup component. This must contains the `args`
 * and `parameters` properties in this object.
 */
export const WithControls: Story = {
  args: {
    className: undefined,
    confirmationText:
      "Thank you! You have successfully subscribed to our email updates! You can update your email subscription preferences at any time using the links at the bottom of the email.",
    descriptionText: undefined,
    hiddenFields: { hiddenFields },
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
      url: "https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Main?node-id=80849%3A174194&mode=dev",
    },
    jest: "NewsletterSignup.test.tsx",
  },
  render: (args) => <NewsletterSignupWithControls {...args} />,
};
