import {
  Box,
  chakra,
  ChakraComponent,
  useMultiStyleConfig,
} from "@chakra-ui/react";
import React, { useState, forwardRef, useEffect } from "react";

import ComponentWrapper from "../ComponentWrapper/ComponentWrapper";

/*
 * List all the third-party services to be used for basic type checks
 * and to define AudioType.
 */
const thirdPartyServices = ["libsyn", "soundcloud", "spotify"] as const;
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
  /*  filePath?: string; */
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
export const AudioPlayer: ChakraComponent<
  React.ForwardRefExoticComponent<
    React.PropsWithChildren<AudioPlayerProps> &
      React.RefAttributes<HTMLDivElement>
  >,
  AudioPlayerProps
> = chakra(
  forwardRef<HTMLDivElement, React.PropsWithChildren<AudioPlayerProps>>(
    (props, ref?) => {
      const {
        audioType,
        className,
        descriptionText,
        embedCode,
        headingText,
        helperText,
        id,
        iframeTitle = null,
        ...rest
      } = props;

      const [invalidEmbed, setInvalidEmbed] = useState<boolean>(false);
      const [iframeDoc, setIframeDoc] = useState<HTMLIFrameElement | undefined>(
        undefined
      );

      /**
       * Main hooks to check the embedCode structure.
       */
      useEffect(() => {
        // The root iframe object generated from the embedCode.
        const iframe = parseIframeEmbedCode(embedCode);

        // when no embedCode or it was a broken code.
        let isInvalidEmbed =
          !embedCode || !iframe || !isValidEmbedCode(audioType, iframe);

        // Only set the iframe title if it doesn't already have it in the iframe.
        if (iframe && !iframe.title) {
          iframe.title = iframeTitle ? iframeTitle : "Embedded audio player";
        }

        const isThirdPartyService: boolean = !!thirdPartyServices.find(
          (service) => service === audioType
        );
        const isThirdPartyWithoutCode = isThirdPartyService && !embedCode;
        if (isThirdPartyWithoutCode) {
          console.warn(
            "NYPL Reservoir AudioPlayer: The `embedCode` prop is required when using a 3rd party streaming service."
          );
          isInvalidEmbed = true;
        }

        setInvalidEmbed(isInvalidEmbed);
        setIframeDoc(iframe);
      }, [embedCode, audioType, iframeTitle]);

      const errorMessage =
        "<strong>Error: </strong>This audio player has not been configured properly. Please contact the site administrator.";

      function isValidEmbedCode(
        audioType: AudioType,
        doc: HTMLIFrameElement
      ): boolean {
        return audioType !== "file" && doc?.src?.includes(`${audioType}.com`);
      }

      const styles = useMultiStyleConfig("AudioPlayer", {});

      /**
       * Builder function to build the finalized render element, we prioritize localfile over 3rd party code
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
        <ComponentWrapper
          className={`audioplayer ${className}`}
          headingText={headingText}
          descriptionText={descriptionText}
          helperText={helperText}
          id={`${id}-componentWrapper`}
          data-testid="audio-player-component"
          ref={ref}
          __css={styles.base}
          {...rest}
        >
          {invalidEmbed ? (
            <Box
              dangerouslySetInnerHTML={{ __html: errorMessage }}
              __css={styles.invalid}
            />
          ) : (
            <>{embedElement}</>
          )}
        </ComponentWrapper>
      );
    }
  )
);

/**
 * Parse the embedCode string to a DOM object for proper formatted HTML element.
 * We are only interested in the iframe element.
 */
export function parseIframeEmbedCode(
  embedCode: string | undefined
): HTMLIFrameElement | undefined {
  try {
    const doc = new DOMParser().parseFromString(embedCode, "text/html");
    const nodeName = doc?.body?.firstChild?.nodeName;
    // A valid embedCode should contain only the iframe element.
    if (nodeName === "IFRAME") return doc.body.firstChild as HTMLIFrameElement;
  } catch (err) {
    console.error(err);
  }
  return undefined;
}

export default AudioPlayer;
