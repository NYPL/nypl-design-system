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
    date: "2024-05-23",
    version: "3.1.4",
    type: "Bug Fix",
    affects: ["Styles"],
    notes: ["Fixes the z-index value in the small selected items button."],
  },
  {
    date: "2024-04-25",
    version: "3.1.1",
    type: "Update",
    affects: ["Functionality"],
    notes: ["Updated the placeholder value for the search field."],
  },
  {
    date: "2024-03-14",
    version: "3.0.0",
    type: "Update",
    affects: ["Accessibility", "Documentation", "Functionality", "Styles"],
    notes: ["Chakra 2.8 update.", "Refactors the `MultiSelect` component."],
  },
];
