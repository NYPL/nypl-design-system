import * as React from "react";
import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import Table from "./Table";

export const columnHeaders = [
  "First Name",
  "Last Name",
  "Nick Name",
  "Address1",
  "City",
  "Zipcode",
  "State",
];

export const tableData = [
  ["Tom", "Nook", "Tanukichi", "Main Street", "New York", "23458", "NY"],
  ["Isabelle", "-", "Shizue", "Walnut Street", "New York", "23458", "NY"],
  ["K.K.", "Slider", "Totakeke", "Niper Place", "New York", "98765", "NY"],
  [
    "Sonny",
    "Resetti",
    "Risetto san",
    "Village Road",
    "New York",
    "09873",
    "NY",
  ],
];

describe("Table Accessibility", () => {
  it("passes axe accessibility test with the columnHeaders and tableData prop", async () => {
    const { container } = render(
      <Table columnHeaders={columnHeaders} tableData={tableData} />
    );
    expect(await axe(container)).toHaveNoViolations();
  });

  it("passes axe accessibility test with tableData prop", async () => {
    const { container } = render(<Table tableData={tableData} />);
    expect(await axe(container)).toHaveNoViolations();
  });
});

describe("Table", () => {
  it("Renders table data", () => {
    render(<Table tableData={tableData} columnHeaders={columnHeaders} />);
    expect(screen.getByText("Tom")).toBeInTheDocument();
    expect(screen.getByText("First Name")).toBeInTheDocument();
    expect(screen.getByText("Village Road")).toBeInTheDocument();
  });

  it("logs a warning when the `tableData` prop is an empty array", async () => {
    const warn = jest.spyOn(console, "warn");
    render(<Table tableData={[]} />);
    expect(warn).toHaveBeenCalledWith(
      "Table data should be two dimensional array."
    );
  });
});
