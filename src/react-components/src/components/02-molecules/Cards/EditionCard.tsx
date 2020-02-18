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
  language: string,
  license: string,
  readOnlineLink: string,
  downloadLink: string,
  /** Element to render when there are no links. */
  noLinkElement?: JSX.Element
};

export interface EditionCardProps {
  id: string;
  blockName?: string;
  modifiers?: string[];

  coverUrl: string;

  editionHeadingElement: JSX.Element;
  editionInfo: string[];

  readOnlineLink?: string;
  downloadLink?: string;

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
  const getButtonsElem = (readOnlineLink: string, downloadLink: string, baseClass: string) =>
    <div className={bem("card-ctas", [], baseClass)}>
      {readOnlineLink &&
        <BasicLink className={bem("card-info-link", [], baseClass)} url={readOnlineLink}>Read Online</BasicLink>
      }
      {downloadLink &&
        <BasicLink className={bem("card-info-link", [], baseClass)} url={downloadLink}>Download</BasicLink>
      }
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
