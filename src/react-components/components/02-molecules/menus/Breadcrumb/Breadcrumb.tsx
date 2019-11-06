import * as React from "react";
import bem from "design-system-utils/js/bem";

export type item = { url: string, text: string };
export interface BreadcrumbProps {
  items: item[];
  className?: string;
}


export default class Breadcrumb extends React.Component<BreadcrumbProps, {}> {
  static defaultProps = {};

  constructor(props: BreadcrumbProps) {
    super(props);
  }

  render(): JSX.Element {
    const { items, className } = this.props;

    let breadcrumbs__base_class = 'breadcrumbs';
    let bcrumbClassName = `breadcrumb${className ? `${className}` : ""}`;
    let bcrumbItems = [];

    items.forEach((item: item, index: number) => {
      let linkContent: string | JSX.Element = item.url ? <a href={item.url} className="breadcrumbs__link">{item.text}</a> : item.text;

      bcrumbItems.push(<li key={`breadcrumb-${index}`} className={{ bem('item', [], breadcrumbs__base_class) }}>
        {linkContent}
      </li >);
    });

    return (
      <nav
        role="navigation"
        aria-label="Breadcrumbs"
      >
        <ul className="breadcrumbs">
          {bcrumbItems}
        </ul>
      </nav>);
  }
}
