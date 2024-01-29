import { HStack } from "@chakra-ui/react";
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
    selectedItem: undefined,
    listItemsData: [
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
    showBorder: true,
    listAlignment: undefined,
    highlightColor: undefined,
    selectedItem: "item-title-2",
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

export const MenuWithScroll: Story = {
  args: {
    className: undefined,
    id: "Menu-id",
    labelText: "I scroll!",
    showLabel: true,
    showBorder: true,
    listAlignment: undefined,
    highlightColor: undefined,
    selectedItem: "item-title-2",
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

export const MenuTypes: Story = {
  args: {
    className: undefined,
    id: "Menu-id",
    labelText: "I'm the menu",
    showLabel: true,
    showBorder: true,
    listAlignment: undefined,
    highlightColor: undefined,
    selectedItem: "item-title-2",
    listItemsData: [
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
        media: { type: "image", src: "//placekitten.com/300/300", alt: "" },
        onClick: () => {
          console.log("Item Title 2 clicked");
        },
      },
      {
        type: "action",
        id: "item-title-3",
        label: "I'm item 3",
        media: { type: "icon", name: "search" },
        onClick: () => {
          console.log("Item Title 3 clicked");
        },
      },
    ],
  },
  render: (args) => (
    <HStack>
      <Menu
        {...args}
        labelText={"Default Button"}
        listItemsData={args.listItemsData}
      />
      <Menu
        {...args}
        showBorder={false}
        labelText={"Text Button"}
        listItemsData={args.listItemsData}
      />
      <Menu {...args} showLabel={false} listItemsData={args.listItemsData} />
      <Menu
        {...args}
        showBorder={false}
        showLabel={false}
        listItemsData={args.listItemsData}
      />
    </HStack>
  ),
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/4hI4ibH9Wz9XtuBmPlwJjh/Exploration---Menu?type=design&node-id=2032-7203&mode=design&t=QeXxeYNlIYDpBAxp-0",
    },
    jest: ["Menu.test.tsx"],
  },
};

export const MenuAlignment: Story = {
  args: {
    className: undefined,
    id: "Menu-id",
    labelText: "I'm the menu",
    showLabel: true,
    showBorder: true,
    listAlignment: "left",
    highlightColor: undefined,
    selectedItem: "item-title-2",
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
    ],
  },
  render: (args) => (
    <HStack>
      <Menu
        {...args}
        labelText={args.labelText}
        listItemsData={args.listItemsData}
      />
      {/* <Menu
        {...args}
        listAlignment="right"
        labelText={args.labelText}
        listItemsData={args.listItemsData}
      /> */}
    </HStack>
  ),
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/4hI4ibH9Wz9XtuBmPlwJjh/Exploration---Menu?type=design&node-id=2032-7203&mode=design&t=QeXxeYNlIYDpBAxp-0",
    },
    jest: ["Menu.test.tsx"],
  },
};
