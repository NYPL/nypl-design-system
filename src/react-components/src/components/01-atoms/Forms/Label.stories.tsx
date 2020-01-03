import * as React from "react";

import Label from "./Label";
import { action } from "@storybook/addon-actions";

export default {
  title: "Label",
  component: Label,
};

export const label = () => <Label referenceId="should-never-be-used-alone"><div>Lonely</div></Label>;
