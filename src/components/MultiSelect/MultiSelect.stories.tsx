import { action } from "@storybook/addon-actions";
import type { Meta, StoryObj } from "@storybook/react";
import { useEffect, useState } from "react";
import { withDesign } from "storybook-addon-designs";

import MultiSelect from "./MultiSelect";
import useMultiSelect from "../../hooks/useMultiSelect";

const items = [
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

const withChildrenCheckboxItems = [
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
    // Children array will only be renderd in a "dialog" type
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

const meta: Meta<typeof MultiSelect> = {
  // The documentation for the MultiSelect component will be removed until the
  // refactor of the v2 version of the MultiSelect component has been completed.
  // To add the link for the MultiSelect component back to the side bar,
  // uncomment the `title` attribute below.
  // title: "Components/Form Elements/MultiSelect",
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
      options: ["scroll", "expand"],
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
      options: ["fitContent", "full"],
      table: { defaultValue: { summary: "default" } },
    },
  },
};

export default meta;
type Story = StoryObj<typeof MultiSelect>;

export const MultiSelectControls: Story = {
  args: {
    id: "multiselect-dialog",
    buttonText: "MultiSelect",
    items: items,
    isSearchable: false,
    defaultItemsVisible: 5,
    isDefaultOpen: false,
  },
  render: (args) => <MultiSelectStory {...args} />,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Main?node-id=43593%3A24611",
    },
    jest: ["MultiSelect.test.tsx"],
  },
};


export const withChildrenMultiSelectItems: Story = {
  args: {
    id: "multiselect-dialog",
    buttonText: "MultiSelect",
    isSearchable: false,
    defaultItemsVisible: 5,
    isDefaultOpen: false,
    items: withChildrenCheckboxItems,
  },
  render: (args) => <MultiSelectStory {...args} />,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Main?node-id=43593%3A24611",
    },
    jest: ["MultiSelect.test.tsx"],
  },
};

const withDisabledCheckboxItems = [
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
    // Children array will only be renderd in a "dialog" type
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

export const withDisabledCheckboxes: Story = {
  args: {
    id: "multiselect-dialog",
    buttonText: "MultiSelect",
    isSearchable: false,
    defaultItemsVisible: 5,
    isDefaultOpen: false,
    items: withDisabledCheckboxItems,
  },
  render: (args) => <MultiSelectStory {...args} />,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Main?node-id=43593%3A24611",
    },
    jest: ["MultiSelect.test.tsx"],
  },
};

const MultiSelectStory = (args) => {
  // Example with custom hook useMultiSelect.
  const { onChange, onMixedStateChange, onClear, selectedItems } =
    useMultiSelect();
  const multiSelectId = args.id;

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
      {...args}
      isDefaultOpen={args.isDefaultOpen}
      isSearchable={args.isSearchable}
      selectedItems={selectedItems}
      onChange={(e) => {
        onChange(e.target.id, multiSelectId);
        setActionName("onChange");
      }}
      onMixedStateChange={(e) => {
        onMixedStateChange(e.target.id, multiSelectId, items);
        setActionName("onMixedStateChange");
      }}
      onClear={() => {
        onClear(multiSelectId);
        setActionName("onClear");
      }}
    />
  );
};
