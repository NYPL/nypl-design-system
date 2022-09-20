import {
  Button as ChakraButton,
  chakra,
  useStyleConfig,
} from "@chakra-ui/react";
import React, { forwardRef } from "react";

import Icon from "../Icons/Icon";

export type ButtonElementType = "submit" | "button" | "reset";
export type ButtonSizes = "small" | "medium" | "large";
export type ButtonTypes =
  | "primary"
  | "secondary"
  | "text"
  | "callout"
  | "pill"
  | "noBrand"
  | "link";

interface ButtonProps {
  /** The button variation to render based on the `ButtonTypes` type.*/
  buttonType?: ButtonTypes;
  /** Additional className to use. */
  className?: string;
  /** ID that other components can cross reference for accessibility purposes. */
  id: string;
  /** Adds 'disabled' property to the button. */
  isDisabled?: boolean;
  /** Trigger the Button's action through the `mouseDown` event handler instead
   * of `onClick`. `false` by default. */
  mouseDown?: boolean;
  /** The action to perform on the `<button>`'s onClick function. */
  onClick?: (event: React.MouseEvent | React.KeyboardEvent) => void;
  /** The size of the `Button`. */
  size?: ButtonSizes;
  /** The HTML button type attribute. */
  type?: ButtonElementType;
}

/**
 * Renders a simple `button` element with custom variant styles.
 */
export const Button = chakra(
  forwardRef<HTMLButtonElement, React.PropsWithChildren<ButtonProps>>(
    (props, ref?) => {
      const {
        buttonType = "primary",
        children,
        className = "",
        id,
        isDisabled = false,
        mouseDown = false,
        onClick,
        size = "medium",
        type = "button",
        ...rest
      } = props;
      const btnCallback = mouseDown ? { onMouseDown: onClick } : { onClick };
      let childCount = 0;
      let hasIcon = false;
      let variant: string | ButtonTypes = buttonType;
      let styles = {};

      if (!id) {
        console.warn(
          "NYPL Reservoir Button: This component's required `id` prop was not passed."
        );
      }

      if (buttonType === "link") {
        console.warn(
          "NYPL Reservoir Button: The 'link' value for the 'buttonType' prop has been deprecated."
        );
      }

      React.Children.map(
        children as JSX.Element,
        (child: React.ReactElement) => {
          childCount++;
          if (child !== undefined && child !== null) {
            if (child.type === Icon || child?.props?.mdxType === "Icon") {
              hasIcon = true;
            }
          }
        }
      );

      if (childCount === 1 && hasIcon) {
        variant = "iconOnly";
      }

      styles = useStyleConfig("Button", { variant, buttonSize: size });

      return (
        <ChakraButton
          className={className}
          data-testid="button"
          id={id}
          isDisabled={isDisabled}
          ref={ref}
          type={type}
          {...btnCallback}
          __css={styles}
          {...rest}
        >
          {children}
        </ChakraButton>
      );
    }
  ),
  { shouldForwardProp: () => true }
);

export default Button;
