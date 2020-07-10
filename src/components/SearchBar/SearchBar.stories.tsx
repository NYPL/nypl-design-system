import * as React from "react";

import SearchBar from "./SearchBar";
import Select from "../Select/Select";
import HelperErrorText from "../HelperErrorText/HelperErrorText";
import { IconRotationTypes, IconNames } from "../Icons/IconTypes";
import Button from "../Button/Button";
import { ButtonTypes, ButtonIconPositions } from "../Button/ButtonTypes";
import Input from "../Input/Input";
import List from "../List/List";
import { ListTypes } from "../List/ListTypes";
import { InputTypes } from "../Input/InputTypes";
import { action } from "@storybook/addon-actions";
import { text, boolean, select } from "@storybook/addon-knobs";

export default {
    title: "SearchBar",
    component: SearchBar,
};

const optionsGroup = {
    Art: [
        "Academic Painting",
        "Amazing Painting",
        "Ancient Statue",
        "Basic Painting",
        "Beautiful Statue",
    ],
    Bushes: [
        "Blue-Hydrangea Bush",
        "Blue-Hydrangea Start",
        "Holly Bush",
        "Orange-Tea-Olive Bush",
        "Pink Camellia Bush",
    ],
    Clothing: ["3D Glasses", "Academy Uniform", "Acid-Washed Jacket"],
    "DIY Recipes": ["Acorn Pochette", "Acoustic Guitar", "Angled Signpost"],
    Flowers: [
        "Black Cosmos",
        "Blue Pansies",
        "Gold Roses",
        "Lily of the Valley",
        "Orange Hyacinth",
    ],
    Fossils: [
        "Acanthostega",
        "Amber",
        "Ammonite",
        "Ankylo Skull",
        "Anomalocaris",
        "Australopith",
    ],
    Fruits: ["Apples", "Oranges", "Pears", "Coconuts", "Cherries"],
    Furniture: [
        "Abstract Wall",
        "Accessories Stand",
        "ACNH Switch",
        "Air Circulator",
    ],
    Materials: [
        "Acorn",
        "Aquaris Fragment",
        "Bamboo Piece",
        "Boot",
        "Clump of Weeds",
    ],
    NPC: ["Celeste", "Kicks", "Leif", "Redd", "Saharah"],
    Songs: ["Agent K.K.", "Café K.K.", "Comrade K.K."],
    Tools: [
        "Axe",
        "Bamboo Wand",
        "Fishing Rod",
        "Shovel",
        "Slingshot",
        "Watering Can",
    ],
    Villagers: ["Agnes", "Alfonso", "Anchovy", "Axel", "Aurora"],
};

// console.log(Object.values(optionsGroup["Art"]));

Object.values(optionsGroup["Art"]).map((value) => {
    console.log(value);
});

let showSelect, showHelperText, formErrored, formDisabled;

export const searchBar = () => (
    <>
        {boolean("Form Errored", false)
            ? (formErrored = true)
            : (formErrored = false)}
        {boolean("Form Disabled", false)
            ? (formDisabled = true)
            : (formDisabled = false)}
        {boolean("Show Select", true)
            ? (showSelect = true)
            : (showSelect = false)}
        {boolean("Show Helper Text", true)
            ? (showHelperText = true)
            : (showHelperText = false)}
        <SearchBar
            searchSubmitHandler={action("clicked")}
            ariaLabel={"New Horizons Item Search"}
        >
            {showSelect && (
                <Select
                    id={"select"}
                    isRequired={false}
                    ariaLabel="Filter Search"
                    labelId={"label"}
                    helperTextId={"helperText"}
                    onBlur={action("blur")}
                    onChange={action("changed")}
                    modifiers={formErrored ? ["error"] : null}
                    disabled={formDisabled}
                >
                    {Object.keys(optionsGroup).map((nhOption) => (
                        <option aria-selected={false}>{nhOption}</option>
                    ))}
                </Select>
            )}
            <Input
                id="input1"
                ariaLabelledBy={"button helper-error-text"}
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
        <List type={ListTypes.Unordered}>
            {Object.values(optionsGroup["Art"]).map((value) => (
                <li>{value}</li>
            ))}
        </List>
        {showHelperText && (
            <HelperErrorText
                id={"helper-error-text"}
                isError={formErrored ? true : false}
            >
                {formErrored
                    ? "Sorry, we can't find that item!"
                    : "Search for items in Animal Crossing New Horizons"}
            </HelperErrorText>
        )}
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
