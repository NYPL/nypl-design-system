import * as React from "react";

import Button from "../Button/Button";
import Modal from "./Modal";
import { ExampleCard } from "../Card/Card.stories";
import { searchBar } from "../SearchBar/SearchBar.stories";

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
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Tempus quam pellentesque nec nam. Sit amet purus gravida quis
                blandit turpis cursus. Est ante in nibh mauris. Ut faucibus
                pulvinar elementum integer. Mattis ullamcorper velit sed
                ullamcorper morbi tincidunt ornare massa. Consectetur purus ut
                faucibus pulvinar elementum integer enim. Accumsan sit amet
                nulla facilisi morbi. Sagittis vitae et leo duis. Elit
                scelerisque mauris pellentesque pulvinar pellentesque.
                Ullamcorper velit sed ullamcorper morbi. Tellus in hac habitasse
                platea dictumst. Fermentum leo vel orci porta non. Pulvinar
                mattis nunc sed blandit libero volutpat sed. Cras semper auctor
                neque vitae tempus. Turpis egestas sed tempus urna et pharetra
                pharetra massa. Metus aliquam eleifend mi in nulla posuere
                sollicitudin aliquam. Sit amet risus nullam eget felis eget
                nunc. Pharetra et ultrices neque ornare.
            </p>
            <p>
                Pellentesque massa placerat duis ultricies. Viverra suspendisse
                potenti nullam ac tortor vitae purus faucibus ornare. Pulvinar
                neque laoreet suspendisse interdum consectetur libero. Amet
                mauris commodo quis imperdiet massa tincidunt nunc pulvinar
                sapien. Quisque sagittis purus sit amet. Duis ut diam quam nulla
                porttitor massa id. Quis enim lobortis scelerisque fermentum dui
                faucibus in ornare. At lectus urna duis convallis. In mollis
                nunc sed id semper risus. Dolor sed viverra ipsum nunc aliquet
                bibendum enim facilisis.
            </p>
            {isModalOpen && (
                <Modal>
                    <Button id="2" onClick={closeModal}>
                        Close Modal
                    </Button>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Tempus quam pellentesque nec nam. Sit amet
                        purus gravida quis blandit turpis cursus. Est ante in
                        nibh mauris. Ut faucibus pulvinar elementum integer.
                        Mattis ullamcorper velit sed ullamcorper morbi tincidunt
                        ornare massa. Consectetur purus ut faucibus pulvinar
                        elementum integer enim. Accumsan sit amet nulla facilisi
                        morbi. Sagittis vitae et leo duis. Elit scelerisque
                        mauris pellentesque pulvinar pellentesque. Ullamcorper
                        velit sed ullamcorper morbi. Tellus in hac habitasse
                        platea dictumst. Fermentum leo vel orci porta non.
                        Pulvinar mattis nunc sed blandit libero volutpat sed.
                        Cras semper auctor neque vitae tempus. Turpis egestas
                        sed tempus urna et pharetra pharetra massa. Metus
                        aliquam eleifend mi in nulla posuere sollicitudin
                        aliquam. Sit amet risus nullam eget felis eget nunc.
                        Pharetra et ultrices neque ornare.
                    </p>
                    <p>
                        Pellentesque massa placerat duis ultricies. Viverra
                        suspendisse potenti nullam ac tortor vitae purus
                        faucibus ornare. Pulvinar neque laoreet suspendisse
                        interdum consectetur libero. Amet mauris commodo quis
                        imperdiet massa tincidunt nunc pulvinar sapien. Quisque
                        sagittis purus sit amet. Duis ut diam quam nulla
                        porttitor massa id. Quis enim lobortis scelerisque
                        fermentum dui faucibus in ornare. At lectus urna duis
                        convallis. In mollis nunc sed id semper risus. Dolor sed
                        viverra ipsum nunc aliquet bibendum enim facilisis.
                    </p>
                    <p>
                        Eget felis eget nunc lobortis mattis aliquam faucibus.
                        Orci dapibus ultrices in iaculis nunc sed. Vel elit
                        scelerisque mauris pellentesque pulvinar. Ultrices neque
                        ornare aenean euismod elementum nisi. Sollicitudin ac
                        orci phasellus egestas tellus rutrum tellus
                        pellentesque. Lorem ipsum dolor sit amet. Tempus
                        imperdiet nulla malesuada pellentesque elit eget gravida
                        cum. Pellentesque massa placerat duis ultricies lacus
                        sed turpis tincidunt. Donec et odio pellentesque diam
                        volutpat. Augue ut lectus arcu bibendum at varius vel
                        pharetra vel. Sit amet justo donec enim diam vulputate
                        ut pharetra sit. Felis eget nunc lobortis mattis aliquam
                        faucibus. Tincidunt praesent semper feugiat nibh sed
                        pulvinar proin. Facilisi nullam vehicula ipsum a. Ut sem
                        nulla pharetra diam sit amet nisl suscipit adipiscing.
                    </p>
                </Modal>
            )}
        </>
    );
};

export const modal = () => {
    return <ModalStory />;
};
