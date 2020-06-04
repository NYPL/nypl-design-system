import * as React from "react";

import DateRangeForm from "./DateRangeForm";
import { action } from "@storybook/addon-actions";

export default {
    title: "DateRangeForm",
    component: DateRangeForm,
};

const callback: (
    event: React.MouseEvent | React.KeyboardEvent
) => void = action("clicked");
export const defaultState = () => (
    <DateRangeForm
        formLabel={<>Publication Year</>}
        fromLabelOpts={{ labelContent: <>From</>, id: "FromLabel" }}
        fromInputOpts={{ inputId: "fromInput" }}
        fromHelper={{
            content: <>E.x., 1901</>,
            id: "fromyearhelper",
            isError: false,
        }}
        toLabelOpts={{ labelContent: <>To</>, id: "ToLabel" }}
        toInputOpts={{ inputId: "toInput" }}
        toHelper={{
            content: <>E.x., 2000</>,
            id: "toYearHelper",
            isError: false,
        }}
        showError={false}
        error={{ content: <></>, id: "errorId", isError: true }}
        buttonOpts={{
            id: "submitButtonId",
            callback: callback,
            content: <>Submit</>,
        }}
    />
);

export const errorState = () => (
    <DateRangeForm
        formLabel={<>Publication Year</>}
        fromLabelOpts={{ labelContent: <>From</>, id: "FromLabel" }}
        fromInputOpts={{ inputId: "fromInput" }}
        fromHelper={{ content: <>E.x., 1901</>, id: "fromyearhelper" }}
        toLabelOpts={{ labelContent: <>To</>, id: "ToLabel" }}
        toInputOpts={{ inputId: "toInput" }}
        toHelper={{ content: <>E.x., 2000</>, id: "toYearHelper" }}
        showError={true}
        error={{
            content: (
                <div>
                    The end year should be the same year as or later than the
                    start year
                </div>
            ),
            id: "errorId",
        }}
        buttonOpts={{
            id: "submitButtonId",
            callback: callback,
            content: <>Submit</>,
        }}
    />
);

export const noButton = () => (
    <DateRangeForm
        formLabel={<>Publication Year</>}
        fromLabelOpts={{ labelContent: <>From</>, id: "FromLabel" }}
        fromInputOpts={{ inputId: "fromInput" }}
        fromHelper={{ content: <>E.x., 1901</>, id: "fromyearhelper" }}
        toLabelOpts={{ labelContent: <>To</>, id: "ToLabel" }}
        toInputOpts={{ inputId: "toInput" }}
        toHelper={{ content: <>E.x., 2000</>, id: "toYearHelper" }}
        showError={true}
        error={{
            content: (
                <div>
                    The end year should be the same year as or later than the
                    start year
                </div>
            ),
            id: "errorId",
        }}
    />
);
