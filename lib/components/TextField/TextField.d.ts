import * as React from "react";
export interface TextFieldOptions {
    id?: string;
    ariaLabel?: string;
    ariaLabelledBy?: string;
    isRequired?: boolean;
    blockName?: string;
    modifiers?: string[];
    value?: string | number;
    placeholderText?: string;
    type?: string;
    onChange?: (event: React.FormEvent) => void;
}
export interface TextFieldProps {
    id: string;
    ariaLabel?: string;
    ariaLabelledBy?: string;
    isRequired?: boolean;
    blockName?: string;
    modifiers?: string[];
    value?: string | number;
    placeholderText?: string;
    type?: string;
    onChange?: (event: React.FormEvent) => void;
}
export default function TextField(props: TextFieldProps): JSX.Element;
