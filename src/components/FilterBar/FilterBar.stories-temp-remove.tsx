import { Box, useColorModeValue, VStack } from "@chakra-ui/react";
import { action } from "@storybook/addon-actions";
import type { Meta, StoryObj } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";
import { useEffect, useState } from "react";

import FilterBar from "./FilterBar";
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
      { id: "green", name: "Green" },
      { id: "purple", name: "Purple" },
      { id: "brown", name: "Brown" },
      { id: "gold", name: "Gold" },
      { id: "orange", name: "Orange" },
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
      {
        id: "hamster",
        name: "Hamster",
        children: [
          { id: "roborovski-dwarf-hamster", name: "Roborovski Dwarf Hamster" },
          { id: "golden-hamster", name: "Golden Hamster" },
          { id: "campells-dwarf-hamster", name: "Campell's Dwarf Hamster" },
          { id: "european-hamster", name: "European Hamster" },
          { id: "gansu-hamster", name: "Gansu Hamster" },
        ],
      },
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

const meta: Meta<typeof FilterBar> = {
  // The documentation for the FilterBar component will be removed until the
  // refactor of the v2 version of the FilterBar component has been completed.
  // To add the link for the FilterBar component back to the side bar, uncomment
  // the `title` attribute below.
  // title: "Components/Form Elements/FilterBar",
  component: FilterBar,
  decorators: [withDesign],
  argTypes: {
    children: { table: { disable: true } },
    id: { control: false },
    selectedItems: { control: false },
    showClearAll: {
      type: { name: "boolean", required: false },
      table: { defaultValue: { summary: "false" } },
    },
    showSubmitAll: {
      type: { name: "boolean", required: false },
      table: { defaultValue: { summary: "false" } },
      description:
        "If passed the `Apply Filters` button will render on desktop and tablet `boolean`",
    },
    onSubmit: {
      description:
        "Function to handle submit of all selectedItems - needs to be provided from consuming app",
    },
    onClear: {
      description:
        "Function to clear all selectedItems - available through hook",
    },
    onOpen: {
      contol: false,
      description:
        "Function to open the filter modal overlay on mobile viewport - available through hook",
    },
    onClose: {
      control: false,
      description:
        "Function to close the filter modal overlay on mobile viewport - available through hook",
    },
    onToggle: {
      control: false,
      description:
        "Function to toggle the filter modal overlay on mobile viewport - available through hook",
    },
  },
};

export default meta;
type Story = StoryObj<typeof FilterBar>;

/**
 * Main Story for the FilterBar component. This must contains the `args`
 * and `parameters` properties in this object.
 */
export const WithControls: Story = {
  args: {
    id: "filterbar-id",
    headingText: "FilterBar",
    layout: "row",
  },
  render: (args) => <FilterBarStory {...args} />,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Main?node-id=53603%3A41770&t=j06bIokU6KAF2JHN-0",
    },
    jest: ["FilterBar.test.tsx"],
  },
};

// The following are additional FilterBar example Stories.
export const LayoutPatterns: Story = {
  render: () => <FilterBarLayoutStory />,
};
export const UIContainers: Story = {
  render: () => <FilterBarRowContainerStory />,
  name: "UI Containers for Row Layout",
};
export const ColumnLayout: Story = {
  render: () => <FilterBarColumnContainerStory />,
  name: "UI Containers for Column Layout",
};

