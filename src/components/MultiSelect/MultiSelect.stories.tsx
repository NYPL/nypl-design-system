import { action } from "@storybook/addon-actions";
import type { Meta, StoryObj } from "@storybook/react";
import { useEffect, useState } from "react";
import { withDesign } from "storybook-addon-designs";
import MultiSelect, {multiSelectWidthsArray, multiSelectListOverflowArray} from "./MultiSelect";
import useMultiSelect from "../../hooks/useMultiSelect";

const withItems = [
  {
    id: "art",
    name: "Art",
  },
  {
    id: "architecture",
    name: "Architecture",
  },
  {
    id: "art_history",
    name: "Art History",
  },
  {
    id: "design",
    name: "Design",
  },
  {
    id: "business",
    name: "Business",
  },
  {
    id: "advertising",
    name: "Advertising",
  },
  {
    id: "government_and_law",
    name: "Government and Law",
  },
  {
    id: "civil_rights",
    name: "Civil Rights",
  },
  {
    id: "history",
    name: "History",
  },
  {
    id: "atlases",
    name: "Atlases",
  },
  {
    id: "cartography",
    name: "Cartography",
  },
  {
    id: "geology",
    name: "Geology",
  },
];

const withChildrenItems = [
  {
    id: "art",
    name: "Art",
  },
  {
    id: "architecture",
    name: "Architecture",
  },
  {
    id: "design",
    name: "Design",
    children: [
      {
        id: "fashion",
        name: "Fashion",
      },
      {
        id: "ux",
        name: "User Experience",
      },
      {
        id: "tecture",
        name: "Architecture",
      },
      {
        id: "home",
        name: "Home",
      },
    ],
  },
  {
    id: "business",
    name: "Business",
  },
];

const withDisabledItems = [
  {
    id: "art",
    name: "Art",
  },
  {
    id: "architecture",
    name: "Architecture",
    isDisabled: true,
  },
  {
    id: "art_history",
    name: "Art History",
  },
  {
    id: "design",
    name: "Design",
    children: [
      {
        id: "fashion",
        name: "Fashion",
        isDisabled: true,
      },
      {
        id: "ux",
        name: "User Experience",
        isDisabled: true,
      },
      {
        id: "tecture",
        name: "Architecture",
        isDisabled: false,
      },
      {
        id: "home",
        name: "Home",
        isDisabled: false,
      },
    ],
  },
  {
    id: "business",
    name: "Business",
  },
];

const withDisabledAllChildrenItems = [
  {
    id: "art",
    name: "Art",
  },
  {
    id: "architecture",
    name: "Architecture",
    isDisabled: true,
  },
  {
    id: "art_history",
    name: "Art History",
  },
  {
    id: "design",
    name: "Design",
    children: [
      {
        id: "fashion",
        name: "Fashion",
        isDisabled: true,
      },
      {
        id: "ux",
        name: "User Experience",
        isDisabled: true,
      },
      {
        id: "tecture",
        name: "Architecture",
        isDisabled: true,
      },
      {
        id: "home",
        name: "Home",
        isDisabled: true,
      },
    ],
  },
  {
    id: "business",
    name: "Business",
  },
];

const meta: Meta<typeof MultiSelect> = {
  title: "Components/Form Elements/MultiSelect",
  component: MultiSelect,
  decorators: [withDesign],
  argTypes: {
    id: { control: false },
    isBlockElement: {
      table: { defaultValue: { summary: false } },
    },
    isDefaultOpen: {
      table: { defaultValue: { summary: false } },
    },
    items: { control: false },
    listOverflow: {
      description:
        "Value used to view the all items for the MultiSelect component",
      control: "radio",
      options: multiSelectListOverflowArray,
      table: { defaultValue: { summary: "scroll" } },
    },
    buttonText: { table: { default: "" } },
    defaultItemsVisible: {
      table: { defaultValue: { summary: 5 } },
    },
    isSearchable: {
      table: { defaultValue: { summary: false } },
    },
    onChange: {
      description:
        "The action to perform on the checkbox's onChange function. <br /> For dialog: `(event: React.ChangeEvent<HTMLInputElement>) => void` <br /> For listbox: `onChange: (selectedItem: MultiSelectItem, id: string) => void;`",
    },
    onMixedStateChange: {
      description:
        "The action to perform for a mixed state checkbox (parent checkbox). <br /> `onMixedStateChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;`",
    },
    selectedItems: { control: false },
    width: {
      description: "Value used to set the width for the MultiSelect component",
      control: "radio",
      options: multiSelectWidthsArray,
      table: { defaultValue: { summary: "default" } },
    },
  },
};

