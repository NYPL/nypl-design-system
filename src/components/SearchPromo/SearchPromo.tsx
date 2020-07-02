// OF-21 Search Promo

import * as React from "react";
import bem from "../../utils/bem";
import SectionTitle from "../SectionTitle/SectionTitle";
import SearchBar from "../SearchBar/SearchBar";

export interface SearchPromoProps {
    headingText: string;
    modifiers?: [];
    blockName?: string;
    titleId?: string;
    searchBarId?: string;
    searchButtonId?: string;
    searchInputAriaLabel: string;
    dropdownId?: string;
    hasError?: boolean;
    errorMessage?: string;
    searchDropdownOptions: React.ReactNode;
    selectedOption?: string;
    searchValue?: string;
    advancedSearchMessage: JSX.Element;
    selectChangeHandler: (event: React.FormEvent) => void;
    selectBlurHandler: (event: React.FormEvent) => void;
    searchSubmitHandler: (event: React.MouseEvent) => void;
    textChangeHandler?: (event: React.FormEvent) => void;
}
export default function SearchPromo(props: SearchPromoProps) {
    const {
        headingText,
        modifiers,
        blockName,
        titleId,
        searchBarId,
        searchButtonId,
        hasError,
        errorMessage,
        dropdownId,
        selectedOption,
        searchDropdownOptions,
        advancedSearchMessage,
        searchValue,
        searchInputAriaLabel,
        selectChangeHandler,
        selectBlurHandler,
        searchSubmitHandler,
        textChangeHandler,
    } = props;

    const searchpromo__base_class = "search-promo";

    return (
        <div className={bem(searchpromo__base_class, modifiers, blockName)}>
            <div className={bem("content", [], searchpromo__base_class)}>
                <SectionTitle
                    id={titleId}
                    headingText={headingText}
                    blockName={searchpromo__base_class}
                />
                <div
                    className={bem(
                        "search-section",
                        [],
                        searchpromo__base_class
                    )}
                >
                    <SearchBar
                        searchBarId={searchBarId}
                        searchBarAriaLabelledBy={titleId}
                        buttonId={searchButtonId}
                        dropdownId={dropdownId}
                        options={searchDropdownOptions}
                        dropdownAriaLabel="Filter Search"
                        selectedField={selectedOption}
                        searchValue={searchValue}
                        hasError={hasError}
                        errorMessage={errorMessage}
                        selectBlurHandler={selectBlurHandler}
                        selectChangeHandler={selectChangeHandler}
                        searchSubmitHandler={searchSubmitHandler}
                        searchChangeHandler={textChangeHandler}
                    />

                    <div
                        className={bem(
                            "promo-text",
                            [],
                            searchpromo__base_class
                        )}
                    >
                        <div className="body-text">
                            {advancedSearchMessage}
                            <div />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
