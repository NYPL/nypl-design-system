import type { Meta, StoryObj } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";

import AudioPlayer from "./AudioPlayer";
import Heading from "../Heading/Heading";

const meta: Meta<typeof AudioPlayer> = {
  title: "Components/Media & Icons/AudioPlayer",
  component: AudioPlayer,
  decorators: [withDesign],
  argTypes: {
    audioType: {
      control: { type: "radio" },
      options: ["file", "libsyn", "soundcloud", "spotify"],
    },
    className: { control: false },
    id: { control: false },
  },
};

export default meta;
type Story = StoryObj<typeof AudioPlayer>;

const libsynPlayerEmbedCode =
  '<iframe title="Libsyn Player" style="border: none" src="//html5-player.libsyn.com/embed/episode/id/18268511/height/90/theme/custom/thumbnail/yes/direction/backward/render-playlist/no/custom-color/87A93A/" height="90" width="100%" scrolling="no" allowfullscreen webkitallowfullscreen mozallowfullscreen oallowfullscreen msallowfullscreen></iframe>';

/**
 * Main Story for the AudioPlayer component. This must contains the `args`
 * and `parameters` properties in this object.
 */
export const WithControls: Story = {
  args: {
    audioType: "libsyn",
    className: undefined,
    descriptionText:
      "Audio description lorem ipsum dolor simet. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed posuere consectetur est at lobortis.",
    embedCode: libsynPlayerEmbedCode,
    headingText: "Audio Title",
    helperText: "Audio helper text lorem ipsum dolor simet.",
    id: "audioplayer-id",
    iframeTitle: "Libsyn Audio",
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Main?node-id=36835%3A25338",
    },
    jest: ["AudioPlayer.test.tsx"],
  },
};

export const WithCustomHeading: Story = {
  render: () => (
    <AudioPlayer
      headingText={<Heading level="h4">Custom H4 Heading</Heading>}
      embedCode={libsynPlayerEmbedCode}
      audioType="libsyn"
    />
  ),
};

// The following are additional AudioPlayer example Stories.
export const LibsynExample: Story = {
  render: () => (
    <AudioPlayer embedCode={libsynPlayerEmbedCode} audioType="libsyn" />
  ),
};
export const SoundcloudExample: Story = {
  render: () => (
    <AudioPlayer
      embedCode='<iframe width="100%" height="300" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/311382449&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true" ></iframe> <div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;" > <a href="https://soundcloud.com/nypl" title="New York Public Library" target="_blank" style="color: #cccccc; text-decoration: none;" >New York Public Library</a > · <a href="https://soundcloud.com/nypl/journalism-in-the-age-of-trump" title="Journalism in the Age of Trump" target="_blank" style="color: #cccccc; text-decoration: none;" >Journalism in the Age of Trump</a > </div>'
      audioType="soundcloud"
    />
  ),
};

export const SpotifyExample: Story = {
  render: () => (
    <AudioPlayer
      embedCode='<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/37i9dQZF1DX0uqkwkR49kK?utm_source=generator" width="100%" height="380" frameborder="0" allowfullscreen="" allow="clipboard-write; encrypted-media; fullscreen; picture-in-picture" ></iframe>'
      audioType="spotify"
    />
  ),
};

export const ErroredExample: Story = {
  render: () => (
    <AudioPlayer embedCode="<h1>Invalid Embed Code</h1>" audioType="spotify" />
  ),
};
