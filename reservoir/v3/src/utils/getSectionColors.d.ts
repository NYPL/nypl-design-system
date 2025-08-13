import { SectionTypes } from "../helpers/types";
type ColorSection = {
    primary: string;
    secondary: string | null;
};
type ColorValue = string;
interface GetSectionColorsProps {
    type: SectionTypes;
    colorValue?: "primary" | "secondary";
    isDark?: boolean;
}
export declare function getSectionColors({ type, colorValue, isDark, }: GetSectionColorsProps): ColorSection | ColorValue;
export {};
