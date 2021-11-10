import * as React from "react";
import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import renderer from "react-test-renderer";

import Form, { FormRow, FormField } from "./Form";
// import { FormSpacing } from "./FormTypes";
import TextInput from "../TextInput/TextInput";

describe("Form Accessibility", () => {
  it("passes axe accessibility test", async () => {
    const { container } = render(<Form />);
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
    expect(tree).toMatchSnapshot();
  });
});

describe("Form", () => {
  it("Renders a <form> element", () => {
    render(<Form />);
    expect(screen.getByRole("form")).toBeInTheDocument();
  });

  it("Renders a <form> element with child FormRow element", () => {
    render(
      <Form>
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
      <Form>
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
      <Form>
        <FormRow>
          <FormField>
            <TextInput labelText="Input Field" />
          </FormField>
        </FormRow>
      </Form>
    );
    const form = screen.getByRole("form");
    const formRow = form.firstChild;
    const formField = formRow.firstChild;
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
    render(<Form action="/end/point" method="get" />);
    const form = screen.getByRole("form");
    expect(form).toBeInTheDocument();
    expect(form).toHaveAttribute("action", "/end/point");
    expect(form).toHaveAttribute("method", "get");
  });

  // TO DO: There's somethign weird about checking for the "grid-gap" style.
  // Other styles can be validated, but "grid-gap" is being ellusive.
  // it("Renders a <form> element with spacing variant applied", () => {
  //   render(
  //     <Form spacing={FormSpacing.ExtraSmall}>
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
