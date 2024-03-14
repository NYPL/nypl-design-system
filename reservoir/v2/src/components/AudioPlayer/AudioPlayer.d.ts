import React from "react";
declare const thirdPartyServices: readonly ["libsyn", "soundcloud", "spotify"];
export type ThirdPartyAudioType = typeof thirdPartyServices[number];
export type AudioType = ThirdPartyAudioType | "file";
export interface AudioPlayerProps {
    /** Required string used to specify the type of audio playback. */
    audioType: AudioType;
    /** Optional className you can add in addition to `audio-player`. */
    className?: string;
    /** Optional string to set the text for the audio player description. */
    descriptionText?: string;
    /** Optional string to set a code snippet provided by Libsyn, SoundCloud or Spotify; the
     * `AudioPlayer` component will accept the `embedCode` prop or the `filePath` prop.
     */
    embedCode?: string;
    /** Optional string to set the audio file, the path can be relative or absolute
     * referring to a locally hosted file, or a fully qualified URL pointing to a locally hosted file
     * or to another domain altogether.
     * TODO: This prop won't be used until a future version.
     */
    /** Optional string value used to set the text for a `Heading` component, or
     * a DS Heading component that can be passed in.
     */
    headingText?: string | JSX.Element;
    /** Optional string to set the text for a `HelperErrorText` component. */
    helperText?: string;
    /** ID that other components can cross reference for accessibility purposes. */
    id?: string;
    /** Optional title to added to the `<iframe>` element for improved accessibility. If omitted, a
     * generic title will be added.
     */
    iframeTitle?: string;
}
/**
 * Renders an audio player from 3rd party services such as Libsyn, SoundCloud, and Spotify.
 */
export declare const AudioPlayer: import("@chakra-ui/react").ChakraComponent<React.ForwardRefExoticComponent<AudioPlayerProps & {
    children?: React.ReactNode;
} & React.RefAttributes<HTMLDivElement>>, {}>;
/**
 * Parse the embedCode string to a DOM object for proper formatted HTML element.
 * We are only interested in the iframe element.
 */
export declare function parseIframeEmbedCode(embedCode: string | undefined): HTMLIFrameElement | undefined;
export default AudioPlayer;
