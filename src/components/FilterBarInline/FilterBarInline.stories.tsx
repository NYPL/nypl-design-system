import type { Meta, StoryObj } from "@storybook/react";

import FilterBarInline from "./FilterBarInline";
import MultiSelect from "../MultiSelect/MultiSelect";
import MultiSelectGroup from "../MultiSelectGroup/MultiSelectGroup";
import Checkbox from "../Checkbox/Checkbox";
import CheckboxGroup from "../CheckboxGroup/CheckboxGroup";
import { useEffect, useState } from "react";
import { layoutTypesArray } from "../../helpers/types";
import useMultiSelect from "../../hooks/useMultiSelect";
import { Box, useColorModeValue, VStack } from "@chakra-ui/react";
import TextInput from "../TextInput/TextInput";
import Heading from "../Heading/Heading";
import TagSet from "../TagSet/TagSet";
import { TagSetFilterDataProps } from "../TagSet/TagSetFilter";

const multiSelectItems = [
  {
    id: "boroughs",
    name: "Boroughs",
    items: [
      { id: "bronx", name: "Bronx" },
      { id: "manhattan", name: "Manhattan" },
      { id: "staten-island", name: "Staten Island" },
    ],
  },
  {
    id: "accessibility",
    name: "Accessibility",
    items: [
      { id: "fully", name: "Fully accessible" },
      { id: "partially", name: "Partially accessible" },
      { id: "not", name: "Not accessible" },
    ],
  },
  {
    id: "subjects",
    name: "Subjects",
    items: [
      {
        id: "art",
        name: "Art",
        children: [
          { id: "architecture", name: "Architecture" },
          { id: "art-history", name: "Art History" },
          { id: "artists-books", name: "Artists' Books" },
          { id: "photography", name: "Photography" },
          { id: "prints", name: "Prints" },
        ],
      },
      { id: "genealogy", name: "Genealogy" },
      { id: "government", name: "Government" },
      {
        id: "history",
        name: "History",
        children: [
          { id: "african-american", name: "African American History" },
          { id: "united-states", name: "United States History" },
          { id: "world", name: "World History" },
        ],
      },
    ],
  },
];
const shortMultiSelectItems = [...multiSelectItems];
shortMultiSelectItems.pop();

const meta: Meta<typeof FilterBarInline> = {
  title: "Components/Form Elements/FilterBarInline",
  component: FilterBarInline,
  argTypes: {
    className: { control: false },
    id: { control: false },
    heading: { control: false },
    layout: {
      control: { type: "radio" },
      options: layoutTypesArray,
      table: { defaultValue: { summary: "row" } },
    },
    onClear: {
      description:
        "Function to clear all selectedItems - needs to be provided by consuming app",
    },
    onSubmit: {
      description:
        "Function to handle submit of all selectedItems - needs to be provided by consuming app",
    },
    selectedItems: { control: false },
  },
};

export default meta;
type Story = StoryObj<typeof FilterBarInline>;

/**
 * Main Story for the FilterBarInline component. This must contains the `args`
 * and `parameters` properties in this object.
 */
export const WithControls: Story = {
  args: {
    id: "filterbar-inline-id",
    heading: "FilterBarInline",
    layout: "row",
  },
  render: (args) => <FilterBarStory {...args} />,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Main?node-id=87515-95820",
    },
    jest: ["FilterBarInline.test.tsx"],
  },
};

// The following are additional FilterBar example Stories.
export const FilterBarInlineHeading: Story = {
  render: () => <FilterBarInlineHeadingStory />,
};
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
export const MultipleChildren: Story = {
  render: () => <FilterBarChildrenStory />,
};
export const TagSetExample: Story = {
  render: () => <FilterBarTagSetStory />,
};

const FilterBarStory = (args) => {
  const { onChange, onMixedStateChange, selectedItems, onClear, onClearAll } =
    useMultiSelect();
  const selectedFilterItems = [selectedItems];

  const renderMultiSelect = ({ isBlockElement, multiSelectWidth }) => {
    return (
      multiSelectItems &&
      multiSelectItems.map((multiSelect) => (
        <MultiSelect
          buttonText={multiSelect.name}
          key={multiSelect.id}
          id={multiSelect.id}
          items={multiSelect.items}
          selectedItems={selectedItems}
          isBlockElement={isBlockElement}
          onChange={(e) => onChange(e.target.id, multiSelect.id)}
          onMixedStateChange={(e) => {
            return onMixedStateChange(
              e.target.id,
              multiSelect.id,
              multiSelect.items
            );
          }}
          onClear={() => onClear(multiSelect.id)}
          width={multiSelectWidth}
          closeOnBlur
        />
      ))
    );
  };

  const renderFilterComponents = ({ layout, width }) => {
    return (
      <MultiSelectGroup
        id="multiselect-group"
        labelText="MultiSelect Group"
        layout={layout}
        multiSelectWidth={width}
        renderMultiSelect={renderMultiSelect}
      />
    );
  };

  return (
    <FilterBarInline
      id={args.id}
      heading={args.heading}
      layout={args.layout}
      onClear={onClearAll}
      onSubmit={() => console.log(selectedItems)}
      selectedItems={selectedFilterItems}
      renderChildren={renderFilterComponents}
    />
  );
};

