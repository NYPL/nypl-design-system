import * as React from "react";
import bem from "../../utils/bem";
import Button, { ButtonOptions } from "../Button/Button";
import Dropdown from "../Dropdown/Dropdown";
import { ButtonIconPositions, ButtonTypes } from "../Button/ButtonTypes";
import { iconRotationOptions } from "../Icons/IconTypes";
export interface PaginationProps {
    paginationDropdownOptions: string[];
    previousPageHandler: (event: React.MouseEvent) => void;
    nextPageHandler: (event: React.MouseEvent) => void;
    currentValue: string;
    onSelectChange: (event: React.MouseEvent) => void;
    onSelectBlur: (event: React.MouseEvent) => void;
}

/** Pagination */
export default function Pagination(props: PaginationProps) {
    const {
        paginationDropdownOptions,
        currentValue,
        previousPageHandler,
        nextPageHandler,
        onSelectChange,
        onSelectBlur,
    } = props;

    const pagination__base_class = "pagination";
    let buttonPrevOpts: ButtonOptions = {
        id: "pagination-previous",
        callback: previousPageHandler,
        content: <>Previous</>,
        buttonType: ButtonTypes.Outline,
        iconPosition: ButtonIconPositions.Left,
        iconRotation: iconRotationOptions.rotate90,
        iconName: "arrow_xsmall",
        iconDecorative: true,
    };

    let buttonNextOpts: ButtonOptions = {
        id: "pagination-next",
        callback: nextPageHandler,
        content: <>Next</>,
        buttonType: ButtonTypes.Outline,
        iconPosition: ButtonIconPositions.Right,
        iconRotation: iconRotationOptions.rotate270,
        iconName: "arrow_xsmall",
        iconDecorative: true,
    };

    let dropdownProps = {
        dropdownId: "pagination-dropdown",
        isRequired: false,
        labelId: "pagination-select-label",
        labelText: "Page",
        dropdownOptions: paginationDropdownOptions,
        selectedOption: currentValue,
        onSelectChange: onSelectChange,
        onSelectBlur: onSelectBlur,
    };

    return (
        <nav aria-label="Pagination" className={bem(pagination__base_class)}>
            <Button callback={buttonPrevOpts.callback} {...buttonPrevOpts}>
                {buttonPrevOpts.content}
            </Button>
            <Dropdown
                blockName={pagination__base_class}
                labelPosition="left"
                {...dropdownProps}
            ></Dropdown>
            <Button callback={buttonNextOpts.callback} {...buttonNextOpts}>
                {buttonNextOpts.content}
            </Button>
        </nav>
    );
}
