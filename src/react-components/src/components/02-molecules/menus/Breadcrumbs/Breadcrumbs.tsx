import * as React from "react";
import bem from "../../../../utils/bem";

type breadcrumb = { url: string, text: string };

function isTextBreadcrumb(obj: breadcrumb | JSX.Element): obj is breadcrumb {
  return typeof((obj as breadcrumb).url) === "string" ;
}

export interface BreadcrumbProps {
  breadcrumbs: breadcrumb[] | JSX.Element[];
}

export default class Breadcrumb extends React.Component<BreadcrumbProps, {}> {
  static defaultProps = {};

  constructor(props: BreadcrumbProps) {
    super(props);
  }

  render(): JSX.Element {

    const { breadcrumbs } = this.props;

    let breadcrumbs__base_class = "breadcrumbs";

    let breadcrumbItems = [];

    breadcrumbs.forEach((item: breadcrumb|JSX.Element, index: number) => {
      let last = index === breadcrumbs.length - 1;
      if (last) {
        // TODO: SFR-716 Incorporate Icon
      }
      let linkComponent: string | JSX.Element;
      if (isTextBreadcrumb(item)) {
        linkComponent = item.url ? <a href={item.url} className={bem("link", [], breadcrumbs__base_class)}>{item.text}</a> : item.text;
      } else {
        let props = {
          className: bem("link", [], breadcrumbs__base_class),
        };
        linkComponent = React.createElement(
          item.type,
          {...props, ...item.props},
          item.props.children
        );
      }
      breadcrumbItems.push(<li key={`breadcrumb-${index}`} className={bem("item", [], breadcrumbs__base_class)} >
      {linkComponent}
    </ li >);
    });

    return (
      <nav
        className={bem(breadcrumbs__base_class)}
        role="navigation"
        aria-label="Breadcrumbs"
      >
        <ul className={bem("list", [], breadcrumbs__base_class)}>
          {breadcrumbItems}
        </ul>
      </nav>);
  }
}
