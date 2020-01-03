/* MC-14 Edition Card */
import * as React from "react";
import bem from "../../../utils/bem";
import IconLink from "../../01-atoms/Links/IconLink";
import Heading from "../../01-atoms/Text/Headings/Heading";
import Image from "../../01-atoms/Images/Image/Image";
import Link from "../../01-atoms/Links/Link";


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

    return <div>
      {readOnlineLink &&
      <div className={bem("edition-info-link", [], baseClass)}>
        <Link className={bem("button", [], baseClass)} url={readOnlineLink}>Read Online</Link>
        </div>
      }
      {downloadLink &&
        <div className={bem("edition-info-link", [], baseClass)}><Link className={bem("button", [], baseClass)} url={downloadLink}>Download</Link></div>
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
          <div className={bem("image", [], baseClass)}>
            { /*TODO: If image size shouldn't change with resize,
              Hardcode max-width and max-height of image somewhere,
              as RN returns covers of arbitrary size*/ }
            <Image src={coverUrl} isDecorative={true}></Image>
          </div>
          <div className={bem("edition-info", [], baseClass)}>
            {editionInfo.map((value, index) => {
              return <span className={bem("edition-info-item", [], baseClass)} key={index}>{value}</span>;
            })}
          </div>
          <div>
            {this.getButtonsElement(readOnlineLink, downloadLink, baseClass)}
          </div>
        </div>
      </div>
    );
  }
}
