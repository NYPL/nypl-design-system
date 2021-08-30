import * as React from "react";
import { RadioGroup as ChakraRadioGroup, Stack } from "@chakra-ui/react";

import HelperErrorText from "../HelperErrorText/HelperErrorText";
import generateUUID from "../../helpers/generateUUID";
import { spacing } from "../../theme/foundations/spacing";

export enum RadioGroupLayouts {
  Vertical = "vertical",
  Horizontal = "horizontal",
}

type DirectionMap = { [key: string]: "column" | "row" };

export interface RadioGroupProps {
  /** The radio group label. */
  labelText: string;
  /** className you can add in addition to 'input' */
  className?: string;
  /** Adds the 'disabled' prop to the input when true */
  disabled?: boolean;
  /** Helper for modifiers array; adds 'errored' styling */
  errored?: boolean;
  required?: boolean;
  optReqFlag?: boolean;
  /** Optional string to populate the HelperErrorText for error state */
  errorText?: string;
  /** Optional string to populate the HelperErrorText for standard state */
  helperText?: string;
  /** ID that other components can cross reference for accessibility purposes */
  id?: string;
  /** The name prop indicates into which group of radios this radio belongs.  If none is specified, 'default' will be used */
  name?: string;
  /** The action to perform on the `<input>`'s onChange function  */
  onChange?: (value: string) => string;
  /** Offers the ability to show the radio's label onscreen or hide it. Refer to the `labelText` property for more information. */
  showLabel: boolean;
  /** Populates the value of the input */
  defaultValue?: string;
  layout?: RadioGroupLayouts;
}

export const onChangeDefault = () => {
  return;
};

const directionMap: DirectionMap = {
  [RadioGroupLayouts.Vertical]: "column",
  [RadioGroupLayouts.Horizontal]: "row",
};

function RadioGroup(props: React.PropsWithChildren<RadioGroupProps>) {
  const {
    className,
    id = generateUUID(),
    children,
    name,
    defaultValue,
    onChange = onChangeDefault,
    layout = RadioGroupLayouts.Vertical,
    labelText,
    helperText,
    errorText,
    showLabel,
    errored = false,
    required,
    disabled,
  } = props;
  const baseName = "RadioGroup";
  const footnote = errored ? errorText : helperText;
  const direction = directionMap[layout];
  const newChildren = [];

  React.Children.map(children, (child: React.ReactElement, i) => {
    const attributes = { key: i };
    if (child !== undefined && child !== null) {
      attributes["name"] = name;
      if (disabled) {
        attributes["disabled"] = true;
        attributes["aria-disabled"] = true;
      }
      if (errored) {
        attributes["errored"] = true;
      }
      if (child.props.value === defaultValue) {
        attributes["checked"] = true;
      }
      newChildren.push(React.cloneElement(child, { ...attributes }));
    }
  });

  return (
    <fieldset id={`radio-group-${id}`} className={`${baseName} ${className}`}>
      <legend className={showLabel ? "" : "sr-only"}>
        <span>{labelText}</span>
        <span>{required ? "required" : "optional"}</span>
      </legend>
      <ChakraRadioGroup
        name={name}
        defaultValue={defaultValue}
        onChange={onChange}
      >
        <Stack direction={[direction]} spacing={spacing.s}>
          {newChildren}
        </Stack>
      </ChakraRadioGroup>
      {footnote && (
        <HelperErrorText isError={errored}>{footnote}</HelperErrorText>
      )}
    </fieldset>
  );
}

export default RadioGroup;
