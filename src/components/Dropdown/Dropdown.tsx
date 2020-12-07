import React, { useState } from "react";
import PropTypes from "prop-types";
import FocusTrap from "focus-trap-react";

import Checkbox from "../Checkbox/Checkbox";
import Button from "../Button/Button";
import Icon from "../Icons/Icon";
import { IconNames } from "../Icons/IconTypes";
import { ButtonTypes } from "../Button/ButtonTypes";

/**
  this is used for the item Filters
  @param {array | string} filterValue
  @param {string} itemValue
  @return {boolean}
*/
const isOptionSelected = (filterValue, itemValue) => {
    const itemValues = Array.isArray(itemValue) ? itemValue : [itemValue];
    const filterValues = Array.isArray(filterValue)
        ? filterValue
        : [filterValue];
    return filterValues.some((filter) => itemValues.includes(filter));
};

export const parseDistinctOptions = (options) =>
    Array.from(
        new Set(
            options.reduce((optionLabels, option) => {
                if (Array.isArray(option.label))
                    return optionLabels.concat(option.label);
                return optionLabels.concat([option.label]);
            }, [])
        )
    ).map((label) => ({
        id: label,
        label,
    }));

const ItemFilter = ({
    filter,
    options,
    manageFilterDisplay,
    mobile,
    selectedFilters,
    submitFilterSelections,
    setSelectedFilters,
    isOpen,
}) => {
    const [selectionMade, setSelectionMade] = useState(false);

    const selectFilter = (value) => {
        setSelectedFilters((prevSelectedFilters) => {
            const updatedSelectedFilters = { ...prevSelectedFilters };
            const prevSelection = prevSelectedFilters[filter];
            if (!prevSelection || !prevSelection.length)
                updatedSelectedFilters[filter] = [value.id];
            else {
                updatedSelectedFilters[filter] = Array.isArray(prevSelection)
                    ? [...prevSelection, value.id]
                    : [prevSelection, value.id];
            }
            return updatedSelectedFilters;
        });
    };

    const deselectFilter = (value) => {
        setSelectedFilters((prevSelectedFilters) => {
            const updatedSelectedFilters = { ...prevSelectedFilters };
            const previousSelection = updatedSelectedFilters[filter];
            updatedSelectedFilters[filter] = Array.isArray(previousSelection)
                ? previousSelection.filter(
                      (prevSelection) => prevSelection !== value.id
                  )
                : [];
            return updatedSelectedFilters;
        });
    };

    const handleCheckbox = (option) => {
        if (!selectionMade) setSelectionMade(true);
        const currentSelection = selectedFilters[filter];
        if (currentSelection && currentSelection.includes(option.id)) {
            deselectFilter(option);
        } else selectFilter(option);
    };

    const isSelected = (option) => {
        if (!option) return false;
        const result = isOptionSelected(option[filter], option.id);

        return result;
    };

    const distinctOptions = parseDistinctOptions(options);
    const determineNumOfSelections = () => {
        if (!options) return null;
        return typeof options === "string" ? 1 : options.length;
    };
    const numOfSelections = determineNumOfSelections();

    const [mobileIsOpen, manageMobileFilter] = useState(false);

    const clickHandler = () =>
        mobile
            ? manageMobileFilter((prevState) => !prevState)
            : manageFilterDisplay(filter);
    const open = mobile ? mobileIsOpen : isOpen;

    return (
        <div className="item-filter">
            <FocusTrap
                focusTrapOptions={{
                    clickOutsideDeactivates: true,
                    onDeactivate: () => {
                        if (!mobile) manageFilterDisplay("none");
                    },
                    returnFocusOnDeactivate: false,
                }}
                active={isOpen}
            >
                <>
                    <Button
                        className={`item-filter-button ${
                            isOpen ? " open" : ""
                        }`}
                        buttonType={ButtonTypes.Secondary}
                        onClick={clickHandler}
                        type="button"
                    >
                        {filter}
                        {numOfSelections ? ` (${numOfSelections})` : null}{" "}
                        <Icon
                            name={isOpen ? IconNames.minus : IconNames.plus}
                            decorative={true}
                        />
                    </Button>
                    {open ? (
                        <div className="item-filter-content">
                            <fieldset>
                                {distinctOptions.map(
                                    (option: { id: string; label: any }, i) => (
                                        <Checkbox
                                            labelOptions={{
                                                id: option.id,
                                                labelContent: option.label,
                                            }}
                                            onChange={() =>
                                                handleCheckbox(option)
                                            }
                                            key={option.id || i}
                                            isSelected={isSelected(option)}
                                        />
                                    )
                                )}
                            </fieldset>
                            {!mobile ? (
                                <div className="item-filter-buttons">
                                    <Button
                                        buttonType={ButtonTypes.Link}
                                        onClick={() =>
                                            manageFilterDisplay("none")
                                        }
                                    >
                                        Clear
                                    </Button>
                                    <Button
                                        onClick={() =>
                                            submitFilterSelections(
                                                selectedFilters
                                            )
                                        }
                                        disabled={!selectionMade}
                                    >
                                        Apply
                                    </Button>
                                </div>
                            ) : null}
                        </div>
                    ) : null}
                </>
            </FocusTrap>
        </div>
    );
};

ItemFilter.propTypes = {
    filter: PropTypes.string,
    options: PropTypes.array,
    isOpen: PropTypes.bool,
    manageFilterDisplay: PropTypes.func,
    mobile: PropTypes.bool,
    selectedFilters: PropTypes.object,
    submitFilterSelections: PropTypes.func,
    setSelectedFilters: PropTypes.func,
};

export default ItemFilter;
