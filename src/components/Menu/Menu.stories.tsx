import type { Meta, StoryObj } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";
import { sectionTypeArray } from "../../helpers/types";
import Icon from "../Icons/Icon";

import { Menu } from "./Menu";
//import Icon from "../Icons/Icon";

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
        media: <Icon name="arrow" iconRotation="rotate90" size="small" />,
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
      url: "",
    },
    jest: ["Menu.test.tsx"],
  },
};
