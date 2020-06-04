import * as React from "react";
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
    helperVariant?: "ResearchNow";
    hasError?: boolean;
    errorMessage?: string;
    selectBlurHandler?: (event: React.MouseEvent) => void;
    selectChangeHandler?: (event: React.MouseEvent) => void;
    searchSubmitHandler: (event: React.MouseEvent) => void;
    searchChangeHandler?: (event: React.FormEvent) => void;
}
export default function SearchBar(props: SearchBarProps): JSX.Element;
