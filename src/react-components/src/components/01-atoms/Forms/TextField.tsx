
// AF-239 Text Field
import * as React from "react";
import bem from "../../../utils/bem";

export interface TextFieldProps {
  labelId: string;
  isRequired: boolean;
  placeholderText?: string;
}
export default class TextField extends React.Component<TextFieldProps, {}> {
  constructor(props: TextFieldProps) {
    super(props);
  }
  render(): JSX.Element {
    const { labelId, isRequired, placeholderText } = this.props;

    let props = {
      "className": "form-item__textfield",
      "type": "text",
      "placeholder": placeholderText,
      "aria-labelledby": labelId,
    };
    if (isRequired) {
      props["aria-required"] = true;
    }

    return React.createElement(
      "input",
      props
    );
  }
}
