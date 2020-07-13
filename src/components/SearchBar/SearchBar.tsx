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

    /** Populates aria-label on the form */
    ariaLabel?: string;

    /** Populates aria-labelledby on the form */
    ariaLabelledBy?: string;

    /** TBD */
    errored?: boolean;
    selectBlurHandler?: (event: React.MouseEvent) => void;
    selectChangeHandler?: (event: React.MouseEvent) => void;

    /** Handler on form submit */
    onSubmit: (event: React.MouseEvent) => void;
    searchChangeHandler?: (event: React.FormEvent) => void;
}

export default function SearchBar(
    props: React.PropsWithChildren<SearchBarProps>
) {
    const {
        ariaLabel,
        ariaLabelledBy,
        blockName,
        children,
        errored,
        id,
        searchChangeHandler,
        onSubmit,
        selectBlurHandler,
        selectChangeHandler,
    } = props;

    // if (!(selectBlurHandler && selectChangeHandler)) {
    // throw new Error(`If dropdownOptions are passed, dropdownId (currently ${dropdownId}),
    // dropdownAriaLabel (currently ${dropdownAriaLabel}), selectChangeHandler (currently ${selectChangeHandler}),
    // and selectBlurHandler (currently ${selectBlurHandler}) must also be passed`);
    // }

    let modifiers = [];

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
