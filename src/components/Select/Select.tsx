import {
  Box,
  BoxProps,
  chakra,
  ChakraComponent,
  ChakraProps,
  Select as ChakraSelect,
  useColorModeValue,
  useMultiStyleConfig,
} from "@chakra-ui/react";
import React, { forwardRef, useEffect, useState, useRef } from "react";

import ComponentWrapper from "../ComponentWrapper/ComponentWrapper";
import { HelperErrorTextType } from "../HelperErrorText/HelperErrorText";
import Icon from "../Icons/Icon";
import Label from "../Label/Label";
import { getAriaAttrs } from "../../utils/utils";
import { useSafeId } from "../../hooks/useSafeId";

export const selectVariantsArray = ["default", "searchbar"] as const;
export const labelPositionsArray = ["default", "inline"] as const;
export type SelectVariants = (typeof selectVariantsArray)[number];
export type LabelPositions = (typeof labelPositionsArray)[number];

// Recursively collects `option` elements from `children`.
const flattenOptions = (
  nodes: React.ReactNode
): React.ReactElement<
  React.OptionHTMLAttributes<HTMLOptionElement>
>[] => {
  const options: React.ReactElement<
    React.OptionHTMLAttributes<HTMLOptionElement>
  >[] = [];
  React.Children.forEach(nodes, (node) => {
    if (!React.isValidElement(node)) {
      return;
    }
    if (node.type === React.Fragment) {
      options.push(
        ...flattenOptions(
          (node.props as { children?: React.ReactNode }).children
        )
      );
    } else if (node.type === "option") {
      options.push(node);
    }
  });
  return options;
};

export interface SelectProps
  extends
    Pick<BoxProps, keyof ChakraProps>,
    Omit<React.SelectHTMLAttributes<HTMLSelectElement>, "color"> {
  /** The initial value of an uncontrolled component */
  defaultValue?: string;
  /** Optional string to populate the `HelperErrorText` for the standard state. */
  helperText?: HelperErrorTextType;
  /** Optional string to populate the `HelperErrorText` for the error state
   * when `isInvalid` is true. */
  invalidText?: HelperErrorTextType;
  /** Adds the `disabled` and `aria-disabled` attributes to the select when true */
  isDisabled?: boolean;
  /** Adds the `aria-invalid` attribute to the select when true. This also makes
   * the color theme "NYPL error" red for the select and text. */
  isInvalid?: boolean;
  /** Adds the `required` and `aria-required` attributes to the input when true. */
  isRequired?: boolean;
  /** Optional value to render the label inline, rather than the default (on top)
   * of the select element. */
  labelPosition?: LabelPositions;
  /** Provides text for a `Label` component if `showLabel` is set to `true`;
   * populates an `aria-label` attribute on the select input if `showLabel` is
   * set to `false`. */
  labelText: string;
  /** Placeholder text in the select element. */
  placeholder?: string;
  /** Optional string that is prepended to the label of the currently selected
   * option, both on initial load and whenever the selected option changes.
   */
  prependText?: string;
  /** Allows the '(required)' text to be changed for language purposes
   * Note: Parenthesis will be added automatically by the component */
  requiredLabelText?: string;
  /** The variant to display. */
  variant?: SelectVariants;
  /** Offers the ability to hide the helper/invalid text. */
  showHelperInvalidText?: boolean;
  /** Offers the ability to show the select's label onscreen or hide it. Refer
   * to the `labelText` property for more information. */
  showLabel?: boolean;
  /** Whether or not to display the "(required)" text in the label text.
   * True by default. */
  showRequiredLabel?: boolean;
}

/**
 * Component that renders Chakra's `Select` component along with an accessible
 * `Label` and optional `HelperErrorText` component.
 */
export const Select: ChakraComponent<
  React.ForwardRefExoticComponent<
    React.PropsWithChildren<SelectProps> &
      React.RefAttributes<HTMLSelectElement>
  >,
  React.PropsWithChildren<SelectProps>
