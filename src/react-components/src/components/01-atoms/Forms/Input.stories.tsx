import * as React from "react";

import Input from "./Input";

export default {
  title: "Input",
  component: Input,
};

export const input = () => <Input labelId="blah"
  labelContent={<>Label</>}
  inputId="blah"
  isRequired={false}
></Input>;

export const inputWithHelper = () => <Input labelId="blah"
  labelContent={<>Label</>}
  inputId="blah"
  helperContentOpts={{id: "blah", content: <>This is some helpful text</>}}
/>
export const inputRequiredWithHelper = () => <Input labelId="blah"
  labelContent={<>Label</>}
  inputId="blah"
  isRequired={true}
  errorContentOpts={{id: "blah", content: <>Error Message Lorem Ipsum</>}}
  showError={true}></Input>;

export const inputRequiredWithHelperAndError = () => <Input labelId="blah"
  labelContent={<>Label</>}
  inputId="blah"
  isRequired={true}
  helperContentOpts={{id: "blah", content: <>This is some helpful text</>}}
  errorContentOpts={{id:"blah", content: <>Error Message Lorem Ipsum</>}}
  showError={true}></Input>;
