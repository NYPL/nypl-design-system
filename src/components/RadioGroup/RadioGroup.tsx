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
import Fieldset from "../Fieldset/Fieldset";

export interface RadioGroupProps {
  /** Any child node passed to the component. */
  children: React.ReactNode;
  /** Additional class name. */
  className?: string;
  /** Populates the initial value of the input */
  defaultValue?: string;
  /** Optional string to populate the HelperErrorText for standard state */
  helperText?: string;
  /** ID that other components can cross reference for accessibility purposes */
  id?: string;
  /** Optional string to populate the HelperErrorText for error state */
  invalidText?: string;
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
  /** Offers the ability to hide the helper/invalid text. */
  showHelperInvalidText?: boolean;
  /** Offers the ability to show the group's legend onscreen or hide it. Refer
   * to the `labelText` property for more information. */
  showLabel?: boolean;
}

const noop = () => {};
export const onChangeDefault = () => {
  return;
};

const RadioGroup = React.forwardRef<HTMLInputElement, RadioGroupProps>(
  (props, ref?) => {
    const {
      children,
      className = "",
      defaultValue,
      helperText,
      id = generateUUID(),
      invalidText,
      isDisabled = false,
      isInvalid = false,
      isRequired = false,
      labelText,
      layout = RadioGroupLayoutTypes.Column,
      name,
      onChange = onChangeDefault,
      optReqFlag = true,
      showHelperInvalidText = true,
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
          noop();
        } else {
          console.warn(
            "Only `Radio` components are allowed inside the `RadioGroup` component."
          );
        }
      }

      const chakraRadioProps = getRadioProps({
        value: child.props.value,
      } as any);

      if (child !== undefined && child !== null) {
        const newProps = { key: i, isDisabled, isInvalid, isRequired };
        if (child.props.value === defaultValue) {
          newProps["checked"] = true;
        }
        newChildren.push(
          React.cloneElement(child, { ...newProps, ...chakraRadioProps })
        );
      }
    });

    // Get the Chakra-based styles for the custom elements in this component.
    const styles = useMultiStyleConfig("RadioGroup", {});

    return (
      <Fieldset
        id={`radio-group-${id}`}
        className={className}
        isLegendHidden={!showLabel}
        legendText={labelText}
        optReqFlag={optReqFlag}
      >
        <Stack
          direction={[layout]}
          spacing={spacingProp}
          ref={ref}
          aria-label={!showLabel ? labelText : null}
          {...radioGroupProps}
          sx={styles.stack}
        >
          {newChildren}
        </Stack>
        {footnote && showHelperInvalidText && (
          <Box __css={styles.helper}>
            <HelperErrorText isInvalid={isInvalid} id={`${id}-helperErrorText`}>
              {footnote}
            </HelperErrorText>
          </Box>
        )}
      </Fieldset>
    );
  }
);

export default RadioGroup;
