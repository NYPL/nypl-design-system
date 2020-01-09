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

  editionHeadingText: string;

  editionInfo: string[];

  readOnlineLink?: string;
  downloadLink?: string;
}

export default class EditionCard extends React.Component<EditionCardProps, {}> {
  constructor(props: EditionCardProps) {
    super(props);
  }

  getButtonsElement(readOnlineLink: string, downloadLink: string, baseClass: string): JSX.Element {
    if (!readOnlineLink && !downloadLink) {
      return <div className={(bem("missing-links", [], baseClass))}>Unavailable to read online</div>;
    }

    return <div className={bem("card-ctas", [], baseClass)}>
      {readOnlineLink &&
        <BasicLink className={bem("card-info-link", [], baseClass)} url={readOnlineLink}>Read Online</BasicLink>
      }
      {downloadLink &&
        <BasicLink className={bem("card-info-link", [], baseClass)} url={downloadLink}>Download</BasicLink>
      }
    </div>;
  }
  render(): JSX.Element {
    const { id, blockName, coverUrl,
      editionHeadingText,
      editionInfo,
      readOnlineLink, downloadLink } = this.props;
    const baseClass = "edition-card";

    return (
      <div className={bem(baseClass, [], blockName)}>
        <Heading id={id} level={3} text={editionHeadingText} blockName={blockName ? blockName : baseClass} />
        <div className={bem("card-content", [], baseClass)}>
          <div className={bem("card-image", [], baseClass)}>
            <Image src={coverUrl} isDecorative={true}></Image>
          </div>
          <div className={bem("edition-info", [], baseClass)}>
            {editionInfo.map((value, index) => {
              return <span className={bem("edition-info-item", [], baseClass)} key={index}>{value}</span>;
            })}
          </div>
          {this.getButtonsElement(readOnlineLink, downloadLink, baseClass)}
        </div>
      </div>
    );
  }
}