const FilterBarInlineHeadingStory = () => {
  const { onChange, onMixedStateChange, selectedItems, onClear } =
    useMultiSelect();

  const renderMultiSelect = ({ isBlockElement, multiSelectWidth }) => {
    return (
      multiSelectItems &&
      multiSelectItems.map((multiSelect) => (
        <MultiSelect
          buttonText={multiSelect.name}
          key={multiSelect.id}
          id={multiSelect.id}
          items={multiSelect.items}
          selectedItems={selectedItems}
          isBlockElement={isBlockElement}
          onChange={(e) => onChange(e.target.id, multiSelect.id)}
          onMixedStateChange={(e) => {
            return onMixedStateChange(
              e.target.id,
              multiSelect.id,
              multiSelect.items
            );
          }}
          onClear={() => onClear(multiSelect.id)}
          width={multiSelectWidth}
        />
      ))
    );
  };

  const renderFilterComponents = ({ layout, width }) => {
    return (
      <MultiSelectGroup
        id="multiselect-group"
        labelText="MultiSelect Group"
        layout={layout}
        multiSelectWidth={width}
        renderMultiSelect={renderMultiSelect}
      />
    );
  };

  return (
    <VStack align="left">
      <FilterBarInline
        heading={<Heading level="h3">Custom H3 Heading</Heading>}
        renderChildren={renderFilterComponents}
      />
      <FilterBarInline
        heading={<Heading level="h5">Custom H5 Heading</Heading>}
        renderChildren={renderFilterComponents}
      />
      <FilterBarInline renderChildren={renderFilterComponents} />
    </VStack>
  );
};

