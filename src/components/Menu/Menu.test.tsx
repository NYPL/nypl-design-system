/* eslint-disable @typescript-eslint/no-non-null-assertion */
import * as React from "react";
import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import { axe } from "jest-axe";

import Menu, { ListItemsData } from "./Menu";

const defaultListItems: ListItemsData[] = [
  {
    type: "action",
    id: "item-title-1",
    label: "I'm item 1",
    onClick: () => {},
  },
  {
    type: "action",
    id: "item-title-2",
    label: "I'm item 2",
    onClick: () => {},
  },
  {
    type: "action",
    id: "item-title-3",
    label: "I'm item 3",
    onClick: () => {},
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

    const openButton = screen.getByText("Menu").parentElement!;

    fireEvent.click(openButton);
    await waitFor(() => openButton.getAttribute("aria-expanded") === "true");
  });

  it("closes when menu item is selected", async () => {
    render(<Menu labelText={"Menu"} listItemsData={defaultListItems} />);

    const openButton = screen.getByText("Menu").parentElement!;

    fireEvent.click(openButton);
    await waitFor(() => openButton.getAttribute("aria-expanded") === "true");

    const firstMenuItem = screen.getByText("I'm item 1");
    act(() => {
      fireEvent.focus(firstMenuItem);
      fireEvent.click(firstMenuItem);
    });

    await waitFor(() => openButton.getAttribute("aria-expanded") === "false");
  });

  it("closes with Escape key when focus is on menu list", async () => {
    render(<Menu labelText={"Menu"} listItemsData={defaultListItems} />);

    const openButton = screen.getByText("Menu").parentElement!;

    fireEvent.click(openButton);
    await waitFor(() => openButton.getAttribute("aria-expanded") === "true");

    const firstMenuItem = screen.getByText("I'm item 1");
    act(() => {
      fireEvent.focus(firstMenuItem);
    });

    fireEvent.keyDown(document, { key: "Escape" });
    await waitFor(() => openButton.getAttribute("aria-expanded") === "false");
  });

  it("closes when clicking outside of the menu", async () => {
    render(<Menu labelText={"Menu"} listItemsData={defaultListItems} />);

    const openButton = screen.getByText("Menu").parentElement!;

    fireEvent.click(openButton);
    await waitFor(() => openButton.getAttribute("aria-expanded") === "true");

    fireEvent.click(document);
    await waitFor(() => openButton.getAttribute("aria-expanded") === "false");
  });
});

describe("Menu allows selection", () => {
  it("registered an item has been selected", () => {
    render(<Menu labelText={"Menu"} listItemsData={defaultListItems} />);
    const openButton = screen.getByText("Menu");
    fireEvent.click(openButton);
    const button1 = screen.getByText("I'm item 1").closest("button");
    expect(button1).toBeInTheDocument();

    fireEvent.click(button1);
    expect(button1).toHaveAttribute("data-testid", "selected-item");
    expect(button1).not.toBeVisible();
  });

  it("remembers selected item", () => {
    render(<Menu labelText={"Menu"} listItemsData={defaultListItems} />);
    const openButton = screen.getByText("Menu");
    fireEvent.click(openButton);
    const button1 = screen.getByText("I'm item 1").closest("button");
    fireEvent.click(button1);
    fireEvent.mouseDown(document.body);
    fireEvent.click(openButton);
    expect(button1).toHaveAttribute("data-testid", "selected-item");
  });
});
