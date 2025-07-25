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
    affects: ["Documentation"],
    notes: [
      "Renames `type` to `variant`.",
      "Updated the internal use of ids to reduce `undefined` ids in the DOM.",
      "Adds `data-testid` value of `ds-modal` to the parent element.",
    ],
  },
  {
    date: "2025-05-22",
    version: "3.6.2",
    type: "Update",
    affects: ["Styles"],
    notes: [
      "Removes use of `useNYPLBreakpoints` and replaces with equivalent Chakra syntax.",
    ],
  },
  {
    date: "2025-03-20",
    version: "3.5.5",
    type: "Update",
    affects: ["Styles"],
    notes: ["Updates spacing and border radius to match VDL."],
  },
  {
    date: "2024-05-15",
    version: "3.1.3",
    type: "Update",
    affects: ["Functionality", "Styles"],
    notes: ["Adds new `type` prop for the `'confirmation'` variant."],
  },
  {
    date: "2024-03-28",
    version: "3.0.1",
    type: "Update",
    affects: ["Styles"],
    notes: ["Sets default heading size to 'heading4' for `Modal` header."],
  },
  {
    date: "2024-03-14",
    version: "3.0.0",
    type: "Update",
    affects: ["Functionality", "Styles"],
    notes: [
      "Chakra 2.8 update.",
      "Uses the useDSHeading hook internally to render a DS Heading for the `Modal`'s `headingText` prop.",
    ],
  },
];