const FilterBarLayoutStory = () => {
  const { onChange, onMixedStateChange, selectedItems, onClear, onClearAll } =
    useMultiSelect();
  const [selectedCheckbox, setSelectedCheckbox] = useState([]);
  const [selectedCheckbox2, setSelectedCheckbox2] = useState([]);
  const selectedFilterItems = [selectedItems];
  return (
    <VStack align="stretch" spacing="l">
      <FilterBarInline
        id="row-filter-bar"
        heading="Row (default)"
        selectedItems={selectedFilterItems}
        renderChildren={({ layout, width }) => {
          return (
            <MultiSelectGroup
              showLabel={false}
              id="row"
              labelText="Row (default)"
              layout={layout}
              multiSelectWidth={width}
              renderMultiSelect={({ isBlockElement, multiSelectWidth }) => {
                return (
                  multiSelectItems &&
                  multiSelectItems.map((multiSelect) => (
                    <MultiSelect
                      key={multiSelect.id}
                      id={multiSelect.id}
                      buttonText={multiSelect.name}
                      isBlockElement={isBlockElement}
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
                      width={multiSelectWidth}
                    />
                  ))
                );
              }}
            />
          );
        }}
      />
      <FilterBarInline
        id="column-filter-bar"
        heading="Column"
        layout="column"
        selectedItems={selectedFilterItems}
        renderChildren={({ layout, width }) => {
          return (
            <MultiSelectGroup
              showLabel={false}
              id="column"
              labelText="Column"
              layout={layout}
              multiSelectWidth={width}
              renderMultiSelect={({ isBlockElement, multiSelectWidth }) => {
                return (
                  multiSelectItems &&
                  multiSelectItems.map((multiSelect) => (
                    <MultiSelect
                      key={`${multiSelect.id}-1`}
                      id={`${multiSelect.id}-1`}
                      buttonText={multiSelect.name}
                      isBlockElement={isBlockElement}
                      items={multiSelect.items}
                      selectedItems={selectedItems}
                      onChange={(e) =>
                        onChange(e.target.id, `${multiSelect.id}-1`)
                      }
                      onMixedStateChange={(e) => {
                        return onMixedStateChange(
                          e.target.id,
                          `${multiSelect.id}-1`,
                          multiSelect.items
                        );
                      }}
                      onClear={() => onClear(`${multiSelect.id}-1`)}
                      width={multiSelectWidth}
                    />
                  ))
                );
              }}
            />
          );
        }}
      />
      <FilterBarInline
        id="row-with-clear-all-button"
        heading="Row Clear All Button"
        selectedItems={selectedFilterItems}
        onClear={onClearAll}
        renderChildren={({ layout, width }) => {
          return (
            <MultiSelectGroup
              showLabel={false}
              id="row-clear-all"
              labelText="Row with Clear All button"
              layout={layout}
              multiSelectWidth={width}
              renderMultiSelect={({ isBlockElement, multiSelectWidth }) => {
                return (
                  shortMultiSelectItems &&
                  shortMultiSelectItems.map((multiSelect) => {
                    return (
                      <MultiSelect
                        key={`${multiSelect.id}-3`}
                        id={`${multiSelect.id}-3`}
                        buttonText={multiSelect.name}
                        isBlockElement={isBlockElement}
                        items={multiSelect.items}
                        selectedItems={selectedItems}
                        onChange={(e) =>
                          onChange(e.target.id, `${multiSelect.id}-3`)
                        }
                        onMixedStateChange={(e) => {
                          return onMixedStateChange(
                            e.target.id,
                            `${multiSelect.id}-3`,
                            multiSelect.items
                          );
                        }}
                        onClear={() => onClear(`${multiSelect.id}-3`)}
                        width={multiSelectWidth}
                      />
                    );
                  })
                );
              }}
            />
          );
        }}
      />
      <FilterBarInline
        id="column-with-clear-all-button"
        heading="Column with Clear All button"
        selectedItems={selectedFilterItems}
        layout="column"
        onClear={onClearAll}
        renderChildren={({ layout, width }) => {
          return (
            <MultiSelectGroup
              showLabel={false}
              id="column-clear-all"
              labelText="Column with Clear All"
              layout={layout}
              multiSelectWidth={width}
              renderMultiSelect={({ isBlockElement, multiSelectWidth }) => {
                return (
                  multiSelectItems &&
                  multiSelectItems.map((multiSelect) => (
                    <MultiSelect
                      key={`${multiSelect.id}-2`}
                      id={`${multiSelect.id}-2`}
                      buttonText={multiSelect.name}
                      isBlockElement={isBlockElement}
                      items={multiSelect.items}
                      selectedItems={selectedItems}
                      onChange={(e) =>
                        onChange(e.target.id, `${multiSelect.id}-2`)
                      }
                      onMixedStateChange={(e) => {
                        return onMixedStateChange(
                          e.target.id,
                          `${multiSelect.id}-2`,
                          multiSelect.items
                        );
                      }}
                      onClear={() => onClear(`${multiSelect.id}-2`)}
                      width={multiSelectWidth}
                    />
                  ))
                );
              }}
            />
          );
        }}
      />
      <FilterBarInline
        id="row-with-submit-button"
        heading="Row with Submit button"
        selectedItems={selectedFilterItems}
        onSubmit={() => null}
        renderChildren={({ layout, width }) => {
          return (
            <MultiSelectGroup
              showLabel={false}
              id="row-submit-button"
              labelText="Row with Submit Button"
              layout={layout}
              multiSelectWidth={width}
              renderMultiSelect={({ isBlockElement, multiSelectWidth }) => {
                return (
                  shortMultiSelectItems &&
                  shortMultiSelectItems.map((multiSelect) => {
                    return (
                      <MultiSelect
                        key={`${multiSelect.id}-4`}
                        id={`${multiSelect.id}-4`}
                        buttonText={multiSelect.name}
                        isBlockElement={isBlockElement}
                        items={multiSelect.items}
                        selectedItems={selectedItems}
                        onChange={(e) =>
                          onChange(e.target.id, `${multiSelect.id}-4`)
                        }
                        onMixedStateChange={(e) => {
                          return onMixedStateChange(
                            e.target.id,
                            `${multiSelect.id}-4`,
                            multiSelect.items
                          );
                        }}
                        onClear={() => onClear(`${multiSelect.id}-4`)}
                        width={multiSelectWidth}
                      />
                    );
                  })
                );
              }}
            />
          );
        }}
      />
      <FilterBarInline
        id="column-with-submit-button"
        heading="Column with Submit button"
        selectedItems={selectedFilterItems}
        layout="column"
        onSubmit={() => null}
        renderChildren={({ layout, width }) => {
          return (
            <MultiSelectGroup
              showLabel={false}
              id="column-submit-button"
              labelText="Column with Submit Button"
              layout={layout}
              multiSelectWidth={width}
              renderMultiSelect={({ isBlockElement, multiSelectWidth }) => {
                return (
                  multiSelectItems &&
                  multiSelectItems.map((multiSelect) => (
                    <MultiSelect
                      key={`${multiSelect.id}-5`}
                      id={`${multiSelect.id}-5`}
                      buttonText={multiSelect.name}
                      isBlockElement={isBlockElement}
                      items={multiSelect.items}
                      selectedItems={selectedItems}
                      onChange={(e) =>
                        onChange(e.target.id, `${multiSelect.id}-5`)
                      }
                      onMixedStateChange={(e) => {
                        return onMixedStateChange(
                          e.target.id,
                          `${multiSelect.id}-5`,
                          multiSelect.items
                        );
                      }}
                      onClear={() => onClear(`${multiSelect.id}-5`)}
                      width={multiSelectWidth}
                    />
                  ))
                );
              }}
            />
          );
        }}
      />

      <FilterBarInline
        id="row-with-buttons"
        heading="Row with Clear All and Submit butttons"
        selectedItems={selectedFilterItems}
        onClear={onClearAll}
        onSubmit={() => null}
        renderChildren={({ layout, width }) => {
          return (
            <MultiSelectGroup
              showLabel={false}
              id="row-all-buttons"
              labelText="Row with Clear All and Submit Buttons"
              layout={layout}
              multiSelectWidth={width}
              renderMultiSelect={({ isBlockElement, multiSelectWidth }) => {
                return (
                  multiSelectItems &&
                  multiSelectItems.map((multiSelect) => (
                    <MultiSelect
                      key={`${multiSelect.id}-6`}
                      id={`${multiSelect.id}-6`}
                      buttonText={multiSelect.name}
                      isBlockElement={isBlockElement}
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
                      width={multiSelectWidth}
                    />
                  ))
                );
              }}
            />
          );
        }}
      />
      <FilterBarInline
        id="column-with-buttons"
        heading="Column with Clear All and Submit butttons"
        selectedItems={selectedFilterItems}
        layout="column"
        onClear={onClearAll}
        onSubmit={() => null}
        renderChildren={({ layout, width }) => {
          return (
            <MultiSelectGroup
              showLabel={false}
              id="column-all-buttons"
              labelText="Column with Clear All and Submit Buttons"
              layout={layout}
              multiSelectWidth={width}
              renderMultiSelect={({ isBlockElement, multiSelectWidth }) => {
                return (
                  multiSelectItems &&
                  multiSelectItems.map((multiSelect) => (
                    <MultiSelect
                      key={`${multiSelect.id}-7`}
                      id={`${multiSelect.id}-7`}
                      buttonText={multiSelect.name}
                      isBlockElement={isBlockElement}
                      items={multiSelect.items}
                      selectedItems={selectedItems}
                      onChange={(e) =>
                        onChange(e.target.id, `${multiSelect.id}-7`)
                      }
                      onMixedStateChange={(e) => {
                        return onMixedStateChange(
                          e.target.id,
                          `${multiSelect.id}-6`,
                          multiSelect.items
                        );
                      }}
                      onClear={() => onClear(`${multiSelect.id}-7`)}
                      width={multiSelectWidth}
                    />
                  ))
                );
              }}
            />
          );
        }}
      />
      <FilterBarInline
        id="column-multiple-multiselect-groups"
        heading="Column with multiple MultiselectGroups"
        selectedItems={selectedFilterItems}
        onClear={onClearAll}
        layout="column"
        renderChildren={({ layout, width }) => {
          return (
            <>
              <MultiSelectGroup
                id="group-one"
                labelText="Group One"
                layout={layout}
                multiSelectWidth={width}
                renderMultiSelect={({ isBlockElement, multiSelectWidth }) => {
                  return (
                    multiSelectItems &&
                    multiSelectItems.map((multiSelect) => (
                      <MultiSelect
                        key={`${multiSelect.id}-8`}
                        id={`${multiSelect.id}-8`}
                        buttonText={multiSelect.name}
                        isBlockElement={isBlockElement}
                        items={multiSelect.items}
                        selectedItems={selectedItems}
                        onChange={(e) =>
                          onChange(e.target.id, `${multiSelect.id}-8`)
                        }
                        onMixedStateChange={(e) => {
                          return onMixedStateChange(
                            e.target.id,
                            `${multiSelect.id}-8`,
                            multiSelect.items
                          );
                        }}
                        onClear={() => onClear(`${multiSelect.id}-8`)}
                        width={multiSelectWidth}
                      />
                    ))
                  );
                }}
              />
              <MultiSelectGroup
                id="group-two"
                labelText="Group Two"
                layout={layout}
                multiSelectWidth={width}
                renderMultiSelect={({ isBlockElement, multiSelectWidth }) => {
                  return (
                    multiSelectItems &&
                    multiSelectItems.map((multiSelect) => (
                      <MultiSelect
                        key={`${multiSelect.id}-9`}
                        id={`${multiSelect.id}-9`}
                        buttonText={multiSelect.name}
                        isBlockElement={isBlockElement}
                        items={multiSelect.items}
                        selectedItems={selectedItems}
                        onChange={(e) =>
                          onChange(e.target.id, `${multiSelect.id}-9`)
                        }
                        onMixedStateChange={(e) => {
                          return onMixedStateChange(
                            e.target.id,
                            `${multiSelect.id}-9`,
                            multiSelect.items
                          );
                        }}
                        onClear={() => onClear(`${multiSelect.id}-9`)}
                        width={multiSelectWidth}
                      />
                    ))
                  );
                }}
              />
            </>
          );
        }}
      />
      <FilterBarInline
        id="row-multiple-multiselect-groups"
        heading="Row with multiple MultiselectGroups"
        selectedItems={selectedFilterItems}
        onClear={onClearAll}
        renderChildren={({ layout, width }) => {
          return (
            <>
              <MultiSelectGroup
                id="group-one"
                labelText="Group One"
                layout={layout}
                multiSelectWidth={width}
                renderMultiSelect={({ isBlockElement, multiSelectWidth }) => {
                  return (
                    multiSelectItems &&
                    multiSelectItems.map((multiSelect) => (
                      <MultiSelect
                        key={`${multiSelect.id}-14`}
                        id={`${multiSelect.id}-14`}
                        buttonText={multiSelect.name}
                        isBlockElement={isBlockElement}
                        items={multiSelect.items}
                        selectedItems={selectedItems}
                        onChange={(e) =>
                          onChange(e.target.id, `${multiSelect.id}-14`)
                        }
                        onMixedStateChange={(e) => {
                          return onMixedStateChange(
                            e.target.id,
                            `${multiSelect.id}-14`,
                            multiSelect.items
                          );
                        }}
                        onClear={() => onClear(`${multiSelect.id}-14`)}
                        width={multiSelectWidth}
                      />
                    ))
                  );
                }}
              />
              <MultiSelectGroup
                id="group-two"
                labelText="Group Two"
                layout={layout}
                multiSelectWidth={width}
                renderMultiSelect={({ isBlockElement, multiSelectWidth }) => {
                  return (
                    multiSelectItems &&
                    multiSelectItems.map((multiSelect) => (
                      <MultiSelect
                        key={`${multiSelect.id}-15`}
                        id={`${multiSelect.id}-15`}
                        buttonText={multiSelect.name}
                        isBlockElement={isBlockElement}
                        items={multiSelect.items}
                        selectedItems={selectedItems}
                        onChange={(e) =>
                          onChange(e.target.id, `${multiSelect.id}-15`)
                        }
                        onMixedStateChange={(e) => {
                          return onMixedStateChange(
                            e.target.id,
                            `${multiSelect.id}-15`,
                            multiSelect.items
                          );
                        }}
                        onClear={() => onClear(`${multiSelect.id}-15`)}
                        width={multiSelectWidth}
                      />
                    ))
                  );
                }}
              />
            </>
          );
        }}
      />
      <FilterBarInline
        id="column-multiple-checkbox-groups-buttons"
        heading="Column with multiple CheckboxGroups - with Buttons"
        selectedItems={[selectedCheckbox, selectedCheckbox2]}
        onClear={() => {
          setSelectedCheckbox([]);
          setSelectedCheckbox2([]);
        }}
        onSubmit={() => null}
        layout="column"
        renderChildren={({ layout }) => {
          return (
            <>
              <CheckboxGroup
                id="checkbox-1"
                labelText="Boroughs"
                name="checkboxExample"
                layout={layout}
                value={selectedCheckbox}
                onChange={(e) => {
                  setSelectedCheckbox(e);
                }}
              >
                <Checkbox id="checkbox-1" value="Bronx" labelText="Bronx" />
                <Checkbox
                  id="checkbox-2"
                  value="Manhattan"
                  labelText="Manhattan"
                />
                <Checkbox
                  id="checkbox-2"
                  value="Staten Island"
                  labelText="Staten Island"
                />
              </CheckboxGroup>
              <CheckboxGroup
                id="checkbox-2"
                labelText="Accessibility"
                name="checkboxExample"
                layout={layout}
                value={selectedCheckbox2}
                onChange={(e) => {
                  setSelectedCheckbox2(e);
                }}
              >
                <Checkbox
                  id="checkbox-1"
                  value="Fully Accessible"
                  labelText="Fully Accessible"
                />
                <Checkbox
                  id="checkbox-2"
                  value="Partially Accessible"
                  labelText="Partially Accessible"
                />
                <Checkbox
                  id="checkbox-2"
                  value="Not Accessible"
                  labelText="Not Accessible"
                />
              </CheckboxGroup>
            </>
          );
        }}
      />
      <FilterBarInline
        id="row-multiple-checkbox-groups-buttons"
        heading="Row with multiple CheckboxGroups - with Buttons"
        selectedItems={[selectedCheckbox, selectedCheckbox2]}
        onClear={() => {
          setSelectedCheckbox([]);
          setSelectedCheckbox2([]);
        }}
        onSubmit={() => null}
        renderChildren={({ layout }) => {
          return (
            <>
              <CheckboxGroup
                id="checkbox-1"
                labelText="Boroughs"
                name="checkboxExample"
                layout={layout}
                value={selectedCheckbox}
                onChange={(e) => {
                  setSelectedCheckbox(e);
                }}
              >
                <Checkbox id="checkbox-1" value="Bronx" labelText="Bronx" />
                <Checkbox
                  id="checkbox-2"
                  value="Manhattan"
                  labelText="Manhattan"
                />
                <Checkbox
                  id="checkbox-2"
                  value="Staten Island"
                  labelText="Staten Island"
                />
              </CheckboxGroup>
              <CheckboxGroup
                id="checkbox-2"
                labelText="Accessibility"
                name="checkboxExample"
                layout={layout}
                value={selectedCheckbox2}
                onChange={(e) => {
                  setSelectedCheckbox2(e);
                }}
              >
                <Checkbox
                  id="checkbox-1"
                  value="Fully Accessible"
                  labelText="Fully Accessible"
                />
                <Checkbox
                  id="checkbox-2"
                  value="Partially Accessible"
                  labelText="Partially Accessible"
                />
                <Checkbox
                  id="checkbox-2"
                  value="Not Accessible"
                  labelText="Not Accessible"
                />
              </CheckboxGroup>
            </>
          );
        }}
      />
    </VStack>
  );
};

