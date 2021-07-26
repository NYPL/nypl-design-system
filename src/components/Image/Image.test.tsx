import * as React from "react";
import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";

import Image from "./Image";

describe("Image Accessibility", () => {
  it("passes axe accessibility test", async () => {
    const { container } = render(<Image src="test.png" alt={""} />);
    expect(await axe(container)).toHaveNoViolations();
  });
});

// describe("Images", () => {
//   let wrapper;
//   const tooManyChars =
//     "UNwbNIp1GFehVO1LBBIFYF6Nv5IhHeCPgW5JHet2VRuuKnKlGxSgjbFcfCbcttVTkxbE7ItibBIuG9cTA9HGntZSKv31u7egV88bIg7DGDHmi2nKq3ssZkBDl7oWfYpyjWbfV4kZx9EDPsKHUTKb2xIKZWSbRMuTUtsJWonQyfitDp8ui1P7QR80LA236yE5fCkRImbltEsqJWEYxyotQpLjFbruJsPcGSCp6ET6DCrNQeWFsRVaM2Co99ewZjLuY42kdpBEXjcw9HPcTjKKZw141sKBNOoFfNMueYaHtNjNI";
//   it("Shows Image", () => {
//     wrapper = render(<Image src="test.png" alt={""} />);
//     expect(wrapper.find("img")).to.have.lengthOf(1);
//   });
//   it("Shows Image wrapped in figure when provided ImageCaption", () => {
//     wrapper = render(
//       <Image src="test.png" imageCaption={"caption"} alt={""} />
//     );
//     expect(wrapper.find("figure")).to.have.lengthOf(1);
//     expect(wrapper.find("figcaption")).to.have.lengthOf(1);
//   });

//   it("Shows Image wrapped in figure when provided ImageCredit", () => {
//     wrapper = render(
//       <Image src="test.png" imageCredit={"credit"} alt={""} />
//     );

//     expect(wrapper.find("figure")).to.have.lengthOf(1);
//     expect(wrapper.find("figcaption")).to.have.lengthOf(1);
//   });

//   it("Shows Image wrapped in figure with credit and caption when provided ImageCredit and ImageCaption", () => {
//     wrapper = render(
//       <Image
//         src="test.png"
//         imageCaption={"caption"}
//         imageCredit={"credit"}
//         alt={""}
//       />
//     );
//     expect(wrapper.find("figcaption")).to.have.lengthOf(1);
//     expect(wrapper.find("div")).to.have.lengthOf(2);
//   });

//   it("Throws error when alt text is too long", () => {
//     expect(() =>
//       render(<Image src="test.png" alt={tooManyChars} />)
//     ).to.throw("Alt Text must be less than 300 characters");
//   });
// });
