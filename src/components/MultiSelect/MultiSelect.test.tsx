import { axe } from "jest-axe";
import { render, screen } from "@testing-library/react";

import renderer from "react-test-renderer";
import MatchMedia from "../../__tests__/mediaMatchMock";
import userEvent from "@testing-library/user-event";
import * as React from "react";

import MultiSelect from "./MultiSelect";
import useMultiSelect from "../../hooks/useMultiSelect";

let matchMedia: MatchMedia;

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

const MultiSelectTestDialogComponent = ({
  multiSelectId,
  initialSelectedItems = {},
}) => {
  const {
    onChange,
    onMixedStateChange,
    selectedItems,
    setSelectedItems,
    onClear,
  } = useMultiSelect();

  React.useEffect(() => {
    setSelectedItems(initialSelectedItems);
  }, []);

  return (
    <MultiSelect
      id={multiSelectId}
      labelText="MultiSelect Label"
      type="dialog"
      items={items}
      selectedItems={selectedItems}
      onChange={(e) => onChange(e.target.id, multiSelectId)}
      onMixedStateChange={(e) => {
        onMixedStateChange(e.target.id, multiSelectId, items);
      }}
      onClear={() => onClear(multiSelectId)}
      onApply={() => null}
    />
  );
};
const MultiSelectTestListboxComponent = ({
  multiSelectId,
  initialSelectedItems = {},
}) => {
  const { onChange, selectedItems, setSelectedItems, onClear } =
    useMultiSelect();

  React.useEffect(() => {
    setSelectedItems(initialSelectedItems);
  }, []);

  return (
    <MultiSelect
      id={multiSelectId}
      labelText="MultiSelect Label"
      type="listbox"
      items={items}
      selectedItems={selectedItems}
      onChange={(selectedItem) => onChange(selectedItem.id, multiSelectId)}
      onClear={() => onClear(multiSelectId)}
      onApply={() => null}
    />
  );
};

describe("MultiSelect Accessibility", () => {
  let selectedTestItems;
  beforeEach(() => (selectedTestItems = {}));

  it("should have no axe violations for the 'listbox' type", async () => {
    const { container } = render(
      <MultiSelect
        id="multiselect-dialog-test-id"
        labelText="multiSelect-accessibility"
        type="listbox"
        items={items}
        selectedItems={selectedTestItems}
        onChange={() => null}
        onClear={() => null}
      />
    );
    expect(await axe(container)).toHaveNoViolations();
  });

  it("should have no axe violations for the 'dialog' type", async () => {
    const { container } = render(
      <MultiSelect
        id="multiselect-dialog-test-id"
        labelText="multiSelect-accessibility"
        type="dialog"
        items={items}
        selectedItems={selectedTestItems}
        onChange={() => null}
        onClear={() => null}
        onApply={() => null}
      />
    );
    expect(await axe(container)).toHaveNoViolations();
  });
});

