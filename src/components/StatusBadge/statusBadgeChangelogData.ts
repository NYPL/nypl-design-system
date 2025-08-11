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
      "Removes deprecated `low`, `medium`, `high` values from `statusBadgeTypeArray`.",
      "Removes deprecated `level` prop.",
      "Removes explicit `className` prop as interface can be extended to include Chakra prop or HTML attribute types.",
      "Renames `type` to `variant`.",
      "Replaces `statusBadgeTypeArray` with shared message variants array.",
      "Updated the internal use of ids to reduce `undefined` ids in the DOM.",
      "Adds `data-testid` value of `ds-statusBadge` to the parent element.",
    ],
  },
  {
    date: "2025-02-13",
    version: "3.5.4",
    type: "New Feature",
    affects: ["Styles", "Functionality"],
    notes: ["Adds support for the `fontSize` style prop."],
  },
  {
    date: "2024-04-25",
    version: "3.1.1",
    type: "Update",
    affects: ["Styles"],
    notes: ["Updated the `warning` variant to use `ui.warning.tertiary`."],
  },
  {
    date: "2024-03-14",
    version: "3.0.0",
    type: "Update",
    affects: ["Documentation", "Functionality", "Styles"],
    notes: [
      "Chakra 2.8 update.",
      "Added the 'type' prop.",
      "Deprecated the `level` prop.",
      "Updated the UI styles.",
    ],
  },
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