> = chakra(
  forwardRef<HTMLSelectElement, React.PropsWithChildren<SelectProps>>(
    (props: React.PropsWithChildren<SelectProps>, ref?) => {
      const {
        autoComplete,
        children,
        defaultValue,
        helperText,
        id,
        invalidText,
        isDisabled = false,
        isInvalid = false,
        isRequired = false,
        labelPosition = "default",
        labelText,
        name,
        onChange,
        placeholder,
        prependText,
        variant = "default",
        showHelperInvalidText = true,
        showLabel = true,
        showRequiredLabel = true,
        requiredLabelText,
        value = "",
        ...rest
      } = props;
      const mainId = useSafeId(id);
      const [labelWidth, setLabelWidth] = useState<number>(0);
      const labelRef = useRef<HTMLDivElement>(null);
      const styles = useMultiStyleConfig("ReservoirSelect", {
        variant,
        labelPosition,
        labelWidth,
        showLabel,
      });
      // Returns the `value` used to identify an `option` element. The fallback
      // is the text content when no `value` attribute is passed. This mirrors
      // the native `select`/`option` behavior. This is needed for the
      // `prependText` feature.
      const getOptionValue = (
        option: React.ReactElement<
          React.OptionHTMLAttributes<HTMLOptionElement>
        >
      ): string | undefined =>
        option.props.value !== undefined
          ? (option.props.value as string)
          : (option.props.children as string);
      // Computes the value of the option that is selected when the
      // component is first rendered so that `prependText` can be applied
      // to it immediately.
      const getInitialSelectedValue = (): string | undefined => {
        if (onChange) {
          return value as string;
        }
        if (defaultValue !== undefined) {
          return defaultValue;
        }
        const options = flattenOptions(children);
        const selectedOption = options.find((option) => option.props.selected);
        if (selectedOption) {
          return getOptionValue(selectedOption);
        }
        const firstOption = options[0];
        return firstOption ? getOptionValue(firstOption) : undefined;
      };
      const [selectedValue, setSelectedValue] = useState<string | undefined>(
        getInitialSelectedValue
      );
      // Tracks whether the native dropdown list is currently open so that
      // `prependText` can be hidden from the option labels while open and
      // only shown on the closed select's selected value.
      const [isOpen, setIsOpen] = useState(false);
      const openSelect = () => setIsOpen(true);
      const closeSelect = () => setIsOpen(false);
      const finalInvalidText = invalidText
        ? invalidText
        : "There is an error related to this field.";
      const footnote = isInvalid ? finalInvalidText : helperText;
      const ariaAttributes = getAriaAttrs({
        footnote,
        id: mainId,
        labelText,
        name: "Select",
        showLabel,
      });
      // Keeps track of the selected value to apply the `prependText` to the
      // currently selected option's label, regardless of whether the
      // component is controlled or uncontrolled.
      const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        if (prependText) {
          setSelectedValue(event.target.value);
          closeSelect();
        }
        onChange?.(event);
      };

      // To control the `Select` component, both `onChange` and `value`
      // must be passed.
      const controlledOrUncontrolledProps = onChange
        ? { onChange: prependText ? handleChange : onChange, value }
        : defaultValue
          ? { defaultValue, ...(prependText ? { onChange: handleChange } : {}) }
          : prependText
            ? { onChange: handleChange }
            : {};

      // When `prependText` is defined, open/close handlers toggle `isOpen`
      // so that option labels only show `prependText` while the dropdown
      // list is closed.
      const openCloseProps = prependText
        ? {
            onMouseDown: openSelect,
            onBlur: closeSelect,
            onKeyDown: (event: React.KeyboardEvent<HTMLSelectElement>) => {
              if ([" ", "Enter", "ArrowDown", "ArrowUp"].includes(event.key)) {
                openSelect();
              }
            },
          }
        : {};

      // The number of pixels between the label and select elements
      // when the labelPosition is inline (equivalent to --nypl-space-xs).
      const labelSelectGap = 8;

      // Set the color of the dropdown arrow based on the color mode.
      const arrowColor = useColorModeValue(
        isInvalid ? "ui.error.primary" : "ui.black",
        isInvalid ? "dark.ui.error.primary" : "dark.ui.typography.body"
      );

      if (onChange && defaultValue) {
        console.warn(
          "NYPL Reservoir Select: Both an `onChange` prop (used for controlled components) and a `defaultValue` prop (used for uncontrolled components) were passed. `defaultValue` will be ignored."
        );
      }

      // When `prependText` is defined, prepend it to the label of the
      // currently selected `option` element.
      const mapOptions = (nodes: React.ReactNode): React.ReactNode =>
        React.Children.map(nodes, (node) => {
          if (!React.isValidElement(node)) {
            return node;
          }
          if (node.type === React.Fragment) {
            const fragmentProps = node.props as {
              children?: React.ReactNode;
            };
            return React.cloneElement(
              node,
              {},
              mapOptions(fragmentProps.children)
            );
          }
          if (node.type !== "option") {
            return node;
          }
          const optionElement = node as React.ReactElement<
            React.OptionHTMLAttributes<HTMLOptionElement>
          >;
          const optionValue = getOptionValue(optionElement);
          if (String(optionValue) !== String(selectedValue)) {
            return node;
          }
          return React.cloneElement(
            optionElement,
            {},
            `${prependText}${optionElement.props.children}`
          );
        });
      const renderedChildren =
        prependText && !isOpen ? mapOptions(children) : children;

      useEffect(() => {
        if (labelPosition === "inline") {
          if (labelRef.current) {
            const width = labelRef.current.clientWidth + labelSelectGap;
            setLabelWidth(width);
          }
        } else {
          setLabelWidth(0);
        }
      }, [labelPosition]);

      // Keep `selectedValue` in sync with the `value` prop for controlled
      // components since it may be updated externally, outside of the
      // `onChange` callback.
      useEffect(() => {
        if (onChange && prependText) {
          setSelectedValue(value as string);
        }
      }, [value, onChange, prependText]);

      return (
        <ComponentWrapper
          data-testid="ds-select"
          helperText={helperText}
          helperTextStyles={{
            marginStart: { sm: "auto", md: `${labelWidth}px` },
          }}
          id={mainId}
          invalidText={finalInvalidText}
          isInvalid={isInvalid}
          showHelperInvalidText={showHelperInvalidText}
          __css={styles}
          {...rest}
        >
          <Box __css={labelPosition === "inline" && styles.inline}>
            {showLabel && (
              <Box ref={labelRef}>
                <Label
                  htmlFor={mainId}
                  id={`${mainId}-label`}
                  isInlined
                  isRequired={showRequiredLabel && isRequired}
                  requiredLabelText={requiredLabelText}
                >
                  {labelText}
                </Label>
              </Box>
            )}
            <ChakraSelect
              autoComplete={autoComplete}
              id={mainId}
              isRequired={isRequired}
              isDisabled={isDisabled}
              isInvalid={isInvalid}
              name={name}
              placeholder={placeholder}
              ref={ref}
              variant="outline"
              icon={
                <Icon
                  color={arrowColor}
                  id={`${mainId}-select-icon`}
                  name="arrow"
                  size="medium"
                />
              }
              {...openCloseProps}
              {...controlledOrUncontrolledProps}
              {...ariaAttributes}
              __css={styles.select}
            >
              {renderedChildren}
            </ChakraSelect>
          </Box>
        </ComponentWrapper>
      );
    }
  )
);

export default Select;
