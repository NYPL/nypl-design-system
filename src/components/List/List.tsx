import * as React from "react";
import bem from "../../utils/bem";
import { ListTypes } from "./ListTypes";
import Heading from "../Heading/Heading";

export interface ListProps {
  /** BlockName for use with BEM. See how to work with blockNames and BEM here: http://getbem.com/introduction/ */
  blockName?: string;
  /** ClassName you can add in addition to 'list' */
  className?: string;
  /** ID that other components can cross reference for accessibility purposes */
  id?: string;
  /** Modifiers array for use with BEM. See how to work with modifiers and BEM here: http://getbem.com/introduction/ */
  modifiers?: any[];
  /** Ordered, Unordered, or Definition */
  type: ListTypes;
  /** An optional title that will appear over the list (only applies to Definition Lists) */
  title?: string;
}

export default function List(props: React.PropsWithChildren<ListProps>) {
  const {
    blockName,
    children,
    className,
    id,
    modifiers = [],
    type,
    title,
  } = props;

  const baseClass = "list";

  let listTag;
  let errorText = "";

  switch (type) {
    case ListTypes.Ordered:
      errorText = "Direct children of `List` (ordered) should be `<li>`s";
      React.Children.map(children, function (child: React.ReactElement) {
        if (child.type !== "li") {
          throw new Error(errorText);
        }
      });
      listTag = (
        <ol
          id={id}
          className={bem(baseClass, modifiers, blockName, [className])}
        >
          {children}
        </ol>
      );
      break;
    case ListTypes.Unordered:
      errorText = "Direct children of `List` (unordered) should be `<li>`s";
      React.Children.map(children, function (child: React.ReactElement) {
        if (child.type !== "li") {
          throw new Error(errorText);
        }
      });
      listTag = (
        <ul
          id={id}
          className={bem(baseClass, modifiers, blockName, [className])}
        >
          {children}
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
          child.type !== React.Fragment
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
          <dl>{children}</dl>
        </section>
      );
      break;
  }

  return listTag;
}
