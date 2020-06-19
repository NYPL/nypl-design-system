import * as React from "react";

import Select from "./Select";
import { action } from "@storybook/addon-actions";
import { text } from "@storybook/addon-knobs";

export default {
    title: "Select",
    component: Select,
};

export const select = () => (
    <Select
        dropdownId="baaah"
        isRequired={false}
        ariaLabel="search"
        options={["one", "two", text("third option", "three")]}
        onSelectBlur={action("blur")}
        onSelectChange={action("changed")}
    />
);

export const selectWithSelectedOption = () => (
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

export const selectWithLabel = () => (
    <>
        <label id="#1" for="baaah">
            Select Label
        </label>
        <Select
            dropdownId="baaah"
            isRequired={false}
            ariaLabel="search"
            selectedOption={"two"}
            options={["one", "two"]}
            onSelectBlur={action("blur")}
            onSelectChange={action("changed")}
        />
    </>
);

export const selectWithLabelandHelperContent = () => (
    <>
        <label>Select Label</label>
        <Select
            dropdownId="baaah"
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
