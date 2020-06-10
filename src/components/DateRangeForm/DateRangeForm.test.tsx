import { expect } from "chai";
import * as Enzyme from "enzyme";
import * as React from "react";
import * as Mocha from "mocha";
import { stub } from "sinon";

import DateRangeForm from "./DateRangeForm";

describe("Date Range Form", () => {
    let container;
    let callback;
    before(() => {
        callback = stub();
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
        expect(container.find("input")).to.have.length(2);
    });
    it("renders two helpers", () => {
        expect(container.find("HelperErrorText")).to.have.length(2);
    });
    it("Renders a submit button", () => {
        expect(container.find("#submitButtonId").exists()).to.equal(true);
    });
});
