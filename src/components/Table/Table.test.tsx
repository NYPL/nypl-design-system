import * as React from "react";
import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import renderer from "react-test-renderer";

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
  it("renders a caption", () => {
    render(<Table tableData={tableData} titleText="this is the caption" />);
    expect(screen.getByText("this is the caption")).toBeInTheDocument();
  });

  it("renders a table header", () => {
    render(
      <Table
        columnHeaders={columnHeaders}
        tableData={tableData}
        titleText="this is the caption"
      />
    );

    expect(screen.getByText("First Name")).toBeInTheDocument();
    expect(screen.getByText("Last Name")).toBeInTheDocument();
    expect(screen.getByText("Nick Name")).toBeInTheDocument();
  });

  it("renders table data", () => {
    render(<Table tableData={tableData} columnHeaders={columnHeaders} />);

    expect(screen.getByText("Tom")).toBeInTheDocument();
    expect(screen.getByText("Nook")).toBeInTheDocument();
    expect(screen.getByText("Village Road")).toBeInTheDocument();
  });

  it("logs a warning when the `tableData` prop is an empty array", async () => {
    const warn = jest.spyOn(console, "warn");
    render(<Table tableData={[]} />);
    expect(warn).toHaveBeenCalledWith(
      "NYPL Reservoir Table: Data in the `tableData` prop must be a two dimensional array."
    );
  });

  it("renders the UI snapshot correctly", () => {
    const basic = renderer
      .create(<Table id="basic" tableData={tableData} />)
      .toJSON();
    const withCaption = renderer
      .create(
        <Table
          id="withCaption"
          tableData={tableData}
          titleText="this is the caption"
        />
      )
      .toJSON();
    const withHeaders = renderer
      .create(
        <Table
          columnHeaders={columnHeaders}
          id="withHeaders"
          tableData={tableData}
          titleText="this is the caption"
        />
      )
      .toJSON();
    const withRowHeaders = renderer
      .create(
        <Table
          columnHeaders={columnHeaders}
          id="withHeaders"
          tableData={tableData}
          titleText="this is the caption"
          useRowHeaders
        />
      )
      .toJSON();
    const withCustomHeaderColors = renderer
      .create(
        <Table
          columnHeadersBackgroundColor="var(--nypl-colors-ui-link-primary)"
          columnHeadersTextColor="var(--nypl-colors-ui-white)"
          columnHeaders={columnHeaders}
          id="withHeaders"
          tableData={tableData}
          titleText="this is the caption"
          useRowHeaders
        />
      )
      .toJSON();

    expect(basic).toMatchSnapshot();
    expect(withCaption).toMatchSnapshot();
    expect(withHeaders).toMatchSnapshot();
    expect(withRowHeaders).toMatchSnapshot();
    expect(withCustomHeaderColors).toMatchSnapshot();
  });
});
