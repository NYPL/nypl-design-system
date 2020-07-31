import React, { useState } from "react";

import Autosuggest from "react-autosuggest";
import Icon from "../Icons/Icon";
import { IconNames } from "../Icons/IconTypes";
import Label from "../Label/Label";
import Input from "../Input/Input";
import { InputTypes } from "../Input/InputTypes";
import HelperErrorText from "../HelperErrorText/HelperErrorText";

export default {
    title: "Autosuggest",
    component: Autosuggest,
};

export const autosuggestLibrary = () => {
    const [value, setValue] = useState("");
    const [suggestions, setSuggestions] = useState([]);
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
    const isRequired = true;
    const helperText = "Write something.";
    const renderInputComponent = (inputProps) => {
        return (
            <>
                <Label
                    htmlFor="input-autosuggest"
                    id="input-autosuggest-label"
                    optReqFlag={isRequired ? "Required" : ""}
                >
                    <span>Some label</span>
                </Label>
                <Input
                    type={InputTypes.text}
                    id="input-autosuggest"
                    aria-required={isRequired}
                    aria-labelledby="input-autosuggest-label"
                    attributes={{
                        name: "fieldName",
                        ...inputProps,
                    }}
                />
                {helperText && (
                    <HelperErrorText id="id-helperText" isError={false}>
                        {helperText}
                    </HelperErrorText>
                )}
            </>
        );
    };

    const onChange = (event, { newValue }) => setValue(newValue);
    // Teach Autosuggest how to calculate suggestions for any given input value.
    const getSuggestions = (value, list) => {
        const inputValue = value.trim().toLowerCase();
        const inputLength = inputValue.length;

        return inputLength === 0
            ? []
            : list.filter(
                  (l) =>
                      l.label.toLowerCase().slice(0, inputLength) === inputValue
              );
    };

    // Autosuggest will call this function every time suggestions need to be
    // updated. `getSuggestions` must be passed.
    const onSuggestionsFetchRequested = ({ value }) =>
        setSuggestions(getSuggestions(value, libraryList));

    const onSuggestionsClearRequested = () => setSuggestions([]);

    // When suggestion is clicked, Autosuggest needs to populate the input
    // based on the clicked suggestion. We want the label from each object.
    const getSuggestionValue = (suggestion) => suggestion.label;
    // How we want to render the suggestion.
    const renderSuggestion = (suggestion) => <span>{suggestion.label}</span>;

    // Autosuggest will pass through all these props to the Input component.
    const inputProps = {
        placeholder: "Type a library name",
        value,
        onChange,
    };

    return (
        <Autosuggest
            suggestions={suggestions}
            onSuggestionsFetchRequested={onSuggestionsFetchRequested}
            onSuggestionsClearRequested={onSuggestionsClearRequested}
            getSuggestionValue={getSuggestionValue}
            renderSuggestion={renderSuggestion}
            inputProps={inputProps}
            renderInputComponent={renderInputComponent}
        />
    );
};

export const autosuggestFish = () => {
    const [value, setValue] = useState("");
    const [suggestions, setSuggestions] = useState([]);
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
    const renderInputComponent = (inputProps) => {
        return (
            <>
                <Input
                    type={InputTypes.text}
                    id="input-autosuggest"
                    aria-required={false}
                    aria-labelledby="input-autosuggest-label"
                    attributes={{
                        name: "favoriteFish",
                        ...inputProps,
                    }}
                />
            </>
        );
    };

    const onChange = (event, { newValue }) => setValue(newValue);

    // Use your imagination to render suggestions.
    const renderSuggestion = (suggestion) => (
        <span>
            {suggestion}
            <Icon name={IconNames["check"]} decorative={true}></Icon>
        </span>
    );

    // When suggestion is clicked, Autosuggest needs to populate the input
    // based on the clicked suggestion. Teach Autosuggest how to calculate the
    // input value for every given suggestion.
    const getSuggestionValue = (suggestion) => suggestion;

    // Teach Autosuggest how to calculate suggestions for any given input value.
    const getSuggestions = (value, list) => {
        const inputValue = value.trim().toLowerCase();
        const inputLength = inputValue.length;

        return inputLength === 0
            ? []
            : list.filter((l) => l.indexOf(inputValue) !== -1);
    };

    // Autosuggest will call this function every time suggestions need to be
    // updated. `getSuggestions` must be passed.
    const onSuggestionsFetchRequested = ({ value }) =>
        setSuggestions(getSuggestions(value, fishList));

    const onSuggestionsClearRequested = () => setSuggestions([]);

    // Autosuggest will pass through all these props to the Input component.
    const inputProps = {
        placeholder: "Try the letter 'c' or 'tr'",
        value,
        onChange,
    };

    return (
        <Autosuggest
            renderSuggestion={renderSuggestion}
            getSuggestionValue={getSuggestionValue}
            getSuggestions={getSuggestions}
            suggestions={suggestions}
            onSuggestionsFetchRequested={onSuggestionsFetchRequested}
            onSuggestionsClearRequested={onSuggestionsClearRequested}
            inputProps={inputProps}
            renderInputComponent={renderInputComponent}
        />
    );
};
