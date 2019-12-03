
// MT-200 Search Bar
import * as React from "react";
import bem from "../../../utils/bem";
import Button from "../../01-atoms/Button/Button";
import TextField from "../../01-atoms/Forms/TextField";

export interface SearchBarProps {
  id: string;
  placeholderText?: string;
  textFieldAttributes?: {};
  searchButtonAttributes?: {};
  searchHandler: (event: React.MouseEvent) => void;
  changeHandler?: (event: React.FormEvent) => void;
}

export default function SearchBar(props: SearchBarProps) {

    const { id, placeholderText, searchHandler, changeHandler } = props;

    let texftfieldProps = {
      labelId: id,
      onChange: changeHandler,
      isRequired: true,
      placeholderText: placeholderText,
    };

    let buttonProps = {
      id: id,
      callback: searchHandler,
      content: "search",
      type: "filled",
      iconPosition: "left",
      iconName: "search-small",
      iconDecorative: true,
    };

    return <div><TextField {...texftfieldProps}/><Button {...buttonProps}/></div>;
}
