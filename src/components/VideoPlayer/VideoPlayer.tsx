import * as React from "react";
import { Box, useMultiStyleConfig } from "@chakra-ui/react";
import ComponentWrapper from "../ComponentWrapper/ComponentWrapper";
import { VideoPlayerAspectRatios, VideoPlayerTypes } from "./VideoPlayerTypes";
import { getVariant } from "../../utils/utils";

export interface VideoPlayerProps {
  /** Optional aspect ratio prop to control the sizing of the video player; if omitted, the video player defaults to `sixteen-by-nine` */
  aspectRatio?: VideoPlayerAspectRatios;
  /** Optional className you can add in addition to `video-player` */
  className?: string;
  /** Optional string to set the text for a video description */
  descriptionText?: string;
  /** Optional string to set the text for a `Heading` component */
  headingText?: string;
  /** Optional string to set the text for a `HelperErrorText` component */
  helperText?: string;
  /** Optional title to be added to the `<iframe>` element for improved accessibility; this title should describe in a few words the content of the video; if omitted, a generic title will be added */
  iframeTitle?: string;
  /** Offers the ability to hide the helper/invalid text. */
  showHelperInvalidText?: boolean;
  /** Required YouTube or Vimeo video ID. This value can be pulled from a video's YouTube or Vimeo URL. */
  videoId: string;
  /** Required. Used to specify which video service is being used. */
  videoType: VideoPlayerTypes;
}

export default function VideoPlayer(
  props: React.PropsWithChildren<VideoPlayerProps>
) {
  const {
    aspectRatio,
    className,
    descriptionText,
    headingText,
    helperText,
    iframeTitle,
    showHelperInvalidText = true,
    videoId,
    videoType,
  } = props;

  const iframeTitleFinal =
    videoType === VideoPlayerTypes.Vimeo
      ? iframeTitle || "Vimeo video player"
      : iframeTitle || "YouTube video player";

  const videoSrc =
    videoType === VideoPlayerTypes.Vimeo
      ? `https://player.vimeo.com/video/${videoId}?autoplay=0&loop=0`
      : `https://www.youtube.com/embed/${videoId}?disablekb=1&autoplay=0&fs=1&modestbranding=0`;

  const errorMessage =
    "<strong>Error:</strong> This video player has not been configured properly. Please contact the site administrator.";

  let isInvalid = false;
  if (!videoType && !videoId) {
    console.warn("VideoPlayer requires the `videoType` and `videoId` props");
    isInvalid = true;
  } else if (!videoType) {
    console.warn("VideoPlayer requires the `videoType` prop");
    isInvalid = true;
  } else if (!videoId) {
    console.warn("VideoPlayer requires the `videoId` prop");
    isInvalid = true;
  }

  if (
    videoId.includes("://") ||
    videoId.includes("http") ||
    videoId.includes(".") ||
    videoId.includes("youtube") ||
    videoId.includes("vimeo")
  ) {
    console.warn("VideoPlayer `videoId` prop is not configured properly");
    isInvalid = true;
  }

  const variant = isInvalid
    ? "invalid"
    : getVariant(aspectRatio, VideoPlayerAspectRatios);
  const styles = useMultiStyleConfig("VideoPlayer", { variant });

  console.log(`variant == ${variant}`);

  const embedCode = (
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
    <Box className={className} __css={styles}>
      {isInvalid ? (
        <span dangerouslySetInnerHTML={{ __html: errorMessage }} />
      ) : (
        <ComponentWrapper
          headingText={headingText ? headingText : null}
          descriptionText={descriptionText ? descriptionText : null}
          helperText={helperText && showHelperInvalidText ? helperText : null}
        >
          <Box __css={styles.inside}>{embedCode}</Box>
        </ComponentWrapper>
      )}
    </Box>
  );
}