describe("MultiSelect Dialog", () => {
  beforeAll(() => {
    matchMedia = new MatchMedia();
    window.resizeTo = function resizeTo(width, height) {
      Object.assign(this, {
        innerWidth: width,
        innerHeight: height,
        outerWidth: width,
        outerHeight: height,
      }).dispatchEvent(new this.Event("resize"));
    };
  });
  afterEach(() => {
    matchMedia.clear();
  });
  let selectedTestItems;
  beforeEach(() => (selectedTestItems = {}));

  it("should initially render with provided id", () => {
    const { container } = render(
      <MultiSelect
        id="multiselect-dialog-test-id"
        labelText="MultiSelect Label"
        type="dialog"
        items={items}
        selectedItems={selectedTestItems}
        onChange={() => null}
        onClear={() => null}
        onApply={() => null}
      />
    );
    expect(
      container.querySelector("#multiselect-dialog-test-id")
    ).toBeInTheDocument();
  });

  it("should initially render with a given label", () => {
    render(
      <MultiSelect
        id="multiselect-dialog-test-id"
        labelText="MultiSelect Test Label"
        type="dialog"
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

  it("should initially render with a closed menu when the isDefaultOpen is omitted or set to false", () => {
    const { rerender } = render(
      <MultiSelect
        id="multiselect-dialog-test-id"
        labelText="MultiSelect Test Label"
        type="dialog"
        items={items}
        selectedItems={selectedTestItems}
        onChange={() => null}
        onClear={() => null}
        onApply={() => null}
      />
    );

    expect(screen.queryByRole("checkbox")).toBeNull();

    rerender(
      <MultiSelect
        id="multiselect-dialog-test-id"
        labelText="MultiSelect Test Label"
        type="dialog"
        items={items}
        isDefaultOpen={false}
        selectedItems={selectedTestItems}
        onChange={() => null}
        onClear={() => null}
        onApply={() => null}
      />
    );

    expect(screen.queryByRole("checkbox")).toBeNull();
  });

  it("should initially render with open menu if isDefaultOpen prop is true", () => {
    render(
      <MultiSelect
        id="multiselect-dialog-test-id"
        labelText="MultiSelect Test Label"
        type="dialog"
        items={items}
        isDefaultOpen={true}
        selectedItems={selectedTestItems}
        onChange={() => null}
        onClear={() => null}
        onApply={() => null}
      />
    );

    expect(screen.getAllByRole("checkbox")).toHaveLength(8);
  });

  it("should render a 'Clear' and 'Apply button", () => {
    render(
      <MultiSelect
        id="multiselect-dialog-test-id"
        labelText="MultiSelect Test Label"
        type="dialog"
        items={items}
        isDefaultOpen
        selectedItems={selectedTestItems}
        onChange={() => null}
        onClear={() => null}
        onApply={() => null}
      />
    );
    expect(screen.getByRole("dialog").getAttribute("aria-modal")).toEqual(
      "true"
    );
    expect(screen.getAllByRole("checkbox")).toHaveLength(8);
    expect(screen.getByRole("button", { name: /apply/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /clear/i })).toBeInTheDocument();
  });

  it("should focus on the MultiSelectMenuButton upon clicking 'Apply' or 'Clear", () => {
    render(
      <MultiSelect
        id="multiselect-dialog-test-id"
        labelText="MultiSelect Test Label"
        type="dialog"
        items={items}
        isDefaultOpen
        selectedItems={selectedTestItems}
        onChange={() => null}
        onClear={() => null}
        onApply={() => null}
      />
    );

    const apply = screen.getByRole("button", { name: /apply/i });
    const close = screen.getByRole("button", { name: /clear/i });

    userEvent.click(apply);

    expect(
      screen.getByRole("button", { name: /multiselect test label/i })
    ).toHaveFocus();

    userEvent.keyboard("[Enter]");
    userEvent.click(close);

    expect(
      screen.getByRole("button", { name: /multiselect test label/i })
    ).toHaveFocus();
  });

  // Not sure this can be tested
  // it("should have block behavior if isBlockElement is true", () => {
  //   const { container } = render(
  //     <MultiSelect
  //       id="multiselect-dialog-test-id"
  //       labelText="MultiSelect Label"
  //       type="dialog"
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

  it("should allow user to toggle menu by clicking menu button or use the 'Enter'/'Spacebar' key", () => {
    render(
      <MultiSelect
        id="multiselect-dialog-test-id"
        labelText="MultiSelect Label"
        type="dialog"
        items={items}
        selectedItems={selectedTestItems}
        onChange={() => null}
        onClear={() => null}
        onApply={() => null}
      />
    );

    // Initially closed
    expect(screen.getByRole("dialog").getAttribute("aria-modal")).toBeNull();
    expect(screen.queryByRole("checkbox")).toBeNull();

    // Open multiselect.
    userEvent.click(
      screen.getByRole("button", {
        name: /multiselect label/i,
      })
    );

    expect(screen.getByRole("dialog").getAttribute("aria-modal")).toEqual(
      "true"
    );
    expect(screen.getAllByRole("checkbox")).toHaveLength(8);

    // Close multiselect.
    userEvent.click(
      screen.getByRole("button", {
        name: /multiselect label/i,
      })
    );

    expect(screen.getByRole("dialog").getAttribute("aria-modal")).toBeNull();
    expect(screen.queryByRole("checkbox")).toBeNull();
    // TESTING FOR ENTER KEY
    // Open multiselect using ENTER key.
    userEvent.keyboard("[Enter]");

    expect(screen.getByRole("dialog").getAttribute("aria-modal")).toEqual(
      "true"
    );
    expect(screen.getAllByRole("checkbox")).toHaveLength(8);

    // Close multiselect using ENTER key.
    userEvent.keyboard("[Enter]");

    expect(screen.getByRole("dialog").getAttribute("aria-modal")).toBeNull();
    expect(screen.queryByRole("checkbox")).toBeNull();

    // TESTING FOR SPACEBAR KEY
    // Open multiselect using SPACEBAR key.
    userEvent.keyboard("[Space]");

    expect(screen.getByRole("dialog").getAttribute("aria-modal")).toEqual(
      "true"
    );
    expect(screen.getAllByRole("checkbox")).toHaveLength(8);

    // Close multiselect using SPACEBAR key.
    userEvent.keyboard("[Space]");

    expect(screen.getByRole("dialog").getAttribute("aria-modal")).toBeNull();
    expect(screen.queryByRole("checkbox")).toBeNull();
  });

  it("should allow user to close the dialog using the ESC key, then the focus should be on the MultiSelectMenuButton", () => {
    render(
      <MultiSelect
        id="multiselect-dialog-test-id"
        labelText="MultiSelect Label"
        type="dialog"
        items={items}
        selectedItems={selectedTestItems}
        onChange={() => null}
        onClear={() => null}
        onApply={() => null}
      />
    );

    // Initially closed
    expect(screen.getByRole("dialog").getAttribute("aria-modal")).toBeNull();
    expect(screen.queryByRole("checkbox")).toBeNull();

    // Open multiselect.
    userEvent.click(
      screen.getByRole("button", {
        name: /multiselect label/i,
      })
    );

    expect(screen.getByRole("dialog").getAttribute("aria-modal")).toEqual(
      "true"
    );
    expect(screen.getAllByRole("checkbox")).toHaveLength(8);

    // Close the diaog using the ESC key.
    userEvent.keyboard("{Escape}");

    expect(screen.getByRole("dialog").getAttribute("aria-modal")).toBeNull();
    expect(screen.queryByRole("checkbox")).toBeNull();
    expect(
      screen.getByRole("button", {
        name: /multiselect label/i,
      })
    ).toHaveFocus();
  });

  it("should call onChange when an item without child items or a child item is selected/unselected", () => {
    const onChangeMock = jest.fn();
    const onMixedStateChangeMock = jest.fn();

    render(
      <MultiSelect
        id="multiselect-dialog-test-id"
        labelText="MultiSelect Label"
        type="dialog"
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
    expect(onMixedStateChangeMock).not.toBeCalled();
    expect(onChangeMock).toBeCalledTimes(1);

    userEvent.click(screen.getByRole("checkbox", { name: /blue/i }));
    userEvent.click(screen.getByRole("checkbox", { name: /plants/i }));
    expect(onMixedStateChangeMock).not.toBeCalled();
    expect(onChangeMock).toBeCalledTimes(3);

    userEvent.click(screen.getByRole("checkbox", { name: /blue/i }));
    expect(onMixedStateChangeMock).not.toBeCalled();
    expect(onChangeMock).toBeCalledTimes(4);
  });

  it("should call onMixedStateChange when a parent item is selected/unselected", () => {
    const onChangeMock = jest.fn();
    const onMixedStateChangeMock = jest.fn();

    render(
      <MultiSelect
        id="multiselect-dialog-test-id"
        labelText="MultiSelect Label"
        type="dialog"
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
    expect(onChangeMock).not.toBeCalled();

    userEvent.click(screen.getByRole("checkbox", { name: /colors/i }));
    expect(onMixedStateChangeMock).toBeCalledTimes(2);
    expect(onChangeMock).not.toBeCalled();
  });

  it("should have indeterminate state for parent item if not all child items are checked", () => {
    render(
      <MultiSelectTestDialogComponent multiSelectId="multiselect-dialog-test-id" />
    );
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
    render(
      <MultiSelectTestDialogComponent multiSelectId="multiselect-dialog-test-id" />
    );
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
      "multiselect-dialog-test-id": { items: ["red", "blue"] },
    };

    render(
      <MultiSelect
        id="multiselect-dialog-test-id"
        labelText="MultiSelect Label"
        type="dialog"
        items={items}
        isDefaultOpen={true}
        selectedItems={selectedTestItems}
        onMixedStateChange={() => null}
        onChange={() => null}
        onClear={() => null}
        onApply={() => null}
      />
    );
    expect(screen.getByLabelText("Colors")).toBeChecked();
  });
  it("should render a count button with the correct count, should clear the selectedItems on click ", () => {
    const { container } = render(
      <MultiSelectTestDialogComponent multiSelectId="multiselect-dialog-test-id" />
    );
    // Check for the selectedItems count button to not be present
    expect(
      container.querySelector("span[role='button']")
    ).not.toBeInTheDocument();
    // Open menu
    userEvent.click(screen.getByRole("button", { name: /MultiSelect Label/i }));
    // Check on item
    userEvent.click(screen.getByRole("checkbox", { name: /dogs/i }));
    const countButton = container.querySelector("span[role='button']");
    // Check for the selectedItems count button to be present and reflect the count of selectedItems
    expect(countButton).toBeInTheDocument();
    expect(countButton).toHaveTextContent("1");
    // Check the parent item with two child item
    userEvent.click(screen.getByText("Colors"));
    // Check for the count of selectedItems
    expect(countButton).toHaveTextContent("3");
    // Close menu
    userEvent.click(screen.getByRole("button", { name: "MultiSelect Label" }));
    // Count button is still present
    expect(countButton).toHaveTextContent("3");
    // Click count button
    userEvent.click(countButton);
    // Count button disapeared
    expect(countButton).not.toBeInTheDocument();
    // Open menu
    userEvent.click(screen.getByRole("button", { name: /MultiSelect Label/i }));
    // Previously selected elements should not be selected
    expect(screen.getByLabelText("Dogs")).not.toBeChecked();
    expect(screen.getByLabelText("Colors")).not.toBeChecked();
    // Check that child items are not checked
    expect(screen.getByLabelText("Red")).not.toBeChecked();
    expect(screen.getByLabelText("Blue")).not.toBeChecked();
    expect(countButton).not.toBeInTheDocument();
  });
  it("should render with a correct initial selection of items if passed to the component, upon clicking the count button to delet the selectedItmes, the MultiSelectMenuButton should have focus", () => {
    const { container } = render(
      <MultiSelectTestDialogComponent
        multiSelectId="multiselect-dialog-test-id"
        initialSelectedItems={{
          ["multiselect-dialog-test-id"]: { items: ["red", "blue", "dogs"] },
        }}
      />
    );
    const countButton = container.querySelector("span[role='button']");
    expect(countButton).toBeInTheDocument();

    userEvent.click(countButton);

    expect(
      screen.getByRole("button", { name: /MultiSelect Label/i })
    ).toHaveFocus();
    expect(countButton).not.toBeInTheDocument();
  });

  it("should render the UI snapshot correctly", () => {
    const defaultDialog = renderer
      .create(
        <MultiSelect
          id="multiselect-dialog-test-id"
          labelText="MultiSelect Test Label"
          type="dialog"
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
          id="multiselect-dialog-test-id"
          labelText="MultiSelect Test Label"
          type="dialog"
          items={items}
          isDefaultOpen={true}
          selectedItems={selectedTestItems}
          onChange={() => null}
          onClear={() => null}
          onApply={() => null}
        />
      )
      .toJSON();

    selectedTestItems = { "multiselect-dialog-test-id": { items: ["red"] } };
    const mixedState = renderer
      .create(
        <MultiSelect
          id="multiselect-dialog-test-id"
          labelText="MultiSelect Test Label"
          type="dialog"
          items={items}
          isDefaultOpen={true}
          selectedItems={selectedTestItems}
          onMixedStateChange={() => null}
          onChange={() => null}
          onClear={() => null}
          onApply={() => null}
        />
      )
      .toJSON();

    selectedTestItems = {
      "multiselect-dialog-test-id": { items: ["red", "blue"] },
    };
    const allChecked = renderer
      .create(
        <MultiSelect
          id="multiselect-dialog-test-id"
          labelText="MultiSelect Test Label"
          type="dialog"
          items={items}
          isDefaultOpen={true}
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

  it("should initially render with provided id", () => {
    const { container } = render(
      <MultiSelect
        id="multiselect-listbox-test-id"
        labelText="MultiSelect Label"
        type="listbox"
        items={items}
        selectedItems={selectedTestItems}
        onChange={() => null}
        onClear={() => null}
      />
    );
    expect(
      container.querySelector("#multiselect-listbox-test-id")
    ).toBeInTheDocument();
  });

  it("should initially render with a given label", () => {
    render(
      <MultiSelect
        id="multiselect-listbox-test-id"
        labelText="MultiSelect Label"
        type="listbox"
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

  it("should initially render with open menu if isDefaultOpen prop is true", () => {
    render(
      <MultiSelect
        id="multiselect-listbox-test-id"
        labelText="MultiSelect Label"
        type="listbox"
        items={items}
        isDefaultOpen={true}
        selectedItems={selectedTestItems}
        onChange={() => null}
        onClear={() => null}
      />
    );

    const ul = screen.getByRole("listbox");
    const list = ul[`${Object.keys(ul)[1]}`].children;
    expect(list).toHaveLength(6);
  });

  it("should allow user to toggle menu by clicking menu button", () => {
    const { container } = render(
      <MultiSelect
        id="multiselect-listbox-test-id"
        labelText="MultiSelect Label"
        type="listbox"
        items={items}
        selectedItems={selectedTestItems}
        onChange={() => null}
        onClear={() => null}
      />
    );
    // When first rendered menu is not expanded
    expect(
      container.querySelector(
        '[aria-expanded="false"][aria-haspopup="listbox"]'
      )
    ).toBeInstanceOf(HTMLElement);
    expect(screen.queryAllByRole("option")).toHaveLength(0);

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
        id="multiselect-listbox-test-id"
        labelText="MultiSelect Label"
        type="listbox"
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

  it("should render a count button with the correct count, should clear the selectedItems on click", () => {
    const { container } = render(
      <MultiSelectTestListboxComponent multiSelectId="multiselect-listbox-test-id" />
    );
    // Check for the selectedItems count button to not be present
    expect(
      container.querySelector("span[role='button']")
    ).not.toBeInTheDocument();
    // Open menu
    userEvent.click(screen.getByRole("button", { name: /MultiSelect Label/i }));
    // Check on item
    userEvent.click(screen.getByRole("option", { name: /dogs/i }));
    const countButton = container.querySelector("span[role='button']");

    // Check for the selectedItems count button to be present and reflect the count of selectedItems
    expect(countButton).toBeInTheDocument();
    expect(countButton).toHaveTextContent("1");
    // Check a second item
    userEvent.click(screen.getByRole("option", { name: /colors/i }));
    // Check for the count of selectedItems
    expect(countButton).toHaveTextContent("2");
    // Close menu
    userEvent.click(
      screen.getByRole("button", { name: "Colors MultiSelect Label" })
    );
    // Count button is still present
    expect(countButton).toHaveTextContent("2");
    // Click count button
    userEvent.click(container.querySelector("span[role='button']"));
    // Count button disapeared
    expect(countButton).not.toBeInTheDocument();
    // Open menu
    userEvent.click(screen.getByRole("button", { name: /MultiSelect Label/i }));
    // Previously selected elements should not be selected
    expect(screen.getByLabelText("Dogs")).not.toBeChecked();
    expect(screen.getByLabelText("Colors")).not.toBeChecked();
  });

  it("Renders the UI snapshot correctly", () => {
    const defaultListbox = renderer
      .create(
        <MultiSelect
          id="multiselect-listbox-test-id"
          labelText="MultiSelect Label"
          type="listbox"
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
          id="multiselect-listbox-test-id"
          labelText="MultiSelect Label"
          type="listbox"
          isDefaultOpen={true}
          items={items}
          selectedItems={selectedTestItems}
          onChange={() => null}
          onClear={() => null}
        />
      )
      .toJSON();

    selectedTestItems = {
      "multiselect-listbox-test-id": { items: ["cats", "dogs"] },
    };
    const selection = renderer
      .create(
        <MultiSelect
          id="multiselect-listbox-test-id"
          labelText="MultiSelect Label"
          type="listbox"
          items={items}
          isDefaultOpen={true}
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
