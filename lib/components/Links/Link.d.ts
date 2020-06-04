import * as React from "react";
export interface LinkProps {
    className: string;
    icon?: {
        element: JSX.Element;
    };
    url?: string;
    attributes?: {};
}
export default class Link extends React.Component<LinkProps, {}> {
    constructor(props: LinkProps);
    render(): JSX.Element;
}
