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

const columnHeadersAlt = ["Name", "Nick Name", "Species", "Description"];
const tableDataAlt = [
  [
    "Tom Nook",
    "Tanukichi",
    "Raccoon",
    "A businessman who manages the town shop and the player's home loan. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Maecenas faucibus mollis interdum. Donec id elit non mi porta gravida at eget metus. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Nulla vitae elit libero, a pharetra augue.",
  ],
  [
    "Isabelle",
    "Shizue",
    "Dog",
    "A secretary and assistant to the player. Twin sister to Digby. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. Sed posuere consectetur est at lobortis.",
  ],
  [
    "K.K. Slider",
    "Totakeke",
    "Dog",
    "A traveling musician and DJ. Cras mattis consectetur purus sit amet fermentum. Nulla vitae elit libero, a pharetra augue. Etiam porta sem malesuada magna mollis euismod. Donec ullamcorper nulla non metus auctor fringilla. Donec sed odio dui. Donec id elit non mi porta gravida at eget metus.",
  ],
  [
    "Sonny Resetti",
    "Risetto san",
    "Mole",
    "Lectures the player if they reset their game. Brother to Don Resetti. Pellentesque ornare sem lacinia quam venenatis vestibulum. Etiam porta sem malesuada magna mollis euismod. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.",
  ],
];

const columnWidths = [
  { minWidth: "200px", width: "15%" },
  { minWidth: "200px", width: "15%" },
  { minWidth: "200px", width: "15%" },
  { minWidth: "500px", width: "auto" },
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
  // render: (args) => <Table {...args} __css={tableStyles}></Table>,
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
export const Title: Story = {
  render: () => (
    <Table
      columnHeaders={columnHeaders}
      id="title-table"
      tableData={tableData}
      titleText="Table with a title"
    />
  ),
};

export const RowDividers: Story = {
  render: () => (
    <Table
      columnHeaders={columnHeaders}
      id="showRowDividers-table"
      showRowDividers
      tableData={tableData}
    />
  ),
};

export const RowHeaders: Story = {
  render: () => (
    <Table
      columnHeaders={columnHeaders}
      id="rowHeaders-table"
      tableData={tableData}
      useRowHeaders
    />
  ),
};

export const CustomHeaderColors: Story = {
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

export const CustomColumnWidths: Story = {
  render: () => (
    <Table
      columnHeaders={columnHeadersAlt}
      columnWidths={columnWidths}
      id="columnWidth-table"
      tableData={tableDataAlt}
    />
  ),
};

export const CustomColumnWidthsWithRowHeaders: Story = {
  name: "Custom Column Widths with Row Headers",
  render: () => (
    <Table
      columnHeaders={columnHeadersAlt}
      columnWidths={columnWidths}
      id="columnWidth-table-without-row-headers"
      tableData={tableDataAlt}
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
export const JSXElements: Story = {
  render: () => (
    <Table
      columnHeaders={characterHeaders}
      id="jsx-example"
      showRowDividers
      tableData={charactersData}
    />
  ),
  name: "JSX Element",
};
