import * as React from "react";
import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import renderer from "react-test-renderer";

import Button from "../Button/Button";
import ButtonGroup from "../ButtonGroup/ButtonGroup";

describe("ButtonGroup Accessibility", () => {
  it("passes axe accessibility test", async () => {
    const { container } = render(
      <ButtonGroup>
        <Button buttonType="secondary" id="btn-1">
          Button
        </Button>
        <Button id="btn-2">Submit</Button>
      </ButtonGroup>
    );
    expect(await axe(container)).toHaveNoViolations();
  });
});

describe("ButtonGroup", () => {
  it("renders only Button components", () => {
    render(
      <ButtonGroup>
        <Button buttonType="secondary" id="btn-1">
          Button
        </Button>
        <Button id="btn-2">Submit</Button>
        <p data-test="paragraph">This is not a button</p>
      </ButtonGroup>
    );

    expect(screen.getAllByRole("button")).toHaveLength(2);
    expect(screen.queryByTestId("paragraph")).not.toBeInTheDocument();
  });

  it("sets all `Button` children as disabled if isDisabled is true", () => {
    const { rerender } = render(
      <ButtonGroup>
        <Button buttonType="secondary" id="btn-1">
          Button
        </Button>
        <Button id="btn-2">Submit</Button>
      </ButtonGroup>
    );

    expect(screen.getAllByRole("button")[0]).not.toBeDisabled();
    expect(screen.getAllByRole("button")[1]).not.toBeDisabled();

    rerender(
      <ButtonGroup isDisabled>
        <Button buttonType="secondary" id="btn-1">
          Button
        </Button>
        <Button id="btn-2">Submit</Button>
      </ButtonGroup>
    );

    expect(screen.getAllByRole("button")[0]).toBeDisabled();
    expect(screen.getAllByRole("button")[1]).toBeDisabled();
  });

  it("logs a warning when any element that is not a Button is passed ", () => {
    const warn = jest.spyOn(console, "warn");
    render(
      <ButtonGroup>
        <Button buttonType="secondary" id="btn-1">
          Button
        </Button>
        <Button id="btn-2">Submit</Button>
        <p data-test="paragraph">This is not a button</p>
      </ButtonGroup>
    );
    expect(warn).toHaveBeenCalledWith(
      "NYPL Reservoir ButtonGroup: Only Button components can be children of ButtonGroup."
    );
  });
});

describe("ButtonGroup Snapshot", () => {
  it("renders the UI snapshot correctly", () => {
    const basic = renderer
      .create(
        <ButtonGroup>
          <Button buttonType="secondary" id="btn-1">
            Button
          </Button>
          <Button id="btn-2">Submit</Button>
        </ButtonGroup>
      )
      .toJSON();
    const fullWidth = renderer
      .create(
        <ButtonGroup buttonWidth="full">
          <Button buttonType="secondary" id="btn-1">
            Button
          </Button>
          <Button id="btn-2">Submit</Button>
        </ButtonGroup>
      )
      .toJSON();
    const column = renderer
      .create(
        <ButtonGroup layout="column">
          <Button buttonType="secondary" id="btn-1">
            Button
          </Button>
          <Button id="btn-2">Submit</Button>
        </ButtonGroup>
      )
      .toJSON();
    const withChakraProps = renderer
      .create(
        <ButtonGroup p="s" color="ui.error.primary">
          <Button buttonType="secondary" id="btn-1">
            Button
          </Button>
          <Button id="btn-2">Submit</Button>
        </ButtonGroup>
      )
      .toJSON();
    const withOtherProps = renderer
      .create(
        <ButtonGroup data-testid="testid">
          <Button buttonType="secondary" id="btn-1">
            Button
          </Button>
          <Button id="btn-2">Submit</Button>
        </ButtonGroup>
      )
      .toJSON();

    expect(basic).toMatchSnapshot();
    expect(fullWidth).toMatchSnapshot();
    expect(column).toMatchSnapshot();
    expect(withChakraProps).toMatchSnapshot();
    expect(withOtherProps).toMatchSnapshot();
  });
});
