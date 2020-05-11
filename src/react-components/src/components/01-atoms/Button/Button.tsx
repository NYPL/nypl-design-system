import * as React from "react";
import Icon, { IconProps } from "../Images/Icons/Icon";
import bem from "../../../utils/bem";
import { ButtonTypes, ButtonIconPositions } from "./ButtonTypes";

export interface ButtonOptions {
  content?: JSX.Element;

  id: string;

  callback?: (event: React.MouseEvent | React.KeyboardEvent) => void;
  attributes?: {};
  modifiers?: string[];
  blockName?: string;
  buttonType?: ButtonTypes;
  type?: "submit" | "button" | "reset";
  mouseDown?: boolean;
  iconPosition?: ButtonIconPositions;
  iconName?: string;
  iconModifiers?: string[];
  iconDecorative?: boolean;
  iconRole?: string;
}

interface ButtonProps {
  id: string;

  /** The action to perform on the <button>'s onClick function */
  callback: (event: React.MouseEvent | React.KeyboardEvent) => void;
  /** Additional attributes passed to the button */
  attributes?: {};
  /** Optional modifiers array for use with BEM. See how to work with modifiers and BEM here: http://getbem.com/introduction/ */
  modifiers?: string[];
  /** Optional blockName for use with BEM. See how to work with blockNames and BEM here: http://getbem.com/introduction/ */
  blockName?: string;
  /** The Kind of button */
  buttonType?: ButtonTypes;
  /** The html button attribute */
  type?: "submit" | "button" | "reset";
  mouseDown?: boolean;

  /** If an icon is to be rendered, an `iconPosition` prop is required. */
  iconPosition?: ButtonIconPositions;
  /** The name of the icon.  Corresponds with the name of the icon's svg file */
  iconName?: string;
  /** Optional modifiers array for use with BEM. See how to work with modifiers and BEM here: http://getbem.com/introduction/ */
  iconModifiers?: string[];
  /** Is the icon decorative */
  iconDecorative?: boolean;
  /** The role for the icon, if not decorative */
  iconRole?: string;
}

export default class Button extends React.Component<ButtonProps, {}> {
  static defaultProps = {
    mouseDown: false
  };

  constructor(props: ButtonProps) {
    super(props);
  }

  render(): JSX.Element {
    const { id, callback, attributes, modifiers, blockName, buttonType, type = "submit", mouseDown,
      iconPosition, iconName, iconModifiers, iconDecorative, iconRole, children } = this.props;

    let buttonModifiers = modifiers ? modifiers : [];
    if (!buttonModifiers.find((mod) => mod === buttonType)) {
      buttonModifiers.push(buttonType);
    }

    let button_base_class = "button";
    let iconProps;
    // An icon needs a position in order for it to be created and
    // rendered in the button.
    if (iconPosition) {
      iconProps = {
        name: iconName,
        key: `icon-${id}`,
        blockName: button_base_class,
        modifiers: ["small"],
        decorative: iconDecorative,
        desc: iconDecorative,
        role: iconDecorative ? undefined : iconRole,
        title: iconDecorative
      };

      if (iconModifiers) {
        iconProps.modifiers.push(...iconModifiers);
      }

      buttonModifiers.push("icon");

      switch (iconPosition) {
        case ButtonIconPositions.Left: {
          buttonModifiers.push("icon-left");
          iconProps.modifiers.push("icon-left");
          break;
        }
        case ButtonIconPositions.Right: {
          buttonModifiers.push("icon-right");
          iconProps.modifiers.push("icon-right");
          break;
        }
        case ButtonIconPositions.JustifyRight: {
          buttonModifiers.push("justify-right");
          iconProps.modifiers.push("justify-right");
          break;
        }
        default: {
          break;
        }
      }
    }

    let btnCallback = mouseDown ? { onMouseDown: callback } : { onClick: callback };

    return (
      <button
        id={"btn-" + id}
        className={`${button_base_class} ${bem(button_base_class, buttonModifiers, blockName)}`}
        type={type}
        {...attributes}
        {...btnCallback}>
        <span className={bem("label", buttonModifiers, button_base_class)}>{children}</span>
        {iconProps && <Icon {...iconProps} />}
      </button>);
  }
}
