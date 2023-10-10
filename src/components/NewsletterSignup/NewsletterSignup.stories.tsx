import type { Meta, StoryObj } from "@storybook/react";
import { Box, VStack } from "@chakra-ui/react";
import { withDesign } from "storybook-addon-designs";
import NewsletterSignup from "./NewsletterSignup";
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
          Error View
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
    </VStack>
  ),
};
