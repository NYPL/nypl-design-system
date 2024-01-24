import type { Meta, StoryObj } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";
import { sectionTypeArray } from "../../helpers/types";
import Icon from "../Icons/Icon";
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
    },
  },
};

export default meta;
type Story = StoryObj<typeof Menu>;

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
    listItemsData: [
      {
        type: "action",
        id: "item-title-1",
        label: "I'm item 1",
        media: <Icon name="arrow" size="xsmall" />,
        onClick: () => {
          console.log("Item Title 1 clicked");
        },
      },
      {
        type: "action",
        id: "item-title-2",
        label: "I'm item 2",
        media: <Icon name="arrow" size="xsmall" />,
        onClick: () => {
          console.log("Item Title 2 clicked");
        },
      },
      {
        type: "divider",
        id: "item-title-3",
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
      url: "https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Main?node-id=10734%3A3945",
    },
    jest: ["Menu.test.tsx"],
  },
};
