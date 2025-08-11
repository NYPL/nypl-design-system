import type { Meta, StoryObj } from "@storybook/react-vite";
import FilterBarPopup from "./FilterBarPopup";
declare const meta: Meta<typeof FilterBarPopup>;
export default meta;
type Story = StoryObj<typeof FilterBarPopup>;
/**
 * Main Story for the FilterBarPopup component. This must contains the `args`
 * and `parameters` properties in this object.
 */
export declare const WithControls: Story;
export declare const FilterBarPopupHeading: Story;
export declare const MultipleChildren: Story;
export declare const TotalResultsExample: Story;
