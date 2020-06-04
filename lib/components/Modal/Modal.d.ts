import * as React from "react";
export interface ModalProps {
    /** Optional modifiers array for use with BEM. See how to work with modifiers and BEM here: http://getbem.com/introduction/ */
    modifiers?: string[];
    /** Optional blockName for use with BEM. See how to work with blockNames and BEM here: http://getbem.com/introduction/ */
    blockName?: string;
}
export default class Modal extends React.Component<ModalProps, {}> {
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
}
