import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import * as React from "react";

import PlaceholderImage from "./PlaceholderImage";

describe("PlaceholderImage Accessibility", () => {
  it("passes axe accessibility with default props", async () => {
    const { container } = render(<PlaceholderImage />);
    expect(await axe(container)).toHaveNoViolations();
  });

  it("passes axe accessibility with a contentTitle", async () => {
    const { container } = render(
      <PlaceholderImage contentTitle="Moby Dick by Herman Melville" />
    );
    expect(await axe(container)).toHaveNoViolations();
  });
});

describe("PlaceholderImage", () => {
  it("renders a figure element with the 'Preview not available' text", () => {
    render(<PlaceholderImage />);

    expect(screen.getByRole("figure")).toBeInTheDocument();
    expect(screen.getByText("Preview not available")).toBeInTheDocument();
  });

  it("renders the icon corresponding to the given contentType", () => {
    render(<PlaceholderImage contentType="video" />);

    expect(screen.getByTitle("video content icon")).toBeInTheDocument();
  });

  it("renders contentTitle in the visually hidden text when provided, and falls back to a generic message when it is not", () => {
    const { rerender } = render(
      <PlaceholderImage contentTitle="Moby Dick by Herman Melville" />
    );

    expect(
      screen.getByText("for Moby Dick by Herman Melville", { exact: false })
    ).toBeInTheDocument();

    rerender(<PlaceholderImage contentType="book" />);

    expect(
      screen.getByText("for this book content", { exact: false })
    ).toBeInTheDocument();
  });
});
