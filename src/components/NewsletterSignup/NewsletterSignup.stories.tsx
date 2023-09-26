import type { Meta, StoryObj } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";
import useStateWithDependencies from "../../hooks/useStateWithDependencies";
import NewsletterSignup from "./NewsletterSignup";

const meta: Meta<typeof NewsletterSignup> = {
  title: "Components/Form Elements/NewsletterSignup",
  component: NewsletterSignup,
  decorators: [withDesign],
  parameters: {
    jest: ["NewsletterSignup.test.tsx"],
  },
  argTypes: {
    className: { control: false },
    id: { control: false },
    confirmationText: {
      control: "text",
      table: {
        defaultValue: {
          summary:
            "Thank you! You have successfully subscribed to our email updates! You can update your email subscription preferences at any time using the links at the bottom of the email.",
        },
      },
    },
    descriptionText: {
      control: "text",
      table: {
        defaultValue: {
          summary:
            "Stay connected with the latest research news from NYPL, including information about our events, programs, exhibitions, and collections.",
        },
      },
    },
    formHelperText: {
      control: "text",
    },
    newsletterSignupType: {
      control: "select",
      table: {
        defaultValue: {
          summary: "whatsOn",
        },
      },
    },
    view: {
      control: "select",
      table: {
        defaultValue: {
          summary: "form",
        },
      },
    },
    title: {
      control: "text",
      table: { defaultValue: { summary: "Sign Up for Our Newsletter!" } },
    },
  },
};

export default meta;
type Story = StoryObj<typeof NewsletterSignup>;

const NewsletterSignupWithControls = (args) => {
  const [view, setView] = useStateWithDependencies(args.view);

  function handleSubmit(event: React.FormEvent<any>): void {
    event.preventDefault();

    setView("submitting");

    // Add short delay to better show the state changes.
    setTimeout(() => {
      setView("confirmation");
    }, 4000);
  }

  return (
    <NewsletterSignup
      {...args} // @todo All the same values below are already contained in this ...args array. But the ones below get to "win." I dunno why. Cuz they come after?
      onSubmit={handleSubmit}
      view={view}
      // isInvalidEmail={isInvalidEmail}
      // confirmationText={confirmationText}
    />
  );
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
      "Fantastic! You're all set. Check the console for the data you submitted.",
    descriptionText:
      "Stay connected with the latest research news from NYPL, including information about our events, programs, exhibitions, and collections.",
    formHelperText: "You can do this.",
    hiddenFields: { hiddenFields },
    id: undefined,
    isInvalidEmail: false,
    newsletterSignupType: "whatsOn",
    onSubmit: undefined,
    title: "Sign Up for Our Newsletter",
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
