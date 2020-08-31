import * as React from "react";
import Icon, { IconProps } from "../Icons/Icon";
import bem from "../../utils/bem";
import { ButtonTypes, ButtonIconPositions } from "./ButtonTypes";
import { IconRotationTypes } from "../Icons/IconTypes";

interface ButtonProps {
    /** Additional attributes passed to the button */
    attributes?: {};
    /** BlockName for use with BEM. See how to work with blockNames and BEM here: http://getbem.com/introduction/ */
    blockName?: string;
    /** The Kind of button */
    buttonType?: ButtonTypes;
    /** Additional className for use with BEM. See how to work with blockNames and BEM here: http://getbem.com/introduction/ */
    className?: string;
    /** Adds 'disabled' property to the button */
    disabled?: boolean;
    /** ID that other components can cross reference for accessibility purposes */
    id?: string;
    /** Modifiers array for use with BEM. See how to work with modifiers and BEM here: http://getbem.com/introduction/ */
    modifiers?: string[];
    mouseDown?: boolean;
    /** The action to perform on the <button>'s onClick function */
    onClick?: (event: React.MouseEvent | React.KeyboardEvent) => void;
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
                {children}
            </button>
        );
    }
}
