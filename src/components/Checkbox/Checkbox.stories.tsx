//import * as React from "react";
import React, { useState } from "react";
import Checkbox, { CheckboxProps } from "./Checkbox";
import { Story } from "@storybook/react/types-6-0";

// Set defaults for the checkbox stories.
export default {
    title: "Checkbox",
    component: Checkbox,
    // Remove some props for all checkbox stories.
    argTypes: {
        checkboxId: {
            table: {
                disable: true,
            },
        },
        onChange: {
            table: {
                disable: true,
            },
        },
        labelOptions: {
            table: {
                disable: true,
            },
        },
    },
};

const Template: Story<CheckboxProps> = (args) => <Checkbox {...args} />;

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
    onChange: () => {},
};

// Uncontrolled checkbox set controls
UncontrolledCheckbox.argTypes = {
    checked: {
        table: {
            disable: true,
        },
    },
};

// Controlled checkbox.
const ControlledCheckboxTemplate: Story<CheckboxProps> = (args) => {
    const [isChecked, setChecked] = useState<boolean>(false);

    const onChange = (event) => {
        setChecked(!isChecked);
    };

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

ControlledCheckbox.args = {
    checked: true,
};

// Controlled checkbox set controls
ControlledCheckbox.argTypes = {
    checked: {
        type: "boolean",
    },
    defaultChecked: {
        table: {
            disable: true,
        },
    },
};
