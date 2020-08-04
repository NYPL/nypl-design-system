import * as React from "react";
import bem from "../../utils/bem";
export interface PaginationProps {
    blockName?: string;
    className?: string;
    modifiers?: string[];
    previousPage?: React.ReactNode;
    nextPage?: React.ReactNode;
}

export default function Pagination(
    props: React.PropsWithChildren<PaginationProps>
) {
    const {
        blockName,
        className,
        modifiers,
        previousPage,
        nextPage,
        children,
    } = props;

    const pagination__base_class = "pagination";

    return (
        <nav
            aria-label="Pagination"
            className={bem(pagination__base_class, modifiers, blockName, [
                className,
            ])}
        >
            {previousPage}
            {children}
            {nextPage}
        </nav>
    );
}
