import * as React from "react";
import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";

import Image from "./Image";

describe("Image Accessibility", () => {
  it("passes axe accessibility for regular img element", async () => {
    const { container } = render(<Image src="test.png" alt="" />);
    expect(await axe(container)).toHaveNoViolations();
  });

  it("passes axe accessibility for figure element wrapper", async () => {
    const { container } = render(
      <Image src="test.png" alt="" imageCaption="This is a caption" />
    );
    expect(await axe(container)).toHaveNoViolations();
  });
});

describe("Image", () => {
  const tooManyChars =
    "UNwbNIp1GFehVO1LBBIFYF6Nv5IhHeCPgW5JHet2VRuuKnKlGxSgjbFcfCbcttVTkxbE7I" +
    "tibBIuG9cTA9HGntZSKv31u7egV88bIg7DGDHmi2nKq3ssZkBDl7oWfYpyjWbfV4kZx9EDP" +
    "sKHUTKb2xIKZWSbRMuTUtsJWonQyfitDp8ui1P7QR80LA236yE5fCkRImbltEsqJWEYxyot" +
    "QpLjFbruJsPcGSCp6ET6DCrNQeWFsRVaM2Co99ewZjLuY42kdpBEXjcw9HPcTjKKZw141sK" +
    "BNOoFfNMueYaHtNjNI";

  it("renders a simple image not wrapped in a figure element", () => {
    render(<Image src="test.png" alt="" />);
    expect(screen.getByRole("img")).toBeInTheDocument();
    expect(screen.queryByRole("figure")).not.toBeInTheDocument();
  });

  it("renders an image wrapped in figure when provided a caption", () => {
    render(<Image src="test.png" imageCaption="caption" alt="" />);
    expect(screen.getByRole("img")).toBeInTheDocument();
    expect(screen.getByRole("figure")).toBeInTheDocument();
    expect(screen.getByText("caption")).toBeInTheDocument();
  });

  it("renders an image wrapped in figure when provided an image credit", () => {
    render(<Image src="test.png" imageCredit="credit" alt="" />);
    expect(screen.getByRole("img")).toBeInTheDocument();
    expect(screen.getByRole("figure")).toBeInTheDocument();
    expect(screen.getByText("credit")).toBeInTheDocument();
  });

  it("renders an image wrapped in figure with credit and caption", () => {
    render(
      <Image
        src="test.png"
        imageCaption="caption"
        imageCredit="credit"
        alt=""
      />
    );
    expect(screen.getByRole("img")).toBeInTheDocument();
    expect(screen.getByRole("figure")).toBeInTheDocument();
    expect(screen.getByText("caption")).toBeInTheDocument();
    expect(screen.getByText("credit")).toBeInTheDocument();
  });

  it("throws error when alt text is too long", () => {
    expect(() =>
      render(<Image src="test.png" alt={tooManyChars} />)
    ).toThrowError("Alt Text must be less than 300 characters");
  });
});