const FilterBarRowContainerStory = () => {
  const { onChange, onMixedStateChange, selectedItems, onClear, onClearAll } =
    useMultiSelect();
  const containerBgColor = useColorModeValue(
    "ui.bg.default",
    "dark.ui.bg.default"
  );
  const selectedFilterItems = [selectedItems];
  return (
    <VStack align="stretch" spacing="l">
      <Box bg={containerBgColor} p="inset.wide">
        <FilterBarInline
          id="row-with-buttons"
          heading="Row with Clear All and Submit butttons"
          selectedItems={selectedFilterItems}
          onClear={onClearAll}
          onSubmit={() => null}
          renderChildren={({ layout, width }) => {
            return (
              <MultiSelectGroup
                showLabel={false}
                id="row-all-buttons"
                labelText="Submit Button"
                layout={layout}
                multiSelectWidth={width}
                renderMultiSelect={({ isBlockElement, multiSelectWidth }) => {
                  return (
                    shortMultiSelectItems &&
                    shortMultiSelectItems.map((multiSelect) => {
                      return (
                        <MultiSelect
                          key={`${multiSelect.id}-6`}
                          id={`${multiSelect.id}-6`}
                          buttonText={multiSelect.name}
                          isBlockElement={isBlockElement}
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
                          width={multiSelectWidth}
                        />
                      );
                    })
                  );
                }}
              />
            );
          }}
        />
      </Box>
      <Box bg={containerBgColor} p="inset.wide">
        <FilterBarInline
          id="row-multiple-multiselect-groups-buttons"
          heading="Row with multiple MultiselectGroups - with Buttons"
          selectedItems={selectedFilterItems}
          onClear={onClearAll}
          onSubmit={() => null}
          renderChildren={({ layout, width }) => {
            return (
              <>
                <MultiSelectGroup
                  id="group-one"
                  labelText="Group One"
                  layout={layout}
                  multiSelectWidth={width}
                  renderMultiSelect={({ isBlockElement, multiSelectWidth }) => {
                    return (
                      multiSelectItems &&
                      multiSelectItems.map((multiSelect) => (
                        <MultiSelect
                          key={`${multiSelect.id}-17`}
                          id={`${multiSelect.id}-17`}
                          buttonText={multiSelect.name}
                          isBlockElement={isBlockElement}
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
                          width={multiSelectWidth}
                        />
                      ))
                    );
                  }}
                />
                <MultiSelectGroup
                  id="group-two"
                  labelText="Group Two"
                  layout={layout}
                  multiSelectWidth={width}
                  renderMultiSelect={({ isBlockElement, multiSelectWidth }) => {
                    return (
                      multiSelectItems &&
                      multiSelectItems.map((multiSelect) => (
                        <MultiSelect
                          key={`${multiSelect.id}-18`}
                          id={`${multiSelect.id}-18`}
                          buttonText={multiSelect.name}
                          isBlockElement={isBlockElement}
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
                          width={multiSelectWidth}
                        />
                      ))
                    );
                  }}
                />
              </>
            );
          }}
        />
      </Box>
    </VStack>
  );
};

