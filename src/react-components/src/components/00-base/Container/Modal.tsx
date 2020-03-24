/* Full-screen modal that appears on top of the body */
import * as React from "react";
import bem from "../../../utils/bem";
import { useViewport } from "../../../helpers/hooks/UseViewport";
import { breakpoints } from "../../../helpers/constants/Constants";

export interface ModalProps {
  modifiers?: string[];
  blockName?: string;
  /** Should hide automatically in wide-screen mode */
  mobileOnly?: boolean;
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
