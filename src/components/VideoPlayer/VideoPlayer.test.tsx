import * as React from "react";
import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";

import VideoPlayer from "./VideoPlayer";
import { VideoPlayerAspectRatios, VideoPlayerTypes } from "./VideoPlayerTypes";

describe("VideoPlayer Accessibility", () => {
  it("passes axe accessibility test", async () => {
    const { container } = render(
      <VideoPlayer videoType={VideoPlayerTypes.YouTube} videoId="nm-dD2tx6bk" />
    );
    expect(await axe(container)).toHaveNoViolations();
  });
});

describe("VideoPlayer", () => {
  const videoId = "nm-dD2tx6bk";
  let utils;

  describe("YouTube player", () => {
    beforeEach(() => {
      utils = render(
        <VideoPlayer videoType={VideoPlayerTypes.YouTube} videoId={videoId} />
      );
    });

    it("Renders VideoPlayer container", () => {
      expect(
        utils.container.querySelector(".video-player")
      ).toBeInTheDocument();
    });

    it("Renders VideoPlayer iframe", () => {
      expect(screen.getByTitle("YouTube video player")).toBeInTheDocument();
    });

    it("Renders YouTube video", () => {
      expect(screen.getByTitle("YouTube video player")).toHaveAttribute(
        "src",
        `https://www.youtube.com/embed/${videoId}?disablekb=1&autoplay=0&fs=1&modestbranding=0`
      );
    });
  });

  describe("Vimeo player", () => {
    const videoId = "474719268";
    let utils;

    beforeEach(() => {
      utils = render(
        <VideoPlayer videoType={VideoPlayerTypes.Vimeo} videoId={videoId} />
      );
    });

    it("Renders VideoPlayer container", () => {
      expect(
        utils.container.querySelector(".video-player")
      ).toBeInTheDocument();
    });

    it("Renders VideoPlayer iframe", () => {
      expect(screen.getByTitle("Vimeo video player")).toBeInTheDocument();
    });

    it("Renders Vimeo video", () => {
      expect(screen.getByTitle("Vimeo video player")).toHaveAttribute(
        "src",
        `https://player.vimeo.com/video/${videoId}?autoplay=0&loop=0`
      );
    });
  });

  describe("text elements", () => {
    beforeEach(() => {
      utils = render(
        <VideoPlayer
          videoType={VideoPlayerTypes.YouTube}
          videoId={videoId}
          headingText="Video Player Heading"
          descriptionText="Video Player description text."
          helperText="Video Player helper text."
        />
      );
    });

    it("Renders Heading component", () => {
      expect(screen.getByText("Video Player Heading")).toBeInTheDocument();
    });

    it("Renders description text", () => {
      expect(
        screen.getByText("Video Player description text.")
      ).toBeInTheDocument();
    });

    it("Renders HelperErrorText component", () => {
      expect(screen.getByText("Video Player helper text.")).toBeInTheDocument();
    });

    it("does not render the helper text", () => {
      utils.rerender(
        <VideoPlayer
          videoType={VideoPlayerTypes.YouTube}
          videoId={videoId}
          headingText="Video Player Heading"
          descriptionText="Video Player description text."
          helperText="Video Player helper text."
          showHelperInvalidText={false}
        />
      );
      expect(
        screen.queryByText("Video Player helper text.")
      ).not.toBeInTheDocument();
    });
  });

  describe("custom iframe title", () => {
    it("Uses iframeTitle prop to add custom title attribute to iframe", () => {
      render(
        <VideoPlayer
          videoType={VideoPlayerTypes.Vimeo}
          videoId="474719268"
          iframeTitle="My custom iframe title."
        />
      );
      expect(screen.getByTitle("My custom iframe title.")).toBeInTheDocument();
    });
  });

  describe("aspect ratio", () => {
    it("Renders with 4:3 aspect ratio", () => {
      const utils = render(
        <VideoPlayer
          videoType={VideoPlayerTypes.Vimeo}
          videoId="474719268"
          aspectRatio={VideoPlayerAspectRatios.FourByThree}
        />
      );
      expect(utils.container.querySelector(".video-player")).toHaveAttribute(
        "class",
        "video-player video-player--four-by-three "
      );
    });

    it("Renders with 16:9 aspect ratio", () => {
      const utils = render(
        <VideoPlayer
          videoType={VideoPlayerTypes.Vimeo}
          videoId="474719268"
          aspectRatio={VideoPlayerAspectRatios.SixteenByNine}
        />
      );
      expect(utils.container.querySelector(".video-player")).toHaveAttribute(
        "class",
        "video-player video-player--sixteen-by-nine "
      );
    });

    it("Renders with 1:1 aspect ratio", () => {
      const utils = render(
        <VideoPlayer
          videoType={VideoPlayerTypes.Vimeo}
          videoId="474719268"
          aspectRatio={VideoPlayerAspectRatios.Square}
        />
      );

      expect(utils.container.querySelector(".video-player")).toHaveAttribute(
        "class",
        "video-player video-player--square "
      );
    });
  });

  describe("prop validation", () => {
    it("Throws error if videoId not formatted properly", () => {
      const utils = render(
        <VideoPlayer
          videoType={VideoPlayerTypes.Vimeo}
          videoId="http://vimeo.com/474719268"
          aspectRatio={VideoPlayerAspectRatios.FourByThree}
        />
      );
      expect(utils.container.querySelector(".video-player")).toHaveAttribute(
        "class",
        "video-player video-player--four-by-three video-player--errored "
      );
    });
  });
});
