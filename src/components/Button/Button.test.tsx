import * as React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { axe } from "jest-axe";
import userEvent from "@testing-library/user-event";
import renderer from "react-test-renderer";

import Button from "./Button";
import Icon from "../Icons/Icon";
import { IconNames } from "../Icons/IconTypes";

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
});

describe("Button", () => {
  let onClick;
  let container;
  let rerender;

  beforeEach(() => {
    onClick = jest.fn();
    const utils = render(
      <Button id="button" onClick={onClick}>
        Submit
      </Button>
    );
    container = utils.container;
    rerender = utils.rerender;
  });

  it("calls the onClick", () => {
    expect(onClick).toHaveBeenCalledTimes(0);
    userEvent.click(screen.getByText("Submit"));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("optionally renders a component", () => {
    expect(screen.getByText("Submit")).toBeInTheDocument();
  });

  it("has 'button' class", () => {
    expect(container.querySelector(".button")).toBeInTheDocument();
  });

  it("optionally calls the onClick on mouseDown instead of on click", () => {
    expect(onClick).toHaveBeenCalledTimes(0);
    rerender(
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
});

describe("rendering content from its children prop", () => {
  const onClick = jest.fn();
  it("should render string children", () => {
    render(
      <Button id="button2" onClick={onClick}>
        Submit
      </Button>
    );
    expect(screen.getByText("Submit")).toBeInTheDocument();
  });

  it("should render element children", () => {
    const { container } = render(
      <Button id="button3" onClick={onClick}>
        <em>I'm a em element</em>
      </Button>
    );
    expect(screen.getByText(/a em element/i)).toBeInTheDocument();
    expect(container.querySelector("em")).toBeInTheDocument();
  });
});

describe("padding for icon only button", () => {
  it("button has proper padding for icon only button", () => {
    const onClick = jest.fn();
    const { container } = render(
      <Button id="button" onClick={onClick} type="button">
        <Icon
          name={IconNames.check}
          decorative={true}
          modifiers={["small", "icon-left"]}
        />
      </Button>
    );
    expect(container.querySelector(".button--icon-only")).toBeInTheDocument();
  });
});

describe("Button Snapshot", () => {
  it("Renders the UI snapshot correctly", () => {
    const tree = renderer
      .create(
        <Button id="button" onClick={jest.fn()}>
          Submit
        </Button>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
