import {
  Accordion as ChakraAccordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  BoxProps,
  chakra,
  ChakraComponent,
  useColorModeValue,
} from "@chakra-ui/react";
import { createRef, forwardRef, useEffect, useState } from "react";

import Icon from "../Icons/Icon";
import { useSafeId } from "../../hooks/useSafeId";

export const accordionVariantsArray = ["default", "warning", "error"] as const;
export type AccordionVariants = typeof accordionVariantsArray[number];
export interface AccordionDataProps {
  ariaLabel?: string;
  /** Ref to the DOM element of the AccordionButton. */
  buttonInteractionRef?: any;
  isDisabled?: boolean;
  label: string | JSX.Element;
  panel: string | React.ReactNode;
  variant?: AccordionVariants;
}

export interface AccordionProps extends Omit<BoxProps, "onChange"> {
  /** Array of data to display, along with an optional variant and disabled
   * state. */
  accordionData: AccordionDataProps[];
  /** Whether the accordion is open by default only on its initial rendering */
  isDefaultOpen?: boolean;
  /** Whether the contents of the Accordion should always be rendered.
   *  Useful for form-components. `false` by default. */
  isAlwaysRendered?: boolean;
  /** Sets max height of accordion panel. This value should be entered with the
   * formatting of a CSS height attribute (ex. 100px, 8rem). If height of content
   * within accordion panel is greater than height set by panelMaxHeight, a
   * scrollbar will appear for accordion panel. */
  panelMaxHeight?: string;
  /** For internal use only. This value toggles the accordion closed if the
   * MultiSelect's `closeOnBlur` prop is true and the user clicks outside the
   * component. */
  userClickedOutside?: boolean;
}

/**
 * Returns `AccordionItems` for every accordion object in the data
 * array. This automatically creates the `AccordionButton` and `AccordionPanel`
 * combination that is required for the Chakra `Accordion` component.
 */
