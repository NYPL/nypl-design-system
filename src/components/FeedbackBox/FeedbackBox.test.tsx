import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe } from "jest-axe";
import * as React from "react";
import renderer from "react-test-renderer";

import FeedbackBox from "./FeedbackBox";

jest.mock("../../hooks/useSafeId", () => ({
  ...jest.requireActual("../../hooks/useSafeId"),
  useSafeId: jest.fn((id) => id || "test-id"),
}));

describe("FeedbackBox Accessibility", () => {
  it("passes axe accessibility when closed", async () => {
    const onSubmit = jest.fn();
    const { container } = render(
      <FeedbackBox title="Help and Feeback" onSubmit={onSubmit} />
    );
    expect(await axe(container)).toHaveNoViolations();
  });

  it("passes axe accessibility when opened", async () => {
    const onSubmit = jest.fn();
    const { container } = render(
      <FeedbackBox title="Help and Feeback" onSubmit={onSubmit} />
    );

    expect(screen.queryByText(/Comment/i)).not.toBeInTheDocument();

    await userEvent.click(screen.getByText("Help and Feeback"));
    // Just to make sure the dialog is opened.
    expect(screen.getByText(/Comment/i)).toBeInTheDocument();
    expect(await axe(container)).toHaveNoViolations();
  });
});

