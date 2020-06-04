import * as React from "react";
import { HelperErrorTextOptions } from "../HelperErrorText/HelperErrorText";
export interface InputOptions {
    baseClass?: string;
    blockName?: string;
    labelId?: string;
    labelContent?: JSX.Element;
    inputId?: string;
    inputType?: string;
    inputValue?: string | number;
    onInputChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    isRequired?: boolean;
    helperContentOpts?: HelperErrorTextOptions;
    errorContentOpts?: HelperErrorTextOptions;
    showError?: boolean;
}
interface InputProps {
    /** Optional baseClass for use with BEM. See how to work with blockNames and BEM here: http://getbem.com/introduction/ */
    baseClass?: string;
    /** Optional blockName for use with BEM. See how to work with blockNames and BEM here: http://getbem.com/introduction/ */
    blockName?: string;
    /** The Label ID for the input */
    labelId: string;
    /** The label content for the input */
    labelContent: JSX.Element;
    /** The unique ID of the input */
    inputId: string;
    /** The HTML inputType */
    inputType?: string;
    /** The current input value */
    inputValue?: string | number;
    /** The action to perform on the <input>'s onChange function  */
    onInputChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    /** Whether the "required" flag is shown */
    isRequired?: boolean;
    /** The input helper text */
    helperContentOpts?: HelperErrorTextOptions;
    /** The input error text */
    errorContentOpts?: HelperErrorTextOptions;
    /** Whether the input is currently in an error state */
    showError?: boolean;
}
/**
 * An Input field that labels a TextField and has Helpers or Errors
 */
export default function Input(props: InputProps): JSX.Element;
export {};
