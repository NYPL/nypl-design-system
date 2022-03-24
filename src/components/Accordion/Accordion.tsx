import * as React from "react";
import {
  Box,
  Accordion as ChakraAccordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from "@chakra-ui/react";

import Icon from "../Icons/Icon";
import { IconNames, IconSizes } from "../Icons/IconTypes";
import generateUUID from "../../helpers/generateUUID";
import { AccordionTypes } from "./AccordionTypes";
export interface AccordionContentDataProps {
  label: string;
  panel: string | React.ReactNode;
}

export interface AccordionProps {
  /** Background color to be passed to the AccordionButton */
  accordionType?: AccordionTypes;
  /** Array of data to display */
  contentData: AccordionContentDataProps[];
  /** ID that other components can cross reference for accessibility purposes */
  id?: string;
  /** Whether the accordion is open by default only on its initial rendering */
  isDefaultOpen?: boolean;
}

/**
 * Get the minus or plus icon depending on whether the accordion
 * is open or closed.
 */
const getIcon = (isExpanded = false, index, id) => {
  const iconName = isExpanded ? IconNames.Minus : IconNames.Plus;
  return (
    <Icon
      id={`accordion-${id}-icon-${index}`}
      name={iconName}
      size={IconSizes.Small}
    />
  );
};

/**
 * Returns `AccordionItems` for every accordion object in the data
 * array. This automatically creates the `AccordionButton` and `AccordionPanel`
 * combination that is required for the Chakra `Accordion` component.
 */
const getElementsFromContentData = (data = [], id, bgColor) => {
  // For FAQ-style multiple accordions, the button should be bigger.
  // Otherwise, use the default.
  const multiplePadding = data?.length > 1 ? "20px" : null;

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
        {({ isExpanded }) => (
          <>
            <AccordionButton
              id={`${id}-button-${index}`}
              padding={multiplePadding}
              bg={bgColor}
            >
              <Box flex="1" textAlign="left">
                {content.label}
              </Box>
              {getIcon(isExpanded, index, id)}
            </AccordionButton>
            {panel}
          </>
        )}
      </AccordionItem>
    );
  });
};

/**
 * Accordion component that shows content on toggle. Can be used to display
 * multiple accordion items together.
 */
function Accordion(props: React.PropsWithChildren<AccordionProps>) {
  const {
    accordionType = AccordionTypes.Default,
    contentData,
    id = generateUUID(),
    isDefaultOpen = false,
  } = props;
  const colorMap = {
    default: "ui.white",
    warning: "ui.status.primary",
    error: "ui.status.secondary",
  };
  const bgColor = colorMap[accordionType];
  // Pass `0` to open the first accordion in the 0-index based array.
  const openFirstAccordion = isDefaultOpen ? 0 : undefined;
  return (
    <ChakraAccordion id={id} defaultIndex={[openFirstAccordion]} allowMultiple>
      {getElementsFromContentData(contentData, id, bgColor)}
    </ChakraAccordion>
  );
}

export default Accordion;
