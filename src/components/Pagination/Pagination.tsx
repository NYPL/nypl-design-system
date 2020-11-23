import * as React from "react";
import Button from "../Button/Button";
import { ButtonTypes } from "../Button/ButtonTypes";
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
    /** The function to call when a page is clicked. */
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

    previousPage = () => {
        const { selected } = this.state;
        if (selected > 0) {
            this.selectPage(selected - 1);
        }
    };

    nextPage = () => {
        const { selected } = this.state;
        const { pageCount } = this.props;

        if (selected < pageCount - 1) {
            this.selectPage(selected + 1);
        }
    };

    selectPage = (index) => {
        if (this.state.selected === index) return;

        this.setState({ selected: index });

        // Call the callback with the new selected item:
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

        return (
            <li key={index + 1}>
                <Button
                    onClick={this.selectPage.bind(null, index)}
                    type="button"
                    buttonType={ButtonTypes.Link}
                    className={selected === index ? "selected" : ""}
                >
                    {index + 1}
                </Button>
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
                        <Button
                            onClick={this.previousPage}
                            type="button"
                            buttonType={ButtonTypes.Link}
                            disabled={this.state.selected === 0 ? true : null}
                        >
                            Previous
                        </Button>
                    </li>

                    {this.pagination()}

                    <li key="next">
                        <Button
                            onClick={this.nextPage}
                            type="button"
                            buttonType={ButtonTypes.Link}
                            disabled={
                                this.state.selected === this.props.pageCount - 1
                                    ? true
                                    : null
                            }
                        >
                            Next
                        </Button>
                    </li>
                </ul>
            </nav>
        );
    }
}
