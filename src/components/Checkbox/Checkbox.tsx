import * as React from "react";
import {
  Box,
  Checkbox as ChakraCheckbox,
  Icon,
  useMultiStyleConfig,
} from "@chakra-ui/react";
import HelperErrorText from "../HelperErrorText/HelperErrorText";
import generateUUID from "../../helpers/generateUUID";

export interface CheckboxProps {
  /** className you can add in addition to 'input' */
  className?: string;
  /** Optional string to populate the HelperErrorText for the error state
   * when `isInvalid` is true.
   */
  errorText?: string;
  /** Optional string to populate the HelperErrorText for standard state */
  helperText?: string;
  /** ID that other components can cross reference for accessibility purposes */
  id?: string;
  /** When using the Checkbox as a "controlled" form element, you can specify the
   * Checkbox's checked state using this prop.
   * Learn more about controlled and uncontrolled form fields:
   * https://goshakkk.name/controlled-vs-uncontrolled-inputs-react/ */
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
  /** The checkbox's label.  This will serve as the text content for a `<label>` element if `showlabel` is true, or an "aria-label" if `showLabel` is false. */
  labelText: string;
  /** The name prop indicates into which group of checkboxes this checkbox belongs.  If none is specified, 'default' will be used */
  name?: string;
  /** The action to perform on the `<input>`'s onChange function  */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  /** Offers the ability to show the checkbox's label onscreen or hide it. Refer to the `labelText` property for more information. */
  showLabel?: boolean;
  /** Populates the value of the input */
  value?: string;
}

export const onChangeDefault = () => {
  return;
};

function CheckboxIcon(props) {
  const { isIndeterminate, isChecked, ...rest } = props;

  const d = isIndeterminate
    ? "M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm0,19a1.5,1.5,0,1,1,1.5-1.5A1.5,1.5,0,0,1,12,19Zm1.6-6.08a1,1,0,0,0-.6.917,1,1,0,1,1-2,0,3,3,0,0,1,1.8-2.75A2,2,0,1,0,10,9.255a1,1,0,1,1-2,0,4,4,0,1,1,5.6,3.666Z"
    : "M8.795 15.875l-4.17-4.17-1.42 1.41 5.59 5.59 12-12-1.41-1.41-10.59 10.58z";

  /*
    boxSize - controls the size of the "checked" icon.
    color - does absolutely nothing?
    path:fill - can only control color with hardcoded value?
  */
  return (
    <Icon viewBox="0 0 24 24" boxSize={6} color="ui.focus" {...rest}>
      <path fill="#4181f1" d={d} />
    </Icon>
  );
}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  (props, ref?) => {
    const {
      className,
      errorText,
      helperText,
      id,
      isChecked,
      isDisabled = false,
      isInvalid = false,
      isRequired = false,
      labelText,
      name,
      showLabel = true,
      value,
    } = props;

    const styles = useMultiStyleConfig("Checkbox", {});
    const footnote = isInvalid ? errorText : helperText;
    const attributes = {};
    const checkboxID = id || generateUUID();
    const onChange = props.onChange || onChangeDefault;

    if (!showLabel) {
      attributes["aria-label"] =
        labelText && footnote ? `${labelText} - ${footnote}` : labelText;
    } else {
      if (footnote) attributes["aria-describedby"] = `${checkboxID}-helperText`;
    }

    return (
      <>
        <ChakraCheckbox
          id={checkboxID}
          className={className}
          name={name || "default"}
          {...(isDisabled && {
            isDisabled: true,
          })}
          isInvalid={isInvalid}
          isRequired={isRequired}
          ref={ref}
          value={value}
          {...(isChecked !== undefined
            ? {
                isChecked: isChecked,
                onChange: onChange,
              }
            : {
                defaultIsChecked: false,
              })}
          size="lg"
          // @TODO why not just set these in the checkbox theme?
          colorScheme="white"
          borderColor="ui.black"
          icon={<CheckboxIcon />}
          __css={styles}
          {...attributes}
        >
          {showLabel && labelText}
        </ChakraCheckbox>
        {footnote && showLabel && (
          <Box __css={styles.helper} aria-disabled={isDisabled}>
            <HelperErrorText
              isError={isInvalid}
              id={`${checkboxID}-helperText`}
            >
              {footnote}
            </HelperErrorText>
          </Box>
        )}
      </>
    );
  }
);

Checkbox.displayName = "Checkbox";

export default Checkbox;
