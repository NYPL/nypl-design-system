// Base Link Helper Class
import * as React from "react";

export interface LinkHelperProps {
  className: string;
  icon?: { element: JSX.Element };
  url?: string;
  attributes?: {};
}

export default class LinkHelper extends React.Component<LinkHelperProps, {}> {
  constructor(props: LinkHelperProps) {
    super(props);
  }

  render(): JSX.Element {
    const { url, className, attributes, icon } = this.props;

    let props = {
      className: className,
      ...attributes
    };

    if (React.Children.count(this.props.children) > 1) {
      // There should only be one child
      // but React.Children.only() can't cast to React.ReactElement for typechecking
      // Therefore, React.Children.map() must be used.

      throw new Error(`Please only pass one child, got ${this.props.children}`);
    }

    let link = React.Children.map(this.props.children, (child: React.ReactElement, index) => {
      if (child.type !== "a") {
        if (!url) {
          throw new Error(`if children ${this.props.children} has no anchor tag, please pass URL`);
        }
        let childContent: React.ReactNode = icon ? [child, icon.element] : child;

        // wrap children in <a> tag if none exists
        return React.createElement(
          "a",
          { "href": url, ...props },
          childContent
        );
      } else {
        // If anchor element exists, append the correct className, etc. to the <a> tag
        if (icon) {
          return React.createElement("a", { ...props }, [child.props.children, icon.element]);
        } else {
          return React.cloneElement(child, props);
        }
      }
    });

    return link[0];
  }
}
