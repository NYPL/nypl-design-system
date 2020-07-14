import * as React from "react";
import bem from "../../utils/bem";

export interface SearchBarProps {
<<<<<<< HEAD
    /** ID that other components can cross reference for accessibility purposes */
    id?: string;

    /** blockName for use with BEM. See how to work with modifiers and BEM here: http://getbem.com/introduction/ */
    blockName?: string;

    /** Populates aria-label on the form;
     * defines a hidden string that labels
     * the SearchBar
     */
    ariaLabel?: string;

    /** Populates aria-labelledby on the form;
     * defines a visible string that labels
     * the SearchBar
     */
    ariaLabelledBy?: string;

    /** Handler on form submit */
    onSubmit: (event: React.FormEvent) => void;

    /** Additional attributes passed to the form */
    attributes?: {};
=======
  /** Populates aria-label on the form */
  ariaLabel?: string;
  /** Populates aria-labelledby on the form */
  ariaLabelledBy?: string;
  /** Additional attributes passed to the form */
  attributes?: {};
  /** blockName for use with BEM. See how to work with modifiers and BEM here: http://getbem.com/introduction/ */
  blockName?: string;
  /** ID that other components can cross reference for accessibility purposes */
  id?: string;
  /** Optional modifiers array for use with BEM. See how to work with modifiers and BEM here: http://getbem.com/introduction/ */
  modifiers?: string[];
  /** Handler on form submit */
  onSubmit: (event: React.FormEvent) => void;
>>>>>>> Fixes #115: Adds attributes object to all components
}

export default function SearchBar(
  props: React.PropsWithChildren<SearchBarProps>
) {
  const {
    ariaLabel,
    ariaLabelledBy,
    attributes,
    blockName,
    children,
    id,
    modifiers,
    onSubmit,
  } = props;

  let searchbar__base_class = "search-bar";

  return (
    <form
      className={bem(searchbar__base_class, modifiers, blockName)}
      id={id}
      role="search"
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledBy}
      onSubmit={onSubmit}
      {...attributes}
    >
      {children}
    </form>
  );
}
