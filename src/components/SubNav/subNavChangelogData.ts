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
    notes: ["Adds `as` prop to `SubNavLink`."],
  },
  {
    date: "2025-08-11",
    version: "4.0.0",
    type: "Update",
    affects: ["Functionality"],
    notes: [
      "Removes explicit `className` prop as interface can be extended to include Chakra prop or HTML attribute types.",
      "Removes explicit `children` prop as its not required when React.PropsWithChildren is used.",
      "Replaces `actionBackgroundColorsArray` and `highlightColorsArray` with shared background/highlight colors arrays.",
      "Removes child validation and warning.",
      "Updates the internal use of ids to reduce `undefined` ids in the DOM.",
      "Updates the className `selectedItem` to `ds-subNav-selectedItem` to align with the new naming convention.",
      "Removes the explicit `className` prop in favor of `rest`.",
      "Adds `data-testid` value of `ds-subNav` to the parent element.",
    ],
  },
  {
    date: "2025-04-24",
    version: "3.6.1",
    type: "Update",
    affects: ["Styles"],
    notes: ["Added dark mode color styles."],
  },
  {
    date: "2024-12-05",
    version: "3.5.0",
    type: "New Feature",
    affects: ["Documentation", "Functionality"],
    notes: ["Added the `SubNav` component."],
  },
];
