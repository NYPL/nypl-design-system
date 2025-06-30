import {
  As,
  Box,
  BoxProps,
  chakra,
  ChakraComponent,
  useMultiStyleConfig,
} from "@chakra-ui/react";
import React, { forwardRef } from "react";

import useDSHeading from "../../hooks/useDSHeading";

export const listVariantsArray = ["ol", "ul", "dl"] as const;
export type ListVariants = typeof listVariantsArray[number];

export interface DescriptionProps {
  term: string;
  description: string | JSX.Element;
}

export interface ListProps extends Omit<BoxProps, "title"> {
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
  /** Show dividers between rows for the description list variant. */
  showRowDividers?: boolean;
  /** Optional string value used to set the text for a `Heading` component, or
   * a DS Heading component that can be passed in. This title only applies to
   * to Description Lists and will render above the list. */
  title?: string | JSX.Element;
  /** The type of list: "ol", "ul", or "dl". "ul" by default. */
  variant: ListVariants;
}

/**
 * A component that renders list item `li` elements or description item `dt`
 * and `dd` elements based on the `type` prop. Note that the `title` prop will
 * only display for the `Description` list type.
 */
export const List: ChakraComponent<
  React.ForwardRefExoticComponent<
    React.PropsWithChildren<ListProps> &
      React.RefAttributes<HTMLDivElement & HTMLUListElement & HTMLOListElement>
  >,
  React.PropsWithChildren<ListProps>
> = chakra(
  forwardRef<
    HTMLDivElement & HTMLUListElement & HTMLOListElement,
    React.PropsWithChildren<ListProps>
  >((props, ref?) => {
    const {
      children,
      id,
      inline = false,
      listItems,
      noStyling = false,
      showRowDividers = true,
      title,
      variant = "ul",
      ...rest
    } = props;
    const styles = useMultiStyleConfig("ReservoirList", {
      inline,
      noStyling,
      showRowDividers,
      variant,
    });
    const finalTitle = useDSHeading({
      title,
      id,
      additionalStyles: styles.heading,
    });
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
    const listChildrenElms = (variant: ListVariants) => {
      if (children) {
        return children;
      }
      if (!listItems) {
        return null;
      }
      if (variant === "ol" || variant === "ul") {
        return listItems.map((item: any, i) => <li key={i}>{item}</li>);
      } else if (variant === "dl") {
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

    if (variant === "ol" || variant === "ul") {
      checkListChildrenError({ children, variant });
      listElement = (
        <Box as={variant as As} id={id} ref={ref} __css={styles.base} {...rest}>
          {listChildrenElms(variant)}
        </Box>
      );
    } else if (variant === "dl") {
      checkDescriptionChildrenError();
      listElement = (
        <Box as="section" id={id} ref={ref} __css={styles.base} {...rest}>
          {finalTitle}
          <dl>{listChildrenElms(variant)}</dl>
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
export const checkListChildrenError = ({
  children,
  variant = "ul",
  componentName = "List",
}: {
  children: React.ReactNode;
  variant?: ListVariants;
  componentName?: string;
}) => {
  React.Children.map(children as JSX.Element, (child: React.ReactElement) => {
    if (child && child?.type !== "li" && child?.props?.mdxType !== "li") {
      console.warn(
        `NYPL Reservoir ${componentName}: Direct children of \`${componentName}\` (${variant}) must be \`<li>\`s.`
      );
    }
  });
};

export default List;
