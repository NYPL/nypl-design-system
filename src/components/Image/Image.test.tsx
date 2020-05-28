import { expect } from "chai";
import * as Enzyme from "enzyme";
import * as React from "react";
import * as Mocha from "mocha";

import Image from "./Image";

describe("Images", () => {
    let wrapper: Enzyme.ShallowWrapper<{}, {}>;
    let tooManyChars =
        "UNwbNIp1GFehVO1LBBIFYF6Nv5IhHeCPgW5JHet2VRuuKnKlGxSgjbFcfCbcttVTkxbE7ItibBIuG9cTA9HGntZSKv31u7egV88bIg7DGDHmi2nKq3ssZkBDl7oWfYpyjWbfV4kZx9EDPsKHUTKb2xIKZWSbRMuTUtsJWonQyfitDp8ui1P7QR80LA236yE5fCkRImbltEsqJWEYxyotQpLjFbruJsPcGSCp6ET6DCrNQeWFsRVaM2Co99ewZjLuY42kdpBEXjcw9HPcTjKKZw141sKBNOoFfNMueYaHtNjNI";
    it("Shows Image", () => {
        wrapper = Enzyme.shallow(<Image src="test.png" isDecorative={true} />);
        expect(wrapper.find("img")).to.have.lengthOf(1);
    });
    it("Shows Image with caption when provided ImageCaption", () => {
        wrapper = Enzyme.shallow(
            <Image
                src="test.png"
                isDecorative={true}
                imageCaption={"caption"}
            />
        );
        expect(wrapper.find("p")).to.have.lengthOf(1);
        expect(wrapper.find("p").text()).to.equal("caption");
    });

    it("Shows Image with credit when provided ImageCredit", () => {
        wrapper = Enzyme.shallow(
            <Image src="test.png" isDecorative={true} imageCredit={"credit"} />
        );
<<<<<<< HEAD:src/components/Image/Image.test.tsx

        expect(wrapper.find("p").text()).to.equal("credit");
        expect(wrapper.find("p")).to.have.lengthOf(1);
=======
        expect(wrapper.find("p")).to.have.lengthOf(1);
        expect(wrapper.find("p").text()).to.equal("Credit: credit");
>>>>>>> prepend credit with 'credit:':src/react-components/src/__tests__/components/Image-test.tsx
    });

    it("Shows Image with credit and caption when provided ImageCredit and ImageCaption", () => {
        wrapper = Enzyme.shallow(
            <Image
                src="test.png"
                isDecorative={true}
                imageCaption={"caption"}
                imageCredit={"credit"}
            />
        );
        expect(wrapper.find("p")).to.have.lengthOf(2);
    });

    it("Throws error when meaningful image is passed without alt text", () => {
        expect(() =>
            Enzyme.mount(<Image src="test.png" isDecorative={false} />)
        ).to.throw("If image is decorative, alt text is required");
    });
    it("Throws error when alt text is too long", () => {
        expect(() =>
            Enzyme.mount(
                <Image
                    src="test.png"
                    isDecorative={false}
                    altText={tooManyChars}
                />
            )
        ).to.throw("Alt Text must be less than 300 characters");
    });
});
