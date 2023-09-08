import type { Meta, StoryObj } from "@storybook/react";
// import { useState } from "react";
import { withDesign } from "storybook-addon-designs";

import EmailSubscription from "./EmailSubscription"; // emailSubscriptionViewTypeArray,
// import useStateWithDependencies from "../../hooks/useStateWithDependencies";

const meta: Meta<typeof EmailSubscription> = {
  title: "Components/Form Elements/EmailSubscription",
  component: EmailSubscription,
  decorators: [withDesign],
};

export default meta;
type Story = StoryObj<typeof EmailSubscription>;

const EmailSubscriptionWithControls = (args) => {
  // This hook is used because the `view` prop can be controlled
  // by Storybook controls.
  // const [internalView, setInternalView] = useStateWithDependencies(args.view);
  // const [count, setCount] = useState(0);
  // // Example hidden field values.
  // const hiddenFields = {
  //   "hidden-field-1": "hidden-field-value-1",
  //   "hidden-field-2": "hidden-field-value-2",
  // };
  // // For the purposes of the Storybook example, the confirmation and
  // // error screens display on alternate form submissions.
  // const onSubmit = (values) => {
  //   setCount((prev) => prev + 1);
  //   setInternalView(count % 2 === 0 ? "confirmation" : "error");
  //   console.log("Submitted values:", values);
  // };
  return (
    <EmailSubscription
      {...args}
      // hiddenFields={hiddenFields}
      // notificationText={
      //   <span>
      //     <b>Call Number:</b> JFE 95-8555
      //   </span>
      // }
      // onSubmit={onSubmit}
      // view={internalView}
    />
  );
};

/**
 * Main Story for the EmailSubscription component. This must contains the `args`
 * and `parameters` properties in this object.
 */
export const WithControls: Story = {
  args: {
    id: "myID",
    heading: "tester",
    headingColor: "#BDBDBD",
    bgColor: "section.research.primary",
    salesforceSourceCode: "12345",
  },
  render: (args) => <EmailSubscriptionWithControls {...args} />,
};
