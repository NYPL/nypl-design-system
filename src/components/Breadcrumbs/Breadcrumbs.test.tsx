import * as React from "react";
import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import { axe } from "jest-axe";

import Breadcrumbs from "./Breadcrumbs";

describe("Breadcrumbs Accessibility", () => {
  const breadcrumbString = [
    { url: "#string1", text: "string1" },
    { url: "#string2", text: "string2" },
  ];
  it("passes axe accessibility test", async () => {
    const { container } = render(
      <Breadcrumbs breadcrumbsData={breadcrumbString} />
    );
    expect(await axe(container)).toHaveNoViolations();
  });
});

describe("Breadcrumbs Snapshot", () => {
  it("Renders the UI snapshot correctly", () => {
    const breadcrumbString = [
      { url: "#string1", text: "string1" },
      { url: "#string2", text: "string2" },
      { url: "#string3", text: "string3" },
    ];

    const breadcrumbsSnapshot = renderer
      .create(
        <Breadcrumbs id="breadcrumbs-test" breadcrumbsData={breadcrumbString} />
      )
      .toJSON();

    expect(breadcrumbsSnapshot).toMatchSnapshot();
  });
});

describe("Breadcrumbs Testing", () => {
  const breadcrumbString = [
    { url: "#string1", text: "string1" },
    { url: "#string2", text: "string2" },
    { url: "#string3", text: "string3" },
  ];

  it("Renders a tag with custom text", () => {
    render(<Breadcrumbs breadcrumbsData={breadcrumbString} />);

    // The last breadcrumb (the active page) is not a link.
    expect(screen.getAllByRole("link")).toHaveLength(2);
    expect(screen.getAllByRole("link")[0]).toHaveTextContent("string1");
    expect(screen.getAllByRole("link")[1]).toHaveTextContent("string2");
    expect(screen.getByText(/string3/)).toBeInTheDocument();
  });

  it("Renders icon", () => {
    const { container } = render(
      <Breadcrumbs breadcrumbsData={breadcrumbString} />
    );
    expect(container.querySelector(".icon")).toBeInTheDocument();
  });

  it("Throws error when nothing is passed into Breadcrumb", () => {
    expect(() => render(<Breadcrumbs breadcrumbsData={[]} />)).toThrowError(
      "You must use the `breadcrumbsData` prop to pass a data object to the Breadcrumbs component. That prop is current empty."
    );
  });
});
