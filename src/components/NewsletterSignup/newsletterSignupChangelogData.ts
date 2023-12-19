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
    affects: ["Styles"],
    notes: ["Chakra 2.8 update."],
  },
  {
    date: "2023-11-09",
    version: "2.1.2",
    type: "Update",
    affects: ["Styles"],
    notes: [
      "Updates the dark mode color variants for the `newsletterSignupType` prop.",
    ],
  },
  {
    date: "2023-10-26",
    version: "2.1.1",
    type: "Update",
    affects: ["Accessibility"],
    notes: [
      "Updates `tabindex` value from 0 to -1. See Accessibility section for details.",
    ],
  },
  {
    date: "2023-10-18",
    version: "2.1.0",
    type: "New Feature",
    affects: ["Accessibility", "Documentation", "Functionality", "Styles"],
    notes: ["Adds the NewsletterSignup component to the DS library"],
  },
];
