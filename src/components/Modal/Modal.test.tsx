import * as React from "react";
import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";

import Modal from "./Modal";

describe("Modal Accessibility", () => {
  it("passes axe accessibility test", async () => {
    const { container } = render(<Modal />);
    expect(await axe(container)).toHaveNoViolations();
  });
});

// describe("Modal", () => {
//   it("modal applies 'no-scroll' class to body", () => {
//     const wrapper = render(<Modal />, { attachTo: document.body });
//     expect(wrapper.find("Modal").exists()).toEqual(true);
//     expect(document.body.classList[0]).toEqual("no-scroll");
//   });
// });
