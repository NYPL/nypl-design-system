import * as React from "react";
import {
  Box,
  FormLabel,
  Switch,
  useMultiStyleConfig,
  useStyleConfig,
} from "@chakra-ui/react";
import generateUUID from "../../helpers/generateUUID";
import { ToggleSizes } from "./ToggleSizes";
import HelperErrorText from "../HelperErrorText/HelperErrorText";

export interface ToggleProps {
  /** Optionally pass in additional Chakra-based styles. */
  additionalStyles?: { [key: string]: any };
  /** Used for uncontrolled scenarios.  Sets the state of the Toggle when the page first loads.
   *   If true, the toggle will be initially set to the "on" position. */
  defaultChecked?: boolean;
  /** Optional string to populate the HelperErrorText for standard state */
  helperText?: string;
  /** ID that other components can cross reference for accessibility purposes */
  id?: string;
  /** Optional string to populate the HelperErrorText for the error state
   * when `isInvalid` is true. */
  invalidText?: string;
  /** When using the Toggle as a "controlled" form element, you can specify
   * the Toggle's checked state using this prop.
   * Learn more about controlled and uncontrolled form fields:
   * https://goshakkk.name/controlled-vs-uncontrolled-inputs-react/ */
  isChecked?: boolean;
  /** Adds the 'disabled' and `aria-disabled` attributes to the input when true.
   * This also makes the text italic and color scheme gray. */
  isDisabled?: boolean;
  /** Adds the 'aria-invalid' attribute to the input when true. This also makes
   * the color theme "NYPL error" red for the button and text. */
  isInvalid?: boolean;
  /** Adds the 'required' attribute to the input when true. */
  isRequired?: boolean;
  /** The checkbox's label. This will serve as the text content for a `<label>`
   * element if `showlabel` is true, or an "aria-label" if `showLabel` is false. */
  labelText: string;
  /** The name prop indicates into which group of checkboxes this checkbox
   * belongs. If none is specified, 'default' will be used */
  name?: string;
  /** The action to perform on the `<input>`'s onChange function  */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  /** Offers the ability to hide the helper/invalid text. */
  size?: ToggleSizes;
}

export const onChangeDefault = () => {
  return;
};

const Toggle = React.forwardRef<HTMLInputElement, ToggleProps>(
  (props, ref?) => {
    const {
      additionalStyles = {},
      invalidText,
      defaultChecked = false,
      helperText,
      id = generateUUID(),
      isChecked,
      isDisabled = false,
      isInvalid = false,
      isRequired = false,
      labelText,
      name,
      size = ToggleSizes.Large,
    } = props;
    const footnote = isInvalid ? invalidText : helperText;
    const ariaAttributes = {};
    const onChange = props.onChange || onChangeDefault;
    const styles = useMultiStyleConfig("Toggle", {});
    const switchStyles = useStyleConfig("Switch");
    ariaAttributes["aria-label"] =
      labelText && footnote ? `${labelText} - ${footnote}` : labelText;
    const variant = isDisabled ? "disabled" : isInvalid ? "error" : "standard";

    return (
      <>
        <Box
          display="flex"
          alignItems="center"
          __css={{ ...styles, ...additionalStyles }}
        >
          <Switch
            id={id}
            name={name || "default"}
            isDisabled={isDisabled}
            isInvalid={isInvalid}
            isRequired={isRequired}
            ref={ref}
            size={size}
            variant={variant}
            {...(isChecked !== undefined
              ? {
                  isChecked,
                  onChange,
                }
              : {
                  defaultChecked,
                })}
            {...ariaAttributes}
            __css={switchStyles}
          />
          <Box __css={styles.label}>
            <FormLabel htmlFor={id}>{labelText}</FormLabel>
          </Box>
        </Box>
        {(invalidText || helperText) && (
          <Box __css={styles.helper}>
            <HelperErrorText isInvalid={isInvalid} id={`${id}-helperText`}>
              {isInvalid ? invalidText : helperText}
            </HelperErrorText>
          </Box>
        )}
      </>
    );
  }
);

export default Toggle;
