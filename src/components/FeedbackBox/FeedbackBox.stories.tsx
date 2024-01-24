import { Box } from "@chakra-ui/react";
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { withDesign } from "storybook-addon-designs";

import FeedbackBox, { feedbackBoxViewTypeArray } from "./FeedbackBox";
import Heading from "../Heading/Heading";
import useStateWithDependencies from "../../hooks/useStateWithDependencies";

const meta: Meta<typeof FeedbackBox> = {
  title: "Components/Form Elements/FeedbackBox",
  component: FeedbackBox,
  decorators: [withDesign],
  parameters: {
    jest: ["FeedbackBox.test.tsx"],
  },
  argTypes: {
    className: { control: false },
    hiddenFields: { control: false },
    id: { control: false },
    isInvalidComment: { table: { defaultValue: { summary: false } } },
    isInvalidEmail: { table: { defaultValue: { summary: false } } },
    isOpen: { table: { disable: true } },
    notificationText: { control: false },
    onClose: { table: { disable: true } },
    onOpen: { table: { disable: true } },
    onSubmit: { control: false },
    showCategoryField: { table: { defaultValue: { summary: false } } },
    showEmailField: { table: { defaultValue: { summary: true } } },
    view: {
      control: { type: "select" },
      options: feedbackBoxViewTypeArray,
      table: { defaultValue: { summary: "form" } },
    },
  },
};

export default meta;
type Story = StoryObj<typeof FeedbackBox>;

const FeedbackBoxWithControls = (args) => {
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
    <Box maxHeight="200px" overflowY="auto">
      <Box height="400px" bgColor="ui.white" width="100%">
        <Heading level="h3" m="s">
          ui.white
        </Heading>
      </Box>
      <Box height="400px" bgColor="ui.bg.default" width="100%">
        <Heading level="h3" m="s">
          ui.bg.default
        </Heading>
      </Box>
      <Box height="400px" bgColor="dark.ui.bg.default" width="100%">
        <Heading level="h3" m="s" color="ui.white">
          dark.ui.bg.default
        </Heading>
      </Box>
      <Box height="400px" bgColor="dark.ui.bg.page" width="100%">
        <Heading level="h3" m="s" color="ui.white">
          dark.ui.bg.page
        </Heading>
      </Box>
      <FeedbackBox
        {...args}
        hiddenFields={hiddenFields}
        notificationText={
          <span>
            <b>Call Number:</b> JFE 95-8555
          </span>
        }
        onSubmit={onSubmit}
        view={internalView}
        sx={{
          "> button": {
            mr: "20px",
            mb: "20px",
          },
        }}
      />
    </Box>
  );
};

/**
 * Main Story for the FeedbackBox component. This must contains the `args`
 * and `parameters` properties in this object.
 */
export const WithControls: Story = {
  args: {
    className: undefined,
    confirmationText: "",
    descriptionText: "Please share your question or feedback.",
    hiddenFields: undefined,
    id: "feedbackBox-id",
    isInvalidComment: false,
    isInvalidEmail: false,
    isOpen: undefined,
    notificationText: undefined,
    onClose: undefined,
    onOpen: undefined,
    onSubmit: undefined,
    showCategoryField: false,
    showEmailField: false,
    title: "Help and Feedback",
    view: "form",
  },
  parameters: {
    design: {
      type: "figma",
      url: "",
    },
    jest: "FeedbackBox.test.tsx",
  },
  render: (args) => <FeedbackBoxWithControls {...args} />,
};
