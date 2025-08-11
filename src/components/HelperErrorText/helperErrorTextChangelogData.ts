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
    affects: ["Documentation", "Functionality", "Styles"],
    notes: [
      "Removes `ariaAtomic` and `ariaLive` props and instructs developers to use the native HTML attributes instead.",
      "Removes explicit `className` prop as interface can be extended to include Chakra prop or HTML attribute types.",
      "Removes default external spacing.",
      "Updated the internal use of ids to reduce `undefined` ids in the DOM.",
      "Removes the `className` prop in favor of `rest`.",
      "Adds `data-testid` value of `ds-helperErrorText` to the parent element.",
    ],
  },
  {
    date: "2024-09-19",
    version: "3.3.2",
    type: "Bug Fix",
    affects: ["Styles"],
    notes: [
      "Fixes issue where, if text value was not a string, necessary styles weren't applied.",
    ],
  },
  {
    date: "2024-07-25",
    version: "3.2.0",
    type: "Update",
    affects: ["Functionality"],
    notes: ["Exports the `HelperErrorTextProps` interface."],
  },
  {
    date: "2024-03-14",
    version: "3.0.0",
    type: "Update",
    affects: ["Styles"],
    notes: ["Chakra 2.8 update."],
  },
];
