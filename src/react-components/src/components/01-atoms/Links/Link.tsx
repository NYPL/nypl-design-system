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

  /*let children = React.Children.toArray(this.props.children);
  console.log("children", children[0].valueOf().type);
  if(children.length === 1 && children[0].type === "a") {
    return React.createElement(
      children[0].type,
      {...props, ...children[0].props, ...rest},
      children[0].props.children
    );
  } else {
    // Do a bit of validation
    if(!url) {
      throw new Error("Please pass a 'url' into the Link");
    }

    let innerContent = children;
    if(!innerContent) {
      throw new Error("Please pass some visible content into the Link");
    }
    let childProps = children.map(child => child.props);
    let elementChildren = children.map(child => {
        return typeof(child) === "string" ? child : child.props.children; });

    // Content/href/string was passed in.
    return React.createElement(
      "a",
      {...props, ...childProps, ...rest},
      elementChildren);
    }
    */
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
      { ...props, ...childProps, ...rest},
      elementChildren
    );

  }
}
