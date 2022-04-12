import { Stack, useMultiStyleConfig, useRadioGroup } from "@chakra-ui/react";
import * as React from "react";

import Fieldset from "../Fieldset/Fieldset";
import HelperErrorText, {
  HelperErrorTextType,
} from "../HelperErrorText/HelperErrorText";
import { spacing } from "../../theme/foundations/spacing";
import Radio from "../Radio/Radio";
import { LayoutTypes } from "../../helpers/enums";
export interface RadioGroupProps {
  /** Additional class name. */
  className?: string;
  /** Populates the initial value of the input */
  defaultValue?: string;
  /** Optional string to populate the HelperErrorText for standard state */
  helperText?: HelperErrorTextType;
  /** ID that other components can cross reference for accessibility purposes */
  id: string;
  /** Optional string to populate the HelperErrorText for error state */
  invalidText?: HelperErrorTextType;
  /** Adds the 'disabled' prop to the input when true. */
  isDisabled?: boolean;
  /** Set's the `Radio`s' wrapper to be full width. */
  isFullWidth?: boolean;
  /** Adds the 'aria-invalid' attribute to the input and
   * sets the error state when true. */
  isInvalid?: boolean;
  /** Adds the 'required' attribute to the input when true. */
  isRequired?: boolean;
  /** The radio group label displayed in a `legend` element if `showlabel` is
   * true, or an "aria-label" if `showLabel` is false. */
  labelText: string;
  /** Renders the Radio buttons in a row or column (default). */
  layout?: LayoutTypes;
  /** The `name` prop indicates the form group for all the Radio children. */
  name: string;
  /** The action to perform on the `<input>`'s onChange function  */
  onChange?: (value: string) => void;
  /** Offers the ability to hide the helper/invalid text. */
  showHelperInvalidText?: boolean;
  /** Offers the ability to show the group's legend onscreen or hide it. Refer
   * to the `labelText` property for more information. */
  showLabel?: boolean;
  /** Whether or not to display the "(Required)" text in the label text.
   * True by default. */
  showRequiredLabel?: boolean;
}

const noop = () => {};
export const onChangeDefault = () => {
  return;
};

const RadioGroup = React.forwardRef<
  HTMLInputElement,
  React.PropsWithChildren<RadioGroupProps>
>((props, ref?) => {
  const {
    children,
    className = "",
    defaultValue,
    helperText,
    id,
    invalidText,
    isDisabled = false,
    isFullWidth = false,
    isInvalid = false,
    isRequired = false,
    labelText,
    layout = LayoutTypes.Column,
    name,
    onChange = onChangeDefault,
    showHelperInvalidText = true,
    showLabel = true,
    showRequiredLabel = true,
  } = props;
  const footnote: HelperErrorTextType = isInvalid ? invalidText : helperText;
  const spacingProp = layout === LayoutTypes.Column ? spacing.s : spacing.l;
  const newChildren = [];

  if (!id) {
    console.warn(
      "NYPL Reservoir RadioGroup: This component's required `id` prop was not passed."
    );
  }

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
          "NYPL Reservoir RadioGroup: Only `Radio` components are allowed " +
            "inside the `RadioGroup` component."
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
  const styles = useMultiStyleConfig("RadioGroup", { isFullWidth });

  return (
    <Fieldset
      className={className}
      id={`radio-group-${id}`}
      isLegendHidden={!showLabel}
      isRequired={isRequired}
      legendText={labelText}
      showRequiredLabel={showRequiredLabel}
    >
      <Stack
        aria-label={!showLabel ? labelText : null}
        direction={[layout]}
        spacing={spacingProp}
        ref={ref}
        {...radioGroupProps}
        sx={styles.stack}
      >
        {newChildren}
      </Stack>
      {footnote && showHelperInvalidText && (
        <HelperErrorText
          additionalStyles={styles.helperErrorText}
          id={`${id}-helperErrorText`}
          isInvalid={isInvalid}
          text={footnote}
        />
      )}
    </Fieldset>
  );
});

export default RadioGroup;
