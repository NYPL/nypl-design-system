import * as React from "react";
import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";

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

// describe("Notification: check for basic DOM structure", () => {
//   let container;
//   beforeEach(() => {
//     container = render(
//       <Notification id="notificationID">
//         <NotificationHeading>Notification Heading</NotificationHeading>
//         <NotificationContent>Notification content.</NotificationContent>
//       </Notification>
//     );
//   });

//   it("Renders Notification component wrapper", () => {
//     expect(container.find(".notification").exists()).toEqual(true);
//   });
//   it("Renders Notification heading child component", () => {
//     expect(container.find(".notification-heading").exists()).toEqual(true);
//   });
//   it("Renders Notification content child component", () => {
//     expect(container.find(".notification-content").exists()).toEqual(true);
//   });
//   it("Renders without Icon", () => {
//     expect(container.find(".notification-icon").exists()).toEqual(false);
//   });
// });

// describe("Notification: check for Announcement Notification", () => {
//   let container;
//   beforeEach(() => {
//     container = render(
//       <Notification
//         id="notificationID"
//         notificationType={NotificationTypes.Announcement}
//       >
//         <NotificationHeading>Notification Heading</NotificationHeading>
//         <NotificationContent>Notification content.</NotificationContent>
//       </Notification>
//     );
//   });

//   it("Renders Notification component as Announcement", () => {
//     expect(container.find(".notification--announcement").exists()).toEqual(
//       true
//     );
//   });
//   it("Renders Icon with proper color", () => {
//     expect(
//       container
//         .find(".notification-icon.icon--section-research-secondary")
//         .exists()
//     ).toEqual(true);
//   });
// });

// describe("Notification: check for Warning Notification", () => {
//   let container;
//   beforeEach(() => {
//     container = render(
//       <Notification
//         id="notificationID"
//         notificationType={NotificationTypes.Warning}
//       >
//         <NotificationHeading>Notification Heading</NotificationHeading>
//         <NotificationContent>Notification content.</NotificationContent>
//       </Notification>
//     );
//   });

//   it("Renders Notification component as Warning", () => {
//     expect(container.find(".notification--warning").exists()).toEqual(true);
//   });
//   it("Renders Icon with proper color", () => {
//     expect(
//       container.find(".notification-icon.icon--brand-primary").exists()
//     ).toEqual(true);
//   });
// });

// describe("Notification: check for custom Icon", () => {
//   let container;
//   beforeEach(() => {
//     container = render(
//       <Notification
//         id="notificationID"
//         icon={
//           <Icon
//             name={IconNames.check}
//             size={IconSizes.large}
//             color={IconColors.brand_primary}
//             className="custom-icon"
//           />
//         }
//       >
//         <NotificationHeading>Notification Heading</NotificationHeading>
//         <NotificationContent>Notification content.</NotificationContent>
//       </Notification>
//     );
//   });

//   it("Renders custom Icon component", () => {
//     expect(container.find(".custom-icon").exists()).toEqual(true);
//   });
// });

// describe("Notification: check for validation", () => {
//   let container;
//   beforeEach(() => {
//     container = render(
//       <Notification id="notificationID">
//         <NotificationHeading>First Notification Heading</NotificationHeading>
//         <NotificationHeading>Second Notification Heading</NotificationHeading>
//         <NotificationContent>First notification content.</NotificationContent>
//         <NotificationContent>Second notification content.</NotificationContent>
//       </Notification>
//     );
//   });

//   it("Shows error when two NotificationHeading children are passed to Notification", () => {
//     expect(container.find("header").text()).toEqual(
//       "Error: Only one NotificationHeading child component may be passed to Notification."
//     );
//   });
//   it("Shows error when two NotificationContent children are passed to Notification", () => {
//     expect(container.find("div.content__container").text()).toEqual(
//       "Error: Only one NotificationContent child component may be passed to Notification."
//     );
//   });
// });
