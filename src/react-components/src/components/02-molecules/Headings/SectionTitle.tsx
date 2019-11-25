// MT-82
import * as React from "react";
import bem from "../../../utils/bem";
import IconLink from "../../01-atoms/Links/IconLink";
import Heading from "../../01-atoms/Text/Heading";

export interface SectionTitleProps {
  /** The action to perform on the <button>'s onClick function */
  headingModifiers?: string[];

  // TODO: Check length of text
  headingText: string;
  attributes?: {};

  linkUrl?: string;
  linkText?: string;
  linkAttributes?: {};
  linkModifiers?: string[];
  linkBlockname?: string;
}

export default class SectionTitle extends React.Component<SectionTitleProps, {}> {
  constructor(props: SectionTitleProps) {
    super(props);
  }

  render(): JSX.Element {
    const sectionTitle_base_class = "event-section";
    const { headingText, attributes, linkUrl, linkText, linkAttributes, linkModifiers, linkBlockname } = this.props;

    let link = linkUrl ? <IconLink url={linkUrl}
      attributes={linkAttributes}
      modifiers={linkModifiers}
      iconPosition="right">{linkText}</IconLink> : undefined;

    return (
      <div className={bem("heading-section", [], sectionTitle_base_class)}>
        <Heading level={2} text={headingText} blockName={sectionTitle_base_class}/> {link}
      </div>
    );
  }
}
