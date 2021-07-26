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

// describe("VideoPlayer", () => {
//   let container;

//   describe("YouTube player", () => {
//     beforeEach(() => {
//       container = render(
//         <VideoPlayer
//           videoType={VideoPlayerTypes.YouTube}
//           videoId="nm-dD2tx6bk"
//         />
//       );
//     });

//     it("Renders VideoPlayer container", () => {
//       expect(container.find(".video-player").exists()).toEqual(true);
//     });

//     it("Renders VideoPlayer iframe", () => {
//       expect(container.find("iframe").exists()).toEqual(true);
//     });

//     it("Renders YouTube video", () => {
//       expect(container.find("iframe").prop("src")).to.contain("youtube.com");
//     });
//   });

//   describe("Vimeo player", () => {
//     beforeEach(() => {
//       container = render(
//         <VideoPlayer videoType={VideoPlayerTypes.Vimeo} videoId="474719268" />
//       );
//     });

//     it("Renders VideoPlayer container", () => {
//       expect(container.find(".video-player").exists()).toEqual(true);
//     });

//     it("Renders VideoPlayer iframe", () => {
//       expect(container.find("iframe").exists()).toEqual(true);
//     });

//     it("Renders Vimeo video", () => {
//       expect(container.find("iframe").prop("src")).to.contain("vimeo.com");
//     });
//   });

//   describe("custom iframe title", () => {
//     beforeEach(() => {
//       container = render(
//         <VideoPlayer
//           videoType={VideoPlayerTypes.Vimeo}
//           videoId="474719268"
//           iframeTitle="My custom iframe title."
//         />
//       );
//     });

//     it("Renders VideoPlayer container", () => {
//       expect(container.find(".video-player").exists()).toEqual(true);
//     });

//     it("Uses iframeTitle prop to add custom title attribute to iframe", () => {
//       expect(container.find("iframe").prop("title")).toEqual(
//         "My custom iframe title."
//       );
//     });
//   });

//   describe("aspect ratio", () => {
//     it("Renders with 4:3 aspect ratio", () => {
//       container = render(
//         <VideoPlayer
//           videoType={VideoPlayerTypes.Vimeo}
//           videoId="474719268"
//           aspectRatio={VideoPlayerAspectRatios.FourByThree}
//         />
//       );

//       expect(
//         container.find(".video-player").hasClass("video-player--four-by-three")
//       ).toEqual(true);
//     });

//     it("Renders with 16:9 aspect ratio", () => {
//       container = render(
//         <VideoPlayer
//           videoType={VideoPlayerTypes.Vimeo}
//           videoId="474719268"
//           aspectRatio={VideoPlayerAspectRatios.SixteenByNine}
//         />
//       );

//       expect(
//         container
//           .find(".video-player")
//           .hasClass("video-player--sixteen-by-nine")
//       ).toEqual(true);
//     });

//     it("Renders with 1:1 aspect ratio", () => {
//       container = render(
//         <VideoPlayer
//           videoType={VideoPlayerTypes.Vimeo}
//           videoId="474719268"
//           aspectRatio={VideoPlayerAspectRatios.Square}
//         />
//       );

//       expect(
//         container.find(".video-player").hasClass("video-player--square")
//       ).toEqual(true);
//     });
//   });

//   describe("prop validation", () => {
//     it("Throws error if videoId not formatted properly", () => {
//       container = render(
//         <VideoPlayer
//           videoType={VideoPlayerTypes.Vimeo}
//           videoId="http://vimeo.com/474719268"
//           aspectRatio={VideoPlayerAspectRatios.FourByThree}
//         />
//       );

//       expect(
//         container.find(".video-player").hasClass("video-player--errored")
//       ).toEqual(true);
//     });
//   });
// });
