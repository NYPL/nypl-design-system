import { render } from "@testing-library/react";
import { axe } from "jest-axe";
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

const defaultItemsVisible = 5;

describe("MulitSelectGroup Accessibility", () => {
  it("passes axe accessibility with string labels ", async () => {
    const handleChangeMock = jest.fn();
    const { container } = render(
      <MultiSelectGroup
        id="MultiSelectGroup"
        labelText="MultiSelectGroup example"
        showLabel={true}
        multiSelectWidth="full"
        renderMultiSelect={() => {
          return multiSelectItems.map((multiSelectItem) => (
            <MultiSelect
              key={multiSelectItem.id}
              id={multiSelectItem.id}
              items={multiSelectItem.items}
              selectedItems={{}}
              isDefaultOpen={false}
              isSearchable={false}
              isBlockElement={false}
              buttonText="MultiSelect"
              defaultItemsVisible={defaultItemsVisible}
              onChange={handleChangeMock}
              onClear={() => "onClear"}
            />
          ));
        }}
      />
    );
    expect(await axe(container)).toHaveNoViolations();
  });
  it("passes axe accessibility with the legend hidden", async () => {
    const handleChangeMock = jest.fn();
    const { container } = render(
      <MultiSelectGroup
        id="MultiSelectGroup"
        labelText="MultiSelectGroup example"
        showLabel={false}
        multiSelectWidth="full"
        renderMultiSelect={() => {
          return multiSelectItems.map((multiSelectItem) => (
            <MultiSelect
              key={multiSelectItem.id}
              id={multiSelectItem.id}
              items={multiSelectItem.items}
              selectedItems={{}}
              isDefaultOpen={false}
              isSearchable={false}
              isBlockElement={false}
              buttonText="MultiSelect"
              defaultItemsVisible={defaultItemsVisible}
              onChange={handleChangeMock}
              onClear={() => "onClear"}
            />
          ));
        }}
      />
    );
    expect(await axe(container)).toHaveNoViolations();
  });
  it("<legend> element is available in the DOM when 'showLabel' prop is set to true or false", () => {
    const handleChangeMock = jest.fn();
    const { container, rerender } = render(
      <MultiSelectGroup
        id="MultiSelectGroup"
        labelText="MultiSelectGroup example"
        showLabel={true}
        multiSelectWidth="full"
        renderMultiSelect={() => {
          return multiSelectItems.map((multiSelectItem) => (
            <MultiSelect
              key={multiSelectItem.id}
              id={multiSelectItem.id}
              items={multiSelectItem.items}
              selectedItems={{}}
              isDefaultOpen={false}
              isSearchable={false}
              isBlockElement={false}
              buttonText="MultiSelect"
              defaultItemsVisible={defaultItemsVisible}
              onChange={handleChangeMock}
              onClear={() => "onClear"}
            />
          ));
        }}
      />
    );
    expect(container.querySelector("legend")).toBeVisible();
    expect(container.querySelector("legend")).toHaveTextContent(
      "MultiSelectGroup example"
    );

    rerender(
      <MultiSelectGroup
        id="MultiSelectGroup"
        labelText="MultiSelectGroup example"
        showLabel={false}
        multiSelectWidth="full"
        renderMultiSelect={() => {
          return multiSelectItems.map((multiSelectItem) => (
            <MultiSelect
              key={multiSelectItem.id}
              id={multiSelectItem.id}
              items={multiSelectItem.items}
              isDefaultOpen={false}
              isSearchable={false}
              isBlockElement={false}
              selectedItems={{}}
              buttonText="MultiSelect"
              defaultItemsVisible={defaultItemsVisible}
              onChange={handleChangeMock}
              onClear={() => "onClear"}
            />
          ));
        }}
      />
    );
    expect(container.querySelector("legend")).toBeVisible();
    expect(container.querySelector("legend")).toHaveTextContent(
      "MultiSelectGroup example"
    );
  });

  it("renders the UI snapshots correctly", () => {
    const handleChangeMock = jest.fn();
    const multiSelectGroup = renderer
      .create(
        <MultiSelectGroup
          id="MultiSelectGroup"
          multiSelectWidth="full"
          labelText="MultiSelectGroup example"
          showLabel={true}
          renderMultiSelect={() => {
            return multiSelectItems.map((multiSelectItem) => (
              <MultiSelect
                key={multiSelectItem.id}
                id={multiSelectItem.id}
                items={multiSelectItem.items}
                selectedItems={{}}
                isDefaultOpen={false}
                isSearchable={false}
                isBlockElement={false}
                buttonText="MultiSelect"
                defaultItemsVisible={defaultItemsVisible}
                onChange={handleChangeMock}
                onClear={() => "onClear"}
              />
            ));
          }}
        />
      )
      .toJSON();
    const labelHidden = renderer
      .create(
        <MultiSelectGroup
          id="MultiSelectGroup"
          multiSelectWidth="full"
          labelText="MultiSelectGroup example"
          showLabel={false}
          renderMultiSelect={() => {
            return multiSelectItems.map((multiSelectItem) => (
              <MultiSelect
                key={multiSelectItem.id}
                id={multiSelectItem.id}
                items={multiSelectItem.items}
                selectedItems={{}}
                isDefaultOpen={false}
                isSearchable={false}
                isBlockElement={false}
                buttonText="MultiSelect"
                defaultItemsVisible={defaultItemsVisible}
                onChange={handleChangeMock}
                onClear={() => "onClear"}
              />
            ));
          }}
        />
      )
      .toJSON();

    expect(multiSelectGroup).toMatchSnapshot();
    expect(labelHidden).toMatchSnapshot();
  });
});
