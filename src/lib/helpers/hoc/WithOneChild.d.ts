import * as React from "react";
/**
 * Wrapper component to verify that a component only has one child.
 * @param Component Component to test, either a React element
 *   or an object element.
 */
declare const withOneChild: <P extends object>(
    Component: any
) => React.ComponentType<P>;
export default withOneChild;
