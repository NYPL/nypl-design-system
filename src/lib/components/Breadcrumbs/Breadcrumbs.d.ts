import * as React from "react";
declare type breadcrumb = {
    url: string;
    text: string;
};
export interface BreadcrumbProps {
    breadcrumbs: breadcrumb[] | JSX.Element[];
}
export default class Breadcrumbs extends React.Component<BreadcrumbProps, {}> {
    static defaultProps: {};
    constructor(props: BreadcrumbProps);
    render(): JSX.Element;
}
export {};
