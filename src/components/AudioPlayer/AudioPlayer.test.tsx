import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import * as React from "react";
import renderer from "react-test-renderer";
import AudioPlayer from "./AudioPlayer";

const libsynCode = `<iframe title="Libsyn Player" style="border: none" src="//html5-player.libsyn.com/embed/episode/id/18268511/height/90/theme/custom/thumbnail/yes/direction/backward/render-playlist/no/custom-color/87A93A/" height="90" width="100%" scrolling="no" allowfullscreen webkitallowfullscreen mozallowfullscreen oallowfullscreen msallowfullscreen ></iframe> `;
const soundCloudCode = ` <iframe width="100%" height="300" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/311382449&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true" ></iframe> <div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;" > <a href="https://soundcloud.com/nypl" title="New York Public Library" target="_blank" style="color: #cccccc; text-decoration: none;" >New York Public Library</a > · <a href="https://soundcloud.com/nypl/journalism-in-the-age-of-trump" title="Journalism in the Age of Trump" target="_blank" style="color: #cccccc; text-decoration: none;" >Journalism in the Age of Trump</a > </div> `;
const spotifyCode = `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/37i9dQZF1DX0uqkwkR49kK?utm_source=generator" width="100%" height="380" frameborder="0" allowfullscreen="" allow="clipboard-write; encrypted-media; fullscreen; picture-in-picture" ></iframe>`;

describe("AudioPlayer Accessibility", () => {
  it("Passes axe accessibility test for Libsyn player", async () => {
    const { container } = render(
      <AudioPlayer embedCode={libsynCode} audioType="libsyn" />
    );
    expect(await axe(container)).toHaveNoViolations();
  });

  it("Passes axe accessibility test for Soundcloud player", async () => {
    const { container } = render(
      <AudioPlayer embedCode={soundCloudCode} audioType="soundcloud" />
    );
    expect(await axe(container)).toHaveNoViolations();
  });

  it("Passes axe accessibility test for Spotify Player", async () => {
    const { container } = render(
      <AudioPlayer embedCode={spotifyCode} audioType="spotify" />
    );
    expect(await axe(container)).toHaveNoViolations();
  });

  it("Passes axe accessibility test with labels", async () => {
    const { container } = render(
      <AudioPlayer
        embedCode={libsynCode}
        audioType="libsyn"
        headingText="Audio Player Heading"
        descriptionText="Audio Player description text."
        helperText="Audio Player helper text."
      />
    );
    expect(await axe(container)).toHaveNoViolations();
  });
});

describe("AudioPlayer valid render", () => {
  beforeEach(() => {
    render(
      <AudioPlayer
        embedCode={libsynCode}
        audioType="libsyn"
        headingText="Audio Player Heading"
        descriptionText="Audio Player description text."
        helperText="Audio Player helper text."
      />
    );
  });

  it("Renders AudioPlayer container", () => {
    expect(screen.getByTestId("audio-player-component")).toBeInTheDocument();
  });

  it("Renders iframe", () => {
    expect(screen.getByTitle("Libsyn Player")).toBeInTheDocument();
    expect(screen.getByTitle("Libsyn Player")).toHaveAttribute(
      "allowfullscreen"
    );
    expect(screen.getByTitle("Libsyn Player")).toHaveAttribute(
      "src",
      "//html5-player.libsyn.com/embed/episode/id/18268511/height/90/theme/custom/thumbnail/yes/direction/backward/render-playlist/no/custom-color/87A93A/"
    );
  });

  it("Renders headingText", () => {
    expect(screen.getByText("Audio Player Heading")).toBeInTheDocument();
  });

  it("Renders descriptionText", () => {
    expect(
      screen.getByText("Audio Player description text.")
    ).toBeInTheDocument();
  });

  it("Renders helperText", () => {
    expect(screen.getByText("Audio Player helper text.")).toBeInTheDocument();
  });
});

describe("Custom iframe title", () => {
  it("Uses the default iframe title if it exists", () => {
    render(
      <AudioPlayer
        embedCode={libsynCode}
        audioType="libsyn"
        iframeTitle="Custom iframe title"
      />
    );
    expect(screen.getByTitle("Libsyn Player")).toBeInTheDocument();
  });

  it("Uses a generic iframe title if none was provided", () => {
    render(<AudioPlayer embedCode={spotifyCode} audioType="spotify" />);
    expect(screen.getByTitle("Embedded audio player")).toBeInTheDocument();
  });

  it("Uses iframeTitle prop to add iframe title to iframe", () => {
    render(
      <AudioPlayer
        embedCode={soundCloudCode}
        audioType="soundcloud"
        iframeTitle="Custom iframe title"
      />
    );
    expect(screen.getByTitle("Custom iframe title")).toBeInTheDocument();
  });
});

describe("Props validation", () => {
  it("Renders error message when embedCode snippet is not described in audioType", () => {
    render(
      <AudioPlayer
        embedCode={soundCloudCode}
        audioType="spotify"
        iframeTitle="Custom iframe title"
      />
    );
    expect(
      screen.getByText(
        "This audio player has not been configured properly. Please contact the site administrator."
      )
    ).toBeInTheDocument();
  });

  it("Renders error message when embedCode is not an iframe", () => {
    render(
      <AudioPlayer
        embedCode="<h1>hello, world</h1>"
        audioType="spotify"
        iframeTitle="Custom iframe title"
      />
    );
    expect(
      screen.getByText(
        "This audio player has not been configured properly. Please contact the site administrator."
      )
    ).toBeInTheDocument();
  });

  describe("Throw warnings", () => {
    const warn = jest.spyOn(console, "warn");
    it("Throws warning when the audioType is 'spotify' or 'soundcloud' or 'libsyn' but without embedCode", () => {
      render(<AudioPlayer audioType="spotify" />);
      expect(warn).toHaveBeenCalledWith(
        "NYPL Reservoir AudioPlayer: The `embedCode` prop is required when using a 3rd party streaming service."
      );
    });
  });
});

describe("AudioPlay Snapshots", () => {
  it("Renders the well formatted AudioPlayer UI ", () => {
    const audioWithFullText = renderer
      .create(
        <AudioPlayer
          embedCode={libsynCode}
          audioType="libsyn"
          headingText="Audio Player Heading"
          descriptionText="Audio Player description text."
          helperText="Audio Player helper text."
        />
      )
      .toJSON();
    const spotifyAudio = renderer
      .create(<AudioPlayer embedCode={spotifyCode} audioType="spotify" />)
      .toJSON();
    const soundcloudAudio = renderer
      .create(<AudioPlayer embedCode={soundCloudCode} audioType="soundcloud" />)
      .toJSON();
    const libsynAudio = renderer
      .create(<AudioPlayer embedCode={libsynCode} audioType="libsyn" />)
      .toJSON();

    expect(audioWithFullText).toMatchSnapshot();
    expect(spotifyAudio).toMatchSnapshot();
    expect(soundcloudAudio).toMatchSnapshot();
    expect(libsynAudio).toMatchSnapshot();
  });
  it("Renders the errored AudioPlayer UI", () => {
    const audioPlayerError = renderer
      .create(
        <AudioPlayer embedCode="<h1>Hello, World</h1>" audioType="libsyn" />
      )
      .toJSON();
    expect(audioPlayerError).toMatchSnapshot();
  });
});
