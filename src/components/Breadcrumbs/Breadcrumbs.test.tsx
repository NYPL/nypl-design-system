import * as React from "react";
import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import { axe } from "jest-axe";

import Breadcrumbs from "./Breadcrumbs";
import { ColorVariants } from "./BreadcrumbsTypes";

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
          colorVariant={ColorVariants.BooksAndMore}
          id="breadcrumbs-test"
        />
      )
      .toJSON();
    const breadcrumbsAdditionalStyles = renderer
      .create(
        <Breadcrumbs
          additionalStyles={{
            bg: "var(--nypl-colors-ui-error-primary)",
          }}
          breadcrumbsData={breadcrumbsData}
          id="breadcrumbs-test"
        />
      )
      .toJSON();

    expect(breadcrumbsSnapshot).toMatchSnapshot();
    expect(breadcrumbsVariantColor).toMatchSnapshot();
    expect(breadcrumbsAdditionalStyles).toMatchSnapshot();
  });
});

describe("Breadcrumbs Testing", () => {
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
      "You must use the `breadcrumbsData` prop to pass a data object to the Breadcrumbs component. That prop is current empty."
    );
  });
});
