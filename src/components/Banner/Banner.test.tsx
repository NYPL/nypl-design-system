import * as React from "react";
import { render, RenderResult, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import renderer from "react-test-renderer";

import Heading from "../Heading/Heading";
import Icon from "../Icons/Icon";
import Banner from "./Banner";

describe("Banner Accessibility", () => {
  it("passes axe accessibility test with heading", async () => {
    const { container } = render(
      <Banner
        id="BannerID"
        content={<>Banner content.</>}
        heading="Banner Heading"
      />
    );
    expect(await axe(container)).toHaveNoViolations();
  });

  it("passes axe accessibility test without heading", async () => {
    const { container } = render(
      <Banner id="BannerID" content={<>Banner content.</>} />
    );
    expect(await axe(container)).toHaveNoViolations();
  });

  it("passes axe accessibility test without an icon", async () => {
    const { container } = render(
      <Banner
        id="BannerID"
        content={<>Banner content.</>}
        heading="Banner Heading"
      />
    );
    expect(await axe(container)).toHaveNoViolations();
  });

  it("passes axe accessibility test for the isDismissible type", async () => {
    const { container } = render(
      <Banner
        isDismissible
        id="BannerID"
        content={<>Banner content.</>}
        heading="Banner Heading"
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
        ariaLabel="Banner label"
        id="BannerID"
        content={<>Banner content.</>}
        heading="Banner Heading"
      />
    );
  });

  it("renders Banner heading child component", () => {
    expect(screen.getByText("Banner Heading")).toBeInTheDocument();
  });

  it("renders a custom heading level", () => {
    utils.rerender(
      <Banner
        ariaLabel="Banner label"
        id="BannerID"
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
    // Since the icon has aria-hidden set to true, we can't get it
    // by its "img" role.
    const icon = utils.container.querySelector("#BannerID-Banner-icon");
    expect(icon).toBeInTheDocument();
  });

  it("does not render an Icon", () => {
    utils.rerender(
      <Banner
        id="BannerID"
        content={<>Banner content.</>}
        heading="Banner Heading"
      />
    );
    const icon = utils.container.querySelector("#BannerID-Banner-icon");
    expect(icon).not.toBeInTheDocument();
  });

  it("renders a custom Icon component", () => {
    utils.rerender(
      <Banner
        icon={
          <Icon
            id="custom-icon"
            className="custom-icon"
            color="brand.primary"
            name="check"
            size="large"
          />
        }
        id="BannerID"
        content={<>Banner content.</>}
        heading="Banner Heading"
      />
    );

    const customIcon = utils.container.querySelector(
      "#BannerID-custom-Banner-icon"
    );
    expect(customIcon).toBeInTheDocument();
  });

  it("renders the announcement Banner type", () => {
    utils.rerender(
      <Banner
        id="BannerID"
        content={<>Banner content.</>}
        heading="Banner Heading"
        type="neutral"
      />
    );

    expect(utils.container.querySelector("aside")).toHaveAttribute(
      "data-type",
      "announcement"
    );
  });

  it("renders the warning Banner type", () => {
    utils.rerender(
      <Banner
        id="BannerID"
        content={<>Banner content.</>}
        heading="Banner Heading"
        type="warning"
      />
    );

    expect(utils.container.querySelector("aside")).toHaveAttribute(
      "data-type",
      "warning"
    );
  });

  it("renders with an aria-label attribute", () => {
    expect(screen.getByRole("complementary")).toHaveAttribute(
      "aria-label",
      "Banner label"
    );
  });

  it("renders a isDismissible icon", () => {
    utils.rerender(
      <Banner
        isDismissible
        id="BannerID"
        content={<>Banner content.</>}
        heading="Banner Heading"
      />
    );

    const isDismissibleIcon = utils.container.querySelector(
      "#BannerID-isDismissible-Banner-icon"
    );
    expect(isDismissibleIcon).toBeInTheDocument();
    expect(screen.getByTitle("Banner close icon")).toBeInTheDocument();
  });

  it("renders the UI snapshot correctly", () => {
    const standard = renderer
      .create(
        <Banner
          id="BannerID1"
          content={<>Banner content.</>}
          heading="Banner Heading"
        />
      )
      .toJSON();
    const announcement = renderer
      .create(
        <Banner
          id="BannerID2"
          content={<>Banner content.</>}
          heading="Banner Heading"
          type="neutral"
        />
      )
      .toJSON();
    const warning = renderer
      .create(
        <Banner
          id="BannerID3"
          content={<>Banner content.</>}
          heading="Banner Heading"
          type="warning"
        />
      )
      .toJSON();
    const withoutHeading = renderer
      .create(<Banner id="BannerID4" content={<>Banner content.</>} />)
      .toJSON();
    const withoutAnIcon = renderer
      .create(
        <Banner
          id="BannerID5"
          heading="Banner Heading"
          content={<>Banner content.</>}
        />
      )
      .toJSON();
    const withoutHeadingAndIcon = renderer
      .create(<Banner id="BannerID6" content={<>Banner content.</>} />)
      .toJSON();
    const isDismissible = renderer
      .create(
        <Banner isDismissible id="BannerID7" content={<>Banner content.</>} />
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

    expect(standard).toMatchSnapshot();
    expect(announcement).toMatchSnapshot();
    expect(warning).toMatchSnapshot();
    expect(withoutHeading).toMatchSnapshot();
    expect(withoutAnIcon).toMatchSnapshot();
    expect(withoutHeadingAndIcon).toMatchSnapshot();
    expect(isDismissible).toMatchSnapshot();
    expect(withChakraProps).toMatchSnapshot();
    expect(withOtherProps).toMatchSnapshot();
  });

  it("passes a ref to the aside wrapper element", () => {
    const ref = React.createRef<HTMLDivElement>();
    const { container } = render(
      <Banner
        id="BannerID"
        content={<>Banner content.</>}
        heading="Banner Heading"
        ref={ref}
      />
    );

    expect(container.querySelector("aside")).toBe(ref.current);
  });
});
