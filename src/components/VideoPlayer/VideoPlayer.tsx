import * as React from "react";
import bem from "../../utils/bem";
import { VideoPlayerAspectRatios, VideoPlayerTypes } from "./VideoPlayerTypes";

export interface VideoPlayerProps {
  /** Optional aspect ratio prop to control the sizing of the video player; if omitted, the video player defaults to `sixteen-by-nine` */
  aspectRatio?: VideoPlayerAspectRatios;
  /** Optional additional attributes passed to the video player iframe */
  attributes?: { [key: string]: any };
  /** Optional className you can add in addition to `video-player` */
  className?: string;
  /** Optional title to be added to the `<iframe>` element for improved accessibility; this title should describe in a few words the content of the video; if omitted, a generic title will be added */
  iframeTitle?: string;
  /** Modifiers array for use with BEM. See how to work with modifiers and BEM here: http://getbem.com/introduction/ */
  modifiers?: string[];
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
    attributes = {},
    className,
    iframeTitle,
    modifiers = [],
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

  {
    aspectRatio && modifiers.push(aspectRatio);
  }

  const embedCode = (
    <iframe
      src={videoSrc}
      title={iframeTitleFinal}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; fullscreen; gyroscope; picture-in-picture"
      allowFullScreen
      {...attributes}
    ></iframe>
  );

  let errorMessage;
  if (!videoType && !videoId) {
    console.warn("VideoPlayer requires the `videoType` and `videoId` props");
    errorMessage =
      "Error: VideoPlayer requires the `videoType` and `videoId` props";
  } else if (!videoType) {
    console.warn("VideoPlayer requires the `videoType` prop");
    errorMessage = "Error: VideoPlayer requires the `videoType` prop";
  } else if (!videoId) {
    console.warn("VideoPlayer requires the `videoId` prop");
    errorMessage = "Error: VideoPlayer requires the `videoId` prop";
  }

  {
    errorMessage && modifiers.push("auto-height");
  }

  return (
    <div className={bem("video-player", modifiers, "", [className])}>
      {errorMessage ? errorMessage : embedCode}
    </div>
  );
}
