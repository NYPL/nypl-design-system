import * as React from "react";
export interface PlaceholderProps {
    /** Modifier string for the classname. */
    variant?: string;
}
/** Creates a gray box with an editable string for dropping in spaces
 * within components or on templates where a component will be but
 * that hasn't been created yet
 */
export default function Placeholder({ children, variant, }: React.PropsWithChildren<PlaceholderProps>): import("@emotion/react/jsx-runtime").JSX.Element;
