import * as React from "react";
import { render, RenderResult, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import renderer from "react-test-renderer";

import Heading from "../Heading/Heading";
import Icon from "../Icons/Icon";
import Banner from "./Banner";

jest.mock("../../hooks/useSafeId", () => ({
  ...jest.requireActual("../../hooks/useSafeId"),
  useSafeId: jest.fn((id) => id || "test-id"),
}));

describe("Banner Accessibility", () => {
  it("passes axe accessibility test with no id", async () => {
    const { container } = render(
      <Banner content={<>Banner content.</>} heading="Banner Heading" />
    );
    expect(await axe(container)).toHaveNoViolations();
  });
  it("passes axe accessibility test with heading", async () => {
    const { container } = render(
      <Banner
        content={<>Banner content.</>}
        heading="Banner Heading"
        id="bannerID"
      />
    );
    expect(await axe(container)).toHaveNoViolations();
  });

  it("passes axe accessibility test without heading", async () => {
    const { container } = render(
      <Banner id="bannerID" content={<>Banner content.</>} />
    );
    expect(await axe(container)).toHaveNoViolations();
  });

  it("passes axe accessibility test for the isDismissible type", async () => {
    const { container } = render(
      <Banner
        content={<>Banner content.</>}
        heading="Banner Heading"
        isDismissible
        id="bannerID"
        onClose={() => {
          console.log("custom close");
        }}
      />
    );
    expect(await axe(container)).toHaveNoViolations();
  });
});

describe("Banner", () => {
  let utils: RenderResult;
  beforeEach(() => {
    utils = render(
      <Banner
        aria-label="Banner label"
        content={<>Banner content.</>}
        heading="Banner Heading"
        id="bannerID"
      />
    );
  });

  it("should add an id to the component even if none is passed", () => {
    utils.rerender(
      <Banner
        aria-label="Banner label"
        content={<>Banner content.</>}
        heading="Banner Heading"
      />
    );
    expect(screen.getByTestId("ds-banner")).toHaveAttribute("id", "test-id");
  });

  it("renders Banner heading child component", () => {
    expect(screen.getByText("Banner Heading")).toBeInTheDocument();
  });

  it("renders a custom heading level", () => {
    utils.rerender(
      <Banner
        aria-label="Banner label"
        id="bannerID"
        content={<>Banner content.</>}
        heading={<Heading level="h4">Custom H4 Heading</Heading>}
      />
    );
    expect(screen.getByRole("heading", { level: 4 })).toBeInTheDocument();
  });

  it("renders Banner content child component", () => {
    expect(screen.getByText("Banner content.")).toBeInTheDocument();
  });

  it("renders with an Icon", () => {
    utils.rerender(
      <Banner
        aria-label="Banner label"
        content={<>Banner content.</>}
        heading="Banner Heading"
        id="bannerID"
      />
    );
    // Since the icon has aria-hidden set to true, we can't get it
    // by its "img" role.
    const icon = screen.getByTestId("bannerID-banner-icon");
    expect(icon).toBeInTheDocument();

    expect(screen.getByTitle("Banner neutral icon")).toHaveAttribute(
      "data-file-name",
      "SvgErrorOutline"
    );
  });

  it("renders a custom Icon component", () => {
    utils.rerender(
      <Banner
        icon={
          <Icon
            id="custom-icon"
            data-testid="custom-icon"
            className="custom-icon"
            color="brand.primary"
            name="check"
            size="large"
          />
        }
        id="bannerID"
        content={<>Banner content.</>}
        heading="Banner Heading"
      />
    );

    const customIcon = screen.getByTestId("custom-icon");
    expect(customIcon).toBeInTheDocument();

    expect(screen.getByTitle("check icon")).toHaveAttribute(
      "data-file-name",
      "SvgCheck"
    );
  });

  it("renders with an aria-label attribute", () => {
    expect(screen.getByRole("complementary")).toHaveAttribute(
      "aria-label",
      "Banner label"
    );
  });

  it("renders a dismissible icon", () => {
    utils.rerender(
      <Banner
        isDismissible
        id="bannerID"
        content={<>Banner content.</>}
        heading="Banner Heading"
      />
    );

    expect(screen.getByTestId("bannerID-dismissible-icon")).toBeInTheDocument();
    expect(screen.getByTitle("Banner close icon")).toBeInTheDocument();
    expect(screen.getByTitle("Banner close icon")).toHaveAttribute(
      "data-file-name",
      "SvgClose"
    );
  });

  it("calls onClose correctly", () => {
    const log = jest.spyOn(console, "log");

    utils.rerender(
      <Banner
        content={<>Banner content.</>}
        heading="Banner Heading"
        isDismissible
        onClose={() => console.log("custom close")}
      />
    );
    const button = screen.getByRole("button");
    button.click();
    expect(log).toHaveBeenCalledWith("custom close");
  });

  it("renders the informative Banner type", () => {
    utils.rerender(
      <Banner
        content={<>Banner content.</>}
        heading="Banner Heading"
        variant="informative"
      />
    );

    expect(utils.container.querySelector("aside")).toHaveAttribute(
      "data-variant",
      "informative"
    );
  });
  it("renders the negative Banner type", () => {
    utils.rerender(
      <Banner
        content={<>Banner content.</>}
        heading="Banner Heading"
        variant="negative"
      />
    );

    expect(utils.container.querySelector("aside")).toHaveAttribute(
      "data-variant",
      "negative"
    );
  });
  it("renders the neutral Banner type", () => {
    utils.rerender(
      <Banner
        content={<>Banner content.</>}
        heading="Banner Heading"
        variant="neutral"
      />
    );

    expect(utils.container.querySelector("aside")).toHaveAttribute(
      "data-variant",
      "neutral"
    );
  });
  it("renders the positive Banner type", () => {
    utils.rerender(
      <Banner
        content={<>Banner content.</>}
        heading="Banner Heading"
        variant="positive"
      />
    );

    expect(utils.container.querySelector("aside")).toHaveAttribute(
      "data-variant",
      "positive"
    );
  });
  it("renders the recommendation Banner type", () => {
    utils.rerender(
      <Banner
        content={<>Banner content.</>}
        heading="Banner Heading"
        variant="recommendation"
      />
    );

    expect(utils.container.querySelector("aside")).toHaveAttribute(
      "data-variant",
      "recommendation"
    );
  });
  it("renders the warning Banner type", () => {
    utils.rerender(
      <Banner
        content={<>Banner content.</>}
        heading="Banner Heading"
        variant="warning"
      />
    );

    expect(utils.container.querySelector("aside")).toHaveAttribute(
      "data-variant",
      "warning"
    );
  });

  it("logs warnings when both background and highlight colors are not set together", () => {
    const warn = jest.spyOn(console, "warn");

    const { rerender } = render(
      <Banner
        backgroundColor="section.books-and-more.primary-05"
        content={<>Banner content.</>}
        heading="Banner Heading"
      />
    );
    expect(warn).toHaveBeenCalledWith(
      "NYPL Reservoir Banner: The `backgroundColor` prop has been passed, " +
        "but the `highlightColor` prop has not been passed. Because of " +
        "this, the `backgroundColor` prop will be ignored."
    );

    rerender(
      <Banner
        content={<>Banner content.</>}
        heading="Banner Heading"
        highlightColor="section.education.primary"
      />
    );
    expect(warn).toHaveBeenCalledWith(
      "NYPL Reservoir Banner: The `highlightColor` prop has been passed, " +
        "but the `backgroundColor` prop has not been passed. Because of " +
        "this, the `highlightColor` prop will be ignored."
    );
  });

  it("logs warnings when onClose is passed to a non-dismissible banner", () => {
    const warn = jest.spyOn(console, "warn");

    utils.rerender(
      <Banner
        content={<>Banner content.</>}
        heading="Banner Heading"
        onClose={() => console.log("custom close")}
      />
    );
    expect(warn).toHaveBeenCalledWith(
      "NYPL Reservoir Banner: The `onClose` prop has been passed, but the " +
        "banner is not dismissible, so `onClose` will be ignored."
    );
  });

  it("renders the UI snapshot correctly", () => {
    const informative = renderer
      .create(
        <Banner
          content={<>Banner content.</>}
          heading="Banner Heading"
          variant="informative"
        />
      )
      .toJSON();
    const negative = renderer
      .create(
        <Banner
          id="bannerID3"
          content={<>Banner content.</>}
          heading="Banner Heading"
          variant="negative"
        />
      )
      .toJSON();
    const neutral = renderer
      .create(
        <Banner
          id="bannerID3"
          content={<>Banner content.</>}
          heading="Banner Heading"
          variant="neutral"
        />
      )
      .toJSON();
    const positive = renderer
      .create(
        <Banner
          id="bannerID3"
          content={<>Banner content.</>}
          heading="Banner Heading"
          variant="positive"
        />
      )
      .toJSON();
    const recommendation = renderer
      .create(
        <Banner
          id="bannerID3"
          content={<>Banner content.</>}
          heading="Banner Heading"
          variant="recommendation"
        />
      )
      .toJSON();
    const warning = renderer
      .create(
        <Banner
          id="bannerID3"
          content={<>Banner content.</>}
          heading="Banner Heading"
          variant="warning"
        />
      )
      .toJSON();
    const withoutHeading = renderer
      .create(<Banner id="bannerID4" content={<>Banner content.</>} />)
      .toJSON();
    const isDismissible = renderer
      .create(
        <Banner
          isDismissible
          id="bannerID7"
          content={<>Banner content.</>}
          onClose={() => {
            console.log("custom close");
          }}
        />
      )
      .toJSON();
    const withChakraProps = renderer
      .create(
        <Banner
          id="chakra"
          content={<>Banner content.</>}
          heading="Banner Heading"
          p="20px"
          color="ui.error.primary"
        />
      )
      .toJSON();
    const withOtherProps = renderer
      .create(
        <Banner
          id="props"
          content={<>Banner content.</>}
          heading="Banner Heading"
          data-testid="props"
        />
      )
      .toJSON();

    expect(informative).toMatchSnapshot();
    expect(negative).toMatchSnapshot();
    expect(neutral).toMatchSnapshot();
    expect(positive).toMatchSnapshot();
    expect(recommendation).toMatchSnapshot();
    expect(warning).toMatchSnapshot();
    expect(withoutHeading).toMatchSnapshot();
    expect(isDismissible).toMatchSnapshot();
    expect(withChakraProps).toMatchSnapshot();
    expect(withOtherProps).toMatchSnapshot();
  });

  it("passes a ref to the aside wrapper element", () => {
    const ref = React.createRef<HTMLDivElement>();
    const { container } = render(
      <Banner
        id="bannerID"
        content={<>Banner content.</>}
        heading="Banner Heading"
        ref={ref}
      />
    );

    expect(container.querySelector("aside")).toBe(ref.current);
  });

  it("renders string content as div with dangerouslySetInnerHTML", () => {
    utils.rerender(
      <Banner
        id="bannerID"
        content="<p data-testid='dangerous'>Dangerous HTML</p>"
      />
    );

    expect(screen.getByTestId("dangerous")).toHaveTextContent("Dangerous HTML");
  });
});
