import { expect } from "chai";
import * as Enzyme from "enzyme";
import * as React from "react";

import Notification, {
  NotificationContent,
  NotificationHeading,
} from "./Notification";
import { NotificationTypes } from "./NotificationTypes";
import Icon from "../Icons/Icon";
import { IconNames, IconColors, IconSizes } from "../Icons/IconTypes";

describe("Notification: check for basic DOM structure", () => {
  let container;
  before(() => {
    container = Enzyme.mount(
      <Notification id="notificationID">
        <NotificationHeading>Notification Heading</NotificationHeading>
        <NotificationContent>Notification content.</NotificationContent>
      </Notification>
    );
  });

  it("Renders Notification component wrapper", () => {
    expect(container.find(".notification").exists()).to.equal(true);
  });
  it("Renders Notification heading child component", () => {
    expect(container.find(".notification-heading").exists()).to.equal(true);
  });
  it("Renders Notification content child component", () => {
    expect(container.find(".notification-content").exists()).to.equal(true);
  });
  it("Renders without Icon", () => {
    expect(container.find(".notification-icon").exists()).to.equal(false);
  });
});

describe("Notification: check for Announcement Notification", () => {
  let container;
  before(() => {
    container = Enzyme.mount(
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
    expect(container.find(".notification--announcement").exists()).to.equal(
      true
    );
  });
  it("Renders Icon with proper color", () => {
    expect(
      container
        .find(".notification-icon.icon--section-research-secondary")
        .exists()
    ).to.equal(true);
  });
});

describe("Notification: check for Warning Notification", () => {
  let container;
  before(() => {
    container = Enzyme.mount(
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
    expect(container.find(".notification--warning").exists()).to.equal(true);
  });
  it("Renders Icon with proper color", () => {
    expect(
      container.find(".notification-icon.icon--brand-primary").exists()
    ).to.equal(true);
  });
});

describe("Notification: check for custom Icon", () => {
  let container;
  before(() => {
    container = Enzyme.mount(
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
    expect(container.find(".custom-icon").exists()).to.equal(true);
  });
});

describe("Notification: check for validation", () => {
  let container;
  before(() => {
    container = Enzyme.mount(
      <Notification id="notificationID">
        <NotificationHeading>First Notification Heading</NotificationHeading>
        <NotificationHeading>Second Notification Heading</NotificationHeading>
        <NotificationContent>First notification content.</NotificationContent>
        <NotificationContent>Second notification content.</NotificationContent>
      </Notification>
    );
  });

  it("Shows error when two NotificationHeading children are passed to Notification", () => {
    expect(container.find("header").text()).to.equal(
      "Error: Only one NotificationHeading child component may be passed to Notification."
    );
  });
  it("Shows error when two NotificationContent children are passed to Notification", () => {
    expect(container.find("div.content__container").text()).to.equal(
      "Error: Only one NotificationContent child component may be passed to Notification."
    );
  });
});
