import {
  Box,
  chakra,
  Switch,
  useMultiStyleConfig,
  useStyleConfig,
} from "@chakra-ui/react";
import * as React from "react";

import HelperErrorText, {
  HelperErrorTextType,
} from "../HelperErrorText/HelperErrorText";
import { ToggleSizes } from "./ToggleTypes";
import { AriaAttributes } from "../../utils/interfaces";
export interface ToggleProps {
  /** Optionally pass in additional Chakra-based styles. */
  additionalStyles?: { [key: string]: any };
  /** Used for uncontrolled scenarios.  Sets the state of the Toggle when the page first loads.
   *   If true, the toggle will be initially set to the "on" position. */
  defaultChecked?: boolean;
  /** Optional string to populate the HelperErrorText for standard state */
  helperText?: HelperErrorTextType;
  /** ID that other components can cross reference for accessibility purposes */
  id: string;
  /** Optional string to populate the HelperErrorText for the error state
   * when `isInvalid` is true. */
  invalidText?: HelperErrorTextType;
  /** When using the Toggle as a "controlled" form element, you can specify
   * the Toggle's checked state using this prop.
   * Learn more about controlled and uncontrolled form fields:
   * https://goshakkk.name/controlled-vs-uncontrolled-inputs-react/ */
  isChecked?: boolean;
  /** Adds the 'disabled' and `aria-disabled` attributes to the input when true.
   * This also makes the text italic and color scheme gray. */
  isDisabled?: boolean;
  /** Adds the 'aria-invalid' attribute to the input when true. */
  isInvalid?: boolean;
  /** Adds the 'required' attribute to the input when true. */
  isRequired?: boolean;
  /** The toggle's label. This will serve as the text content for the `<label>` element */
  labelText: string;
  /** The name prop indicates the `Toggle`'s form element name. If none is
   * specified, 'default' will be used. */
  name?: string;
  /** The action to perform on the `<input>`'s onChange function  */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  /** The size of the Toggle. Defaults to "large". */
  size?: ToggleSizes;
}

export const onChangeDefault = () => {
  return;
};

/**
 * Component that renders Chakra's `Switch` component along with NYPL defaults.
 */
export const Toggle = chakra(
  React.forwardRef<HTMLInputElement, ToggleProps>((props, ref?) => {
    const {
      additionalStyles = {},
      defaultChecked = false,
      helperText,
      id,
      invalidText,
      isChecked,
      isDisabled = false,
      isInvalid = false,
      isRequired = false,
      labelText,
      name,
      onChange = onChangeDefault,
      size = ToggleSizes.Default,
      ...rest
    } = props;
    const footnote = isInvalid ? invalidText : helperText;
    const ariaAttributes: AriaAttributes = {};
    const styles = useMultiStyleConfig("Toggle", { isDisabled, size });
    const switchStyles = useStyleConfig("Switch", { size });
    ariaAttributes["aria-label"] =
      labelText && footnote ? `${labelText} - ${footnote}` : labelText;

    if (!id) {
      console.warn(
        "NYPL Reservoir Toggle: This component's required `id` prop was not passed."
      );
    }

    return (
      <>
        <Box __css={{ ...styles, ...additionalStyles }} {...rest}>
          <Switch
            id={id}
            name={name || "default"}
            isDisabled={isDisabled}
            isInvalid={isInvalid}
            isRequired={isRequired}
            ref={ref}
            size={size === ToggleSizes.Default ? "lg" : "sm"}
            lineHeight="1.5"
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
          >
            {labelText}
          </Switch>
        </Box>
        {footnote && (
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

export default Toggle;
