import * as React from "react";
export interface DropdownProps {
    dropdownId: string;
    blockName?: string;
    modifiers?: string[];
    isRequired: boolean;
    labelPosition: "top" | "left" | "none";
    labelId?: string;
    labelText?: string;
    ariaLabel?: string;
    helperContent?: JSX.Element;
    helperContentId?: string;
    hasError?: boolean;
    errorContentId?: string;
    errorContent?: JSX.Element;
    dropdownOptions: string[];
    selectedOption?: string;
    onSelectChange: (event: React.FormEvent) => void;
    onSelectBlur: (event: React.FormEvent) => void;
}
export default function Dropdown(props: DropdownProps): JSX.Element;
