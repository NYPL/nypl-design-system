import * as React from "react";
import { IconRotationTypes } from "../Icons/IconTypes";
export interface IconLinkProps {
    url?: string;
    attributes?: {};
    modifiers?: string[];
    blockName?: string;
    iconName?: string;
    iconRotation?: IconRotationTypes;
    iconPosition?: string;
    iconModifiers?: string[];
}
export default class IconLink extends React.Component<IconLinkProps, {}> {
    constructor(props: IconLinkProps);
    render(): JSX.Element;
}
