import React, { useState } from "react";

import Select from "./Select";
import Label from "../Label/Label";
import { action } from "@storybook/addon-actions";
import { text, boolean, select } from "@storybook/addon-knobs";
import HelperErrorText from "../HelperErrorText/HelperErrorText";
import { getCategory } from "../../utils/componentCategories";

export default {
  title: getCategory("Select"),
  component: Select,
};

const optionsGroup = ["Apples", "Pears", "Oranges", "Peaches", "Coconuts"];

let showLabel, showHelperText;

export const SelectWithOptionalLabel = () => {
  const [selectedOption, setSelectedOption] = useState(
    select("Initial Selected Option", optionsGroup, optionsGroup[3])
  );

  const onChange = e => setSelectedOption(e.target.value);
  return (
    <>
      {boolean("Show Label", true) ? (showLabel = true) : (showLabel = false)}
      {showLabel && (
        <Label
          htmlFor="select"
          optReqFlag={select(
            "Optional/Required Flag",
            ["Required", "Optional", ""],
            "Required"
          )}
          id={"label"}
        >
          {text("Select Label", "Fruit on your island: ")}
        </Label>
      )}
      <Select
        name="optionalLabelSelect"
        id={"select"}
        isRequired={false}
        ariaLabel="Select Label"
        labelId={"label"}
        helperTextId={"helperText"}
        selectedOption={selectedOption}
        onBlur={action("blur")}
        onChange={e => onChange(e)}
        modifiers={boolean("Errored", false) ? ["error"] : null}
        disabled={boolean("Disabled", false)}
      >
        <option aria-selected={true}>
          {text("Option One", optionsGroup[0])}
        </option>
        <option aria-selected={false}>
          {text("Option Two", optionsGroup[1])}
        </option>
        <option aria-selected={false}>
          {text("Option Three", optionsGroup[2])}
        </option>
        <option aria-selected={false}>
          {text("Option Four", optionsGroup[3])}
        </option>
        <option aria-selected={false}>
          {text("Option Five", optionsGroup[4])}
        </option>
      </Select>
      {boolean("Show Helper Text", true)
        ? (showHelperText = true)
        : (showHelperText = false)}
      {showHelperText && (
        <HelperErrorText
          isError={boolean("Is Errored", false)}
          id={"helperText"}
        >
          {text(
            "Helper Text Content",
            "Once you pick a fruit for your island it cannot be changed, so choose wisely!"
          )}
        </HelperErrorText>
      )}
    </>
  );
};

SelectWithOptionalLabel.storyName = "Select";
SelectWithOptionalLabel.parameters = {
  design: {
    type: "figma",
    url:
      "https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Master?node-id=11895%3A549",
  },
};
