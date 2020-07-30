import React, { useState } from "react";
import Autosuggest from "react-autosuggest";
import Label from "../Label/Label";
import Input from "../Input/Input";
import { InputTypes } from "../Input/InputTypes";
import HelperErrorText from "../HelperErrorText/HelperErrorText";

const AutosuggestComp = ({
    defaultValue,
    childRef,
    list,
    fieldName,
    renderSuggestion,
    getSuggestionValue,
    getSuggestions,
    placeholder,
    label,
    helperText,
    isRequired = false,
}: any) => {
    const [value, setValue] = useState(defaultValue);
    const [suggestions, setSuggestions] = useState([]);

    const onChange = (event, { newValue }) => setValue(newValue);

    // Autosuggest will call this function every time suggestions need to be
    // updated. `getSuggestions` must be passed.
    const onSuggestionsFetchRequested = ({ value }) =>
        setSuggestions(getSuggestions(value, list));

    const onSuggestionsClearRequested = () => setSuggestions([]);

    // Autosuggest will pass through all these props to the Input component.
    const inputProps = {
        placeholder,
        value,
        onChange,
        ref: childRef,
    };

    const renderInputComponent = (inputProps) => {
        return (
            <>
                <Label
                    htmlFor="input-autosuggest"
                    id="input-autosuggest-label"
                    optReqFlag={isRequired ? "Required" : ""}
                >
                    <span>{label}</span>
                </Label>
                <Input
                    type={InputTypes.text}
                    id="input-autosuggest"
                    aria-required={isRequired}
                    aria-labelledby="input-autosuggest-label"
                    attributes={{
                        name: fieldName,
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

export default AutosuggestComp;
