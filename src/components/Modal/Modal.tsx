import * as React from "react";
import bem from "../../utils/bem";

export interface ModalProps {
    /** Optional modifiers array for use with BEM. See how to work with modifiers and BEM here: http://getbem.com/introduction/ */
    modifiers?: string[];

    /** Optional blockName for use with BEM. See how to work with blockNames and BEM here: http://getbem.com/introduction/ */
    blockName?: string;
}

/* Full-screen modal that appears on top of the body */

export default class Modal extends React.Component<ModalProps, {}> {
    componentDidMount() {
        document.body.classList.add("no-scroll");
    }

    componentWillUnmount() {
        document.body.classList.remove("no-scroll");
    }

    render() {
        const { modifiers = [], blockName = "" } = this.props;
        const baseClass = "modal";

        return (
            <div className={bem(baseClass, modifiers, blockName)}>
                {this.props.children}
            </div>
        );
    }
}
