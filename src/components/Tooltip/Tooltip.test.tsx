import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import { axe } from "jest-axe";
import * as React from "react";
import { Button } from "../Button/Button";
import { Icon } from "../Icons/Icon";
import { Image } from "../Image/Image";
import { Tooltip, TooltipProps } from "./Tooltip";

const buttonLabel = "Hover me";
const tooltipContent =
  "General library orientation or a customized research lesson.";

const TooltipOnButton = (
  props: Omit<TooltipProps & { isDisabled?: boolean }, "children">
) => {
  const { isDisabled, ...tooltipProps } = props;
  return (
    <Tooltip {...tooltipProps}>
      <Button isDisabled={isDisabled || false} id="tooltip-button">
        {buttonLabel}
      </Button>
    </Tooltip>
  );
};

describe("Tooltip accessibility", () => {
  it("passes axe accessibility test with string content", async () => {
    render(<TooltipOnButton content={tooltipContent} />);
    fireEvent.pointerOver(screen.getByText(buttonLabel));
    const tooltip = await screen.findByRole("tooltip");
    expect(await axe(tooltip)).toHaveNoViolations();
  });

  it("passes axe accessibility test with Image content", async () => {
    render(
      <Tooltip
        content={
          <Image
            src="//loremflickr.com/300/300/new+york+public+library"
            alt=""
          />
        }
      >
        {buttonLabel}
      </Tooltip>
    );
    fireEvent.pointerOver(screen.getByText(buttonLabel));
    const tooltip = await screen.findByRole("tooltip");
    expect(await axe(tooltip)).toHaveNoViolations();
  });

  it("passes axe accessibility test with Icon content", async () => {
    render(
      <Tooltip
        content={
          <Icon
            decorative
            id="icon-id"
            name="search"
            size="xxlarge"
            color="ui.white"
          />
        }
      >
        {buttonLabel}
      </Tooltip>
    );
    fireEvent.pointerOver(screen.getByText(buttonLabel));
    const tooltip = await screen.findByRole("tooltip");
    expect(await axe(tooltip)).toHaveNoViolations();
  });
});

describe.skip("Tooltip", () => {
  it("should render on pointerOver and close on mouseleave", async () => {
    render(<TooltipOnButton content={tooltipContent} />);

    fireEvent.pointerOver(screen.getByText(buttonLabel));

    await screen.findByRole("tooltip");

    expect(screen.getByText(buttonLabel)).toBeInTheDocument();
    expect(screen.getByRole("tooltip")).toBeInTheDocument();

    fireEvent.mouseLeave(screen.getByText(buttonLabel));

    await waitFor(() =>
      expect(screen.queryByText(tooltipContent)).not.toBeInTheDocument()
    );
  });

  it("should render after 500ms", async () => {
    jest.useFakeTimers();

    render(<TooltipOnButton content={tooltipContent} />);

    fireEvent.pointerOver(screen.getByText(buttonLabel));

    act(() => {
      jest.advanceTimersByTime(200);
    });
    expect(screen.queryByText(tooltipContent)).not.toBeInTheDocument();

    act(() => {
      jest.advanceTimersByTime(500);
    });
    expect(screen.queryByText(tooltipContent)).toBeInTheDocument();

    fireEvent.mouseLeave(screen.getByText(buttonLabel));

    expect(screen.queryByText(tooltipContent)).not.toBeVisible();

    jest.useRealTimers();
  });

  it("should not render on pointerOver if isDisabled is true", async () => {
    jest.useFakeTimers();

    render(<TooltipOnButton isDisabled content={tooltipContent} />);

    fireEvent.pointerOver(screen.getByText(buttonLabel));

    act(() => {
      jest.advanceTimersByTime(500);
    });

    expect(screen.queryByText(tooltipContent)).not.toBeInTheDocument();

    jest.useRealTimers();
  });

  it("should render on pointerOver if isDisabled has a falsy value", async () => {
    render(<TooltipOnButton isDisabled={false} content={tooltipContent} />);

    fireEvent.pointerOver(screen.getByText(buttonLabel));

    await screen.findByRole("tooltip");

    expect(screen.getByText(tooltipContent)).toBeInTheDocument();
  });

  it("should render on pointerOver and closes on pressing 'esc'", async () => {
    render(<TooltipOnButton content={tooltipContent} />);

    fireEvent.pointerOver(screen.getByText(buttonLabel));

    await screen.findByRole("tooltip");

    expect(screen.getByText(buttonLabel)).toBeInTheDocument();
    expect(screen.getByRole("tooltip")).toBeInTheDocument();

    fireEvent.keyDown(screen.getByRole("tooltip"), { key: "Escape" });

    await waitFor(() =>
      expect(screen.queryByText(tooltipContent)).not.toBeInTheDocument()
    );
  });

  it("logs a warning if `content` is not a string, number, Icon, or Image", () => {
    const warn = jest.spyOn(console, "warn");
    render(
      <Tooltip content={<Button id="warn-button">Should warn</Button>}>
        Hover me
      </Tooltip>
    );

    expect(warn).toHaveBeenCalledWith(
      "NYPL Reservoir Tooltip: Pass in a string, number, DS Icon, or DS Image into the 'content' prop."
    );
  });
});
