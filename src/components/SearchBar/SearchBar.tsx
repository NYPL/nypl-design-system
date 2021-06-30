import * as React from "react";
import bem from "../../utils/bem";

export interface SearchBarProps {
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
  /** Additional attributes passed to the form */
  attributes?: { [key: string]: any };
  /** BlockName for use with BEM. See how to work with modifiers and BEM here: http://getbem.com/introduction/ */
  blockName?: string;
  /** ClassName that appears in addition to "search-bar" */
  className?: string;
  /** Adds 'method' property to the form */
  method?: string;
  /** Adds 'action' property to the form */
  action?: string;
  /** ID that other components can cross reference for accessibility purposes */
  id?: string;
  /** Modifiers array for use with BEM. See how to work with modifiers and BEM here: http://getbem.com/introduction/ */
  modifiers?: string[];
  /** Handler on form submit */
  onSubmit: (event: React.FormEvent) => void;
}

/** Renders a wrapper `form` element to be used with `Select` (optional),
 * `Input`, and `Button` components together. */
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
    modifiers = [],
    onSubmit,
    attributes,
    method,
    action,
  } = props;

  const baseClass = "search-bar";

  return (
    <form
      className={bem(baseClass, modifiers, blockName, [className])}
      id={id}
      role="search"
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledBy}
      onSubmit={onSubmit}
      method={method}
      action={action}
      {...attributes}
    >
      {children}
    </form>
  );
}
