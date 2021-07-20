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
    modifiers = [],
    videoId,
    videoType,
  } = props;

  let embedCode;
  let iframeTitle;
  let videoSrc;

  {
    aspectRatio && modifiers.push(aspectRatio);
  }

  switch (videoType) {
    case VideoPlayerTypes.Vimeo:
      videoSrc = `https://player.vimeo.com/video/${videoId}?autoplay=0&loop=0`;
      iframeTitle = "Vimeo video player";
      break;
    case VideoPlayerTypes.YouTube:
      videoSrc = `https://www.youtube.com/embed/${videoId}?disablekb=1&autoplay=0&fs=1&modestbranding=0`;
      iframeTitle = "YouTube video player";
      break;
  }

  embedCode = (
    <iframe
      src={videoSrc}
      title={iframeTitle}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; fullscreen; gyroscope; picture-in-picture"
      allowFullScreen
      {...attributes}
    ></iframe>
  );

  if (!videoType && !videoId) {
    console.warn("VideoPlayer requires props for videoType and videoId");
    embedCode = "Error: VideoPlayer requires props for videoType and videoId";
  } else if (!videoType) {
    console.warn("VideoPlayer requires a prop video-player");
    embedCode = "Error: VideoPlayer requires a prop for videoType";
  } else if (!videoId) {
    console.warn("VideoPlayer requires a prop for videoId");
    embedCode = "Error: VideoPlayer requires a prop for videoId";
  }

  return (
    <div
      className={bem("video-player", modifiers, "", [className])}
      title={videoId}
    >
      {embedCode}
    </div>
  );
}
