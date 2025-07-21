/** This data is used to populate the ComponentChangelogTable component.
 *
 * date: string (when adding new entry during development, set value as "Prerelease")
 * version: string (when adding new entry during development, set value as "Prerelease")
 * type: "Bug Fix" | "New Feature" | "Update";
 * affects: array["Accessibility" | "Documentation" | "Functionality" | "Styles"];
 * notes: array (will render as a bulleted list, add one array element for each list element)
 */
import { ChangelogData } from "../../utils/ComponentChangelogTable";

export const changelogData: ChangelogData[] = [
  {
    date: "Prerelease",
    version: "Prerelease",
    type: "Update",
    affects: ["Functionality"],
    notes: [
      "Removes explicit `className` prop as interface can be extended to include Chakra prop or HTML attribute types.",
      "Updates the internal use of ids to reduce `undefined` ids in the DOM.",
      "Removes the explicit `className` prop in favor of `rest`.",
      "Moves the `rest` prop to the parent Box component.",
      "Adds `data-testid` value of `ds-menu` to the parent element.",
    ],
  },
  {
    date: "2025-04-10",
    version: "3.6.0",
    type: "Update",
    affects: ["Styles"],
    notes: ["Sets the font weight for the `group` headings to `bold`."],
  },
  {
    date: "2025-02-13",
    version: "3.5.4",
    type: "Update",
    affects: ["Styles"],
    notes: [
      "Sets the line height to 1.5 for menu options.",
      "Fixes the rounded styles for menu option images.",
    ],
  },
  {
    date: "2024-08-29",
    version: "3.3.0",
    type: "Update",
    affects: ["Functionality", "Styles"],
    notes: ["Adds new `showSelectionAsLabel` prop, updates `aria-label`s."],
  },
  {
    date: "2024-03-14",
    version: "3.0.0",
    type: "Update",
    affects: ["Styles"],
    notes: ["Chakra 2.8 update."],
  },
];
