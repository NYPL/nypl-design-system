import * as React from "react";
export interface SearchPromoProps {
    headingText: string;
    modifiers?: [];
    blockName?: string;
    titleId: string;
    searchBarId: string;
    searchButtonId: string;
    searchInputAriaLabel: string;
    dropdownId: string;
    hasError?: boolean;
    errorMessage?: string;
    searchDropdownOptions: string[];
    selectedOption?: string;
    searchValue?: string;
    advancedSearchMessage: JSX.Element;
    selectChangeHandler: (event: React.FormEvent) => void;
    selectBlurHandler: (event: React.FormEvent) => void;
    searchSubmitHandler: (event: React.MouseEvent) => void;
    textChangeHandler?: (event: React.FormEvent) => void;
}
export default function SearchPromo(props: SearchPromoProps): JSX.Element;
