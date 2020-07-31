import * as React from "react";

import Button from "../Button/Button";
import Modal from "./Modal";

export default {
    title: "Modal",
    component: Modal,
};

class ModalStory extends React.Component<{}, { isModalOpen: boolean }> {
    constructor(props) {
        super(props);

        this.state = {
            isModalOpen: false,
        };

        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    openModal() {
        this.setState({ isModalOpen: true });
    }

    closeModal() {
        this.setState({ isModalOpen: false });
    }

    render() {
        return (
            <>
                <Button id="1" onClick={this.openModal}>
                    Open Modal
                </Button>
                {this.state.isModalOpen && (
                    <Modal>
                        <Button id="2" onClick={this.closeModal}>
                            Close Modal
                        </Button>
                    </Modal>
                )}
            </>
        );
    }
}

export const modal = () => {
    return <ModalStory />;
};
