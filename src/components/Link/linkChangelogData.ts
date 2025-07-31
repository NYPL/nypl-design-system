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
      "Removes deprecated `button` value in `linkTypesArray`.",
      "Replaces positional function arguments with objects for `getWithDirectionIcon`, and `getExternalExtraElements`",
      "Removes explicit `className` prop as interface can be extended to include Chakra prop or HTML attribute types.",
      "Removes `href`, `rel`, `onClick`, `target` props (as HTML equivalents may be used) and updates docs.",
      "Renames `type` to `variant`.",
      "Updated the internal use of ids to reduce `undefined` ids in the DOM.",
      "Adds `data-testid` value of `ds-link` to the parent element.",
    ],
  },
  {
    date: "2024-11-07",
    version: "3.4.2",
    type: "Update",
    affects: ["Styles"],
    notes: [
      "Updates styles to prevent links with icons breaking onto two lines.",
    ],
  },
  {
    date: "2024-03-14",
    version: "3.0.0",
    type: "Update",
    affects: ["Styles", "Functionality"],
    notes: [
      "A general refactor of the Link component to improve its usability with other elements and within application frameworks.",
      "Chakra 2.8 update.",
    ],
  },
  {
    date: "2023-11-14",
    version: "2.1.3",
    type: "Update",
    affects: ["Styles"],
    notes: [
      "Added `hasVisitedStyles` prop which is used to include or omit the component's visited state styles. Default value is true.",
      "Removed `disabled` variant from theme file, as it isn't being used.",
    ],
  },
];
