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
    date: "2024-02-05",
    version: "2.1.5",
    type: "Update",
    affects: ["Documentation", "Functionality"],
    notes: ["Added the navigationMoreVert (vertical ellipsis) icon."],
  },
  {
    date: "2024-01-04",
    version: "2.1.4",
    type: "Update",
    affects: ["Documentation", "Functionality"],
    notes: [
      "Added the actionDelete, actionHome, actionLockClosed, actionPayment, communicationCall, communicationChatBubble, and communicationEmail icons.",
    ],
  },
];
