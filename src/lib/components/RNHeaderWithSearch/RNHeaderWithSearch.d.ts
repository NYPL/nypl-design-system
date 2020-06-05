import * as React from "react";
export interface RNHeaderWithSearchProps {
    modifiers?: [];
    searchBarId: string;
    searchButtonId: string;
    searchBarAriaLabel: string;
    searchValue?: string;
    selectedField?: string;
    dropdownId: string;
    sectionTitle: JSX.Element;
    textFieldAriaLabel: string;
    hasError?: boolean;
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
): JSX.Element;
