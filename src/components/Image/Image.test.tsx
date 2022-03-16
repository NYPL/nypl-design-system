import * as React from "react";
import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import renderer from "react-test-renderer";

import Image from "./Image";
import { ImageRatios, ImageSizes, ImageTypes } from "./ImageTypes";

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

  it("Renders the UI snapshot correctly", () => {
    const basic = renderer.create(<Image src="test.png" alt="" />).toJSON();
    const figCaption = renderer
      .create(<Image src="test.png" alt="" imageCaption="Caption" />)
      .toJSON();
    const sizeExtraExtraSmall = renderer
      .create(
        <Image src="test.png" alt="" imageSize={ImageSizes.ExtraExtraSmall} />
      )
      .toJSON();
    const sizeExtraSmall = renderer
      .create(<Image src="test.png" alt="" imageSize={ImageSizes.ExtraSmall} />)
      .toJSON();
    const sizeSmall = renderer
      .create(<Image src="test.png" alt="" imageSize={ImageSizes.Small} />)
      .toJSON();
    const sizeMedium = renderer
      .create(<Image src="test.png" alt="" imageSize={ImageSizes.Medium} />)
      .toJSON();
    const sizeLarge = renderer
      .create(<Image src="test.png" alt="" imageSize={ImageSizes.Large} />)
      .toJSON();
    const ratioFourByThree = renderer
      .create(
        <Image
          src="test.png"
          alt=""
          imageAspectRatio={ImageRatios.FourByThree}
        />
      )
      .toJSON();
    const ratioOneByTwo = renderer
      .create(
        <Image src="test.png" alt="" imageAspectRatio={ImageRatios.OneByTwo} />
      )
      .toJSON();
    const ratioOriginal = renderer
      .create(
        <Image src="test.png" alt="" imageAspectRatio={ImageRatios.Original} />
      )
      .toJSON();
    const ratioSixteenByNine = renderer
      .create(
        <Image
          src="test.png"
          alt=""
          imageAspectRatio={ImageRatios.SixteenByNine}
        />
      )
      .toJSON();
    const ratioSquare = renderer
      .create(
        <Image src="test.png" alt="" imageAspectRatio={ImageRatios.Square} />
      )
      .toJSON();
    const ratioThreeByFour = renderer
      .create(
        <Image
          src="test.png"
          alt=""
          imageAspectRatio={ImageRatios.ThreeByFour}
        />
      )
      .toJSON();
    const ratioThreeByTwo = renderer
      .create(
        <Image
          src="test.png"
          alt=""
          imageAspectRatio={ImageRatios.ThreeByTwo}
        />
      )
      .toJSON();
    const ratioTwoByOne = renderer
      .create(
        <Image src="test.png" alt="" imageAspectRatio={ImageRatios.TwoByOne} />
      )
      .toJSON();
    const typeCircle = renderer
      .create(
        <Image
          src="test.png"
          alt=""
          imageAspectRatio={ImageRatios.Square}
          imageSize={ImageSizes.Small}
          imageType={ImageTypes.Circle}
        />
      )
      .toJSON();
    const withChakraProps = renderer
      .create(<Image src="test.png" alt="" p="20px" color="ui.error.primary" />)
      .toJSON();
    const withOtherProps = renderer
      .create(<Image src="test.png" alt="" data-testid="image" />)
      .toJSON();

    expect(basic).toMatchSnapshot();
    expect(figCaption).toMatchSnapshot();
    expect(sizeExtraExtraSmall).toMatchSnapshot();
    expect(sizeExtraSmall).toMatchSnapshot();
    expect(sizeSmall).toMatchSnapshot();
    expect(sizeMedium).toMatchSnapshot();
    expect(sizeLarge).toMatchSnapshot();
    expect(ratioFourByThree).toMatchSnapshot();
    expect(ratioOneByTwo).toMatchSnapshot();
    expect(ratioOriginal).toMatchSnapshot();
    expect(ratioSixteenByNine).toMatchSnapshot();
    expect(ratioSquare).toMatchSnapshot();
    expect(ratioThreeByFour).toMatchSnapshot();
    expect(ratioThreeByTwo).toMatchSnapshot();
    expect(ratioTwoByOne).toMatchSnapshot();
    expect(typeCircle).toMatchSnapshot();
    expect(withChakraProps).toMatchSnapshot();
    expect(withOtherProps).toMatchSnapshot();
  });
});
