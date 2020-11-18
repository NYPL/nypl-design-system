import * as React from "react";

import Button from "../Button/Button";
import Modal from "./Modal";
import { ExampleCard } from "../Card/Card.stories";
import { searchBar } from "../SearchBar/SearchBar.stories";
import { skeletonLoader } from "../SkeletonLoader/SkeletonLoader.stories";

export default {
    title: "Modal",
    component: Modal,
};

const ModalStory = () => {
    const [isModalOpen, setIsModalOpen] = React.useState(false);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <>
            <Button id="1" onClick={openModal}>
                Open Modal
            </Button>
            {searchBar()}
            <ExampleCard />
            {skeletonLoader()}
            {isModalOpen && (
                <Modal>
                    <Button id="2" onClick={closeModal}>
                        Close Modal
                    </Button>
                    {skeletonLoader()}
                </Modal>
            )}
        </>
    );
};

export const modal = () => {
    return <ModalStory />;
};
