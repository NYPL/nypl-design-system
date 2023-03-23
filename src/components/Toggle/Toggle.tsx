import {
  Box,
  chakra,
  Switch,
  useMultiStyleConfig,
  useStyleConfig,
} from "@chakra-ui/react";
import React, { forwardRef } from "react";

import ComponentWrapper from "../ComponentWrapper/ComponentWrapper";
import { HelperErrorTextType } from "../HelperErrorText/HelperErrorText";
import { getAriaAttrs } from "../../utils/utils";
import Tooltip from "../Tooltip/Tooltip";

export type ToggleSizes = "default" | "small";
export interface ToggleProps {
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
  tooltipLabelText?: any;
}

export const onChangeDefault = () => {
  return;
};

/**
 * Component that renders Chakra's `Switch` component along with NYPL defaults.
 */
export const Toggle = chakra(
  forwardRef<HTMLInputElement, ToggleProps>((props, ref?) => {
    const {
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
      size = "default",
      tooltipLabelText,
      ...rest
    } = props;
    const styles = useMultiStyleConfig("Toggle", { isDisabled, size });
    const switchStyles = useStyleConfig("Switch", { size });
    const footnote = isInvalid ? invalidText : helperText;
    const ariaAttributes = getAriaAttrs({
      footnote,
      id,
      labelText,
      name: "Toggle",
      showLabel: true,
    });

    if (!id) {
      console.warn(
        "NYPL Reservoir Toggle: This component's required `id` prop was not passed."
      );
    }

    return (
      <ComponentWrapper
        helperText={helperText}
        helperTextStyles={styles.helperErrorText}
        id={id}
        invalidText={invalidText}
        isInvalid={isInvalid}
        {...rest}
      >
        <Box __css={styles}>
          {tooltipLabelText ? (
            <Tooltip content={tooltipLabelText}>
              <Switch
                id={id}
                isDisabled={isDisabled}
                isInvalid={isInvalid}
                isRequired={isRequired}
                name={name || "default"}
                ref={ref}
                size={size === "default" ? "lg" : "sm"}
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
            </Tooltip>
          ) : (
            <Switch
              id={id}
              isDisabled={isDisabled}
              isInvalid={isInvalid}
              isRequired={isRequired}
              name={name || "default"}
              ref={ref}
              size={size === "default" ? "lg" : "sm"}
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
          )}
        </Box>
      </ComponentWrapper>
    );
  })
);

export default Toggle;
