import * as React from "react";
import {
  Box,
  CheckboxGroup as ChakraCheckboxGroup,
  Stack,
  useMultiStyleConfig,
} from "@chakra-ui/react";

import Checkbox from "../Checkbox/Checkbox";
import Fieldset from "../Fieldset/Fieldset";
import HelperErrorText, {
  HelperErrorTextType,
} from "../HelperErrorText/HelperErrorText";
import { LayoutTypes } from "../../helpers/enums";
import { spacing } from "../../theme/foundations/spacing";
import generateUUID from "../../helpers/generateUUID";

export interface CheckboxGroupProps {
  /** Any child node passed to the component. */
  children: React.ReactNode;
  /** Populates the initial value of the input */
  defaultValue?: string[];
  /** Optional string to populate the HelperErrorText for standard state */
  helperText?: HelperErrorTextType;
  /** ID that other components can cross reference for accessibility purposes */
  id?: string;
  /** Optional string to populate the HelperErrorText for error state */
  invalidText?: HelperErrorTextType;
  /** Adds the 'disabled' prop to the input when true. */
  isDisabled?: boolean;
  /** Set's the `Checkbox`s' wrapper to be full width. */
  isFullWidth?: boolean;
  /** A`dds the 'aria-invalid' attribute to the input and
   * sets the error state when true. */
  isInvalid?: boolean;
  /** Adds the 'required' attribute to the input when true. */
  isRequired?: boolean;
  /** The checkbox group label displayed in a `legend` element if `showlabel` is
   * true, or an "aria-label" if `showLabel` is false. */
  labelText: string;
  /** Renders the checkbox buttons in a row or column (default). */
  layout?: LayoutTypes;
  /** The `name` prop indicates the form group for all the `Checkbox` children. */
  name: string;
  /** The action to perform on the `<input>`'s onChange function  */
  onChange?: (value: string[]) => void;
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
 * Wrapper component to wrap `Checkbox` components. Can be displayed in a
 * column or in a row. The `CheckboxGroup` component renders all the necessary
 * wrapping and associated text elements, but the checkbox input elements
 * _need_ to be child `Checkbox` components from the NYPL Design System.
 */
const CheckboxGroup = React.forwardRef<HTMLInputElement, CheckboxGroupProps>(
  (props, ref?) => {
    const {
      children,
      defaultValue = [],
      helperText,
      id = generateUUID(),
      invalidText,
      isDisabled = false,
      isFullWidth = false,
      isInvalid = false,
      isRequired = false,
      labelText,
      layout = LayoutTypes.Column,
      name,
      onChange,
      optReqFlag = true,
      showHelperInvalidText = true,
      showLabel = true,
    } = props;
    const footnote: HelperErrorTextType = isInvalid ? invalidText : helperText;
    const spacingProp = layout === LayoutTypes.Column ? spacing.s : spacing.l;
    const newChildren = [];
    const checkboxProps =
      defaultValue && onChange
        ? {
            defaultValue,
            onChange,
          }
        : {};

    // Go through the Checkbox children and update them as needed.
    React.Children.map(children, (child: React.ReactElement, i) => {
      if (child.type !== Checkbox) {
        // Special case for Storybook MDX documentation.
        if (child.props.mdxType && child.props.mdxType === "Checkbox") {
          noop();
        } else {
          console.warn(
            "NYPL Reservoir CheckboxGroup: Only `Checkbox` components are " +
              "allowed as children."
          );
        }
      }

      if (child !== undefined && child !== null) {
        const newProps = {
          key: i,
          id: `${id}-${i}`,
          name,
          isDisabled,
          isInvalid,
          isRequired,
        };
        newChildren.push(React.cloneElement(child, newProps));
      }
    });

    // Get the Chakra-based styles for the custom elements in this component.
    const styles = useMultiStyleConfig("CheckboxGroup", { isFullWidth });

    return (
      <Fieldset
        id={`${id}-checkbox-group`}
        isLegendHidden={!showLabel}
        isRequired={isRequired}
        legendText={labelText}
        optReqFlag={optReqFlag}
      >
        <ChakraCheckboxGroup {...checkboxProps}>
          <Stack
            id={id}
            data-testid="checkbox-group"
            direction={[layout]}
            spacing={spacingProp}
            ref={ref}
            aria-label={!showLabel ? labelText : null}
            sx={styles.stack}
          >
            {newChildren}
          </Stack>
        </ChakraCheckboxGroup>
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
  }
);

export default CheckboxGroup;
