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
    version: "3.0.0",
    type: "Update",
    affects: ["Styles"],
    notes: ["Sets default heading size to 'heading4' for Modal header."],
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
