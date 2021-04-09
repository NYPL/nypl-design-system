import React from "react";

import TextInput from "./TextInput";
import { TextInputTypes } from "./TextInputTypes";
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
  <form>
    <TextInput
      id="inputID"
      type={select("Input Type", TextInputTypes, TextInputTypes.text)}
      label={text("Label", "What is your favorite color?")}
      labelledBy={"label"}
      required={boolean("Required", true)}
      placeholder={text("Placeholder Text", "e.g. blue, green, etc.")}
      helperText={text("Helper Text", "Choose wisely.")}
      errorText={text("Error Text", "Whaaaaaaa!")}
      errored={boolean("Errored", false)}
      disabled={boolean("Disabled", false)}
      onChange={action("onChange")}
    ></TextInput>
    <Button
      onClick={action("clicked")}
      id="button"
      buttonType={ButtonTypes.Primary}
      type="submit"
    >
      Submit
    </Button>
  </form>
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
        <TextInput
          id="input1"
          label="From"
          labelledBy={
            groupErrored
              ? "helperText1 sharedHelperText label1"
              : "helperText1 label1"
          }
          helperText={text("Input 1 Helper Text", "E.g., 10am")}
          errorText={text("Input 1 Error Text", "Sorry!")}
          errored={groupErrored ? true : false}
          required={true}
          type={TextInputTypes.text}
        ></TextInput>
      </div>

      <div style={{ flex: "1" }}>
        <TextInput
          id="input2"
          label="To"
          labelledBy={
            groupErrored
              ? "helperText2 sharedHelperText label2"
              : "helperText2 label2"
          }
          helperText={text("Input 2 Helper Text", "E.g., 11am")}
          errorText={text("Input 2 Error Text", "Nope!")}
          errored={groupErrored ? true : false}
          required={true}
          type={TextInputTypes.text}
        ></TextInput>
      </div>
    </div>
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
    <TextInput
      id="inputID-attrs"
      label="Choose your islander name:"
      labelledBy="helperText-attrs"
      required={false}
      placeholder={"CoolPerson42"}
      type={TextInputTypes.text}
      attributes={{
        onFocus: action("focus"),
        onBlur: action("blur"),
        onChange: action("onChange"),
        maxLength: number("maxLength", 10),
        tabIndex: number("tabIndex", 0),
        autoFocus: boolean("autoFocus", false),
        pattern: text("pattern", "[a-z0-9]"),
      }}
    ></TextInput>
    <HelperErrorText isError={false} id="helperText-attrs">
      {
        "Use the `attributes` prop to add additional parameters to input fields. Here you can change the maxlength, tabindex, autofocus and pattern for a 'text' input as an example! Additionally, note the onFocus, onBlur and onChange actions being called for the passed object in the `attributes` props."
      }
    </HelperErrorText>
  </>
);
