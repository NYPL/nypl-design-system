import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe } from "jest-axe";
import * as React from "react";
//import renderer from "react-test-renderer";
import MultiSelect from "./MultiSelect";

const items = [
  {
    id: "art",
    name: "Art",
  },
  {
    id: "architecture",
    name: "Architecture",
  },
  {
    id: "art_history",
    name: "Art History",
  },
  {
    id: "design",
    name: "Design",
    children: [
      {
        id: "fashion",
        name: "Fashion",
      },
      {
        id: "ux",
        name: "User Experience",
      },
    ],
  },
  {
    id: "business",
    name: "Business",
  },
  {
    id: "advertising",
    name: "Advertising",
  },
  {
    id: "government_and_law",
    name: "Government and Law",
  },
  {
    id: "civil_rights",
    name: "Civil Rights",
  },
  {
    id: "history",
    name: "History",
  },
  {
    id: "atlases",
    name: "Atlases",
  },
  {
    id: "cartography",
    name: "Cartography",
  },
  {
    id: "geology",
    name: "Geology",
  },
];

describe("MultiSelect Dialog", () => {
  it("should have no axe violations", async () => {
    const selectedItems = {};
    const { container } = render(
      <MultiSelect
        id="test"
        label="multiSelect-accessibility"
        variant="dialog"
        items={items}
        selectedItems={selectedItems}
        onChange={() => null}
        onClear={() => null}
        onApply={() => null}
      />
    );
    expect(await axe(container)).toHaveNoViolations();
  });

  it("should initially render with provided id", () => {
    const selectedItems = {};

    render(
      <MultiSelect
        id="some-id"
        label="MultiSelect Label"
        variant="dialog"
        items={items}
        selectedItems={selectedItems}
        onChange={() => null}
        onClear={() => null}
        onApply={() => null}
      />
    );

    // @TODO how to do this?
  });

  it("should initially render with a given label", () => {
    const selectedItems = {};

    render(
      <MultiSelect
        id="some-id"
        label="MultiSelect Test Label"
        variant="dialog"
        items={items}
        selectedItems={selectedItems}
        onChange={() => null}
        onClear={() => null}
        onApply={() => null}
      />
    );

    expect(
      screen.getByRole("button", {
        name: /multiselect test label/i,
      })
    );
  });

  it("should initially render with open menu if defaultIsOpen prop is true", async () => {});

  it("should open menu when user clicks menu button", () => {
    const selectedItems = {};

    render(
      <MultiSelect
        id="some-id"
        label="MultiSelect Label"
        variant="dialog"
        items={items}
        selectedItems={selectedItems}
        onChange={() => null}
        onClear={() => null}
        onApply={() => null}
      />
    );

    userEvent.click(
      screen.getByRole("button", {
        name: /multiselect label/i,
      })
    );

    expect(screen.getByRole("dialog"));
  });

  it("should allow user to toggle menu by clicking menu button", () => {
    const selectedItems = {};

    render(
      <MultiSelect
        id="some-id"
        label="MultiSelect Label"
        variant="dialog"
        items={items}
        selectedItems={selectedItems}
        onChange={() => null}
        onClear={() => null}
        onApply={() => null}
      />
    );

    // Open
    userEvent.click(
      screen.getByRole("button", {
        name: /multiselect label/i,
      })
    );
    expect(screen.getByRole("dialog"));

    // Close
    userEvent.click(
      screen.getByRole("button", {
        name: /multiselect label/i,
      })
    );
    screen.debug();
    //expect(screen.getByRole("dialog")).toBe("false");
  });

  it("should check all children items if parent is checked", async () => {});
});

describe("MultiSelect Listbox", () => {
  it("should have no axe violations", async () => {});

  it("should initially render with provided id", async () => {});

  it("should initially render with a given label", async () => {});

  it("should initially render with open menu if defaultIsOpen prop is true", async () => {});

  it("should open menu when user clicks menu button", async () => {});

  it("should allow user to toggle menu by clicking menu button", async () => {});
});
