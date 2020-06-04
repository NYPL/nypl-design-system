import * as React from "react";
import { HeroTypes } from "./HeroTypes";
export interface HeroProps {
    /** Can be Primary, secondary, tertiary, or 50/50. */
    heroType: HeroTypes;
    /** Required heading element. */
    heading: JSX.Element;
    /** Optional subheader that displays underneath the
     * required heading element.
     */
    subHeaderText?: JSX.Element;
    /** Optional details area that contains location data. */
    locationDetails?: JSX.Element;
    /** Content creators can modify the foreground color
     * when this component is used on Exhibition pages.
     */
    foregroundColor?: string;
    /** Content creators can modify the background color
     * when this component is used on Exhibition pages.
     */
    backgroundColor?: string;
    /** Image used for primary Hero types. Note, cannot
     * be used in conjunction with image.
     */
    backgroundImageSrc?: string;
    /** Image used for secondary Hero types. Note, cannot
     * be used in conjunction with backgroundImageSrc.
     */
    image?: JSX.Element;
}
export default function Hero(
    props: React.PropsWithChildren<HeroProps>
): JSX.Element;
