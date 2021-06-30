import * as React from "react";
import bem from "../../utils/bem";
import Icon from "../Icons/Icon";
import { IconNames } from "../Icons/IconTypes";

export interface AccordionProps {
  /** Inner label on the button that opens the accordion */
  accordionLabel?: React.ReactNode;
  /** BlockName for use with BEM. See how to work with blockNames and BEM here: http://getbem.com/introduction/ */
  blockName?: string;
  /** className you can add in addition to 'input' */
  className?: string;
  /** Whether the accordion is open by default */
  defaultOpen?: boolean;
  /** ID that other components can cross reference for accessibility purposes */
  id?: string;
  /** accordionLabel's input ID */
  inputId?: string;
  /** Modifiers array for use with BEM. See how to work with modifiers and BEM here: http://getbem.com/introduction/ */
  modifiers?: string[];
}

/** Accordion component that shows content on toggle */
export default function Accordion(
  props: React.PropsWithChildren<AccordionProps>
) {
  const {
    modifiers = [],
    blockName,
    id,
    className,
    inputId,
    defaultOpen = false,
    accordionLabel,
    children,
  } = props;

  return (
    <div
      id={id}
      className={bem("accordion", modifiers, blockName, [className])}
    >
      <input
        id={`accordion-${inputId}`}
        className={bem("input", modifiers, "accordion")}
        type="checkbox"
        defaultChecked={defaultOpen}
      />
      <label
        htmlFor={`accordion-${inputId}`}
        className={bem("label", modifiers, "accordion")}
      >
        {accordionLabel}
        <Icon
          decorative={true}
          name={IconNames.minus}
          modifiers={["small", `${IconNames.minus}`]}
        />
        <Icon
          decorative={true}
          name={IconNames.plus}
          modifiers={["small", `${IconNames.plus}`]}
        />
      </label>

      <div className={bem("content", modifiers, "accordion")}>{children}</div>
    </div>
  );
}
