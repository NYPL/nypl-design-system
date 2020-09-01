import { expect } from "chai";
import { stub } from "sinon";
import * as Enzyme from "enzyme";
import * as React from "react";

import Button from "../Button/Button";
import { ButtonTypes } from "../Button/ButtonTypes";
import Icon from "../Icons/Icon";
import { IconNames, IconRotationTypes } from "../Icons/IconTypes";
import Label from "../Label/Label";
import Pagination from "./Pagination";
import Select from "../Select/Select";

describe("Pagination Test", () => {
    let wrapper: Enzyme.ShallowWrapper<{}, {}>;
    let previousCallback;
    let nextCallback;
    let changeCallback;
    let blurCallback;

    beforeEach(() => {
        previousCallback = stub();
        nextCallback = stub();
        changeCallback = stub();
        blurCallback = stub();
    });

    it("Renders two buttons and a Select", () => {
        wrapper = Enzyme.shallow(
            <Pagination
                previousPage={
                    <Button
                        buttonType={ButtonTypes.Secondary}
                        onClick={previousCallback()}
                    >
                        <Icon
                            name={IconNames.arrow}
                            decorative={true}
                            iconRotation={IconRotationTypes.rotate90}
                        />
                        Previous
                    </Button>
                }
                nextPage={
                    <Button
                        buttonType={ButtonTypes.Secondary}
                        onClick={nextCallback()}
                    >
                        Next
                        <Icon
                            name={IconNames.arrow}
                            decorative={true}
                            iconRotation={IconRotationTypes.rotate270}
                        />
                    </Button>
                }
            >
                <Label htmlFor="select" id={"label"}>
                    Page
                </Label>
                <Select
                    name="optionalLabelSelect"
                    id={"select"}
                    isRequired={false}
                    ariaLabel="Select Label"
                    labelId={"label"}
                    onBlur={blurCallback()}
                    onChange={changeCallback()}
                >
                    <option aria-selected={true}>1 of 7</option>
                    <option aria-selected={false}>2 of 7</option>
                    <option aria-selected={false}>3 of 7</option>
                    <option aria-selected={false}>4 of 7</option>
                    <option aria-selected={false}>5 of 7</option>
                    <option aria-selected={false}>6 of 7</option>
                    <option aria-selected={false}>7 of 7</option>
                </Select>
            </Pagination>
        );
        expect(wrapper.find(Button)).to.have.lengthOf(2);
        expect(wrapper.find(Select)).to.have.lengthOf(1);
        expect(wrapper.find(Label)).to.have.lengthOf(1);
    });
});
