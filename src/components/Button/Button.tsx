import * as React from "react";
import bem from "../../utils/bem";
import { ButtonTypes } from "./ButtonTypes";

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
export default class Button extends React.Component<ButtonProps, any> {
  static defaultProps = {
    mouseDown: false,
  };

  constructor(props: ButtonProps) {
    super(props);
  }

  render(): JSX.Element {
    const {
      attributes,
      blockName,
      buttonType,
      children,
      className,
      disabled,
      id,
      modifiers = [],
      mouseDown,
      onClick,
      type = "submit",
    } = this.props;

    const buttonModifiers = modifiers ? modifiers : [];
    if (!buttonModifiers.find(modifier => modifier === buttonType)) {
      buttonModifiers.push(buttonType);
    }

    const baseClass = "button";

    const btnCallback = mouseDown
      ? { onMouseDown: onClick }
      : { onClick: onClick };

    return (
      <button
        id={id}
        className={`${baseClass} ${bem(baseClass, buttonModifiers, blockName, [
          className,
        ])}`}
        type={type}
        disabled={disabled}
        {...attributes}
        {...btnCallback}
      >
        {children}
      </button>
    );
  }
}
