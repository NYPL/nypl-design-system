import { PropsWithChildren } from "react";

import List from "../components/List/List";
import Table from "../components/Table/Table";

export interface ComponentChangelogTableProps {
  changelogData: any[];
}
export interface TableRowProps {
  date: string;
  version: string;
  type: "Bug Fix" | "New Feature" | "Update";
  affects: "Accessibility" | "Documentation" | "Functionality" | "Styles";
  notes: any[];
}

export const ComponentChangelogTable = (
  props: PropsWithChildren<ComponentChangelogTableProps>
) => {
  const { changelogData } = props;
  const tableData = [];

  changelogData.forEach((tableRow: PropsWithChildren<TableRowProps>) => {
    const { date, version, type, affects, notes } = tableRow;
    const dateFormatted = new Date(date).toLocaleDateString("en-us", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
    const notesItems = notes.map((item, i) => <li key={i}>{item}</li>);
    const notesList = <List type="ul">{notesItems}</List>;
    const rowData = [dateFormatted, version, type, affects, notesList];
    tableData.push(rowData);
  });

  const headersData = ["Date", "Version", "Type", "Affects", "Notes"];
  const narrowTdWidth = "9rem";
  const narrowerTdWidth = "7rem";
  const borderColor = "ui.gray.semi-medium";
  const customStyles = {
    thead: {
      th: {
        borderColor: borderColor,
        fontSize: "desktop.overline.overline2",
        pb: "xs",
        pt: "xs",
        textTransform: "uppercase",
      },
    },
    th: {
      borderColor: borderColor,
      fontSize: "desktop.caption",
      _last: {
        borderColor: borderColor,
      },
    },
    td: {
      borderColor: borderColor,
      fontSize: "desktop.caption",
      // pb: "xs",
      // pt: "xs",
      _last: {
        borderColor: borderColor,
      },
    },
    "th:nth-child(1)": {
      width: { base: "auto", md: narrowTdWidth },
    },
    "th:nth-child(2)": {
      width: narrowerTdWidth,
    },
    "th:nth-child(3)": {
      width: narrowerTdWidth,
    },
    "th:nth-child(4)": {
      width: narrowerTdWidth,
    },
    ul: {
      m: "0",
    },
    li: {
      _notFirst: { mt: "xs" },
    },
  };

  return (
    <Table
      className="sb-unstyled"
      columnHeaders={headersData}
      columnHeadersBackgroundColor="ui.bg.default"
      showRowDividers
      tableData={tableData}
      useRowHeaders
      sx={customStyles}
    />
  );
};

export default ComponentChangelogTable;