const FilterBarStory = (args) => {
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
  const [actionName, setActionName] = useState("");

  useEffect(() => {
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
        onSubmit: () => {
          return setActionName("onSubmit");
        },
      })}
      selectedItems={selectedItems}
      filterWidth={args.filterWidth}
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
              labelText={multiSelect.name}
              type="dialog"
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
const FilterBarLayoutStory = () => {
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
    <VStack align="stretch" spacing="l" key="filter-bar-layout-story">
      <FilterBar
        key="row-filter-bar"
        id="row-filter-bar"
        headingText="Row (default)"
        selectedItems={selectedItems}
        isOpen={isModalOpen}
        onToggle={onToggle}
        onClear={onClearAll}
      >
        <MultiSelectGroup
          showLabel={false}
          id="row"
          key="row"
          labelText="Row (default)"
        >
          {multiSelectItems &&
            multiSelectItems.map((multiSelect) => (
              <MultiSelect
                key={multiSelect.id}
                id={multiSelect.id}
                labelText={multiSelect.name}
                type="dialog"
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
        key="column-filter-bar"
        id="column-filter-bar"
        headingText="Column"
        layout="column"
        selectedItems={selectedItems}
        isOpen={isModalOpen}
        onToggle={onToggle}
        onClear={onClearAll}
      >
        <MultiSelectGroup
          showLabel={false}
          id="column"
          key="column"
          labelText="Column"
        >
          {multiSelectItems &&
            multiSelectItems.map((multiSelect) => (
              <MultiSelect
                key={`${multiSelect.id}-1`}
                id={`${multiSelect.id}-1`}
                labelText={multiSelect.name}
                type="dialog"
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
        headingText="Row Clear All Button"
        selectedItems={selectedItems}
        isOpen={isModalOpen}
        onToggle={onToggle}
        onClear={onClearAll}
        showClearAll
      >
        <MultiSelectGroup
          showLabel={false}
          id="row-clear-all"
          key="row-clear-all"
          labelText="Row with Clear All button"
        >
          {shortMultiSelectItems &&
            shortMultiSelectItems.map((multiSelect) => {
              return (
                <MultiSelect
                  key={`${multiSelect.id}-3`}
                  id={`${multiSelect.id}-3`}
                  labelText={multiSelect.name}
                  type="listbox"
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
        key="column-with-clear-all-button"
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
          id="column-clear-all"
          key="column-clear-all"
          labelText="Clear All"
        >
          {multiSelectItems &&
            multiSelectItems.map((multiSelect) => (
              <MultiSelect
                key={`${multiSelect.id}-2`}
                id={`${multiSelect.id}-2`}
                labelText={multiSelect.name}
                type="listbox"
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
          id="row-submit-button"
          key="row-submit-button"
          labelText="Submit Button"
        >
          {shortMultiSelectItems &&
            shortMultiSelectItems.map((multiSelect) => {
              return (
                <MultiSelect
                  key={`${multiSelect.id}-4`}
                  id={`${multiSelect.id}-4`}
                  labelText={multiSelect.name}
                  type="listbox"
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
        key="column-with-submit-button"
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
          id="column-submit-button"
          key="column-submit-button"
          labelText="Submit Button"
        >
          {multiSelectItems &&
            multiSelectItems.map((multiSelect) => (
              <MultiSelect
                key={`${multiSelect.id}-5`}
                id={`${multiSelect.id}-5`}
                labelText={multiSelect.name}
                type="listbox"
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
        key="row-with-buttons"
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
          id="row-all-buttons"
          key="row-all-buttons"
          labelText="Submit Button"
        >
          {shortMultiSelectItems &&
            shortMultiSelectItems.map((multiSelect) => {
              return (
                <MultiSelect
                  key={`${multiSelect.id}-6`}
                  id={`${multiSelect.id}-6`}
                  labelText={multiSelect.name}
                  type="listbox"
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
        key="column-with-buttons"
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
          id="column-all-buttons"
          key="column-all-buttons"
          labelText="Submit Button"
        >
          {multiSelectItems &&
            multiSelectItems.map((multiSelect) => (
              <MultiSelect
                key={`${multiSelect.id}-7`}
                id={`${multiSelect.id}-7`}
                labelText={multiSelect.name}
                type="listbox"
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
      <FilterBar
        key="column-multiple-multiselect-groups"
        id="column-multiple-multiselect-groups"
        headingText="Column with multiple MultiselectGroups"
        selectedItems={selectedItems}
        isOpen={isModalOpen}
        onToggle={onToggle}
        onClear={onClearAll}
        layout="column"
      >
        <MultiSelectGroup
          id="group-one"
          key="group-one-1"
          labelText="Group One"
        >
          {multiSelectItems &&
            multiSelectItems.map((multiSelect) => (
              <MultiSelect
                key={`${multiSelect.id}-8`}
                id={`${multiSelect.id}-8`}
                labelText={multiSelect.name}
                type="listbox"
                items={multiSelect.items}
                selectedItems={selectedItems}
                onChange={(e) => onChange(e.target.id, `${multiSelect.id}-8`)}
                onMixedStateChange={(e) => {
                  return onMixedStateChange(
                    e.target.id,
                    `${multiSelect.id}-8`,
                    multiSelect.items
                  );
                }}
                onClear={() => onClear(`${multiSelect.id}-8`)}
                onApply={() => {}}
              />
            ))}
        </MultiSelectGroup>
        <MultiSelectGroup
          id="group-two"
          key="group-two-1"
          labelText="Group Two"
        >
          {multiSelectItems &&
            multiSelectItems.map((multiSelect) => (
              <MultiSelect
                key={`${multiSelect.id}-9`}
                id={`${multiSelect.id}-9`}
                labelText={multiSelect.name}
                type="dialog"
                items={multiSelect.items}
                selectedItems={selectedItems}
                onChange={(e) => onChange(e.target.id, `${multiSelect.id}-9`)}
                onMixedStateChange={(e) => {
                  return onMixedStateChange(
                    e.target.id,
                    `${multiSelect.id}-9`,
                    multiSelect.items
                  );
                }}
                onClear={() => onClear(`${multiSelect.id}-9`)}
                onApply={() => {}}
              />
            ))}
        </MultiSelectGroup>
      </FilterBar>
      <FilterBar
        key="row-multiple-multiselect-groups"
        id="row-multiple-multiselect-groups"
        headingText="Row with multiple MultiselectGroups"
        selectedItems={selectedItems}
        isOpen={isModalOpen}
        onToggle={onToggle}
        onClear={onClearAll}
      >
        <MultiSelectGroup
          id="group-one"
          key="group-one-2"
          labelText="Group One"
        >
          {multiSelectItems &&
            multiSelectItems.map((multiSelect) => (
              <MultiSelect
                key={`${multiSelect.id}-14`}
                id={`${multiSelect.id}-14`}
                labelText={multiSelect.name}
                type="dialog"
                items={multiSelect.items}
                selectedItems={selectedItems}
                onChange={(e) => onChange(e.target.id, `${multiSelect.id}-14`)}
                onMixedStateChange={(e) => {
                  return onMixedStateChange(
                    e.target.id,
                    `${multiSelect.id}-14`,
                    multiSelect.items
                  );
                }}
                onClear={() => onClear(`${multiSelect.id}-14`)}
                onApply={() => {}}
              />
            ))}
        </MultiSelectGroup>
        <MultiSelectGroup
          id="group-two"
          key="group-two-2"
          labelText="Group Two"
        >
          {multiSelectItems &&
            multiSelectItems.map((multiSelect) => (
              <MultiSelect
                key={`${multiSelect.id}-15`}
                id={`${multiSelect.id}-15`}
                labelText={multiSelect.name}
                type="dialog"
                items={multiSelect.items}
                selectedItems={selectedItems}
                onChange={(e) => onChange(e.target.id, `${multiSelect.id}-15`)}
                onMixedStateChange={(e) => {
                  return onMixedStateChange(
                    e.target.id,
                    `${multiSelect.id}-15`,
                    multiSelect.items
                  );
                }}
                onClear={() => onClear(`${multiSelect.id}-15`)}
                onApply={() => {}}
              />
            ))}
        </MultiSelectGroup>
      </FilterBar>
      <FilterBar
        key="column-multiple-multiselect-groups-buttons"
        id="column-multiple-multiselect-groups-buttons"
        headingText="Column with multiple MultiselectGroups - with Buttons"
        selectedItems={selectedItems}
        isOpen={isModalOpen}
        onToggle={onToggle}
        onClear={onClearAll}
        onSubmit={() => null}
        showClearAll
        showSubmitAll
        layout="column"
      >
        <MultiSelectGroup
          id="group-one"
          key="group-one-3"
          labelText="Group One"
        >
          {multiSelectItems &&
            multiSelectItems.map((multiSelect) => (
              <MultiSelect
                key={`${multiSelect.id}-11`}
                id={`${multiSelect.id}-11`}
                labelText={multiSelect.name}
                type="listbox"
                items={multiSelect.items}
                selectedItems={selectedItems}
                onChange={(e) => onChange(e.target.id, `${multiSelect.id}-11`)}
                onMixedStateChange={(e) => {
                  return onMixedStateChange(
                    e.target.id,
                    `${multiSelect.id}-11`,
                    multiSelect.items
                  );
                }}
                onClear={() => onClear(`${multiSelect.id}-11`)}
                onApply={() => {}}
              />
            ))}
        </MultiSelectGroup>
        <MultiSelectGroup
          id="group-two"
          key="group-two-3"
          labelText="Group Two"
        >
          {multiSelectItems &&
            multiSelectItems.map((multiSelect) => (
              <MultiSelect
                key={`${multiSelect.id}-12`}
                id={`${multiSelect.id}-12`}
                labelText={multiSelect.name}
                type="listbox"
                items={multiSelect.items}
                selectedItems={selectedItems}
                onChange={(e) => onChange(e.target.id, `${multiSelect.id}-12`)}
                onMixedStateChange={(e) => {
                  return onMixedStateChange(
                    e.target.id,
                    `${multiSelect.id}-12`,
                    multiSelect.items
                  );
                }}
                onClear={() => onClear(`${multiSelect.id}-12`)}
                onApply={() => {}}
              />
            ))}
        </MultiSelectGroup>
      </FilterBar>
      <FilterBar
        key="row-multiple-multiselect-groups-buttons"
        id="row-multiple-multiselect-groups-buttons"
        headingText="Row with multiple MultiselectGroups - with Buttons"
        selectedItems={selectedItems}
        isOpen={isModalOpen}
        onToggle={onToggle}
        onClear={onClearAll}
        onSubmit={() => null}
        showClearAll
        showSubmitAll
      >
        <MultiSelectGroup
          id="group-one"
          key="group-one-4"
          labelText="Group One"
        >
          {multiSelectItems &&
            multiSelectItems.map((multiSelect) => (
              <MultiSelect
                key={`${multiSelect.id}-17`}
                id={`${multiSelect.id}-17`}
                labelText={multiSelect.name}
                type="listbox"
                items={multiSelect.items}
                selectedItems={selectedItems}
                onChange={(e) => onChange(e.target.id, `${multiSelect.id}-17`)}
                onMixedStateChange={(e) => {
                  return onMixedStateChange(
                    e.target.id,
                    `${multiSelect.id}-17`,
                    multiSelect.items
                  );
                }}
                onClear={() => onClear(`${multiSelect.id}-17`)}
                onApply={() => {}}
              />
            ))}
        </MultiSelectGroup>
        <MultiSelectGroup
          id="group-two"
          key="group-two-4"
          labelText="Group Two"
        >
          {multiSelectItems &&
            multiSelectItems.map((multiSelect) => (
              <MultiSelect
                key={`${multiSelect.id}-18`}
                id={`${multiSelect.id}-18`}
                labelText={multiSelect.name}
                type="listbox"
                items={multiSelect.items}
                selectedItems={selectedItems}
                onChange={(e) => onChange(e.target.id, `${multiSelect.id}-18`)}
                onMixedStateChange={(e) => {
                  return onMixedStateChange(
                    e.target.id,
                    `${multiSelect.id}-18`,
                    multiSelect.items
                  );
                }}
                onClear={() => onClear(`${multiSelect.id}-18`)}
                onApply={() => {}}
              />
            ))}
        </MultiSelectGroup>
      </FilterBar>
    </VStack>
  );
};

const FilterBarRowContainerStory = () => {
  const {
    onChange,
    onMixedStateChange,
    selectedItems,
    onClear,
    onClearAll,
    isModalOpen,
    onToggle,
  } = useFilterBar();
  const containerBgColor = useColorModeValue(
    "ui.bg.default",
    "dark.ui.bg.default"
  );
  return (
    <VStack align="stretch" spacing="l" key="filter-bar-row-container-story">
      <Box bg={containerBgColor} p="inset.wide">
        <FilterBar
          key="row-with-buttons"
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
            id="row-all-buttons"
            key="row-all-buttons"
            labelText="Submit Button"
          >
            {shortMultiSelectItems &&
              shortMultiSelectItems.map((multiSelect) => {
                return (
                  <MultiSelect
                    key={`${multiSelect.id}-6`}
                    id={`${multiSelect.id}-6`}
                    labelText={multiSelect.name}
                    type="listbox"
                    items={multiSelect.items}
                    selectedItems={selectedItems}
                    onChange={(e) =>
                      onChange(e.target.id, `${multiSelect.id}-6`)
                    }
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
      </Box>
      <Box bg={containerBgColor} p="inset.wide">
        <FilterBar
          key="row-multiple-multiselect-groups-buttons"
          id="row-multiple-multiselect-groups-buttons"
          headingText="Row with multiple MultiselectGroups - with Buttons"
          selectedItems={selectedItems}
          isOpen={isModalOpen}
          onToggle={onToggle}
          onClear={onClearAll}
          onSubmit={() => null}
          showClearAll
          showSubmitAll
        >
          <MultiSelectGroup
            id="group-one"
            key="group-one-4"
            labelText="Group One"
          >
            {multiSelectItems &&
              multiSelectItems.map((multiSelect) => (
                <MultiSelect
                  key={`${multiSelect.id}-17`}
                  id={`${multiSelect.id}-17`}
                  labelText={multiSelect.name}
                  type="listbox"
                  items={multiSelect.items}
                  selectedItems={selectedItems}
                  onChange={(e) =>
                    onChange(e.target.id, `${multiSelect.id}-17`)
                  }
                  onMixedStateChange={(e) => {
                    return onMixedStateChange(
                      e.target.id,
                      `${multiSelect.id}-17`,
                      multiSelect.items
                    );
                  }}
                  onClear={() => onClear(`${multiSelect.id}-17`)}
                  onApply={() => {}}
                />
              ))}
          </MultiSelectGroup>
          <MultiSelectGroup
            id="group-two"
            key="group-two-4"
            labelText="Group Two"
          >
            {multiSelectItems &&
              multiSelectItems.map((multiSelect) => (
                <MultiSelect
                  key={`${multiSelect.id}-18`}
                  id={`${multiSelect.id}-18`}
                  labelText={multiSelect.name}
                  type="listbox"
                  items={multiSelect.items}
                  selectedItems={selectedItems}
                  onChange={(e) =>
                    onChange(e.target.id, `${multiSelect.id}-18`)
                  }
                  onMixedStateChange={(e) => {
                    return onMixedStateChange(
                      e.target.id,
                      `${multiSelect.id}-18`,
                      multiSelect.items
                    );
                  }}
                  onClear={() => onClear(`${multiSelect.id}-18`)}
                  onApply={() => {}}
                />
              ))}
          </MultiSelectGroup>
        </FilterBar>
      </Box>
    </VStack>
  );
};

const FilterBarColumnContainerStory = () => {
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
    <VStack align="stretch" spacing="l" key="filter-bar-column-container-story">
      <Box bg="ui.bg.default" p="inset.default" width="255px">
        <FilterBar
          key="column-with-buttons"
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
            id="column-all-buttons"
            key="column-all-buttons"
            labelText="Submit Button"
          >
            {multiSelectItems &&
              multiSelectItems.map((multiSelect) => (
                <MultiSelect
                  key={`${multiSelect.id}-7`}
                  id={`${multiSelect.id}-7`}
                  labelText={multiSelect.name}
                  type="listbox"
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
      </Box>
      <Box bg="ui.bg.default" p="inset.default" width="255px">
        <FilterBar
          key="column-multiple-multiselect-groups-buttons"
          id="column-multiple-multiselect-groups-buttons"
          headingText="Column with multiple MultiselectGroups - with Buttons"
          selectedItems={selectedItems}
          isOpen={isModalOpen}
          onToggle={onToggle}
          onClear={onClearAll}
          onSubmit={() => null}
          showClearAll
          showSubmitAll
          layout="column"
        >
          <MultiSelectGroup
            id="group-one"
            key="group-one-3"
            labelText="Group One"
          >
            {multiSelectItems &&
              multiSelectItems.map((multiSelect) => (
                <MultiSelect
                  key={`${multiSelect.id}-11`}
                  id={`${multiSelect.id}-11`}
                  labelText={multiSelect.name}
                  type="listbox"
                  items={multiSelect.items}
                  selectedItems={selectedItems}
                  onChange={(e) =>
                    onChange(e.target.id, `${multiSelect.id}-11`)
                  }
                  onMixedStateChange={(e) => {
                    return onMixedStateChange(
                      e.target.id,
                      `${multiSelect.id}-11`,
                      multiSelect.items
                    );
                  }}
                  onClear={() => onClear(`${multiSelect.id}-11`)}
                  onApply={() => {}}
                />
              ))}
          </MultiSelectGroup>
          <MultiSelectGroup
            id="group-two"
            key="group-two-3"
            labelText="Group Two"
          >
            {multiSelectItems &&
              multiSelectItems.map((multiSelect) => (
                <MultiSelect
                  key={`${multiSelect.id}-12`}
                  id={`${multiSelect.id}-12`}
                  labelText={multiSelect.name}
                  type="listbox"
                  items={multiSelect.items}
                  selectedItems={selectedItems}
                  onChange={(e) =>
                    onChange(e.target.id, `${multiSelect.id}-12`)
                  }
                  onMixedStateChange={(e) => {
                    return onMixedStateChange(
                      e.target.id,
                      `${multiSelect.id}-12`,
                      multiSelect.items
                    );
                  }}
                  onClear={() => onClear(`${multiSelect.id}-12`)}
                  onApply={() => {}}
                />
              ))}
          </MultiSelectGroup>
        </FilterBar>
      </Box>
    </VStack>
  );
};
