import * as React from "react";

import Select from "./Select";
import Label from "../Label/Label";
import { action } from "@storybook/addon-actions";
import { text, boolean, select } from "@storybook/addon-knobs";
import HelperErrorText from "../HelperErrorText/HelperErrorText";

export default {
    title: "Select",
    component: Select,
};

let optionsGroup = [
    text("Option One", "Apples"),
    text("Option Two", "Pears"),
    text("Option Three", "Oranges"),
    text("Option Four", "Peaches"),
    text("Option Five", "Coconuts"),
];

export const selectWithoutLabel = () => (
    <Select
        isRequired={false}
        ariaLabel="Select Label"
        options={optionsGroup}
        selectedOption={select(
            "Selected Option",
            optionsGroup,
            optionsGroup[0]
        )}
        onSelectBlur={action("blur")}
        onSelectChange={action("changed")}
        modifiers={boolean("Errored", false) ? ["error"] : [""]}
        disabled={boolean("Disabled", false)}
    />
);

selectWithoutLabel.story = {
    name: "Select",
    parameters: {
        design: {
            type: "figma",
            url:
                "https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Master?node-id=11895%3A549",
        },
    },
};

export const selectWithSelectedOption = () => (
    <Select
        isRequired={false}
        ariaLabel="Select Label"
        selectedOption={"Option Two"}
        options={["Option One", "Option Two"]}
        onSelectBlur={action("blur")}
        onSelectChange={action("changed")}
    />
);

export const selectWithLabel = () => (
    <>
        <Label htmlFor="select">Select Label</Label>
        <Select
            dropdownId="select"
            isRequired={false}
            options={["Option One", "Option Two"]}
            onSelectBlur={action("blur")}
            onSelectChange={action("changed")}
        />
    </>
);

export const selectWithLabelAndRequiredFlag = () => (
    <>
        <Label htmlFor="select" requiredHelper={true}>
            Select Label
        </Label>
        <Select
            dropdownId="select"
            isRequired={false}
            options={["Option One", "Option Two"]}
            onSelectBlur={action("blur")}
            onSelectChange={action("changed")}
        />
    </>
);

export const selectWithLabelAndHelperContent = () => (
    <>
        <Label id="label" htmlFor="select" requiredHelper={false}>
            Select Label
        </Label>
        <Select
            dropdownId="label"
            isRequired={true}
            ariaLabel="search"
            labelId={"label"}
            helperTextId={"helperText"}
            options={["Option One", "Option Two"]}
            onSelectBlur={action("blur")}
            onSelectChange={action("changed")}
        />
        <HelperErrorText
            isError={boolean("Is Errored", false)}
            id={"helperText"}
        >
            {text("Helper Text Content", "Helper Text")}
        </HelperErrorText>
    </>
);

export const selectWithLeftLabel = () => (
    <>
        <Label id="label" htmlFor="select" requiredHelper={false}>
            Select Label
        </Label>
        <Select
            dropdownId="label"
            isRequired={true}
            ariaLabel="search"
            labelId={"label"}
            options={["Option One", "Option Two"]}
            onSelectBlur={action("blur")}
            onSelectChange={action("changed")}
        />
    </>
);

export const selectWithError = () => (
    <Select
        dropdownId="baaah"
        isRequired={false}
        ariaLabel="search"
        selectedOption={"two"}
        options={["one", "two"]}
        onSelectBlur={action("blur")}
        onSelectChange={action("changed")}
    />
);

export const selectWithLeftLabelAndError = () => (
    <Select
        dropdownId="baaah"
        isRequired={false}
        ariaLabel="search"
        selectedOption={"two"}
        options={["one", "two"]}
        onSelectBlur={action("blur")}
        onSelectChange={action("changed")}
    />
);

export const selectWithNoLabelAndError = () => (
    <Select
        dropdownId="baaah"
        isRequired={false}
        ariaLabel="search"
        selectedOption={"two"}
        options={["one", "two"]}
        onSelectBlur={action("blur")}
        onSelectChange={action("changed")}
    />
);
