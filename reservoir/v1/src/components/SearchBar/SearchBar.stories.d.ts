import type { Meta, StoryObj } from "@storybook/react";
import SearchBar from "./SearchBar";
declare const meta: Meta<typeof SearchBar>;
export default meta;
type Story = StoryObj<typeof SearchBar>;
/**
 * Main Story for the SearchBar component. This must contains the `args`
 * and `parameters` properties in this object.
 */
export declare const WithControls: Story;
export declare const isClearableExample: Story;
export declare const HelperErrorTextComponentExample: Story;
export declare const SearchAutocomplete: Story;
export declare const ErrorState: Story;
export declare const DisabledState: Story;
export declare const HeadingDescriptionExample: Story;
export declare const SearchBarValueExample: Story;
