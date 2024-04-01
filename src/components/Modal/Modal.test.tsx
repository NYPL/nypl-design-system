import { render, screen } from "@testing-library/react";
import { renderHook } from "@testing-library/react-hooks";
import { axe } from "jest-axe";
import * as React from "react";
import renderer from "react-test-renderer";

import Button from "../Button/Button";
import Heading from "../Heading/Heading";
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
          <Button buttonType="noBrand" id="custom-close2" onClick={onClose}>
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
        <Button id="1" onClick={onOpen} buttonType="noBrand">
          Open Modal
        </Button>
        <Modal {...modalProps} />
      </>
    );
    expect(await axe(container)).toHaveNoViolations();
  });
});

describe("ModalTrigger", () => {
  const modalTrigger = (ref?: React.RefObject<HTMLButtonElement>) => (
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
      ref={ref}
    />
  );

  it("renders content when it is opened", () => {
    render(modalTrigger());
    const openButton = screen.getByText("Button Text");
    const closeButton = screen.queryByText("Close Button");

    expect(openButton).toBeInTheDocument();
    expect(closeButton).not.toBeInTheDocument();
    expect(screen.queryByText("Modal Heading Text")).not.toBeInTheDocument();

    openButton.click();

    expect(openButton).toBeInTheDocument();
    expect(screen.queryByText("Close Button")).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 2 })).toBeInTheDocument();
    expect(screen.queryByText("Modal Heading Text")).toBeInTheDocument();
  });

  it("renders a custom heading", () => {
    render(
      <ModalTrigger
        buttonText="Button Text"
        id="modal-trigger"
        modalProps={{
          bodyContent: "body text",
          closeButtonLabel: "Close Button",
          headingText: <Heading level="h3">Modal Heading Text</Heading>,
          onClose: () => {
            console.log("custom close");
          },
        }}
      />
    );

    const openButton = screen.getByText("Button Text");
    openButton.click();

    expect(screen.getByRole("heading", { level: 3 })).toHaveTextContent(
      "Modal Heading Text"
    );
  });

  it("renders default heading with expected size", () => {
    render(
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

    const openButton = screen.getByText("Button Text");
    openButton.click();

    expect(screen.getByRole("heading", { level: 2 })).toHaveStyle(
      //var(--nypl-fontSizes-mobile-heading-heading4) = 1.5em
      "font-size: 1.5em"
    );
  });

  it("renders the UI snapshot correctly", () => {
    const basic = renderer.create(modalTrigger()).toJSON();

    expect(basic).toMatchSnapshot();
  });

  it("passes a ref to the inner button element", () => {
    const ref = React.createRef<HTMLButtonElement>();
    const { container } = render(modalTrigger(ref));

    expect(container.querySelector("button")).toBe(ref.current);
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
      <Button id="1" onClick={onOpen} buttonType="noBrand">
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
