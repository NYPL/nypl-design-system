export const layoutTypesArray = ["column", "row"] as const;
export type LayoutTypes = typeof layoutTypesArray[number];
