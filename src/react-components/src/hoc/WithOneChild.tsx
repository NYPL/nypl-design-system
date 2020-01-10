
// Base Link Helper Class
import * as React from "react";

export interface WithOneChildProps {
  component: JSX.Element;
}

/**
 * Wrapper component to verify that a component only has one child.
 * @param WrapperComponent Component to test, either a React element
 *   or an object element.
 */
export default function WithOneChild<T>(
  WrapperComponent: React.ComponentType<T> | any
) {
  return class extends React.Component<T> {
    constructor(props: T) {
      super(props);
    }

    render(): JSX.Element {
      // It's more likely that the component passed will be a
      // React element so set these as default.
      let componentChildren = this.props.children;
      let componentToRender = WrapperComponent;
      let name = WrapperComponent.name;
      let props = this.props;

      // In case the component is an object! E.g, a component passed
      // as a prop.
      if (WrapperComponent && typeof WrapperComponent === "object") {
        componentChildren = WrapperComponent.props.children;
        name = WrapperComponent.type;
        props = WrapperComponent.props;
        componentToRender = WrapperComponent.type;
      }

      // TODO - test case where the childrne is a string.
      // If the value is a string, then it's only one element but wrap it in a fragment.
      if (componentChildren && typeof componentChildren !== "string") {
        // otherwise it is a react element but could have multiple children. If that's
        // the case, you can check that it's only one element.
        try {
          React.Children.only(componentChildren as React.ReactElement);
        } catch (e) {
          const children = React.Children.map(componentChildren, child =>
            (child as JSX.Element).type);
          // Catching the error because React's error isn't as helpful.
          throw new Error(`Please only pass one child, got ${children ? children.join(", ") : ""}, for component ${name}`);
        }
      }

      return React.createElement(
        componentToRender,
        props,
        props.children
      );
    }
  };
}
