import * as React from "react";
import {
  Box,
  Stack,
  useMultiStyleConfig,
  useRadioGroup,
} from "@chakra-ui/react";

import HelperErrorText from "../HelperErrorText/HelperErrorText";
import generateUUID from "../../helpers/generateUUID";
import { spacing } from "../../theme/foundations/spacing";
import { RadioGroupLayoutTypes } from "./RadioGroupLayoutTypes";
import Radio from "../Radio/Radio";
export interface RadioGroupProps {
  /** Any child node passed to the component. */
  children: React.ReactNode;
  /** Additional class name. */
  className?: string;
  /** Populates the initial value of the input */
  defaultValue?: string;
  /** Optional string to populate the HelperErrorText for error state */
  invalidText?: string;
  /** Optional string to populate the HelperErrorText for standard state */
  helperText?: string;
  /** ID that other components can cross reference for accessibility purposes */
  id?: string;
  /** Adds the 'disabled' prop to the input when true. */
  isDisabled?: boolean;
  /** Adds the 'aria-invalid' attribute to the input and
   * sets the error state when true. */
  isInvalid?: boolean;
  /** Adds the 'required' attribute to the input when true. */
  isRequired?: boolean;
  /** The radio group label displayed in a `legend` element if `showlabel` is
   * true, or an "aria-label" if `showLabel` is false. */
  labelText: string;
  /** Renders the Radio buttons in a row or column (default). */
  layout?: RadioGroupLayoutTypes;
  /** The `name` prop indicates the form group for all the Radio children. */
  name: string;
  /** The action to perform on the `<input>`'s onChange function  */
  onChange?: (value: string) => void;
  /** Whether or not to display "Required"/"Optional" in the label text. */
  optReqFlag?: boolean;
  /** Offers the ability to show the group's legend onscreen or hide it. Refer
   * to the `labelText` property for more information. */
  showLabel?: boolean;
}

export const onChangeDefault = () => {
  return;
};

const RadioGroup = React.forwardRef<HTMLInputElement, RadioGroupProps>(
  (props, ref?) => {
    const {
      children,
      className = "",
      defaultValue,
      invalidText,
      helperText,
      id = generateUUID(),
      isDisabled = false,
      isInvalid = false,
      isRequired = false,
      labelText,
      layout = RadioGroupLayoutTypes.Column,
      name,
      onChange = onChangeDefault,
      optReqFlag = true,
      showLabel = true,
    } = props;
    const footnote = isInvalid ? invalidText : helperText;
    const spacingProp =
      layout === RadioGroupLayoutTypes.Column ? spacing.s : spacing.l;
    const newChildren = [];

    // Use Chakra's RadioGroup hook to set and get the proper props
    // or the custom components.
    const { getRootProps, getRadioProps } = useRadioGroup({
      name,
      defaultValue,
      onChange,
    });
    const radioGroupProps = getRootProps();

    // Go through the Radio children and update them as needed.
    React.Children.map(children, (child: React.ReactElement, i) => {
      if (child.type !== Radio) {
        // Special case for Storybook MDX documentation.
        if (child.props.mdxType && child.props.mdxType === "Radio") {
          () => {};
        } else {
          console.warn(
            "Only `Radio` components are allowed inside the `RadioGroup` component."
          );
        }
      }

      const chakraRadioProps = getRadioProps({
        value: child.props.value,
      } as any);
      const newProps = { key: i };

      if (child !== undefined && child !== null) {
        if (isDisabled) {
          newProps["isDisabled"] = true;
        }
        if (isInvalid) {
          newProps["isInvalid"] = true;
        }
        if (isRequired) {
          newProps["isRequired"] = true;
        }
        if (child.props.value === defaultValue) {
          newProps["checked"] = true;
        }
        newChildren.push(
          React.cloneElement(child, { ...newProps, ...chakraRadioProps })
        );
      }
    });

    // Get the Chakra-based styles for all the custom elements in this component.
    const styles = useMultiStyleConfig("CustomRadioGroup", {});

    return (
      <Box
        as="fieldset"
        id={`radio-group-${id}`}
        className={className}
        __css={styles}
      >
        <legend className={showLabel ? "" : "sr-only"}>
          <span>{labelText}</span>
          {optReqFlag && (
            <Box as="span" __css={styles.required}>
              {isRequired ? "Required" : "Optional"}
            </Box>
          )}
        </legend>
        <Stack
          direction={[layout]}
          spacing={spacingProp}
          ref={ref}
          aria-label={!showLabel ? labelText : null}
          {...radioGroupProps}
        >
          {newChildren}
        </Stack>
        {footnote && (
          <Box __css={styles.helper}>
            <HelperErrorText isError={isInvalid}>{footnote}</HelperErrorText>
          </Box>
        )}
      </Box>
    );
  }
);

export default RadioGroup;
