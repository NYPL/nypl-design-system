import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Box, VStack } from "@chakra-ui/react";
import { withDesign } from "storybook-addon-designs";
import NewsletterSignup, { NewsletterSignupViewType } from "./NewsletterSignup";
import { sectionTypeArray } from "../../helpers/types";
import Heading from "../Heading/Heading";

const meta: Meta<typeof NewsletterSignup> = {
  title: "Components/Form Elements/NewsletterSignup",
  component: NewsletterSignup,
  decorators: [withDesign],
  parameters: {
    jest: ["NewsletterSignup.test.tsx"],
  },
  argTypes: {
    className: { control: false },
    confirmationHeading: {
      control: "text",
    },
    confirmationText: {
      control: "text",
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
    errorHeading: {
      control: "text",
      table: {
        defaultValue: {
          summary: "Oops! Something went wrong.",
        },
      },
    },
    errorText: {
      control: "text",
    },
    formHelperText: {
      control: "text",
    },
    id: { control: false },
    newsletterSignupType: {
      control: "select",
      options: sectionTypeArray,
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
      table: {
        defaultValue: {
          summary: "Sign Up for Our Newsletter!",
        },
      },
    },
    valueEmail: { control: false },
    view: {
      control: "select",
      options: ["form", "submitting", "confirmation", "error"],
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

/**
 * Main Story for the NewsletterSignup component. This must contains the `args`
 * and `parameters` properties in this object.
 */
export const WithControls: Story = {
  args: {
    className: undefined,
    confirmationHeading: "Thank you for signing up!",
    confirmationText:
      "You can update your email subscription preferences at any time using the links at the bottom of the email.",
    descriptionText: undefined,
    errorHeading: undefined,
    errorText: undefined,
    formHelperText: undefined,
    id: undefined,
    isInvalidEmail: false,
    newsletterSignupType: undefined,
    onChange: undefined,
    onSubmit: undefined,
    title: undefined,
    valueEmail: undefined,
    view: undefined,
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Main?node-id=80849%3A174194&mode=dev",
    },
    jest: "NewsletterSignup.test.tsx",
  },
  render: (args) => <NewsletterSignup {...args} />,
};
let counter = 0;

function NewsletterSignupOnSubmitExampleComponent() {
  const [view, setView]: [
    NewsletterSignupViewType,
    React.Dispatch<React.SetStateAction<NewsletterSignupViewType>>
  ] = React.useState("form");
  const [inputVal, setInputVal] = React.useState("");

  const changeView = () => {
    counter++;
    setView(counter === 1 ? "confirmation" : counter === 2 ? "error" : "form");
    setTimeout(() => {
      setView("form");
      setInputVal("");
    }, 2000);
  };

  React.useEffect(() => {
    if (counter === 3) counter = 0;
  }, [counter]);

  const handleChange = (event) => {
    console.log(`onChange Email Input value: ${event.target.value}`);
    setInputVal(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setView("submitting");
    console.log(`onSubmit Email Input value: ${event.target.email.value}`);
    setTimeout(changeView, 2000);
  };

  return (
    <NewsletterSignup
      id="interactive"
      view={view}
      isInvalidEmail={counter === 3}
      valueEmail={inputVal}
      onChange={handleChange}
      onSubmit={handleSubmit}
      confirmationHeading="Thank you for signing up!"
      confirmationText="You can update your email subscription preferences at any time using the links at the bottom of the email."
    />
  );
}

export const NewsletterSignupOnSubmitExample: Story = {
  render: () => <NewsletterSignupOnSubmitExampleComponent />,
  name: "Interactive Example",
};

export const DescriptionUsingJSXElements: Story = {
  render: () => (
    <NewsletterSignup
      id="jsx-description-text"
      view="form"
      onChange={() => {}}
      onSubmit={() => {}}
      descriptionText={
        <div>
          If the description text needs to have <i>special</i> styling or needs
          to have a <a href="https://corgiorgy.com/">nested link</a>
        </div>
      }
      confirmationHeading="Thank you for signing up!"
      confirmationText="You can update your email subscription preferences at any time using the links at the bottom of the email."
    />
  ),
};

export const ComponentStates: Story = {
  render: () => (
    <VStack align="stretch" spacing="l">
      <Box>
        <Heading level="h3" size="heading6">
          Invalid Email
        </Heading>
        <NewsletterSignup
          id="invalid-email"
          isInvalidEmail
          view="form"
          onChange={() => {}}
          onSubmit={() => {}}
          confirmationHeading="Thank you for signing up!"
          confirmationText="You can update your email subscription preferences at any time using the links at the bottom of the email."
        />
      </Box>
      <Box>
        <Heading level="h3" size="heading6">
          Submitting View / Disabled
        </Heading>
        <NewsletterSignup
          id="submitting-view"
          view="submitting"
          onChange={() => {}}
          onSubmit={() => {}}
          confirmationHeading="Thank you for signing up!"
          confirmationText="You can update your email subscription preferences at any time using the links at the bottom of the email."
        />
      </Box>
      <Box>
        <Heading level="h3" size="heading6">
          Confirmation View
        </Heading>
        <NewsletterSignup
          id="confirmation-view"
          view="confirmation"
          onChange={() => {}}
          onSubmit={() => {}}
          confirmationHeading="Thank you for signing up!"
          confirmationText="You can update your email subscription preferences at any time using the links at the bottom of the email."
        />
      </Box>
      <Box>
        <Heading level="h3" size="heading6">
          Default Error View
        </Heading>
        <NewsletterSignup
          id="error-view"
          view="error"
          onChange={() => {}}
          onSubmit={() => {}}
          confirmationHeading="Thank you for signing up!"
          confirmationText="You can update your email subscription preferences at any time using the links at the bottom of the email."
        />
      </Box>
      <Box>
        <Heading level="h3" size="heading6">
          Error View with Custom Error Message
        </Heading>
        <NewsletterSignup
          id="error-view"
          view="error"
          onChange={() => {}}
          onSubmit={() => {}}
          confirmationHeading="Thank you for signing up!"
          confirmationText="You can update your email subscription preferences at any time using the links at the bottom of the email."
          errorHeading="An error has occurred."
          errorText={
            <div>
              Please refresh this page and try again. If this error persists,
              <a href="mailto:enews@nypl.org?subject=Please re-activate my e-mail address">
                contact our e-mail team
              </a>
              .
            </div>
          }
        />
      </Box>
    </VStack>
  ),
};
