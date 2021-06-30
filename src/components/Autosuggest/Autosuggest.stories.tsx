import React, { useState } from "react";

import Autosuggest from "react-autosuggest";
import Icon from "../Icons/Icon";
import { IconNames } from "../Icons/IconTypes";
import Label from "../Label/Label";
import Input from "../Input/Input";
import { InputTypes } from "../Input/InputTypes";
import HelperErrorText from "../HelperErrorText/HelperErrorText";

/**
 * StoryWrapper
 * Wrapper component just to give the Autosuggest examples more space for the
 * suggestions dropdown to display.
 */
const StoryWrapper = ({ children }) => (
  <div style={{ padding: "5px", minHeight: "400px" }}>{children}</div>
);

const libraryRenderInputComponent = (
  inputProps: React.HTMLProps<HTMLInputElement>
) => {
  return (
    <>
      <Label
        htmlFor="library-autosuggest"
        id="library-autosuggest-label"
        optReqFlag={"Required"}
      >
        Home Library
      </Label>
      <HelperErrorText id="id-helperText" isError={false}>
        Select your home library. Start by typing the name of the library. Try{" "}
        {'"'}ba{'"'}.
      </HelperErrorText>
      <Input
        type={InputTypes.text}
        id="library-autosuggest"
        aria-required={true}
        aria-labelledby="library-autosuggest-label id-helperText"
        attributes={{
          name: "homeLibraryName",
          ...inputProps,
        }}
      />
    </>
  );
};

/**
 * LibraryExample
 * An example component that internally uses the `react-autosuggest` library.
 * The list is made up of objects with `label` key. It adds a Label, Input, and
 * HelperErrorText as elements for the autosuggest component to render.
 */
const LibraryExample = ({ renderInputComponent }) => {
  const [value, setValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const libraryList = [
    { label: "SimplyE" },
    { label: "53rd Street Branch" },
    { label: "Aguilar Branch" },
    { label: "Allerton Branch" },
    { label: "Battery Park City" },
    { label: "Baychester Branch" },
    { label: "Belmont Branch" },
    { label: "South Beach Branch" },
    { label: "St. Agnes" },
    { label: "Sedgwick Branch" },
    { label: "Seward Park Branch" },
    { label: "Soundview Branch" },
    { label: "St. George Library Center" },
  ];
  const onChange = (event, { newValue }) => setValue(newValue);
  // Tell autosuggest to suggest by the first letter of the library. This can
  // be manipulated.
  const getSuggestions = (value, list) => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    return inputLength === 0
      ? []
      : list.filter(
          l => l.label.toLowerCase().slice(0, inputLength) === inputValue
        );
  };

  // Autosuggest will call this function every time suggestions need to be
  // updated. `getSuggestions` must be passed.
  const onSuggestionsFetchRequested = ({ value }) =>
    setSuggestions(getSuggestions(value, libraryList));
  // Clear out any suggestions.
  const onSuggestionsClearRequested = () => setSuggestions([]);

  // When suggestion is clicked, Autosuggest needs to populate the input
  // based on the clicked suggestion. We want the label from that object.
  const getSuggestionValue = suggestion => suggestion.label;
  // Render every suggestion in a span.
  const renderSuggestion = suggestion => <span>{suggestion.label}</span>;
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

export const AutosuggestLibrary = () => (
  <StoryWrapper>
    <LibraryExample renderInputComponent={libraryRenderInputComponent} />
  </StoryWrapper>
);

/**
 * FishExample
 * An example component that internally uses the `react-autosuggest` library.
 * The list is made up of strings. It adds an Input element for the autosuggest
 * component to render and renders the Label separately.
 */
const FishExample = () => {
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
  const renderInputComponent = inputProps => {
    return (
      <>
        <Label htmlFor="input-fish-autosuggest" id="fish-autosuggest-label">
          Fish in Animal Crossing
        </Label>
        <Input
          type={InputTypes.text}
          id="input-fish-autosuggest"
          aria-required={false}
          attributes={{
            name: "favoriteFish",
            ...inputProps,
          }}
        />
      </>
    );
  };
  const onChange = (event, { newValue }) => setValue(newValue);
  // Just adding a simple icon to show how suggestions can be rendered.
  const renderSuggestion = suggestion => (
    <span>
      {suggestion}
      <Icon name={IconNames["check"]} decorative={true}></Icon>
    </span>
  );
  const getSuggestionValue = suggestion => suggestion;
  // Here, we want to filter suggestions if we can the user-typed string in
  // any of the suggestion string list.
  const getSuggestions = (value, list) => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    return inputLength === 0
      ? []
      : list.filter(l => l.indexOf(inputValue) !== -1);
  };
  const onSuggestionsFetchRequested = ({ value }) =>
    setSuggestions(getSuggestions(value, fishList));
  const onSuggestionsClearRequested = () => setSuggestions([]);
  const inputProps = {
    placeholder: "Try the letter 'c' or 'tr'",
    value,
    onChange,
  };

  return (
    <>
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={onSuggestionsFetchRequested}
        onSuggestionsClearRequested={onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
        renderInputComponent={renderInputComponent}
        highlightFirstSuggestion={true}
      />
    </>
  );
};

export const AutosuggestFish = () => (
  <StoryWrapper>
    <FishExample />
  </StoryWrapper>
);

const searchBarRenderInputComponent = (
  inputProps: React.HTMLProps<HTMLInputElement>
) => {
  return (
    <Input
      type={InputTypes.text}
      id="autosuggest-searchBar"
      aria-required={true}
      ariaLabelledBy="autosuggest-button"
      attributes={{
        name: "homeLibraryName",
        ["aria-describedby"]: "autosuggest-helperText",
        ...inputProps,
      }}
    />
  );
};

export const SearchBarExample = () => (
  <LibraryExample renderInputComponent={searchBarRenderInputComponent} />
);
