import * as React from "react";
import bem from "../../utils/bem";

export interface SearchBarProps {
    /** Populates aria-label on the form */
    ariaLabel?: string;
    /** Populates aria-labelledby on the form */
    ariaLabelledBy?: string;
    /** Additional attributes passed to the form */
    attributes?: {};
    /** blockName for use with BEM. See how to work with modifiers and BEM here: http://getbem.com/introduction/ */
    blockName?: string;
    /** className that appears in addition to "search-bar" */
    className?: string;
    /** ID that other components can cross reference for accessibility purposes */
    id?: string;
    /** Optional modifiers array for use with BEM. See how to work with modifiers and BEM here: http://getbem.com/introduction/ */
    modifiers?: string[];
    /** Handler on form submit */
    onSubmit: (event: React.FormEvent) => void;
}

export default function SearchBar(
    props: React.PropsWithChildren<SearchBarProps>
) {
    const {
        ariaLabel,
        ariaLabelledBy,
        blockName,
        children,
        className,
        id,
        modifiers,
        onSubmit,
    } = props;

    let searchbar__base_class = "search-bar";

    return (
        <form
            className={bem(searchbar__base_class, modifiers, blockName, [
                className,
            ])}
            id={id}
            role="search"
            aria-label={ariaLabel}
            aria-labelledby={ariaLabelledBy}
            onSubmit={onSubmit}
        >
            {children}
        </form>
    );
}
