import { As, Box, chakra, useStyleConfig } from "@chakra-ui/react";
import React, { forwardRef } from "react";

import Heading from "../Heading/Heading";

export const listTypesArray = ["ol", "ul", "dl"] as const;
export type ListTypes = typeof listTypesArray[number];

export interface DescriptionProps {
  term: string;
  description: string | JSX.Element;
}

export interface ListProps {
  /** ClassName you can add in addition to 'list' */
  className?: string;
  /** ID that other components can cross reference for accessibility purposes */
  id?: string;
  /** Display the list in a row. */
  inline?: boolean;
  /** Data to render if children are not passed. For `listTypes` ordered `"ol"`
   * and unordered `"ul"` `List` types, the data structure is an array of strings
   * to renders as `li` items. For description `"dl"` `List` types, the data
   * structure is an array of objects with `term` and `description` properties
   * to render `dt` and `dd` elements, respectively.
   */
  listItems?: (string | JSX.Element | DescriptionProps)[];
  /** Remove list styling. */
  noStyling?: boolean;
  /** An optional title that will appear over the list. This prop only applies
   * to Description Lists. */
  title?: string;
  /** The type of list: "ol", "ul", or "dl". "ul" by default. */
  type: ListTypes;
}

/**
 * A component that renders list item `li` elements or description item `dt`
 * and `dd` elements based on the `type` prop. Note that the `title` prop will
 * only display for the `Description` list type.
 */
export const List = chakra(
  forwardRef<
    HTMLDivElement & HTMLUListElement & HTMLOListElement,
    React.PropsWithChildren<ListProps>
  >((props, ref?) => {
    const {
      children,
      className,
      id,
      inline = false,
      listItems,
      noStyling = false,
      title,
      type = "ul",
      ...rest
    } = props;
    const styles = useStyleConfig("List", { inline, noStyling, variant: type });
    let listElement = null;

    // Either li/dt/dd children elements must be passed or the `listItems`
    // prop must be used.
    if (children && listItems && listItems?.length > 0) {
      console.warn(
        "NYPL Reservoir List: Pass in either `<li>`, `<dt>`, or `<dd>` " +
          "children or use the `listItems` data prop. Do not use both."
      );
      return null;
    }
    if (!children && !listItems) {
      console.warn(
        "NYPL Reservoir List: Pass in either `<li>` children or pass data in " +
          "the `listItems` prop, not both."
      );
      return null;
    }

    /**
     * This returns either the `children` elements passed to the `List` component
     * first, otherwise it will check and render the data passed into the
     * `listItems` props based on the `ListType` type. If it is of type unordered
     * or ordered, it will return `li` elements. Otherwise, it will return a
     * combination of `dt` and `dd` elements for the description type.
     */
    const listChildrenElms = (listType: ListTypes) => {
      if (children) {
        return children;
      }
      if (!listItems) {
        return null;
      }
      if (listType === "ol" || listType === "ul") {
        return listItems.map((item: any, i) => <li key={i}>{item}</li>);
      } else if (listType === "dl") {
        return (listItems as DescriptionProps[]).map((item, i) => [
          <dt key={`${i}-term`}>{item.term}</dt>,
          <dd key={`${i}-des`}>{item.description}</dd>,
        ]);
      }
      return null;
    };
    /**
     * Checks for `dt` and `dd` elements and consoles a warning if the
     * children are different HTML elements.
     */
    const checkDescriptionChildrenError = () => {
      React.Children.map(
        children as JSX.Element,
        (child: React.ReactElement) => {
          if (
            child.type !== "dt" &&
            child.type !== "dd" &&
            child.type !== React.Fragment &&
            child.props.mdxType !== "dt" &&
            child.props.mdxType !== "dd" &&
            child.props.mdxType !== React.Fragment
          ) {
            console.warn(
              "NYPL Reservoir List: Direct children of `List` (description) must " +
                "be `<dt>`s and `<dd>`s."
            );
          }
        }
      );
    };

    if (type === "ol" || type === "ul") {
      checkListChildrenError(children, type);
      listElement = (
        <Box
          as={type as As}
          id={id}
          className={className}
          ref={ref}
          __css={styles}
          {...rest}
        >
          {listChildrenElms(type)}
        </Box>
      );
    } else if (type === "dl") {
      checkDescriptionChildrenError();
      listElement = (
        <Box
          as="section"
          id={id}
          className={className}
          ref={ref}
          __css={styles}
          {...rest}
        >
          {title && <Heading id={`${id}-heading`}>{title}</Heading>}
          <dl>{listChildrenElms(type)}</dl>
        </Box>
      );
    }

    return listElement;
  })
);

/**
 * Checks for `li` elements and consoles a warning if the
 * children are different HTML elements.
 */
export const checkListChildrenError = (
  children: React.ReactNode,
  listType = "ul",
  componentName = "List"
) => {
  React.Children.map(children as JSX.Element, (child: React.ReactElement) => {
    if (child && child?.type !== "li" && child?.props?.mdxType !== "li") {
      console.warn(
        `NYPL Reservoir ${componentName}: Direct children of \`${componentName}\` (${listType}) must be \`<li>\`s.`
      );
    }
  });
};

export default List;
