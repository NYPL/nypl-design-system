import * as React from "react";
import { render, screen } from "@testing-library/react";
import { renderHook } from "@testing-library/react-hooks";
import { axe } from "jest-axe";
import renderer from "react-test-renderer";

import { Button } from "../Button/Button";
import { ButtonTypes } from "../Button/ButtonTypes";
import { ModalTrigger, useModal } from "./Modal";

describe("Modal Accessibility", () => {
  it("passes axe accessibility for ModalTrigger", async () => {
    const { container } = render(
      <ModalTrigger
        buttonText="Button Text"
        id="modal-trigger"
        modalProps={{
          bodyContent: "body text",
          closeButtonLabel: "Close Button",
          headingText: "Modal Heading Text",
          onClose: () => {
            console.log("custom close");
          },
        }}
      />
    );
    expect(await axe(container)).toHaveNoViolations();
  });

  it("passes axe accessibility for useModal", async () => {
    const { result } = renderHook(() => useModal());
    const { onClose, onOpen, Modal } = result.current;
    const modalProps = {
      bodyContent: (
        <>
          <Button id="custom-close" onClick={onClose}>
            Go back
          </Button>
          <p>This is the body content.</p>
          <Button
            buttonType={ButtonTypes.NoBrand}
            id="custom-close2"
            onClick={onClose}
          >
            This is a custom close button.
          </Button>
        </>
      ),
      closeButtonLabel: "Close Button",
      headingText: "Modal Heading Text",
      onClose: () => {
        console.log("custom close");
        onClose();
      },
    };
    const { container } = render(
      <>
        <Button id="1" onClick={onOpen} buttonType={ButtonTypes.NoBrand}>
          Open Modal
        </Button>
        <Modal {...modalProps} />
      </>
    );
    expect(await axe(container)).toHaveNoViolations();
  });
});

describe("ModalTrigger", () => {
  const modalTrigger = (
    <ModalTrigger
      buttonText="Button Text"
      id="modal-trigger"
      modalProps={{
        bodyContent: "body text",
        closeButtonLabel: "Close Button",
        headingText: "Modal Heading Text",
        onClose: () => {
          console.log("custom close");
        },
      }}
    />
  );

  it("renders content when it is opened", () => {
    render(modalTrigger);
    const openButton = screen.getByText("Button Text");
    const closeButton = screen.queryByText("Close Button");

    expect(openButton).toBeInTheDocument();
    expect(closeButton).not.toBeInTheDocument();
    expect(screen.queryByText("Modal Heading Text")).not.toBeInTheDocument();

    openButton.click();

    expect(openButton).toBeInTheDocument();
    expect(screen.queryByText("Close Button")).toBeInTheDocument();
    expect(screen.queryByText("Modal Heading Text")).toBeInTheDocument();
  });

  it("renders the UI snapshot correctly", () => {
    const basic = renderer.create(modalTrigger).toJSON();

    expect(basic).toMatchSnapshot();
  });
});

describe("useModal", () => {
  const { result } = renderHook(() => useModal());
  const { onClose, onOpen, Modal } = result.current;
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
    headingText: "Modal Heading Text",
    onClose: () => {
      console.log("custom close");
      onClose();
    },
  };
  const useModalComponent = (
    <>
      <Button id="1" onClick={onOpen} buttonType={ButtonTypes.NoBrand}>
        Open Modal
      </Button>
      <Modal {...modalProps} />
    </>
  );

  it("renders content when it is opened", () => {
    render(useModalComponent);
    const openButton = screen.getByText("Open Modal");
    const closeButton = screen.queryByText("This is a custom close button.");

    expect(openButton).toBeInTheDocument();
    expect(closeButton).not.toBeInTheDocument();
    expect(screen.queryByText("Modal Heading Text")).not.toBeInTheDocument();

    openButton.click();

    // TODO: Fix this test
    // expect(openButton).toBeInTheDocument();
    // expect(
    //   screen.queryByText("This is a custom close button.")
    // ).toBeInTheDocument();
    // expect(screen.queryByText("Modal Heading Text")).toBeInTheDocument();
  });

  it("renders the UI snapshot correctly", () => {
    const basic = renderer.create(useModalComponent).toJSON();

    expect(basic).toMatchSnapshot();
  });
});
