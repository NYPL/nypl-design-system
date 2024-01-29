import type { Meta, StoryObj } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";
import { sectionTypeArray } from "../../helpers/types";

import Menu from "./Menu";

const meta: Meta<typeof Menu> = {
  title: "Components/Navigation/Menu",
  component: Menu,
  decorators: [withDesign],
  argTypes: {
    className: { control: false },
    id: { control: false },
    highlightColor: {
      control: "select",
      options: sectionTypeArray,
      table: {
        defaultValue: {
          summary: "blogs",
        },
      },
    },
    listAlignment: {
      controls: { type: "radio" },
      options: ["left", "right"],
      table: { defaultValue: { summary: "left" } },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Menu>;

/**
 * Main Story for the Menu component. This must contains the `args`
 * and `parameters` properties in this object.
 */
export const WithControls: Story = {
  args: {
    className: undefined,
    id: "Menu-id",
    labelText: "I'm the menu",
    showLabel: true,
    showBorder: true,
    listAlignment: undefined,
    highlightColor: undefined,
    currentItem: "item-title-2",
    listItemsData: [
      {
        type: "action",
        id: "item-title-1",
        label: "I'm item 1",
        media: { type: "icon", name: "search" },
        onClick: () => {
          console.log("Item Title 1 clicked");
        },
        selected: false,
      },
      {
        type: "action",
        id: "item-title-2",
        label: "I'm item 2",
        media: { type: "icon", name: "arrow" },
        onClick: () => {
          console.log("Item Title 2 clicked");
        },
        selected: false,
      },
      {
        type: "action",
        id: "item-title-3",
        label: "I'm item 3",
        media: { type: "icon", name: "actionCheckCircle" },
        onClick: () => {
          console.log("Item Title 3 clicked");
        },
        selected: false,
      },
    ],
  },
  render: (args) => (
    <Menu
      {...args}
      labelText={args.labelText}
      listItemsData={args.listItemsData}
    />
  ),
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/4hI4ibH9Wz9XtuBmPlwJjh/Exploration---Menu?type=design&node-id=2032-7203&mode=design&t=QeXxeYNlIYDpBAxp-0",
    },
    jest: ["Menu.test.tsx"],
  },
};

// The following are additional Menu Stories.
export const MenuWithGroup: Story = {
  args: {
    className: undefined,
    id: "Menu-id",
    labelText: "I'm the menu",
    showLabel: true,
    showBorder: false,
    listAlignment: undefined,
    highlightColor: undefined,
    currentItem: "item-title-2",
    listItemsData: [
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
            selected: false,
          },
          {
            type: "action",
            id: "item-title-2",
            label: "I'm item 2",
            onClick: () => {
              console.log("Item Title 2 clicked");
            },
            selected: false,
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
            selected: false,
          },
          {
            type: "action",
            id: "item-title-4",
            label: "I'm item 4",
            onClick: () => {
              console.log("Item Title 4 clicked");
            },
            selected: false,
          },
        ],
      },
    ],
  },
  render: (args) => (
    <Menu
      {...args}
      labelText={args.labelText}
      listItemsData={args.listItemsData}
    />
  ),
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/4hI4ibH9Wz9XtuBmPlwJjh/Exploration---Menu?type=design&node-id=2032-7203&mode=design&t=QeXxeYNlIYDpBAxp-0",
    },
    jest: ["Menu.test.tsx"],
  },
};
