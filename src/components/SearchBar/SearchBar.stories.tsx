import * as React from "react";

import SearchBar from "./SearchBar";
import Select from "../Select/Select";
import HelperErrorText from "../HelperErrorText/HelperErrorText";
import { IconRotationTypes, IconNames } from "../Icons/IconTypes";
import Button from "../Button/Button";
import { ButtonTypes, ButtonIconPositions } from "../Button/ButtonTypes";
import Input from "../Input/Input";
import { InputTypes } from "../Input/InputTypes";
import { action } from "@storybook/addon-actions";
import { text, boolean, select } from "@storybook/addon-knobs";

export default {
    title: "SearchBar",
    component: SearchBar,
};

let optionsGroup = [
    "Art",
    "Bushes",
    "Clothing",
    "DIY Recipes",
    "Flowers",
    "Fossils",
    "Fruits",
    "Furniture",
    "Materials",
    "NPC",
    "Photos",
    "Posters",
    "Services",
    "Songs",
    "Tools",
    "Villagers",
];

let showLabel, showHelperText, formErrored, formDisabled;

export const searchBar = () => (
    <>
        {boolean("Form Errored", false)
            ? (formErrored = true)
            : (formErrored = false)}
        {boolean("Form Disabled", false)
            ? (formDisabled = true)
            : (formDisabled = false)}
        <SearchBar
            searchSubmitHandler={action("clicked")}
            ariaLabel={"New Horizons Item Search"}
        >
            <Select
                id={"select"}
                isRequired={false}
                ariaLabel="Select Label"
                labelId={"label"}
                helperTextId={"helperText"}
                onBlur={action("blur")}
                onChange={action("changed")}
                modifiers={formErrored ? ["error"] : null}
                disabled={formDisabled}
            >
                {optionsGroup.map((nhOption) => (
                    <option aria-select={false}>{nhOption}</option>
                ))}
            </Select>
            <Input
                id="input1"
                labelId="label1"
                helperTextId={"beep"}
                errored={formErrored ? true : false}
                placeholder={"Item Search"}
                required={true}
                type={InputTypes.text}
            ></Input>
            <Button
                onClick={action("clicked")}
                id="button"
                buttonType={ButtonTypes.Primary}
                type="submit"
                iconPosition={ButtonIconPositions.Left}
                iconName={IconNames.search_small}
                iconDecorative={true}
            >
                Search
            </Button>
        </SearchBar>
        <HelperErrorText id={"2"} isError={formErrored ? true : false}>
            {formErrored
                ? "Sorry, we can't find that item!"
                : "Search for items in Animal Crossing New Horizons"}
        </HelperErrorText>
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
