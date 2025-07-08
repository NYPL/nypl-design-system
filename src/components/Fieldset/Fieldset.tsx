import {
  Box,
  BoxProps,
  chakra,
  ChakraComponent,
  useMultiStyleConfig,
} from "@chakra-ui/react";
import React, { forwardRef } from "react";

export interface FieldsetProps extends BoxProps {
  /** Flag to show or hide the text in the `legend` element. False by default. */
  isLegendHidden?: boolean;
  /** Flag to render "required" in the `legend`. True by default. */
  isRequired?: boolean;
  /** Text to display in the `legend` element. */
  legendText?: string;
  /** Whether or not to display the "(required)" text in the `legend` text.
   * True by default. */
  showRequiredLabel?: boolean;
}

/**
 * A wrapper component that renders a `fieldset` element along with a `legend`
 * element as its first child. Commonly used to wrap form components.
 */
export const Fieldset: ChakraComponent<
  React.ForwardRefExoticComponent<
    React.PropsWithChildren<FieldsetProps> &
      React.RefAttributes<HTMLDivElement & HTMLFieldSetElement>
  >,
  React.PropsWithChildren<FieldsetProps>
> = chakra(
  forwardRef<
    HTMLDivElement & HTMLFieldSetElement,
    React.PropsWithChildren<FieldsetProps>
  >(
    (
      {
        children,
        id,
        isLegendHidden = false,
        isRequired = false,
        legendText,
        showRequiredLabel = true,
        ...rest
      },
      ref?
    ) => {
      const styles = useMultiStyleConfig("Fieldset", { isLegendHidden });

      return (
        <Box
          as="fieldset"
          id={id}
          data-testid="ds-fieldset"
          ref={ref}
          __css={styles}
          {...rest}
        >
          <legend>
            {legendText}
            {showRequiredLabel && isRequired && <span> (required)</span>}
          </legend>
          {children}
        </Box>
      );
    }
  )
);

export default Fieldset;
