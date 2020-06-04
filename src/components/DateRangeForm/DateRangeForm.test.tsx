import * as Enzyme from "enzyme";
import * as React from "react";

import DateRangeForm from "./DateRangeForm";

describe("Date Range Form", () => {
    let container;
    let callback;
    before(() => {
        callback = jest.fn();
        container = Enzyme.mount(
            <DateRangeForm
                formLabel={<>Publication Year</>}
                fromLabelOpts={{ labelContent: <>From</>, id: "FromLabel" }}
                fromInputOpts={{ inputId: "fromInput" }}
                fromHelper={{
                    content: <>EX. 1901</>,
                    id: "fromyearhelper",
                    isError: false,
                }}
                toLabelOpts={{ labelContent: <>To</>, id: "ToLabel" }}
                toInputOpts={{ inputId: "toInput" }}
                toHelper={{
                    content: <>EX. 2000</>,
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
    });

    it("Renders two inputs", () => {
        expect(container.find("input")).toHaveLength(2);
    });
    it("renders two helpers", () => {
        expect(container.find("HelperErrorText")).toHaveLength(2);
    });
    it("Renders a submit button", () => {
        expect(container.find("#submitButtonId").exists()).toBe(true);
    });
});
