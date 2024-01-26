import { action } from "@storybook/addon-actions";
import type { Meta, StoryObj } from "@storybook/react";
import { useEffect, useState } from "react";
import { withDesign } from "storybook-addon-designs";
import Heading from "../Heading/Heading";
import MultiSelect, {
  multiSelectWidthsArray,
  multiSelectListOverflowArray,
} from "./MultiSelect";
import Text from "../Text/Text";
import useMultiSelect from "../../hooks/useMultiSelect";
import { Stack } from "@chakra-ui/react";

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
  {
    id: "education",
    name: "Education",
  },
  {
    id: "games",
    name: "Games",
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
    buttonText: {
      description: "The button text rendered within the MultiSelect.",
      table: { default: "" },
    },
    defaultItemsVisible: {
      description:
        "The number of items that will be visible in the list when the component first loads.",
      table: { defaultValue: { summary: 5 } },
    },
    id: {
      control: false,
      description:
        "An ID string that other components can cross reference for accessibility purposes.",
    },
    isBlockElement: {
      description:
        "Controls how the component will render within the page and interact with other DOM elements.",
      table: { defaultValue: { summary: false } },
    },
    isDefaultOpen: {
      description: "Set the default open or closed state of the Multiselect.",
      table: { defaultValue: { summary: false } },
    },
    isSearchable: {
      description: "Enables the internal search functionality.",
      table: { defaultValue: { summary: false } },
    },
    items: {
      control: false,
      description:
        "The items to be rendered in the Multiselect as checkbox options.",
    },
    listOverflow: {
      description:
        "Value used to view the all items for the MultiSelect component",
      control: "radio",
      options: multiSelectListOverflowArray,
      table: { defaultValue: { summary: "scroll" } },
    },
    onChange: {
      description:
        "The action to perform on the checkbox's onChange function. <br /> For dialog: `(event: React.ChangeEvent<HTMLInputElement>) => void` <br /> For listbox: `onChange: (selectedItem: MultiSelectItem, id: string) => void;`",
    },
    onMixedStateChange: {
      description:
        "The action to perform for a mixed state checkbox (parent checkbox). <br /> `onMixedStateChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;`",
    },
    selectedItems: {
      control: false,
      description:
        "The selected items state (items that were checked by user).",
    },
    width: {
      description: "Value used to set the width for the MultiSelect component",
      control: "radio",
      options: multiSelectWidthsArray,
      table: { defaultValue: { summary: "full" } },
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
    isBlockElement: true,
    isDefaultOpen: false,
    isSearchable: false,
    items: withItems,
    listOverflow: "scroll",
    onChange: undefined,
    onMixedStateChange: undefined,
    selectedItems: undefined,
    width: "full",
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

export const nestedListItems: Story = {
  render: () => (
    <MultiSelectStory
      id="multi-select-id"
      isBlockElement
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

export const disabledListItems: Story = {
  render: () => (
    <MultiSelectStory
      id="multi-select-id"
      isBlockElement
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

export const disabledListItemsAllChildren: Story = {
  render: () => (
    <MultiSelectStory
      id="multi-select-id"
      isBlockElement
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

export const searchInputField: Story = {
  render: () => (
    <MultiSelectStory
      id="multi-select-id"
      isBlockElement
      isDefaultOpen={false}
      isSearchable
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

export const isBlockElement: Story = {
  name: "isBlockElement",
  render: () => (
    <>
      <Stack align="left" spacing="l">
        <div>
          <Heading
            level="h3"
            size="heading6"
            text="isBlockElement set as {true}"
          />
          <Stack align="left" spacing="s">
            <Stack align="left">
              <MultiSelectStory
                id="multi-select-id"
                isBlockElement={true}
                isDefaultOpen={false}
                items={withItems}
                listOverflow="expand"
              />
              <MultiSelectStory
                id="multi-select-id"
                isBlockElement={true}
                isDefaultOpen={false}
                items={withItems}
                listOverflow="expand"
              />
            </Stack>
            <Text>
              Maecenas sed diam eget risus varius blandit sit amet non magna.
              Cum sociis natoque penatibus et magnis dis parturient montes,
              nascetur ridiculus mus. Aenean lacinia bibendum nulla sed
              consectetur. Donec sed odio dui.
            </Text>
          </Stack>
        </div>
        <div>
          <Heading
            level="h3"
            size="heading6"
            text="isBlockElement set as {false}"
          />
          <Stack align="left" spacing="s">
            <Stack direction="row" width="100%" alignContent="stretch">
              <MultiSelectStory
                id="multi-select-id"
                isBlockElement={false}
                isDefaultOpen={false}
                items={withItems}
              />
              <MultiSelectStory
                id="multi-select-id"
                isBlockElement={false}
                isDefaultOpen={false}
                items={withItems}
              />
              <MultiSelectStory
                id="multi-select-id"
                isBlockElement={false}
                isDefaultOpen={false}
                items={withItems}
              />
            </Stack>
            <Text>
              Maecenas sed diam eget risus varius blandit sit amet non magna.
              Cum sociis natoque penatibus et magnis dis parturient montes,
              nascetur ridiculus mus. Aenean lacinia bibendum nulla sed
              consectetur. Donec sed odio dui.
            </Text>
            <Text>
              Maecenas sed diam eget risus varius blandit sit amet non magna.
              Cum sociis natoque penatibus et magnis dis parturient montes,
              nascetur ridiculus mus. Aenean lacinia bibendum nulla sed
              consectetur. Donec sed odio dui.
            </Text>
            <Text>
              Maecenas sed diam eget risus varius blandit sit amet non magna.
              Cum sociis natoque penatibus et magnis dis parturient montes,
              nascetur ridiculus mus. Aenean lacinia bibendum nulla sed
              consectetur. Donec sed odio dui.
            </Text>
          </Stack>
        </div>
      </Stack>
    </>
  ),
};

export const defaultOpenState: Story = {
  render: () => (
    <MultiSelectStory
      id="multi-select-id"
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
};

const MultiSelectStory = ({
  id,
  isBlockElement = false,
  isSearchable = false,
  isDefaultOpen,
  items,
  listOverflow = "scroll",
  width = "full",
}) => {
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
      buttonText="MultiSelect"
      defaultItemsVisible={5}
      helperText="multi-select-helper-text"
      id={id}
      isBlockElement={isBlockElement}
      isDefaultOpen={isDefaultOpen}
      isSearchable={isSearchable}
      items={items}
      listOverflow={listOverflow}
      selectedItems={selectedItems}
      width={width}
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
