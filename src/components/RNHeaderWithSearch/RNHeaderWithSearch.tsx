// OH-31 Header with Search
import * as React from "react";
import SearchBar from "../SearchBar/SearchBar";
import bem from "../../utils/bem";
import Heading from "../Heading/Heading";

export interface RNHeaderWithSearchProps {
    modifiers?: [];
    searchBarId?: string;
    searchButtonId?: string;
    searchBarAriaLabel: string;
    searchValue?: string;
    selectedField?: string;
    dropdownId?: string;
    sectionTitle: JSX.Element;
    textFieldAriaLabel: string;
    hasError?: boolean;
    // To make into jsx.element (eg: if error has link)
    // must first handle the placeholderText=errorMessage in ResearchNow's Search Header
    errorMessage?: string;
    searchDropdownOptions: string[];
    advancedSearchElem: JSX.Element;
    selectChangeHandler: (event: React.FormEvent) => void;
    selectBlurHandler: (event: React.FormEvent) => void;
    searchSubmitHandler: (event: React.MouseEvent) => void;
    textChangeHandler?: (event: React.FormEvent) => void;
}

export default function RNHeaderWithSearch(
    props: React.PropsWithChildren<RNHeaderWithSearchProps>
) {
    const {
        sectionTitle,
        searchBarId,
        searchBarAriaLabel,
        searchValue,
        selectedField,
        searchButtonId,
        hasError,
        errorMessage,
        dropdownId,
        searchDropdownOptions,
        textFieldAriaLabel,
        advancedSearchElem,
        selectChangeHandler,
        selectBlurHandler,
        searchSubmitHandler,
        textChangeHandler,
    } = props;
    const base_class = "search-header";

    return (
        <div className={bem(base_class)}>
            <div className={bem("content", [], base_class)}>
                <div className={bem("heading", [], base_class)}>
                    {sectionTitle}
                </div>
                <SearchBar
                    searchBarId={searchBarId}
                    searchBarAriaLabel={searchBarAriaLabel}
                    searchValue={searchValue}
                    selectedField={selectedField}
                    blockName={base_class}
                    buttonId={searchButtonId}
                    dropdownId={dropdownId}
                    dropdownAriaLabel="Filter Search"
                    textFieldAriaLabel={textFieldAriaLabel}
                    dropdownOptions={searchDropdownOptions}
                    helperVariant="ResearchNow"
                    hasError={hasError}
                    errorMessage={errorMessage}
                    selectBlurHandler={selectBlurHandler}
                    selectChangeHandler={selectChangeHandler}
                    searchSubmitHandler={searchSubmitHandler}
                    searchChangeHandler={textChangeHandler}
                />
                <div className={bem("promo-text", [], base_class)}>
                    {React.cloneElement(advancedSearchElem, {
                        modifiers: ["dark-background"],
                    })}
                </div>
            </div>
        </div>
    );
}
