export interface MultiSelectItem {
  id: string;
  name: string;
  children?: MultiSelectItem[];
}

export interface SelectedItems {
  [name: string]: { items: string[] };
}

// @TODO Just do "Default" and "Full"
export enum MultiSelectWidths {
  Default = "default",
  // Small = "small",
  // Medium = "medium",
  // Large = "large",
  Full = "full",
}

export enum MultiSelectVariants {
  Listbox = "listbox",
  Dialog = "dialog",
}
