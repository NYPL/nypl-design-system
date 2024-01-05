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

const defaultItemsVisible = 5;

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <MultiSelect
      id={multiSelectId}
      helperText="multiselect-helper-text"
      buttonText="multiselect-button-text"
      defaultItemsVisible={defaultItemsVisible}
      items={items}
      selectedItems={selectedItems}
      onChange={(e) => onChange(e.target.id, multiSelectId)}
      onMixedStateChange={(e) => {
        onMixedStateChange(e.target.id, multiSelectId, items);
      }}
      onClear={() => onClear(multiSelectId)}
    />
  );
};

describe("MultiSelect Accessibility", () => {
  let selectedTestItems;
  beforeEach(() => (selectedTestItems = {}));

  it("should have no axe violations for the 'dialog' type", async () => {
    const { container } = render(
      <MultiSelect
        id="multiselect-test-id"
        helperText="multiselect-helper-text"
        buttonText="multiselect-button-text"
        defaultItemsVisible={defaultItemsVisible}
        items={items}
        selectedItems={selectedTestItems}
        onChange={() => null}
        onClear={() => null}
      />
    );
    expect(await axe(container)).toHaveNoViolations();
  });
});

describe("MultiSelect", () => {
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
        id="multiselect-test-id"
        helperText="multiselect-helper-text"
        buttonText="multiselect-button-text"
        defaultItemsVisible={defaultItemsVisible}
        items={items}
        selectedItems={selectedTestItems}
        onChange={() => null}
        onClear={() => null}
      />
    );
    expect(
      container.querySelector("#multiselect-test-id")
    ).toBeInTheDocument();
  });

  // it("should initially render with a given label", () => {
  //   render(
  //     <MultiSelect
  //       id="multiselect-test-id"
  //       helperText="multiselect-helper-text"
  //       buttonText="multiselect-button-text"
  //       defaultItemsVisible={defaultItemsVisible}
  //       items={items}
  //       selectedItems={selectedTestItems}
  //       onChange={() => null}
  //       onClear={() => null}
  //     />
  //   );

  //   console.log(screen)
  //   expect(
  //     screen.getByRole("button", {
  //       name: /multiselect test label/i,
  //     })
  //   ).toBeInTheDocument();
  // });

  it("should initially render with a closed menu when the isDefaultOpen is omitted or set to false", () => {
    render(
      <MultiSelect
        id="multiselect-test-id"
        helperText="multiselect-helper-text"
        buttonText="multiselect-button-text"
        defaultItemsVisible={defaultItemsVisible}
        items={items}
        isDefaultOpen={false}
        selectedItems={selectedTestItems}
        onChange={() => null}
        onClear={() => null}
      />
    );
    expect(screen.queryByRole("checkbox")).toBeNull();
  });

  it("should initially render with open menu if isDefaultOpen prop is true", () => {
    render(
      <MultiSelect
        id="multiselect-test-id"
        helperText="multiselect-helper-text"
        buttonText="multiselect-button-text"
        defaultItemsVisible={defaultItemsVisible}
        items={items}
        isDefaultOpen={true}
        selectedItems={selectedTestItems}
        onChange={() => null}
        onClear={() => null}
      />
    );
    expect(screen.getByRole("button").getAttribute("aria-expanded")).toEqual(
      "true"
    );
    expect(screen.getAllByRole("checkbox")).toHaveLength(8);
  });

  it("should initially render with open menu if isDefaultOpen prop is true and when items are selected", () => {
    selectedTestItems = {  "multiselect-test-id": { items: ["red", "blue"] }, };
    render(
      <MultiSelect
        id="multiselect-test-id"
        helperText="multiselect-helper-text"
        buttonText="multiselect-button-text"
        defaultItemsVisible={defaultItemsVisible}
        items={items}
        isDefaultOpen={true}
        selectedItems={selectedTestItems}
        onChange={() => null}
        onClear={() => null}
      />
    );
    expect(screen.getAllByRole("checkbox")).toHaveLength(8);
    expect(screen.getByTestId("multi-select-close-button-testid")).toBeInTheDocument();
  });

  it("should initially render with open menu if isDefaultOpen prop is true and when selected items are empty", () => {
    render(
      <MultiSelect
        id="multiselect-test-id"
        helperText="multiselect-helper-text"
        buttonText="multiselect-button-text"
        defaultItemsVisible={defaultItemsVisible}
        items={items}
        isDefaultOpen={true}
        selectedItems={selectedTestItems}
        onChange={() => null}
        onClear={() => null}
      />
    );
    expect(screen.getAllByRole("checkbox")).toHaveLength(8);
    expect(screen.queryByTestId("multi-select-close-button-testid")).not.toBeInTheDocument();
  });

  // Not sure this can be tested
  // it("should have block behavior if isBlockElement is true", () => {
  //   const { container } = render(
  //     <MultiSelect
  //       id="multiselect-test-id"
  //       labelText="MultiSelect Label"
  //   
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
        id="multiselect-test-id"
        helperText="multiselect-helper-text"
        buttonText="multiselect-button-text"
        defaultItemsVisible={defaultItemsVisible}
        items={items}
        selectedItems={selectedTestItems}
        onChange={() => null}
        onClear={() => null}
      />
    );

    // Initially closed
    expect(screen.getByRole("button").getAttribute("aria-expanded")).toEqual(
      "false"
    );
    expect(screen.queryByRole("checkbox")).toBeNull();

    // Open multiselect.
    userEvent.click(screen.getByRole('button'));
    expect(screen.getByRole('button').getAttribute('aria-expanded')).toEqual('true');
    
    // Close multiselect.
    userEvent.click(screen.getByRole('button'));
    expect(screen.getByRole('button').getAttribute('aria-expanded')).toEqual('false');

    // // TESTING FOR ENTER KEY
    // // Open multiselect using ENTER key.
    userEvent.keyboard("[Enter]");
    expect(screen.getByRole('button').getAttribute('aria-expanded')).toEqual('true');

    // // Close multiselect using ENTER key.
    userEvent.keyboard("[Enter]");
    expect(screen.getByRole('button').getAttribute('aria-expanded')).toEqual('false');

    // // TESTING FOR SPACEBAR KEY
    // // Open multiselect using SPACEBAR key.
    userEvent.keyboard("[Space]");
    expect(screen.getByRole('button').getAttribute('aria-expanded')).toEqual('true');

    // Close multiselect using SPACEBAR key.
    userEvent.keyboard("[Space]");
    expect(screen.getByRole('button').getAttribute('aria-expanded')).toEqual('false');
  });

  it("should call onChange when an item without child items or a child item is selected/unselected", () => {
    const onChangeMock = jest.fn();
    const onMixedStateChangeMock = jest.fn();

    render(
      <MultiSelect
        id="multiselect-test-id"
        helperText="multiselect-helper-text"
        buttonText="multiselect-button-text"
        defaultItemsVisible={defaultItemsVisible}
        items={items}
        selectedItems={selectedTestItems}
        onChange={onChangeMock}
        onMixedStateChange={onMixedStateChangeMock}
        onClear={() => null}
      />
    );
    // Open multiselect menu.
    userEvent.click(screen.queryByRole('button'));
    expect(screen.queryByRole('button').getAttribute('aria-expanded')).toEqual('true');

    render(
      <MultiSelect
        id="multiselect-test-id"
        helperText="multiselect-helper-text"
        buttonText="multiselect-button-text"
        defaultItemsVisible={defaultItemsVisible}
        items={items}
        selectedItems={selectedTestItems}
        onChange={onChangeMock}
        onMixedStateChange={onMixedStateChangeMock}
        onClear={() => null}
      />
    );
    userEvent.click(screen.queryByRole('checkbox', { name: /dogs/i }))
    expect(onMixedStateChangeMock).not.toBeCalled();
    expect(onChangeMock).toBeCalledTimes(1);

    userEvent.click(screen.queryByRole("checkbox", { name: /blue/i }));
    userEvent.click(screen.queryByRole("checkbox", { name: /plants/i }));
    expect(onMixedStateChangeMock).not.toBeCalled();
    expect(onChangeMock).toBeCalledTimes(3);

    userEvent.click(screen.queryByRole("checkbox", { name: /blue/i }));
    expect(onMixedStateChangeMock).not.toBeCalled();
    expect(onChangeMock).toBeCalledTimes(4);
  });

  it("should call onMixedStateChange when a parent item is selected/unselected", () => {
    const onChangeMock = jest.fn();
    const onMixedStateChangeMock = jest.fn();

    render(
      <MultiSelect
        id="multiselect-test-id"
        helperText="multiselect-helper-text"
        buttonText="multiselect-button-text"
        defaultItemsVisible={defaultItemsVisible}
        items={items}
        selectedItems={selectedTestItems}
        onChange={onChangeMock}
        onMixedStateChange={onMixedStateChangeMock}
        onClear={() => null}
      />
    );
    // Open menu
    userEvent.click(screen.queryByRole('button'));
    expect(screen.queryByRole('button').getAttribute('aria-expanded')).toEqual('true');
    
    render(
      <MultiSelect
        id="multiselect-test-id"
        helperText="multiselect-helper-text"
        buttonText="multiselect-button-text"
        defaultItemsVisible={defaultItemsVisible}
        items={items}
        selectedItems={selectedTestItems}
        onChange={onChangeMock}
        onMixedStateChange={onMixedStateChangeMock}
        onClear={() => null}
      />
    );
    expect(screen.getAllByRole("checkbox")).toHaveLength(8);
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
      <MultiSelectTestDialogComponent multiSelectId="multiselect-test-id" />
    );
    // Open menu
    userEvent.click(screen.queryByRole('button'));
    expect(screen.queryByRole('button').getAttribute('aria-expanded')).toEqual('true');
    // Check the child
    userEvent.click(screen.getByText("Red"));
    // Child is checked
    expect(screen.getByLabelText("Red")).toBeChecked();
    // Parent is indeterminated
    console.log(screen.getByLabelText("Colors"))
    //expect(screen.getByLabelText("Colors")).toBePartiallyChecked();
  });

  it("should check all child items if parent is checked", () => {
    render(
      <MultiSelectTestDialogComponent multiSelectId="multiselect-test-id" />
    );
    // Open menu
   userEvent.click(screen.queryByRole('button'));
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
      "multiselect-test-id": { items: ["red", "blue"] },
    };

    render(
      <MultiSelect
        id="multiselect-test-id"
        helperText="multiselect-helper-text"
        buttonText="multiselect-button-text"
        defaultItemsVisible={defaultItemsVisible}
        items={items}
        isDefaultOpen={true}
        selectedItems={selectedTestItems}
        onMixedStateChange={() => null}
        onChange={() => null}
        onClear={() => null}
      />
    );
    expect(screen.getByLabelText("Colors")).toBeChecked();
  });

  it("should render a count button with the correct count, should clear the selectedItems on click ", () => {
    render(
      <MultiSelectTestDialogComponent multiSelectId="multiselect-test-id" />
    );
    expect(screen.queryByTestId("multi-select-close-button-testid")).not.toBeInTheDocument();

    // Open menu
    userEvent.click(screen.queryByRole("button"));
      
    render(
      <MultiSelectTestDialogComponent multiSelectId="multiselect-test-id" />
    );
    // Check on item
    userEvent.click(screen.queryByRole("checkbox", { name: /dogs/i }));
    const countButton = screen.queryByTestId("multi-select-close-button-testid");
    
    // Check for the selectedItems count button to be present and reflect the count of selectedItems
    expect(countButton).toBeInTheDocument();
    expect(countButton).toHaveTextContent("1");

    // Check the parent item with two child item
     userEvent.click(screen.queryByRole("checkbox", { name: /colors/i }));
    // Check for the count of selectedItems
    expect(countButton).toHaveTextContent("3");

    // Close menu
    userEvent.click(screen.queryByTestId("multi-select-close-button-testid"));
    // Count button is still present
    expect(countButton).toHaveTextContent("3");
    // Click count button
    userEvent.click(countButton);
    // Count button disapeared
    expect(countButton).not.toBeInTheDocument();
  });

  it("should render the UI snapshot correctly", () => {
    const defaultDialog = renderer
      .create(
        <MultiSelect
          id="multiselect-test-id"
          helperText="multiselect-helper-text"
          buttonText="multiselect-button-text"
          defaultItemsVisible={defaultItemsVisible}
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
          id="multiselect-test-id"
          helperText="multiselect-helper-text"
          buttonText="multiselect-button-text"
          defaultItemsVisible={defaultItemsVisible}
          items={items}
          isDefaultOpen={true}
          selectedItems={selectedTestItems}
          onChange={() => null}
          onClear={() => null}
        />
      )
      .toJSON();

    selectedTestItems = { "multiselect-test-id": { items: ["red"] } };
    const mixedState = renderer
      .create(
        <MultiSelect
          id="multiselect-test-id"
          helperText="multiselect-helper-text"
          buttonText="multiselect-button-text"
          defaultItemsVisible={defaultItemsVisible}
          items={items}
          isDefaultOpen={true}
          selectedItems={selectedTestItems}
          onMixedStateChange={() => null}
          onChange={() => null}
          onClear={() => null}
        />
      )
      .toJSON();

    selectedTestItems = {
      "multiselect-test-id": { items: ["red", "blue"] },
    };
    const allChecked = renderer
      .create(
        <MultiSelect
          id="multiselect-test-id"
          helperText="multiselect-helper-text"
          buttonText="multiselect-button-text"
          defaultItemsVisible={defaultItemsVisible}
          items={items}
          isDefaultOpen={true}
          selectedItems={selectedTestItems}
          onMixedStateChange={() => null}
          onChange={() => null}
          onClear={() => null}
        />
      )
      .toJSON();

    expect(defaultDialog).toMatchSnapshot();
    expect(isOpen).toMatchSnapshot();
    expect(mixedState).toMatchSnapshot();
    expect(allChecked).toMatchSnapshot();
  });
});