const FilterBarColumnContainerStory = () => {
  const { onChange, onMixedStateChange, selectedItems, onClear, onClearAll } =
    useMultiSelect();
  const selectedFilterItems = [selectedItems];
  return (
    <VStack align="stretch" spacing="l">
      <Box bg="ui.bg.default" p="inset.default" width="255px">
        <FilterBarInline
          id="column-with-buttons"
          heading="Column with Clear All and Submit butttons"
          selectedItems={selectedFilterItems}
          onClear={onClearAll}
          onSubmit={() => null}
          layout="column"
          renderChildren={({ layout, width }) => {
            return (
              <MultiSelectGroup
                id="column-all-buttons"
                labelText="Column with Clear All and Submit Button"
                layout={layout}
                multiSelectWidth={width}
                renderMultiSelect={({ isBlockElement, multiSelectWidth }) => {
                  return (
                    multiSelectItems &&
                    multiSelectItems.map((multiSelect) => (
                      <MultiSelect
                        key={`${multiSelect.id}-7`}
                        id={`${multiSelect.id}-7`}
                        buttonText={multiSelect.name}
                        isBlockElement={isBlockElement}
                        items={multiSelect.items}
                        selectedItems={selectedItems}
                        onChange={(e) =>
                          onChange(e.target.id, `${multiSelect.id}-7`)
                        }
                        onMixedStateChange={(e) => {
                          return onMixedStateChange(
                            e.target.id,
                            `${multiSelect.id}-7`,
                            multiSelect.items
                          );
                        }}
                        onClear={() => onClear(`${multiSelect.id}-7`)}
                        width={multiSelectWidth}
                      />
                    ))
                  );
                }}
              />
            );
          }}
        />
      </Box>
      <Box bg="ui.bg.default" p="inset.default" width="255px">
        <FilterBarInline
          id="column-multiple-multiselect-groups-buttons"
          heading="Column with multiple MultiselectGroups - with Buttons"
          selectedItems={selectedFilterItems}
          onClear={onClearAll}
          onSubmit={() => null}
          layout="column"
          renderChildren={({ layout, width }) => {
            return (
              <>
                <MultiSelectGroup
                  id="group-one"
                  labelText="Group One"
                  layout={layout}
                  multiSelectWidth={width}
                  renderMultiSelect={({ isBlockElement, multiSelectWidth }) => {
                    return (
                      multiSelectItems &&
                      multiSelectItems.map((multiSelect) => (
                        <MultiSelect
                          key={`${multiSelect.id}-11`}
                          id={`${multiSelect.id}-11`}
                          buttonText={multiSelect.name}
                          isBlockElement={isBlockElement}
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
                          width={multiSelectWidth}
                        />
                      ))
                    );
                  }}
                />
                <MultiSelectGroup
                  id="group-two"
                  labelText="Group Two"
                  layout={layout}
                  multiSelectWidth={width}
                  renderMultiSelect={({ isBlockElement, multiSelectWidth }) => {
                    return (
                      multiSelectItems &&
                      multiSelectItems.map((multiSelect) => (
                        <MultiSelect
                          key={`${multiSelect.id}-12`}
                          id={`${multiSelect.id}-12`}
                          buttonText={multiSelect.name}
                          isBlockElement={isBlockElement}
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
                          width={multiSelectWidth}
                        />
                      ))
                    );
                  }}
                />
              </>
            );
          }}
        />
      </Box>
    </VStack>
  );
};

