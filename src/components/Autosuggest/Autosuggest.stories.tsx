import * as React from "react";

import Autosuggest from "./Autosuggest";
import Icon from "../Icons/Icon";
import { IconNames } from "../Icons/IconTypes";

export default {
    title: "Autosuggest",
    component: Autosuggest,
};

// Render suggestions.
const renderSuggestionLibrary = (suggestion) => <span>{suggestion.label}</span>;

// When suggestion is clicked, Autosuggest needs to populate the input
// based on the clicked suggestion. Teach Autosuggest how to calculate the
// input value for every given suggestion.
const getSuggestionValueLibrary = (suggestion) => suggestion.label;

// Teach Autosuggest how to calculate suggestions for any given input value.
const getSuggestionsLibrary = (value, list) => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    return inputLength === 0
        ? []
        : list.filter(
              (l) => l.label.toLowerCase().slice(0, inputLength) === inputValue
          );
};

const libraryList = [
    { label: "SimplyE", value: "eb" },
    { label: "53rd Street Branch", value: "ft" },
    { label: "Aguilar Branch", value: "ag" },
    { label: "Allerton Branch", value: "al" },
    { label: "Battery Park City", value: "bt" },
    { label: "Baychester Branch", value: "ba" },
    { label: "Belmont Branch", value: "be" },
    { label: "South Beach Branch", value: "sb" },
    { label: "St. Agnes", value: "sa" },
    { label: "Sedgwick Branch", value: "sd" },
    { label: "Seward Park Branch", value: "se" },
    { label: "Soundview Branch", value: "sv" },
    { label: "St. George Library Center", value: "sg" },
];

export const autosuggestLibrary = () => (
    <Autosuggest
        renderSuggestion={renderSuggestionLibrary}
        getSuggestionValue={getSuggestionValueLibrary}
        getSuggestions={getSuggestionsLibrary}
        list={libraryList}
        placeholder="Type a library name"
        label="Select a home library branch"
        fieldName="homeLibrary"
        defaultValue="SimplyE"
    />
);

// Use your imagination to render suggestions.
const renderSuggestionFish = (suggestion) => (
    <span>
        {suggestion}
        <Icon name={IconNames["check"]} decorative={true}></Icon>
    </span>
);

// When suggestion is clicked, Autosuggest needs to populate the input
// based on the clicked suggestion. Teach Autosuggest how to calculate the
// input value for every given suggestion.
const getSuggestionValueFish = (suggestion) => suggestion;

// Teach Autosuggest how to calculate suggestions for any given input value.
const getSuggestionsFish = (value, list) => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    return inputLength === 0
        ? []
        : list.filter((l) => l.indexOf(inputValue) !== -1);
};

const fishList = [
    "sea bass",
    "mahi mahi",
    "pale chub",
    "carp",
    "ranchu goldfish",
    "char",
    "golden trout",
    "crawfish",
    "catfish",
    "neon tetra",
    "blowfish",
];

export const autosuggestFish = () => (
    <Autosuggest
        renderSuggestion={renderSuggestionFish}
        getSuggestionValue={getSuggestionValueFish}
        getSuggestions={getSuggestionsFish}
        list={fishList}
        placeholder="Try the letter 'c' or 'tr'"
        label="Select a fish from Animal Crossing"
        fieldName="favoriteFish"
        defaultValue=""
    />
);
