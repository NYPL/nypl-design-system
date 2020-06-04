import { ButtonOptions } from "../Button/Button";
import { HelperErrorTextOptions } from "../HelperErrorText/HelperErrorText";
import { InputOptions } from "../Input/Input";
import { LabelOptions } from "../Label/Label";
export interface DateCheckFormProps {
    /** Optional blockName for use with BEM. See how to work with blockNames and BEM here: http://getbem.com/introduction/ */
    blockName?: string;
    /** Optional baseClass for use with BEM. See how to work with blockNames and BEM here: http://getbem.com/introduction/ */
    baseClass?: string;
    /** The Label to describe the form */
    formLabel: JSX.Element;
    /** The Label to describe the from input */
    fromLabelOpts: LabelOptions;
    /** The from input */
    fromInputOpts: InputOptions;
    /** Helper text for the from input */
    fromHelper?: HelperErrorTextOptions;
    /** The Label to describe the to input */
    toLabelOpts: LabelOptions;
    /** The to input */
    toInputOpts: InputOptions;
    /** Helper text for the to input */
    toHelper?: HelperErrorTextOptions;
    /** Whether the form is currently in an error state */
    showError: boolean;
    /** The error text to render */
    error?: HelperErrorTextOptions;
    /** The submit button */
    buttonOpts?: ButtonOptions;
}
export default function DateRangeForm(props: DateCheckFormProps): JSX.Element;
