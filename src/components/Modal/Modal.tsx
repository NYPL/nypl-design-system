import * as React from "react";

export interface ModalProps {
  /** ClassName that appears in addition to "modal" */
  className?: string;
  /** ID that other components can cross reference for accessibility purposes */
  id?: string;
}

/** Full-screen modal that appears on top of the body of the page. */
export default class Modal extends React.Component<ModalProps, any> {
  componentDidMount() {
    document.body.classList.add("no-scroll");
  }

  componentWillUnmount() {
    document.body.classList.remove("no-scroll");
  }

  render() {
    const { id, className } = this.props;

    return (
      <div
        // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
        tabIndex={0}
        className={`modal ${className}`}
        id={id}
      >
        {this.props.children}
      </div>
    );
  }
}
