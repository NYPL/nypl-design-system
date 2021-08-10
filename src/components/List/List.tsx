import * as React from "react";

import bem from "../../utils/bem";
import { ListTypes } from "./ListTypes";
import Heading from "../Heading/Heading";
interface DefinitionProps {
  term: string;
  definition: string;
}
export interface ListProps {
  /** BlockName for use with BEM. See how to work with blockNames and
   * BEM here: http://getbem.com/introduction/ */
  blockName?: string;
  /** ClassName you can add in addition to 'list' */
  className?: string;
  /** ID that other components can cross reference for accessibility purposes */
  id?: string;
  /** Modifiers array for use with BEM. See how to work with modifiers and
   * BEM here: http://getbem.com/introduction/ */
  modifiers?: any[];
  /** An optional title that will appear over the list. This prop only applies
   * to Definition Lists. */
  title?: string;
  /** Ordered, Unordered, or Definition */
  type: ListTypes;
  /** Data to render if children are not passed. For `ListTypes.Ordered` and
   * `ListTypes.Unordered` `List` types, the data structure is an array of
   * strings to renders as `li` items. For `ListTypes.Definition` `List` types,
   * the data structure is an array of objects with `term` and `definition`
   * properties to render `dt` and `dd` elements, respectively.
   */
  listItems?: (string | DefinitionProps)[];
}

/** A component that renders list item `li` elements or definition item `dt`
 * and `dd` elements based on the `type` prop. */
export default function List(props: React.PropsWithChildren<ListProps>) {
  const {
    blockName,
    children,
    className,
    id,
    modifiers = [],
    type,
    title,
    listItems,
  } = props;

  // Either li/dt/dd children elements must be passed or the `listItems`
  // prop must be used.
  if (children && (listItems || listItems?.length > 0)) {
    throw new Error(
      "Pass in either `<li>` children or use the `listItems` data prop, don't use both."
    );
  }

  const baseClass = "list";
  let listTag;
  let errorText = "";
  /**
   * This returns either the `children` elements passed to the `List` component
   * first, and if that is not passed, it will check and render the data passed
   * into `listItems` based on the `ListType` type of list. If it is of type
   * Unordered or Ordered, it will return `li` elements. Otherwise, it will
   * return a combination of `dt` and `dd` elements for the Definition type.
   */
  const listChildrenElms = (listType) => {
    if (children) {
      return children;
    }
    if (!listItems || listItems?.length === 0) {
      throw new Error(
        "Either `<li>` children or the `listItems` prop must be used."
      );
    }
    if (listType === ListTypes.Ordered || listType === ListTypes.Unordered) {
      return listItems.map((item, i) => <li key={i}>{item}</li>);
    } else if (listType === ListTypes.Definition) {
      return (listItems as DefinitionProps[]).map((item, i) => [
        <dt key={`${i}-term`}>{item.term}</dt>,
        <dd key={`${i}-def`}>{item.definition}</dd>,
      ]);
    }
    return null;
  };
  /**
   * Checks for `li` element type and throws an error if it is a different type.
   */
  const checkLiChildrenError = (listType) => {
    errorText = `Direct children of \`List\` (${listType}) should be \`<li>\`s`;
    React.Children.map(children, function (child: React.ReactElement) {
      if (child.type !== "li" && child.props.mdxType !== "li") {
        throw new Error(errorText);
      }
    });
  };

  switch (type) {
    case ListTypes.Ordered:
      checkLiChildrenError("ordered");
      listTag = (
        <ol
          id={id}
          className={bem(baseClass, modifiers, blockName, [className])}
        >
          {listChildrenElms(type)}
        </ol>
      );
      break;
    case ListTypes.Unordered:
      checkLiChildrenError("unordered");
      listTag = (
        <ul
          id={id}
          className={bem(baseClass, modifiers, blockName, [className])}
        >
          {listChildrenElms(type)}
        </ul>
      );
      break;
    case ListTypes.Definition:
      errorText =
        "Direct children of `List` (definition) should be `<dt>`s or `<dd>`s";
      React.Children.map(children, function (child: React.ReactElement) {
        if (
          child.type !== "dt" &&
          child.type !== "dd" &&
          child.type !== React.Fragment &&
          child.props.mdxType !== "dt" &&
          child.props.mdxType !== "dd" &&
          child.props.mdxType !== React.Fragment
        ) {
          throw new Error(errorText);
        }
      });
      listTag = (
        <section
          id={id}
          className={bem("definition-list", modifiers, baseClass)}
        >
          {title && (
            <Heading id={`${id}-heading`} level={2}>
              {title}
            </Heading>
          )}
          <dl>{listChildrenElms(type)}</dl>
        </section>
      );
      break;
  }

  return listTag;
}
