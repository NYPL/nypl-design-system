import { expect } from "chai";
import * as Enzyme from "enzyme";
import * as React from "react";

import Image from "./Image";

describe("Images", () => {
  let wrapper: Enzyme.ShallowWrapper<any, any>;
  const tooManyChars =
    "UNwbNIp1GFehVO1LBBIFYF6Nv5IhHeCPgW5JHet2VRuuKnKlGxSgjbFcfCbcttVTkxbE7ItibBIuG9cTA9HGntZSKv31u7egV88bIg7DGDHmi2nKq3ssZkBDl7oWfYpyjWbfV4kZx9EDPsKHUTKb2xIKZWSbRMuTUtsJWonQyfitDp8ui1P7QR80LA236yE5fCkRImbltEsqJWEYxyotQpLjFbruJsPcGSCp6ET6DCrNQeWFsRVaM2Co99ewZjLuY42kdpBEXjcw9HPcTjKKZw141sKBNOoFfNMueYaHtNjNI";
  it("Shows Image", () => {
    wrapper = Enzyme.shallow(<Image src="test.png" alt={""} />);
    expect(wrapper.find("img")).to.have.lengthOf(1);
  });
  it("Shows Image wrapped in figure when provided ImageCaption", () => {
    wrapper = Enzyme.shallow(
      <Image src="test.png" imageCaption={"caption"} alt={""} />
    );
    expect(wrapper.find("figure")).to.have.lengthOf(1);
    expect(wrapper.find("figcaption")).to.have.lengthOf(1);
  });

  it("Shows Image wrapped in figure when provided ImageCredit", () => {
    wrapper = Enzyme.shallow(
      <Image src="test.png" imageCredit={"credit"} alt={""} />
    );

    expect(wrapper.find("figure")).to.have.lengthOf(1);
    expect(wrapper.find("figcaption")).to.have.lengthOf(1);
  });

  it("Shows Image wrapped in figure with credit and caption when provided ImageCredit and ImageCaption", () => {
    wrapper = Enzyme.shallow(
      <Image
        src="test.png"
        imageCaption={"caption"}
        imageCredit={"credit"}
        alt={""}
      />
    );
    expect(wrapper.find("figcaption")).to.have.lengthOf(1);
    expect(wrapper.find("div")).to.have.lengthOf(2);
  });

  it("Throws error when alt text is too long", () => {
    expect(() =>
      Enzyme.mount(<Image src="test.png" alt={tooManyChars} />)
    ).to.throw("Alt Text must be less than 300 characters");
  });
});
