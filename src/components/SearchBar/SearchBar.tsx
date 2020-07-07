import * as React from "react";
import bem from "../../utils/bem";
import Select from "../Select/Select";
import TextField from "../TextField/TextField";
import { Button } from "../..";
import { ButtonIconPositions, ButtonTypes } from "../Button/ButtonTypes";
import { ButtonOptions } from "../Button/Button";

export interface SearchBarProps {
    /** ID that other components can cross reference for accessibility purposes */
    id?: string;

    /** blockName for use with BEM. See how to work with modifiers and BEM here: http://getbem.com/introduction/ */
    blockName?: string;
    ariaLabel?: string;
    ariaLabelledBy?: string;
    buttonId?: string;
    dropdownId?: string;
    dropdownAriaLabel?: string;
    options?: React.ReactNode;
    selectedField?: string;
    searchValue?: string;
    placeHolder?: string;
    searchButtonAttributes?: {};
    placeholderText?: string;
    textFieldAriaLabel?: string;
    textFieldAttributes?: {};
    hasError?: boolean;
    errorMessage?: string;
    selectBlurHandler?: (event: React.MouseEvent) => void;
    selectChangeHandler?: (event: React.MouseEvent) => void;
    searchSubmitHandler: (event: React.MouseEvent) => void;
    searchChangeHandler?: (event: React.FormEvent) => void;
}

export default function SearchBar(
    props: React.PropsWithChildren<SearchBarProps>
) {
    const {
        blockName,
        buttonId,
        children,
        dropdownAriaLabel,
        dropdownId,
        errorMessage,
        hasError,
        options,
        placeholderText,
        ariaLabel,
        ariaLabelledBy,
        id,
        searchChangeHandler,
        searchSubmitHandler,
        searchValue,
        selectBlurHandler,
        selectChangeHandler,
        selectedField,
    } = props;

    if (options) {
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

    let modifiers = [];
    if (hasError) {
        if (!errorMessage) {
            throw new Error(
                "If there is an error, there must also be an error message"
            );
        }
        modifiers.push("error");
    }

    let searchbar__base_class = "search-bar";

    return (
        <form
            className={bem(searchbar__base_class, modifiers, blockName)}
            id={id}
            role="search"
            aria-label={ariaLabel}
            aria-labelledby={ariaLabelledBy}
        >
            {props.children}
        </form>
    );
}
