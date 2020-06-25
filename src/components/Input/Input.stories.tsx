import * as React from "react";

import Input from "./Input";
import { InputTypes } from "./InputTypes";
import Label from "../Label/Label";
import HelperErrorText from "../HelperErrorText/HelperErrorText";
import { text, boolean, select } from "@storybook/addon-knobs";

export default {
    title: "Input",
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
                {text("Select Label", "Choose your islander name: ")}
            </Label>
        )}
        <Input
            id="inputID"
            ariaLabel="Input Label"
            helperTextId={"helperText"}
            required={boolean("Input Required", false)}
            placeholder={text("Input Placeholder", "CoolPerson99")}
            type={select("Input Type", InputTypes, InputTypes.text)}
        ></Input>
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
                    "Once you pick a name for your islander it cannot be changed, so choose wisely!"
                )}
            </HelperErrorText>
        )}
    </>
);

input.story = {
    name: "Input",
    parameters: {
        design: {
            type: "figma",
            url:
                "https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Master?node-id=11895%3A547",
        },
    },
};

// export const inputRequiredWithError = () => (
//     <Input
//         id="blah"
//         isRequired={true}
//         placeholder={"beep"}
//         // showError={true}
//     ></Input>
// );
