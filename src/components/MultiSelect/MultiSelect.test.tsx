import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe } from "jest-axe";
import * as React from "react";
//import renderer from "react-test-renderer";
import MultiSelect from "./MultiSelect";
import { MultiSelectItem } from "./MultiSelectTypes";

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

function MultiSelectDialogTestComponent() {
  const multiSelectId = "multiselect-dialog-test";
  const [selectedItems, setSelectedItems] = React.useState({});

  function handleChange(multiSelectId: string, itemId: string) {
    let itemIds;
    // Check if the id already exists in the state
    if (selectedItems[multiSelectId] !== undefined) {
      let itemIdExists =
        selectedItems[multiSelectId].items.indexOf(itemId) > -1;
      // Make a copy of the existing array.
      itemIds = selectedItems[multiSelectId].items.slice();
      // If termId exists, remove it from the array.
      if (itemIdExists) {
        itemIds = itemIds.filter((id) => id !== itemId);
      } else {
        // Add it to the array, but modify the copy, not the original.
        itemIds.push(itemId);
      }
    } else {
      itemIds = [];
      itemIds.push(itemId);
    }
    setSelectedItems({
      ...selectedItems,
      [multiSelectId]: {
        items: itemIds,
      },
    });
  }

  function handleMixedStateChange(parentId: string) {
    // Build an array of child items.
    let childItems = [];
    items.map((item) => {
      if (item.id === parentId) {
        item.children.map((childItem: MultiSelectItem) => {
          childItems.push(childItem.id);
        });
      }
    });

    let newItems;
    // Some selected items for group already exist in state.
    if (selectedItems[multiSelectId] !== undefined) {
      //
      if (
        childItems.every((childItem) =>
          selectedItems[multiSelectId].items.includes(childItem)
        )
      ) {
        newItems = selectedItems[multiSelectId].items.filter(
          (stateItem) => !childItems.includes(stateItem)
        );
      } else {
        // Merge all child items.
        newItems = [...childItems, ...selectedItems[multiSelectId].items];
      }
    } else {
      newItems = childItems;
    }
    setSelectedItems({
      ...selectedItems,
      [multiSelectId]: {
        items: newItems,
      },
    });
  }

  return (
    <MultiSelect
      id={multiSelectId}
      label="MultiSelect Dialog"
      variant="dialog"
      items={items}
      defaultIsOpen={false}
      selectedItems={selectedItems}
      onChange={(e) => handleChange(multiSelectId, e.target.id)}
      onMixedStateChange={(e) => {
        handleMixedStateChange(e.target.id);
      }}
      onApply={() => {
        console.log("onApply from consuming!");
      }}
      onClear={() => {
        setSelectedItems({});
      }}
    />
  );
}

describe("MultiSelect Dialog", () => {
  it("should check all children items if parent is checked", async () => {
    render(<MultiSelectDialogTestComponent />);

    // Open the multiselect menu.
    userEvent.click(
      screen.getByRole("button", {
        name: /multiSelect dialog/i,
      })
    );

    // User event to check parent item "Design".
    userEvent.click(screen.getByText("Design"));
    expect(screen.getByLabelText("Design")).toBeChecked();

    // Test that the child checkboxes are also checked.
    expect(screen.getByLabelText("Fashion")).toBeChecked();
    expect(screen.getByLabelText("User Experience")).toBeChecked();
  });

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

    //screen.debug();

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
});

describe("MultiSelect Listbox", () => {
  it("should have no axe violations", async () => {});

  it("should initially render with provided id", async () => {});

  it("should initially render with a given label", async () => {});

  it("should initially render with open menu if defaultIsOpen prop is true", async () => {});

  it("should open menu when user clicks menu button", async () => {});

  it("should allow user to toggle menu by clicking menu button", async () => {});
});
