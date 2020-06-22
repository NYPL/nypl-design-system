import * as React from "react";

import Select from "./Select";
import Label from "../Label/Label";
import { action } from "@storybook/addon-actions";
import { text } from "@storybook/addon-knobs";

export default {
    title: "Select",
    component: Select,
};

export const select = () => (
    <Select
        isRequired={false}
        ariaLabel="Select Label"
        options={[
            "Option One",
            "Option Two",
            text("Third Option", "Option Three"),
        ]}
        onSelectBlur={action("blur")}
        onSelectChange={action("changed")}
    />
);

select.story = {
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

export const selectWithLabelandHelperContent = () => (
    <>
        <Label id="label" htmlFor="select">
            Select Label
        </Label>
        <Select
            dropdownId="label"
            isRequired={false}
            ariaLabel="search"
            selectedOption={"two"}
            options={["one", "two"]}
            onSelectBlur={action("blur")}
            onSelectChange={action("changed")}
        />
    </>
);

export const selectWithRequiredField = () => (
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

export const selectWithLeftLabel = () => (
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
