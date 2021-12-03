import React from "react";

import Input from "./Input";
import { InputTypes } from "./InputTypes";
import Label from "../Label/Label";
import Button from "../Button/Button";
import { ButtonTypes } from "../Button/ButtonTypes";
import HelperErrorText from "../HelperErrorText/HelperErrorText";
import { action } from "@storybook/addon-actions";
import { getCategory } from "../../utils/componentCategories";

export default {
  title: getCategory("Input"),
  component: Input,
};

export const input = () => (
  <>
    <Label htmlFor="inputID" optReqFlag="Required" id={"label"}>
      Choose your islander name:
    </Label>
    <Input
      id="inputID"
      ariaLabel="Input Label"
      ariaLabelledBy={"helperText"}
      required={false}
      placeholder="CoolPerson99"
      type={InputTypes.text}
      disabled={false}
    ></Input>
    <HelperErrorText isInvalid={false} id={"helperText"}>
      Once you pick a name for your islander it cannot be changed, so choose
      wisely!
    </HelperErrorText>
  </>
);

input.storyName = "Input";
input.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Master?node-id=11895%3A547",
  },
  jest: ["Input.test.tsx"],
};

let groupErrored;

export const inputGroup = () => (
  <fieldset className="fieldset">
    <legend className="legend">Construction Time Request Form:</legend>
    <div className="input-group">
      <div style={{ flex: "1" }}>
        <Label htmlFor="input1" id={"label1"}>
          From
        </Label>
        <Input
          id="input1"
          ariaLabelledBy="helperText1 sharedHelperText label1"
          errored={groupErrored ? true : false}
          required={true}
          type={InputTypes.text}
        ></Input>
        <HelperErrorText isInvalid={false} id={"helperText1"}>
          "E.g., 10am"
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
          errored={false}
          required={true}
          type={InputTypes.text}
        ></Input>
        <HelperErrorText isInvalid={false} id={"helperText2"}>
          E.g., 11am
        </HelperErrorText>
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
    url: "https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Master?node-id=11895%3A547",
  },
  jest: ["Input.test.tsx"],
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
        maxLength: 10,
        tabIndex: 0,
      }}
    ></Input>
    <HelperErrorText isInvalid={false} id="helperText-attrs">
      {"Change the max length for 'text' input as an example! And note " +
        "the actions being called for the passed object in the `attributes` props."}
    </HelperErrorText>
  </>
);
