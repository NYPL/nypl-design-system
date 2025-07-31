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
    notes: [
      "Removes explicit `className` prop as interface can be extended to include Chakra prop or HTML attribute types.",
      "Removes `action`, `method`, and `onSubmit` props (as HTML equivalents may be used) and updates docs.",
      "Removes children validation warning.",
      "Updates the `id` prop to be optional and generates a random id if not provided.",
      "Removes the explicit `className` prop in favor of `rest`.",
      "Adds `data-testid` value of `ds-form` to the parent element.",
    ],
  },
  {
    date: "2025-01-16",
    version: "3.5.2",
    type: "Update",
    affects: ["Accessibility"],
    notes: [
      "Updates the `Form` component to remove the `aria-label`. The previous value of `'form'` was redundant and not required.",
    ],
  },
  {
    date: "2024-03-14",
    version: "3.0.0",
    type: "Update",
    affects: ["Documentation"],
    notes: ["Updates the component's type definition to be more specific."],
  },
];
