import * as React from "react";
import Icon from "../Images/Icons/Icon";
import bem from "../../../utils/bem";

type BtnContent = string | JSX.Element;

export interface ButtonOptions {
  id: string;

  /** The action to perform on the <button>'s onClick function */
  callback?: (event: React.MouseEvent | React.KeyboardEvent) => void;
  /** The content to render inside the the button. An alternative
   * to passing children elements. */
  content?: string | JSX.Element;
  attributes?: {};
  /** Used for BEM css convention. */
  modifiers?: string[];
  /** Used for BEM css convention. */
  blockName?: string;
  large?: boolean;
  type?: string;
  /** The html button attribute */
  buttonType?: string;
  mouseDown?: boolean;
  /** If an icon is to be rendered, an `iconPosition` prop is required. */
  iconPosition?: string;
  iconName?: string;
  iconModifiers?: string[];
  iconDecorative?: boolean;
  iconRole?: string;
}

export interface ButtonProps {
  id: string;

  /** The action to perform on the <button>'s onClick function */
  callback: (event: React.MouseEvent | React.KeyboardEvent) => void;
  /** The content to render inside the the button. An alternative
   * to passing children elements. */
  content?: string | JSX.Element;
  attributes?: {};
  /** Used for BEM css convention. */
  modifiers?: string[];
  /** Used for BEM css convention. */
  blockName?: string;
  large?: boolean;
  type?: string;
  /** The html button attribute */
  buttonType?: string;
  mouseDown?: boolean;
  /** If an icon is to be rendered, an `iconPosition` prop is required. */
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
    const { id, callback, content, attributes, modifiers, blockName, type, buttonType = "submit", mouseDown,
      iconPosition, iconName, iconModifiers, iconDecorative, iconRole, children } = this.props;

    if (type) {
      if (!(type === "outline" || type === "filled" || type === "link")) {
        throw new Error("Type can only be 'outline', 'filled' or 'link'");
      }
    }

    let buttonModifiers = modifiers ? modifiers : [];
    if (!buttonModifiers.find((mod) => mod === type)) {
      buttonModifiers.push(type);
    }

    let btnContent: BtnContent[] = [];

    // Use either the content prop or the children prop for the rendered content.
    const contentToRender = content ? content : children;
    if (contentToRender) {
      // Make sure we can handle both string and element cases.
      const contentProp = typeof (contentToRender) === "string" ?
        contentToRender :
        React.cloneElement(contentToRender as any, { key: `${id}-button-content` });
      btnContent.push(contentProp);
    }

    let button_base_class = "button";

    // An icon needs a position in order for it to be created and
    // rendered in the button.
    if (iconPosition) {
      let iconProps = {
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
      id: id,
      className: bem(button_base_class, buttonModifiers, blockName),
      type: buttonType
    };

    let btnCallback = mouseDown ? { onMouseDown: callback } : { onClick: callback };

    return React.createElement(
      "button",
      { ...btnProps, ...btnCallback, ...attributes },
      btnContent
    );
  }
}
