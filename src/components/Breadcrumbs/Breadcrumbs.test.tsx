import * as React from "react";
import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import { axe } from "jest-axe";

import Breadcrumbs from "./Breadcrumbs";

describe("Breadcrumbs Accessibility", () => {
  const breadcrumbsData = [
    { url: "#string1", text: "string1" },
    { url: "#string2", text: "string2" },
  ];

  it("passes axe accessibility test", async () => {
    const { container } = render(
      <Breadcrumbs breadcrumbsData={breadcrumbsData} />
    );
    expect(await axe(container)).toHaveNoViolations();
  });

  // This fails because there MUST only be one "breadcrumb" landmark item
  // on a page. This specifically means there should be one `<nav>` element
  // with `aria-label="Breadcrumb"`.
  // https://www.w3.org/TR/wai-aria-practices/examples/breadcrumb/index.html
  it("does not pass axe accessibility test", async () => {
    const { container } = render(
      <>
        <Breadcrumbs breadcrumbsData={breadcrumbsData} />
        <Breadcrumbs breadcrumbsData={breadcrumbsData} />
      </>
    );
    expect(await axe(container)).not.toHaveNoViolations();
  });
});

describe("Breadcrumbs", () => {
  const breadcrumbsData = [
    { url: "#string1", text: "string1" },
    { url: "#string2", text: "string2" },
    { url: "#string3", text: "string3" },
  ];

  it("Renders a tag with custom text", () => {
    render(<Breadcrumbs breadcrumbsData={breadcrumbsData} />);

    // The last breadcrumb (the active page) is not a link.
    expect(screen.getAllByRole("link")).toHaveLength(2);
    expect(screen.getAllByRole("link")[0]).toHaveTextContent("string1");
    expect(screen.getAllByRole("link")[1]).toHaveTextContent("string2");
    expect(screen.getByText(/string3/)).toBeInTheDocument();
  });

  it("Renders icon", () => {
    const { container } = render(
      <Breadcrumbs breadcrumbsData={breadcrumbsData} />
    );
    expect(container.querySelector(".breadcrumbs-icon")).toBeInTheDocument();
  });

  it("Throws error when nothing is passed into Breadcrumb", () => {
    expect(() => render(<Breadcrumbs breadcrumbsData={[]} />)).toThrowError(
      "NYPL Reservoir Breadcrumbs: No data was passed to the `breadcrumbsData` prop."
    );
  });
});

describe("Breadcrumbs Snapshot", () => {
  it("Renders the UI snapshot correctly", () => {
    const breadcrumbsData = [
      { url: "#string1", text: "string1" },
      { url: "#string2", text: "string2" },
      { url: "#string3", text: "string3" },
    ];

    const breadcrumbsSnapshot = renderer
      .create(
        <Breadcrumbs id="breadcrumbs-test" breadcrumbsData={breadcrumbsData} />
      )
      .toJSON();
    const breadcrumbsVariantColor = renderer
      .create(
        <Breadcrumbs
          breadcrumbsData={breadcrumbsData}
          breadcrumbsType="booksAndMore"
          id="breadcrumbs-test"
        />
      )
      .toJSON();
    const breadcrumbsBlogsVariant = renderer
      .create(
        <Breadcrumbs
          breadcrumbsData={breadcrumbsData}
          breadcrumbsType="blogs"
          id="breadcrumbs-test"
        />
      )
      .toJSON();
    const breadcrumbsLocationsVariant = renderer
      .create(
        <Breadcrumbs
          breadcrumbsData={breadcrumbsData}
          breadcrumbsType="blogs"
          id="breadcrumbs-test"
        />
      )
      .toJSON();
    const breadcrumbsEducationVariant = renderer
      .create(
        <Breadcrumbs
          breadcrumbsData={breadcrumbsData}
          breadcrumbsType="education"
          id="breadcrumbs-test"
        />
      )
      .toJSON();
    const withChakraProps = renderer
      .create(
        <Breadcrumbs
          breadcrumbsData={breadcrumbsData}
          id="breadcrumbs-test"
          p="s"
          color="ui.error.primary"
        />
      )
      .toJSON();
    const withOtherProps = renderer
      .create(
        <Breadcrumbs
          breadcrumbsData={breadcrumbsData}
          id="breadcrumbs-test"
          data-testid="testid"
        />
      )
      .toJSON();

    expect(breadcrumbsSnapshot).toMatchSnapshot();
    expect(breadcrumbsVariantColor).toMatchSnapshot();
    expect(breadcrumbsBlogsVariant).toMatchSnapshot();
    expect(breadcrumbsLocationsVariant).toMatchSnapshot();
    expect(breadcrumbsEducationVariant).toMatchSnapshot();
    expect(withChakraProps).toMatchSnapshot();
    expect(withOtherProps).toMatchSnapshot();
  });
});
