import type { Meta, StoryObj } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";
import { sectionTypeArray } from "../../helpers/types";
//import Image from "../Image/Image";

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
    showBorder: false,
    highlightColor: undefined,
    currentItem: "item-title-2",
    listItemsData: [
      {
        type: "action",
        id: "item-title-1",
        label: "I'm item 1",
        media: "arrow",
        onClick: () => {
          console.log("Item Title 1 clicked");
        },
      },
      {
        type: "action",
        id: "item-title-2",
        label: "I'm item 2",
        media: "search",
        onClick: () => {
          console.log("Item Title 2 clicked");
        },
      },
      {
        type: "group",
        id: "group-item-2",
        label: "I'm the group",
        children: [
          {
            type: "action",
            id: "item-title-11",
            label: "I'm item 11",
            media: "arrow",
            onClick: () => {
              console.log("Item Title 1 clicked");
            },
          },
          {
            type: "action",
            id: "item-title-21",
            label: "I'm item 21",
            media: "search",
            onClick: () => {
              console.log("Item Title 2 clicked");
            },
          },
          {
            type: "divider",
            id: "item-title-4",
          },
        ],
      },
      {
        type: "group",
        id: "group-item-7",
        label: "I'm the group",
        children: [
          {
            type: "action",
            id: "item-title-17",
            label: "I'm item 17",
            media: "arrow",
            onClick: () => {
              console.log("Item Title 17 clicked");
            },
          },
          {
            type: "action",
            id: "item-title-213",
            label: "I'm item 213",
            media: "search",
            onClick: () => {
              console.log("Item Title 213 clicked");
            },
          },
        ],
      },
      // {
      //   type: "action",
      //   id: "item-title-3",
      //   label: "I'm item 3",
      //   media: <Image alt="" src="//placekitten.com/300/300" />,
      //   onClick: () => {
      //     console.log("Item Title 3 clicked");
      //   },
      // },
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
      url: "",
    },
    jest: ["Menu.test.tsx"],
  },
};
