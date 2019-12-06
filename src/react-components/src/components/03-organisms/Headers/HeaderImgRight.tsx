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

  const { headerId, pageTitleText, isImageDecorative, imageAltText, imgUrl, imgAttributes, imgModifiers, bodyText} = props;
  const baseClass = "section-header-img-right";

  let bodyTextContent = bodyText ? bodyText : props.children;

  return (
    <div className={bem(baseClass)}>
      <PageTitle headerId={headerId} text={pageTitleText} /><Image isDecorative={isImageDecorative} altText={imageAltText} src={imgUrl} ></Image>
      <BodyText warnchar={200}>{bodyTextContent}</BodyText>
    </div>
  );
}

