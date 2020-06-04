import * as React from "react";
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
export default class SectionTitle extends React.Component<
    SectionTitleProps,
    {}
> {
    constructor(props: SectionTitleProps);
    render(): JSX.Element;
}
