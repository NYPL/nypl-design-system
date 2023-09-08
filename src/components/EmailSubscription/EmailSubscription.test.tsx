import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe } from "jest-axe";
import * as React from "react";
import renderer from "react-test-renderer";

import NewsletterSignup from "../NewsletterSignup/NewsletterSignup";

describe("NewsletterSignup Accessibility", () => {
  it("passes axe accessibility when closed", async () => {
    const onSubmit = jest.fn();
    const { container } = render(
      <NewsletterSignup title="Help and Feeback" onSubmit={onSubmit} />
    );
    expect(await axe(container)).toHaveNoViolations();
  });

  it("passes axe accessibility when opened", async () => {
    const onSubmit = jest.fn();
    const { container } = render(
      <NewsletterSignup title="Help and Feeback" onSubmit={onSubmit} />
    );

    expect(screen.queryByText(/Comment/i)).not.toBeInTheDocument();

    screen.getByText("Help and Feeback").click();
    // Just to make sure the dialog is opened.
    expect(screen.getByText(/Comment/i)).toBeInTheDocument();
    expect(await axe(container)).toHaveNoViolations();
  });
});

describe("NewsletterSignup", () => {
  let onSubmit = jest.fn();

  it("renders a button component", () => {
    render(<NewsletterSignup title="Help and Feedback" onSubmit={onSubmit} />);

    expect(
      screen.getByRole("button", { name: "Help and Feedback" })
    ).toBeInTheDocument();
  });

  it("renders the basic content when opened", () => {
    render(<NewsletterSignup title="Help and Feedback" onSubmit={onSubmit} />);

    const button = screen.getByRole("button", { name: "Help and Feedback" });

    button.click();

    expect(screen.getByTestId("title")).toHaveTextContent("Help and Feedback");
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

  it("renders optional radio group and email field", () => {
    render(
      <NewsletterSignup
        onSubmit={onSubmit}
        showCategoryField
        showEmailField
        title="Help and Feedback"
      />
    );

    const button = screen.getByRole("button", { name: "Help and Feedback" });

    button.click();

    expect(
      screen.getByText(/what is your feedback about/i)
    ).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
  });

  it("sets the invalid state for the comment and email field", () => {
    render(
      <NewsletterSignup
        isInvalidComment
        isInvalidEmail
        onSubmit={onSubmit}
        showCategoryField
        showEmailField
        title="Help and Feedback"
      />
    );

    const button = screen.getByRole("button", { name: "Help and Feedback" });

    button.click();

    expect(screen.getByText(/please fill out this field/i)).toBeInTheDocument();
    expect(
      screen.getByText(/please enter a valid email address/i)
    ).toBeInTheDocument();
  });

  it("renders optional additional description text", () => {
    render(
      <NewsletterSignup
        descriptionText="Please share your question or feedback."
        title="Help and Feedback"
        onSubmit={onSubmit}
      />
    );

    const button = screen.getByRole("button", { name: "Help and Feedback" });

    button.click();

    expect(
      screen.getByText(/Please share your question or feedback/i)
    ).toBeInTheDocument();
  });

  it("renders optional notification text or JSX", () => {
    const { rerender } = render(
      <NewsletterSignup
        notificationText="Call Number: JFE 95-8555"
        title="Help and Feedback"
        onSubmit={onSubmit}
      />
    );

    const button = screen.getByRole("button", { name: "Help and Feedback" });

    button.click();

    expect(screen.getByText(/Call Number: JFE 95-8555/i)).toBeInTheDocument();

    rerender(
      <NewsletterSignup
        notificationText={<p data-testid="paragraph">JSX notification</p>}
        title="Help and Feedback"
        onSubmit={onSubmit}
      />
    );

    expect(screen.getByTestId("paragraph")).toHaveTextContent(
      /jsx notification/i
    );
  });

  it("renders the `confirmation` screen through the `view` prop", () => {
    render(
      <NewsletterSignup
        title="Help and Feedback"
        onSubmit={onSubmit}
        view="confirmation"
      />
    );

    const button = screen.getByRole("button", { name: "Help and Feedback" });

    button.click();

    expect(
      screen.getByText(/thank you for submitting your feedback/i)
    ).toBeInTheDocument();
    expect(
      screen.queryByText(
        /if you provided an email address and require a response/i
      )
    ).not.toBeInTheDocument();
  });

  it("renders the email `confirmation` message when showEmailField is true", () => {
    render(
      <NewsletterSignup
        onSubmit={onSubmit}
        showEmailField
        title="Help and Feedback"
        view="confirmation"
      />
    );

    const button = screen.getByRole("button", { name: "Help and Feedback" });

    button.click();

    expect(
      screen.getByText(
        /if you provided an email address and require a response/i
      )
    ).toBeInTheDocument();
  });

  it("renders the `error` screen through the `view` prop", () => {
    render(
      <NewsletterSignup
        title="Help and Feedback"
        onSubmit={onSubmit}
        view="error"
      />
    );

    const button = screen.getByRole("button", { name: "Help and Feedback" });

    button.click();

    expect(screen.getByText(/oops! something went wrong/i)).toBeInTheDocument();
  });

  it("submits the form and returns the submitted data", () => {
    let submittedValues;
    let onSubmit = (values) => {
      submittedValues = values;
    };
    render(
      <NewsletterSignup
        title="Help and Feedback"
        showCategoryField
        showEmailField
        onSubmit={onSubmit}
      />
    );

    const button = screen.getByRole("button", { name: "Help and Feedback" });

    button.click();

    // The first comment field is the radio button.
    const commentField = screen.getAllByLabelText(/comment/i)[1];
    const emailField = screen.getByLabelText(/email/i);
    const submit = screen.getByRole("button", { name: "Submit" });

    screen.getByText(/bug/i).click();
    userEvent.type(commentField, "This is a comment");
    userEvent.type(emailField, "email@email.com");

    submit.click();

    expect(submittedValues).toEqual({
      category: "bug",
      comment: "This is a comment",
      email: "email@email.com",
    });
  });

  it("adds hidden fields data to the submitted data", () => {
    const hiddenFields = {
      "hidden-field-1": "hidden-field-value-1",
      "hidden-field-2": "hidden-field-value-2",
    };
    let submittedValues;
    let onSubmit = (values) => {
      submittedValues = values;
    };
    render(
      <NewsletterSignup
        hiddenFields={hiddenFields}
        title="Help and Feedback"
        showCategoryField
        showEmailField
        onSubmit={onSubmit}
      />
    );

    const button = screen.getByRole("button", { name: "Help and Feedback" });

    button.click();

    // The first comment field is the radio button.
    const commentField = screen.getAllByLabelText(/comment/i)[1];
    const emailField = screen.getByLabelText(/email/i);
    const submit = screen.getByRole("button", { name: "Submit" });

    screen.getByText(/bug/i).click();
    userEvent.type(commentField, "This is a comment");
    userEvent.type(emailField, "email@email.com");

    submit.click();

    expect(submittedValues).toEqual({
      category: "bug",
      comment: "This is a comment",
      email: "email@email.com",
      "hidden-field-1": "hidden-field-value-1",
      "hidden-field-2": "hidden-field-value-2",
    });
  });

  it("transitions to the `form` screen from the `error` screen", () => {
    render(
      <NewsletterSignup
        title="Help and Feedback"
        onSubmit={onSubmit}
        view="error"
      />
    );

    // Open the dialog.
    screen.queryByRole("button", { name: "Help and Feedback" }).click();

    const button = screen.queryByRole("button", { name: "Try Again" });
    expect(
      screen.queryByText(/oops! something went wrong/i)
    ).toBeInTheDocument();

    button.click();

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
      .create(<NewsletterSignup title="Help and Feeback" onSubmit={onSubmit} />)
      .toJSON();

    expect(basic).toMatchSnapshot();
  });
});
