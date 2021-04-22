import React from "react";

import Input from "./Input";
import { InputTypes } from "./InputTypes";
import Label from "../Label/Label";
import Button from "../Button/Button";
import { ButtonTypes } from "../Button/ButtonTypes";
import HelperErrorText from "../HelperErrorText/HelperErrorText";
// eslint-disable-next-line id-blacklist
import { text, boolean, select, number } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import { getCategory } from "../../utils/componentCategories";

export default {
  title: getCategory("Input"),
  component: Input,
};

let showLabel, showHelperText;

export const input = () => (
  <>
    {boolean("Show Label", true) ? (showLabel = true) : (showLabel = false)}
    {showLabel && (
      <Label
        htmlFor="inputID"
        optReqFlag={select(
          "Optional/Required Flag",
          ["Required", "Optional", ""],
          "Required"
        )}
        id={"label"}
      >
        {text("Input Label", "Choose your islander name: ")}
      </Label>
    )}
    <Input
      id="inputID"
      ariaLabel="Input Label"
      ariaLabelledBy={"helperText"}
      required={boolean("Input Required", false)}
      placeholder={text("Input Placeholder", "CoolPerson99")}
      type={select("Input Type", InputTypes, InputTypes.text)}
      disabled={boolean("Disabled", false)}
    ></Input>
    {boolean("Show Helper Text", true)
      ? (showHelperText = true)
      : (showHelperText = false)}
    {showHelperText && (
      <HelperErrorText
        isError={boolean("Helper Text Errored", false)}
        id={"helperText"}
      >
        {text(
          "Helper Text Content",
          "Once you pick a name for your islander it cannot be changed, so choose wisely!"
        )}
      </HelperErrorText>
    )}
  </>
);

input.storyName = "Input";
input.parameters = {
  design: {
    type: "figma",
    url:
      "https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Master?node-id=11895%3A547",
  },
};

let groupErrored;

export const inputGroup = () => (
  <fieldset className="fieldset">
    {boolean("Input Group Errored", false)
      ? (groupErrored = true)
      : (groupErrored = false)}
    <legend className="legend">
      {text("Input Group Label", "Construction Time Request Form: ")}
    </legend>
    <div className="input-group">
      <div style={{ flex: "1" }}>
        <Label htmlFor="input1" id={"label1"}>
          From
        </Label>
        <Input
          id="input1"
          ariaLabelledBy={
            groupErrored
              ? "helperText1 sharedHelperText label1"
              : "helperText1 label1"
          }
          errored={groupErrored ? true : false}
          required={true}
          type={InputTypes.text}
        ></Input>
        <HelperErrorText isError={false} id={"helperText1"}>
          {text("Input 1 Helper Text", "E.g., 10am")}
        </HelperErrorText>
      </div>

      <div style={{ flex: "1" }}>
        <Label htmlFor="input2" id={"label2"}>
          To
        </Label>
        <Input
          id="input2"
          ariaLabelledBy={
            groupErrored
              ? "helperText2 sharedHelperText label2"
              : "helperText2 label2"
          }
          errored={groupErrored ? true : false}
          required={true}
          type={InputTypes.text}
        ></Input>
        <HelperErrorText isError={false} id={"helperText2"}>
          {text("Input 2 Helper Text", "E.g., 11am")}
        </HelperErrorText>
      </div>
    </div>
    {groupErrored && (
      <HelperErrorText isError={true} id={"sharedHelperText"}>
        {text(
          "Additional Error Text",
          "Sorry villager! Those times are not available right now."
        )}
      </HelperErrorText>
    )}
    <Button
      onClick={action("clicked")}
      id="button"
      buttonType={ButtonTypes.Primary}
      type="submit"
    >
      Apply
    </Button>
  </fieldset>
);

inputGroup.storyName = "Input Group";
inputGroup.parameters = {
  design: {
    type: "figma",
    url:
      "https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Master?node-id=11895%3A547",
  },
};

export const inputAttributes = () => (
  <>
    <Label htmlFor="inputID-attrs" optReqFlag={"Required"} id={"label"}>
      Choose your islander name:
    </Label>
    <Input
      id="inputID-attrs"
      ariaLabel="Input Label"
      ariaLabelledBy="helperText-attrs"
      required={false}
      placeholder={"CoolPerson42"}
      type={InputTypes.text}
      attributes={{
        onBlur: action("onBlur"),
        onChange: action("onChange"),
        maxLength: number("maxLength", 10),
        tabIndex: number("tabIndex", 0),
      }}
    ></Input>
    <HelperErrorText isError={false} id="helperText-attrs">
      {"Change the max length for 'text' input as an example! And note " +
        "the actions being called for the passed object in the `attributes` props."}
    </HelperErrorText>
  </>
);
