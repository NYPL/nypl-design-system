import * as React from "react";
import { ButtonOptions } from "../Button/Button";
export interface AccordionProps {
    id: string;
    /** Optional modifiers array for use with BEM. See how to work with modifiers and BEM here: http://getbem.com/introduction/ */
    modifiers?: string[];
    /** Optional blockName for use with BEM. See how to work with blockNames and BEM here: http://getbem.com/introduction/ */
    blockName?: string;
    /** The button that controls the acccordion toggle */
    buttonOptions: ButtonOptions;
}
/** Accordion component that shows content on toggle */
export default class Accordion extends React.Component<
    AccordionProps,
    {
        isOpen: boolean;
    }
> {
    constructor(props: AccordionProps);
    toggleContentShow(): void;
    render(): JSX.Element;
}
