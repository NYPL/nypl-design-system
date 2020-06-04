import * as React from "react";
export interface BasicLinkProps {
    className?: string;
    icon?: {
        element: JSX.Element;
    };
    url?: string;
    attributes?: {};
}
export declare class BasicLinkBase extends React.Component<BasicLinkProps, {}> {
    constructor(props: BasicLinkProps);
    render(): JSX.Element;
}
declare const BasicLink: React.ComponentType<BasicLinkProps>;
export default BasicLink;
