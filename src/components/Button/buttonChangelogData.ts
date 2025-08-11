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
    affects: ["Documentation", "Functionality", "Styles"],
    notes: [
      "Removes deprecated `link` buttonType.",
      "Changes theme name from `CustomButton` to `ReservoirButton` for consistency.",
      "Removes explicit `className` prop as interface can be extended to include Chakra prop or HTML attribute types.",
      "Removes `type` and `onClick` props (as HTML equivalents may be used) and updates docs.",
      "Renames `buttonType` to `variant`.",
      "Replaces `buttonSizesArray` with shared sizes array.",
      "Removes `Children.map` logic; consuming apps must now use the `iconOnly` variant for icon-only buttons.",
      "Updates the `id` prop to be optional and generates a random id if not provided.",
      "Adds `data-testid` value of `ds-button` to the parent element.",
    ],
  },
  {
    date: "2025-05-22",
    version: "3.6.2",
    type: "Bug Fix",
    affects: ["Styles"],
    notes: ["Fixes the style transitions."],
  },
  {
    date: "2025-04-10",
    version: "3.6.0",
    type: "Update",
    affects: ["Styles"],
    notes: [
      "Explicitly assigns the height value for each size option to align with VDL.",
    ],
  },
  {
    date: "2024-07-25",
    version: "3.2.0",
    type: "Update",
    affects: ["Functionality"],
    notes: ["Exports the `ButtonProps` interface."],
  },
  {
    date: "2024-04-25",
    version: "3.1.1",
    type: "Update",
    affects: ["Styles"],
    notes: ["Updated the background colors for the `noBrand` variant."],
  },
  {
    date: "2024-03-14",
    version: "3.0.0",
    type: "Update",
    affects: ["Styles"],
    notes: ["Chakra 2.8 update."],
  },
];
