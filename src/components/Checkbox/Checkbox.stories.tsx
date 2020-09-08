import * as React from "react";

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
    isSelected: false,
    labelOptions: {
        id: "label",
        labelContent: <>Label Text</>,
    },
    onChange: () => {},
};

export const CheckboxWithLongLabel = Template.bind({});
CheckboxWithLongLabel.args = {
    checkboxId: "checkbox2",
    isSelected: true,
    labelOptions: {
        id: "label",
        labelContent: <>This is a long label but just another example</>,
    },
    onChange: () => {},
};
