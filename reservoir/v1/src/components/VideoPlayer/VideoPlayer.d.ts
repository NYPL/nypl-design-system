import React from "react";
import { HelperErrorTextType } from "../HelperErrorText/HelperErrorText";
export declare const VideoPlayerAspectRatiosArray: readonly ["fourByThree", "sixteenByNine", "square"];
export declare const VideoPlayerTypesArray: readonly ["vimeo", "youtube"];
export type VideoPlayerAspectRatios = typeof VideoPlayerAspectRatiosArray[number];
export type VideoPlayerTypes = typeof VideoPlayerTypesArray[number];
export interface VideoPlayerProps {
    /** Optional aspect ratio prop to control the sizing of the video player; if
     * omitted, the video player defaults to `sixteen-by-nine` */
    aspectRatio?: VideoPlayerAspectRatios;
    /** Optional className you can add in addition to `video-player` */
    className?: string;
    /** Optional string to set the text for a video description */
    descriptionText?: string;
    /** Optional string to set a code snippet provided by YouTube or Vimeo; the
     * `videoPlayer` component will accept the `embedCode` prop or the `videoId`
     * and `videoType` props */
    embedCode?: string;
    /** Optional string to set the text for a `Heading` component */
    headingText?: string;
    /** Optional string to set the text for a `HelperErrorText` component */
    helperText?: HelperErrorTextType;
    /** ID that other components can cross reference for accessibility purposes */
    id?: string;
    /** Optional title to be added to the `<iframe>` element for improved
     * accessibility; this title should describe in a few words the content of
     * the video; if omitted, a generic title will be added; if a `title`
     * attribute is already present in the `embedCode` prop, this prop will be
     * ignored */
    iframeTitle?: string;
    /** Offers the ability to hide the helper/invalid text. */
    showHelperInvalidText?: boolean;
    /** Required YouTube or Vimeo video ID. This value can be pulled from a
     * video's YouTube or Vimeo URL. */
    videoId?: string;
    /** Required. Used to specify which video service is being used. */
    videoType?: VideoPlayerTypes;
}
export declare const VideoPlayer: import("@chakra-ui/react").ChakraComponent<React.ForwardRefExoticComponent<VideoPlayerProps & {
    children?: React.ReactNode;
} & React.RefAttributes<HTMLDivElement>>, {}>;
export default VideoPlayer;
