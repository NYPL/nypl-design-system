//import * as React from "react";
import React, { useState } from "react";
import Checkbox, { CheckboxProps } from "./Checkbox";
import { Story } from "@storybook/react/types-6-0";

export default {
    title: "Checkbox",
    component: Checkbox,
};

const Template: Story<CheckboxProps> = (args) => <Checkbox {...args} />;

export const BasicCheckbox = Template.bind({});
BasicCheckbox.args = {
    checkboxId: "checkbox",
    defaultChecked: false,
    labelOptions: {
        id: "label",
        labelContent: <>This is a basic uncontrolled checkbox.</>,
    },
    onChange: () => {},
};

// @TODO Add properties to "controls"
export const ControlledCheckbox = () => {
    const [isChecked, setChecked] = useState<boolean>(false);

    const onChange = (event) => {
        setChecked(!isChecked);
    };

    return (
        <Checkbox
            checkboxId={"checkbox"}
            checked={isChecked}
            labelOptions={{
                id: "label",
                labelContent: (
                    <>This is a basic controlled checkbox. using state.</>
                ),
            }}
            onChange={onChange}
        />
    );
};

export const CheckboxWithLongLabel = Template.bind({});
CheckboxWithLongLabel.args = {
    checkboxId: "checkbox2",
    defaultChecked: true,
    labelOptions: {
        id: "label",
        labelContent: <>This is a long label but just another example</>,
    },
    onChange: () => {},
};
