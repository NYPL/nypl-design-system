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

  it("Renders a <form> element with child .form-row element", () => {
    render(
      <Form>
        <FormRow />
      </Form>
    );
    expect(screen.getByRole("form")).toBeInTheDocument();
    expect(screen.getByRole("form").firstChild).toBeInTheDocument();
    expect(screen.getByRole("form").firstChild).toHaveStyle({
      display: "grid",
    });
  });

  it("Renders a <form> element with child .form-field element", () => {
    render(
      <Form>
        <FormField />
      </Form>
    );
    expect(screen.getByRole("form")).toBeInTheDocument();
    expect(screen.getByRole("form").firstChild).toBeInTheDocument();
    expect(screen.getByRole("form").firstChild).toHaveStyle({
      display: "grid",
    });
  });

  it("Renders a <form> element with .form-row, .form-field and input elements properly nested", () => {
    render(
      <Form>
        <FormRow>
          <FormField>
            <TextInput labelText="Input Field" />
          </FormField>
        </FormRow>
      </Form>
    );
    expect(screen.getByRole("form")).toBeInTheDocument();
    expect(screen.getByRole("form").firstChild).toBeInTheDocument();
    expect(screen.getByRole("form").firstChild).toHaveStyle({
      display: "grid",
    });
    expect(screen.getByRole("form").firstChild.firstChild).toBeInTheDocument();
    expect(screen.getByRole("form").firstChild.firstChild).toHaveStyle({
      display: "grid",
    });
    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });

  it("Renders a <form> element with custom `action` and `method` attributes", () => {
    render(<Form action="/end/point" method="get" />);
    expect(screen.getByRole("form")).toBeInTheDocument();
    expect(screen.getByRole("form")).toHaveAttribute("action", "/end/point");
    expect(screen.getByRole("form")).toHaveAttribute("method", "get");
  });

  // I could not get this to work properly.
  // Do you have any ideas on how to get this to work?
  // it("Renders a <form> element with spacing variant applied", () => {
  //   render(<Form spacing={FormSpacing.ExtraSmall} />);
  //   expect(screen.getByRole("form")).toBeInTheDocument();
  //   expect(screen.getByRole("form").firstChild).toHaveStyle({
  //     "grid-gap": "var(--chakra-space-xs)",
  //   });
  // });
});
