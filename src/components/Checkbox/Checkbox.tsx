import {
  Checkbox as ChakraCheckbox,
  Icon,
  useMultiStyleConfig,
} from "@chakra-ui/react";
import * as React from "react";

import HelperErrorText, {
  HelperErrorTextType,
} from "../HelperErrorText/HelperErrorText";
export interface CheckboxProps {
  /** className you can add in addition to 'input' */
  className?: string;
  /** Optional string to populate the HelperErrorText for standard state */
  helperText?: HelperErrorTextType;
  /** ID that other components can cross reference for accessibility purposes */
  id: string;
  /** Optional string to populate the HelperErrorText for the error state
   * when `isInvalid` is true. */
  invalidText?: HelperErrorTextType;
  /** When using the Checkbox as a "controlled" form element, you can specify
   * the Checkbox's checked state using this prop.
   * Learn more about controlled and uncontrolled form fields:
   * https://goshakkk.name/controlled-vs-uncontrolled-inputs-react/ */
  isChecked?: boolean;
  /** Adds the 'disabled' and `aria-disabled` attributes to the input when true.
   * This also makes the text italic and color scheme gray. */
  isDisabled?: boolean;
  /** Adds the indeterminate state to the `Checkbox`. */
  isIndeterminate?: boolean;
  /** Adds the 'aria-invalid' attribute to the input when true. This also makes
   * the color theme "NYPL error" red for the button and text. */
  isInvalid?: boolean;
  /** Adds the 'required' attribute to the input when true. */
  isRequired?: boolean;
  /** The checkbox's label. This will serve as the text content for a `<label>`
   * element if `showlabel` is true, or an "aria-label" if `showLabel` is false. */
  labelText: string | JSX.Element;
  /** The name prop indicates into which group of checkboxes this checkbox
   * belongs. If none is specified, 'default' will be used */
  name?: string;
  /** The action to perform on the `<input>`'s onChange function  */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  /** Offers the ability to hide the helper/invalid text. */
  showHelperInvalidText?: boolean;
  /** Offers the ability to show the checkbox's label onscreen or hide it.
   * Refer to the `labelText` property for more information. */
  showLabel?: boolean;
  /** Populates the value of the input */
  value?: string;
}

export const onChangeDefault = () => {
  return;
};

function CheckboxIcon(props) {
  // We don't need the `isIndeterminate` or `isChecked` props but it
  // causes rendering issues on the SVG element, so we remove them
  // before passing all the props to the `Icon` component.
  const { isIndeterminate, isChecked, ...rest } = props;

  return (
    <Icon viewBox="0 0 24 24" {...rest}>
      <path
        fill="currentColor"
        d="M8.795 15.875l-4.17-4.17-1.42 1.41 5.59 5.59 12-12-1.41-1.41-10.59 10.58z"
      />
    </Icon>
  );
}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  (props, ref?) => {
    const {
      className,
      invalidText,
      helperText,
      id,
      isChecked,
      isDisabled = false,
      isIndeterminate = false,
      isInvalid = false,
      isRequired = false,
      labelText,
      name,
      showHelperInvalidText = true,
      showLabel = true,
      value,
    } = props;
    const styles = useMultiStyleConfig("Checkbox", {});
    const footnote: HelperErrorTextType = isInvalid ? invalidText : helperText;
    const ariaAttributes = {};
    const onChange = props.onChange || onChangeDefault;
    // Use Chakra's default indeterminate icon.
    const icon = !isIndeterminate ? <CheckboxIcon /> : undefined;

    if (!id) {
      console.warn(
        "NYPL Reservoir Checkbox: This component's required `id` prop was not passed."
      );
    }

    if (!showLabel) {
      if (typeof labelText !== "string") {
        console.warn(
          "NYPL Reservoir Checkbox: `labelText` must be a string when `showLabel` is false."
        );
      }
      ariaAttributes["aria-label"] =
        labelText && footnote ? `${labelText} - ${footnote}` : labelText;
    } else {
      if (footnote) ariaAttributes["aria-describedby"] = `${id}-helperText`;
    }

    return (
      <>
        <ChakraCheckbox
          id={id}
          className={className}
          name={name || "default"}
          isDisabled={isDisabled}
          isInvalid={isInvalid}
          isRequired={isRequired}
          isIndeterminate={isIndeterminate}
          ref={ref}
          value={value}
          {...(isChecked !== undefined
            ? {
                isChecked,
                onChange,
              }
            : {
                defaultIsChecked: false,
              })}
          icon={icon}
          alignItems="flex-start"
          __css={styles}
          {...ariaAttributes}
        >
          {showLabel && labelText}
        </ChakraCheckbox>
        {footnote && showHelperInvalidText && (
          <HelperErrorText
            additionalStyles={styles.helperErrorText}
            id={`${id}-helperText`}
            isInvalid={isInvalid}
            text={footnote}
          />
        )}
      </>
    );
  }
);

export default Checkbox;
