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
    date: "2026-06-18",
    version: "4.3.0",
    type: "Update",
    affects: ["Functionality"],
    notes: [
      "Adds `onClose` prop (only used when `isDismissible` is set to true).",
    ],
  },
  {
    date: "2025-08-11",
    version: "4.0.0",
    type: "Update",
    affects: ["Functionality"],
    notes: [
      "Removes explicit `className` prop as interface can be extended to include Chakra prop or HTML attribute types.",
      "Renames `type` to `variant`.",
      "Replaces `bannerTypesArray`, `bannerBgColorsArray`, and `bannerHighlightColorsArray` with shared message variants and background/highlight colors arrays.",
      "Updates the internal use of ids to reduce `undefined` ids in the DOM.",
      "Removes the internal `banner-icon` class.",
      "Adds `data-testid` value of `ds-banner` to the parent element.",
    ],
  },
  {
    date: "2025-03-20",
    version: "3.5.5",
    type: "Update",
    affects: ["Documentation", "Functionality", "Styles"],
    notes: [
      "Update space between heading and content.",
      "Removes `ariaLabel` prop and instructs developers to use the native HTML attribute instead.",
    ],
  },
  {
    date: "2024-08-29",
    version: "3.3.0",
    type: "Update",
    affects: ["Functionality"],
    notes: [
      "Render HTML content when passed as a string in the `content` prop.",
    ],
  },
  {
    date: "2024-07-25",
    version: "3.2.0",
    type: "Update",
    affects: ["Functionality"],
    notes: ["Exports the `BannerProps` interface."],
  },
  {
    date: "2024-04-25",
    version: "3.1.1",
    type: "Update",
    affects: ["Styles"],
    notes: ["Updated the `warning` variant to use `ui.warning.tertiary`."],
  },
  {
    date: "2024-04-11",
    version: "3.1.0",
    type: "Update",
    affects: ["Styles"],
    notes: ["New component added to the library."],
  },
];
