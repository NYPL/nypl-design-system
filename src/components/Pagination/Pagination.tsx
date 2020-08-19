import * as React from "react";
import bem from "../../utils/bem";
export interface PaginationProps {
    /** BlockName for use with BEM. See how to work with blockNames and BEM here: http://getbem.com/introduction/ */
    blockName?: string;
    /** Additional className for use with BEM. See how to work with blockNames and BEM here: http://getbem.com/introduction/ */
    className?: string;
    /** Modifiers array for use with BEM. See how to work with modifiers and BEM here: http://getbem.com/introduction/ */
    modifiers?: string[];
    /** Right hand element that is the next handler, typically a button */
    nextPage?: React.ReactNode;
    /** Left hand element that is the previous handler, typically a button */
    previousPage?: React.ReactNode;
}

export default function Pagination(
    props: React.PropsWithChildren<PaginationProps>
) {
    const {
        blockName,
        children,
        className,
        modifiers,
        nextPage,
        previousPage,
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