const getElementsFromData = ({
  data = [],
  ariaLabel,
  id,
  isAlwaysRendered = false,
  panelMaxHeight,
  hoveredButtonIndex,
  setHoveredButtonIndex,
}: {
  data?: AccordionDataProps[];
  ariaLabel: string;
  id: string;
  isAlwaysRendered?: boolean;
  panelMaxHeight: string;
  hoveredButtonIndex: number;
  setHoveredButtonIndex: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const getColorMapLight = (isDisabled) => {
    return isDisabled
      ? {
          default: "ui.disabled.secondary",
          warning: "ui.status.primary-10",
          error: "ui.status.primary-10", // TODO: replace with vivid burgundy 25
        }
      : {
          default: "ui.white",
          warning: "ui.status.primary",
          error: "ui.status.secondary",
        };
  };
  const getBorderStartColorMapDark = (isDisabled) => {
    return isDisabled
      ? {
          default: "dark.ui.disabled.primary",
          warning: "dark.ui.status.primary",
          error: "dark.ui.status.primary", // TODO: replace with vivid burgundy 700
        }
      : {
          default: "ui.white",
          warning: "ui.status.primary",
          error: "dark.ui.error.primary",
        };
  };
  // For FAQ-style multiple accordions, the button should be bigger.
  // Otherwise, use the default.
  const numAccordionItems = data?.length;

  const multipleFontSize =
    numAccordionItems > 1 ? "desktop.body.body1" : "desktop.body.body2";
  const multiplePadding = numAccordionItems > 1 ? "s" : "xs s";

  return data.map((content, index) => {
    const isLast = index === numAccordionItems - 1;
    const isDisabled = content.isDisabled;
    // This is done to support both string and DOM element input.
    const commonProps = {
      id: `${id}-panel-${index}`,
      maxHeight: panelMaxHeight,
      overflow: "auto",
    };
    const panel =
      typeof content.panel === "string" ? (
        <AccordionPanel
          key={index}
          {...commonProps}
          dangerouslySetInnerHTML={{ __html: content.panel }}
        />
      ) : (
        <AccordionPanel
          key={index}
          {...commonProps}
          borderBottom={!isLast ? "transparent" : undefined}
        >
          {content.panel}
        </AccordionPanel>
      );

    const finalAriaLabel = content.ariaLabel ? content.ariaLabel : ariaLabel;

    if (content.ariaLabel && ariaLabel) {
      console.warn(
        "NYPL Reservoir Accordion: An aria-label value has been passed for the " +
          "overall component and as part of the accordionData prop. Both can not " +
          "be used, so the value in the accordionData prop will take precedence."
      );
    }
    return (
      <AccordionItem
        id={`${id}-item-${index}`}
        key={index}
        isDisabled={isDisabled}
      >
        {/* Get the current state to render the correct icon. */}
        {({ isExpanded }) => {
          const noTypeOrDefaultType =
            !content.variant || content.variant === "default";
          return (
            <>
              <AccordionButton
                aria-label={finalAriaLabel}
                id={`${id}-button-${index}`}
                padding={multiplePadding}
                ref={content.buttonInteractionRef}
                borderColor={
                  isDisabled && numAccordionItems === 1
                    ? "ui.gray.semi-medium"
                    : "ui.gray.medium"
                }
                // Fix for double border issue in non-hovered state
                // i.e. Hide the bottom border unless the accordion is last or expanded
                borderBottomColor={
                  isLast && isDisabled && numAccordionItems === 1
                    ? "ui.gray.semi-medium"
                    : isLast || isExpanded
                    ? "ui.gray.medium"
                    : "transparent"
                }
                // Fix for double border issue on hover
                // i.e. Hide the top border on the next button after the hovered button unless it's first
                borderTopColor={
                  index !== 0 && index === hoveredButtonIndex + 1
                    ? "transparent"
                    : undefined
                }
                bg={
                  getColorMapLight(isDisabled)[content?.variant] ||
                  getColorMapLight(isDisabled)["default"]
                }
                _hover={
                  !isDisabled && {
                    bg: getColorMapLight(isDisabled)[content.variant],
                    borderColor: "ui.gray.dark",
                  }
                }
                _expanded={{
                  bg: noTypeOrDefaultType
                    ? "ui.gray.light-cool"
                    : getColorMapLight(isDisabled)[content.variant],
                  _hover: {
                    bg: noTypeOrDefaultType
                      ? "ui.gray.light-cool"
                      : getColorMapLight(isDisabled)[content.variant],
                  },
                }}
                _dark={{
                  _expanded: {
                    bg: "dark.ui.bg.active",
                  },
                  bg: "dark.ui.bg.default",
                  borderColor:
                    isDisabled && numAccordionItems === 1
                      ? "dark.ui.disabled.primary"
                      : "dark.ui.border.default",
                  color: "dark.ui.typography.heading",
                  borderStart: "4px solid",
                  borderStartColor: noTypeOrDefaultType
                    ? "dark.ui.border.hover"
                    : getBorderStartColorMapDark(isDisabled)[content.variant],
                  borderBottomColor:
                    isLast && isDisabled && numAccordionItems === 1
                      ? "dark.ui.disabled.primary"
                      : isLast || isExpanded
                      ? "dark.ui.border.default"
                      : "transparent",
                  _hover: !isDisabled && {
                    borderColor: "dark.ui.border.hover",
                  },
                }}
                onMouseEnter={() => {
                  setHoveredButtonIndex(index);
                }}
                onMouseLeave={() => {
                  setHoveredButtonIndex(-1);
                }}
              >
                <Box
                  as="span"
                  flex="1"
                  fontSize={multipleFontSize}
                  textAlign="start"
                  color={useColorModeValue(
                    isDisabled ? "ui.gray.dark" : "ui.black",
                    isDisabled ? "dark.ui.disabled.primary" : "ui.white"
                  )}
                >
                  {content.label}
                </Box>
                <Icon
                  color={useColorModeValue(
                    isDisabled ? "ui.gray.medium" : "ui.black",
                    isDisabled ? "dark.ui.disabled.primary" : "ui.white"
                  )}
                  id={`${id}-icon-${index}`}
                  name={isExpanded ? "minus" : "plus"}
                  size="small"
                />
              </AccordionButton>
              {(isAlwaysRendered || isExpanded) && !isDisabled && panel}
            </>
          );
        }}
      </AccordionItem>
    );
  });
};

/**
 * Accordion component that shows content on toggle. Can be used to display
 * multiple accordion items together.
 */

export const Accordion: ChakraComponent<
  React.ForwardRefExoticComponent<
    AccordionProps & React.RefAttributes<HTMLDivElement>
  >,
  AccordionProps
> = chakra(
  forwardRef<HTMLDivElement, AccordionProps>((props, ref?) => {
    const {
      accordionData,
      "aria-label": ariaLabel,
      id,
      isDefaultOpen = false,
      isAlwaysRendered = false,
      panelMaxHeight,
      userClickedOutside,
      ...rest
    } = props;
    const mainId = useSafeId(id);

    // Pass `0` to open the first accordion in the 0-index based array.
    const [expandedPanels, setExpandedPanels] = useState<number[]>(
      isDefaultOpen ? [0] : []
    );

    const [prevAccordionData, setPrevAccordionData] =
      useState<AccordionDataProps[]>(accordionData);
    if (accordionData !== prevAccordionData) {
      setPrevAccordionData(accordionData);
      // Closes accordion items that are set to disabled
      setExpandedPanels((prev) =>
        prev.filter((idx) => !accordionData[idx]?.isDisabled)
      );
    }

    // Used for fix a double border issue on hover for users with JS enabled
    // Necessary due to Chakra's internal wrapping of the AccordionButton in a div
    const [hoveredButtonIndex, setHoveredButtonIndex] = useState<number>(-1);

    // If the accordionData doesn't already contain refs for the panel
    // buttons, add them now.
    const updatedAccordionData = accordionData.map((item) => ({
      ...item,
      buttonInteractionRef: item.buttonInteractionRef || createRef(),
    }));

    const handleKeyDown = (e) => {
      // If the 'esc' key is pressed, find the panel the
      // user is focused on or within, and remove it as
      // an expanded panel. (Nothing will happen if the
      // panel is already collapsed.)
      if (e.code === "Escape") {
        let focusedPanelIndex;
        if (e.target.dataset.index) {
          // If the user is focused on an accordion button...
          focusedPanelIndex = Number(e.target.dataset.index);
        } else {
          // If the user is focused on an element within the panel...
          focusedPanelIndex = Number(
            e.target.closest("[role='region']").id.split("-").pop()
          );
        }

        setExpandedPanels(
          expandedPanels.filter((i) => i !== focusedPanelIndex)
        );

        // If something *inside* the accordion was in focus and 'esc' was clicked,
        // return focus to the accordion panel
        if (updatedAccordionData[focusedPanelIndex].buttonInteractionRef) {
          updatedAccordionData[
            focusedPanelIndex
          ].buttonInteractionRef.current.focus();
        }
      }
    };

    useEffect(() => {
      if (userClickedOutside) {
        setExpandedPanels([]);
      }
    }, [userClickedOutside]);

    return (
      <ChakraAccordion
        allowMultiple
        data-testid="ds-accordion"
        index={expandedPanels}
        onChange={(expandedIdxs: number[]) => setExpandedPanels(expandedIdxs)}
        onKeyDown={handleKeyDown}
        id={mainId}
        ref={ref}
        {...rest}
      >
        {getElementsFromData({
          ariaLabel,
          data: updatedAccordionData,
          hoveredButtonIndex,
          id: mainId,
          isAlwaysRendered,
          panelMaxHeight,
          setHoveredButtonIndex,
        })}
      </ChakraAccordion>
    );
  })
);

export default Accordion;
