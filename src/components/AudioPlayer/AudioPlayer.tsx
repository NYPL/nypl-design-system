import { Box, chakra, useMultiStyleConfig } from "@chakra-ui/react";
import React, { forwardRef } from "react";

import ComponentWrapper from "../ComponentWrapper/ComponentWrapper";

/* Define all third party services, will be used for type check
 * and also used to create the AudioType
 */
const thirdPartyServices = ["libsyn", "soundcloud", "spotify"] as const;
export type ThirdPartyAudioType = typeof thirdPartyServices[number];
export type AudioType = ThirdPartyAudioType | "file";

export interface AudioPlayerProps {
  /** Required string used to specify the type of audio playback */
  audioType: AudioType;
  /** Optional className you can add in addition to `audio-player` */
  className?: string;
  /** Optional string to set the text for the audio player description */
  descriptionText?: string;
  /** Optional string to set a code snippet provided by Libsyn, SoundCloud or Spotify; the
   * `AudioPlayer` component will accept the `embedCode` prop or the `filePath` prop
   */
  embedCode?: string;
  /** Optional string to set the audio file, the path can be relative or absolute
   * referring to a locally hosted file, or a fully qualified URL pointing to a locally hosted file
   * or to another domain altogether.
   * IMPORTANT: This prop will not be used for this version of the AudioPlayer component
   */
  filePath?: string;
  /** Optional string to set the text for a `Heading` component */
  headingText?: string;
  /** Optional string to set the text for a `HelperErrorText` component */
  helperText?: string;
  /** ID that other components can cross reference for accessibility purposes */
  id?: string;
  /** Optional title to added to the `<iframe>` element for improved accessibility. If omitted, a
   * generic title will be added
   */
  iframeTitle?: string;
}

/**
 * Renders an audio player from 3rd party services such as Libsyn, SoundCloud, and Spotify.
 */
export const AudioPlayer = chakra(
  forwardRef<HTMLDivElement, React.PropsWithChildren<AudioPlayerProps>>(
    (props, ref?) => {
      const {
        audioType,
        className,
        descriptionText,
        embedCode,
        filePath,
        headingText,
        helperText,
        id,
        iframeTitle = null,
        ...rest
      } = props;

      // The root iframe object generated from the embedCode,
      const iframeDoc = parseIframeEmbedCode(embedCode);
      // when embedCode was provided but it was a broken code
      let isInvalidEmbed =
        embedCode && (!iframeDoc || !isValidEmbedCode(iframeDoc));

      const errorMessage =
        "<strong>Error: </strong>This audio player has not been configured properly. Please contact the site administrator.";

      function isValidEmbedCode(doc: HTMLIFrameElement): boolean {
        return audioType !== "file" && doc?.src?.includes(audioType);
      }

      if (iframeTitle !== null) {
        if (audioType === "file") {
          console.warn(
            'NYPL Reservoir AudioPlayer: The `iframeTitle` prop will be ignored when the `audioType` prop is set to "file."'
          );
        } else {
          // Only set the iframe title if it doesn't already have it in the iframe
          if (iframeDoc && !iframeDoc.title) {
            iframeDoc.title = iframeTitle
              ? iframeTitle
              : "Embedded audio player";
          }
        }
      }

      // A friendly message states that we don't support filePath prop
      const isLocalAudioFile = filePath || audioType === "file";
      if (isLocalAudioFile) {
        console.warn(
          "The current AudioPlayer does not support local hosted audio files."
        );
      }

      const isLocalWithEmbed = audioType === "file" && embedCode;
      if (isLocalWithEmbed) {
        // Question: should we show this now?
        console.warn(
          'NYPL Reservoir AudioPlayer: The `embedCode` prop will be ignored when the audioType prop is set to "file".'
        );
      }
      const isFileWithoutPath = audioType === "file" && !filePath;
      if (isFileWithoutPath) {
        // Question: Should we remove this warning since we don't support filepath?
        console.warn(
          'NYPL Reservoir AudioPlayer: The `filePath` prop is required when the `audioType` prop is set to "file."'
        );
      }

      const isThirdPartyService = !!thirdPartyServices.find(
        (service) => service === audioType
      );
      const isThirdPartyWithLocal = isThirdPartyService && filePath;
      if (isThirdPartyWithLocal) {
        console.warn(
          "NYPL Reservoir AudioPlayer: The `filePath` prop will be ignored when using a 3rd party streaming service."
        );
      }

      const isThirdPartyWithoutCode = isThirdPartyService && !embedCode;
      if (isThirdPartyWithoutCode) {
        console.warn(
          "NYPL Reservoir AudioPlayer: The `embedCode` prop is required when using a 3rd party streaming service."
        );
        isInvalidEmbed = true;
      }

      const styles = useMultiStyleConfig("AudioPlayer", {});

      /**
       * Builder function to build the finalized element, we prioritize localfile over 3rd party code
       * but for the current version, we only use 3rd party code.
       */
      function buildFinalElement(): JSX.Element {
        return iframeDoc ? (
          <Box
            dangerouslySetInnerHTML={{
              __html: iframeDoc.outerHTML,
            }}
          />
        ) : null;
      }

      const embedElement = buildFinalElement();

      return (
        <Box
          className={className}
          data-testid="audio-player-component"
          id={id}
          ref={ref}
          __css={styles}
          {...rest}
        >
          <ComponentWrapper
            headingText={headingText}
            descriptionText={descriptionText}
            helperText={helperText}
            helperTextStyles={styles.helperErrorText}
            id={`${id}-componentWrapper`}
          >
            {isInvalidEmbed ? (
              <Box
                dangerouslySetInnerHTML={{ __html: errorMessage }}
                __css={styles.invalid}
              />
            ) : (
              <>{embedElement}</>
            )}
          </ComponentWrapper>
        </Box>
      );
    }
  )
);

/**
 * Parse the embedCode string to a DOM object for proper formatted HTML element.
 * We are only interested in the iframe element
 */
export function parseIframeEmbedCode(
  embedCode: string
): HTMLIFrameElement | undefined {
  try {
    const doc = new DOMParser().parseFromString(embedCode, "text/html");
    const nodeName = doc?.body?.firstChild?.nodeName;
    // A valid embedCode should contain only the iframe element
    if (nodeName === "IFRAME") return doc.body.firstChild as HTMLIFrameElement;
  } catch (err) {
    console.error(err);
  }
  return undefined;
}

export default AudioPlayer;
