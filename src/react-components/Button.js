import * as React from "react";

export interface ButtonProps {
  /** The action to perform on the <button>'s onClick function */
  callback: (event: React.MouseEvent) => void;
  content?: string | JSX.Element;
  className?: string;
  disabled?: boolean;
  type?: string;
  mouseDown?: boolean;
}

export default class Button extends React.Component<ButtonProps, {}> {
  static defaultProps = {
    mouseDown: false
  };

  constructor(props: ButtonProps) {
    super(props);
  }

  render(): JSX.Element {
    const { content, className, type, disabled, mouseDown, callback, ...rest } = this.props;
    let btnContent = content || "Submit";
    let btnClassName = `btn${className ? ` ${className}` : ""}`;
    let btnProps = {
      type: (type || "submit"),
      className: btnClassName,
      disabled: (disabled || null),
    };
    let btnCallback = mouseDown ? { onMouseDown: callback } : { onClick: callback };
    return React.createElement(
      "button",
      {...btnProps, ...btnCallback, ...rest},
      btnContent
    );
  }
}
