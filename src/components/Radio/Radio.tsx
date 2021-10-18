import * as React from "react";
import {
  Box,
  Radio as ChakraRadio,
  useMultiStyleConfig,
} from "@chakra-ui/react";

import generateUUID from "../../helpers/generateUUID";
import HelperErrorText from "../HelperErrorText/HelperErrorText";

export interface RadioProps {
  /** Additional class name. */
  className?: string;
  /** Optional string to populate the HelperErrorText for the error state
   * when `isInvalid` is true.
   */
  invalidText?: string;
  /** Optional string to populate the HelperErrorText for the standard state. */
  helperText?: string;
  /** ID that other components can cross reference for accessibility purposes */
  id?: string;
  /** When using the Radio as a "controlled" form element, you can specify the
   * `Radio`'s checked state using this prop. You must also pass an onChange prop.
   * Learn more about controlled and uncontrolled form fields: https://goshakkk.name/controlled-vs-uncontrolled-inputs-react/ */
  isChecked?: boolean;
  /** Adds the 'disabled' and `aria-disabled` attributes to the input when true.
   * This also makes the text italic and color scheme gray.
   */
  isDisabled?: boolean;
  /** Adds the 'aria-invalid' attribute to the input when true. This also makes
   * the color theme "NYPL error" red for the button and text.
   */
  isInvalid?: boolean;
  /** Adds the 'required' attribute to the input when true. */
  isRequired?: boolean;
  /** The radio button's label. This will serve as the text content for the
   * `<label>` element if `showlabel` is true, or an "aria-label" if `showLabel`
   * is false. */
  labelText: string;
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

const Radio = React.forwardRef<HTMLInputElement, RadioProps>((props, ref?) => {
  const {
    className,
    helperText,
    id = generateUUID(),
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
  } = props;
  const styles = useMultiStyleConfig("Radio", {});
  const footnote = isInvalid ? invalidText : helperText;
  const attributes = {};

  if (!showLabel) {
    attributes["aria-label"] =
      labelText && footnote ? `${labelText} - ${footnote}` : labelText;
  } else {
    if (footnote) {
      attributes["aria-describedby"] = `${id}-helperText`;
    }
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
        __css={styles}
        {...attributes}
      >
        {showLabel && labelText}
      </ChakraRadio>
      {footnote && showHelperInvalidText && (
        <Box __css={styles.helper} aria-disabled={isDisabled}>
          <HelperErrorText isError={isInvalid} id={`${id}-helperText`}>
            {footnote}
          </HelperErrorText>
        </Box>
      )}
    </>
  );
});

export default Radio;
