import * as React from "react";
import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import renderer from "react-test-renderer";

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
      expect(screen.getByTestId("video-player-component")).toBeInTheDocument();
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

    beforeEach(() => {
      utils = render(
        <VideoPlayer videoType={VideoPlayerTypes.Vimeo} videoId={videoId} />
      );
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

  describe("using embedCode prop", () => {
    const embedCode = `<iframe src="https://player.vimeo.com/video/421404144?h=5467db7edd" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>`;

    beforeEach(() => {
      utils = render(<VideoPlayer embedCode={embedCode} />);
    });

    it("Renders custom embed code", () => {
      expect(screen.getByTitle("Video player")).toBeInTheDocument();
    });

    it("Renders Vimeo video", () => {
      expect(screen.getByTitle("Video player")).toHaveAttribute(
        "src",
        `https://player.vimeo.com/video/421404144?h=5467db7edd`
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

  describe("prop validation", () => {
    it("Throws error if videoId not formatted properly", () => {
      render(
        <VideoPlayer
          videoType={VideoPlayerTypes.Vimeo}
          videoId="http://vimeo.com/474719268"
          aspectRatio={VideoPlayerAspectRatios.FourByThree}
        />
      );
      expect(
        screen.getByText(
          "This video player has not been configured properly. Please contact the site administrator."
        )
      ).toBeInTheDocument();
    });
  });

  it("renders the UI snapshot correctly", () => {
    const videoPlayerWithoutText = renderer
      .create(
        <VideoPlayer
          id="video-player-without-text"
          videoId="474719268"
          videoType={VideoPlayerTypes.Vimeo}
        />
      )
      .toJSON();
    const videoPlayerWithText = renderer
      .create(
        <VideoPlayer
          descriptionText="VideoPlayer description"
          headingText="VideoPlayer Heading"
          id="video-player-with-text"
          helperText="VideoPlayer helper test."
          videoId="474719268"
          videoType={VideoPlayerTypes.Vimeo}
        />
      )
      .toJSON();
    const videoPlayerUsingEmbedCode = renderer
      .create(
        <VideoPlayer
          descriptionText="VideoPlayer description"
          embedCode="<iframe src='https://player.vimeo.com/video/421404144?h=5467db7edd' width='640' height='360' frameborder='0' allow='autoplay; fullscreen; picture-in-picture' allowfullscreen></iframe>"
          headingText="VideoPlayer Heading"
          id="video-player-with-text"
          helperText="VideoPlayer helper test."
        />
      )
      .toJSON();
    const videoPlayerError = renderer
      .create(
        <VideoPlayer
          id="video-player-error"
          videoId="https://vimeo.com/474719268"
          videoType={VideoPlayerTypes.Vimeo}
        />
      )
      .toJSON();

    expect(videoPlayerWithoutText).toMatchSnapshot();
    expect(videoPlayerWithText).toMatchSnapshot();
    expect(videoPlayerUsingEmbedCode).toMatchSnapshot();
    expect(videoPlayerError).toMatchSnapshot();
  });
});
