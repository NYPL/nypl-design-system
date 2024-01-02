import { render, RenderResult, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import * as React from "react";
import renderer from "react-test-renderer";

import Heading from "../Heading/Heading";
import VideoPlayer from "./VideoPlayer";

describe("VideoPlayer Accessibility", () => {
  it("passes axe accessibility test", async () => {
    const { container } = render(
      <VideoPlayer videoType="youtube" videoId="nm-dD2tx6bk" />
    );
    expect(await axe(container)).toHaveNoViolations();
  });
});

describe("VideoPlayer", () => {
  const videoId = "nm-dD2tx6bk";
  let utils: RenderResult;

  describe("YouTube player", () => {
    beforeEach(() => {
      utils = render(<VideoPlayer videoType="youtube" videoId={videoId} />);
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
      utils = render(<VideoPlayer videoType="vimeo" videoId={videoId} />);
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
    const embedCodeWithTitle = `<iframe title="Pre-Existing iFrame Title" src="https://player.vimeo.com/video/421404144?h=5467db7edd" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>`;

    it("Renders custom embed code", () => {
      render(<VideoPlayer embedCode={embedCode} />);
      expect(screen.getByTitle("Video player")).toBeInTheDocument();
      expect(screen.getByTitle("Video player")).toHaveAttribute(
        "src",
        `https://player.vimeo.com/video/421404144?h=5467db7edd`
      );
    });

    it("Renders custom embed code with custom iframe title", () => {
      render(
        <VideoPlayer embedCode={embedCode} iframeTitle="Custom iFrame Title" />
      );
      expect(screen.getByTitle("Custom iFrame Title")).toBeInTheDocument();
    });

    it("Renders custom embed code with pre-existing title", () => {
      render(<VideoPlayer embedCode={embedCodeWithTitle} />);
      expect(
        screen.getByTitle("Pre-Existing iFrame Title")
      ).toBeInTheDocument();
    });

    it("Renders custom embed code with pre-existing title and ignores `iframeTitle` prop", () => {
      render(
        <VideoPlayer
          embedCode={embedCodeWithTitle}
          iframeTitle="Custom iFrame Title"
        />
      );
      expect(
        screen.getByTitle("Pre-Existing iFrame Title")
      ).toBeInTheDocument();
    });
  });

  describe("text elements", () => {
    beforeEach(() => {
      utils = render(
        <VideoPlayer
          videoType="youtube"
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

    it("Renders a custom heading level", () => {
      render(
        <VideoPlayer
          videoType="youtube"
          videoId={videoId}
          headingText={<Heading level="h4">Custom H4 Heading</Heading>}
        />
      );
      expect(screen.getByRole("heading", { level: 4 })).toBeInTheDocument();
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
          videoType="youtube"
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
          videoType="vimeo"
          videoId="474719268"
          iframeTitle="My custom iframe title."
        />
      );
      expect(screen.getByTitle("My custom iframe title.")).toBeInTheDocument();
    });
  });

  describe("prop validation", () => {
    it("Throws error if the videoId prop not is formatted properly", () => {
      render(
        <VideoPlayer
          videoType="vimeo"
          videoId="http://vimeo.com/474719268"
          aspectRatio="fourByThree"
        />
      );
      expect(
        screen.getByText(
          "This video player has not been configured properly. Please contact the site administrator."
        )
      ).toBeInTheDocument();
    });

    it("Throws appropriate error if VideoPlayer props are not configured properly", () => {
      const warn = jest.spyOn(console, "warn");

      render(<VideoPlayer />);
      expect(warn).toHaveBeenCalledWith(
        "NYPL Reservoir VideoPlayer: Pass in either the `embedCode` prop or " +
          "both the `videoType` and `videoId` props; none were passed."
      );

      render(<VideoPlayer videoId="http://vimeo.com/474719268" />);
      expect(warn).toHaveBeenCalledWith(
        "NYPL Reservoir VideoPlayer: The `videoType` prop is also required. " +
          "Only the `videoId` prop was set."
      );

      render(<VideoPlayer videoType="vimeo" />);
      expect(warn).toHaveBeenCalledWith(
        "NYPL Reservoir VideoPlayer: The `videoId` prop is also required. " +
          "Only the `videoType` prop was set."
      );

      render(
        <VideoPlayer
          embedCode="<iframe src='https://player.vimeo.com/video/421404144?h=5467db7edd' width='640' height='360' frameborder='0' allow='autoplay; fullscreen; picture-in-picture' allowfullscreen></iframe>"
          videoType="vimeo"
          videoId="http://vimeo.com/474719268"
        />
      );
      expect(warn).toHaveBeenCalledWith(
        "NYPL Reservoir VideoPlayer: Pass in either the `embedCode` prop or " +
          "both the `videoType` and `videoId` props; all were set."
      );

      render(
        <VideoPlayer
          embedCode="<iframe src='https://player.vimeo.com/video/421404144?h=5467db7edd' width='640' height='360' frameborder='0' allow='autoplay; fullscreen; picture-in-picture' allowfullscreen></iframe>"
          videoType="vimeo"
        />
      );
      expect(warn).toHaveBeenCalledWith(
        "NYPL Reservoir VideoPlayer: Pass in either the `embedCode` prop or " +
          "both the `videoType` and `videoId` props; all were set."
      );

      render(
        <VideoPlayer
          embedCode="<iframe src='https://player.vimeo.com/video/421404144?h=5467db7edd' width='640' height='360' frameborder='0' allow='autoplay; fullscreen; picture-in-picture' allowfullscreen></iframe>"
          videoId="http://vimeo.com/474719268"
        />
      );
      expect(warn).toHaveBeenCalledWith(
        "NYPL Reservoir VideoPlayer: Pass in either the `embedCode` prop or " +
          "both the `videoType` and `videoId` props; all were set."
      );

      const embedCode = `<iframe src="https://player./video/421404144?h=5467db7edd"></iframe>`;
      render(<VideoPlayer embedCode={embedCode} />);
      expect(warn).toHaveBeenCalledWith(
        "NYPL Reservoir VideoPlayer: The `embedCode` prop is not configured properly."
      );
    });
  });

  it("renders the UI snapshot correctly", () => {
    const videoPlayerWithoutText = renderer
      .create(
        <VideoPlayer
          id="video-player-without-text"
          videoId="474719268"
          videoType="vimeo"
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
          videoType="vimeo"
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
          videoType="vimeo"
        />
      )
      .toJSON();
    const withChakraProps = renderer
      .create(
        <VideoPlayer
          id="chakra"
          videoId="474719268"
          videoType="vimeo"
          p="20px"
          color="ui.error.primary"
        />
      )
      .toJSON();
    const withOtherProps = renderer
      .create(
        <VideoPlayer
          id="props"
          videoId="474719268"
          videoType="vimeo"
          data-testid="props"
        />
      )
      .toJSON();

    expect(videoPlayerWithoutText).toMatchSnapshot();
    expect(videoPlayerWithText).toMatchSnapshot();
    expect(videoPlayerUsingEmbedCode).toMatchSnapshot();
    expect(videoPlayerError).toMatchSnapshot();
    expect(withChakraProps).toMatchSnapshot();
    expect(withOtherProps).toMatchSnapshot();
  });

  it("passes a ref to the div warpper element", () => {
    const ref = React.createRef<HTMLDivElement>();
    const { container } = render(
      <VideoPlayer ref={ref} videoType="youtube" videoId="nm-dD2tx6bk" />
    );

    expect(container.querySelectorAll("div")[0]).toBe(ref.current);
  });
});
