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
    date: "2024-02-22",
    version: "2.1.6",
    type: "Update",
    affects: ["Styles", "Documentation"],
    notes: [
      "Updated the styles so that if a dev passes an icon to the badge as well as text, the icon and text line up with one another",
    ],
  },
];
