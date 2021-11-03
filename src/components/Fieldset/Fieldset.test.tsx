import * as React from "react";
import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import renderer from "react-test-renderer";

import Fieldset from "./Fieldset";

describe("Fieldset Accessibility", () => {
  it("passes axe accessibility", async () => {
    const { container } = render(
      <Fieldset legendText="Legend Text">
        <p>Some other fields</p>
      </Fieldset>
    );
    expect(await axe(container)).toHaveNoViolations();
  });

  it("passes axe accessibility with the legend hidden", async () => {
    const { container } = render(
      <Fieldset legendText="Legend Text" isLegendHidden>
        <p>Some other fields</p>
      </Fieldset>
    );
    expect(await axe(container)).toHaveNoViolations();
  });
});

describe("Fieldset", () => {
  it("renders text in a legend and fieldset along with its children", () => {
    render(
      <Fieldset legendText="Legend Text">
        <p>Some other fields</p>
      </Fieldset>
    );

    expect(screen.getByRole("group")).toBeInTheDocument();
    // `legend` has no HTML role
    expect(screen.getByText(/Legend Text/i)).toBeInTheDocument();
    expect(screen.getByText("Some other fields")).toBeInTheDocument();
  });

  it("renders 'Optional' text by default in the legend", () => {
    render(
      <Fieldset legendText="Legend Text">
        <p>Some other fields</p>
      </Fieldset>
    );

    expect(screen.getByText(/Optional/i)).toBeInTheDocument();
  });

  it("renders 'Required' text in the legend", () => {
    render(
      <Fieldset legendText="Legend Text" isRequired>
        <p>Some other fields</p>
      </Fieldset>
    );

    expect(screen.getByText(/Required/i)).toBeInTheDocument();
  });

  it("can hide the 'Required'/'Optional' text in the legend but still show the main text", () => {
    const { rerender } = render(
      <Fieldset legendText="Legend Text" isRequired>
        <p>Some other fields</p>
      </Fieldset>
    );

    expect(screen.getByText(/Required/i)).toBeInTheDocument();

    rerender(
      <Fieldset legendText="Legend Text" optReqFlag={false}>
        <p>Some other fields</p>
      </Fieldset>
    );

    expect(screen.getByText(/Legend Text/i)).toBeInTheDocument();
    expect(screen.queryByText(/Optional/i)).not.toBeInTheDocument();

    rerender(
      <Fieldset legendText="Legend Text" isRequired optReqFlag={false}>
        <p>Some other fields</p>
      </Fieldset>
    );

    expect(screen.getByText(/Legend Text/i)).toBeInTheDocument();
    expect(screen.queryByText(/Required/i)).not.toBeInTheDocument();
  });

  it("renders the UI snapshot correctly", () => {
    const basic = renderer
      .create(
        <Fieldset legendText="Legend Text">
          <p>Some other fields</p>
        </Fieldset>
      )
      .toJSON();
    const required = renderer
      .create(
        <Fieldset legendText="Legend Text" isRequired>
          <p>Some other fields</p>
        </Fieldset>
      )
      .toJSON();
    const hiddenHelperText = renderer
      .create(
        <Fieldset legendText="Legend Text" isRequired optReqFlag={false}>
          <p>Some other fields</p>
        </Fieldset>
      )
      .toJSON();
    const hiddenLegend = renderer
      .create(
        <Fieldset legendText="Legend Text" isLegendHidden>
          <p>Some other fields</p>
        </Fieldset>
      )
      .toJSON();

    expect(basic).toMatchSnapshot();
    expect(required).toMatchSnapshot();
    expect(hiddenHelperText).toMatchSnapshot();
    expect(hiddenLegend).toMatchSnapshot();
  });
});
