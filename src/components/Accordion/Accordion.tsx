import * as React from "react";
import Button from "../Button/Button";
import bem from "../../utils/bem";
import { ButtonTypes } from "../Button/ButtonTypes";
import Icon from "../Icons/Icon";
import { IconNames } from "../Icons/IconTypes";

export interface AccordionProps {
    /** Inner label on the button that opens the accordion */
    accordionLabel?: React.ReactNode;
    /** BlockName for use with BEM. See how to work with blockNames and BEM here: http://getbem.com/introduction/ */
    blockName?: string;
    /** className you can add in addition to 'input' */
    className?: string;
    /** ID that other components can cross reference for accessibility purposes */
    id?: string;
    /** accordionLabel's ID */
    labelId?: string;
    /** Modifiers array for use with BEM. See how to work with modifiers and BEM here: http://getbem.com/introduction/ */
    modifiers?: string[];
}

/** Accordion component that shows content on toggle */
export default class Accordion extends React.Component<
    AccordionProps,
    { isOpen: boolean }
> {
    constructor(props: AccordionProps) {
        super(props);
        this.state = {
            isOpen: false,
        };
        this.toggleContentShow = this.toggleContentShow.bind(this);
    }

    toggleContentShow() {
        this.setState((prevState) => ({ isOpen: !prevState.isOpen }));
    }

    render() {
        const {
            modifiers,
            blockName,
            id,
            className,
            labelId,
            accordionLabel,
        } = this.props;

        return (
            <div
                className={bem("accordion", modifiers, blockName, [className])}
                id={id}
            >
                <input type="checkbox" id="chck1" />
                <label className="tab-label" htmlFor="chck1">
                    {accordionLabel}
                    <Icon
                        name={IconNames.minus}
                        decorative={true}
                        modifiers={["small", `${IconNames.minus}`]}
                    />
                    <Icon
                        name={IconNames.plus}
                        decorative={true}
                        modifiers={["small", `${IconNames.plus}`]}
                    />
                </label>
                <div className={bem("content", modifiers, "accordion")}>
                    {this.props.children}
                </div>
            </div>
        );
    }
}
