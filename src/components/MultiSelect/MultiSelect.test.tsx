import { axe } from "jest-axe";
import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import userEvent from "@testing-library/user-event";
import * as React from "react";

import MultiSelect from "./MultiSelect";
import useMultiSelect from "../../hooks/useMultiSelect";

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

const MultiSelectTestDialogComponent = (componentId) => {
  const { onChange, onMixedStateChange, selectedItems, onClear } =
    useMultiSelect({
      multiSelectId: componentId,
      items,
    });
  return (
    <MultiSelect
      id={componentId}
      label="MultiSelect Label"
      variant="dialog"
      items={items}
      selectedItems={selectedItems}
      onChange={(e) => onChange(e.target.id)}
      onMixedStateChange={(e) => {
        onMixedStateChange(e.target.id);
      }}
      onClear={() => onClear()}
      onApply={() => null}
    />
  );
};
const MultiSelectTestListboxComponent = (componentId) => {
  const { onChange, selectedItems, onClear } = useMultiSelect({
    multiSelectId: componentId,
    items,
  });
  return (
    <MultiSelect
      id={componentId}
      label="MultiSelect Label"
      variant="listbox"
      items={items}
      selectedItems={selectedItems}
      onChange={(selectedItem) => onChange(selectedItem.id)}
      onClear={() => onClear()}
    />
  );
};

