/* Retrieves section color values.
 *
 * Requires a section type as defined by sectionDataMap. Accepts an optional color
 * preference ("primary" or "secondary").
 *
 * @returns An object containing both primary and secondary colors (default) or a string of the value requested
 * in the optional color preference.
 */
import { sectionDataMap, SectionTypes } from "./types";

type ColorSection = {
  primary: string;
  secondary: string | null;
};

type ColorVal = string;

export function getSectionColors(
  type: SectionTypes,
  colorVal?: "primary" | "secondary"
): ColorSection | ColorVal {
  let colorValOrSection = sectionDataMap[type];

  if (colorVal) {
    colorValOrSection = colorValOrSection[colorVal];
  }
  return colorValOrSection;
}
