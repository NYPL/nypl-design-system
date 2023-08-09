import {
  render,
  RenderResult,
  screen,
  fireEvent,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe } from "jest-axe";
import * as React from "react";
import renderer from "react-test-renderer";

import Button from "./Button";
import Icon from "../Icons/Icon";

describe("Button Accessibility", () => {
  it("passes axe accessibility test", async () => {
    const onClick = jest.fn();
    const { container } = render(
      <Button id="button" onClick={onClick}>
        Submit
      </Button>
    );
    expect(await axe(container)).toHaveNoViolations();
  });

  it("passes axe accessibility test for hidden text", async () => {
    const onClick = jest.fn();
    const { container } = render(
      <Button id="button" onClick={onClick} screenreaderOnlyText="hidden text">
        Submit
      </Button>
    );
    expect(await axe(container)).toHaveNoViolations();
  });
});

describe("Button", () => {
  let onClick: jest.MockedFunction<() => void>;
  let utils: RenderResult;

  beforeEach(() => {
    onClick = jest.fn();
    utils = render(
      <Button id="button" onClick={onClick}>
        Submit
      </Button>
    );
  });

  it("calls the onClick", () => {
    expect(onClick).toHaveBeenCalledTimes(0);
    userEvent.click(screen.getByText("Submit"));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("optionally calls the onClick on mouseDown instead of on click", () => {
    expect(onClick).toHaveBeenCalledTimes(0);
    utils.rerender(
      <Button id="button5" mouseDown={true}>
        Submit
      </Button>
    );
    userEvent.click(screen.getByText("Submit"));
    expect(onClick).toHaveBeenCalledTimes(0);
    fireEvent.mouseDown(screen.getByText("Submit"));
    // TODO:
    // expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("should render string children", () => {
    expect(screen.getByText("Submit")).toBeInTheDocument();
  });

  it("should render element children", () => {
    const { container } = render(
      <Button id="button3" onClick={onClick}>
        <em>I'm an em element</em>
      </Button>
    );
    expect(screen.getByText(/an em element/i)).toBeInTheDocument();
    expect(container.querySelector("em")).toBeInTheDocument();
  });

  it("button has proper child svg for the icon only button", () => {
    const onClick = jest.fn();
    const { container } = render(
      <Button id="button" onClick={onClick} type="button">
        <Icon align="left" name="check" size="small" />
      </Button>
    );
    expect(container.querySelector("button svg")).toBeInTheDocument();
  });

  it("logs a warning when there is no `id` passed", () => {
    const warn = jest.spyOn(console, "warn");
    // @ts-ignore: Typescript complains when a required prop is not passed, but
    // here we don't want to pass the required prop to make sure the warning appears.
    render(<Button>Submit</Button>);
    expect(warn).toHaveBeenCalledWith(
      "NYPL Reservoir Button: This component's required `id` prop was not passed."
    );
  });

  it("passes a ref to the button element", () => {
    const ref = React.createRef<HTMLButtonElement>();
    const { container } = render(
      <Button id="button-ref" onClick={onClick} ref={ref}>
        Ref
      </Button>
    );

    expect(container.querySelector("button")).toBe(ref.current);
  });
});

describe("Button Snapshot", () => {
  it("Renders the UI snapshot correctly", () => {
    const primary = renderer
      .create(
        <Button id="button" onClick={jest.fn()}>
          Primary
        </Button>
      )
      .toJSON();
    const disabled = renderer
      .create(
        <Button id="button" onClick={jest.fn()} isDisabled>
          Disabled
        </Button>
      )
      .toJSON();
    const secondary = renderer
      .create(
        <Button id="button" onClick={jest.fn()} buttonType="secondary">
          Seconday
        </Button>
      )
      .toJSON();
    const callout = renderer
      .create(
        <Button id="button" onClick={jest.fn()} buttonType="callout">
          Callout
        </Button>
      )
      .toJSON();
    const pill = renderer
      .create(
        <Button id="button" onClick={jest.fn()} buttonType="pill">
          Pill
        </Button>
      )
      .toJSON();
    const text = renderer
      .create(
        <Button id="button" onClick={jest.fn()} buttonType="text">
          Text
        </Button>
      )
      .toJSON();
    const noBrand = renderer
      .create(
        <Button id="button" onClick={jest.fn()} buttonType="noBrand">
          NoBrand
        </Button>
      )
      .toJSON();
    const withChakraProps = renderer
      .create(
        <Button
          id="button"
          onClick={jest.fn()}
          p="s"
          color="ui.error.primary"
        />
      )
      .toJSON();
    const withOtherProps = renderer
      .create(<Button id="button" onClick={jest.fn()} data-testid="testid" />)
      .toJSON();

    expect(primary).toMatchSnapshot();
    expect(disabled).toMatchSnapshot();
    expect(secondary).toMatchSnapshot();
    expect(callout).toMatchSnapshot();
    expect(pill).toMatchSnapshot();
    expect(text).toMatchSnapshot();
    expect(noBrand).toMatchSnapshot();
    expect(withChakraProps).toMatchSnapshot();
    expect(withOtherProps).toMatchSnapshot();
  });
});
