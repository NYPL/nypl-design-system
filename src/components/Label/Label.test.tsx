import * as React from "react";
import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";

import Label from "./Label";

describe("Label Accessibility", () => {
  it("passes axe accessibility test", async () => {
    const { container } = render(
      <Label id="label" htmlFor="so-lonely">
        Cupcake's
      </Label>
    );
    expect(await axe(container)).toHaveNoViolations();
  });
});

// describe("Label Test", () => {
//   let wrapper;
//   it("Renders a <label> when passed text as children", () => {
//     wrapper = render(
//       <Label id="label" htmlFor="so-lonely">
//         {"Cupcake's"}
//       </Label>
//     );
//     expect(wrapper.find("label")).to.have.lengthOf(1);
//   });

//   it("Renders a <label> when passed element as children", () => {
//     wrapper = render(
//       <Label id="label" htmlFor="so-lonely">
//         <span>Cupcakes</span>
//       </Label>
//     );
//     expect(wrapper.find("label")).to.have.lengthOf(1);
//   });

//   it("Renders the optional or required helper text", () => {
//     wrapper = render(
//       <Label id="label" htmlFor="so-lonely">
//         <span>Cupcakes</span>
//       </Label>
//     );
//     expect(wrapper.find("div")).to.have.lengthOf(0);

//     wrapper = render(
//       <Label id="label" htmlFor="so-lonely" optReqFlag="Optional">
//         <span>Cupcakes</span>
//       </Label>
//     );
//     expect(wrapper.find("div")).to.have.lengthOf(1);
//     expect(wrapper.find("div").text()).toEqual("Optional");

//     wrapper = render(
//       <Label id="label" htmlFor="so-lonely" optReqFlag="Required">
//         <span>Cupcakes</span>
//       </Label>
//     );
//     expect(wrapper.find("div")).to.have.lengthOf(1);
//     expect(wrapper.find("div").text()).toEqual("Required");
//   });
// });
