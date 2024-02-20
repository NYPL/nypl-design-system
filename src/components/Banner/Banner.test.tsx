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
        BannerContent={<>Banner content.</>}
        BannerHeading="Banner Heading"
      />
    );
    expect(await axe(container)).toHaveNoViolations();
  });

  it("passes axe accessibility test without heading", async () => {
    const { container } = render(
      <Banner id="BannerID" BannerContent={<>Banner content.</>} />
    );
    expect(await axe(container)).toHaveNoViolations();
  });

  it("passes axe accessibility test without an icon", async () => {
    const { container } = render(
      <Banner
        id="BannerID"
        BannerContent={<>Banner content.</>}
        BannerHeading="Banner Heading"
        showIcon={false}
      />
    );
    expect(await axe(container)).toHaveNoViolations();
  });

  it("passes axe accessibility test for the dismissible type", async () => {
    const { container } = render(
      <Banner
        dismissible
        id="BannerID"
        BannerContent={<>Banner content.</>}
        BannerHeading="Banner Heading"
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
        BannerContent={<>Banner content.</>}
        BannerHeading="Banner Heading"
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
        BannerContent={<>Banner content.</>}
        BannerHeading={<Heading level="h4">Custom H4 Heading</Heading>}
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
        BannerContent={<>Banner content.</>}
        BannerHeading="Banner Heading"
        showIcon={false}
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
        BannerContent={<>Banner content.</>}
        BannerHeading="Banner Heading"
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
        BannerContent={<>Banner content.</>}
        BannerHeading="Banner Heading"
        BannerType="announcement"
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
        BannerContent={<>Banner content.</>}
        BannerHeading="Banner Heading"
        BannerType="warning"
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

  it("renders a dismissible icon", () => {
    utils.rerender(
      <Banner
        dismissible
        id="BannerID"
        BannerContent={<>Banner content.</>}
        BannerHeading="Banner Heading"
      />
    );

    const dismissibleIcon = utils.container.querySelector(
      "#BannerID-dismissible-Banner-icon"
    );
    expect(dismissibleIcon).toBeInTheDocument();
    expect(screen.getByTitle("Banner close icon")).toBeInTheDocument();
  });

  it("renders the UI snapshot correctly", () => {
    const standard = renderer
      .create(
        <Banner
          id="BannerID1"
          BannerContent={<>Banner content.</>}
          BannerHeading="Banner Heading"
        />
      )
      .toJSON();
    const announcement = renderer
      .create(
        <Banner
          id="BannerID2"
          BannerContent={<>Banner content.</>}
          BannerHeading="Banner Heading"
          BannerType="announcement"
        />
      )
      .toJSON();
    const warning = renderer
      .create(
        <Banner
          id="BannerID3"
          BannerContent={<>Banner content.</>}
          BannerHeading="Banner Heading"
          BannerType="warning"
        />
      )
      .toJSON();
    const withoutHeading = renderer
      .create(<Banner id="BannerID4" BannerContent={<>Banner content.</>} />)
      .toJSON();
    const withoutAnIcon = renderer
      .create(
        <Banner
          id="BannerID5"
          BannerHeading="Banner Heading"
          BannerContent={<>Banner content.</>}
          showIcon={false}
        />
      )
      .toJSON();
    const withoutHeadingAndIcon = renderer
      .create(
        <Banner
          id="BannerID6"
          BannerContent={<>Banner content.</>}
          showIcon={false}
        />
      )
      .toJSON();
    const dismissible = renderer
      .create(
        <Banner
          dismissible
          id="BannerID7"
          BannerContent={<>Banner content.</>}
        />
      )
      .toJSON();
    const withChakraProps = renderer
      .create(
        <Banner
          id="chakra"
          BannerContent={<>Banner content.</>}
          BannerHeading="Banner Heading"
          p="20px"
          color="ui.error.primary"
        />
      )
      .toJSON();
    const withOtherProps = renderer
      .create(
        <Banner
          id="props"
          BannerContent={<>Banner content.</>}
          BannerHeading="Banner Heading"
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
    expect(dismissible).toMatchSnapshot();
    expect(withChakraProps).toMatchSnapshot();
    expect(withOtherProps).toMatchSnapshot();
  });

  it("passes a ref to the aside wrapper element", () => {
    const ref = React.createRef<HTMLDivElement>();
    const { container } = render(
      <Banner
        id="BannerID"
        BannerContent={<>Banner content.</>}
        BannerHeading="Banner Heading"
        ref={ref}
      />
    );

    expect(container.querySelector("aside")).toBe(ref.current);
  });
});
