import * as React from "react";

import Label from "../Label/Label";
import { text, select } from "@storybook/addon-knobs";
import { getCategory } from "../../utils/componentCategories";

export default {
  title: getCategory("Label"),
  component: Label,
};

export const label = () => (
  <div style={{ width: "500px" }}>
    <Label
      htmlFor="some-input-element"
      optReqFlag={select(
        "Optional/Required Flag",
        ["Required", "Optional", ""],
        "Required"
      )}
      id="label"
    >
      {text("Input Label", "A label for a villager.")}
    </Label>
  </div>
);
