// OH-30 Header with Image Right
import * as React from "react";
import bem from "../../../utils/bem";
import PageTitle from "../../01-atoms/Text/Headings/PageTitle";
import Image from "../../01-atoms/Images/Image/Image";
import BodyText from "../../01-atoms/Text/Text/BodyText";

export interface HeaderImgRightProps {
  headerId: string;

  pageTitleText: string;
  isImageDecorative: boolean;
  imageAltText?: string;

  imgUrl: string;
  imgAttributes?: {};
  imgModifiers?: string[];

  bodyText?: JSX.Element;
}

export default function HeaderImgRight(props: React.PropsWithChildren<HeaderImgRightProps>) {

    const { headerId, pageTitleText, bodyText, imgUrl } = props;
    const baseClass = "header-with-image-right";

    return (
      <div className={bem(baseClass)}>
        <div className={bem("content", [], baseClass)}>
          <div className={bem("heading", [], baseClass)}>
            <PageTitle headerId={headerId} text={pageTitleText}/>
          </div>
          <div className={bem("text", [], baseClass)}>
            <BodyText bodyContent={bodyText}></BodyText>
          </div>
        </div>
        <div className={bem("image", [], baseClass)}>
          <Image src={imgUrl} isDecorative={true}></Image>
        </div>
      </div>
    );
  }

