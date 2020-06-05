import * as React from "react";
export interface FormDropdownProps {
    dropdownId: string;
    blockName?: string;
    modifiers?: string[];
    labelId?: string;
    isRequired: boolean;
    ariaLabel?: string;
    disabled?: boolean;
    options: string[];
    selectedOption?: string;
    onSelectBlur: (event: React.FormEvent) => void;
    onSelectChange: (event: React.FormEvent) => void;
}
export default class FormDropdown extends React.Component<
    FormDropdownProps,
    {
        selectedOption: string;
    }
> {
    constructor(props: FormDropdownProps);
    componentDidUpdate(): void;
    onSelectChange(event: React.FormEvent, additionalChange: Function): void;
    render(): JSX.Element;
}
