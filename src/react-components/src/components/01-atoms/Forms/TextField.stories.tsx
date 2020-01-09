import * as React from "react";

import TextField from "./TextField";
import { action } from "@storybook/addon-actions";

export default {
  title: "TextField",
  component: TextField,
};

export const textField = () => <TextField ariaLabel="text field" isRequired={false} onChange={action("changed")}/>;
