import { ListItemsData } from "./Menu";
export const defaultListItems: ListItemsData[] = [
  {
    type: "action",
    id: "item-title-1",
    label: "I'm item 1",
    onClick: () => {},
  },
  {
    type: "action",
    id: "item-title-2",
    label: "I'm item 2",
    onClick: () => {},
  },
  {
    type: "action",
    id: "item-title-3",
    label: "I'm item 3",
    onClick: () => {},
  },
];

export const duplicateIdListItems: ListItemsData[] = [
  {
    type: "action",
    id: "item-title-2",
    label: "I'm item 1",
    onClick: () => {},
  },
  {
    type: "action",
    id: "item-title-2",
    label: "I'm item 2",
    onClick: () => {},
  },
  {
    type: "action",
    id: "item-title-3",
    label: "I'm item 3",
    onClick: () => {},
  },
];

export const missingTypeListItems: ListItemsData[] = [
  {
    // @ts-ignore: Typescript complains when a required prop is not passed, but
    // here we don't want to pass the required prop to make sure the warning appears.
    type: "",
    id: "item-title-1",
    label: "I'm item 1",
    onClick: () => {},
  },
  {
    type: "action",
    id: "item-title-2",
    label: "I'm item 2",
    onClick: () => {},
  },
  {
    type: "action",
    id: "item-title-3",
    label: "I'm item 3",
    onClick: () => {},
  },
];

export const missingIdListItems: ListItemsData[] = [
  {
    // @ts-ignore
    type: "action",
    id: "",
    label: "I'm item 1",
    onClick: () => {},
  },
  {
    type: "action",
    id: "item-title-2",
    label: "I'm item 2",
    onClick: () => {},
  },
  {
    type: "action",
    id: "item-title-3",
    label: "I'm item 3",
    onClick: () => {},
  },
];

export const missingLabelListItems: ListItemsData[] = [
  {
    type: "action",
    id: "item-title-1",
    label: "I'm item 1",
    onClick: () => {},
  },

  {
    type: "action",
    id: "item-title-2",
    label: "",
    onClick: () => {},
  },
  {
    type: "action",
    id: "item-title-3",
    label: "I'm item 3",
    onClick: () => {},
  },
];

export const missingOnClickListItems: ListItemsData[] = [
  {
    type: "action",
    id: "item-title-1",
    label: "I'm item 1",
    onClick: () => {},
  },

  {
    type: "action",
    id: "item-title-2",
    label: "I'm item 2",
    // @ts-ignore
    onClick: "",
  },
  {
    type: "action",
    id: "item-title-3",
    label: "I'm item 3",
    onClick: () => {},
  },
];

export const missingChildrenListItems: ListItemsData[] = [
  //@ts-ignore
  {
    type: "group",
    id: "item-title-1",
    label: "I'm item 1",
  },
  {
    type: "action",
    id: "item-title-2",
    label: "I'm item 2",
    onClick: () => {},
  },
  {
    type: "action",
    id: "item-title-3",
    label: "I'm item 3",
    onClick: () => {},
  },
];
