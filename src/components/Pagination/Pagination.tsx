import * as React from "react";
import range from "lodash/range";
import Link from "../Link/Link";
import bem from "../../utils/bem";

export interface PaginationProps {
  /** BlockName for use with BEM. See how to work with blockNames and BEM here: http://getbem.com/introduction/ */
  blockName?: string;
  /** Additional className for use with BEM. See how to work with blockNames and BEM here: http://getbem.com/introduction/ */
  className?: string;
  /** Modifiers array for use with BEM. See how to work with modifiers and BEM here: http://getbem.com/introduction/ */
  modifiers?: string[];
  /** The total number of pages. */
  pageCount: number;
  /** The current page selected. */
  currentPage: number;
  /** The method to callback when an item is selected. Passes the selected page to the consuming app as an argument. */
  onPageChange?: (selected) => void;
}

/** Pagination component that provides a list of page items */
export default class Pagination extends React.Component<PaginationProps> {
  constructor(props: PaginationProps) {
    super(props);
  }

  previousPage = evt => {
    const { currentPage } = this.props;
    evt.preventDefault ? evt.preventDefault() : (evt.returnValue = false);
    if (currentPage > 1) {
      this.selectPage(evt, currentPage - 1);
    }
  };

  nextPage = evt => {
    const { currentPage } = this.props;
    const { pageCount } = this.props;

    evt.preventDefault ? evt.preventDefault() : (evt.returnValue = false);
    if (currentPage < pageCount) {
      this.selectPage(evt, currentPage + 1);
    }
  };

  selectPage = (evt, item) => {
    const { currentPage } = this.props;

    evt.preventDefault ? evt.preventDefault() : (evt.returnValue = false);
    if (currentPage === item) return;

    // Run the callback with the new selected item:
    this.runCallback(item);
  };

  runCallback = selectedItem => {
    if (
      typeof this.props.onPageChange !== "undefined" &&
      typeof this.props.onPageChange === "function"
    ) {
      this.props.onPageChange(selectedItem);
    }
  };

  getPageElement(item) {
    const { currentPage, modifiers } = this.props;

    const pageAttributes = {
      "aria-label": null,
      onClick: evt => this.selectPage(evt, item),
      role: "button",
      tabIndex: 0,
    };

    pageAttributes["aria-label"] = item ? item : null;

    const pageClass = currentPage === item ? "selected" : null;

    return (
      <li key={item} className={bem("item", modifiers, "pagination")}>
        <Link
          attributes={{ ...pageAttributes }}
          className={bem("link", modifiers, "pagination", [pageClass])}
          href="#"
        >
          {item}
        </Link>
      </li>
    );
  }

  pagination = selected => {
    const { pageCount } = this.props;

    // 1, (2 or ...), pageStart - pageEnd, (next to last item or ...), pageCount
    const pageStart = Math.max(
      3, // if near the beginning, inner pages start at 3
      Math.min(
        // If in the middle, inner pages begin two items before the selected page
        selected - 2,
        // If near the end, count back and show 7 items
        pageCount - 6
      )
    );

    const pageEnd = Math.min(
      // if near the end, inner pages end just before next to last item (or ellipse)
      pageCount - 2,
      Math.max(
        // If in the middle, inner pages end two items after the selected page
        selected + 2,
        // If near the beginning, show the first 7 items
        7
      )
    );

    const truncatedList =
      pageCount < 4
        ? Array.from({ length: pageCount }, (_, i) => i + 1)
        : [
            // list always starts at and displays the first page item
            1,
            // second item will either be item 2 or an ellipse
            pageStart > 3 ? "ellipse-start" : 2,
            // Adding + 1 here since lodash range() doesn't include the last item passed to it
            ...range(pageStart, pageEnd + 1),
            // next to last item will either be an ellipse or the next to last page number
            pageEnd < pageCount - 2 ? "ellipse-end" : pageCount - 1,
            // list always ends at and displays the last page number in the pageCount
            pageCount,
          ];
    const pageItems = truncatedList.map(item => {
      // if it's a number, render that page item, otherwise return the ellipse
      return typeof item === "number" ? (
        this.getPageElement(item)
      ) : (
        <li key={`pagination-${item}`}>...</li>
      );
    });

    return pageItems;
  };

  render() {
    const { blockName, className, modifiers } = this.props;

    // Attributes for Previous and Next Buttons
    const prevAttributes = {
      "aria-disabled": null,
      "aria-label": "Previous page",
      onClick: this.previousPage,
      role: "button",
      tabIndex: 0,
    };

    const nextAttributes = {
      "aria-disabled": null,
      "aria-label": "Next page",
      onClick: this.nextPage,
      role: "button",
      tabIndex: 0,
    };

    // When at the beginning, disable Previous. When at the end, disable Next.
    const { currentPage } = this.props;
    const { pageCount } = this.props;
    const prevDisabled = currentPage === 1;
    const nextDisabled = currentPage === pageCount;

    // When disabled, add aria label and remove tabbing
    prevAttributes["aria-disabled"] = prevDisabled ? "true" : null;
    prevAttributes["tabIndex"] = prevDisabled ? -1 : 0;
    nextAttributes["aria-disabled"] = nextDisabled ? "true" : null;
    nextAttributes["tabIndex"] = nextDisabled ? -1 : null;

    const prevClass = prevDisabled ? "disabled" : null;
    const nextClass = nextDisabled ? "disabled" : null;

    return (
      <nav
        aria-label="Pagination"
        className={bem("pagination", modifiers, blockName, [className])}
      >
        <ul className={bem("list", modifiers, "pagination")}>
          <li key="previous" className={bem("item", modifiers, "pagination")}>
            <Link
              attributes={{ ...prevAttributes }}
              className={bem("link", modifiers, "pagination", [prevClass])}
              href="#"
            >
              Previous
            </Link>
          </li>

          {this.pagination(currentPage)}

          <li key="next" className={bem("item", modifiers, "pagination")}>
            <Link
              attributes={{
                ...nextAttributes,
              }}
              className={bem("link", modifiers, "pagination", [nextClass])}
              href="#"
            >
              Next
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}
