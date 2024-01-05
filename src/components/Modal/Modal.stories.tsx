/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import type { Meta, StoryObj } from "@storybook/react";

import Button from "../Button/Button";
import ButtonGroup from "../ButtonGroup/ButtonGroup";
import Heading from "../Heading/Heading";
import Icon from "../Icons/Icon";
import Link from "../Link/Link";
import { ModalTrigger, useModal } from "./Modal";

const meta: Meta<typeof ModalTrigger> = {
  title: "Components/Overlays & Switchers/Modal",
  component: ModalTrigger,
};

export default meta;
type Story = StoryObj<typeof ModalTrigger>;

/**
 * Main Story for the Modal component. This must contains the `args`
 * and `parameters` properties in this object.
 */
export const WithControls: Story = {
  args: {
    buttonText: "Button Text",
    id: "modal-trigger",
    modalProps: {
      bodyContent: "body text",
      closeButtonLabel: "Close Button",
      headingText: "Modal Heading Text",
      onClose: () => {
        console.log("custom close");
      },
    },
  },
  render: (args) => <ModalTrigger {...args} />,
  parameters: {
    jest: ["Modal.test.tsx"],
  },
};

const ModalStory = () => {
  const { onClose, onOpen, Modal } = useModal();
  const modalProps = {
    bodyContent: (
      <>
        <Button id="custom-close" onClick={onClose}>
          Go back
        </Button>
        <p>This is the body content.</p>
        <Button id="custom-close2" onClick={onClose}>
          This is a custom close button.
        </Button>
      </>
    ),
    closeButtonLabel: "Close Button",
    headingText: (
      <Heading level="h3">
        <>
          <Icon name="errorFilled" size="large" color="ui.error.primary" />
          Location change failed
        </>
      </Heading>
    ),
    onClose: () => {
      console.log("custom close");
      onClose();
    },
  };

  return (
    <>
      <ButtonGroup>
        <Button id="1" onClick={onOpen}>
          Open Modal
        </Button>
        <Button buttonType="secondary" id="2" onClick={onOpen}>
          I can open the modal, too
        </Button>
      </ButtonGroup>
      <div onClick={onOpen}>
        I'm just a div and shouldn't be used in production but this is just an
        example
      </div>
      <Modal {...modalProps} />
    </>
  );
};

// The following are additional Modal example Stories.
export const useModalStory: Story = {
  render: () => <ModalStory />,
  name: "useModal Component",
};

const scrollModalProps = {
  bodyContent: (
    <>
      <Heading text="Content Title" />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Pellentesque massa
        placerat duis ultricies lacus sed turpis tincidunt.
        <Link href="http://nypl.org">Porttitor eget dolor</Link> morbi non arcu
        risus quis varius. Faucibus in ornare quam viverra orci sagittis.
      </p>
      <p>
        Nisl vel pretium lectus quam id leo in. Etiam dignissim diam quis enim
        lobortis scelerisque fermentum. Diam maecenas sed enim ut sem viverra.
        Diam quam nulla porttitor massa id neque. Sed faucibus turpis in eu mi.
      </p>
      <p>
        Ornare lectus sit amet est placerat in. Quis blandit turpis cursus in.
        Aliquam ut porttitor leo a diam sollicitudin tempor id eu. Pellentesque
        eu tincidunt tortor aliquam nulla facilisi cras fermentum. Porttitor leo
        a diam sollicitudin tempor id eu nisl nunc. Feugiat nisl pretium fusce
        id velit ut tortor. Porttitor leo a diam sollicitudin tempor id eu nisl
        nunc.
      </p>
      <p>
        Mauris nunc congue nisi vitae suscipit tellus mauris a diam. Purus
        gravida quis blandit turpis cursus in hac. Morbi tempus iaculis urna id
        volutpat. Lectus nulla at volutpat diam ut venenatis. Donec ac odio
        tempor orci dapibus ultrices in iaculis. Dui vivamus arcu felis bibendum
        ut tristique. Cras semper auctor neque vitae tempus quam pellentesque.
        Placerat orci nulla pellentesque dignissim enim sit amet. Feugiat
        pretium nibh ipsum consequat. Placerat orci nulla pellentesque
        dignissim. Suspendisse faucibus interdum posuere lorem. Nullam non nisi
        est sit. Turpis egestas integer eget aliquet nibh praesent. Tortor at
        risus 'viverra adipiscing at. Eu augue ut lectus arcu bibendum at varius
        vel' pharetra.
      </p>
      <Heading text="Another Title" />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Pellentesque massa
        placerat duis ultricies lacus sed turpis tincidunt.
        <Link href="http://nypl.org">Porttitor eget dolor</Link> morbi non arcu
        risus quis varius. Faucibus in ornare quam viverra orci sagittis.
      </p>
      <p>
        Nisl vel pretium lectus quam id leo in. Etiam dignissim diam quis enim
        lobortis scelerisque fermentum. Diam maecenas sed enim ut sem viverra.
        Diam quam nulla porttitor massa id neque. Sed faucibus turpis in eu mi.
      </p>
      <p>
        Ornare lectus sit amet est placerat in. Quis blandit turpis cursus in.
        Aliquam ut porttitor leo a diam sollicitudin tempor id eu. Pellentesque
        eu tincidunt tortor aliquam nulla facilisi cras fermentum. Porttitor leo
        a diam sollicitudin tempor id eu nisl nunc. Feugiat nisl pretium fusce
        id velit ut tortor. Porttitor leo a diam sollicitudin tempor id eu nisl
        nunc.
      </p>
      <p>
        Mauris nunc congue nisi vitae suscipit tellus mauris a diam. Purus
        gravida quis blandit turpis cursus in hac. Morbi tempus iaculis urna id
        volutpat. Lectus nulla at volutpat diam ut venenatis. Donec ac odio
        tempor orci dapibus ultrices in iaculis. Dui vivamus arcu felis bibendum
        ut tristique. Cras semper auctor neque vitae tempus quam pellentesque.
        Placerat orci nulla pellentesque dignissim enim sit amet. Feugiat
        pretium nibh ipsum consequat. Placerat orci nulla pellentesque
        dignissim. Suspendisse faucibus interdum posuere lorem. Nullam non nisi
        est sit. Turpis egestas integer eget aliquet nibh praesent. Tortor at
        risus 'viverra adipiscing at. Eu augue ut lectus arcu bibendum at varius
        vel' pharetra.
      </p>
    </>
  ),
  closeButtonLabel: "Close Button",
  headingText: (
    <Heading level="h3">
      <>
        <Icon
          name="actionCheckCircleFilled"
          size="large"
          color="ui.success.primary"
        />
        Modal Heading Text
      </>
    </Heading>
  ),
};

export const ContentWindowScrolling: Story = {
  render: () => (
    <ModalTrigger
      buttonText="Button Text"
      id="modal-scrolling"
      modalProps={scrollModalProps}
    />
  ),
};
