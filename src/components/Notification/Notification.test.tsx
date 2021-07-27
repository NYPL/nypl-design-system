import * as React from "react";
import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import renderer from "react-test-renderer";

import Notification, {
  NotificationContent,
  NotificationHeading,
} from "./Notification";
import { NotificationTypes } from "./NotificationTypes";
import Icon from "../Icons/Icon";
import { IconNames, IconColors, IconSizes } from "../Icons/IconTypes";

describe("Notification Accessibility", () => {
  it("passes axe accessibility test", async () => {
    const { container } = render(
      <Notification id="notificationID">
        <NotificationHeading>Notification Heading</NotificationHeading>
        <NotificationContent>Notification content.</NotificationContent>
      </Notification>
    );
    expect(await axe(container)).toHaveNoViolations();
  });
});

describe("Notification: check for basic DOM structure", () => {
  let utils;
  beforeEach(() => {
    utils = render(
      <Notification id="notificationID">
        <NotificationHeading>Notification Heading</NotificationHeading>
        <NotificationContent>Notification content.</NotificationContent>
      </Notification>
    );
  });

  it("Renders Notification component wrapper", () => {
    expect(utils.container.querySelector(".notification")).toBeInTheDocument();
  });

  it("Renders Notification heading child component", () => {
    expect(screen.getByText("Notification Heading")).toBeInTheDocument();
  });

  it("Renders Notification content child component", () => {
    expect(screen.getByText("Notification content.")).toBeInTheDocument();
  });

  it("Renders without Icon", () => {
    expect(
      utils.container.querySelector(".notification-icon")
    ).not.toBeInTheDocument();
  });
});

describe("Notification Snapshot", () => {
  it("Renders the UI snapshot correctly", () => {
    const tree = renderer
      .create(
        <Notification id="notificationID">
          <NotificationHeading>Notification Heading</NotificationHeading>
          <NotificationContent>Notification content.</NotificationContent>
        </Notification>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe("Notification: check for Announcement Notification", () => {
  let utils;
  beforeEach(() => {
    utils = render(
      <Notification
        id="notificationID"
        notificationType={NotificationTypes.Announcement}
      >
        <NotificationHeading>Notification Heading</NotificationHeading>
        <NotificationContent>Notification content.</NotificationContent>
      </Notification>
    );
  });

  it("Renders Notification component as Announcement", () => {
    expect(
      utils.container.querySelector(".notification--announcement")
    ).toBeInTheDocument();
  });
  it("Renders Icon with proper color", () => {
    expect(
      utils.container.querySelector(
        ".notification-icon.icon--section-research-secondary"
      )
    ).toBeInTheDocument();
  });
});

describe("Notification: check for Warning Notification", () => {
  let utils;
  beforeEach(() => {
    utils = render(
      <Notification
        id="notificationID"
        notificationType={NotificationTypes.Warning}
      >
        <NotificationHeading>Notification Heading</NotificationHeading>
        <NotificationContent>Notification content.</NotificationContent>
      </Notification>
    );
  });

  it("Renders Notification component as Warning", () => {
    expect(
      utils.container.querySelector(".notification--warning")
    ).toBeInTheDocument();
  });

  it("Renders Icon with proper color", () => {
    expect(
      utils.container.querySelector(".notification-icon.icon--brand-primary")
    ).toBeInTheDocument();
  });
});

describe("Notification: check for custom Icon", () => {
  let utils;
  beforeEach(() => {
    utils = render(
      <Notification
        id="notificationID"
        icon={
          <Icon
            name={IconNames.check}
            size={IconSizes.large}
            color={IconColors.brand_primary}
            className="custom-icon"
          />
        }
      >
        <NotificationHeading>Notification Heading</NotificationHeading>
        <NotificationContent>Notification content.</NotificationContent>
      </Notification>
    );
  });

  it("Renders custom Icon component", () => {
    expect(utils.container.querySelector(".custom-icon")).toBeInTheDocument();
  });
});

describe("Notification: check for validation", () => {
  beforeEach(() => {
    render(
      <Notification id="notificationID">
        <NotificationHeading>First Notification Heading</NotificationHeading>
        <NotificationHeading>Second Notification Heading</NotificationHeading>
        <NotificationContent>First notification content.</NotificationContent>
        <NotificationContent>Second notification content.</NotificationContent>
      </Notification>
    );
  });

  it("Shows error when two NotificationHeading children are passed to Notification", () => {
    expect(
      screen.getByText(
        "Error: Only one NotificationHeading child component may be passed to Notification."
      )
    ).toBeInTheDocument();
  });

  it("Shows error when two NotificationContent children are passed to Notification", () => {
    expect(
      screen.getByText(
        "Error: Only one NotificationContent child component may be passed to Notification."
      )
    ).toBeInTheDocument();
  });
});
