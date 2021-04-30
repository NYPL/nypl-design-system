import { expect } from "chai";
import * as Enzyme from "enzyme";
import * as React from "react";

import Notification from "./Notification";

describe("Notification", () => {
  const regularNotification = (
    <Notification id="notificationID">Notification content</Notification>
  );

  it("Generates a Notification", () => {
    const notification = Enzyme.mount(regularNotification);
    expect(notification.find(".notification")).to.have.lengthOf(1);
  });
});
