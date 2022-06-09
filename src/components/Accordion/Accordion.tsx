import {
  Accordion as ChakraAccordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  chakra,
} from "@chakra-ui/react";
import * as React from "react";

import Icon from "../Icons/Icon";

export type AccordionTypes = "default" | "warning" | "error";
export interface AccordionDataProps {
  accordionType?: AccordionTypes;
  label: string;
  panel: string | React.ReactNode;
}
export interface AccordionProps {
  /** Array of data to display, and an optional accordionType */
  accordionData: AccordionDataProps[];
  /** ID that other components can cross reference for accessibility purposes */
  id?: string;
  /** Whether the accordion is open by default only on its initial rendering */
  isDefaultOpen?: boolean;
}

/**
 * Get the minus or plus icon depending on whether the accordion
 * is open or closed.
 */
const getIcon = (isExpanded = false, index: number, id: string) => {
  const iconName = isExpanded ? "minus" : "plus";
  return (
    <Icon id={`accordion-${id}-icon-${index}`} name={iconName} size="small" />
  );
};

/**
 * Returns `AccordionItems` for every accordion object in the data
 * array. This automatically creates the `AccordionButton` and `AccordionPanel`
 * combination that is required for the Chakra `Accordion` component.
 */
const getElementsFromData = (data: AccordionDataProps[] = [], id: string) => {
  const colorMap = {
    default: "ui.white",
    warning: "ui.status.primary",
    error: "ui.status.secondary",
  };
  // For FAQ-style multiple accordions, the button should be bigger.
  // Otherwise, use the default.
  const multipleFontSize = data?.length > 1 ? "text.default" : "text.caption";
  const multiplePadding = data?.length > 1 ? "s" : "xs s";

  return data.map((content, index) => {
    // This is done to support both string and DOM element input.
    const panel =
      typeof content.panel === "string" ? (
        <AccordionPanel
          id={`${id}-panel-${index}`}
          key={index}
          dangerouslySetInnerHTML={{ __html: content.panel }}
        />
      ) : (
        <AccordionPanel id={`${id}-panel-${index}`} key={index}>
          {content.panel}
        </AccordionPanel>
      );

    return (
      <AccordionItem id={`${id}-item-${index}`} key={index}>
        {/* Get the current state to render the correct icon. */}
        {({ isExpanded }) => {
          const bgColorByAccordionType = colorMap[content.accordionType];
          return (
            <>
              <AccordionButton
                id={`${id}-button-${index}`}
                borderColor="ui.gray.medium"
                padding={multiplePadding}
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
              >
                <Box
                  as="span"
                  flex="1"
                  fontSize={multipleFontSize}
                  textAlign="left"
                >
                  {content.label}
                </Box>
                {getIcon(isExpanded, index, id)}
              </AccordionButton>
              {panel}
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
export const Accordion = chakra((props: AccordionProps) => {
  const { accordionData, id, isDefaultOpen = false, ...rest } = props;

  // Pass `0` to open the first accordion in the 0-index based array.
  const openFirstAccordion = isDefaultOpen ? [0] : undefined;

  return (
    <ChakraAccordion
      id={id}
      defaultIndex={openFirstAccordion}
      allowMultiple
      {...rest}
    >
      {getElementsFromData(accordionData, id)}
    </ChakraAccordion>
  );
});

export default Accordion;
