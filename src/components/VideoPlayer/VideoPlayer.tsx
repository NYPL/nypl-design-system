import {
  Box,
  chakra,
  ChakraComponent,
  useMultiStyleConfig,
} from "@chakra-ui/react";
import React, { forwardRef } from "react";

import ComponentWrapper from "../ComponentWrapper/ComponentWrapper";
import { HelperErrorTextType } from "../HelperErrorText/HelperErrorText";

export const VideoPlayerAspectRatiosArray = [
  "fourByThree",
  "sixteenByNine",
  "square",
] as const;
export const VideoPlayerTypesArray = ["vimeo", "youtube"] as const;
export type VideoPlayerAspectRatios =
  typeof VideoPlayerAspectRatiosArray[number];
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
  /** Optional string value used to set the text for a `Heading` component, or
   * a DS Heading component that can be passed in.
   */
  headingText?: string | JSX.Element;
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

export const VideoPlayer: ChakraComponent<
  React.ForwardRefExoticComponent<
    React.PropsWithChildren<VideoPlayerProps> &
      React.RefAttributes<HTMLDivElement>
  >,
  VideoPlayerProps
> = chakra(
  forwardRef<HTMLDivElement, React.PropsWithChildren<VideoPlayerProps>>(
    (props, ref?) => {
      const {
        aspectRatio,
        className,
        descriptionText,
        embedCode,
        headingText,
        helperText,
        id,
        iframeTitle,
        showHelperInvalidText = true,
        videoId,
        videoType,
        ...rest
      } = props;

      const iframeTitleFinal =
        videoType === "vimeo"
          ? iframeTitle || "Vimeo video player"
          : iframeTitle || "YouTube video player";

      const videoSrc =
        videoType === "vimeo"
          ? `https://player.vimeo.com/video/${videoId}?autoplay=0&loop=0`
          : `https://www.youtube.com/embed/${videoId}?disablekb=1&autoplay=0&fs=1&modestbranding=0`;

      const iFrameTitleEmbedCode = iframeTitle
        ? `${iframeTitle}`
        : `Video player`;

      const embedCodeFinal =
        embedCode &&
        embedCode.includes("<iframe") &&
        !embedCode.includes("title=")
          ? embedCode.replace(
              `<iframe `,
              `<iframe title="${iFrameTitleEmbedCode}" `
            )
          : embedCode;

      const errorMessage =
        "<strong>Error:</strong> This video player has not been configured " +
        "properly. Please contact the site administrator.";

      let isInvalid = false;
      if (!embedCodeFinal && !videoType && !videoId) {
        console.warn(
          "NYPL Reservoir VideoPlayer: Pass in either the `embedCode` prop or " +
            "both the `videoType` and `videoId` props; none were passed."
        );
        isInvalid = true;
      } else if (!embedCodeFinal && !videoType) {
        console.warn(
          "NYPL Reservoir VideoPlayer: The `videoType` prop is also required. " +
            "Only the `videoId` prop was set."
        );
        isInvalid = true;
      } else if (!embedCodeFinal && !videoId) {
        console.warn(
          "NYPL Reservoir VideoPlayer: The `videoId` prop is also required. " +
            "Only the `videoType` prop was set."
        );
        isInvalid = true;
      } else if (embedCodeFinal && (videoType || videoId)) {
        console.warn(
          "NYPL Reservoir VideoPlayer: Pass in either the `embedCode` prop or " +
            "both the `videoType` and `videoId` props; all were set."
        );
        isInvalid = true;
      }

      if (
        videoId &&
        (videoId.includes("://") ||
          videoId.includes("http") ||
          videoId.includes(".") ||
          videoId.includes("youtube") ||
          videoId.includes("vimeo"))
      ) {
        console.warn(
          "NYPL Reservoir VideoPlayer: The `videoId` prop is not configured properly."
        );
        isInvalid = true;
      }

      if (
        embedCodeFinal &&
        ((!embedCodeFinal.includes("vimeo.com") &&
          !embedCodeFinal.includes("youtube.com")) ||
          !embedCodeFinal.includes("<iframe") ||
          !embedCodeFinal.includes("</iframe"))
      ) {
        console.warn(
          "NYPL Reservoir VideoPlayer: The `embedCode` prop is not configured properly."
        );
        isInvalid = true;
      }

      const variant = isInvalid ? "invalid" : aspectRatio;
      const styles = useMultiStyleConfig("VideoPlayer", { variant });

      const embedElement = embedCodeFinal ? (
        <span dangerouslySetInnerHTML={{ __html: embedCodeFinal }} />
      ) : (
        <Box
          as="iframe"
          src={videoSrc}
          title={iframeTitleFinal}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; fullscreen; gyroscope; picture-in-picture"
          allowFullScreen
          __css={styles.iframe}
        />
      );

      return (
        <Box
          className={className}
          data-testid="video-player-component"
          id={id}
          ref={ref}
          __css={styles.base}
          {...rest}
        >
          {isInvalid ? (
            <span dangerouslySetInnerHTML={{ __html: errorMessage }} />
          ) : (
            <ComponentWrapper
              headingText={headingText ? headingText : undefined}
              descriptionText={descriptionText ? descriptionText : undefined}
              helperText={
                helperText && showHelperInvalidText ? helperText : undefined
              }
              id={`${id}-componentWrapper`}
            >
              <Box __css={styles.inside}>{embedElement}</Box>
            </ComponentWrapper>
          )}
        </Box>
      );
    }
  )
);

export default VideoPlayer;
