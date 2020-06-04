// MF-46 Search Bar with Search By Parameter

import * as React from "react";
import bem from "../../utils/bem";
import FormDropdown from "../FormDropdown/FormDropdown";
import TextField from "../TextField/TextField";
import Button from "../Button/Button";
import { ButtonIconPositions, ButtonTypes } from "../Button/ButtonTypes";
import { ButtonOptions } from "../Button/Button";

export interface SearchBarProps {
    searchBarId: string;
    blockName?: string;
    searchBarAriaLabel?: string;
    searchBarAriaLabelledBy?: string;
    buttonId: string;
    dropdownId?: string;
    dropdownAriaLabel?: string;
    dropdownOptions?: string[];
    selectedField?: string;
    searchValue?: string;
    placeHolder?: string;
    searchButtonAttributes?: {};
    placeholderText?: string;
    textFieldAriaLabel?: string;
    textFieldAttributes?: {};
    // helperVariant enables a ResearchNow specific alternate.
    // It should not be used in any other context.
    helperVariant?: "ResearchNow";
    hasError?: boolean;
    errorMessage?: string;
    selectBlurHandler?: (event: React.MouseEvent) => void;
    selectChangeHandler?: (event: React.MouseEvent) => void;
    searchSubmitHandler: (event: React.MouseEvent) => void;
    searchChangeHandler?: (event: React.FormEvent) => void;
}

export default function SearchBar(props: SearchBarProps) {
    const {
        blockName,
        searchBarId,
        buttonId,
        searchBarAriaLabel,
        searchBarAriaLabelledBy,
        dropdownId,
        dropdownOptions,
        dropdownAriaLabel,
        selectedField,
        searchValue,
        placeholderText,
        helperVariant,
        hasError,
        errorMessage,
        selectBlurHandler,
        searchSubmitHandler,
        selectChangeHandler,
        searchChangeHandler,
    } = props;

    if (dropdownOptions) {
        if (
            !(
                dropdownId &&
                dropdownAriaLabel &&
                selectBlurHandler &&
                selectChangeHandler
            )
        ) {
            throw new Error(`If dropdownOptions are passed, dropdownId (currently ${dropdownId}),
      dropdownAriaLabel (currently ${dropdownAriaLabel}), selectChangeHandler (currently ${selectChangeHandler}),
      and selectBlurHandler (currently ${selectBlurHandler}) must also be passed`);
        }
    }

    if (!searchBarAriaLabel && !searchBarAriaLabelledBy) {
        throw new Error(
            "Either searchBarAriaLabel and searchBarAriaLabelledBy must be passed"
        );
    }

    const modifiers = [];
    if (hasError) {
        if (!errorMessage) {
            throw new Error(
                "If there is an error, there must also be an error message"
            );
        }
        modifiers.push("error");
    }

    const searchbar__base_class = "search-bar";

    const textfieldProps = {
        id: searchBarId + "-input-textfield",
        ariaLabelledBy: buttonId,
        onChange: searchChangeHandler,
        isRequired: true,
        blockName: searchbar__base_class,
        placeholderText:
            hasError && helperVariant ? errorMessage : placeholderText,
        value: searchValue,
        modifiers: modifiers,
    };

    const buttonProps: ButtonOptions = {
        id: buttonId,
        callback: searchSubmitHandler,
        blockName: searchbar__base_class,
        content: <>Search</>,
        buttonType: ButtonTypes.Filled,
        iconPosition: ButtonIconPositions.Left,
        iconName: "search_small",
        iconDecorative: true,
    };

    return (
        <form
            className={`${bem(
                searchbar__base_class,
                modifiers,
                blockName
            )} ${bem(searchbar__base_class, modifiers)}`}
            id={searchBarId}
            role="search"
            aria-label={searchBarAriaLabel}
            aria-labelledby={searchBarAriaLabelledBy}
        >
            {dropdownOptions && (
                <FormDropdown
                    isRequired={false}
                    selectedOption={selectedField}
                    ariaLabel="Search by"
                    dropdownId={dropdownId}
                    options={dropdownOptions}
                    onSelectBlur={selectBlurHandler}
                    blockName={searchbar__base_class}
                    onSelectChange={selectChangeHandler}
                />
            )}

            <div className={bem("input-group", [], searchbar__base_class)}>
                <TextField {...textfieldProps}></TextField>
                <Button callback={searchSubmitHandler} {...buttonProps}>
                    {buttonProps.content}
                </Button>
                {hasError && !helperVariant && (
                    <span
                        className={bem(
                            "input-description",
                            modifiers,
                            searchbar__base_class
                        )}
                    >
                        {errorMessage}
                    </span>
                )}
            </div>
        </form>
    );
}
