
// Base Link Helper Class
import * as React from "react";

export interface BasicLinkProps {
  className: string;
  icon?: { element: JSX.Element };
  url?: string;
  attributes?: {};
}

export default class BasicLink extends React.Component<BasicLinkProps, {}> {
  constructor(props: BasicLinkProps) {
    super(props);
  }

  render(): JSX.Element {
    const { url, className, attributes, icon } = this.props;

    let props = {
      className: className,
      ...attributes
    };

    let linkElement: React.ReactElement;
    // If the value is a string, then it's only one element but wrap it in a fragment.
    if (typeof this.props.children === "string") {
      if (!url) {
        throw new Error(`if children ${this.props.children} has no anchor tag, please pass prop: url`);
      }
      props["href"] = url;
      let linkChildren = [<>{this.props.children}</>];
      if (icon) {
        linkChildren.push(icon.element);
      }
      linkElement = React.createElement("a", props, linkChildren);

    } else {
      let passedInChild = this.props.children as React.ReactElement;

      // otherwise it is a react element but could have multiple children. If that's
      // the case, you can check that it's only one element.
      try {
        React.Children.only(passedInChild as React.ReactElement);
      } catch (e) {
        const children = React.Children.map(this.props.children, child =>
          (child as JSX.Element).type);
        // Catching the error because React's error isn't as helpful.
        throw new Error(`Please only pass one child, got ${children.join(", ")}`);
      }

      let linkChildren = [passedInChild.props.children];
      if (icon) {
        linkChildren.push(icon.element);
      }

      // TODO Check that there is a href attribute and that this is indeed a link.
      linkElement = React.cloneElement(passedInChild, props, linkChildren);
    }

    return linkElement;
  }
}
