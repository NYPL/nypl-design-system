import * as React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import renderer from "react-test-renderer";

import Form, { FormRow, FormField } from "./Form";
// import { FormGaps } from "./FormTypes";
import TextInput from "../TextInput/TextInput";

describe("Form Accessibility", () => {
  it("passes axe accessibility test", async () => {
    const { container } = render(<Form id="form" />);
    expect(await axe(container)).toHaveNoViolations();
  });

  it("passes axe accessibility test for the full hierachy", async () => {
    const { container } = render(
      <Form id="form">
        <FormRow>
          <FormField>Form Field 1</FormField>
          <FormField>Form Field 2</FormField>
          <FormField>Form Field 3</FormField>
        </FormRow>
      </Form>
    );
    expect(await axe(container)).toHaveNoViolations();
  });
});

describe("Form Snapshot", () => {
  it("Renders the UI snapshot correctly", () => {
    const tree = renderer
      .create(
        <Form id="snapshot-form">
          <FormRow>
            <FormField>Form Field 1</FormField>
            <FormField>Form Field 2</FormField>
            <FormField>Form Field 3</FormField>
          </FormRow>
        </Form>
      )
      .toJSON();
    const withChakraProps = renderer
      .create(
        <Form id="chakra" p="20px" color="ui.error.primary">
          <FormRow>
            <FormField>Form Field 1</FormField>
            <FormField>Form Field 2</FormField>
            <FormField>Form Field 3</FormField>
          </FormRow>
        </Form>
      )
      .toJSON();
    const withOtherProps = renderer
      .create(
        <Form id="props" data-testid="props">
          <FormRow>
            <FormField>Form Field 1</FormField>
            <FormField>Form Field 2</FormField>
            <FormField>Form Field 3</FormField>
          </FormRow>
        </Form>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
    expect(withChakraProps).toMatchSnapshot();
    expect(withOtherProps).toMatchSnapshot();
  });
});

describe("Form", () => {
  it("Renders a <form> element", () => {
    render(<Form id="form" />);
    expect(screen.getByRole("form")).toBeInTheDocument();
  });

  it("Renders a <form> element with child FormRow element", () => {
    render(
      <Form id="form">
        <FormRow />
      </Form>
    );
    const form = screen.getByRole("form");
    const formRow = form.firstChild;
    expect(form).toBeInTheDocument();
    expect(formRow).toBeInTheDocument();
    expect(formRow).toHaveStyle({
      display: "grid",
    });
  });

  it("Renders a <form> element with child FormField element", () => {
    render(
      <Form id="form">
        <FormField />
      </Form>
    );
    const form = screen.getByRole("form");
    const formField = form.firstChild;
    expect(form).toBeInTheDocument();
    expect(formField).toBeInTheDocument();
    expect(formField).toHaveStyle({
      display: "grid",
    });
  });

  it("Renders a <form> element with FormRow, FormField and input elements properly nested", () => {
    render(
      <Form id="form">
        <FormRow>
          <FormField>
            <TextInput id="textInput" labelText="Input Field" />
          </FormField>
        </FormRow>
      </Form>
    );
    const form = screen.getByRole("form");
    const formRow = form.firstChild;
    const formField = formRow?.firstChild;
    const textInput = screen.getByRole("textbox");
    expect(form).toBeInTheDocument();
    expect(formRow).toBeInTheDocument();
    expect(formRow).toHaveStyle({
      display: "grid",
    });
    expect(formField).toBeInTheDocument();
    expect(formField).toHaveStyle({
      display: "grid",
    });
    expect(textInput).toBeInTheDocument();
  });

  it("Renders a <form> element with custom `action` and `method` attributes", () => {
    render(<Form id="form" action="/end/point" method="get" />);
    const form = screen.getByRole("form");
    expect(form).toBeInTheDocument();
    expect(form).toHaveAttribute("action", "/end/point");
    expect(form).toHaveAttribute("method", "get");
  });

  it("passes down the `Form`'s id down to its children", () => {
    const { container } = render(
      <Form id="formId">
        <FormRow>
          <FormField>
            <TextInput id="textInput" labelText="Input Field" />
          </FormField>
          <FormField>
            <TextInput id="textInput" labelText="Input Field" />
          </FormField>
        </FormRow>
        <FormRow>
          <FormField>
            <TextInput id="textInput" labelText="Input Field" />
          </FormField>
          <FormField>
            <TextInput id="textInput" labelText="Input Field" />
          </FormField>
        </FormRow>
      </Form>
    );

    expect(container.querySelector("#formId")).toBeInTheDocument();
    // The first `FormRow` adds "child0" to its id
    expect(container.querySelector("#formId-child0")).toBeInTheDocument();
    // The first `FormRow`'s first `FormField` adds "grandchild0" to its id
    expect(
      container.querySelector("#formId-child0-grandchild0")
    ).toBeInTheDocument();
    // The first `FormRow`'s second `FormField` adds "grandchild1" to its id
    expect(
      container.querySelector("#formId-child0-grandchild1")
    ).toBeInTheDocument();
    // The second `FormRow` adds "child1" to its id
    expect(container.querySelector("#formId-child1")).toBeInTheDocument();
    // The second `FormRow`'s first `FormField` adds "grandchild0" to its id
    expect(
      container.querySelector("#formId-child1-grandchild0")
    ).toBeInTheDocument();
    // The second `FormRow`'s second `FormField` adds "grandchild1" to its id
    expect(
      container.querySelector("#formId-child1-grandchild1")
    ).toBeInTheDocument();
  });

  it("logs a warning if a child of `FormRow` is not a `FormField`", () => {
    const warn = jest.spyOn(console, "warn");
    render(
      <Form id="form">
        <FormRow>
          <div>Not a FormField</div>
        </FormRow>
      </Form>
    );
    expect(warn).toHaveBeenCalledWith(
      "NYPL Reservoir FormRow: Children must be `FormField` components."
    );
  });

  it("calls the onSubmit function", () => {
    const onSubmit = jest.fn();
    render(
      <Form id="form" onSubmit={onSubmit}>
        <FormRow>
          <FormField>
            <TextInput id="textInput" labelText="Input Field" />
          </FormField>
        </FormRow>
      </Form>
    );
    const form = screen.getByRole("form");
    expect(onSubmit).toHaveBeenCalledTimes(0);
    fireEvent.submit(form);
    expect(onSubmit).toHaveBeenCalledTimes(1);
  });

  it("Logs a warning when there is no `id` passed", () => {
    const warn = jest.spyOn(console, "warn");
    render(
      // @ts-ignore: Typescript complains when a required prop is not passed, but
      // here we don't want to pass the required prop to make sure the warning appears.
      <Form>
        <FormRow>
          <FormField>
            <TextInput id="textInput" labelText="Input Field" />
          </FormField>
        </FormRow>
      </Form>
    );
    expect(warn).toHaveBeenCalledWith(
      "NYPL Reservoir Form: This component's required `id` prop was not passed."
    );
  });

  // TO DO: There's somethign weird about checking for the "grid-gap" style.
  // Other styles can be validated, but "grid-gap" is being ellusive.
  // it("Renders a <form> element with spacing variant applied", () => {
  //   render(
  //     <Form gap={FormGaps.ExtraSmall}>
  //       <FormRow />
  //     </Form>
  //   );
  //   const form = screen.getByRole("form");
  //   const formRow = form.firstChild;
  //   expect(form).toBeInTheDocument();
  //   expect(formRow).toHaveStyle({
  //     "grid-gap": "var(--nypl-space-xs)",
  //   });
  // });
});
