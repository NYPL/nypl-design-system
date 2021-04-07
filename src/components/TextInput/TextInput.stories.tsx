import React from "react";

import TextInput from "./TextInput";
import { TextInputTypes } from "./TextInputTypes";
// import Label from "../Label/Label";
import Button from "../Button/Button";
import { ButtonTypes } from "../Button/ButtonTypes";
import HelperErrorText from "../HelperErrorText/HelperErrorText";
// eslint-disable-next-line id-blacklist
import { text, boolean, select, number } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

export default {
  title: "Form Elements/Text Input",
  component: TextInput,
};

// let showLabel, showHelperText;

export const input = () => (
  <>
    <TextInput
      id="inputID"
      type={select("Input Type", TextInputTypes, TextInputTypes.text)}
      label={text("Label", "Choose your islander name: ")}
      labelledBy={"label"}
      required={boolean("Required", false)}
      placeholder={text("Placeholder Text", "CoolPerson99")}
      helperText={text("Helper Text", "This is the default helper text.")}
      errorText={text("Error Text", "There is a problem with this field!")}
      errored={boolean("Errored", false)}
      disabled={boolean("Disabled", false)}
    ></TextInput>
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
        {/* <Label htmlFor="input1" id={"label1"}>
          From
        </Label> */}
        <TextInput
          id="input1"
          label="From"
          labelledBy={
            groupErrored
              ? "helperText1 sharedHelperText label1"
              : "helperText1 label1"
          }
          helperText={text("Input 1 Helper Text", "E.g., 10am")}
          errored={groupErrored ? true : false}
          required={false}
          type={TextInputTypes.text}
        ></TextInput>
        {/* <HelperErrorText isError={false} id={"helperText1"}>
          {text("Input 1 Helper Text", "E.g., 10am")}
        </HelperErrorText> */}
      </div>

      <div style={{ flex: "1" }}>
        {/* <Label htmlFor="input2" id={"label2"}>
          To
        </Label> */}
        <TextInput
          id="input2"
          label="To"
          labelledBy={
            groupErrored
              ? "helperText2 sharedHelperText label2"
              : "helperText2 label2"
          }
          errored={groupErrored ? true : false}
          required={true}
          type={TextInputTypes.text}
        ></TextInput>
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
    {/* <Label htmlFor="inputID-attrs" optReqFlag={"Required"} id={"label"}>
      Choose your islander name:
    </Label> */}
    <TextInput
      id="inputID-attrs"
      label="Choose your islander name:"
      labelledBy="helperText-attrs"
      required={false}
      placeholder={"CoolPerson42"}
      type={TextInputTypes.text}
      // errored={false}
      attributes={{
        onBlur: action("onBlur"),
        onChange: action("onChange"),
        maxLength: number("maxLength", 10),
        tabIndex: number("tabIndex", 0),
      }}
    ></TextInput>
    <HelperErrorText isError={false} id="helperText-attrs">
      {"Change the max length for 'text' input as an example! And note " +
        "the actions being called for the passed object in the `attributes` props."}
    </HelperErrorText>
  </>
);
