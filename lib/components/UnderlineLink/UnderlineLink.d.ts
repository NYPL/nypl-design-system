import * as React from "react";
export interface UnderlineLinkProps {
    url?: string;
    attributes?: {};
    modifiers?: string[];
    blockName?: string;
}
export default class UnderlineLink extends React.Component<
    UnderlineLinkProps,
    {}
> {
    constructor(props: UnderlineLinkProps);
    render(): JSX.Element;
}
