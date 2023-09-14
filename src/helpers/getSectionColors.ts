/* Retrieves section color values.
 *
 * Requires a section type as defined by sectionDataMap. Accepts an optional color
 * preference ("primary" or "secondary").
 *
 * @returns A string if one color is requested or an object containing both (default).
 */
import { sectionDataMap, SectionTypes } from "./types";

export function getSectionColors(
  type: SectionTypes,
  colorVal?: "primary" | "secondary"
) {
  let colorName = sectionDataMap.filter((section) => section.type === type)[0]
    .colorVals;
  if (colorVal) {
    colorName = colorName[colorVal];
  }
  return colorName;
}
