import * as React from "react";
import { render } from "@testing-library/react";
import { axe } from "jest-axe";
import renderer from "react-test-renderer";

import Form, { FormRow, FormField } from "./Form";
import { FormSpacing } from "./FormTypes";
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
  let container;
  it("Renders a <form> element", () => {
    const utils = render(<Form />);
    container = utils.container;

    expect(container.querySelector(".form")).toBeInTheDocument();
  });

  it("Renders a <form> element with child .form-row element", () => {
    const utils = render(
      <Form>
        <FormRow />
      </Form>
    );
    container = utils.container;

    expect(container.querySelector(".form")).toBeInTheDocument();
    expect(container.querySelector(".form-row")).toBeInTheDocument();
  });

  it("Renders a <form> element with child .form-field element", () => {
    const utils = render(
      <Form>
        <FormField />
      </Form>
    );
    container = utils.container;

    expect(container.querySelector(".form")).toBeInTheDocument();
    expect(container.querySelector(".form-field")).toBeInTheDocument();
  });

  it("Renders a <form> element with .form-row, .form-field and input elements properly nested", () => {
    const utils = render(
      <Form>
        <FormRow>
          <FormField>
            <TextInput labelText="Input Field" />
          </FormField>
        </FormRow>
      </Form>
    );
    container = utils.container;

    expect(container.querySelector(".form")).toBeInTheDocument();
    expect(container.querySelector(".form-row")).toBeInTheDocument();
    expect(container.querySelector(".form-field")).toBeInTheDocument();
    expect(container.querySelector(".textinput")).toBeInTheDocument();
  });

  it("Renders a <form> element with custom `action` and `method` attributes", () => {
    const utils = render(<Form action="/end/point" method="get" />);
    container = utils.container;

    expect(container.querySelector(".form")).toBeInTheDocument();
    expect(container.querySelector(".form")).toHaveAttribute(
      "action",
      "/end/point"
    );
    expect(container.querySelector(".form")).toHaveAttribute("method", "get");
  });

  it("Renders a <form> element with spacing variant applied", () => {
    const utils = render(<Form spacing={FormSpacing.ExtraSmall} />);
    container = utils.container;

    expect(container.querySelector(".form")).toBeInTheDocument();
    expect(
      container.querySelector(".form--spacing-extra-small")
    ).toBeInTheDocument();
  });
});
