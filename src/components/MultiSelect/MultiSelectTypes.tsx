export interface MultiSelectItem {
  id: string;
  name: string;
  children?: MultiSelectItem[];
}

export interface SelectedItems {
  [name: string]: { items: string[] };
}

export enum MultiSelectWidths {
  Default = "default",
  FitContent = "fitContent",
  Full = "full",
}

export enum MultiSelectVariants {
  Listbox = "listbox",
  Dialog = "dialog",
}
