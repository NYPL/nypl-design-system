import * as React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
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

describe("Menu opens and closes", () => {
  it("renders content when it is opened", async () => {
    render(<Menu labelText={"Menu"} listItemsData={defaultListItems} />);
    const openButton = screen.getByText("Menu").closest("button");
    expect(openButton).toBeInTheDocument();
    openButton.click();
    await waitFor(() => {
      const menuList = screen.getByTestId("menuList");
      expect(menuList).toBeVisible();
    });
  });

  it("closes on Escape key press", () => {
    render(<Menu labelText={"Menu"} listItemsData={defaultListItems} />);
    const openButton = screen.getByText("Menu");

    openButton.click();
    const menuList = screen.getByTestId("menuList");

    fireEvent.keyDown(document, { key: "Escape" });
    expect(menuList).not.toBeVisible();
  });

  it("closes when clicking outside of the menu", () => {
    render(<Menu labelText={"Menu"} listItemsData={defaultListItems} />);
    const openButton = screen.getByText("Menu");

    openButton.click();
    const menuList = screen.getByTestId("menuList");
    fireEvent.mouseDown(document.body);
    expect(menuList).not.toBeVisible();
  });
});

describe("Menu allows selection", () => {
  it("registered an item has been selected", () => {
    render(<Menu labelText={"Menu"} listItemsData={defaultListItems} />);
    const openButton = screen.getByText("Menu");
    openButton.click();
    const button1 = screen.getByText("I'm item 1").closest("button");
    expect(button1).toBeInTheDocument();

    button1.click();
    console.log(button1);
    expect(button1).toHaveAttribute("data-testid", "selected-item");
    expect(button1).not.toBeVisible();
  });

  it("remembers selected item", () => {
    render(<Menu labelText={"Menu"} listItemsData={defaultListItems} />);
    const openButton = screen.getByText("Menu");
    openButton.click();
    const button1 = screen.getByText("I'm item 1").closest("button");
    button1.click();
    fireEvent.mouseDown(document.body);
    openButton.click();
    expect(button1).toHaveAttribute("data-testid", "selected-item");
  });
});
