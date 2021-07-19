import { expect } from "chai";
import * as Enzyme from "enzyme";
import * as React from "react";
import VideoPlayer from "./VideoPlayer";
import { VideoPlayerAspectRatios, VideoPlayerTypes } from "./VideoPlayerTypes";

describe("VideoPlayer", () => {
  let container;

  describe("YouTube player", () => {
    before(() => {
      container = Enzyme.mount(
        <VideoPlayer
          videoType={VideoPlayerTypes.YouTube}
          videoId="nm-dD2tx6bk"
        />
      );
    });

    it("Renders VideoPlayer container", () => {
      expect(container.find(".video-player").exists()).to.equal(true);
    });

    it("Renders VideoPlayer iframe", () => {
      expect(container.find("iframe").exists()).to.equal(true);
    });

    it("Renders YouTube video", () => {
      expect(container.find("iframe").prop("src")).to.contain("youtube.com");
    });
  });

  describe("Vimeo player", () => {
    before(() => {
      container = Enzyme.mount(
        <VideoPlayer videoType={VideoPlayerTypes.Vimeo} videoId="474719268" />
      );
    });

    it("Renders VideoPlayer container", () => {
      expect(container.find(".video-player").exists()).to.equal(true);
    });

    it("Renders VideoPlayer iframe", () => {
      expect(container.find("iframe").exists()).to.equal(true);
    });

    it("Renders Vimeo video", () => {
      expect(container.find("iframe").prop("src")).to.contain("vimeo.com");
    });
  });

  describe("aspect ratio", () => {
    it("Renders with 4:3 aspect ratio", () => {
      container = Enzyme.mount(
        <VideoPlayer
          videoType={VideoPlayerTypes.Vimeo}
          videoId="474719268"
          aspectRatio={VideoPlayerAspectRatios.FourByThree}
        />
      );

      expect(
        container.find(".video-player").hasClass("video-player--four-by-three")
      ).to.equal(true);
    });

    it("Renders with 1:1 aspect ratio", () => {
      container = Enzyme.mount(
        <VideoPlayer
          videoType={VideoPlayerTypes.Vimeo}
          videoId="474719268"
          aspectRatio={VideoPlayerAspectRatios.Square}
        />
      );

      expect(
        container.find(".video-player").hasClass("video-player--square")
      ).to.equal(true);
    });
  });
});
