// Base Link Helper Class
import * as React from "react";

export interface LinkProps {
  className: string;
  icon?: {element: JSX.Element};
  url?: string;
  attributes?: {};
}

export default class Link extends React.Component<LinkProps, {}> {
  constructor(props: LinkProps) {
    super(props);
  }

  render(): JSX.Element {
    const { url, className, attributes, icon } = this.props;
    let props = {
      className: className,
      href: url,
      ...attributes
    };

    let childProps = {};
    React.Children.forEach(this.props.children, (child: React.ReactElement, i: number) => {
      if (i === 0) {
        childProps = child.props;
      } else {
        throw new Error("Please pass only one child into Link");
      }
    });
    let elementChildren = React.Children.map(this.props.children, (child: React.ReactElement) => {
      if (child.type === "a") {
          return child.props.children;
      } else {
        if (!props.href) {
          throw new Error("IconLink needs prop \"url\"");
        } else {
          return child.props ? child.props.children : child;
        }
      }
    });

    if (icon) {
        elementChildren.push(icon.element);
    }

    return React.createElement(
      "a",
      { ...props, ...childProps },
      elementChildren
    );
  }
}
