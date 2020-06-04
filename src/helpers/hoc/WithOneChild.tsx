import * as React from "react";

/**
 * Wrapper component to verify that a component only has one child.
 * @param Component Component to test, either a React element
 *   or an object element.
 */
const withOneChild = <P extends object>(
    Component: React.ComponentType<P> | any
): React.ComponentType<P> => ({ ...initProps }) => {
    // It's more likely that the component passed will be a
    // React element so set these as default.
    let componentChildren = initProps.children;
    let componentToRender = Component;
    let name = Component.name;
    let props = initProps;

    // In case the component is an object!
    // E.g, a component passed as a prop.
    if (Component && typeof Component === "object") {
        componentChildren = Component.props.children;
        name = Component.type;
        props = Component.props;
        componentToRender = Component.type;
    }

    // If the passed component is a string, wrap it in a fragment.
    if (componentChildren && typeof componentChildren === "string") {
        componentChildren = <>{componentChildren}</>;
    } else if (componentChildren && typeof componentChildren !== "string") {
        // Otherwise, it is a React element but
        // check that it's only one element.
        try {
            React.Children.only(componentChildren as React.ReactElement);
        } catch (e) {
            const children = React.Children.map(
                componentChildren,
                child => (child as JSX.Element).type
            );
            // Catch the error and return a new one with the wrapper
            // component's name for better debugging.
            throw new Error(
                "Please only pass one child, got elements " +
                    `(${
                        children ? children.join(", ") : ""
                    }), for base component ${name}`
            );
        }
    }

    return React.createElement(componentToRender, props, props.children);
};

export default withOneChild;
