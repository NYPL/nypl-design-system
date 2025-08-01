import {
  Box,
  BoxProps,
  chakra,
  ChakraComponent,
  ChakraProps,
  Switch,
  useMultiStyleConfig,
  useStyleConfig,
} from "@chakra-ui/react";
import React, { forwardRef, InputHTMLAttributes } from "react";

import ComponentWrapper from "../ComponentWrapper/ComponentWrapper";
import { HelperErrorTextType } from "../HelperErrorText/HelperErrorText";
import { getAriaAttrs } from "../../utils/utils";
import { useSafeId } from "../../hooks/useSafeId";

export const toggleSizesArray = ["default", "small"] as const;
export type ToggleSizes = typeof toggleSizesArray[number];

export interface ToggleProps
  extends Pick<BoxProps, keyof ChakraProps>,
    Omit<
      InputHTMLAttributes<HTMLInputElement>,
      "color" | "height" | "size" | "width"
    > {
  /** Used for uncontrolled scenarios.  Sets the state of the Toggle when the page first loads.
   *   If true, the toggle will be initially set to the "on" position. */
  defaultChecked?: boolean;
  /** Optional string to populate the HelperErrorText for standard state */
  helperText?: HelperErrorTextType;
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
  /** The size of the Toggle. Defaults to "large". */
  size?: ToggleSizes;
}

export const onChangeDefault = () => {
  return;
};

/**
 * Component that renders Chakra's `Switch` component along with NYPL defaults.
 */
export const Toggle: ChakraComponent<
  React.ForwardRefExoticComponent<
    ToggleProps & React.RefAttributes<HTMLInputElement>
  >,
  ToggleProps
> = chakra(
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
      ...rest
    } = props;
    const mainId = useSafeId(id);
    const styles = useMultiStyleConfig("Toggle", { isDisabled, size });
    const switchStyles = useStyleConfig("Switch", { size });
    const footnote = isInvalid ? invalidText : helperText;
    const ariaAttributes = getAriaAttrs({
      footnote,
      id: mainId,
      labelText,
      name: "Toggle",
      showLabel: true,
    });

    return (
      <ComponentWrapper
        data-testid="ds-toggle"
        helperText={helperText}
        helperTextStyles={styles.helperErrorText}
        id={mainId}
        invalidText={invalidText}
        isInvalid={isInvalid}
        {...rest}
      >
        <Box __css={styles}>
          <Switch
            id={mainId}
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
        </Box>
      </ComponentWrapper>
    );
  })
);

export default Toggle;
