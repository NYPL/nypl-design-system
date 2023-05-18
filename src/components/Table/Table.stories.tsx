import type { Meta, StoryObj } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";

import Image from "../Image/Image";
import Table from "./Table";

const meta: Meta<typeof Table> = {
  title: "Components/Page Layout/Table",
  component: Table,
  decorators: [withDesign],
  argTypes: {
    columnHeaders: { control: { disable: true } },
    columnHeadersBackgroundColor: { control: { type: "color" } },
    columnHeadersTextColor: { control: { type: "color" } },
    id: { control: false },
    tableData: { control: false },
  },
};

export default meta;
type Story = StoryObj<typeof Table>;

const columnHeaders = [
  "First Name",
  "Last Name",
  "Nick Name",
  "Address1",
  "City",
  "State",
  "Zipcode",
];
const tableData = [
  ["Tom", "Nook", "Tanukichi", "Main Street", "New York", "NY", "23458"],
  ["Isabelle", "-", "Shizue", "Walnut Street", "New York", "NY", "23458"],
  ["K.K.", "Slider", "Totakeke", "Niper Place", "New York", "NY", "98765"],
  [
    "Sonny",
    "Resetti",
    "Risetto san",
    "Village Road",
    "New York",
    "NY",
    "09873",
  ],
];

/**
 * Main Story for the Table component. This must contains the `args`
 * and `parameters` properties in this object.
 */
export const WithControls: Story = {
  args: {
    className: undefined,
    columnHeaders,
    columnHeadersBackgroundColor: undefined,
    columnHeadersTextColor: undefined,
    id: undefined,
    showRowDividers: false,
    tableData,
    titleText: undefined,
    useRowHeaders: false,
  },
  render: (args) => <Table {...args}></Table>,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Main?node-id=46780%3A27675",
    },
    jest: "Table.test.tsx",
  },
};

// The following are additional Table example Stories.
export const WithATitle: Story = {
  render: () => (
    <Table
      columnHeaders={columnHeaders}
      id="title-table"
      tableData={tableData}
      titleText="Table with a title"
    />
  ),
};

export const WithRowDividers: Story = {
  render: () => (
    <Table
      columnHeaders={columnHeaders}
      id="showRowDividers-table"
      showRowDividers
      tableData={tableData}
    />
  ),
};

export const WithRowHeaders: Story = {
  render: () => (
    <Table
      columnHeaders={columnHeaders}
      id="rowHeaders-table"
      tableData={tableData}
      useRowHeaders
    />
  ),
};

export const WithCustomHeaderColors: Story = {
  render: () => (
    <Table
      columnHeaders={columnHeaders}
      columnHeadersBackgroundColor="var(--nypl-colors-ui-link-secondary)"
      columnHeadersTextColor="var(--nypl-colors-ui-white)"
      id="rowHeaders-table"
      showRowDividers
      tableData={tableData}
      useRowHeaders
    />
  ),
};

const characterHeaders = ["First Name", "Last Name", "Avatar"];
const charactersData = [
  [
    "Tom",
    "Nook",
    <Image
      alt="Tom Nook"
      key="image"
      size="small"
      src="https://play.nintendo.com/images/AC_Tom_FRYtwIN.17345b1513ac044897cfc243542899dce541e8dc.9afde10b.png"
    />,
  ],
  [
    "Isabelle",
    "-",
    <Image
      alt="Isabelle"
      key="image"
      size="small"
      src="https://play.nintendo.com/images/AC_Isabelle_7XU6aGu.17345b1513ac044897cfc243542899dce541e8dc.9afde10b.png"
    />,
  ],
  [
    "K.K.",
    "Slider",
    <Image
      alt="K.K Slider"
      key="image"
      size="small"
      src="https://play.nintendo.com/images/AC_KK_jh4yj5t.17345b1513ac044897cfc243542899dce541e8dc.9afde10b.png"
    />,
  ],
];
export const WithJSXElement: Story = {
  render: () => (
    <Table
      columnHeaders={characterHeaders}
      id="jsx-example"
      showRowDividers
      tableData={charactersData}
    />
  ),
  name: "With JSX Element",
};
