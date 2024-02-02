import { HStack } from "@chakra-ui/react";
import type { Meta, StoryObj } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";
import { sectionTypeArray } from "../../helpers/types";

import Menu, { ListItemsData } from "./Menu";

const meta: Meta<typeof Menu> = {
  title: "Components/Navigation/Menu",
  component: Menu,
  decorators: [withDesign],
  argTypes: {
    className: { control: false },
    id: { control: false },
    showLabel: { control: { type: "boolean" } },
    selectedItem: { description: "Set item id to be selected on open." },
    labelText: { description: "Set menu button text." },
    listItemsData: { control: false },
    highlightColor: {
      control: "select",
      options: sectionTypeArray,
      defaultValue: "blogs",
    },
    listAlignment: {
      options: ["left", "right"],
      table: { defaultValue: { summary: "left" } },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Menu>;

const defaultListItems: ListItemsData[] = [
  {
    type: "action",
    id: "item-title-1",
    label: "I'm item 1",
    onClick: () => {
      console.log("Item Title 1 clicked");
    },
  },
  {
    type: "action",
    id: "item-title-2",
    label: "I'm item 2",
    onClick: () => {
      console.log("Item Title 2 clicked");
    },
  },
  {
    type: "action",
    id: "item-title-3",
    label: "I'm item 3",
    onClick: () => {
      console.log("Item Title 3 clicked");
    },
  },
];

const iconListItems: ListItemsData[] = [
  {
    type: "action",
    id: "item-title-1",
    label: "I'm item 1",
    media: { type: "icon", name: "search" },
    onClick: () => {
      console.log("Item Title 1 clicked");
    },
  },
  {
    type: "action",
    id: "item-title-2",
    label: "I'm item 2",
    media: { type: "icon", name: "arrow" },
    onClick: () => {
      console.log("Item Title 2 clicked");
    },
  },
  {
    type: "action",
    id: "item-title-3",
    label: "I'm item 3",
    media: { type: "icon", name: "actionCheckCircle" },
    onClick: () => {
      console.log("Item Title 3 clicked");
    },
  },
];

const imageListItems: ListItemsData[] = [
  {
    type: "action",
    id: "item-title-1",
    label: "I'm item 1",
    media: { type: "image", src: "//placekitten.com/300/300", alt: "" },
    onClick: () => {
      console.log("Item Title 1 clicked");
    },
  },
  {
    type: "action",
    id: "item-title-2",
    label: "I'm item 2",
    media: { type: "image", src: "//placekitten.com/300/300", alt: "" },
    onClick: () => {
      console.log("Item Title 2 clicked");
    },
  },
  {
    type: "action",
    id: "item-title-3",
    label: "I'm item 3",
    media: { type: "image", src: "//placekitten.com/300/300", alt: "" },
    onClick: () => {
      console.log("Item Title 3 clicked");
    },
  },
];

const longListItems: ListItemsData[] = [
  {
    type: "group",
    id: "group-1",
    label: "I'm group 1",
    children: [
      {
        type: "action",
        id: "item-title-1",
        label: "I'm item 1",
        onClick: () => {
          console.log("Item Title 1 clicked");
        },
      },
      {
        type: "action",
        id: "item-title-2",
        label: "I'm item 2",
        onClick: () => {
          console.log("Item Title 2 clicked");
        },
      },
    ],
  },
  { type: "divider", id: "divider-1" },
  {
    type: "group",
    id: "group-2",
    label: "I'm group 2",
    children: [
      {
        type: "action",
        id: "item-title-3",
        label: "I'm item 3",
        onClick: () => {
          console.log("Item Title 3 clicked");
        },
      },
      {
        type: "action",
        id: "item-title-4",
        label: "I'm item 4",
        onClick: () => {
          console.log("Item Title 4 clicked");
        },
      },
    ],
  },
];

const reallyLongListItems: ListItemsData[] = [
  {
    type: "group",
    id: "group-1",
    label: "I'm group 1",
    children: [
      {
        type: "action",
        id: "item-title-1",
        label: "I'm item 1",
        onClick: () => {
          console.log("Item Title 1 clicked");
        },
      },
      {
        type: "action",
        id: "item-title-2",
        label: "I'm item 2",
        onClick: () => {
          console.log("Item Title 2 clicked");
        },
      },
    ],
  },
  {
    type: "group",
    id: "group-2",
    label: "I'm group 2",
    children: [
      {
        type: "action",
        id: "item-title-3",
        label: "I'm item 3",
        onClick: () => {
          console.log("Item Title 3 clicked");
        },
      },
      {
        type: "action",
        id: "item-title-4",
        label: "I'm item 4",
        onClick: () => {
          console.log("Item Title 4 clicked");
        },
      },
    ],
  },
  {
    type: "group",
    id: "group-3",
    label: "I'm group 3",
    children: [
      {
        type: "action",
        id: "item-title-5",
        label: "I'm item 5",
        onClick: () => {
          console.log("Item Title 5 clicked");
        },
      },
      {
        type: "action",
        id: "item-title-6",
        label: "I'm item 6",
        onClick: () => {
          console.log("Item Title 6 clicked");
        },
      },
    ],
  },
  { type: "divider", id: "divider-1" },
  {
    type: "action",
    id: "item-title-7",
    label: "I'm item 7",
    onClick: () => {
      console.log("Item Title 7 clicked");
    },
  },
  {
    type: "action",
    id: "item-title-8",
    label: "I'm item 8",
    onClick: () => {
      console.log("Item Title 8 clicked");
    },
  },
];

const wideListItems: ListItemsData[] = [
  {
    type: "action",
    id: "item-title-1",
    label: "I'm item 1 and I'm very long, too long even, I should be shorter",
    onClick: () => {
      console.log("Item Title 1 clicked");
    },
  },
  {
    type: "action",
    id: "item-title-2",
    label: "I'm item 2 and I'm also very very long",
    onClick: () => {
      console.log("Item Title 2 clicked");
    },
  },
  {
    type: "action",
    id: "item-title-3",
    label: "I'm item 3",
    onClick: () => {
      console.log("Item Title 3 clicked");
    },
  },
];

/**
 * Main Story for the Menu component. This must contain the `args`
 * and `parameters` properties in this object.
 */
export const WithControls: Story = {
  args: {
    className: undefined,
    id: "Menu-id",
    labelText: "I'm the menu",
    showLabel: true,
    showBorder: true,
    listAlignment: "left",
    highlightColor: "blogs",
    selectedItem: undefined,
    listItemsData: undefined,
  },
  render: (args) => (
    <Menu
      {...args}
      labelText={args.labelText}
      listItemsData={defaultListItems}
    />
  ),
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Main?node-id=80460%3A101982",
    },
    jest: ["Menu.test.tsx"],
  },
};

// The following are additional Menu Stories.

export const MenuTypes: Story = {
  render: () => (
    <HStack>
      <Menu labelText={"Default Button"} listItemsData={defaultListItems} />
      <Menu
        showBorder={false}
        labelText={"Text Button"}
        listItemsData={defaultListItems}
      />
      <Menu
        showLabel={false}
        labelText={"Menu"}
        listItemsData={defaultListItems}
      />
      <Menu
        showBorder={false}
        labelText={"Menu"}
        showLabel={false}
        listItemsData={defaultListItems}
      />
    </HStack>
  ),
};

export const MenuContent: Story = {
  render: () => (
    <HStack>
      <Menu labelText={"I have images"} listItemsData={imageListItems} />
      <Menu labelText={"I have icons"} listItemsData={iconListItems} />
      <Menu labelText={"I have groups"} listItemsData={longListItems} />
      <Menu
        labelText={"I have max height"}
        listItemsData={reallyLongListItems}
      />
      <Menu labelText={"I have max width"} listItemsData={wideListItems} />
    </HStack>
  ),
};

export const MenuHighlightColors: Story = {
  render: () => (
    <HStack>
      <Menu
        labelText={"Blogs (default) "}
        highlightColor={"blogs"}
        selectedItem={"item-title-1"}
        listItemsData={defaultListItems}
      />
      <Menu
        labelText={"Research"}
        highlightColor={"research"}
        selectedItem={"item-title-1"}
        listItemsData={defaultListItems}
      />
      <Menu
        labelText={"LPA"}
        highlightColor={"researchLibraryLpa"}
        selectedItem={"item-title-1"}
        listItemsData={defaultListItems}
      />
      <Menu
        labelText={"Education"}
        highlightColor={"education"}
        selectedItem={"item-title-1"}
        listItemsData={defaultListItems}
      />
    </HStack>
  ),
};
