import * as React from "react";
import bem from "../../../utils/bem";

export interface LinkProps {
  text?: string;
  url?: string;
  attributes?: {};
  className?: string;
  modifiers?: string[];
  blockName?: string;
}

export default class Link extends React.Component<LinkProps, {}> {
  constructor(props: LinkProps) {
    super(props);
  }

  render(): JSX.Element {
    let link__base_class = "link";
    const { url, attributes, className, modifiers, blockName, ...rest } = this.props;
    let props = {
      className: bem(link__base_class, modifiers, blockName),
      href: url,
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
      return typeof (child) === "string" ? child : child.props.children;
    });
    console.log("childProps", childProps);
    return React.createElement(
      "a",
      { ...props, ...childProps, ...rest },
      elementChildren
    );

  }
}
