/* Retrieves section color values for both light and dark variants.
 *
 * Requires a section type as defined by sectionColorsDataMap. Accepts an
 * optional color preference ("primary" or "secondary") and an optional dark
 * boolean value.
 *
 * @returns An object containing both primary and secondary colors (default) or
 * a string of the value requested in the optional color preference.
 */
import { sectionColorsDataMap, SectionTypes } from "../helpers/types";

type ColorSection = {
  primary: string;
  secondary: string | null;
};
type ColorValue = string;

interface GetSectionColorsProps {
  type: SectionTypes;
  colorValue?: "primary" | "secondary";
  isDark?: boolean;
}

export function getSectionColors({
  type,
  colorValue,
  isDark,
}: GetSectionColorsProps): ColorSection | ColorValue {
  let colorValueOrSection = sectionColorsDataMap[type];

  if (colorValue) {
    colorValueOrSection = isDark
      ? `dark.${colorValueOrSection[colorValue]}`
      : colorValueOrSection[colorValue];
  }
  return colorValueOrSection;
}