const FilterBarChildrenStory = (args) => {
  const { onChange, onMixedStateChange, selectedItems, onClear, onClearAll } =
    useMultiSelect();
  const [selectedCheckbox, setSelectedCheckbox] = useState([]);
  const [textValue, setTextValue] = useState("");
  const [selectedFilterItems, setSelectedFilterItems] = useState([
    selectedItems,
    selectedCheckbox,
    textValue,
  ]);

  useEffect(() => {
    setSelectedFilterItems([selectedItems, selectedCheckbox, textValue]);
  }, [selectedItems, selectedCheckbox, textValue]);

  const onClearFilterBar = () => {
    onClearAll();
    setSelectedCheckbox([]);
    setTextValue("");
  };

  const renderMultiSelect = ({ isBlockElement, multiSelectWidth }) => {
    return (
      shortMultiSelectItems &&
      shortMultiSelectItems.map((multiSelect) => (
        <MultiSelect
          buttonText={multiSelect.name}
          key={multiSelect.id}
          id={multiSelect.id}
          items={multiSelect.items}
          selectedItems={selectedItems}
          isBlockElement={isBlockElement}
          onChange={(e) => onChange(e.target.id, multiSelect.id)}
          onMixedStateChange={(e) => {
            return onMixedStateChange(
              e.target.id,
              multiSelect.id,
              multiSelect.items
            );
          }}
          onClear={() => onClear(multiSelect.id)}
          width={multiSelectWidth}
        />
      ))
    );
  };

  const renderFilterComponents = ({ layout, width }) => {
    return (
      <>
        <MultiSelectGroup
          id="multiselect-group"
          labelText="MultiSelect Group"
          layout={layout}
          multiSelectWidth={width}
          renderMultiSelect={renderMultiSelect}
        />
        <CheckboxGroup
          id="checkbox-example"
          labelText="Checkbox Group"
          name="checkboxExample"
          layout={layout}
          value={selectedCheckbox}
          onChange={(e) => {
            setSelectedCheckbox(e);
          }}
        >
          <Checkbox id="checkbox-1" value="1" labelText="Checkbox 1" />
          <Checkbox id="checkbox-2" value="2" labelText="Checkbox 2" />
        </CheckboxGroup>
        <TextInput
          id="textinput-example"
          isClearable
          isClearableCallback={() => setTextValue("")}
          labelText="What is your favorite color?"
          onChange={(e) => setTextValue(e.target.value)}
          placeholder="i.e. blue, green, etc."
          value={textValue}
        />
      </>
    );
  };

  return (
    <FilterBarInline
      id={args.id}
      heading={args.heading}
      layout={args.layout}
      onClear={onClearFilterBar}
      onSubmit={() => console.log(selectedFilterItems)}
      selectedItems={selectedFilterItems}
      renderChildren={renderFilterComponents}
    />
  );
};

