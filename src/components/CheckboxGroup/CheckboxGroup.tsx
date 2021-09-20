import * as React from "react";
import {
  Box,
  Stack,
  CheckboxGroup as ChakraCheckboxGroup,
  useMultiStyleConfig,
} from "@chakra-ui/react";

import HelperErrorText from "../HelperErrorText/HelperErrorText";
import generateUUID from "../../helpers/generateUUID";
import { spacing } from "../../theme/foundations/spacing";
import { CheckboxGroupLayoutTypes } from "./CheckboxGroupLayoutTypes";
import Checkbox from "../Checkbox/Checkbox";

export interface CheckboxGroupProps {
  /** Any child node passed to the component. */
  children: React.ReactNode;
  /** Populates the initial value of the input */
  defaultValue?: string[];
  /** Optional string to populate the HelperErrorText for error state */
  invalidText?: string;
  /** Optional string to populate the HelperErrorText for standard state */
  helperText?: string;
  /** ID that other components can cross reference for accessibility purposes */
  id?: string;
  /** Adds the 'disabled' prop to the input when true. */
  isDisabled?: boolean;
  /** A`dds the 'aria-invalid' attribute to the input and
   * sets the error state when true. */
  isInvalid?: boolean;
  /** Adds the 'required' attribute to the input when true. */
  isRequired?: boolean;
  /** The radio group label displayed in a `legend` element if `showlabel` is
   * true, or an "aria-label" if `showLabel` is false. */
  labelText: string;
  /** Renders the Radio buttons in a row or column (default). */
  layout?: CheckboxGroupLayoutTypes;
  /** The `name` prop indicates the form group for all the Radio children. */
  name: string;
  /** The action to perform on the `<input>`'s onChange function  */
  onChange?: (value: string[]) => void;
  /** Whether or not to display "Required"/"Optional" in the label text. */
  optReqFlag?: boolean;
  /** Offers the ability to show the group's legend onscreen or hide it. Refer
   * to the `labelText` property for more information. */
  showLabel?: boolean;
}

const noop = () => {};
export const onChangeDefault = () => {
  return;
};

/**
 *
 */
const CheckboxGroup = React.forwardRef<HTMLInputElement, CheckboxGroupProps>(
  (props, ref?) => {
    const {
      children,
      defaultValue = [],
      invalidText,
      helperText,
      id = generateUUID(),
      isDisabled = false,
      isInvalid = false,
      isRequired = false,
      labelText,
      layout = CheckboxGroupLayoutTypes.Column,
      name,
      onChange = onChangeDefault,
      optReqFlag = true,
      showLabel = true,
    } = props;
    const footnote = isInvalid ? invalidText : helperText;
    const spacingProp =
      layout === CheckboxGroupLayoutTypes.Column ? spacing.s : spacing.l;
    const newChildren = [];

    // Go through the Radio children and update them as needed.
    React.Children.map(children, (child: React.ReactElement, i) => {
      if (child.type !== Checkbox) {
        // Special case for Storybook MDX documentation.
        if (child.props.mdxType && child.props.mdxType === "Checkbox") {
          noop();
        } else {
          console.warn(
            "Only `Checkbox` components are allowed inside the `CheckboxGroup` component."
          );
        }
      }

      const newProps = { key: i, name };

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
        newChildren.push(React.cloneElement(child, { ...newProps }));
      }
    });

    // Get the Chakra-based styles for all the custom elements in this component.
    const styles = useMultiStyleConfig("CustomCheckboxGroup", {});

    return (
      <Box as="fieldset" id={`radio-group-${id}`} __css={styles}>
        <legend className={showLabel ? "" : "sr-only"}>
          <span>{labelText}</span>
          {optReqFlag && (
            <Box as="span" __css={styles.required}>
              {isRequired ? "Required" : "Optional"}
            </Box>
          )}
        </legend>
        <ChakraCheckboxGroup defaultValue={defaultValue} onChange={onChange}>
          <Stack
            direction={[layout]}
            spacing={spacingProp}
            ref={ref}
            aria-label={!showLabel ? labelText : null}
          >
            {newChildren}
          </Stack>
        </ChakraCheckboxGroup>
        {footnote && (
          <Box __css={styles.helper}>
            <HelperErrorText isError={isInvalid}>{footnote}</HelperErrorText>
          </Box>
        )}
      </Box>
    );
  }
);

export default CheckboxGroup;
