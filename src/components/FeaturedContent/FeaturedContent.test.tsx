import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import * as React from "react";
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
const imageProps = {
  alt: "Image example",
  src: "//placekitten.com/800/400",
};

describe("FeaturedContent accessibility tests", () => {
  it("passes for default layout", async () => {
    const { container } = render(
      <FeaturedContent
        isFullWidth={false}
        imageProps={imageProps}
        textContent={textContent}
      />
    );
    expect(await axe(container)).toHaveNoViolations();
  });
  it("passes for full layout", async () => {
    const { container } = render(
      <FeaturedContent
        isFullWidth={true}
        imageProps={imageProps}
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
        imageProps={imageProps}
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
});

it("Renders the UI snapshot correctly", () => {
  const defaultLayout = renderer
    .create(
      <FeaturedContent
        isFullWidth={false}
        imageProps={imageProps}
        textContent={textContent}
      />
    )
    .toJSON();
  const fullLayout = renderer
    .create(
      <FeaturedContent
        isFullWidth={true}
        imageProps={imageProps}
        textContent={textContent}
      />
    )
    .toJSON();
  expect(defaultLayout).toMatchSnapshot();
  expect(fullLayout).toMatchSnapshot();
});
