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
    date: "2025-08-11",
    version: "4.0.0",
    type: "Update",
    affects: ["Functionality"],
    notes: [
      "Removes explicit `className` prop as interface can be extended to include Chakra prop or HTML attribute types.",
      "Updates the internal use of ids to reduce `undefined` ids in the DOM.",
      "Adds `data-testid` value of `ds-pagination` to the parent element.",
    ],
  },
  {
    date: "2025-01-30",
    version: "3.5.3",
    type: "Update",
    affects: ["Functionality"],
    notes: ["Handling for 4 digit page counts"],
  },
  {
    date: "2025-01-16",
    version: "3.5.2",
    type: "Update",
    affects: ["Styles"],
    notes: ["New visual styles."],
  },
  {
    date: "2024-03-14",
    version: "3.0.0",
    type: "Update",
    affects: ["Styles"],
    notes: ["Chakra 2.8 update."],
  },
];
