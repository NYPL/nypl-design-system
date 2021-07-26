import * as React from "react";
import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";

import HorizontalRule from "./HorizontalRule";

describe("HorizontalRule Accessibility", () => {
  it("passes axe accessibility test", async () => {
    const { container } = render(<HorizontalRule />);
    expect(await axe(container)).toHaveNoViolations();
  });
});

// describe("HorizontalRule: check for basic element", () => {
//   let container;
//   beforeEach(() => {
//     container = render(<HorizontalRule />);
//   });

//   it("Renders HorizontalRule component", () => {
//     expect(container.find("hr").exists()).toEqual(true);
//   });
// });

// describe("HorizontalRule: check for custom class", () => {
//   let container;
//   beforeEach(() => {
//     container = render(<HorizontalRule className={"custom-hr"} />);
//   });

//   it("Renders HorizontalRule component", () => {
//     expect(container.find("hr").exists()).toEqual(true);
//   });

//   it("Renders with proper custom class", () => {
//     expect(container.find("hr").hasClass("custom-hr")).toEqual(true);
//   });
// });

// describe("HorizontalRule: check for custom dimensions", () => {
//   let container;
//   beforeEach(() => {
//     container = render(
//       <HorizontalRule className={"custom-hr"} width={"720px"} height={"5rem"} />
//     );
//   });

//   it("Renders HorizontalRule component", () => {
//     expect(container.find("hr").exists()).toEqual(true);
//   });

//   it("Renders with correct width and height values", () => {
//     expect(container.find("hr").get(0).props.style).to.have.property(
//       "width",
//       "720px"
//     );
//     expect(container.find("hr").get(0).props.style).to.have.property(
//       "height",
//       "5rem"
//     );
//   });
// });

// describe("HorizontalRule: check for custom width and custom alignment", () => {
//   let container;
//   beforeEach(() => {
//     container = render(
//       <HorizontalRule className={"custom-hr"} width={"80%"} align={"left"} />
//     );
//   });

//   it("Renders HorizontalRule component", () => {
//     expect(container.find("hr").exists()).toEqual(true);
//   });

//   it("Renders with correct width and height values", () => {
//     expect(container.find("hr").get(0).props.style).to.have.property(
//       "width",
//       "80%"
//     );
//     expect(container.find("hr").get(0).props.style).to.have.property(
//       "height",
//       "2px"
//     );
//   });

//   it("Renders with correct alignment", () => {
//     expect(container.find("hr").hasClass("horizontal-rule--left")).toEqual(
//       true
//     );
//   });
// });
