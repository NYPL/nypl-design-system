
/** Accordion component that shows content on toggle */

import * as React from "react";
import Button, { ButtonOptions } from "../../01-atoms/Button/Button";
import bem from "../../../utils/bem";

export interface AccordionProps {
  id: string;

  /** Used for BEM css convention. */
  modifiers?: string[];
  /** Used for BEM css convention. */
  blockName?: string;

  /** The button that controls the acccordion toggle */
  buttonOptions: ButtonOptions;
}

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
    buttonOptions.type = "outline";
    buttonOptions.modifiers = ["large"];
    buttonOptions.iconPosition = "right";
    buttonOptions.iconName = this.state.isOpen ? "minus" : "plus";
    buttonOptions.buttonType = "button";

    return (
      <div className={bem("accordion", modifiers, blockName)}>
        <Button callback={this.toggleContentShow} {...buttonOptions}></Button>
        {this.state.isOpen && <div className="accordion-content">
          {this.props.children}
        </div>}
      </div >);
  }
}

