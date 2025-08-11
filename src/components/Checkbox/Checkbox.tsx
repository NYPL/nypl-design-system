import {
  BoxProps,
  chakra,
  ChakraComponent,
  ChakraProps,
  Checkbox as ChakraCheckbox,
  useMultiStyleConfig,
} from "@chakra-ui/react";
import React, { forwardRef, InputHTMLAttributes } from "react";

import ComponentWrapper from "../ComponentWrapper/ComponentWrapper";
import { HelperErrorTextType } from "../HelperErrorText/HelperErrorText";
import Icon from "../Icons/Icon";
import { getAriaAttrs } from "../../utils/utils";
import { useSafeId } from "../../hooks/useSafeId";
import { useCheckboxGroup } from "../CheckboxGroup/CheckboxGroupContext";

interface CheckboxIconProps {
  /** When using the Checkbox as a "controlled" form element, you can specify
   * the Checkbox's checked state using this prop.
   * Learn more about controlled and uncontrolled form fields:
   * https://goshakkk.name/controlled-vs-uncontrolled-inputs-react/ */
  isChecked?: boolean;
  /** Adds the indeterminate state to the `Checkbox`. */
  isIndeterminate?: boolean;
}

export interface CheckboxProps
  extends Pick<BoxProps, keyof ChakraProps>,
    CheckboxIconProps,
    Omit<InputHTMLAttributes<HTMLInputElement>, "color" | "height" | "width"> {
  /** Optional string to populate the HelperErrorText for standard state */
  helperText?: HelperErrorTextType;
  /** Optional string to populate the HelperErrorText for the error state
   * when `isInvalid` is true. */
  invalidText?: HelperErrorTextType;
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
  labelText: string | JSX.Element;
  /** Offers the ability to hide the helper/invalid text. */
  showHelperInvalidText?: boolean;
  /** Offers the ability to show the checkbox's label onscreen or hide it.
   * Refer to the `labelText` property for more information. */
  showLabel?: boolean;
  /** Populates the value of the input */
  value?: string;
}

function CheckboxIcon(props: CheckboxIconProps) {
  // We don't need the `isIndeterminate` or `isChecked` props but it
  // causes rendering issues on the SVG element, so we remove them
  // before passing all the props to the `Icon` component.
  const { isIndeterminate, isChecked } = props;

  return isChecked || isIndeterminate ? (
    <Icon name="utilityCheck" sx={{ fill: "currentColor" }} />
  ) : null;
}

export const Checkbox: ChakraComponent<
  React.ForwardRefExoticComponent<
    CheckboxProps & React.RefAttributes<HTMLInputElement>
  >,
  CheckboxProps
> = chakra(
  forwardRef<HTMLInputElement, CheckboxProps>((props, ref?) => {
    const {
      helperText,
      id,
      invalidText,
      isChecked,
      isDisabled = false,
      isIndeterminate = false,
      isInvalid = false,
      isRequired = false,
      labelText,
      name = "default",
      onChange,
      showHelperInvalidText = true,
      showLabel = true,
      value,
      ...rest
    } = props;
    const mainId = useSafeId(id);
    const styles = useMultiStyleConfig("Checkbox", {});
    const groupProps = useCheckboxGroup();
    const footnote = isInvalid ? invalidText : helperText;
    // Use Chakra's default indeterminate icon.
    const icon = !isIndeterminate ? <CheckboxIcon /> : undefined;
    const ariaAttributes = getAriaAttrs({
      footnote,
      id: mainId,
      labelText,
      name: "Checkbox",
      showLabel,
    });

    return (
      <ComponentWrapper
        data-testid="ds-checkbox"
        helperText={helperText}
        helperTextStyles={styles.helperErrorText}
        id={mainId}
        invalidText={invalidText}
        isInvalid={isInvalid}
        showHelperInvalidText={showHelperInvalidText}
        {...rest}
      >
        <ChakraCheckbox
          icon={icon}
          id={mainId}
          isDisabled={groupProps?.isDisabled || isDisabled}
          isIndeterminate={isIndeterminate}
          isInvalid={groupProps?.isInvalid || isInvalid}
          isRequired={groupProps?.isRequired || isRequired}
          name={groupProps?.name || name}
          ref={ref}
          value={value}
          {...(isChecked !== undefined
            ? {
                isChecked,
                onChange,
              }
            : {
                defaultChecked: false,
              })}
          __css={styles.base}
          {...ariaAttributes}
        >
          {showLabel && labelText}
        </ChakraCheckbox>
      </ComponentWrapper>
    );
  })
);

export default Checkbox;
