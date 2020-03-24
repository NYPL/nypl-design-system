
// AF-239 Text Field
import * as React from "react";
import Button, { ButtonOptions } from "../../01-atoms/Button/Button";
import bem from "../../../utils/bem";
import { findFirst } from "../../../helpers/util/Utils";

export interface AccordionProps {
  buttonOptions: ButtonOptions;
  accordionContent?: JSX.Element;
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
    const { buttonOptions, accordionContent, children } = this.props;
    buttonOptions.type = "outline";
    buttonOptions.modifiers = ["large"];
    buttonOptions.iconPosition = "right";
    buttonOptions.iconName = this.state.isOpen ? "minus" : "plus";
    buttonOptions.buttonType = "button";
    let content = findFirst(children, accordionContent);

    return (
      <div className = {bem("accordion")}>
        <Button callback={this.toggleContentShow} {...buttonOptions}></Button>
        {this.state.isOpen && <div className={bem("accordion-content", [])}>
          {content}
        </div>}
      </div >);
  }
}

