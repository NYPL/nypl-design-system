import * as React from "react";
import {
  Button as ChakraButton,
  ButtonGroup,
  useStyleConfig,
} from "@chakra-ui/react";

import bem from "../../utils/bem";
import { ButtonTypes } from "./ButtonTypes";
import Icon from "../Icons/Icon";

interface ButtonProps {
  /** Additional attributes passed to the button */
  attributes?: { [key: string]: any };
  /** BlockName for use with BEM. See how to work with blockNames and BEM here: http://getbem.com/introduction/ */
  blockName?: string;
  /** The kind of button assigned through the `ButtonTypes` enum  */
  buttonType?: ButtonTypes;
  /** Additional className for use with BEM. See how to work with blockNames and BEM here: http://getbem.com/introduction/ */
  className?: string;
  /** Adds 'disabled' property to the button */
  disabled?: boolean;
  /** ID that other components can cross reference for accessibility purposes */
  id?: string;
  /** Modifiers array for use with BEM. See how to work with modifiers and BEM here: http://getbem.com/introduction/ */
  modifiers?: string[];
  /** Trigger the Button's action through the `mouseDown` event handler instead of `onClick`. `false` by default. */
  mouseDown?: boolean;
  /** The action to perform on the `<button>`'s onClick function */
  onClick?: (event: React.MouseEvent | React.KeyboardEvent) => void;
  /** The html button attribute */
  type?: "submit" | "button" | "reset";
}

/** Renders a simple `button` element with custom classes and modifiers. */
// const Button = (props: React.PropsWithChildren<ButtonProps>) => {
function Button(props: React.PropsWithChildren<ButtonProps>) {
  const {
    attributes,
    blockName,
    buttonType,
    children,
    className = "",
    disabled,
    id,
    modifiers = [],
    mouseDown = false,
    onClick,
    type = "submit",
  } = props;

  const buttonModifiers = modifiers ? modifiers : [];
  if (
    buttonType &&
    !buttonModifiers.find((modifier) => modifier === buttonType)
  ) {
    buttonModifiers.push(buttonType);
  }
  const baseClass = "button";
  const btnCallback = mouseDown
    ? { onMouseDown: onClick }
    : { onClick: onClick };

  let childCount = 0;
  let hasIcon = false;
  let variant;

  React.Children.map(children, (child: React.ReactElement) => {
    childCount++;
    if (child !== undefined && child !== null) {
      if (
        child.type === Icon ||
        (child.props && child.props.mdxType === "Icon")
      ) {
        hasIcon = true;
      }
    }
  });

  if (childCount === 1 && hasIcon) {
    buttonModifiers.push("icon-only");
    variant = "icon-only";
  } else {
    switch (buttonType) {
      case ButtonTypes.Link:
        variant = "link";
        break;
      case ButtonTypes.Pill:
        variant = "pill";
        break;
      case ButtonTypes.Secondary:
        variant = "secondary";
        break;
      case ButtonTypes.Primary:
      default:
        variant = "primary";
        break;
    }
  }

  const styles = useStyleConfig("Button", { variant });

  return (
    <ChakraButton
      id={id}
      className={bem(baseClass, buttonModifiers, blockName, [className])}
      type={type}
      disabled={disabled}
      __css={styles}
      {...attributes}
      {...btnCallback}
    >
      {children}
    </ChakraButton>
  );
}

export { ButtonGroup };
export default Button;