describe("FeedbackBox", () => {
  let onSubmit = jest.fn();

  it("should add an id to the component even if none is passed", () => {
    render(<FeedbackBox onSubmit={onSubmit} title="Help and feedback" />);

    const container = screen.getByTestId("ds-feedbackBox");
    expect(container).toHaveAttribute("id", "test-id");
  });

  it("renders a button component", () => {
    render(<FeedbackBox title="Help and feedback" onSubmit={onSubmit} />);

    expect(
      screen.getByRole("button", { name: "Help and feedback" })
    ).toBeInTheDocument();
  });

  it("renders the basic content when opened", async () => {
    render(<FeedbackBox title="Help and feedback" onSubmit={onSubmit} />);

    const button = screen.getByRole("button", { name: "Help and feedback" });

    await userEvent.click(button);

    expect(screen.getByTestId("title")).toHaveTextContent("Help and feedback");
    expect(
      screen.getByRole("textbox", { name: /comment/i })
    ).toBeInTheDocument();
    expect(screen.getByText(/500 characters remaining/i)).toBeInTheDocument();
    expect(screen.getByRole("link")).toHaveTextContent("Privacy Policy");
    // Does not render the radio group or email fields:
    expect(
      screen.queryByText(/What is your feedback about/i)
    ).not.toBeInTheDocument();
    expect(screen.queryByLabelText(/email/i)).not.toBeInTheDocument();

    expect(screen.getByRole("button", { name: "Submit" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Cancel" })).toBeInTheDocument();
  });

  it("renders optional radio group and email field", async () => {
    render(
      <FeedbackBox
        onSubmit={onSubmit}
        showCategoryField
        showEmailField
        title="Help and feedback"
      />
    );

    const button = screen.getByRole("button", { name: "Help and feedback" });

    await userEvent.click(button);

    expect(
      screen.getByText(/what is your feedback about/i)
    ).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
  });

  it("sets the invalid state for the comment and email field", async () => {
    render(
      <FeedbackBox
        isInvalidComment
        isInvalidEmail
        onSubmit={onSubmit}
        showCategoryField
        showEmailField
        title="Help and feedback"
      />
    );

    const button = screen.getByRole("button", { name: "Help and feedback" });

    await userEvent.click(button);

    expect(screen.getByText(/please fill out this field/i)).toBeInTheDocument();
    expect(
      screen.getByText(/please enter a valid email address/i)
    ).toBeInTheDocument();
  });

  it("sets the invalid state for the comment field if it is empty when submitted", async () => {
    render(
      <FeedbackBox
        onSubmit={onSubmit}
        showCategoryField
        showEmailField
        title="Help and feedback"
      />
    );

    const button = screen.getByRole("button", { name: "Help and feedback" });

    await userEvent.click(button);

    const submit = screen.getByRole("button", { name: "Submit" });
    await userEvent.click(submit);

    expect(screen.getByText(/please fill out this field/i)).toBeInTheDocument();
  });

  it("renders optional additional description text", async () => {
    render(
      <FeedbackBox
        descriptionText="Please share your question or feedback."
        title="Help and feedback"
        onSubmit={onSubmit}
      />
    );

    const button = screen.getByRole("button", { name: "Help and feedback" });

    await userEvent.click(button);

    expect(
      screen.getByText(/Please share your question or feedback/i)
    ).toBeInTheDocument();
  });

  it("renders optional notification text or JSX", async () => {
    const { rerender } = render(
      <FeedbackBox
        notificationText="Call Number: JFE 95-8555"
        title="Help and feedback"
        onSubmit={onSubmit}
      />
    );

    const button = screen.getByRole("button", { name: "Help and feedback" });

    await userEvent.click(button);

    expect(screen.getByText(/Call Number: JFE 95-8555/i)).toBeInTheDocument();

    rerender(
      <FeedbackBox
        notificationText={<p data-testid="paragraph">JSX notification</p>}
        title="Help and feedback"
        onSubmit={onSubmit}
      />
    );

    expect(screen.getByTestId("paragraph")).toHaveTextContent(
      /jsx notification/i
    );
  });

  it("renders the `confirmation` screen through the `view` prop", async () => {
    render(
      <FeedbackBox
        title="Help and feedback"
        onSubmit={onSubmit}
        view="confirmation"
      />
    );

    const button = screen.getByRole("button", { name: "Help and feedback" });

    await userEvent.click(button);

    expect(
      screen.getByText(/thank you for submitting your feedback/i)
    ).toBeInTheDocument();
    expect(
      screen.queryByText(/if you asked a question and provided an email/i)
    ).not.toBeInTheDocument();
  });

  it("renders the email `confirmation` message when showEmailField is true", async () => {
    render(
      <FeedbackBox
        onSubmit={onSubmit}
        showEmailField
        title="Help and feedback"
        view="confirmation"
      />
    );

    const button = screen.getByRole("button", { name: "Help and feedback" });

    await userEvent.click(button);

    expect(
      screen.getByText(/if you asked a question and provided an email/i)
    ).toBeInTheDocument();
  });

  it("renders the `error` screen through the `view` prop", async () => {
    render(
      <FeedbackBox title="Help and feedback" onSubmit={onSubmit} view="error" />
    );

    const button = screen.getByRole("button", { name: "Help and feedback" });

    await userEvent.click(button);

    expect(screen.getByText(/oops! something went wrong/i)).toBeInTheDocument();
  });

  it("submits the form and returns the submitted data", async () => {
    let submittedValues;
    let onSubmit = (values) => {
      submittedValues = values;
    };
    render(
      <FeedbackBox
        title="Help and feedback"
        showCategoryField
        showEmailField
        onSubmit={onSubmit}
      />
    );

    const button = screen.getByRole("button", { name: "Help and feedback" });

    await userEvent.click(button);

    // The first comment field is the radio button.
    const commentField = screen.getAllByLabelText(/comment/i)[1];
    const emailField = screen.getByLabelText(/email/i);
    const submit = screen.getByRole("button", { name: "Submit" });

    await userEvent.click(screen.getByText(/bug/i));
    await userEvent.type(commentField, "This is a comment");
    await userEvent.type(emailField, "email@email.com");

    await userEvent.click(submit);

    expect(submittedValues).toEqual({
      category: "bug",
      comment: "This is a comment",
      email: "email@email.com",
    });
  });

  it("adds hidden fields data to the submitted data", async () => {
    const hiddenFields = {
      "hidden-field-1": "hidden-field-value-1",
      "hidden-field-2": "hidden-field-value-2",
    };
    let submittedValues;
    let onSubmit = (values) => {
      submittedValues = values;
    };
    render(
      <FeedbackBox
        hiddenFields={hiddenFields}
        title="Help and feedback"
        showCategoryField
        showEmailField
        onSubmit={onSubmit}
      />
    );

    const button = screen.getByRole("button", { name: "Help and feedback" });

    await userEvent.click(button);

    // The first comment field is the radio button.
    const commentField = screen.getAllByLabelText(/comment/i)[1];
    const emailField = screen.getByLabelText(/email/i);
    const submit = screen.getByRole("button", { name: "Submit" });

    await userEvent.click(screen.getByText(/bug/i));
    await userEvent.type(commentField, "This is a comment");
    await userEvent.type(emailField, "email@email.com");

    await userEvent.click(submit);

    expect(submittedValues).toEqual({
      category: "bug",
      comment: "This is a comment",
      email: "email@email.com",
      "hidden-field-1": "hidden-field-value-1",
      "hidden-field-2": "hidden-field-value-2",
    });
  });

  it("transitions to the `form` screen from the `error` screen", async () => {
    render(
      <FeedbackBox title="Help and feedback" onSubmit={onSubmit} view="error" />
    );

    // Open the dialog.
    await userEvent.click(screen.queryByRole("button", { name: "Help and feedback" }));

    const button = screen.queryByRole("button", { name: "Try again" });
    expect(
      screen.queryByText(/oops! something went wrong/i)
    ).toBeInTheDocument();

    await userEvent.click(button);

    // The `error` screen should no longer display.
    expect(
      screen.queryByText(/oops! something went wrong/i)
    ).not.toBeInTheDocument();
    expect(button).not.toBeInTheDocument();

    // We are back at the `form` screen.
    expect(
      screen.getByRole("textbox", { name: /comment/i })
    ).toBeInTheDocument();
    expect(screen.getByText(/500 characters remaining/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Submit" })).toBeInTheDocument();
  });

  it("renders the UI snapshot correctly", () => {
    const basic = renderer
      .create(<FeedbackBox title="Help and Feeback" onSubmit={onSubmit} />)
      .toJSON();

    expect(basic).toMatchSnapshot();
  });
});
