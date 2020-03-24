import * as React from "react";

import DateRangeForm from "./DateRangeForm";
import { action } from "@storybook/addon-actions";

export default {
  title: "DateRangeForm",
  component: DateRangeForm,
};

let callback: (event: React.MouseEvent | React.KeyboardEvent) => void = action("clicked");
export const defaultState = () => <DateRangeForm
  formLabel={<>Publication Year</>}

  fromLabelOpts={{ labelContent: <>From</>, id: "FromLabel" }}
  fromInputOpts={{ inputId: "fromInput" }}
  fromHelper={{ content: <>EX. 1901</>, id: "fromyearhelper", isError: false }}

  toLabelOpts={{ labelContent: <>To</>, id: "ToLabel" }}
  toInputOpts={{ inputId: "toInput" }}
  toHelper={{ content: <>EX. 2000</>, id: "toYearHelper", isError: false }}

  showError={false}
  error={{ content: <></>, id: "errorId", isError: true }}

  buttonProps={{ id: "submitButtonId", callback: callback, content: <>Submit</> }}
/>;

export const errorState = () => <DateRangeForm
  formLabel={<>Publication Year</>}

  fromLabelOpts={{ labelContent: <>From</>, id: "FromLabel" }}
  fromInputOpts={{ inputId: "fromInput" }}
  fromHelper={{ content: <>EX. 1901</>, id: "fromyearhelper" }}

  toLabelOpts={{ labelContent: <>To</>, id: "ToLabel" }}
  toInputOpts={{ inputId: "toInput" }}
  toHelper={{ content: <>EX. 2000</>, id: "toYearHelper" }}

  showError={true}
  error={{ content: <div>The end year should be the same year as or later than the start year</div>, id: "errorId" }}

  buttonProps={{ id: "submitButtonId", callback: callback, content: <>Submit</> }}
/>;

export const noButton = () => <DateRangeForm
  formLabel={<>Publication Year</>}

  fromLabelOpts={{ labelContent: <>From</>, id: "FromLabel" }}
  fromInputOpts={{ inputId: "fromInput" }}
  fromHelper={{ content: <>EX. 1901</>, id: "fromyearhelper" }}

  toLabelOpts={{ labelContent: <>To</>, id: "ToLabel" }}
  toInputOpts={{ inputId: "toInput" }}
  toHelper={{ content: <>EX. 2000</>, id: "toYearHelper" }}

  showError={true}
  error={{ content: <div>The end year should be the same year as or later than the start year</div>, id: "errorId" }}

/>
