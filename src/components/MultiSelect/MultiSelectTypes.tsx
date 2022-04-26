export interface MultiSelectItem {
  id: string;
  name: string;
  children?: MultiSelectItem[];
}

export interface SelectedItems {
  [name: string]: { items: string[] };
}

// @TODO Switch these to string literal union.
export enum MultiSelectWidths {
  Default = "default",
  FitContent = "fitContent",
  Full = "full",
}
