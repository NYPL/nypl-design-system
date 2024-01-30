import {
  Accordion as ChakraAccordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  chakra,
  useColorMode,
} from "@chakra-ui/react";
import React, { forwardRef } from "react";

import Icon from "../Icons/Icon";

export type AccordionTypes = "default" | "warning" | "error";
export interface AccordionDataProps {
  accordionType?: AccordionTypes;
  ariaLabel?: string;
  label: string | JSX.Element;
  panel: string | React.ReactNode;
}
export interface AccordionProps {
  /** Array of data to display, and an optional accordionType */
  accordionData: AccordionDataProps[];
  /** Description of aria-label. */
  ariaLabel?: string;
  /** ID that other components can cross reference for accessibility purposes */
  id?: string;
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
  /**
   * A buttonRef that will hold a reference to the underlying DOM element of the AccordionButton.
   * This buttonRef can be used to interact with or manipulate the AccordionButton programmatically.
   */
  buttonRef?: any;
}

/**
 * Get the minus or plus icon depending on whether the accordion
 * is open or closed.
 */
const getIcon = (
  isExpanded = false,
  index: number,
  id: string,
  iconColor: string
) => {
  const iconName = isExpanded ? "minus" : "plus";
  return (
    <Icon
      id={`accordion-${id}-icon-${index}`}
      name={iconName}
      size="small"
      color={iconColor}
    />
  );
};

/**
 * Returns `AccordionItems` for every accordion object in the data
 * array. This automatically creates the `AccordionButton` and `AccordionPanel`
 * combination that is required for the Chakra `Accordion` component.
 */
const getElementsFromData = (
  data: AccordionDataProps[] = [],
  ariaLabel: string,
  id: string,
  isAlwaysRendered: boolean = false,
  isDarkMode: boolean,
  panelMaxHeight: string,
  buttonRef: any
) => {
  const colorMap = isDarkMode
    ? {
        default: "ui.white",
        warning: "ui.status.primary",
        error: "dark.ui.error.primary",
      }
    : {
        default: "ui.white",
        warning: "ui.status.primary",
        error: "ui.status.secondary",
      };
  // For FAQ-style multiple accordions, the button should be bigger.
  // Otherwise, use the default.
  const multipleFontSize =
    data?.length > 1 ? "desktop.body.body1" : "desktop.body.body2";
  const multiplePadding = data?.length > 1 ? "s" : "xs s";

  return data.map((content, index) => {
    // This is done to support both string and DOM element input.
    const panel =
      typeof content.panel === "string" ? (
        <AccordionPanel
          id={`${id}-panel-${index}`}
          key={index}
          dangerouslySetInnerHTML={{ __html: content.panel }}
          maxHeight={panelMaxHeight}
          overflow="auto"
        />
      ) : (
        <AccordionPanel
          id={`${id}-panel-${index}`}
          key={index}
          maxHeight={panelMaxHeight}
          overflow="auto"
        >
          {content.panel}
        </AccordionPanel>
      );

    const finalAriaLabel = content.ariaLabel ? content.ariaLabel : ariaLabel;

    if (content.ariaLabel && ariaLabel) {
      console.warn(
        "NYPL Reservoir Accordion: And arialLabel value has been passed for the " +
          "overall component and as part of the accordionData prop. Both can not " +
          "be used, so the value in the accordionData prop will be used."
      );
    }

    return (
      <AccordionItem id={`${id}-item-${index}`} key={index}>
        {/* Get the current state to render the correct icon. */}
        {({ isExpanded }) => {
          const bgColorByAccordionType = colorMap[content.accordionType];
          return (
            <>
              <AccordionButton
                aria-label={finalAriaLabel}
                id={`${id}-button-${index}`}
                borderColor={
                  isDarkMode ? "dark.ui.border.default" : "ui.gray.medium"
                }
                padding={multiplePadding}
                ref={buttonRef}
                bg={
                  !content.accordionType
                    ? colorMap.default
                    : bgColorByAccordionType
                }
                _expanded={{
                  bg:
                    !content.accordionType ||
                    content.accordionType === "default"
                      ? "ui.gray.light-cool"
                      : bgColorByAccordionType,
                }}
                _hover={{
                  bg:
                    !content.accordionType ||
                    content.accordionType === "default"
                      ? "transparent"
                      : bgColorByAccordionType,
                  borderColor: "ui.gray.dark",
                }}
                _dark={{
                  _expanded: {
                    bg: "dark.ui.bg.active",
                  },
                  bg: "dark.ui.bg.default",
                  color: "dark.ui.typography.heading",
                  borderStart: "4px solid",
                  borderStartColor:
                    !content.accordionType ||
                    content.accordionType === "default"
                      ? "dark.ui.border.hover"
                      : bgColorByAccordionType,
                }}
              >
                <Box
                  as="span"
                  flex="1"
                  fontSize={multipleFontSize}
                  textAlign="start"
                >
                  {content.label}
                </Box>
                {getIcon(
                  isExpanded,
                  index,
                  id,
                  isDarkMode ? "dark.ui.typography.heading" : "ui.black"
                )}
              </AccordionButton>
              {(isAlwaysRendered || isExpanded) && panel}
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
export const Accordion = chakra(
  forwardRef<HTMLDivElement, AccordionProps>((props, ref?) => {
    const {
      accordionData,
      ariaLabel,
      id,
      isDefaultOpen = false,
      isAlwaysRendered = false,
      panelMaxHeight,
      buttonRef,
      ...rest
    } = props;

    const isDarkMode = useColorMode().colorMode === "dark";
    // Pass `0` to open the first accordion in the 0-index based array.
    const openFirstAccordion = isDefaultOpen ? [0] : undefined;

    return (
      <ChakraAccordion
        allowMultiple
        defaultIndex={openFirstAccordion}
        id={id}
        ref={ref}
        {...rest}
      >
        {getElementsFromData(
          accordionData,
          ariaLabel,
          id,
          isAlwaysRendered,
          isDarkMode,
          panelMaxHeight,
          buttonRef
        )}
      </ChakraAccordion>
    );
  })
);

export default Accordion;
