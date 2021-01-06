import * as React from "react";
import bem from "../../utils/bem";
import Icon from "../Icons/Icon";
import { IconNames } from "../Icons/IconTypes";

type breadcrumb = { url: string; text: string };

function isTextBreadcrumb(obj: breadcrumb | JSX.Element): obj is breadcrumb {
  return typeof (obj as breadcrumb).url === "string";
}

export interface BreadcrumbProps {
  /** BlockName for use with BEM. See how to work with blockNames and BEM here: http://getbem.com/introduction/ */
  blockName?: string;
  /** Breadcrumb links as an array */
  breadcrumbs: breadcrumb[] | JSX.Element[];
  /** className you can add in addition to 'input' */
  className?: string;
  /** Modifiers array for use with BEM. See how to work with modifiers and BEM here: http://getbem.com/introduction/ */
  modifiers?: string[];
}

export default class Breadcrumbs extends React.Component<BreadcrumbProps, any> {
  static defaultProps = {};

  constructor(props: BreadcrumbProps) {
    super(props);
  }

  render(): JSX.Element {
    const { breadcrumbs, className, blockName, modifiers } = this.props;

    const baseClass = "breadcrumbs";

    const breadcrumbItems = [];

    if (!breadcrumbs || breadcrumbs.length === 0) {
      throw new Error(
        "Breadcrumbs must contain a set of links. Breadcrumbs currently empty"
      );
    }
    breadcrumbs.forEach((item: breadcrumb | JSX.Element, index: number) => {
      const last = index === breadcrumbs.length - 1;
      let linkComponent: string | JSX.Element;

      if (isTextBreadcrumb(item)) {
        linkComponent = item.url ? (
          <a href={item.url} className={bem("link", [], baseClass)}>
            {item.text}
          </a>
        ) : (
          item.text
        );
      } else {
        const props = {
          className: bem("link", [], baseClass),
        };
        linkComponent = React.createElement(
          item.type,
          { ...props, ...item.props },
          item.props.children
        );
      }
      breadcrumbItems.push(
        <li
          key={`${baseClass}-${index}`}
          className={bem("item", [], baseClass)}
        >
          {last && (
            <Icon
              name={IconNames.arrow}
              blockName={baseClass}
              modifiers={["small"]}
              decorative={true}
            />
          )}
          {linkComponent}
        </li>
      );
    });

    return (
      <nav
        className={bem(baseClass, modifiers, blockName, [className])}
        role="navigation"
        aria-label="Breadcrumbs"
      >
        <ul className={bem("list", [], baseClass)}>{breadcrumbItems}</ul>
      </nav>
    );
  }
}
