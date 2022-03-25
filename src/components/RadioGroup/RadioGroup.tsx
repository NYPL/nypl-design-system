import {
  Box,
  RadioGroup as ChakraRadioGroup,
  Stack,
  useMultiStyleConfig,
} from "@chakra-ui/react";
import * as React from "react";

import Fieldset from "../Fieldset/Fieldset";
import HelperErrorText, {
  HelperErrorTextType,
} from "../HelperErrorText/HelperErrorText";
import { spacing } from "../../theme/foundations/spacing";
import Radio from "../Radio/Radio";
import { RadioGroupLayoutTypes } from "./RadioGroupLayoutTypes";
import generateUUID from "../../helpers/generateUUID";

export interface RadioGroupProps {
  /** Additional class name. */
  className?: string;
  /** Populates the initial value of the input */
  defaultValue?: string;
  /** Optional string to populate the HelperErrorText for standard state */
  helperText?: HelperErrorTextType;
  /** ID that other components can cross reference for accessibility purposes */
  id?: string;
  /** Optional string to populate the HelperErrorText for error state */
  invalidText?: HelperErrorTextType;
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

/**
 * RadioGroup is a wrapper for DS `Radio` components that renders as a fieldset
 * HTML element along with optional helper text. The `name` prop is essential
 * for this form group element and is not needed for individual DS `Radio`
 * components when `RadioGroup` is used.
 */
const RadioGroup = React.forwardRef<
  any,
  React.PropsWithChildren<RadioGroupProps>
>((props, ref?) => {
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
    onChange,
    optReqFlag = true,
    showHelperInvalidText = true,
    showLabel = true,
  } = props;
  const [value, setValue] = React.useState(defaultValue);
  const footnote: HelperErrorTextType = isInvalid ? invalidText : helperText;
  const spacingProp =
    layout === RadioGroupLayoutTypes.Column ? spacing.s : spacing.l;
  const newChildren: JSX.Element[] = [];
  // Get the Chakra-based styles for the custom elements in this component.
  const styles = useMultiStyleConfig("RadioGroup", {});
  // Props for the `ChakraRadioGroup` component.
  const radioGroupProps = {
    ["aria-label"]: !showLabel ? labelText : undefined,
    name,
    onChange: (selected: string) => {
      setValue(selected);
      onChange && onChange(selected);
    },
    ref,
    value,
  };

  // Go through the Radio children and update them as needed.
  React.Children.map(children, (child: React.ReactElement, key) => {
    if (child?.type !== Radio) {
      // Special case for Storybook MDX documentation.
      if (child.props?.mdxType && child.props?.mdxType === "Radio") {
        noop();
      } else {
        console.warn(
          "Only `Radio` components are allowed inside the `RadioGroup` component."
        );
      }
    }

    if (child !== undefined && child !== null) {
      const newProps = {
        key,
        isDisabled,
        isInvalid,
        isRequired,
      };
      newChildren.push(React.cloneElement(child, newProps));
    }
  });

  return (
    <Fieldset
      className={className}
      id={`radio-group-${id}`}
      isLegendHidden={!showLabel}
      legendText={labelText}
      optReqFlag={optReqFlag}
    >
      <ChakraRadioGroup {...radioGroupProps}>
        <Stack direction={[layout]} spacing={spacingProp} sx={styles.stack}>
          {newChildren}
        </Stack>
      </ChakraRadioGroup>
      {footnote && showHelperInvalidText && (
        <Box __css={styles.helper}>
          <HelperErrorText
            id={`${id}-helperErrorText`}
            isInvalid={isInvalid}
            text={footnote}
          />
        </Box>
      )}
    </Fieldset>
  );
});

export default RadioGroup;
