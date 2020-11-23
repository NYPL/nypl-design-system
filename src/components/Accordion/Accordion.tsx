import * as React from "react";
import bem from "../../utils/bem";
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
    /** accordionLabel's input ID */
    inputId?: string;
    /** Modifiers array for use with BEM. See how to work with modifiers and BEM here: http://getbem.com/introduction/ */
    modifiers?: string[];
}

/** Accordion component that shows content on toggle */
export default function Accordion(
    props: React.PropsWithChildren<AccordionProps>
) {
    const {
        modifiers,
        blockName,
        id,
        className,
        inputId,
        accordionLabel,
        children,
    } = props;

    return (
        <div
            className={bem("accordion", modifiers, blockName, [className])}
            id={id}
        >
            <input
                id={`accordion-${inputId}`}
                type="checkbox"
                value="empty checkbox"
                aria-checked={false}
            />
            <label
                className={bem("label", modifiers, "accordion")}
                htmlFor={`accordion-${inputId}`}
            >
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
                {children}
            </div>
        </div>
    );
}