describe("MultiSelect Accessibility", () => {
  let selectedTestItems;
  beforeEach(() => (selectedTestItems = {}));

  it("should have no axe violations for the 'listbox' variant", async () => {
    const { container } = render(
      <MultiSelect
        id="multiselect-dialog-test-id"
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

  it("should have no axe violations for the 'dialog' variant", async () => {
    const { container } = render(
      <MultiSelect
        id="multiselect-dialog-test-id"
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
});

describe("MultiSelect Dialog", () => {
  let selectedTestItems;
  beforeEach(() => (selectedTestItems = {}));

  it("should initially render with provided id", () => {
    const { container } = render(
      <MultiSelect
        id="multiselect-dialog-test-id"
        label="MultiSelect Label"
        variant="dialog"
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

  it("should initially render with a closed menu when the isDefaultOpen is omitted or set to false", () => {
    const { rerender } = render(
      <MultiSelect
        id="multiselect-dialog-test-id"
        label="MultiSelect Test Label"
        variant="dialog"
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
        label="MultiSelect Test Label"
        variant="dialog"
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
        label="MultiSelect Test Label"
        variant="dialog"
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

  it("should open menu when user clicks menu button", () => {
    render(
      <MultiSelect
        id="multiselect-dialog-test-id"
        label="MultiSelect Label"
        variant="dialog"
        items={items}
        selectedItems={selectedTestItems}
        onChange={() => null}
        onClear={() => null}
        onApply={() => null}
      />
    );
    // On initial render menu is closed
    expect(screen.queryByRole("dialog")).toBeNull();
    expect(screen.queryByRole("checkbox")).toBeNull();

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
  //       id="multiselect-dialog-test-id"
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
        id="multiselect-dialog-test-id"
        label="MultiSelect Label"
        variant="dialog"
        items={items}
        selectedItems={selectedTestItems}
        onChange={() => null}
        onClear={() => null}
        onApply={() => null}
      />
    );

    // Initially closed
    expect(screen.queryByRole("dialog")).toBeNull();
    expect(
      container
        .querySelector("#multiselect-dialog-test-id")
        .getAttribute("aria-modal")
    ).toBeNull();

    // Open multiselect.
    userEvent.click(
      screen.getByRole("button", {
        name: /multiselect label/i,
      })
    );

    expect(screen.queryByRole("dialog")).toBeInTheDocument();
    expect(
      container
        .querySelector("#multiselect-dialog-test-id")
        .getAttribute("aria-modal")
    ).toEqual("true");

    // Close multiselect.
    userEvent.click(
      screen.getByRole("button", {
        name: /multiselect label/i,
      })
    );

    expect(screen.queryByRole("dialog")).toBeNull();
    expect(
      container
        .querySelector("#multiselect-dialog-test-id")
        .getAttribute("aria-modal")
    ).toBeNull();
  });

  it("should call onChange when an item without child items or a child item is selected/unselected", () => {
    const onChangeMock = jest.fn();
    const onMixedStateChangeMock = jest.fn();

    render(
      <MultiSelect
        id="multiselect-dialog-test-id"
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
    expect(onChangeMock).not.toBeCalled();

    userEvent.click(screen.getByRole("checkbox", { name: /colors/i }));
    expect(onMixedStateChangeMock).toBeCalledTimes(2);
    expect(onChangeMock).not.toBeCalled();
  });

  it("should have indeterminate state for parent item if not all child items are checked", () => {
    render(<MultiSelectTestDialogComponent id="multiselect-dialog-test-id" />);
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
    render(<MultiSelectTestDialogComponent id="multiselect-dialog-test-id" />);
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
        label="MultiSelect Label"
        variant="dialog"
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
      <MultiSelectTestDialogComponent id="multiselect-dialog-test-id" />
    );
    // Check for the selectedItems count button to not be present
    expect(
      container.querySelector("span[role='button']")
    ).not.toBeInTheDocument();
    // Open menu
    userEvent.click(screen.getByRole("button", { name: /MultiSelect Label/i }));
    // Check on item
    userEvent.click(screen.getByRole("checkbox", { name: /dogs/i }));
    // Check for the selectedItems count button to be present and reflect the count of selectedItems
    expect(container.querySelector("span[role='button']")).toBeInTheDocument();
    expect(container.querySelector("span[role='button']")).toHaveTextContent(
      "1"
    );
    // Check the parent item with two child item
    userEvent.click(screen.getByText("Colors"));
    // Check for the count of selectedItems
    expect(container.querySelector("span[role='button']")).toHaveTextContent(
      "3"
    );
    // Close menu
    userEvent.click(screen.getByRole("button", { name: /MultiSelect Label/i }));
    // Count button is still present
    expect(container.querySelector("span[role='button']")).toHaveTextContent(
      "3"
    );
    // Click count button
    userEvent.click(container.querySelector("span[role='button']"));
    // Count button disapeared
    expect(
      container.querySelector("span[role='button']")
    ).not.toBeInTheDocument();
    // @TODO prevent menu toggle on count button click
    // // Open menu
    // userEvent.click(screen.getByRole("button", { name: /MultiSelect Label/i }));
    // Previously selected elements should not be selected
    expect(screen.getByLabelText("Dogs")).not.toBeChecked();
    expect(screen.getByLabelText("Colors")).not.toBeChecked();
    // Check that child items are not checked
    expect(screen.getByLabelText("Red")).not.toBeChecked();
    expect(screen.getByLabelText("Blue")).not.toBeChecked();
  });

  it("should render the UI snapshot correctly", () => {
    const defaultDialog = renderer
      .create(
        <MultiSelect
          id="multiselect-dialog-test-id"
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
          id="multiselect-dialog-test-id"
          label="MultiSelect Test Label"
          variant="dialog"
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
          label="MultiSelect Test Label"
          variant="dialog"
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
          label="MultiSelect Test Label"
          variant="dialog"
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
        label="MultiSelect Label"
        variant="listbox"
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

  it("should initially render with open menu if isDefaultOpen prop is true", () => {
    render(
      <MultiSelect
        id="multiselect-listbox-test-id"
        label="MultiSelect Label"
        variant="listbox"
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
        id="multiselect-listbox-test-id"
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

  it("should render a count button with the correct count, should clear the selectedItems on click ", () => {
    const { container } = render(
      <MultiSelectTestListboxComponent id="multiselect-listbox-test-id" />
    );
    // Check for the selectedItems count button to not be present
    expect(
      container.querySelector("span[role='button']")
    ).not.toBeInTheDocument();
    // Open menu
    userEvent.click(screen.getByRole("button", { name: /MultiSelect Label/i }));
    // Check on item
    userEvent.click(screen.getByRole("option", { name: /dogs/i }));
    // Check for the selectedItems count button to be present and reflect the count of selectedItems
    expect(container.querySelector("span[role='button']")).toBeInTheDocument();
    expect(container.querySelector("span[role='button']")).toHaveTextContent(
      "1"
    );
    // Check a second item
    userEvent.click(screen.getByRole("option", { name: /colors/i }));
    // Check for the count of selectedItems
    expect(container.querySelector("span[role='button']")).toHaveTextContent(
      "2"
    );
    // Close menu
    userEvent.click(screen.getByRole("button", { name: /MultiSelect Label/i }));
    // Count button is still present
    expect(container.querySelector("span[role='button']")).toHaveTextContent(
      "2"
    );
    // Click count button
    userEvent.click(container.querySelector("span[role='button']"));
    // Count button disapeared
    expect(
      container.querySelector("span[role='button']")
    ).not.toBeInTheDocument();
    // @TODO prevent menu toggle on count button click
    // // Open menu
    // userEvent.click(screen.getByRole("button", { name: /MultiSelect Label/i }));
    // Previously selected elements should not be selected
    expect(screen.getByLabelText("Dogs")).not.toBeChecked();
    expect(screen.getByLabelText("Colors")).not.toBeChecked();
  });

  it("Renders the UI snapshot correctly", () => {
    const defaultListbox = renderer
      .create(
        <MultiSelect
          id="multiselect-listbox-test-id"
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
          id="multiselect-listbox-test-id"
          label="MultiSelect Label"
          variant="listbox"
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
          label="MultiSelect Label"
          variant="listbox"
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
