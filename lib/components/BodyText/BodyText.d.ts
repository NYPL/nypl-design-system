import * as React from "react";
export interface BodyTextProps {
    warnchar?: number;
    maxchar?: number;
    bodyContent?: JSX.Element;
    modifiers?: string[];
    blockName?: string;
}
export default function BodyText(
    props: React.PropsWithChildren<BodyTextProps>
): React.DetailedReactHTMLElement<
    {
        children?: React.ReactNode;
        className: string;
    },
    HTMLElement
>;
