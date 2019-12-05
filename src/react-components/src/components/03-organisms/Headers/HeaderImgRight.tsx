// OH-30 Header with Image Right
import * as React from "react";
import bem from "../../../utils/bem";
import IconLink from "../../01-atoms/Links/IconLink";
import Heading from "../../01-atoms/Text/Headings/Heading";
import PageTitle from "../../01-atoms/Text/Headings/PageTitle";
import Image from "../../01-atoms/Images/Image/Image";
import BodyText from "../../01-atoms/Text/Text/BodyText";

export interface HeaderImgRightProps {
  id: string;

  pageTitleText: string;

  imgUrl: string;
  imgAttributes?: {};
  imgModifiers?: string[];

  bodyText?: JSX.Element;
}

export default function HeaderImgRight(props: HeaderImgRightProps) {

    const { id, pageTitleText, imgUrl } = props;
    const baseClass = "section-header-img-right";

    return (
      <div className={bem(baseClass)}>
       <PageTitle text={pageTitleText}/><Image src={imgUrl} isDecorative={true}></Image>
      <BodyText bodyContent={<p>hello there</p>}></BodyText>
      </div>
    );
  }

