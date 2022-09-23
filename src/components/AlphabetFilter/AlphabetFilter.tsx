import React, { forwardRef, useRef, useState } from "react";
import { Box, chakra, Flex, useMultiStyleConfig } from "@chakra-ui/react";
import { Button } from "../Button/Button";
import ComponentWrapper from "../ComponentWrapper/ComponentWrapper";

export interface AlphabetFilterProps {
  /** Array of letters to specify which `Button` components should be set in an `enabled`
   * state. By default, all buttons are `enabled`. */
  activeLetters?: string[];
  /** A class name for the AlphabetFilter parent div. */
  className?: string;
  /** The currentLetter can be used to programatically set the selected letter without the
   * user explicitly requesting it. */
  currentLetter?: string;
  /** Value used to set the text for a `Text` component that will be displayed above the letter buttons. */
  descriptionText?: string | JSX.Element;
  /** Value used to set the text for a `Heading` component. */
  headingText?: string;
  /** ID that other components can cross reference for accessibility purposes. */
  id?: string;
  /** Adds the `disabled` prop to the AlphabetFilter when true. */
  isDisabled?: boolean;
  /** The callback function called when a letter button or the Show All button is clicked. */
  onClick: (filterValue: string) => void;
}

export const AlphabetFilter = chakra(
  forwardRef<HTMLDivElement, AlphabetFilterProps>((props, ref?) => {
    const {
      activeLetters,
      className,
      currentLetter,
      descriptionText,
      headingText,
      id,
      isDisabled,
      onClick,
      ...rest
    } = props;

    const styles = useMultiStyleConfig("AlphabetFilter", {});

    const filterButtons = [
      { text: "#", value: "#" },
      { text: "A", value: "a" },
      { text: "B", value: "b" },
      { text: "C", value: "c" },
      { text: "D", value: "d" },
      { text: "E", value: "e" },
      { text: "F", value: "f" },
      { text: "G", value: "g" },
      { text: "H", value: "h" },
      { text: "I", value: "i" },
      { text: "J", value: "j" },
      { text: "K", value: "k" },
      { text: "L", value: "l" },
      { text: "M", value: "m" },
      { text: "N", value: "n" },
      { text: "O", value: "o" },
      { text: "P", value: "p" },
      { text: "Q", value: "q" },
      { text: "R", value: "r" },
      { text: "S", value: "s" },
      { text: "T", value: "t" },
      { text: "U", value: "u" },
      { text: "V", value: "v" },
      { text: "W", value: "w" },
      { text: "X", value: "x" },
      { text: "Y", value: "y" },
      { text: "Z", value: "z" },
      { text: "Show All", value: "showAll" },
    ];

    const refCurrentLetter = useRef(currentLetter);
    const [selectedLetter, setSelectedLetter] = useState<string>(currentLetter);

    // If the parent passes down a new currentLetter, then set the internal state – selectedLetter –
    // to the new currentLetter and update the refCurrentLetter with that value.
    React.useEffect(() => {
      if (currentLetter && currentLetter !== refCurrentLetter.current) {
        setSelectedLetter(currentLetter);
        refCurrentLetter.current = currentLetter;
      }
    }, [currentLetter, onClick]);

    /**
     * This function is only called when clicking on a link should
     * not update the URL or refresh the page.
     */
    const handleOnClick = (
      e: React.MouseEvent | React.KeyboardEvent,
      clickedLetter: string
    ) => {
      e.preventDefault && e.preventDefault();
      if (selectedLetter === clickedLetter) return;
      setSelectedLetter(clickedLetter);
      onClick && onClick(clickedLetter);
    };

    const getButtonElement = (item) => {
      const isSelectedLetter =
        selectedLetter === item.value && item.value !== "showAll";
      const isShowAll = item.value === "showAll";
      const isButtonDisabled =
        isDisabled ||
        (activeLetters && !activeLetters.includes(item.value) && !isShowAll);

      const buttonStyles = isSelectedLetter
        ? {
            ...styles.button,
            border: "1px solid",
            borderColor: "ui.border.default",
          }
        : {
            ...styles.button,
            border: "1px solid transparent", // prevent shifting when letter is selected
          };

      return (
        <Button
          aria-current={isSelectedLetter ? "page" : null}
          aria-label={
            item.text === "Show All" ? item.text : "Page " + item.text
          }
          buttonType="text"
          id={`filter-${item.value}`}
          isDisabled={isButtonDisabled}
          key={item.value}
          __css={buttonStyles}
          onClick={(e: React.MouseEvent | React.KeyboardEvent) => {
            handleOnClick(e, item.value);
          }}
        >
          {item.text}
        </Button>
      );
    };

    const getFilterLetters = () => {
      return filterButtons.map((item) => {
        return getButtonElement(item);
      });
    };

    return (
      <Box as="nav" role="navigation" ref={ref}>
        <ComponentWrapper
          id={id}
          className={className}
          __css={styles}
          {...rest}
          headingText={headingText ? headingText : undefined}
          descriptionText={descriptionText ? descriptionText : undefined}
        >
          <Flex wrap="wrap">{getFilterLetters()}</Flex>
        </ComponentWrapper>
      </Box>
    );
  })
);

export default AlphabetFilter;
