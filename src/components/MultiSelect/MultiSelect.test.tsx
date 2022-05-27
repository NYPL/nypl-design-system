import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe } from "jest-axe";
import * as React from "react";
import renderer from "react-test-renderer";
import MultiSelect from "./MultiSelect";
import { MultiSelectItem } from "./MultiSelectTypes";

const items = [
  { id: "dogs", name: "Dogs" },
  { id: "cats", name: "Cats" },
  { id: "cars", name: "Cars" },
  {
    id: "colors",
    name: "Colors",
    children: [
      { id: "red", name: "Red" },
      { id: "blue", name: "Blue" },
    ],
  },
  { id: "plants", name: "Plants" },
  { id: "furniture", name: "Furniture" },
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
  it("should have no axe violations", async () => {
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

  it("should initially render with provided id", () => {
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

  it("should initially render with a given label", () => {
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

  it("should initially render with open menu if defaultIsOpen prop is true", async () => {
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

    expect(screen.getAllByRole("checkbox")).toHaveLength(8);
  });

  it("should open menu when user clicks menu button", () => {
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
    expect(screen.getAllByRole("checkbox")).toHaveLength(8);
  });

  // Not sure this can be tested
  // it("should have block behavior if isBlockElement is true", () => {
  //   const { container } = render(
  //     <MultiSelect
  //       id="some-id"
  //       label="MultiSelect Label"
  //       variant="dialog"
  //       items={items}
  //       isBlockElement={true}
  //       selectedItems={selectedTestItems}
  //       onChange={() => null}
  //       onClear={() => null}
  //       onApply={() => null}
  //     />
  //   );
  //   console.log(getComputedStyle(container.querySelector("[role='dialog']")));
  //   // screen.logTestingPlaygroundURL();
  // });

  it("should allow user to toggle menu by clicking menu button", () => {
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

    // Open multiselect.
    userEvent.click(
      screen.getByRole("button", {
        name: /multiselect label/i,
      })
    );

    expect(screen.queryByRole("dialog")).toBeInTheDocument();
    expect(
      container.querySelector("#some-id").getAttribute("aria-modal")
    ).toEqual("true");

    // Close multiselect.
    userEvent.click(
      screen.getByRole("button", {
        name: /multiselect label/i,
      })
    );

    expect(screen.queryByRole("dialog")).toBeNull();
    expect(
      container.querySelector("#some-id").getAttribute("aria-modal")
    ).toBeNull();
  });

  it("should call onChange when an item without child items or a child item is selected/unselected", () => {
    const onChangeMock = jest.fn();
    const onMixedStateChangeMock = jest.fn();

    render(
      <MultiSelect
        id="some-id"
        label="MultiSelect Label"
        variant="dialog"
        items={items}
        selectedItems={selectedTestItems}
        onChange={onChangeMock}
        onMixedStateChange={onMixedStateChangeMock}
        onClear={() => null}
        onApply={() => null}
      />
    );
    // Open multiselect menu.
    userEvent.click(
      screen.getByRole("button", {
        name: /multiselect label/i,
      })
    );

    expect(screen.getByRole("checkbox", { name: /dogs/i })).toBeInTheDocument();
    userEvent.click(screen.getByRole("checkbox", { name: /dogs/i }));
    expect(onChangeMock).toBeCalledTimes(1);

    userEvent.click(screen.getByRole("checkbox", { name: /blue/i }));
    userEvent.click(screen.getByRole("checkbox", { name: /plants/i }));
    expect(onChangeMock).toBeCalledTimes(3);

    userEvent.click(screen.getByRole("checkbox", { name: /blue/i }));
    expect(onChangeMock).toBeCalledTimes(4);
  });

  it("should call onMixedStateChange when a parent item is selected/unselected", () => {
    const onChangeMock = jest.fn();
    const onMixedStateChangeMock = jest.fn();

    render(
      <MultiSelect
        id="some-id"
        label="MultiSelect Label"
        variant="dialog"
        items={items}
        selectedItems={selectedTestItems}
        onChange={onChangeMock}
        onMixedStateChange={onMixedStateChangeMock}
        onClear={() => null}
        onApply={() => null}
      />
    );
    // Open menu
    userEvent.click(
      screen.getByRole("button", {
        name: /multiselect label/i,
      })
    );

    expect(
      screen.getByRole("checkbox", { name: /colors/i })
    ).toBeInTheDocument();
    userEvent.click(screen.getByRole("checkbox", { name: /colors/i }));
    expect(onMixedStateChangeMock).toBeCalledTimes(1);

    userEvent.click(screen.getByRole("checkbox", { name: /colors/i }));
    expect(onMixedStateChangeMock).toBeCalledTimes(2);
  });

  it("should have inteterminated state for parent item if not all child items are checked", () => {
    render(<MultiSelectTestComponent id="some-id" />);
    // Open menu
    userEvent.click(screen.getByRole("button", { name: /MultiSelect Label/i }));
    // Check the child
    userEvent.click(screen.getByText("Red"));
    // Child is checked
    expect(screen.getByLabelText("Red")).toBeChecked();
    // Parent is indeterminated
    expect(screen.getByLabelText("Colors")).toBePartiallyChecked();
  });

  it("should check all child items if parent is checked", () => {
    render(<MultiSelectTestComponent id="some-id" />);
    // Open menu
    userEvent.click(screen.getByRole("button", { name: /MultiSelect Label/i }));
    // Check the parent item
    userEvent.click(screen.getByText("Colors"));
    // Parent is checked
    expect(screen.getByLabelText("Colors")).toBeChecked();
    // Children are checked
    expect(screen.getByLabelText("Red")).toBeChecked();
    expect(screen.getByLabelText("Blue")).toBeChecked();
  });

  it("should check parent item if all child items are checked", () => {
    selectedTestItems = {
      "some-id": { items: ["red", "blue"] },
    };

    render(
      <MultiSelect
        id="some-id"
        label="MultiSelect Label"
        variant="dialog"
        items={items}
        defaultIsOpen={true}
        selectedItems={selectedTestItems}
        onMixedStateChange={() => null}
        onChange={() => null}
        onClear={() => null}
        onApply={() => null}
      />
    );
    expect(screen.getByLabelText("Colors")).toBeChecked();
  });

  it("should render the UI snapshot correctly", () => {
    const defaultDialog = renderer
      .create(
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
      )
      .toJSON();

    const isOpen = renderer
      .create(
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
      )
      .toJSON();

    selectedTestItems = { "some-id": { items: ["red"] } };
    const mixedState = renderer
      .create(
        <MultiSelect
          id="some-id"
          label="MultiSelect Test Label"
          variant="dialog"
          items={items}
          defaultIsOpen={true}
          selectedItems={selectedTestItems}
          onMixedStateChange={() => null}
          onChange={() => null}
          onClear={() => null}
          onApply={() => null}
        />
      )
      .toJSON();

    selectedTestItems = { "some-id": { items: ["red", "blue"] } };
    const allChecked = renderer
      .create(
        <MultiSelect
          id="some-id"
          label="MultiSelect Test Label"
          variant="dialog"
          items={items}
          defaultIsOpen={true}
          selectedItems={selectedTestItems}
          onMixedStateChange={() => null}
          onChange={() => null}
          onClear={() => null}
          onApply={() => null}
        />
      )
      .toJSON();

    expect(defaultDialog).toMatchSnapshot();
    expect(isOpen).toMatchSnapshot();
    expect(mixedState).toMatchSnapshot();
    expect(allChecked).toMatchSnapshot();
  });
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

    const ul = screen.getByRole("listbox");
    const list = ul[`${Object.keys(ul)[1]}`].children;
    expect(list).toHaveLength(6);
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
    expect(screen.getAllByRole("checkbox")).toHaveLength(6);
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

    expect(
      container.querySelector('[aria-expanded="true"][aria-haspopup="listbox"]')
    ).toBeInstanceOf(HTMLElement);
    expect(screen.getAllByRole("option")).toHaveLength(6);

    userEvent.click(
      screen.getByRole("button", {
        name: /multiselect label/i,
      })
    );
    expect(
      container.querySelector(
        '[aria-expanded="false"][aria-haspopup="listbox"]'
      )
    ).toBeInstanceOf(HTMLElement);
    expect(screen.queryAllByRole("option")).toHaveLength(0);
  });

  it("should call onChange when an item gets selected/unselected", () => {
    const onChangeMock = jest.fn();
    render(
      <MultiSelect
        id="test"
        label="MultiSelect Label"
        variant="listbox"
        items={items}
        selectedItems={selectedTestItems}
        onChange={onChangeMock}
        onClear={() => null}
      />
    );
    // Open menu
    userEvent.click(
      screen.getByRole("button", {
        name: /multiselect label/i,
      })
    );
    expect(screen.getByRole("option", { name: /dogs/i })).toBeInTheDocument();
    // Check item
    userEvent.click(screen.getByRole("option", { name: /dogs/i }));
    expect(onChangeMock).toBeCalledTimes(1);
    // Check more items
    userEvent.click(screen.getByRole("option", { name: /plants/i }));
    userEvent.click(screen.getByRole("option", { name: /colors/i }));
    expect(onChangeMock).toBeCalledTimes(3);
    // Uncheck item
    userEvent.click(screen.getByRole("option", { name: /colors/i }));
    expect(onChangeMock).toBeCalledTimes(4);
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

    selectedTestItems = { test: { items: ["cats", "dogs"] } };
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
