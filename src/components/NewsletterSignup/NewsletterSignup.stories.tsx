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
    confirmationText: {
      control: "text",
      table: {
        defaultValue: {
          summary:
            "Thank you! You have successfully subscribed to our email updates! You can update your email subscription " +
            "preferences at any time using the links at the bottom of the email.",
        },
      },
    },
    descriptionText: {
      control: "text",
      table: {
        defaultValue: {
          summary:
            "Stay connected with the latest research news from NYPL, including information about our events, programs, " +
            "exhibitions, and collections.",
        },
      },
    },
    formHelperText: {
      control: "text",
    },
    id: { control: false },
    newsletterSignupType: {
      control: "select",
      table: {
        defaultValue: {
          summary: "whatsOn",
        },
      },
    },
    onChange: { control: false },
    onSubmit: { control: false },
    title: {
      control: "text",
      table: { defaultValue: { summary: "Sign Up for Our Newsletter!" } },
    },
    valueEmail: { control: false },
    view: {
      control: "select",
      table: {
        defaultValue: {
          summary: "form",
        },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof NewsletterSignup>;

const NewsletterSignupWithControls = (args) => {
  const [view, setView] = useStateWithDependencies(args.view);
  const [isInvalidEmail, setIsInvalidEmail] = useStateWithDependencies(
    args.isInvalidEmail
  );

  function handleSubmit(event): void {
    event.preventDefault();
    setView("submitting");
    const userEmail = event.target.email.value;
    switch (userEmail) {
      case "error@nypl.org":
        setView("error");
        break;
      case "bad@nypl.org":
        setView("form");
        setIsInvalidEmail(true);
        break;
      default:
        // Add short delay to demonstrate the "submitted" state.
        setTimeout(() => {
          setView("confirmation");
        }, 3000);
    }
    console.log("Submitted email: ", userEmail);
  }

  return (
    <NewsletterSignup
      {...args}
      onSubmit={handleSubmit}
      view={view}
      isInvalidEmail={isInvalidEmail}
    />
  );
};

// Example values.
const title = "The Life-changing Newsletter";
const descriptionText =
  "This bespoke newsletter contains only those things that are critical for YOU to know, but that you either forgot, " +
  "or had not been informed about. IMPORTANT: if you use error@nypl.org as the address, you will get the error screen. " +
  "If you use bad@nypl.org you will get the invalid email screen.";
const confirmationText =
  "Fantastic! You're all set. Check the console for the data you submitted.";
const formHelperText =
  "Now, just put your email in that space up there and push that blue button.";

/**
 * Main Story for the NewsletterSignup component. This must contains the `args`
 * and `parameters` properties in this object.
 */
export const WithControls: Story = {
  args: {
    className: undefined,
    confirmationText, // Shorthand. Value defined above.
    descriptionText,
    emailValue: "",
    formHelperText,
    id: undefined,
    isInvalidEmail: false,
    newsletterSignupType: "whatsOn",
    onChange: undefined,
    onSubmit: undefined,
    title,
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
