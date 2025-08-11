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
      "Removes `tag` and `mini` values from `textSizesArray`.",
      "Removes explicit `className` prop as interface can be extended to include Chakra prop or HTML attribute types.",
      "Removes explicit `children` prop as its not required when React.PropsWithChildren is used.",
      "Removes `checkListChildrenError` function because this warning will no longer be used.",
      "Removes default external spacing.",
      "Updated the internal use of ids to reduce `undefined` ids in the DOM.",
      "Adds `data-testid` value of `ds-styledList` to the parent element.",
    ],
  },
  {
    date: "2024-07-25",
    version: "3.2.0",
    type: "Update",
    affects: ["Functionality"],
    notes: ["Exports the `StyledListTextSizes` type."],
  },
  {
    date: "2024-03-14",
    version: "3.0.0",
    type: "Update",
    affects: ["Styles"],
    notes: ["Chakra 2.8 update."],
  },
];
