import * as React from "react";

import SearchBar from "./SearchBar";
import Select from "../Select/Select";
import Button from "../Button/Button";
import { ButtonTypes } from "../Button/ButtonTypes";
import Input from "../Input/Input";
import { InputTypes } from "../Input/InputTypes";
import { action } from "@storybook/addon-actions";
import { text, boolean, select } from "@storybook/addon-knobs";

export default {
    title: "SearchBar",
    component: SearchBar,
};

let optionsGroup = ["Apples", "Pears", "Oranges", "Peaches", "Coconuts"];

let showLabel, showHelperText;

export const searchBar = () => (
    <>
        <Select
            id={"select"}
            isRequired={false}
            ariaLabel="Select Label"
            labelId={"label"}
            helperTextId={"helperText"}
            selectedOption={select(
                "Initial Selected Option",
                optionsGroup,
                optionsGroup[3]
            )}
            onBlur={action("blur")}
            onChange={action("changed")}
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
        <Input
            id="input1"
            labelId="label1"
            helperTextId={"beep"}
            errored={false}
            required={true}
            type={InputTypes.text}
        ></Input>
    </>
);

searchBar.story = {
    name: "Search Bar",
    parameters: {
        design: {
            type: "figma",
            url:
                "https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Master?node-id=11689%3A423",
        },
    },
};

export const searchWithParams = () => (
    <SearchBar
        searchBarId="searchBarId"
        buttonId="searchButtonId"
        searchBarAriaLabel="search"
        dropdownId="dropdownId"
        dropdownAriaLabel="filter"
        textFieldAriaLabel="Text Field aria-label"
        options={
            <>
                <option aria-selected={true}>Keyword</option>
                <option aria-selected={false}>Other Keyword</option>
            </>
        }
        searchSubmitHandler={action("searched")}
        selectChangeHandler={action("selectChanged")}
        selectBlurHandler={action("selectChanged")}
    />
);

export const searchWithNoParams = () => (
    <SearchBar
        searchBarId="searchBarId"
        buttonId="searchButtonId"
        searchBarAriaLabel="search"
        textFieldAriaLabel="Text Field aria-label"
        searchSubmitHandler={action("searched")}
    />
);

export const searchWithFormError = () => (
    <SearchBar
        searchBarId="searchBarId"
        searchBarAriaLabel="search"
        buttonId="searchButtonId"
        textFieldAriaLabel="Text Field aria-label"
        searchSubmitHandler={action("searched")}
        hasError={true}
        errorMessage={"Error text"}
    />
);

export const searchFormWithParamsAndError = () => (
    <SearchBar
        searchBarId="searchBarId"
        buttonId="searchButtonId"
        textFieldAriaLabel="Text Field aria-label"
        searchBarAriaLabel="search"
        dropdownId="dropdownId"
        dropdownAriaLabel="filter"
        options={
            <>
                <option aria-selected={true}>Keyword</option>
                <option aria-selected={false}>Other Keyword</option>
            </>
        }
        searchSubmitHandler={action("searched")}
        selectChangeHandler={action("selectChanged")}
        selectBlurHandler={action("selectChanged")}
        hasError={true}
        errorMessage={"Error text"}
    />
);

export const searchFormResearchNowVariantError = () => (
    <SearchBar
        searchBarId="searchBarId"
        searchBarAriaLabel="search"
        buttonId="searchButtonId"
        textFieldAriaLabel="Text Field aria-label"
        searchSubmitHandler={action("searched")}
        helperVariant="ResearchNow"
        hasError={true}
        errorMessage={"Error text"}
    />
);
