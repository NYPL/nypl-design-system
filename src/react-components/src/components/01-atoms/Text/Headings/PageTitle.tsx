/* AT-79 Page Title - Level 1 */
import * as React from "react";
import bem from "../../../../utils/bem";
import Heading from "./Heading";

export interface PageTitleProps {
  headerId: string;
  text: string;
  modifiers?: [];
  blockName?: string;
}

export default function PageTitle(props: PageTitleProps) {
    const { headerId, text, modifiers, blockName } = props;
    return <Heading id={headerId} level={1} blockName="page-title" text={text}/>;
}
