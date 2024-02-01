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
      table: { defaultValue: { summary: "false" } },
      control: false,
    },
    isDefaultOpen: {
      table: { defaultValue: { summary: "false" } },
      control: false,
    },
    items: { control: false },
    labelText: { table: { default: "" } },
    onApply: {
      description:
        "The action to perform for save/apply button of multiselect. <br /> `onApply: () => void;`",
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
    type: { control: false },
    width: {
      description: "Value used to set the width for the MultiSelect component",
      control: "radio",
      options: ["default", "fitContent", "full"],
      table: { defaultValue: { summary: "default" } },
    },
  },
};

export default meta;
type Story = StoryObj<typeof MultiSelect>;

/**
 * Main Stories for the MultiSelect component. This must contains the `args`
 * and `parameters` properties in this object.
 */
export const ListboxControls: Story = {
  args: {
    id: "multiselect-listbox",
    labelText: "MultiSelect Listbox",
    type: "listbox",
  },
  render: (args) => <MultiSelectListboxStory {...args} />,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Main?node-id=43593%3A24611",
    },
    jest: ["MultiSelect.test.tsx"],
  },
};
export const DialogControls: Story = {
  args: {
    id: "multiselect-dialog",
    labelText: "MultiSelect Dialog",
    type: "dialog",
  },
  render: (args) => <MultiSelectDialogStory {...args} />,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Main?node-id=43593%3A24611",
    },
    jest: ["MultiSelect.test.tsx"],
  },
};

const MultiSelectListboxStory = (args) => {
  // Example with custom hook useMultiSelect.
  const { onChange, onClear, selectedItems } = useMultiSelect();
  const multiSelectId = args.id;

  // Hack to get storybook's action tab to log state change when selectedItems state changes.
  const [actionName, setActionName] = useState("");

  useEffect(() => {
    if (Object.keys(selectedItems).length !== 0) {
      action(actionName)(selectedItems);
    }
  }, [actionName, selectedItems]);

  return (
    <MultiSelect
      {...args}
      isDefaultOpen
      items={items}
      selectedItems={selectedItems}
      onChange={(selectedItem) => {
        onChange(selectedItem.id, multiSelectId);
        setActionName("onChange");
      }}
      onClear={() => {
        onClear(multiSelectId);
        setActionName("onClear");
      }}
    />
  );
};

const MultiSelectDialogStory = (args) => {
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
      items={items}
      isDefaultOpen={false}
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
      onApply={() => {
        setActionName("onApply");
      }}
    />
  );
};