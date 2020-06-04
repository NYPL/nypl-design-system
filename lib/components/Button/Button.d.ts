import * as React from "react";
import { ButtonTypes, ButtonIconPositions } from "./ButtonTypes";
import { IconRotationTypes } from "../Icons/IconTypes";
export interface ButtonOptions {
    content?: JSX.Element;
    id: string;
    callback?: (event: React.MouseEvent | React.KeyboardEvent) => void;
    attributes?: {};
    modifiers?: string[];
    blockName?: string;
    buttonType?: ButtonTypes;
    type?: "submit" | "button" | "reset";
    mouseDown?: boolean;
    iconPosition?: ButtonIconPositions;
    iconName?: string;
    iconRotation?: IconRotationTypes;
    iconModifiers?: string[];
    iconDecorative?: boolean;
    iconRole?: string;
}
interface ButtonProps {
    id: string;
    /** The action to perform on the <button>'s onClick function */
    callback: (event: React.MouseEvent | React.KeyboardEvent) => void;
    /** Additional attributes passed to the button */
    attributes?: {};
    /** Optional modifiers array for use with BEM. See how to work with modifiers and BEM here: http://getbem.com/introduction/ */
    modifiers?: string[];
    /** Optional blockName for use with BEM. See how to work with blockNames and BEM here: http://getbem.com/introduction/ */
    blockName?: string;
    /** The Kind of button */
    buttonType?: ButtonTypes;
    /** The html button attribute */
    type?: "submit" | "button" | "reset";
    mouseDown?: boolean;
    /** If an icon is to be rendered, an `iconPosition` prop is required. */
    iconPosition?: ButtonIconPositions;
    /** The name of the icon.  Corresponds with the name of the icon's svg file */
    iconName?: string;
    /** Optional amount of degrees to rotate icon */
    iconRotation?: IconRotationTypes;
    /** Optional modifiers array for use with BEM. See how to work with modifiers and BEM here: http://getbem.com/introduction/ */
    iconModifiers?: string[];
    /** Is the icon decorative */
    iconDecorative?: boolean;
    /** The role for the icon, if not decorative */
    iconRole?: string;
}
export default class Button extends React.Component<ButtonProps, {}> {
    static defaultProps: {
        mouseDown: boolean;
    };
    constructor(props: ButtonProps);
    render(): JSX.Element;
}
export {};
