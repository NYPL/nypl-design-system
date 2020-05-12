import * as React from "react";
import Button, { ButtonOptions } from "../../01-atoms/Button/Button";
import bem from "../../../utils/bem";
import { ButtonTypes, ButtonIconPositions } from "../../01-atoms/Button/ButtonTypes";

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

export default class Accordion extends React.Component<AccordionProps, { isOpen: boolean }> {
  constructor(props: AccordionProps) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.toggleContentShow = this.toggleContentShow.bind(this);
  }

  toggleContentShow() {
    this.setState(prevState => ({ isOpen: !prevState.isOpen }));
  }

  render() {
    const { buttonOptions, modifiers = [], blockName = "" } = this.props;
    buttonOptions.type = "button";
    buttonOptions.blockName = "accordion";
    buttonOptions.modifiers = ["large"];
    buttonOptions.iconPosition = ButtonIconPositions.JustifyRight;
    buttonOptions.iconName = this.state.isOpen ? "minus" : "plus";
    buttonOptions.buttonType = ButtonTypes.Outline;

    return (
      <div className={bem("accordion", modifiers, blockName)}>
        <Button callback={this.toggleContentShow} {...buttonOptions}>{buttonOptions.content}</Button>
        {this.state.isOpen && <div className="accordion-content">
          {this.props.children}
        </div>}
      </div >);
  }
}

