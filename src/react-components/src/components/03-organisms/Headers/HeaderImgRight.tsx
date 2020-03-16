// OH-30 Header with Image Right
import * as React from "react";
import bem from "../../../utils/bem";
import Image from "../../01-atoms/Images/Image/Image";
import BodyText from "../../01-atoms/Text/Text/BodyText";
import Heading from "../../01-atoms/Text/Headings/Heading";

export interface HeaderImgRightProps {
  headerId: string;

  pageTitleText: JSX.Element;
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
        <div className={bem("image", [], baseClass)}>
          <Image src={imgUrl} isDecorative={true}></Image>
        </div>
        <div className={bem("heading-text", [], baseClass)}>
          <div className={bem("heading", [], baseClass)}>
            <Heading level={1} id={headerId}
              blockName="page-title"
              modifiers={["block-color"]}>
                {pageTitleText}
            </Heading>
          </div>

          <div className={bem("text", [], baseClass)}>
            <BodyText bodyContent={bodyText}></BodyText>
          </div>
        </div>
      </div>
    </div>
  );
}

