import * as React from "react";
import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";

import Breadcrumbs from "./Breadcrumbs";

describe("Breadcrumbs Accessibility", () => {
  const breadcrumbString = [
    { url: "#string1", text: "string1" },
    { url: "#string2", text: "string2" },
  ];
  it("passes axe accessibility test", async () => {
    const { container } = render(
      <Breadcrumbs breadcrumbs={breadcrumbString} />
    );
    expect(await axe(container)).toHaveNoViolations();
  });
});

describe("Breadcrumbs", () => {
  const breadcrumbString = [
    { url: "#string1", text: "string1" },
    { url: "#string2", text: "string2" },
  ];
  const breadcrumbComponent = [
    <a key="link1" href="#component1">
      <span>component1</span>
    </a>,
    <a key="link2" href="#component2">
      component2
    </a>,
  ];

  it("Renders a tag with custom text", () => {
    render(<Breadcrumbs breadcrumbs={breadcrumbString} />);

    expect(screen.getAllByRole("link")).toHaveLength(2);
    expect(screen.getAllByRole("link")[0]).toHaveTextContent("string1");
    expect(screen.getAllByRole("link")[1]).toHaveTextContent("string2");
  });

  it("Renders breadcrumb when passed components", () => {
    render(<Breadcrumbs breadcrumbs={breadcrumbComponent} />);

    expect(screen.getAllByRole("link")).toHaveLength(2);
    expect(screen.getAllByRole("link")[0]).toHaveTextContent("component1");
    expect(screen.getAllByRole("link")[1]).toHaveTextContent("component2");
  });

  it("Renders icon", () => {
    const { container } = render(
      <Breadcrumbs breadcrumbs={breadcrumbComponent} />
    );
    expect(container.querySelector(".breadcrumbs svg")).toBeInTheDocument();
  });

  it("Throws error when nothing is passed into Breadcrumb", () => {
    expect(() => render(<Breadcrumbs breadcrumbs={[]} />)).toThrowError(
      "Breadcrumbs must contain a set of links. Breadcrumbs currently empty"
    );
  });
});
