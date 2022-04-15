import {
  chakra,
  Radio as ChakraRadio,
  useMultiStyleConfig,
} from "@chakra-ui/react";
import * as React from "react";

import HelperErrorText, {
  HelperErrorTextType,
} from "../HelperErrorText/HelperErrorText";
export interface RadioProps {
  /** Additional class name. */
  className?: string;
  /** Optional string to populate the HelperErrorText for the standard state. */
  helperText?: HelperErrorTextType;
  /** ID that other components can cross reference for accessibility purposes */
  id: string;
  /** Optional string to populate the HelperErrorText for the error state
   * when `isInvalid` is true.
   */
  invalidText?: HelperErrorTextType;
  /** When using the Radio as a "controlled" form element, you can specify the
   * `Radio`'s checked state using this prop. You must also pass an onChange prop.
   * Learn more about controlled and uncontrolled form fields: https://goshakkk.name/controlled-vs-uncontrolled-inputs-react/ */
  isChecked?: boolean;
  /** Adds the 'disabled' and `aria-disabled` attributes to the input when true.
   * This also makes the text italic and color scheme gray. */
  isDisabled?: boolean;
  /** Adds the 'aria-invalid' attribute to the input when true. This also makes
   * the color theme "NYPL error" red for the button and text. */
  isInvalid?: boolean;
  /** Adds the 'required' attribute to the input when true. */
  isRequired?: boolean;
  /** The radio button's label. This will serve as the text content for the
   * `<label>` element if `showlabel` is true, or an "aria-label" if `showLabel`
   * is false. */
  labelText: string | JSX.Element;
  /** Used to reference the input element in forms. */
  name?: string;
  /** Should be passed along with `isChecked` for controlled components. */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  /** Offers the ability to hide the helper/invalid text. */
  showHelperInvalidText?: boolean;
  /** Offers the ability to show the radio's label onscreen or hide it. Refer
   * to the `labelText` property for more information. */
  showLabel?: boolean;
  /** Populates the value of the input. */
  value?: string;
}

export const Radio = chakra(
  React.forwardRef<HTMLInputElement, RadioProps>((props, ref?) => {
    const {
      className,
      helperText,
      id,
      invalidText,
      isChecked,
      isDisabled = false,
      isInvalid = false,
      isRequired = false,
      labelText,
      name,
      onChange,
      showHelperInvalidText = true,
      showLabel = true,
      value,
      ...rest
    } = props;
    const styles = useMultiStyleConfig("Radio", {});
    const footnote = isInvalid ? invalidText : helperText;
    const attributes = {};

    if (!id) {
      console.warn(
        "NYPL Reservoir Radio: This component's required `id` prop was not passed."
      );
    }

    if (!showLabel) {
      if (typeof labelText !== "string") {
        console.warn(
          "NYPL Reservoir Radio: `labelText` must be a string when `showLabel` is false."
        );
      }
      attributes["aria-label"] =
        labelText && footnote ? `${labelText} - ${footnote}` : labelText;
    } else if (footnote) {
      attributes["aria-describedby"] = `${id}-helperText`;
    }

    return (
      <>
        <ChakraRadio
          className={className}
          id={id}
          isChecked={isChecked}
          isDisabled={isDisabled}
          isInvalid={isInvalid}
          isRequired={isRequired}
          name={name}
          onChange={onChange}
          value={value}
          ref={ref}
          alignItems="flex-start"
          __css={styles}
          {...attributes}
          {...rest}
        >
          {showLabel && labelText}
        </ChakraRadio>
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
  })
);

export default Radio;
