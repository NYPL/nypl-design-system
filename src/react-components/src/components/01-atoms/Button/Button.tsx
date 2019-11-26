import * as React from "react";
import Icon from "../Images/Icons/Icon";
import bem from "../../../utils/bem";

export interface ButtonProps {
  content: string | JSX.Element;
  attributes?: {};
  modifiers?: string[];
  blockName?: string;
  type?: string;

  iconPosition?: string;
  iconName?: string;
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
    const { content, attributes, modifiers, blockName, type, iconPosition, iconName, iconDecorative, iconRole } = this.props;
    if (type && type ) {
      if (!(type === "outline" || type === "filled" || type === "text")) {
        throw new Error("Type can only be 'outline', 'filled' or 'text'");
      }
    }

    let buttonModifiers = modifiers ? modifiers : [];
    if (!buttonModifiers.find((mod) => mod === type)) {
      buttonModifiers.push(type);
    }

    let btnContent = [content];
    let button_base_class = "button";
    let btnProps = {
      className: bem(button_base_class, buttonModifiers, blockName),
    };

    if (iconPosition) {
      let iconProps = {
        name: iconName,
        blockName: button_base_class,
        modifiers: ["small"],
        decorative: iconDecorative,
        desc: iconDecorative,
        role: iconDecorative ? undefined : iconRole,
        title: iconDecorative
      };

      if (iconPosition === "left") {
        iconProps.modifiers.push("left");
        btnContent.unshift(React.createElement(
          Icon,
          iconProps
        ));
      } else if (iconPosition === "right") {
        iconProps.modifiers.push("left");
        btnContent.unshift(React.createElement(
          Icon,
          iconProps
        ));
      }
    }
    return React.createElement(
      "button",
      { ...btnProps, ...attributes },
      btnContent
    );
  }
}
