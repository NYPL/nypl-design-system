import { action } from "@storybook/addon-actions";
import React from "react";
import { Story } from "@storybook/react/types-6-0";
import { VStack } from "@chakra-ui/react";

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
const shortMultiSelectItems = [...multiSelectItems];
shortMultiSelectItems.pop();

export const FilterBarStory: Story<FilterBarProps> = (args) => {
  const {
    onChange,
    onMixedStateChange,
    selectedItems,
    onClear,
    onClearAll,
    isModalOpen,
    onOpen,
    onClose,
  } = useFilterBar();

  // Hack to get storybook's action tab to log state change when selectedItems state changes.
  const [actionName, setActionName] = React.useState("");

  React.useEffect(() => {
    if (
      actionName === "onClose" ||
      actionName === "onOpen" ||
      actionName === "onToggle"
    ) {
      action(actionName)(isModalOpen);
    } else if (actionName) {
      action(actionName)(selectedItems);
    }
  }, [actionName, selectedItems, isModalOpen]);

  return (
    <FilterBar
      id={args.id}
      headingText={args.headingText}
      layout={args.layout}
      isOpen={isModalOpen}
      showClearAll={args.showClearAll}
      showSubmitAll={args.showSubmitAll}
      onOpen={() => {
        onOpen();
        return setActionName("onOpen");
      }}
      onClose={() => {
        onClose();
        return setActionName("onClose");
      }}
      {...(args.showClearAll && {
        onClear: () => {
          onClearAll();
          return setActionName("onClearAll");
        },
      })}
      {...(args.showSubmitAll && {
        onSubmit: () => setActionName("onSubmit"),
      })}
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
                return setActionName("onChange");
              }}
              onMixedStateChange={(e) => {
                onMixedStateChange(
                  e.target.id,
                  multiSelect.id,
                  multiSelect.items
                );
                return setActionName("onMixedStateChange");
              }}
              onClear={() => {
                onClear(multiSelect.id);
                return setActionName("onClear");
              }}
              onApply={() => setActionName("onApply")}
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
        id="row-filter-bar"
        headingText="Row (default)"
        selectedItems={selectedItems}
        isOpen={isModalOpen}
        onToggle={onToggle}
        onClear={onClearAll}
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
                onChange={(e) => onChange(e.target.id, multiSelect.id)}
                onMixedStateChange={(e) => {
                  return onMixedStateChange(
                    e.target.id,
                    multiSelect.id,
                    multiSelect.items
                  );
                }}
                onClear={() => onClear(multiSelect.id)}
                onApply={() => {}}
              />
            ))}
        </MultiSelectGroup>
      </FilterBar>
      <FilterBar
        id="column-filter-bar"
        headingText="Column"
        layout="column"
        selectedItems={selectedItems}
        isOpen={isModalOpen}
        onToggle={onToggle}
        onClear={onClearAll}
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
                onChange={(e) => onChange(e.target.id, `${multiSelect.id}-1`)}
                onMixedStateChange={(e) => {
                  return onMixedStateChange(
                    e.target.id,
                    `${multiSelect.id}-1`,
                    multiSelect.items
                  );
                }}
                onClear={() => onClear(`${multiSelect.id}-1`)}
                onApply={() => {}}
              />
            ))}
        </MultiSelectGroup>
      </FilterBar>
      <FilterBar
        id="row-with-clear-all-button"
        headingText="Clear All Button"
        selectedItems={selectedItems}
        isOpen={isModalOpen}
        onToggle={onToggle}
        onClear={onClearAll}
        showClearAll
      >
        <MultiSelectGroup
          showLabel={false}
          id="clear-all"
          labelText="Row with Clear All button"
        >
          {shortMultiSelectItems &&
            shortMultiSelectItems.map((multiSelect) => {
              return (
                <MultiSelect
                  key={`${multiSelect.id}-3`}
                  id={`${multiSelect.id}-3`}
                  label={multiSelect.name}
                  variant="dialog"
                  items={multiSelect.items}
                  selectedItems={selectedItems}
                  onChange={(e) => onChange(e.target.id, `${multiSelect.id}-3`)}
                  onMixedStateChange={(e) => {
                    return onMixedStateChange(
                      e.target.id,
                      `${multiSelect.id}-3`,
                      multiSelect.items
                    );
                  }}
                  onClear={() => onClear(`${multiSelect.id}-3`)}
                  onApply={() => {}}
                />
              );
            })}
        </MultiSelectGroup>
      </FilterBar>
      <FilterBar
        id="column-with-clear-all-button"
        headingText="Column with Clear All button"
        selectedItems={selectedItems}
        isOpen={isModalOpen}
        onToggle={onToggle}
        onClear={onClearAll}
        layout="column"
        showClearAll
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
                onChange={(e) => onChange(e.target.id, `${multiSelect.id}-2`)}
                onMixedStateChange={(e) => {
                  return onMixedStateChange(
                    e.target.id,
                    `${multiSelect.id}-2`,
                    multiSelect.items
                  );
                }}
                onClear={() => onClear(`${multiSelect.id}-2`)}
                onApply={() => {}}
              />
            ))}
        </MultiSelectGroup>
      </FilterBar>
      <FilterBar
        id="row-with-submit-button"
        headingText="Row with Submit button"
        selectedItems={selectedItems}
        isOpen={isModalOpen}
        onToggle={onToggle}
        onClear={onClearAll}
        onSubmit={() => null}
        showSubmitAll
      >
        <MultiSelectGroup
          showLabel={false}
          id="submit-button"
          labelText="Submit Button"
        >
          {shortMultiSelectItems &&
            shortMultiSelectItems.map((multiSelect) => {
              return (
                <MultiSelect
                  key={`${multiSelect.id}-4`}
                  id={`${multiSelect.id}-4`}
                  label={multiSelect.name}
                  variant="dialog"
                  items={multiSelect.items}
                  selectedItems={selectedItems}
                  onChange={(e) => onChange(e.target.id, `${multiSelect.id}-4`)}
                  onMixedStateChange={(e) => {
                    return onMixedStateChange(
                      e.target.id,
                      `${multiSelect.id}-4`,
                      multiSelect.items
                    );
                  }}
                  onClear={() => onClear(`${multiSelect.id}-4`)}
                  onApply={() => {}}
                />
              );
            })}
        </MultiSelectGroup>
      </FilterBar>
      <FilterBar
        id="column-with-submit-button"
        headingText="Column with Submit button"
        selectedItems={selectedItems}
        isOpen={isModalOpen}
        onToggle={onToggle}
        onClear={onClearAll}
        layout="column"
        onSubmit={() => null}
        showSubmitAll
      >
        <MultiSelectGroup
          showLabel={false}
          id="submit-button"
          labelText="Submit Button"
        >
          {multiSelectItems &&
            multiSelectItems.map((multiSelect) => (
              <MultiSelect
                key={`${multiSelect.id}-5`}
                id={`${multiSelect.id}-5`}
                label={multiSelect.name}
                variant="dialog"
                items={multiSelect.items}
                selectedItems={selectedItems}
                onChange={(e) => onChange(e.target.id, `${multiSelect.id}-5`)}
                onMixedStateChange={(e) => {
                  return onMixedStateChange(
                    e.target.id,
                    `${multiSelect.id}-5`,
                    multiSelect.items
                  );
                }}
                onClear={() => onClear(`${multiSelect.id}-5`)}
                onApply={() => {}}
              />
            ))}
        </MultiSelectGroup>
      </FilterBar>
      <FilterBar
        id="row-with-buttons"
        headingText="Row with Clear All and Submit butttons"
        selectedItems={selectedItems}
        isOpen={isModalOpen}
        onToggle={onToggle}
        onClear={onClearAll}
        onSubmit={() => null}
        showClearAll
        showSubmitAll
      >
        <MultiSelectGroup
          showLabel={false}
          id="submit-button"
          labelText="Submit Button"
        >
          {shortMultiSelectItems &&
            shortMultiSelectItems.map((multiSelect) => {
              return (
                <MultiSelect
                  key={`${multiSelect.id}-6`}
                  id={`${multiSelect.id}-6`}
                  label={multiSelect.name}
                  variant="dialog"
                  items={multiSelect.items}
                  selectedItems={selectedItems}
                  onChange={(e) => onChange(e.target.id, `${multiSelect.id}-6`)}
                  onMixedStateChange={(e) => {
                    return onMixedStateChange(
                      e.target.id,
                      `${multiSelect.id}-6`,
                      multiSelect.items
                    );
                  }}
                  onClear={() => onClear(`${multiSelect.id}-6`)}
                  onApply={() => {}}
                />
              );
            })}
        </MultiSelectGroup>
      </FilterBar>
      <FilterBar
        id="column-with-buttons"
        headingText="Column with Clear All and Submit butttons"
        selectedItems={selectedItems}
        isOpen={isModalOpen}
        onToggle={onToggle}
        onClear={onClearAll}
        onSubmit={() => null}
        layout="column"
        showClearAll
        showSubmitAll
      >
        <MultiSelectGroup
          showLabel={false}
          id="submit-button"
          labelText="Submit Button"
        >
          {multiSelectItems &&
            multiSelectItems.map((multiSelect) => (
              <MultiSelect
                key={`${multiSelect.id}-7`}
                id={`${multiSelect.id}-7`}
                label={multiSelect.name}
                variant="dialog"
                items={multiSelect.items}
                selectedItems={selectedItems}
                onChange={(e) => onChange(e.target.id, `${multiSelect.id}-7`)}
                onMixedStateChange={(e) => {
                  return onMixedStateChange(
                    e.target.id,
                    `${multiSelect.id}-7`,
                    multiSelect.items
                  );
                }}
                onClear={() => onClear(`${multiSelect.id}-7`)}
                onApply={() => {}}
              />
            ))}
        </MultiSelectGroup>
      </FilterBar>
    </VStack>
  );
};
