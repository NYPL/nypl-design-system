import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import renderer from "react-test-renderer";

import FeaturedContent from "./FeaturedContent";
import Button from "../Button/Button";
import Heading from "../Heading/Heading";
import Text from "../Text/Text";
export const textContent = (
  <>
    <div>
      <br />
      <Text size="overline1"> Featured </Text>
      <Heading level="h1"> Spotlight on the Public Domain </Heading>
      <p>
        The New York Public Library recently enhanced access to all public
        domain items in Digital Collections so that everyone has the freedom to
        enjoy and reuse these materials in almost limitless ways.
      </p>
      <Button id="test"> Discover more </Button>
    </div>
  </>
);
const defaultImageProps = {
  alt: "Image example",
  src: "//placekitten.com/800/400",
};

describe("FeaturedContent accessibility tests", () => {
  it("passes for default layout", async () => {
    const { container } = render(
      <FeaturedContent
        isFullWidth={false}
        imageProps={defaultImageProps}
        textContent={textContent}
      />
    );
    expect(await axe(container)).toHaveNoViolations();
  });
  it("passes for full layout", async () => {
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
  it("renders the given image and text block", () => {
    render(
      <FeaturedContent
        id="featuredcontent"
        isFullWidth={true}
        imageProps={defaultImageProps}
        textContent={textContent}
      />
    );

    expect(
      screen.getByText("Spotlight on the Public Domain")
    ).toBeInTheDocument();
    expect(screen.getByRole("img")).toBeInTheDocument();
    expect(screen.getByRole("img")).toHaveAttribute(
      "src",
      "//placekitten.com/800/400"
    );
  });

  it("logs a warning if `imageProps` prop is not present", () => {
    const warn = jest.spyOn(console, "warn");
    render(
      // @ts-ignore: Typescript complains when a required prop is not passed, but
      // here we don't want to pass the required prop to make sure the warning appears.
      <FeaturedContent
        id="featuredcontent"
        isFullWidth={false}
        textContent={textContent}
      />
    );
    expect(warn).toHaveBeenCalledWith(
      `NYPL Reservoir FeaturedContent: The 'imageProps' prop is required.`
    );
  });

  it("logs a warning if `textContent` prop is not present", () => {
    const warn = jest.spyOn(console, "warn");
    render(
      // @ts-ignore: Typescript complains when a required prop is not passed, but
      // here we don't want to pass the required prop to make sure the warning appears.
      <FeaturedContent
        id="featuredcontent"
        isFullWidth={false}
        imageProps={defaultImageProps}
      />
    );
    expect(warn).toHaveBeenCalledWith(
      `NYPL Reservoir FeaturedContent: The 'textContent' prop is required.`
    );
  });

  it("logs a warning if `imageProps.src` is empty", () => {
    const warn = jest.spyOn(console, "warn");
    render(
      <FeaturedContent
        id="featuredcontent"
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

it("logs a warning if `imageProps.alt` is empty", () => {
  const warn = jest.spyOn(console, "warn");
  render(
    <FeaturedContent
      id="featuredcontent"
      isFullWidth={true}
      imageProps={{
        alt: "",
        src: "//placekitten.com/800/400",
      }}
      textContent={textContent}
    />
  );
  expect(warn).toHaveBeenCalledWith(
    `NYPL Reservoir FeaturedContent: A value for 'imageProps.alt' is required.`
  );
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
          src: "//placekitten.com/800/400",
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
          src: "//placekitten.com/800/400",
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
          src: "//placekitten.com/800/400",
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
          src: "//placekitten.com/800/400",
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
