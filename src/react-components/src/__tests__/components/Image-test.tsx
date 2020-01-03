
import { expect } from "chai";
import * as Enzyme from "enzyme";
import * as React from "react";
import * as Mocha from "mocha";

import Image from "../../components/01-atoms/Images/Image/Image";

describe("Images", () => {
  let wrapper: Enzyme.ShallowWrapper<{}, {}>;
  let tooManyChars = "UNwbNIp1GFehVO1LBBIFYF6Nv5IhHeCPgW5JHet2VRuuKnKlGxSgjbFcfCbcttVTkxbE7ItibBIuG9cTA9HGntZSKv31u7egV88bIg7DGDHmi2nKq3ssZkBDl7oWfYpyjWbfV4kZx9EDPsKHUTKb2xIKZWSbRMuTUtsJWonQyfitDp8ui1P7QR80LA236yE5fCkRImbltEsqJWEYxyotQpLjFbruJsPcGSCp6ET6DCrNQeWFsRVaM2Co99ewZjLuY42kdpBEXjcw9HPcTjKKZw141sKBNOoFfNMueYaHtNjNI";
  it("Shows Image", () => {
    wrapper = Enzyme.shallow(<Image src="test.png" isDecorative={true} />);
    expect(wrapper.find("img")).to.have.lengthOf(1);
  });
  it("Throws error when meaningful image is passed without alt text", () => {
    expect(() => Enzyme.mount(<Image src="test.png" isDecorative={false} />))
    .to.throw("If image is decorative, alt text is required");
  });
  it("Throws error when alt text is too long", () => {
    expect(() => Enzyme.mount(<Image src="test.png" isDecorative={false} altText={tooManyChars} />)).to.throw("Alt Text must be less than 300 characters");
  });
});
