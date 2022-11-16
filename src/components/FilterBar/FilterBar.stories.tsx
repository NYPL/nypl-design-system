import React from "react";
import { Story } from "@storybook/react/types-6-0";
import { VStack } from "@chakra-ui/react";
import { action } from "@storybook/addon-actions";

import FilterBar, { FilterBarProps } from "./FilterBar";
import MultiSelect from "../MultiSelect/MultiSelect";
import MultiSelectGroup from "../MultiSelectGroup/MultiSelectGroup";
import useFilterBar from "../../hooks/useFilterBar";

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

export const FilterBarStory: Story<FilterBarProps> = (args) => {
  const {
    onChange,
    onMixedStateChange,
    selectedItems,
    onClear,
    onClearAll,
    isModalOpen,
    onToggle,
  } = useFilterBar();
  return (
    <FilterBar
      {...args}
      isOpen={isModalOpen}
      onToggle={onToggle}
      onClear={onClearAll}
      selectedItems={selectedItems}
    >
      <MultiSelectGroup
        id="multiselect-group"
        key="multiselect-group-key"
        labelText="MultiSelect Group"
      >
        {multiSelectItems &&
          multiSelectItems.map((multiSelect) => (
            <MultiSelect
              key={multiSelect.id}
              id={multiSelect.id}
              label={multiSelect.name}
              variant="dialog"
              items={multiSelect.items}
              selectedItems={selectedItems}
              onChange={(e) => {
                onChange(e.target.id, multiSelect.id);
              }}
              onMixedStateChange={(e) => {
                onMixedStateChange(
                  e.target.id,
                  multiSelect.id,
                  multiSelect.items
                );
              }}
              onClear={() => {
                onClear(multiSelect.id);
              }}
              onApply={() => {}}
            />
          ))}
      </MultiSelectGroup>
    </FilterBar>
  );
};
export const FilterBarLayoutStory = () => {
  const {
    onChange,
    onMixedStateChange,
    selectedItems,
    onClear,
    onClearAll,
    isModalOpen,
    onToggle,
  } = useFilterBar();
  return (
    <VStack align="stretch" spacing="s">
      <FilterBar
        headingText="Row (default)"
        selectedItems={selectedItems}
        isOpen={isModalOpen}
        onToggle={onToggle}
        onClear={onClearAll}
        onSubmit={() => null}
        showClearAll={false}
        showSubmitAll={false}
      >
        <MultiSelectGroup showLabel={false} id="row" labelText="Row (default)">
          {multiSelectItems &&
            multiSelectItems.map((multiSelect) => (
              <MultiSelect
                key={multiSelect.id}
                id={multiSelect.id}
                label={multiSelect.name}
                variant="dialog"
                items={multiSelect.items}
                selectedItems={selectedItems}
                onChange={(e) => {
                  onChange(e.target.id, multiSelect.id);
                }}
                onMixedStateChange={(e) => {
                  return onMixedStateChange(
                    e.target.id,
                    multiSelect.id,
                    multiSelect.items
                  );
                }}
                onClear={() => {
                  onClear(multiSelect.id);
                  action("onClear")({});
                }}
                onApply={() => {}}
              />
            ))}
        </MultiSelectGroup>
      </FilterBar>
      <FilterBar
        headingText="Column"
        layout="column"
        selectedItems={selectedItems}
        isOpen={isModalOpen}
        onToggle={onToggle}
        onClear={onClearAll}
        onSubmit={() => null}
        showClearAll={false}
        showSubmitAll={false}
      >
        <MultiSelectGroup showLabel={false} id="column" labelText="Column">
          {multiSelectItems &&
            multiSelectItems.map((multiSelect) => (
              <MultiSelect
                key={`${multiSelect.id}-1`}
                id={`${multiSelect.id}-1`}
                label={multiSelect.name}
                variant="dialog"
                items={multiSelect.items}
                selectedItems={selectedItems}
                onChange={(e) => {
                  onChange(e.target.id, `${multiSelect.id}-1`);
                }}
                onMixedStateChange={(e) => {
                  return onMixedStateChange(
                    e.target.id,
                    `${multiSelect.id}-1`,
                    multiSelect.items
                  );
                }}
                onClear={() => {
                  onClear(`${multiSelect.id}-1`);
                }}
                onApply={() => {}}
              />
            ))}
        </MultiSelectGroup>
      </FilterBar>
      <FilterBar
        headingText="Clear All Button"
        selectedItems={selectedItems}
        isOpen={isModalOpen}
        onToggle={onToggle}
        onClear={onClearAll}
        onSubmit={() => null}
        showClearAll={true}
        showSubmitAll={false}
      >
        <MultiSelectGroup
          showLabel={false}
          id="clear-all"
          labelText="Clear All - Row"
        >
          {multiSelectItems &&
            multiSelectItems.map((multiSelect) => (
              <MultiSelect
                key={`${multiSelect.id}-2`}
                id={`${multiSelect.id}-2`}
                label={multiSelect.name}
                variant="dialog"
                items={multiSelect.items}
                selectedItems={selectedItems}
                onChange={(e) => {
                  onChange(e.target.id, `${multiSelect.id}-2`);
                }}
                onMixedStateChange={(e) => {
                  return onMixedStateChange(
                    e.target.id,
                    `${multiSelect.id}-2`,
                    multiSelect.items
                  );
                }}
                onClear={() => {
                  onClear(`${multiSelect.id}-2`);
                }}
                onApply={() => {}}
              />
            ))}
        </MultiSelectGroup>
      </FilterBar>
      <FilterBar
        headingText="Clear All Button - Column"
        selectedItems={selectedItems}
        isOpen={isModalOpen}
        onToggle={onToggle}
        onClear={onClearAll}
        layout="column"
        onSubmit={() => null}
        showClearAll={true}
        showSubmitAll={false}
      >
        <MultiSelectGroup
          showLabel={false}
          id="clear-all"
          labelText="Clear All"
        >
          {multiSelectItems &&
            multiSelectItems.map((multiSelect) => (
              <MultiSelect
                key={`${multiSelect.id}-2`}
                id={`${multiSelect.id}-2`}
                label={multiSelect.name}
                variant="dialog"
                items={multiSelect.items}
                selectedItems={selectedItems}
                onChange={(e) => {
                  onChange(e.target.id, `${multiSelect.id}-2`);
                }}
                onMixedStateChange={(e) => {
                  return onMixedStateChange(
                    e.target.id,
                    `${multiSelect.id}-2`,
                    multiSelect.items
                  );
                }}
                onClear={() => {
                  onClear(`${multiSelect.id}-2`);
                }}
                onApply={() => {}}
              />
            ))}
        </MultiSelectGroup>
      </FilterBar>
      <FilterBar
        headingText="Submit Button - Row"
        selectedItems={selectedItems}
        isOpen={isModalOpen}
        onToggle={onToggle}
        onClear={onClearAll}
        onSubmit={() => null}
        showClearAll={false}
        showSubmitAll={true}
      >
        <MultiSelectGroup
          showLabel={false}
          id="submit-button"
          labelText="Submit Button"
        >
          {multiSelectItems &&
            multiSelectItems.map((multiSelect) => (
              <MultiSelect
                key={`${multiSelect.id}-3`}
                id={`${multiSelect.id}-3`}
                label={multiSelect.name}
                variant="dialog"
                items={multiSelect.items}
                selectedItems={selectedItems}
                onChange={(e) => {
                  onChange(e.target.id, `${multiSelect.id}-3`);
                }}
                onMixedStateChange={(e) => {
                  return onMixedStateChange(
                    e.target.id,
                    `${multiSelect.id}-3`,
                    multiSelect.items
                  );
                }}
                onClear={() => {
                  onClear(`${multiSelect.id}-3`);
                }}
                onApply={() => {}}
              />
            ))}
        </MultiSelectGroup>
      </FilterBar>
      <FilterBar
        headingText="Submit Button - Column"
        selectedItems={selectedItems}
        isOpen={isModalOpen}
        onToggle={onToggle}
        onClear={onClearAll}
        layout="column"
        onSubmit={() => null}
        showClearAll={false}
        showSubmitAll={true}
      >
        <MultiSelectGroup
          showLabel={false}
          id="submit-button"
          labelText="Submit Button"
        >
          {multiSelectItems &&
            multiSelectItems.map((multiSelect) => (
              <MultiSelect
                key={`${multiSelect.id}-3`}
                id={`${multiSelect.id}-3`}
                label={multiSelect.name}
                variant="dialog"
                items={multiSelect.items}
                selectedItems={selectedItems}
                onChange={(e) => {
                  onChange(e.target.id, `${multiSelect.id}-3`);
                }}
                onMixedStateChange={(e) => {
                  return onMixedStateChange(
                    e.target.id,
                    `${multiSelect.id}-3`,
                    multiSelect.items
                  );
                }}
                onClear={() => {
                  onClear(`${multiSelect.id}-3`);
                }}
                onApply={() => {}}
              />
            ))}
        </MultiSelectGroup>
      </FilterBar>
      <FilterBar
        headingText="Clear All and Submit butttons - Row"
        selectedItems={selectedItems}
        isOpen={isModalOpen}
        onToggle={onToggle}
        onClear={onClearAll}
        onSubmit={() => null}
        showClearAll={true}
        showSubmitAll={true}
      >
        <MultiSelectGroup
          showLabel={false}
          id="submit-button"
          labelText="Submit Button"
        >
          {multiSelectItems &&
            multiSelectItems.map((multiSelect) => (
              <MultiSelect
                key={`${multiSelect.id}-3`}
                id={`${multiSelect.id}-3`}
                label={multiSelect.name}
                variant="dialog"
                items={multiSelect.items}
                selectedItems={selectedItems}
                onChange={(e) => {
                  onChange(e.target.id, `${multiSelect.id}-3`);
                }}
                onMixedStateChange={(e) => {
                  return onMixedStateChange(
                    e.target.id,
                    `${multiSelect.id}-3`,
                    multiSelect.items
                  );
                }}
                onClear={() => {
                  onClear(`${multiSelect.id}-3`);
                }}
                onApply={() => {}}
              />
            ))}
        </MultiSelectGroup>
      </FilterBar>
      <FilterBar
        headingText="Clear All and Submit butttons - Column"
        selectedItems={selectedItems}
        isOpen={isModalOpen}
        onToggle={onToggle}
        onClear={onClearAll}
        onSubmit={() => null}
        layout="column"
        showClearAll={true}
        showSubmitAll={true}
      >
        <MultiSelectGroup
          showLabel={false}
          id="submit-button"
          labelText="Submit Button"
        >
          {multiSelectItems &&
            multiSelectItems.map((multiSelect) => (
              <MultiSelect
                key={`${multiSelect.id}-3`}
                id={`${multiSelect.id}-3`}
                label={multiSelect.name}
                variant="dialog"
                items={multiSelect.items}
                selectedItems={selectedItems}
                onChange={(e) => {
                  onChange(e.target.id, `${multiSelect.id}-3`);
                }}
                onMixedStateChange={(e) => {
                  return onMixedStateChange(
                    e.target.id,
                    `${multiSelect.id}-3`,
                    multiSelect.items
                  );
                }}
                onClear={() => {
                  onClear(`${multiSelect.id}-3`);
                }}
                onApply={() => {}}
              />
            ))}
        </MultiSelectGroup>
      </FilterBar>
    </VStack>
  );
};
