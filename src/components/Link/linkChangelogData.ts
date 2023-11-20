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
    date: "2023-11-14",
    version: "Prerelease",
    type: "Update",
    affects: ["Styles"],
    notes: [
      "Added `hasVisitedStyles` prop which is used to include or omit the component's visited state styles. Default value is true.",
      "Removed `disabled` variant from theme file, as it isn't being used.",
    ],
  },
];
