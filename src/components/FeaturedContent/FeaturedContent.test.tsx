import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import renderer from "react-test-renderer";

import FeaturedContent from "./FeaturedContent";
import Button from "../Button/Button";
import Heading from "../Heading/Heading";
import { getPlaceholderImage } from "../../utils/utils";

export const textContent = (
  <div>
    <br />
    <Heading level="h1" overline="Featured">
      Spotlight on the Public Domain
    </Heading>
    <p>
      The New York Public Library recently enhanced access to all public domain
      items in Digital Collections so that everyone has the freedom to enjoy and
      reuse these materials in almost limitless ways.
    </p>
    <Button id="test"> Discover more </Button>
  </div>
);
const defaultImageProps = {
  alt: "Image example",
  src: getPlaceholderImage("smaller", 0),
};

describe("FeaturedContent accessibility tests", () => {
  it("passes axe accessibility for default layout", async () => {
    const { container } = render(
      <FeaturedContent
        isFullWidth={false}
        imageProps={defaultImageProps}
        textContent={textContent}
      />
    );
    expect(await axe(container)).toHaveNoViolations();
  });
  it("passes axe accessibility for full layout", async () => {
    const { container } = render(
      <FeaturedContent
        isFullWidth={true}
        imageProps={defaultImageProps}
        textContent={textContent}
      />
    );
    expect(await axe(container)).toHaveNoViolations();
  });
});

describe("FeaturedContent", () => {
  it("should not render an id if none is passed", () => {
    render(
      <FeaturedContent
        isFullWidth={false}
        imageProps={defaultImageProps}
        textContent={textContent}
      />
    );
    expect(screen.getByTestId("ds-featuredContent")).not.toHaveAttribute("id");
  });

  it("renders the given image and text block", () => {
    render(
      <FeaturedContent
        isFullWidth={true}
        imageProps={defaultImageProps}
        textContent={textContent}
      />
    );

    expect(
      screen.getByText("Spotlight on the Public Domain")
    ).toBeInTheDocument();
    expect(
      screen.getByTestId("ds-featuredContent-bgImage")
    ).toBeInTheDocument();
    expect(screen.getByTestId("ds-featuredContent-bgImage")).toHaveStyle(
      `background-image: url(${getPlaceholderImage("smaller", 0)});`
    );
  });

  it("logs a warning if `textContent` prop is not present", () => {
    const warn = jest.spyOn(console, "warn");
    render(
      // @ts-ignore: Typescript complains when a required prop is not passed, but
      // here we don't want to pass the required prop to make sure the warning appears.
      <FeaturedContent isFullWidth={false} imageProps={defaultImageProps} />
    );
    expect(warn).toHaveBeenCalledWith(
      `NYPL Reservoir FeaturedContent: The 'textContent' prop is required.`
    );
  });

  it("logs a warning if `imageProps.src` is empty", () => {
    const warn = jest.spyOn(console, "warn");
    render(
      <FeaturedContent
        isFullWidth={true}
        imageProps={{
          alt: "Image example",
          src: "",
        }}
        textContent={textContent}
      />
    );
    expect(warn).toHaveBeenCalledWith(
      `NYPL Reservoir FeaturedContent: A value for 'imageProps.src' is required.`
    );
  });
});

it("Renders the UI snapshot correctly", () => {
  const defaultLayout = renderer
    .create(
      <FeaturedContent
        isFullWidth={false}
        imageProps={defaultImageProps}
        textContent={textContent}
      />
    )
    .toJSON();
  const fullLayout = renderer
    .create(
      <FeaturedContent
        isFullWidth={true}
        imageProps={defaultImageProps}
        textContent={textContent}
      />
    )
    .toJSON();

  const oneQuarterImageWidth = renderer
    .create(
      <FeaturedContent
        isFullWidth={false}
        imageProps={{
          alt: "Image example",
          src: getPlaceholderImage("smaller", 0),
          width: "oneQuarter",
        }}
        textContent={textContent}
      />
    )
    .toJSON();
  const oneThirdImageWidth = renderer
    .create(
      <FeaturedContent
        isFullWidth={false}
        imageProps={{
          alt: "Image example",
          src: getPlaceholderImage("smaller", 0),
          width: "oneThird",
        }}
        textContent={textContent}
      />
    )
    .toJSON();

  const twoThirdsImageWidth = renderer
    .create(
      <FeaturedContent
        isFullWidth={false}
        imageProps={{
          alt: "Image example",
          src: getPlaceholderImage("smaller", 0),
          width: "twoThirds",
        }}
        textContent={textContent}
      />
    )
    .toJSON();
  const threeQuartersImageWidth = renderer
    .create(
      <FeaturedContent
        isFullWidth={false}
        imageProps={{
          alt: "Image example",
          src: getPlaceholderImage("smaller", 0),
          width: "threeQuarters",
        }}
        textContent={textContent}
      />
    )
    .toJSON();
  expect(defaultLayout).toMatchSnapshot();
  expect(fullLayout).toMatchSnapshot();
  expect(oneQuarterImageWidth).toMatchSnapshot();
  expect(oneThirdImageWidth).toMatchSnapshot();
  expect(twoThirdsImageWidth).toMatchSnapshot();
  expect(threeQuartersImageWidth).toMatchSnapshot();
});
