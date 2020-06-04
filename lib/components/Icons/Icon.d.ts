import * as React from "react";
import { IconRotationTypes } from "./IconTypes";
export interface IconProps {
    name: string;
    blockName?: string;
    modifiers?: string[];
    decorative: boolean;
    role?: string;
    title?: boolean;
    desc?: boolean;
    iconRotation?: IconRotationTypes;
}
export default class Icon extends React.Component<IconProps, {}> {
    constructor(props: IconProps);
    render(): JSX.Element;
}
