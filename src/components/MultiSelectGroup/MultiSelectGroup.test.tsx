import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import * as React from "react";
import renderer from "react-test-renderer";

import MultiSelectGroup from "./MultiSelectGroup";
import MultiSelect from "../MultiSelect/MultiSelect";

const multiSelectItems = [
  {
    id: "colors",
    name: "Colors",
    items: [
      { id: "red", name: "Red" },
      { id: "blue", name: "Blue" },
      { id: "yellow", name: "Yellow" },
    ],
  },
  {
    id: "pets",
    name: "Pets",
    items: [
      { id: "cat", name: "Cat" },
      {
        id: "dog",
        name: "Dog",
        children: [
          { id: "corgy", name: "Corgy" },
          { id: "german-sheperd", name: "German Sheperd" },
          { id: "afghan-hound", name: "Afghan Hound" },
        ],
      },
      { id: "rat", name: "Rat" },
    ],
  },
  {
    id: "tools",
    name: "Tools",
    items: [
      { id: "hammer", name: "Hammer" },
      {
        id: "skrewdriver",
        name: "Skrewdriver",
        children: [
          { id: "slottet", name: "Slotted Skrewdriver" },
          { id: "phillips", name: "Phillips Skrewdriver" },
          { id: "allen", name: "Allen Skrewdriver" },
        ],
      },
      { id: "whisk", name: "Whisk" },
    ],
  },
];

describe("MulitSelectGroup Accessibility", () => {
  it("passes axe accessibility with string labels ", async () => {
    const handleChangeMock = jest.fn();
    const { container } = render(
      <MultiSelectGroup
        id="MultiSelectGroup"
        labelText="MultiSelectGroup example"
        showLabelText={true}
      >
        {multiSelectItems.map((multiSelectItem) => (
          <MultiSelect
            key={multiSelectItem.id}
            id={multiSelectItem.id}
            variant={"listbox"}
            label={multiSelectItem.name}
            items={multiSelectItem.items}
            selectedItems={{}}
            onChange={handleChangeMock}
            onClear={() => "clear"}
          />
        ))}
      </MultiSelectGroup>
    );
    expect(await axe(container)).toHaveNoViolations();
  });
  it("renders with appropriate 'aria-label' attribute and value when 'showLabel' prop is set to false", () => {
    const handleChangeMock = jest.fn();
    const { rerender } = render(
      <MultiSelectGroup
        id="MultiSelectGroup"
        labelText="MultiSelectGroup example"
        showLabelText={true}
      >
        {multiSelectItems.map((multiSelectItem) => (
          <MultiSelect
            key={multiSelectItem.id}
            id={multiSelectItem.id}
            variant={"listbox"}
            label={multiSelectItem.name}
            items={multiSelectItem.items}
            selectedItems={{}}
            onChange={handleChangeMock}
            onClear={() => "clear"}
          />
        ))}
      </MultiSelectGroup>
    );
    expect(screen.getByTestId("multi-select-group")).not.toHaveAttribute(
      "aria-label",
      "MultiSelectGroup example"
    );

    rerender(
      <MultiSelectGroup
        id="MultiSelectGroup"
        labelText="MultiSelectGroup example"
        showLabelText={false}
      >
        {multiSelectItems.map((multiSelectItem) => (
          <MultiSelect
            key={multiSelectItem.id}
            id={multiSelectItem.id}
            variant={"listbox"}
            label={multiSelectItem.name}
            items={multiSelectItem.items}
            selectedItems={{}}
            onChange={handleChangeMock}
            onClear={() => "clear"}
          />
        ))}
      </MultiSelectGroup>
    );
    expect(screen.getByTestId("multi-select-group")).toHaveAttribute(
      "aria-label",
      "MultiSelectGroup example"
    );
  });
  it("should throw warning when a non-MultiSelect component is used as a child", () => {
    const warn = jest.spyOn(console, "warn");
    render(
      <MultiSelectGroup
        labelText="Not a MultiSelect child!"
        showLabelText={true}
        id="wrong-child"
      >
        <p>I pretend to be a MultiSelect!</p>
      </MultiSelectGroup>
    );
    expect(warn).toHaveBeenCalledWith(
      "NYPL Reservoir MultiSelectGroup: Only MultiSelect components can be children of MultiSelectGroup."
    );
  });
  it("renders the UI snapshots correctly", () => {
    const handleChangeMock = jest.fn();

    const multiSelectGroup = renderer
      .create(
        <MultiSelectGroup
          id="MultiSelectGroup"
          labelText="MultiSelectGroup example"
          showLabelText={true}
        >
          {multiSelectItems.map((multiSelectItem) => (
            <MultiSelect
              key={multiSelectItem.id}
              id={multiSelectItem.id}
              variant={"dialog"}
              label={multiSelectItem.name}
              items={multiSelectItem.items}
              selectedItems={{}}
              onChange={handleChangeMock}
              onClear={() => "clear"}
              onApply={() => "apply"}
            />
          ))}
        </MultiSelectGroup>
      )
      .toJSON();

    const labelHidden = renderer
      .create(
        <MultiSelectGroup
          id="MultiSelectGroup"
          labelText="MultiSelectGroup example"
          showLabelText={false}
        >
          {multiSelectItems.map((multiSelectItem) => (
            <MultiSelect
              key={multiSelectItem.id}
              id={multiSelectItem.id}
              variant={"dialog"}
              label={multiSelectItem.name}
              items={multiSelectItem.items}
              selectedItems={{}}
              onChange={handleChangeMock}
              onClear={() => "clear"}
              onApply={() => "apply"}
            />
          ))}
        </MultiSelectGroup>
      )
      .toJSON();

    expect(multiSelectGroup).toMatchSnapshot();
    expect(labelHidden).toMatchSnapshot();
  });
});
