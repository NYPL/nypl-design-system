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
    date: "2026-11-25",
    version: "5.0.0",
    type: "Update",
    affects: ["Documentation", "Styles"],
    notes: [
      "Updates styles to align with v5 designs.",
      "Adds Storybook documentation and a changelog for the component.",
    ],
  },
  {
    date: "2026-06-09",
    version: "4.2.0",
    type: "Update",
    affects: ["Accessibility", "Functionality"],
    notes: [
      "Removes the default `aria-atomic` and `aria-live` attributes from the internal `HelperErrorText` component.",
    ],
  },
  {
    date: "2026-03-31",
    version: "4.1.6",
    type: "Bug Fix",
    affects: ["Accessibility", "Functionality"],
    notes: [
      "Always renders the internal `HelperErrorText` component. This resolves aria-live announcement issues when there is invalid text but no helper text.",
    ],
  },
];
