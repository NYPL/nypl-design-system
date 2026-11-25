import {
  Box,
  BoxProps,
  chakra,
  ChakraComponent,
  ChakraProps,
  useStyleConfig,
} from "@chakra-ui/react";
import React, { forwardRef, LabelHTMLAttributes } from "react";

export const labelVariantsArray = [
  "primary",
  "secondary",
  "tertiary",
  "quaternary",
] as const;
export type LabelVariants = (typeof labelVariantsArray)[number];

export interface LabelProps
  extends
    Pick<BoxProps, keyof ChakraProps>,
    Omit<LabelHTMLAttributes<HTMLLabelElement>, "color"> {
  /** Controls whether the label should be inline with the input it goes with.
   * This prop should only be used internally. */
  isInlined?: boolean;
  /** Controls whether the "(required)" text should be displayed alongside the
   * label's text. False by default. */
  isRequired?: boolean;
  /** Allows the '(required)' text to be changed for language purposes
   * Note: Parenthesis will be added automatically by the component */
  requiredLabelText?: string;
  /** Used to control how the `Label` component will be rendered. */
  variant?: LabelVariants;
}

/**
 * A label for form inputs. It should never be used alone.
 */
export const Label: ChakraComponent<
  React.ForwardRefExoticComponent<
    React.PropsWithChildren<LabelProps> &
      React.RefAttributes<HTMLDivElement & HTMLLabelElement>
  >,
  React.PropsWithChildren<LabelProps>
> = chakra(
  forwardRef<
    HTMLDivElement & HTMLLabelElement,
    React.PropsWithChildren<LabelProps>
  >((props, ref?) => {
    const {
      children,
      isInlined = false,
      isRequired = false,
      requiredLabelText,
      variant = "primary",
      ...rest
    } = props;
    const styles = useStyleConfig("Label", { isInlined, variant });

    return (
      <Box as="label" data-testid="ds-label" ref={ref} __css={styles} {...rest}>
        {children}
        {isRequired && (
          <span>
            {requiredLabelText ? ` (${requiredLabelText})` : " (required)"}
          </span>
        )}
      </Box>
    );
  })
);

export default Label;
