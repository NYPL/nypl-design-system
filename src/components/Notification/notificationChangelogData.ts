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
    affects: ["Documentation", "Functionality"],
    notes: [
      "Removes deprecated `noMargin` prop.",
      "Removes `ariaLabel` prop and instructs developers to use the native HTML attribute instead.",
      "Removes explicit `className` prop as interface can be extended to include Chakra prop or HTML attribute types.",
      "Renames `notificationType` to `variant`.",
      "Updates the internal use of ids to reduce `undefined` ids in the DOM.",
      "Removes the explicit `className` prop in favor of `rest`.",
      "Removes the internal `notification-icon` class.",
      "Adds `data-testid` value of `ds-notification` to the parent element.",
    ],
  },
  {
    date: "2025-04-24",
    version: "3.6.1",
    type: "Update",
    affects: ["Styles"],
    notes: ["Variant font colors updated to sync with the VDL."],
  },
  {
    date: "2025-04-10",
    version: "3.6.0",
    type: "Update",
    affects: ["Styles"],
    notes: ["Style updates to sync with the VDL."],
  },
  {
    date: "2024-03-14",
    version: "3.0.0",
    type: "Update",
    affects: ["Styles"],
    notes: ["Chakra 2.8 update."],
  },
  {
    date: "2024-02-22",
    version: "2.1.6",
    type: "Update",
    affects: ["Styles"],
    notes: ["Updates focus ring color to match color of text."],
  },
  {
    date: "2023-12-07",
    version: "2.1.3",
    type: "Update",
    affects: ["Accessibility", "Documentation"],
    notes: [
      "Updated the `notificationHeading` prop to allow JSX to render custom heading elements for accessible heading hierarchy.",
    ],
  },
];
