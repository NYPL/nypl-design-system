import * as React from "react";
import Icon from "../Images/Icons/Icon";
import bem from "../../../utils/bem";

export interface ButtonProps {
  id?: string;
  /** The action to perform on the <button>'s onClick function */
  callback: (event: React.MouseEvent) => void;
  content: string | JSX.Element;
  attributes?: {};
  modifiers?: string[];
  blockName?: string;
  large?: boolean;
  type?: string;
  mouseDown?: boolean;

  iconPosition?: string;
  iconName?: string;
  iconModifiers?: string[];
  iconDecorative?: boolean;
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
    const { id, callback, content, attributes, modifiers, blockName, type, mouseDown, 
      iconPosition, iconName, iconModifiers, iconDecorative, iconRole } = this.props;
    if (type) {
      if (!(type === "outline" || type === "filled")) {
        throw new Error("Type can only be 'outline' or 'filled'");
      }
    }

    let buttonModifiers = modifiers ? modifiers : [];
    if (!buttonModifiers.find((mod) => mod === type)) {
      buttonModifiers.push(type);
    }

    let btnContent = [content];
    let button_base_class = "button";

    let iconProps = {
      name: iconName,
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

    if (iconPosition) {
      buttonModifiers.push("icon");

      if (iconPosition === "left") {
        buttonModifiers.push("icon-left");
        iconProps.modifiers.push("icon-left");
      } else if (iconPosition === "right") {
        buttonModifiers.push("icon-right");
        iconProps.modifiers.push("icon-right");
      }

      btnContent.push(React.createElement(
        Icon,
        iconProps
      ));
    }

    let btnProps = {
      className: bem(button_base_class, buttonModifiers, blockName),
      type: "submit"
    };
    if (id) {
      btnProps[id] = id;
    }
    let btnCallback = mouseDown ? { onMouseDown: callback } : { onClick: callback };

    return React.createElement(
      "button",
      { ...btnProps, ...btnCallback, ...attributes },
      btnContent
    );
  }
}
