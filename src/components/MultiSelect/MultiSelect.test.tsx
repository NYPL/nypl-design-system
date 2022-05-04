import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe } from "jest-axe";
import * as React from "react";
import renderer from "react-test-renderer";
// Component
import MultiSelect from "./MultiSelect";
// Type
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

const MultiSelectTestComponent = (componentId) => {
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
    const multiSelectId = componentId;
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
      id={componentId}
      label="MultiSelect Label"
      variant="dialog"
      items={items}
      selectedItems={selectedItems}
      onChange={(e) => handleChange(componentId, e.target.id)}
      onMixedStateChange={(e) => {
        handleMixedStateChange(e.target.id);
      }}
      onClear={() => setSelectedItems({})}
      onApply={() => null}
    />
  );
};

describe("MultiSelect Dialog", () => {
  let selectedTestItems;
  beforeEach(() => (selectedTestItems = {}));
  xit("should have no axe violations", async () => {
    const { container } = render(
      <MultiSelect
        id="test"
        label="multiSelect-accessibility"
        variant="dialog"
        items={items}
        selectedItems={selectedTestItems}
        onChange={() => null}
        onClear={() => null}
        onApply={() => null}
      />
    );
    expect(await axe(container)).toHaveNoViolations();
  });

  xit("should initially render with provided id", () => {
    const { container } = render(
      <MultiSelect
        id="some-id"
        label="MultiSelect Label"
        variant="dialog"
        items={items}
        selectedItems={selectedTestItems}
        onChange={() => null}
        onClear={() => null}
        onApply={() => null}
      />
    );
    expect(container.querySelector("#some-id")).toBeInTheDocument();
    // @QUESTION: what would be a better way of testing this?
    // @TODO how to do this?
  });

  xit("should initially render with a given label", () => {
    render(
      <MultiSelect
        id="some-id"
        label="MultiSelect Test Label"
        variant="dialog"
        items={items}
        selectedItems={selectedTestItems}
        onChange={() => null}
        onClear={() => null}
        onApply={() => null}
      />
    );

    expect(
      screen.getByRole("button", {
        name: /multiselect test label/i,
      })
    ).toBeInTheDocument();
  });

  xit("should initially render with open menu if defaultIsOpen prop is true", async () => {
    render(
      <MultiSelect
        id="some-id"
        label="MultiSelect Test Label"
        variant="dialog"
        items={items}
        defaultIsOpen={true}
        selectedItems={selectedTestItems}
        onChange={() => null}
        onClear={() => null}
        onApply={() => null}
      />
    );

    expect(screen.getAllByRole("checkbox")).toHaveLength;
  });

  xit("should open menu when user clicks menu button", () => {
    render(
      <MultiSelect
        id="some-id"
        label="MultiSelect Label"
        variant="dialog"
        items={items}
        selectedItems={selectedTestItems}
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

    expect(screen.getByRole("dialog")).toBeInTheDocument();
    expect(screen.getAllByRole("checkbox")).toHaveLength;
  });

  xit("should allow user to toggle menu by clicking menu button", () => {
    const { container } = render(
      <MultiSelect
        id="some-id"
        label="MultiSelect Label"
        variant="dialog"
        items={items}
        selectedItems={selectedTestItems}
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

    expect(screen.queryByRole("dialog")).toBeInTheDocument();
    expect(
      container.querySelector("#some-id").getAttribute("aria-modal")
    ).toEqual("true");

    // Close
    userEvent.click(
      screen.getByRole("button", {
        name: /multiselect label/i,
      })
    );

    expect(screen.queryByRole("dialog")).toBeNull();
    expect(
      container.querySelector("#some-id").getAttribute("aria-modal")
    ).toEqual("false");
  });

  xit("should check all children items if parent is checked", () => {
    render(<MultiSelectTestComponent id="some-id" />);
    // open menu
    userEvent.click(screen.getByRole("button", { name: /MultiSelect Label/i }));
    //check the design box
    userEvent.click(screen.getByText("Design"));
    // parent is checked
    expect(screen.getByLabelText("Design")).toBeChecked();
    // children are checked
    expect(screen.getByLabelText("User Experience")).toBeChecked();
    expect(screen.getByLabelText("Fashion")).toBeChecked();
  });
  it("if passed in selectedItems, they should be checked on first render", () => {
    selectedTestItems = {
      "some-id": { items: ["art", "architecture", "ux", "fashion"] },
    };

    render(
      <MultiSelect
        id="some-id"
        label="MultiSelect Label"
        variant="dialog"
        items={items}
        defaultIsOpen={true}
        selectedItems={selectedTestItems}
        onChange={() => null}
        onClear={() => null}
        onApply={() => null}
      />
    );
    expect(screen.getByLabelText("Art")).toBeChecked();
    expect(screen.getByLabelText("Architecture")).toBeChecked();
    expect(screen.getByLabelText("Design")).toBeChecked();
  });
  // it("Renders the UI snapshot correctly", () => {
  //   const defaultWidth = renderer
  //     .create(
  //       <MultiSelect
  //         id="some-id"
  //         label="MultiSelect Test Label"
  //         variant="dialog"
  //         items={items}
  //         selectedItems={selectedTestItems}
  //         onChange={() => null}
  //         onClear={() => null}
  //         onApply={() => null}
  //       />
  //     )
  //     .toJSON();

  //   selectedTestItems = { "some-id": { items: ["ux"] } };

  //   expect(defaultWidth).toMatchSnapshot();
  // });
});

describe("MultiSelect Listbox", () => {
  let selectedTestItems;
  beforeEach(() => (selectedTestItems = {}));
  it("should have no axe violations", async () => {
    const { container } = render(
      <MultiSelect
        id="test"
        label="multiSelect-accessibility"
        variant="listbox"
        items={items}
        selectedItems={selectedTestItems}
        onChange={() => null}
        onClear={() => null}
      />
    );
    expect(await axe(container)).toHaveNoViolations();
  });

  it("should initially render with provided id", async () => {
    const { container } = render(
      <MultiSelect
        id="test"
        label="MultiSelect Label"
        variant="listbox"
        items={items}
        selectedItems={selectedTestItems}
        onChange={() => null}
        onClear={() => null}
      />
    );
    expect(container.querySelector("#test")).toBeInTheDocument();
  });

  it("should initially render with a given label", async () => {
    render(
      <MultiSelect
        id="test"
        label="MultiSelect Label"
        variant="listbox"
        items={items}
        selectedItems={selectedTestItems}
        onChange={() => null}
        onClear={() => null}
      />
    );
    expect(
      screen.getByRole("button", {
        name: /multiselect label/i,
      })
    );
  });

  it("should initially render with open menu if defaultIsOpen prop is true", () => {
    render(
      <MultiSelect
        id="test"
        label="MultiSelect Label"
        variant="listbox"
        items={items}
        defaultIsOpen={true}
        selectedItems={selectedTestItems}
        onChange={() => null}
        onClear={() => null}
      />
    );
    //when not open listbox is not accessible
    const ul = screen.getByRole("listbox");
    const list = ul[`${Object.keys(ul)[1]}`].children;
    expect(list).toHaveLength;
  });

  it("should open menu when user clicks menu button", () => {
    render(
      <MultiSelect
        id="test"
        label="MultiSelect Label"
        variant="listbox"
        items={items}
        selectedItems={selectedTestItems}
        onChange={() => null}
        onClear={() => null}
      />
    );
    userEvent.click(
      screen.getByRole("button", {
        name: /multiselect label/i,
      })
    );
    expect(screen.getByRole("listbox")).toBeInTheDocument();
    expect(screen.getAllByRole("checkbox")).toHaveLength;
  });

  it("should allow user to toggle menu by clicking menu button", () => {
    const { container } = render(
      <MultiSelect
        id="test"
        label="MultiSelect Label"
        variant="listbox"
        items={items}
        selectedItems={selectedTestItems}
        onChange={() => null}
        onClear={() => null}
      />
    );
    // When first rendered menu is not expanded
    expect(screen.queryByRole("listbox")).toBeNull();

    userEvent.click(
      screen.getByRole("button", {
        name: /multiselect label/i,
      })
    );
    //the aria-expanded attribute is on a <div> that is ignored by the react testing library
    //maybe this should be changed in the code?
    const listbox = container.querySelector('[aria-haspopup="listbox"]');
    expect(listbox[`${Object.keys(listbox)[1]}`]["aria-expanded"]).toBe(true);
    expect(screen.getAllByRole("option")).toHaveLength;

    userEvent.click(
      screen.getByRole("button", {
        name: /multiselect label/i,
      })
    );
    expect(listbox[`${Object.keys(listbox)[1]}`]["aria-expanded"]).toBe(false);
    expect(screen.queryAllByRole("option")).toHaveLength(0);
  });
  it("Renders the UI snapshot correctly", () => {
    const defaultListbox = renderer
      .create(
        <MultiSelect
          id="test"
          label="MultiSelect Label"
          variant="listbox"
          items={items}
          selectedItems={selectedTestItems}
          onChange={() => null}
          onClear={() => null}
        />
      )
      .toJSON();

    const isOpen = renderer
      .create(
        <MultiSelect
          id="test"
          label="MultiSelect Label"
          variant="listbox"
          defaultIsOpen={true}
          items={items}
          selectedItems={selectedTestItems}
          onChange={() => null}
          onClear={() => null}
        />
      )
      .toJSON();

    selectedTestItems = { test: { items: ["art", "architecture"] } };
    const selection = renderer
      .create(
        <MultiSelect
          id="test"
          label="MultiSelect Label"
          variant="listbox"
          items={items}
          defaultIsOpen={true}
          selectedItems={selectedTestItems}
          onChange={() => null}
          onClear={() => null}
        />
      )
      .toJSON();

    expect(defaultListbox).toMatchSnapshot();
    expect(isOpen).toMatchSnapshot();
    expect(selection).toMatchSnapshot();
  });
});
