import React from "react";
/**
 * This helper component wrapper renders a DS `Tooltip` component if the text is
 * long or a React fragment. This assumes that the `label` prop is a rather
 * simple single root JSX element, such as `<Link ...>....</Link>`.
 */
export declare const TooltipWrapper: ({ label, children, }: React.PropsWithChildren<{
    label: any;
}>) => import("@emotion/react/jsx-runtime").JSX.Element;
