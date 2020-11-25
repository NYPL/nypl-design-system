import * as React from "react";
import Link from "../Link/Link";
import bem from "../../utils/bem";

export interface PaginationProps {
    /** BlockName for use with BEM. See how to work with blockNames and BEM here: http://getbem.com/introduction/ */
    blockName?: string;
    /** Additional className for use with BEM. See how to work with blockNames and BEM here: http://getbem.com/introduction/ */
    className?: string;
    /** Modifiers array for use with BEM. See how to work with modifiers and BEM here: http://getbem.com/introduction/ */
    modifiers?: string[];
    /** The total number of pages */
    pageCount: number;
    /** The method to callback when an item is selected. Passes the selected page to the consuming app as an argument. */
    onPageChange?: (selected) => void;
}

export interface PaginationState {
    selected: number;
}

/** Pagination component that provides a list of page items */
export default class Pagination extends React.Component<
    PaginationProps,
    PaginationState
> {
    constructor(props: PaginationProps) {
        super(props);
        this.state = {
            selected: 0,
        };
    }

    previousPage = (evt) => {
        const { selected } = this.state;
        evt.preventDefault ? evt.preventDefault() : (evt.returnValue = false);
        if (selected > 0) {
            this.selectPage(evt, selected - 1);
        }
    };

    nextPage = (evt) => {
        const { selected } = this.state;
        const { pageCount } = this.props;

        evt.preventDefault ? evt.preventDefault() : (evt.returnValue = false);
        if (selected < pageCount - 1) {
            this.selectPage(evt, selected + 1);
        }
    };

    selectPage = (evt, index) => {
        evt.preventDefault ? evt.preventDefault() : (evt.returnValue = false);
        if (this.state.selected === index) return;

        this.setState({ selected: index });

        // Run the callback with the new selected item:
        this.runCallback(index);
    };

    runCallback = (selectedItem) => {
        if (
            typeof this.props.onPageChange !== "undefined" &&
            typeof this.props.onPageChange === "function"
        ) {
            this.props.onPageChange({ selected: selectedItem });
        }
    };

    getPageElement(index) {
        const { selected } = this.state;
        const pageNumber = index + 1;

        let pageAttributes = {
            "aria-label": null,
            onClick: (evt) => this.selectPage(evt, index),
            role: "button",
            tabIndex: 0,
        };

        pageAttributes["aria-label"] = pageNumber ? pageNumber : null;

        return (
            <li key={pageNumber}>
                <Link
                    attributes={{ ...pageAttributes }}
                    className={selected === index ? "selected" : null}
                    href="#"
                >
                    {pageNumber}
                </Link>
            </li>
        );
    }

    pagination = () => {
        const items = [];

        const { pageCount } = this.props;

        for (let index = 0; index < pageCount; index++) {
            items.push(this.getPageElement(index));
        }

        return items;
    };

    render() {
        const pagination__base_class = "pagination";

        // Attributes for Previous and Next Buttons
        let prevAttributes = {
            "aria-disabled": null,
            "aria-label": "Previous page",
            onClick: this.previousPage,
            role: "button",
            tabIndex: 0,
        };

        let nextAttributes = {
            "aria-disabled": null,
            "aria-label": "Next page",
            onClick: this.nextPage,
            role: "button",
            tabIndex: 0,
        };

        // When at the beginning, disable Previous. When at the end, disable Next.
        const { selected } = this.state;
        const { pageCount } = this.props;
        const prevDisabled = selected === 0;
        const nextDisabled = selected === pageCount - 1;

        // When disabled, add aria label and remove tabbing
        prevAttributes["aria-disabled"] = prevDisabled ? "true" : null;
        prevAttributes["tabIndex"] = prevDisabled ? -1 : 0;
        nextAttributes["aria-disabled"] = nextDisabled ? "true" : null;
        nextAttributes["tabIndex"] = nextDisabled ? -1 : null;

        return (
            <nav
                aria-label="Pagination"
                className={bem(
                    pagination__base_class,
                    this.props.modifiers,
                    this.props.blockName,
                    [this.props.className]
                )}
            >
                <ul>
                    <li key="previous">
                        <Link
                            attributes={{ ...prevAttributes }}
                            className={prevDisabled ? "disabled" : null}
                            href="#"
                        >
                            Previous
                        </Link>
                    </li>

                    {this.pagination()}

                    <li key="next">
                        <Link
                            attributes={{
                                ...nextAttributes,
                            }}
                            className={nextDisabled ? "disabled" : null}
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
