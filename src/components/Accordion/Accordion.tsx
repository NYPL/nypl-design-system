import * as React from "react";
import Button from "../Button/Button";
import bem from "../../utils/bem";
import { ButtonTypes, ButtonIconPositions } from "../Button/ButtonTypes";

export interface AccordionProps {
    /** ID that other components can cross reference for accessibility purposes */
    id?: string;

    /** Inner label on the button that opens the accordion */
    accordionLabel?: React.ReactNode;

    /** accordionLabel's ID */
    labelId?: string;

    /** Optional modifiers array for use with BEM. See how to work with modifiers and BEM here: http://getbem.com/introduction/ */
    modifiers?: string[];

    /** Optional blockName for use with BEM. See how to work with blockNames and BEM here: http://getbem.com/introduction/ */
    blockName?: string;
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
        const { modifiers = [], blockName = "" } = this.props;

        return (
            <div className={bem("accordion", modifiers, blockName)}>
                <Button
                    onClick={this.toggleContentShow}
                    id={this.props.labelId}
                    type="button"
                    blockName="accordion"
                    iconPosition={ButtonIconPositions.JustifyRight}
                    iconName={this.state.isOpen ? "minus" : "plus"}
                    iconModifiers={["medium"]}
                    buttonType={ButtonTypes.Secondary}
                >
                    {this.props.accordionLabel}
                </Button>
                {this.state.isOpen && (
                    <div className="accordion-content">
                        {this.props.children}
                    </div>
                )}
            </div>
        );
    }
}
