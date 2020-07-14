import * as React from "react";
import Icon, { IconProps } from "../Icons/Icon";
import bem from "../../utils/bem";
import { ButtonTypes, ButtonIconPositions } from "./ButtonTypes";
import { IconRotationTypes } from "../Icons/IconTypes";

export interface ButtonOptions {
    content?: JSX.Element;
    id?: string;
    onClick?: (event: React.MouseEvent | React.KeyboardEvent) => void;
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
    /** Additional attributes passed to the button */
    attributes?: {};
    /** Optional blockName for use with BEM. See how to work with blockNames and BEM here: http://getbem.com/introduction/ */
    blockName?: string;
    /** The Kind of button */
    buttonType?: ButtonTypes;
    /** Optional additional className for use with BEM. See how to work with blockNames and BEM here: http://getbem.com/introduction/ */
    className?: string;
    /** Adds 'disabled' property to the button */
    disabled?: boolean;
    /** Is the icon decorative */
    iconDecorative?: boolean;
    /** Optional modifiers array for use with BEM. See how to work with modifiers and BEM here: http://getbem.com/introduction/ */
    iconModifiers?: string[];
    /** The name of the icon.  Corresponds with the name of the icon's svg file */
    iconName?: string;
    /** If an icon is to be rendered, an `iconPosition` prop is required. */
    iconPosition?: ButtonIconPositions;
    /** The role for the icon, if not decorative */
    iconRole?: string;
    /** Optional amount of degrees to rotate icon */
    iconRotation?: IconRotationTypes;
    /** ID that other components can cross reference for accessibility purposes */
    id?: string;
    /** Optional modifiers array for use with BEM. See how to work with modifiers and BEM here: http://getbem.com/introduction/ */
    modifiers?: string[];
    mouseDown?: boolean;
    /** The action to perform on the <button>'s onClick function */
    onClick: (event: React.MouseEvent | React.KeyboardEvent) => void;
    /** The html button attribute */
    type?: "submit" | "button" | "reset";
}

export default class Button extends React.Component<ButtonProps, {}> {
    static defaultProps = {
        mouseDown: false,
    };

    constructor(props: ButtonProps) {
        super(props);
    }

    render(): JSX.Element {
        const {
            attributes,
            blockName,
            buttonType,
            children,
            className,
            disabled,
            iconDecorative,
            iconModifiers = ["small"],
            iconName,
            iconPosition,
            iconRole,
            iconRotation,
            id,
            modifiers,
            mouseDown,
            onClick,
            type = "submit",
        } = this.props;

        let buttonModifiers = modifiers ? modifiers : [];
        if (!buttonModifiers.find((modifier) => modifier === buttonType)) {
            buttonModifiers.push(buttonType);
        }

        let button_base_class = "button";
        let iconProps;
        // An icon needs a position in order for it to be created and
        // rendered in the button.
        if (iconPosition) {
            iconProps = {
                name: iconName,
                key: `icon-${id}`,
                blockName: button_base_class,
                modifiers: iconModifiers,
                decorative: iconDecorative,
                desc: iconDecorative,
                role: iconDecorative ? undefined : iconRole,
                title: iconDecorative,
            };

            if (iconModifiers) {
                iconProps.modifiers.push(...iconModifiers);
            }

            if (iconRotation) {
                iconProps.modifiers.push(iconRotation);
            }

            buttonModifiers.push("icon");

            switch (iconPosition) {
                case ButtonIconPositions.Left: {
                    buttonModifiers.push("icon-left");
                    iconProps.modifiers.push("icon-left");
                    break;
                }
                case ButtonIconPositions.Right: {
                    buttonModifiers.push("icon-right");
                    iconProps.modifiers.push("icon-right");
                    break;
                }
                case ButtonIconPositions.JustifyRight: {
                    buttonModifiers.push("justify-right");
                    iconProps.modifiers.push("justify-right");
                    break;
                }
                default: {
                    break;
                }
            }
        }

        let btnCallback = mouseDown
            ? { onMouseDown: onClick }
            : { onClick: onClick };

        return (
            <button
                id={id}
                className={`${button_base_class} ${bem(
                    button_base_class,
                    buttonModifiers,
                    blockName,
                    [className]
                )}`}
                type={type}
                disabled={disabled}
                {...attributes}
                {...btnCallback}
            >
                <span
                    className={bem("label", buttonModifiers, button_base_class)}
                >
                    {children}
                </span>
                {iconProps && <Icon {...iconProps} />}
            </button>
        );
    }
}
