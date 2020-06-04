import * as React from "react";
export interface ContainerProps {
    modifiers?: string[];
    blockName?: string;
}
export default function Container(
    props: React.PropsWithChildren<ContainerProps>
): JSX.Element;
