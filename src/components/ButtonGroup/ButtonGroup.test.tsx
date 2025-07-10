import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import * as React from "react";
import renderer from "react-test-renderer";

import Button from "../Button/Button";
import ButtonGroup from "../ButtonGroup/ButtonGroup";

describe("ButtonGroup Accessibility", () => {
  it("passes axe accessibility test", async () => {
    const { container } = render(
      <ButtonGroup>
        <Button variant="secondary" id="btn-1">
          Button
        </Button>
        <Button id="btn-2">Submit</Button>
      </ButtonGroup>
    );
    expect(await axe(container)).toHaveNoViolations();
  });
});

describe("ButtonGroup", () => {
  it("should not render an id if none is passed", () => {
    render(
      <ButtonGroup>
        <Button id="btn-1" variant="secondary">
          Button
        </Button>
        <Button id="btn-2">Submit</Button>
        <p data-test="paragraph">This is not a button</p>
      </ButtonGroup>
    );

    const container = screen.getByTestId("ds-buttonGroup");
    expect(container).not.toHaveAttribute("id");
  });

  it("renders only Button components", () => {
    render(
      <ButtonGroup>
        <Button variant="secondary" id="btn-1">
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
        <Button variant="secondary" id="btn-1">
          Button
        </Button>
        <Button id="btn-2">Submit</Button>
      </ButtonGroup>
    );

    expect(screen.getAllByRole("button")[0]).not.toBeDisabled();
    expect(screen.getAllByRole("button")[1]).not.toBeDisabled();

    rerender(
      <ButtonGroup isDisabled>
        <Button variant="secondary" id="btn-1">
          Button
        </Button>
        <Button id="btn-2">Submit</Button>
      </ButtonGroup>
    );

    expect(screen.getAllByRole("button")[0]).toBeDisabled();
    expect(screen.getAllByRole("button")[1]).toBeDisabled();
  });

  it("passes a ref to the div wrapper element", () => {
    const ref = React.createRef<HTMLDivElement>();
    const { container } = render(
      <ButtonGroup isDisabled ref={ref}>
        <Button variant="secondary" id="btn-ref">
          Button
        </Button>
      </ButtonGroup>
    );

    expect(container.querySelector("div")).toBe(ref.current);
  });
});

describe("ButtonGroup Snapshot", () => {
  it("renders the UI snapshot correctly", () => {
    const basic = renderer
      .create(
        <ButtonGroup>
          <Button variant="secondary" id="btn-1">
            Button
          </Button>
          <Button id="btn-2">Submit</Button>
        </ButtonGroup>
      )
      .toJSON();
    const fullWidth = renderer
      .create(
        <ButtonGroup buttonWidth="full">
          <Button variant="secondary" id="btn-1">
            Button
          </Button>
          <Button id="btn-2">Submit</Button>
        </ButtonGroup>
      )
      .toJSON();
    const column = renderer
      .create(
        <ButtonGroup layout="column">
          <Button variant="secondary" id="btn-1">
            Button
          </Button>
          <Button id="btn-2">Submit</Button>
        </ButtonGroup>
      )
      .toJSON();
    const withChakraProps = renderer
      .create(
        <ButtonGroup p="s" color="ui.error.primary">
          <Button variant="secondary" id="btn-1">
            Button
          </Button>
          <Button id="btn-2">Submit</Button>
        </ButtonGroup>
      )
      .toJSON();
    const withOtherProps = renderer
      .create(
        <ButtonGroup data-testid="testid">
          <Button variant="secondary" id="btn-1">
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
