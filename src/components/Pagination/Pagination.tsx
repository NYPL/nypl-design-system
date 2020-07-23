import * as React from "react";
import bem from "../../utils/bem";
import Button, { ButtonOptions } from "../Button/Button";
import Label from "../Label/Label";
import Select from "../Select/Select";
import { ButtonIconPositions, ButtonTypes } from "../Button/ButtonTypes";
import { IconRotationTypes } from "../Icons/IconTypes";
export interface PaginationProps {
    blockName?: string;
    className?: string;
    currentValue: string;
    modifiers?: string[];
    nextPageHandler: (event: React.MouseEvent) => void;
    onSelectBlur: (event: React.MouseEvent) => void;
    onSelectChange: (event: React.MouseEvent) => void;
    paginationDropdownOptions: string[];
    previousPageHandler: (event: React.MouseEvent) => void;
}

export default function Pagination(props: PaginationProps) {
    const {
        blockName,
        className,
        currentValue,
        modifiers,
        nextPageHandler,
        onSelectBlur,
        onSelectChange,
        paginationDropdownOptions,
        previousPageHandler,
    } = props;

    const pagination__base_class = "pagination";
    let buttonPrevOpts: ButtonOptions = {
        id: "pagination-previous",
        onClick: previousPageHandler,
        content: <>Previous</>,
        buttonType: ButtonTypes.Secondary,
        iconPosition: ButtonIconPositions.Left,
        iconRotation: IconRotationTypes.rotate90,
        iconName: "arrow_xsmall",
        iconDecorative: true,
    };

    let buttonNextOpts: ButtonOptions = {
        id: "pagination-next",
        onClick: nextPageHandler,
        content: <>Next</>,
        buttonType: ButtonTypes.Secondary,
        iconPosition: ButtonIconPositions.Right,
        iconRotation: IconRotationTypes.rotate270,
        iconName: "arrow_xsmall",
        iconDecorative: true,
    };

    let dropdownProps = {
        dropdownId: "pagination-dropdown",
        isRequired: false,
        labelId: "pagination-select-label",
        labelText: "Page",
        selectedOption: currentValue,
        onChange: onSelectChange,
        onBlur: onSelectBlur,
    };

    return (
        <nav
            aria-label="Pagination"
            className={bem(pagination__base_class, modifiers, blockName, [
                className,
            ])}
        >
            <Button onClick={buttonPrevOpts.onClick} {...buttonPrevOpts}>
                {buttonPrevOpts.content}
            </Button>
            <Label htmlFor="pagination-dropdown" id={dropdownProps.labelId}>
                {dropdownProps.labelText}
            </Label>
            <Select
                name="pagination-select"
                blockName={pagination__base_class}
                {...dropdownProps}
            >
                {paginationDropdownOptions.map((item) => (
                    <option aria-selected={false}>{item}</option>
                ))}
            </Select>
            <Button onClick={buttonNextOpts.onClick} {...buttonNextOpts}>
                {buttonNextOpts.content}
            </Button>
        </nav>
    );
}
