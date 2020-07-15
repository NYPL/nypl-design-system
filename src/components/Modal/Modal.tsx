import * as React from "react";
import bem from "../../utils/bem";

export interface ModalProps {
    /** Optional blockName for use with BEM. See how to work with blockNames and BEM here: http://getbem.com/introduction/ */
    blockName?: string;
    /** ClassName that appears in addition to "modal" */
    className?: string;
    /** ID that other components can cross reference for accessibility purposes */
    id?: string;
    /** Modifiers array for use with BEM. See how to work with modifiers and BEM here: http://getbem.com/introduction/ */
    modifiers?: string[];
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
        const { modifiers, blockName, id, className } = this.props;
        let baseClass = "modal";

        return (
            <div
                tabIndex={0}
                className={bem(baseClass, modifiers, blockName, [className])}
                id={id}
            >
                {this.props.children}
            </div>
        );
    }
}
