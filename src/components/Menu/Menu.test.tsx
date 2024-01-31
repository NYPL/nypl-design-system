import * as React from "react";
import { render } from "@testing-library/react";
import { axe } from "jest-axe";

import Menu, { ListItemsData } from "./Menu";

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

describe("Menu Accessibility", () => {
  it("passes axe accessibility test", async () => {
    const { container } = render(
      <Menu labelText={"Menu"} listItemsData={defaultListItems} />
    );
    expect(await axe(container)).toHaveNoViolations();
  });
});
