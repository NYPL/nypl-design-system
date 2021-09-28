export interface MultiSelectItem {
  id: string;
  name: string;
}

export interface SelectedItems {
  [name: string]: { items: MultiSelectItem[] };
}
