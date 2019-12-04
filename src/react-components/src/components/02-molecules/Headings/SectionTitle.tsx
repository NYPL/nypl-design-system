// MT-82
import * as React from "react";
import bem from "../../../utils/bem";
import IconLink from "../../01-atoms/Links/IconLink";
import Heading from "../../01-atoms/Text/Heading";

export interface SectionTitleProps {
  id: string;
  modifiers?: [];
  blockName?: string;

  headingText: string;
  headingAttributes?: {};
  headingModifiers?: string[];

  linkUrl?: string;

  linkAttributes?: {};
  linkModifiers?: string[];
  linkBlockname?: string;
}

export default class SectionTitle extends React.Component<SectionTitleProps, {}> {
  constructor(props: SectionTitleProps) {
    super(props);
  }

  render(): JSX.Element {
    const { id, modifiers, blockName, headingText, headingAttributes, linkUrl, linkAttributes, linkModifiers } = this.props;
    const baseClass = "heading-section";

    if (headingText.length > 80) {
      throw new Error("Section Title Text must be fewer than 80 characters");
    } else if (headingText.length > 60) {
      console.warn("Section Title Text should be fewer than 60 characters");
    }

    let link: JSX.Element | undefined;

    if (linkUrl) {
      let passedInAttributes = {
        "aria-describedby": id,
        ...linkAttributes
      };

      link = <IconLink url={linkUrl}
      blockName={baseClass}
      attributes={passedInAttributes}
      modifiers={linkModifiers}
      iconPosition="right"
    iconModifiers={["right"]}>{"See All"}</IconLink>; }

    let headingModifiers = linkUrl ? ["has-link"] : [];
    return (
      <div className={bem(baseClass, modifiers, blockName)}>
        <Heading id={id} level={2} text={headingText} blockName={baseClass} modifiers={headingModifiers} attributes={headingAttributes} />{link}
      </div>
    );
  }
}
