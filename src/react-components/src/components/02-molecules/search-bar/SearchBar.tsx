
// MT-200 Search Bar
import * as React from "react";
import bem from "../../../utils/bem";
import Button from "../../01-atoms/Button/Button";
import TextField from "../../01-atoms/Forms/TextField";

export interface SearchBarProps {
  id: string;
  placeholderText?: string;
  searchHandler: (event: React.MouseEvent) => void;
}

export default class SearchBar extends React.Component<SearchBarProps, {}> {
  constructor(props: SearchBarProps) {
    super(props);
  }
  render(): JSX.Element {
    let iconLink__base_class = "more-link";
    const { id, placeholderText, searchHandler } = this.props;

    return <div><TextField labelId={id} isRequired={true}/><Button id={id} callback={searchHandler} content="search" type="filled" iconPosition="left" iconName="search-small" iconDecorative={true}/></div>;
  }
}
