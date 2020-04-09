/* Full-screen modal that appears on top of the body */
import * as React from "react";
import bem from "../../../utils/bem";

export interface ModalProps {
  /** Used by BEM CSS */
  modifiers?: string[];

  /** Used by BEM CSS */
  blockName?: string;
}

export default class Modal extends React.Component<ModalProps, {}> {
  componentDidMount() {
    document.body.classList.add("no-scroll");
  }

  componentWillUnmount() {
    document.body.classList.remove("no-scroll");
  }

  render() {
    let baseClass = "modal";

    return (
      <div tabIndex={0} className={bem(baseClass)}>
        {this.props.children}
      </div>
    );
  }
}
