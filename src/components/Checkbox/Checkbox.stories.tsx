import React, { useEffect, useState } from "react";
import Checkbox, { CheckboxProps } from "./Checkbox";
import { Story } from "@storybook/react/types-6-0";
import { withDesign } from "storybook-addon-designs";

// Set defaults for the checkbox stories.
export default {
  title: "Form Elements/Checkbox",
  component: Checkbox,
  // Remove some props for all checkbox stories.
  argTypes: {
    checkboxId: { table: { disable: true } },
    onChange: { table: { disable: true } },
    labelOptions: { table: { disable: true } },
    defaultChecked: { table: { disable: true } },
  },
  decorators: [withDesign],
};

const Template: Story<CheckboxProps> = args => <Checkbox {...args} />;

// Uncontrolled checkbox.
export const UncontrolledCheckbox = Template.bind({});

// Uncontrolled checkbox set props
UncontrolledCheckbox.args = {
  checkboxId: "checkbox",
  defaultChecked: false,
  labelOptions: {
    id: "label",
    labelContent: <>This is an uncontrolled checkbox.</>,
  },
};

// Remove checked prop from controls as it shouldnt be used for uncontrolled checkbox.
UncontrolledCheckbox.argTypes = {
  checked: { table: { disable: true } },
};

// Controlled checkbox.
const ControlledCheckboxTemplate: Story<CheckboxProps> = args => {
  const [isChecked, setChecked] = useState<boolean>(false);

  const onChange = () => {
    setChecked(!isChecked);
  };

  // Allows storybook controls to toggle checked state.
  useEffect(() => {
    setChecked(args.checked);
  }, [args.checked]);

  return (
    <Checkbox
      {...args}
      checkboxId={"checkbox"}
      checked={isChecked}
      aria-checked={isChecked}
      labelOptions={{
        id: "label",
        labelContent: <>This is a controlled checkbox. using state.</>,
      }}
      onChange={onChange}
    />
  );
};

export const ControlledCheckbox = ControlledCheckboxTemplate.bind({});

// Set controlled checkbox to be checked by default.
ControlledCheckbox.args = {
  checked: true,
};

// Remove controls that are not relevant to controlled checkbox.
ControlledCheckbox.argTypes = {
  defaultChecked: { table: { disable: true } },
};

// Design tab with figma embeds.
UncontrolledCheckbox.parameters = {
  design: {
    type: "figma",
    url:
      "https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Main?node-id=11895%3A658",
  },
};

ControlledCheckbox.parameters = {
  design: {
    type: "figma",
    url:
      "https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Main?node-id=11895%3A658",
  },
};