const FilterBarTagSetStory = () => {
  const [selectedCheckbox, setSelectedCheckbox] = useState([]);
  const [textValue, setTextValue] = useState("");
  const [selectedFilterItems, setSelectedFilterItems] = useState([
    selectedCheckbox,
    textValue,
  ]);

  useEffect(() => {
    setSelectedFilterItems([selectedCheckbox, textValue]);
  }, [selectedCheckbox, textValue]);

  const [tagSetData, setTagSetData] = useState<TagSetFilterDataProps[]>([]);
  useEffect(() => {
    const newTags = [];
    for (let item of selectedFilterItems[0]) {
      newTags.push({
        id: `tag-${item}`,
        label: item,
      });
    }
    if (selectedFilterItems[1] !== "")
      newTags.push({ id: "tag-color", label: selectedFilterItems[1] });

    setTagSetData(newTags);
  }, [selectedFilterItems]);

  const handleOnClick = (tag) => {
    if (tag.id === "clear-filters") {
      setSelectedCheckbox([]);
      setTextValue("");
      setTagSetData([]);
      return;
    }
    setSelectedCheckbox((checkboxes) =>
      checkboxes.filter((checkbox) => {
        return `tag-${checkbox}` !== tag.id;
      })
    );
    if (tag.id === "tag-color") {
      setTextValue("");
    }
    setTagSetData((prevTagSetData) =>
      prevTagSetData.filter((tag) => {
        return tag.id !== tag.id;
      })
    );
  };

  const renderFilterComponents = ({ layout }) => {
    return (
      <>
        <CheckboxGroup
          id="checkbox-example"
          labelText="Checkbox Group"
          name="checkboxExample"
          layout={layout}
          value={selectedCheckbox}
          onChange={(e) => setSelectedCheckbox(e)}
        >
          <Checkbox id="checkbox-1" value="1" labelText="Checkbox 1" />
          <Checkbox id="checkbox-2" value="2" labelText="Checkbox 2" />
        </CheckboxGroup>
        <TextInput
          id="textinput-example"
          isClearable
          isClearableCallback={() => setTextValue("")}
          labelText="What is your favorite color?"
          onChange={(e) => setTextValue(e.target.value)}
          placeholder="i.e. blue, green, etc."
          value={textValue}
        />
      </>
    );
  };

  return (
    <>
      <FilterBarInline
        id="filterbar-with-tagset"
        selectedItems={selectedFilterItems}
        renderChildren={renderFilterComponents}
      />
      <TagSet
        id="tagSet-id-filter"
        isDismissible
        onClick={handleOnClick}
        tagSetData={tagSetData}
        type="filter"
      />
    </>
  );
};
