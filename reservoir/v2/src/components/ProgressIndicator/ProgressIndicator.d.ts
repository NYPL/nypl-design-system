import React from "react";
export declare const progressIndicatorSizesArray: readonly ["default", "small"];
export declare const progressIndicatorTypesArray: readonly ["circular", "linear"];
export type ProgressIndicatorSizes = typeof progressIndicatorSizesArray[number];
export type ProgressIndicatorTypes = typeof progressIndicatorTypesArray[number];
export interface ProgressIndicatorProps {
    /** The darkMode prop is deprecated and should no longer be used. */
    darkMode?: boolean;
    /** ID that other components can cross reference for accessibility purposes. */
    id: string;
    /** Whether the `ProgressIndicator` should be linear or circular. */
    indicatorType?: ProgressIndicatorTypes;
    /** Whether the progress animation should display because the `value` prop is
     * not known. When this is set to `true`, the `value` prop will be ignored. */
    isIndeterminate?: boolean;
    /** The text to display in an HTML `label` element. */
    labelText: string;
    /** Visually show or hide the label text. When set to `false`, then the label
     * text will be added to the parent component as its `aria-label` attribute. */
    showLabel?: boolean;
    /** The size of the linear or circular progress. */
    size?: ProgressIndicatorSizes;
    /** A number between 0 to 100 that defines the progress' value. */
    value?: number;
}
/**
 * A component that displays a progress status for any task that takes a long
 * time to complete or consists of multiple steps. Examples include downloading,
 * uploading, or processing.
 */
export declare const ProgressIndicator: import("@chakra-ui/react").ChakraComponent<React.ForwardRefExoticComponent<ProgressIndicatorProps & React.RefAttributes<HTMLDivElement>>, {}>;
export default ProgressIndicator;
