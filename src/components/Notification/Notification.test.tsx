import * as React from "react";
import { render, RenderResult, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import renderer from "react-test-renderer";

import Notification from "./Notification";
import Icon from "../Icons/Icon";

describe("Notification Accessibility", () => {
  it("passes axe accessibility test with heading", async () => {
    const { container } = render(
      <Notification
        id="notificationID"
        notificationContent={<>Notification content.</>}
        notificationHeading="Notification Heading"
      />
    );
    expect(await axe(container)).toHaveNoViolations();
  });

  it("passes axe accessibility test without heading", async () => {
    const { container } = render(
      <Notification
        id="notificationID"
        notificationContent={<>Notification content.</>}
      />
    );
    expect(await axe(container)).toHaveNoViolations();
  });

  it("passes axe accessibility test without an icon", async () => {
    const { container } = render(
      <Notification
        id="notificationID"
        notificationContent={<>Notification content.</>}
        notificationHeading="Notification Heading"
        showIcon={false}
      />
    );
    expect(await axe(container)).toHaveNoViolations();
  });

  it("passes axe accessibility test for the dismissible type", async () => {
    const { container } = render(
      <Notification
        dismissible
        id="notificationID"
        notificationContent={<>Notification content.</>}
        notificationHeading="Notification Heading"
      />
    );
    expect(await axe(container)).toHaveNoViolations();
  });
});

describe("Notification", () => {
  let utils: RenderResult;
  beforeEach(() => {
    utils = render(
      <Notification
        ariaLabel="Notification label"
        id="notificationID"
        notificationContent={<>Notification content.</>}
        notificationHeading="Notification Heading"
      />
    );
  });

  it("renders Notification heading child component", () => {
    expect(screen.getByText("Notification Heading")).toBeInTheDocument();
  });

  it("renders Notification content child component", () => {
    expect(screen.getByText("Notification content.")).toBeInTheDocument();
  });

  it("renders with an Icon", () => {
    // Since the icon has aria-hidden set to true, we can't get it
    // by its "img" role.
    const icon = utils.container.querySelector(
      "#notificationID-notification-icon"
    );
    expect(icon).toBeInTheDocument();
  });

  it("does not render an Icon", () => {
    utils.rerender(
      <Notification
        id="notificationID"
        notificationContent={<>Notification content.</>}
        notificationHeading="Notification Heading"
        showIcon={false}
      />
    );
    const icon = utils.container.querySelector(
      "#notificationID-notification-icon"
    );
    expect(icon).not.toBeInTheDocument();
  });

  it("renders a custom Icon component", () => {
    utils.rerender(
      <Notification
        icon={
          <Icon
            id="custom-icon"
            className="custom-icon"
            color="brand.primary"
            name="check"
            size="large"
          />
        }
        id="notificationID"
        notificationContent={<>Notification content.</>}
        notificationHeading="Notification Heading"
      />
    );

    const customIcon = utils.container.querySelector(
      "#notificationID-custom-notification-icon"
    );
    expect(customIcon).toBeInTheDocument();
  });

  it("renders the announcement Notification type", () => {
    utils.rerender(
      <Notification
        id="notificationID"
        notificationContent={<>Notification content.</>}
        notificationHeading="Notification Heading"
        notificationType="announcement"
      />
    );

    expect(utils.container.querySelector("aside")).toHaveAttribute(
      "data-type",
      "announcement"
    );
  });

  it("renders the warning Notification type", () => {
    utils.rerender(
      <Notification
        id="notificationID"
        notificationContent={<>Notification content.</>}
        notificationHeading="Notification Heading"
        notificationType="warning"
      />
    );

    expect(utils.container.querySelector("aside")).toHaveAttribute(
      "data-type",
      "warning"
    );
  });

  it("renders with an aria-label attribute", () => {
    expect(screen.getByRole("complementary")).toHaveAttribute(
      "aria-label",
      "Notification label"
    );
  });

  it("renders a dismissible icon", () => {
    utils.rerender(
      <Notification
        dismissible
        id="notificationID"
        notificationContent={<>Notification content.</>}
        notificationHeading="Notification Heading"
      />
    );

    const dismissibleIcon = utils.container.querySelector(
      "#notificationID-dismissible-notification-icon"
    );
    expect(dismissibleIcon).toBeInTheDocument();
    expect(screen.getByTitle("Notification close icon")).toBeInTheDocument();
  });

  it("renders the UI snapshot correctly", () => {
    const standard = renderer
      .create(
        <Notification
          id="notificationID1"
          notificationContent={<>Notification content.</>}
          notificationHeading="Notification Heading"
        />
      )
      .toJSON();
    const announcement = renderer
      .create(
        <Notification
          id="notificationID2"
          notificationContent={<>Notification content.</>}
          notificationHeading="Notification Heading"
          notificationType="announcement"
        />
      )
      .toJSON();
    const warning = renderer
      .create(
        <Notification
          id="notificationID3"
          notificationContent={<>Notification content.</>}
          notificationHeading="Notification Heading"
          notificationType="warning"
        />
      )
      .toJSON();
    const withoutHeading = renderer
      .create(
        <Notification
          id="notificationID4"
          notificationContent={<>Notification content.</>}
        />
      )
      .toJSON();
    const withoutAnIcon = renderer
      .create(
        <Notification
          id="notificationID5"
          notificationHeading="Notification Heading"
          notificationContent={<>Notification content.</>}
          showIcon={false}
        />
      )
      .toJSON();
    const withoutHeadingAndIcon = renderer
      .create(
        <Notification
          id="notificationID6"
          notificationContent={<>Notification content.</>}
          showIcon={false}
        />
      )
      .toJSON();
    const dismissible = renderer
      .create(
        <Notification
          dismissible
          id="notificationID7"
          notificationContent={<>Notification content.</>}
        />
      )
      .toJSON();
    const withChakraProps = renderer
      .create(
        <Notification
          id="chakra"
          notificationContent={<>Notification content.</>}
          notificationHeading="Notification Heading"
          p="20px"
          color="ui.error.primary"
        />
      )
      .toJSON();
    const withOtherProps = renderer
      .create(
        <Notification
          id="props"
          notificationContent={<>Notification content.</>}
          notificationHeading="Notification Heading"
          data-testid="props"
        />
      )
      .toJSON();

    expect(standard).toMatchSnapshot();
    expect(announcement).toMatchSnapshot();
    expect(warning).toMatchSnapshot();
    expect(withoutHeading).toMatchSnapshot();
    expect(withoutAnIcon).toMatchSnapshot();
    expect(withoutHeadingAndIcon).toMatchSnapshot();
    expect(dismissible).toMatchSnapshot();
    expect(withChakraProps).toMatchSnapshot();
    expect(withOtherProps).toMatchSnapshot();
  });
});
