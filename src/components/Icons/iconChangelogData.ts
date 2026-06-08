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
    affects: ["Accessibility", "Functionality"],
    notes: [
      "Added the `contentBookmark`, `contentBookmarkOutline`, `mapsLayers`, and `navigationArrowDown` icons.",
      "Updated the following icon options to remove the ID attributes: `actionHome`, `actionInfo`, `actionList`, `actionPayment`, `actionSearch`, `contentCopy`, `navigationApps`, `navigationMoreVert`, `navigationSubdirectoryArrowLeft`, and `navigationSubdirectoryArrowRight`.",
    ],
  },
  {
    date: "2026-05-20",
    version: "4.1.7",
    type: "Update",
    affects: ["Functionality"],
    notes: [
      "Updated `iconColorsArray` to include `ui.warning.tertiary`.",
      "Added the `actionTaskAlt`, `communicationDynamicFeed`, `contentTypeAudio`, `contentTypeBook`, `contentTypeEBook`, `contentTypeEvent`, `contentTypeImage`, `contentTypeMisc`, `contentTypeVideo`, and `hardwareLaptop` icons.",
    ],
  },
  {
    date: "2026-03-05",
    version: "4.1.5",
    type: "Bug Fix",
    affects: ["Functionality", "Styles"],
    notes: [
      "Fixed the double application of styles when a custom svg is passed.",
    ],
  },
  {
    date: "2025-12-11",
    version: "4.1.1",
    type: "Update",
    affects: ["Functionality"],
    notes: ["Added the `utilityGridView` and `utilityListView` icons."],
  },
  {
    date: "2025-09-30",
    version: "4.0.2",
    type: "Update",
    affects: ["Functionality"],
    notes: ["Added the `contentCopy` icon."],
  },
  {
    date: "2025-08-11",
    version: "4.0.0",
    type: "Update",
    affects: ["Functionality", "Styles"],
    notes: [
      "Removes the deprecated `IconRotationTypes` type.",
      "Adds `currentColor` option to `iconColorsArray`",
      "Removes explicit `className` prop as interface can be extended to include Chakra prop or HTML attribute types.",
      "Renames `iconType` to `variant`.",
      "Updated the internal use of ids to reduce `undefined` ids in the DOM.",
      "Adds `data-testid` value of `ds-icon` to the parent element.",
    ],
  },
  {
    date: "2025-06-09",
    version: "3.6.3",
    type: "Update",
    affects: ["Functionality"],
    notes: [
      "Added the `actionInfo`, `actionList`, and `navigationApps` icons.",
    ],
  },
  {
    date: "2025-04-10",
    version: "3.6.0",
    type: "Update",
    affects: ["Functionality"],
    notes: [
      "Added the `navigationSubdirectoryArrowLeft` and `navigationSubdirectoryArrowRight` icons.",
    ],
  },
  {
    date: "2025-02-13",
    version: "3.5.4",
    type: "Update",
    affects: ["Functionality"],
    notes: ["Added the `utilityCheck` icon."],
  },
  {
    date: "2024-11-07",
    version: "3.4.2",
    type: "Update",
    affects: ["Functionality"],
    notes: ["Added the `contentFilterList` and `socialX` icons."],
  },
  {
    date: "2024-10-24",
    version: "3.4.1",
    type: "Update",
    affects: ["Functionality"],
    notes: [
      "Added the `decorativeBookBroken` icon.",
      "Added the `xxxxlarge` and `xxxxxlarge` sizes.",
      "Added the `2xlarge`, `3xlarge`, `4xlarge`, and `5xlarge` sustainable size options.",
    ],
  },
  {
    date: "2024-04-11",
    version: "3.1.0",
    type: "Update",
    affects: ["Documentation", "Functionality"],
    notes: ["Added the actionLightbulb icon."],
  },
  {
    date: "2024-03-28",
    version: "3.0.1",
    type: "Update",
    affects: ["Documentation", "Functionality"],
    notes: ["Added the editorMode (pencil) icon."],
  },
  {
    date: "2024-03-14",
    version: "3.0.0",
    type: "Update",
    affects: ["Styles"],
    notes: ["Chakra 2.8 update."],
  },
  {
    date: "2024-02-05",
    version: "2.1.5",
    type: "Update",
    affects: ["Documentation", "Functionality"],
    notes: ["Added the navigationMoreVert (vertical ellipsis) icon."],
  },
  {
    date: "2024-01-24",
    version: "2.1.4",
    type: "Update",
    affects: ["Documentation", "Functionality"],
    notes: [
      "Added the actionDelete, actionHome, actionLockClosed, actionPayment, communicationCall, communicationChatBubble, and communicationEmail icons.",
    ],
  },
];
