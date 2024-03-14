export declare const affectTypesArray: readonly ["Accessibility", "Documentation", "Functionality", "Styles"];
export type AffectTypes = typeof affectTypesArray[number];
export interface ChangelogData {
    /** Date of the release; format yyyy-mm-dd; when adding new entry during development, set value as "Prerelease" */
    date: string;
    /** Version nunber of the release; when adding new entry during development, set value as "Prerelease" */
    version: string;
    /** The type of update  */
    type: "Bug Fix" | "New Feature" | "Update";
    /** The scope of the update */
    affects: AffectTypes[];
    /** Details about the update; this array will be rendered as a bulleted list */
    notes: string[];
}
export interface ComponentChangelogTableProps {
    changelogData: ChangelogData[];
}
export declare const ComponentChangelogTable: (props: ComponentChangelogTableProps) => import("@emotion/react/jsx-runtime").JSX.Element;
export default ComponentChangelogTable;
