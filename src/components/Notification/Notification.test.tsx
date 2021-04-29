import { expect } from "chai";
import * as Enzyme from "enzyme";
import * as React from "react";

import Notification from "./Notification";

describe("Notification", () => {
  const regularNotification = (
    <Notification id="notificationID">Notification content</Notification>
  );

  const notificationWithNoContent = (
    <Notification
      id="notification#1"
      className="edition-notification"
    ></Notification>
  );

  it("Generates a Notification", () => {
    const notification = Enzyme.mount(regularNotification);
    expect(notification.find(".notification__content")).to.have.lengthOf(1);
  });

  it("Generates a notification without a content block if one isn't provided", () => {
    const notification = Enzyme.mount(notificationWithNoContent);
    expect(notification.find(".notification__content")).to.have.lengthOf(0);
  });
});
