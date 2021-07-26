import * as React from "react";
import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";

import HelperErrorText from "./HelperErrorText";

describe("HelperErrorText Accessibility", () => {
  it("passes axe accessibility test", async () => {
    const { container } = render(
      <HelperErrorText id="helperTextWithLink" isError={false}>
        Text
      </HelperErrorText>
    );
    expect(await axe(container)).toHaveNoViolations();
  });
});

// describe("HelperErrorText Test", () => {
//   it("Renders HelperErrorText", () => {
//     const container = render(
//       <HelperErrorText id="helperTextWithLink" isError={false}>
//         Text
//       </HelperErrorText>
//     );
//     expect(container.exists("#helperTextWithLink")).toEqual(true);
//   });

//   it("Has 'error' modifier if error is passed", () => {
//     const container = render(
//       <HelperErrorText id="helperTextWithLink" isError={true}>
//         Text
//       </HelperErrorText>
//     );
//     expect(container.exists("#helperTextWithLink")).toEqual(true);
//   });

//   it("Has aria-live and aria-atomic properties when errored", () => {
//     const container = render(
//       <HelperErrorText id="helperTextWithLink" isError={true}>
//         Text
//       </HelperErrorText>
//     );
//     expect(container.find("div").props()["aria-live"]).toEqual("polite");
//     expect(container.find("div").props()["aria-atomic"]).toEqual(true);
//   });

//   it("Accepts an aria-atomic value of false", () => {
//     let container = render(
//       <HelperErrorText id="helperTextWithLink" isError={true}>
//         Text
//       </HelperErrorText>
//     );
//     // The default is "true".
//     expect(container.find("div").props()["aria-atomic"]).toEqual(true);

//     container = render(
//       <HelperErrorText
//         id="helperTextWithLink"
//         isError={true}
//         ariaAtomic={false}
//       >
//         <p>
//           This is static <span>but this part changes often!</span>
//         </p>
//       </HelperErrorText>
//     );
//     // But the prop accepts false in case only part of the helper text
//     // should only be read instead of the whole region.
//     expect(container.find("div").props()["aria-atomic"]).toEqual(false);
//   });
// });
