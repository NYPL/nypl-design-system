import * as Enzyme from "enzyme";
import * as React from "react";

import Image from "./Image";

describe("Images", () => {
    let wrapper: Enzyme.ShallowWrapper<{}, {}>;
    const tooManyChars =
        "UNwbNIp1GFehVO1LBBIFYF6Nv5IhHeCPgW5JHet2VRuuKnKlGxSgjbFcfCbcttVTkxbE7ItibBIuG9cTA9HGntZSKv31u7egV88bIg7DGDHmi2nKq3ssZkBDl7oWfYpyjWbfV4kZx9EDPsKHUTKb2xIKZWSbRMuTUtsJWonQyfitDp8ui1P7QR80LA236yE5fCkRImbltEsqJWEYxyotQpLjFbruJsPcGSCp6ET6DCrNQeWFsRVaM2Co99ewZjLuY42kdpBEXjcw9HPcTjKKZw141sKBNOoFfNMueYaHtNjNI";
    it("Shows Image", () => {
        wrapper = Enzyme.shallow(<Image src="test.png" isDecorative={true} />);
        expect(wrapper.find("img")).toHaveLength(1);
    });
    it("Throws error when meaningful image is passed without alt text", () => {
        expect(() =>
            Enzyme.mount(<Image src="test.png" isDecorative={false} />)
        ).toThrowError("If image is decorative, alt text is required");
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
        ).toThrowError("Alt Text must be less than 300 characters");
    });
});
