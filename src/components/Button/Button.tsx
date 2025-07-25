import {
  Box,
  BoxProps,
  Button as ChakraButton,
  chakra,
  ChakraComponent,
  ChakraProps,
  useMultiStyleConfig,
} from "@chakra-ui/react";
import { sizesArray } from "../../theme/sharedTypes";
import React, { ButtonHTMLAttributes, forwardRef } from "react";

import { useSafeId } from "../../hooks/useSafeId";
import { useButtonGroup } from "../ButtonGroup/ButtonGroupContext";

export const buttonElementTypeArray = ["submit", "button", "reset"] as const;
export const buttonSizesArray = ["small", "medium", "large"] as const;
export const buttonVariantsArray = [
  "primary",
  "secondary",
  "text",
  "callout",
  "pill",
  "iconOnly",
  "noBrand",
] as const;

export type ButtonElementType = typeof buttonElementTypeArray[number];
export type ButtonVariants = typeof buttonVariantsArray[number];
export type ButtonSizes = typeof sizesArray[number];

export interface ButtonProps
  extends Pick<BoxProps, keyof ChakraProps>,
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, "color"> {
  /** Adds 'disabled' property to the button. */
  isDisabled?: boolean;
  /** Trigger the Button's action through the `mouseDown` event handler instead
   * of `onClick`. `false` by default. */
  mouseDown?: boolean;
  /** Visibly hidden text that will only be read by screenreaders. */
  screenreaderOnlyText?: string;
  /** The size of the `Button`. */
  size?: ButtonSizes;
  /** The button variation to render based on the `ButtonVariants` type. */
  variant?: ButtonVariants;
}

/**
 * Renders a simple `button` element with custom `variant` styles.
 */
export const Button: ChakraComponent<
  React.ForwardRefExoticComponent<
    React.PropsWithChildren<ButtonProps> &
      React.RefAttributes<HTMLButtonElement>
  >,
  React.PropsWithChildren<ButtonProps>
> = chakra(
  forwardRef<HTMLButtonElement, React.PropsWithChildren<ButtonProps>>(
    (props, ref?) => {
      const {
        children,
        id,
        isDisabled = false,
        mouseDown = false,
        onClick,
        screenreaderOnlyText,
        size = "medium",
        type = "button",
        variant = "primary",
        ...rest
      } = props;
      const mainId = useSafeId(id);
      const isButtonGroupDisabled = useButtonGroup();
      const btnCallback = mouseDown ? { onMouseDown: onClick } : { onClick };
      let styles: any = {};

      styles = useMultiStyleConfig("ReservoirButton", {
        variant,
        buttonSize: size,
      });

      return (
        <ChakraButton
          data-testid="ds-button"
          id={mainId}
          // ButtonGroup's `isDisabled` state takes precendence
          // over the individual button
          isDisabled={isButtonGroupDisabled || isDisabled}
          ref={ref}
          type={type}
          {...btnCallback}
          __css={styles.base}
          {...rest}
        >
          {children}
          {screenreaderOnlyText && (
            <Box as="span" __css={styles.screenreaderOnly}>
              {screenreaderOnlyText}
            </Box>
          )}
        </ChakraButton>
      );
    }
  ),
  // Chakra uses different values for its own `size` prop. We
  // want to override the values and use our own.
  { shouldForwardProp: () => true }
);

export default Button;
