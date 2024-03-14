import type { Meta, StoryObj } from "@storybook/react";
import Slider from "./Slider";
declare const meta: Meta<typeof Slider>;
export default meta;
type Story = StoryObj<typeof Slider>;
/**
 * Main Story for the Slider component. This must contains the `args`
 * and `parameters` properties in this object.
 */
export declare const WithControls: Story;
export declare const RangeSliderWithControls: Story;
export declare const SingleSliderStates: Story;
export declare const RangeSliderStates: Story;
export declare const SingleSliderVariants: Story;
export declare const SingleSliderVariantsHiddenLabels: Story;
export declare const RangeSliderWithAdjustedHandles: Story;
export declare const GetInputValuesSingleSlider: Story;
export declare const GetInputValuesRangeSlider: Story;
export declare const FinalSingleSliderValue: Story;
export declare const FinalRangeSliderValue: Story;
export declare const ProgrammaticallyUpdate: Story;
