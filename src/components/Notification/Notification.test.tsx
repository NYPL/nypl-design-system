import * as React from "react";
import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import renderer from "react-test-renderer";

import Notification from "./Notification";
import { NotificationTypes } from "./NotificationTypes";
import Icon from "../Icons/Icon";
import { IconNames, IconColors, IconSizes } from "../Icons/IconTypes";

describe("Notification Accessibility", () => {
  it("passes axe accessibility test with heading", async () => {
    const { container } = render(
      <Notification
        id="notificationID"
        notificationHeading="Notification Heading"
        notificationContent={<>Notification content.</>}
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
});

describe("Notification", () => {
  let utils;
  beforeEach(() => {
    utils = render(
      <Notification
        id="notificationID"
        notificationHeading="Notification Heading"
        notificationContent={<>Notification content.</>}
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
    // The Icon's role is "img".
    expect(screen.queryByRole("img")).toBeInTheDocument();
  });

  it("renders a custom Icon component", () => {
    utils.rerender(
      <Notification
        id="notificationID"
        icon={
          <Icon
            id="custom-icon"
            name={IconNames.Check}
            size={IconSizes.Large}
            color={IconColors.BrandPrimary}
            className="custom-icon"
          />
        }
        notificationHeading="Notification Heading"
        notificationContent={<>Notification content.</>}
      />
    );
    expect(utils.container.querySelector(".custom-icon")).toBeInTheDocument();
  });

  it("renders the announcement Notification type", () => {
    utils.rerender(
      <Notification
        id="notificationID"
        notificationType={NotificationTypes.Announcement}
        notificationHeading="Notification Heading"
        notificationContent={<>Notification content.</>}
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
        notificationType={NotificationTypes.Warning}
        notificationHeading="Notification Heading"
        notificationContent={<>Notification content.</>}
      />
    );

    expect(utils.container.querySelector("aside")).toHaveAttribute(
      "data-type",
      "warning"
    );
  });

  it("renders the UI snapshot correctly", () => {
    const standard = renderer
      .create(
        <Notification
          id="notificationID1"
          notificationHeading="Notification Heading"
          notificationContent={<>Notification content.</>}
        />
      )
      .toJSON();
    const announcement = renderer
      .create(
        <Notification
          id="notificationID2"
          notificationType={NotificationTypes.Announcement}
          notificationHeading="Notification Heading"
          notificationContent={<>Notification content.</>}
        />
      )
      .toJSON();
    const warning = renderer
      .create(
        <Notification
          id="notificationID3"
          notificationType={NotificationTypes.Warning}
          notificationHeading="Notification Heading"
          notificationContent={<>Notification content.</>}
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
    expect(standard).toMatchSnapshot();
    expect(announcement).toMatchSnapshot();
    expect(warning).toMatchSnapshot();
    expect(withoutHeading).toMatchSnapshot();
  });
});