export default meta;
type Story = StoryObj<typeof MultiSelect>;

export const withControls: Story = {

  args: {
    buttonText: "MultiSelect",
    defaultItemsVisible: 5,
    id: "multi-select-id",
    isDefaultOpen: false,
    isSearchable: false,
    items: withItems,
  },
  render: (args) => <MultiSelectWithControlsStory {...args} />,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Main?node-id=43593%3A24611",
    },
    jest: ["MultiSelect.test.tsx"],
  },
};

export const withChildrenItemsExample: Story = {
  render: () => (
    <MultiSelectStory
      id="multi-select-id"
      isDefaultOpen={false}
      isSearchable={false}
      items={withChildrenItems}
    />
  ),
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Main?node-id=43593%3A24611",
    },
    jest: ["MultiSelect.test.tsx"],
  },
};

export const withDisabledItemsExample: Story = {
  render: () => (
    <MultiSelectStory
      id="multi-select-id"
      isDefaultOpen={false}
      isSearchable={false}
      items={withDisabledItems}
    />
  ),
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Main?node-id=43593%3A24611",
    },
    jest: ["MultiSelect.test.tsx"],
  },
};

export const withDisabledAllChildrenItemsExample: Story = {
  render: () => (
    <MultiSelectStory
      id="multi-select-id"
      isDefaultOpen={false}
      isSearchable={false}
      items={withDisabledAllChildrenItems}
    />
  ),
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Main?node-id=43593%3A24611",
    },
    jest: ["MultiSelect.test.tsx"],
  },
};

export const withSearchInputFieldExample: Story = {
  render: () => (
    <MultiSelectStory
      id="multi-select-id"
      isSearchable={true}
      isDefaultOpen={false}
      items={withChildrenItems}
    />
  ),
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Main?node-id=43593%3A24611",
    },
    jest: ["MultiSelect.test.tsx"],
  },
};

export const withDefaultOpenStateExample: Story = {
  render: () => (
    <MultiSelectStory
      id="multi-select-id"
      isSearchable={true}
      isDefaultOpen={true}
      items={withChildrenItems}
    />
  ),
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Main?node-id=43593%3A24611",
    },
    jest: ["MultiSelect.test.tsx"],
  },
};

const MultiSelectWithControlsStory = (args) => {
  // Example with custom hook useMultiSelect.
  const { onChange, onMixedStateChange, onClear, selectedItems } =
    useMultiSelect();

  // Hack to get storybook's action tab to log state change when selectedItems state changes.
  const [actionName, setActionName] = useState("");

  useEffect(() => {
    if (Object.keys(selectedItems).length !== 0) {
      action(actionName)(selectedItems);
    }
    if (actionName === "onClear") {
      action(actionName)(selectedItems);
    }
  }, [actionName, selectedItems]);
  const multiSelectId = args.id;

  return (
    <MultiSelect
      {...args}
      helperText="multi-select-helper-text"
      defaultItemsVisible={5}
      selectedItems={selectedItems}
      onChange={(e) => {
        onChange(e.target.id, multiSelectId);
        setActionName("onChange");
      }}
      onMixedStateChange={(e) => {
        onMixedStateChange(e.target.id, multiSelectId, args.items);
        setActionName("onMixedStateChange");
      }}
      onClear={() => {
        onClear(multiSelectId);
        setActionName("onClear");
      }}
    />
  );
}

const MultiSelectStory = ({ id, isSearchable, isDefaultOpen, items }) => {
  // Example with custom hook useMultiSelect.
  const { onChange, onMixedStateChange, onClear, selectedItems } =
    useMultiSelect();

  // Hack to get storybook's action tab to log state change when selectedItems state changes.
  const [actionName, setActionName] = useState("");

  useEffect(() => {
    if (Object.keys(selectedItems).length !== 0) {
      action(actionName)(selectedItems);
    }
    if (actionName === "onClear") {
      action(actionName)(selectedItems);
    }
  }, [actionName, selectedItems]);

  return (
    <MultiSelect
      id={id}
      buttonText="MultiSelect"
      helperText="multi-select-helper-text"
      defaultItemsVisible={5}
      isDefaultOpen={isDefaultOpen}
      isSearchable={isSearchable}
      selectedItems={selectedItems}
      items={items}

      onChange={(e) => {
        onChange(e.target.id, id);
        setActionName("onChange");
      }}
      onMixedStateChange={(e) => {
        onMixedStateChange(e.target.id, id, items);
        setActionName("onMixedStateChange");
      }}
      onClear={() => {
        onClear(id);
        setActionName("onClear");
      }}
    />
  );
};
