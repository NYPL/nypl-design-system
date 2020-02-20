/* MC-14 Edition Card */
import * as React from "react";
import bem from "../../../utils/bem";
import Heading from "../../01-atoms/Text/Headings/Heading";
import Image from "../../01-atoms/Images/Image/Image";
import BasicLink from "../../01-atoms/Links/BasicLink";

export type EditionDetails = {
  editionYearHeading: JSX.Element,
  publisherAndLocation: string,
  coverUrl: string,
  language: string | JSX.Element,
  license: string | JSX.Element,
  readOnlineLink: string | JSX.Element,
  downloadLink: string | JSX.Element,
  /** Element to render when there are no links. */
  noLinkElement?: JSX.Element
};

export interface EditionCardProps {
  id: string;
  blockName?: string;
  modifiers?: string[];

  coverUrl: string;

  editionHeadingElement: JSX.Element;
  editionInfo: (string|JSX.Element)[];

  readOnlineLink?: string|JSX.Element;
  downloadLink?: string|JSX.Element;

  noLinkElement?: JSX.Element;
}

/**
 * EditionCard component that renders information for an edition.
 */
export default function EditionCard(props: React.PropsWithChildren<EditionCardProps>) {
  const {
    id,
    blockName,
    modifiers = [],
    coverUrl,
    editionHeadingElement,
    editionInfo = [],
    readOnlineLink,
    downloadLink,
    noLinkElement = <>Unavailable to read online</>
  } = props;
  const baseClass = "edition-card";
  const noLinksElem = <div className={(bem("missing-links", [], baseClass))}>{noLinkElement}</div>;
  const getElem = (link: string|JSX.Element, text: string) => {
    if (typeof link === "string") {
      return <BasicLink className={bem("card-info-link", [], baseClass)} url={link}>{text}</BasicLink>;
    } else {
      return link;
    }
  };

  const getButtonsElem = (readOnlineLink: string | JSX.Element, downloadLink: string | JSX.Element, baseClass: string) =>
    <div className={bem("card-ctas", [], baseClass)}>
      {readOnlineLink &&
        getElem(readOnlineLink, "Read Online") }
      {downloadLink &&
        getElem(downloadLink, "Download") }
    </div>;

  const btns = readOnlineLink || downloadLink ? getButtonsElem(readOnlineLink, downloadLink, baseClass) : noLinksElem;

  return (
    <div className={bem(baseClass, modifiers, blockName)}>
      <Heading id={id} level={3} blockName={blockName ? blockName : baseClass} >{editionHeadingElement}</Heading>
      <div className={bem("card-content", [], baseClass)}>
        <div className={bem("card-image", [], baseClass)}>
          <Image src={coverUrl} isDecorative={true}></Image>
        </div>
        {editionInfo.length > 0 &&
          <div className={bem("edition-info", [], baseClass)}>
            {editionInfo.map((value, index) => {
              return <span className={bem("edition-info-item", [], baseClass)} key={index}>{value}</span>;
            })}
          </div>
        }
        {btns}
      </div>
    </div>
  );
}
