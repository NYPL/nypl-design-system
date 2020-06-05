import * as React from "react";
export interface PaginationProps {
    paginationDropdownOptions: string[];
    previousPageHandler: (event: React.MouseEvent) => void;
    nextPageHandler: (event: React.MouseEvent) => void;
    currentValue: string;
    onSelectChange: (event: React.MouseEvent) => void;
    onSelectBlur: (event: React.MouseEvent) => void;
}
/** Pagination */
export default function Pagination(props: PaginationProps): JSX.Element;
