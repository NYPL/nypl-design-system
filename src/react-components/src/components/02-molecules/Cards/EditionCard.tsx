/* MC-14 Edition Card */
import * as React from "react";
import bem from "../../../utils/bem";
import Heading from "../../01-atoms/Text/Headings/Heading";
import Image from "../../01-atoms/Images/Image/Image";
import BasicLink from "../../01-atoms/Links/BasicLink";


export interface EditionCardProps {
  id: string;
  blockName?: string;

  coverUrl: string;

  editionHeadingElement: JSX.Element;

  editionInfo: string[];

  readOnlineLink?: string;
  downloadLink?: string;
}

/**
 * EditionCard component that renders information for an edition.
 */
export default function EditionCard(props: React.PropsWithChildren<EditionCardProps>) {
  const { id, blockName, coverUrl,
    editionHeadingElement,
    editionInfo = [],
    readOnlineLink, downloadLink } = props;
  const baseClass = "edition-card";
  console.log("got here2", readOnlineLink, downloadLink);

  const getButtonsElement = (readOnlineLink: string, downloadLink: string, baseClass: string) => {
    if (!readOnlineLink && !downloadLink) {
      return <div className={(bem("missing-links", [], baseClass))}>Unavailable to read online</div>;
    } else {
      return <div className={bem("card-ctas", [], baseClass)}>
        {readOnlineLink &&
          <BasicLink className={bem("card-info-link", [], baseClass)} url={readOnlineLink}>Read Online</BasicLink>
        }
        {downloadLink &&
          <BasicLink className={bem("card-info-link", [], baseClass)} url={downloadLink}>Download</BasicLink>
        }
      </div>;
    }
  };

  return (
    <div className={bem(baseClass, [], blockName)}>
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
        {getButtonsElement(readOnlineLink, downloadLink, baseClass)}
      </div>
    </div>
  );
}
