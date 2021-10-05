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

describe("Image", () => {
  const tooManyChars =
    "UNwbNIp1GFehVO1LBBIFYF6Nv5IhHeCPgW5JHet2VRuuKnKlGxSgjbFcfCbcttVTkxbE7ItibBIuG9cTA9HGntZSKv31u7egV88bIg7DGDHmi2nKq3ssZkBDl7oWfYpyjWbfV4kZx9EDPsKHUTKb2xIKZWSbRMuTUtsJWonQyfitDp8ui1P7QR80LA236yE5fCkRImbltEsqJWEYxyotQpLjFbruJsPcGSCp6ET6DCrNQeWFsRVaM2Co99ewZjLuY42kdpBEXjcw9HPcTjKKZw141sKBNOoFfNMueYaHtNjNI";
  it("Shows Image", () => {
    const utils = render(<Image src="test.png" alt="" />);
    expect(utils.container.querySelector(".image")).toBeInTheDocument();
    expect(utils.container.querySelector(".figure")).not.toBeInTheDocument();
  });

  it("Shows Image wrapped in figure when provided ImageCaption", () => {
    const utils = render(
      <Image src="test.png" imageCaption="caption" alt="" />
    );
    expect(screen.getByText("caption")).toBeInTheDocument();
    expect(utils.container.querySelector(".figure")).toBeInTheDocument();
  });

  it("Shows Image wrapped in figure when provided ImageCredit", () => {
    const utils = render(<Image src="test.png" imageCredit="credit" alt="" />);

    expect(screen.getByText("credit")).toBeInTheDocument();
    expect(utils.container.querySelector(".figure")).toBeInTheDocument();
    expect(
      utils.container.querySelector(".figcaption__credit")
    ).toBeInTheDocument();
  });

  it("Shows Image wrapped in figure with credit and caption when provided ImageCredit and ImageCaption", () => {
    const utils = render(
      <Image
        src="test.png"
        imageCaption="caption"
        imageCredit="credit"
        alt=""
      />
    );
    expect(screen.getByText("caption")).toBeInTheDocument();
    expect(screen.getByText("credit")).toBeInTheDocument();
    expect(utils.container.querySelector(".figure")).toBeInTheDocument();
    expect(
      utils.container.querySelector(".figcaption__credit")
    ).toBeInTheDocument();
    expect(
      utils.container.querySelector(".figcaption__caption")
    ).toBeInTheDocument();
  });

  it("Throws error when alt text is too long", () => {
    expect(() =>
      render(<Image src="test.png" alt={tooManyChars} />)
    ).toThrowError("Alt Text must be less than 300 characters");
  });
});
