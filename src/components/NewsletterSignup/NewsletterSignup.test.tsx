import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe } from "jest-axe";
import renderer from "react-test-renderer";

import NewsletterSignup from "./NewsletterSignup";
import { sectionColorsDataMap } from "../../helpers/types";

// If you want to see what's happening, insert below render()
// screen.debug();

describe("NewsletterSignup Accessibility", () => {
  const onSubmit = jest.fn();
  const onChange = jest.fn();
  const valueEmail = "";
  it("Form state w/ all optional props (displayed and undisplayed) passes accessibility", async () => {
    const { container } = render(
      <NewsletterSignup
        className="my-class"
        id="my-id"
        formHelperText="Form helper"
        onSubmit={onSubmit}
        onChange={onChange}
        valueEmail={valueEmail}
        confirmationHeading="Thank you for signing up!"
        confirmationText="You can update your email subscription preferences at any time using the links at the bottom of the email."
      />
    );
    expect(await axe(container)).toHaveNoViolations();
  });

  it("Submitting state w/ all optional props (displayed and undisplayed) passes accessibility", async () => {
    const { container } = render(
      <NewsletterSignup
        className="my-class"
        id="my-id"
        formHelperText="Form helper"
        onSubmit={onSubmit}
        onChange={onChange}
        valueEmail={valueEmail}
        view="submitting"
        confirmationHeading="Thank you for signing up!"
        confirmationText="You can update your email subscription preferences at any time using the links at the bottom of the email."
      />
    );
    expect(await axe(container)).toHaveNoViolations();
  });

  it("Error state w/ all optional props (displayed and undisplayed) passes accessibility", async () => {
    const { container } = render(
      <NewsletterSignup
        className="my-class"
        id="my-id"
        formHelperText="Form helper."
        onSubmit={onSubmit}
        onChange={onChange}
        valueEmail={valueEmail}
        view="error"
        confirmationHeading="Thank you for signing up!"
        confirmationText="You can update your email subscription preferences at any time using the links at the bottom of the email."
      />
    );
    expect(await axe(container)).toHaveNoViolations();
  });

  it("Confirmation state w/ all optional props (displayed and undisplayed) passes accessibility", async () => {
    const { container } = render(
      <NewsletterSignup
        className="my-class"
        id="my-id"
        formHelperText="Form helper"
        onSubmit={onSubmit}
        onChange={onChange}
        valueEmail={valueEmail}
        view="confirmation"
        confirmationHeading="Thank you for signing up!"
        confirmationText="You can update your email subscription preferences at any time using the links at the bottom of the email."
      />
    );
    expect(await axe(container)).toHaveNoViolations();
  });

  it("Bad email state w/ all optional props (displayed and undisplayed) passes accessibility", async () => {
    const { container } = render(
      <NewsletterSignup
        className="my-class"
        id="my-id"
        formHelperText="Form helper"
        onSubmit={onSubmit}
        onChange={onChange}
        valueEmail={valueEmail}
        view="form"
        isInvalidEmail={true}
        confirmationHeading="Thank you for signing up!"
        confirmationText="You can update your email subscription preferences at any time using the links at the bottom of the email."
      />
    );
    expect(await axe(container)).toHaveNoViolations();
  });
});

describe("NewsletterSignup Unit Tests", () => {
  /** Notes
   * The newsletterSignupType tests are covered in the snapshot tests below.
   */

  const onSubmit = jest.fn();
  const onChange = jest.fn();
  const valueEmail = "";
  it("Renders the Minimum Required Elements for the Form", () => {
    render(
      <NewsletterSignup
        onSubmit={onSubmit}
        onChange={onChange}
        confirmationHeading="Thank you for signing up!"
        confirmationText="You can update your email subscription preferences at any time using the links at the bottom of the email."
      />
    );
    expect(screen.getByRole("form")).toBeInTheDocument();
    expect(screen.getByRole("textbox")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Submit" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 2 })).toBeInTheDocument();
    expect(screen.getByText(/Privacy Policy/i)).toBeInTheDocument();
  });

  it("Renders the Optional descriptionText and formHelperText String Values for the Form", () => {
    const testNewsletterSignup = (
      <NewsletterSignup
        descriptionText="Do not send cash."
        formHelperText="Just trying to help"
        onSubmit={onSubmit}
        onChange={onChange}
        valueEmail={valueEmail}
        confirmationHeading="Thank you for signing up!"
        confirmationText="You can update your email subscription preferences at any time using the links at the bottom of the email."
      />
    );
    render(testNewsletterSignup);
    expect(screen.getByText(/Do not send cash./i)).toBeInTheDocument();
    expect(screen.getByText(/Just trying to help/i)).toBeInTheDocument();
  });

  it("Renders the Optional descriptionText and formHelperText HTML Values for the Form", () => {
    const testNewsletterSignup = (
      <NewsletterSignup
        // This link is safe and fun - If you have a moment check it out ;)
        descriptionText={
          <div>
            Do not send <a href="https://chias.website/">cash</a>.
          </div>
        }
        formHelperText={
          <div data-testId="helper-text-container">
            Just <strong data-testId="emphasized">trying</strong> to help
          </div>
        }
        onSubmit={onSubmit}
        onChange={onChange}
        valueEmail={valueEmail}
        confirmationHeading="Thank you for signing up!"
        confirmationText="You can update your email subscription preferences at any time using the links at the bottom of the email."
      />
    );
    render(testNewsletterSignup);
    const ancestor = screen.getByTestId("helper-text-container");
    const descendant = screen.getByTestId("emphasized");
    expect(screen.getByRole("link", { name: "cash" })).toBeInTheDocument();
    expect(ancestor).toContainElement(descendant);
  });

  it("calls the onChange on user type event", () => {
    render(
      <NewsletterSignup
        onSubmit={onSubmit}
        onChange={onChange}
        confirmationHeading="Thank you for signing up!"
        confirmationText="You can update your email subscription preferences at any time using the links at the bottom of the email."
      />
    );

    expect(onChange).toHaveBeenCalledTimes(0);
    userEvent.type(screen.getByRole("textbox"), "t");
    expect(onChange).toHaveBeenCalledTimes(1);
    userEvent.type(screen.getByRole("textbox"), "est");
    expect(onChange).toHaveBeenCalledTimes(4);
    expect(screen.getByRole("form")).toHaveFormValues({ email: "test" });
  });

  it("calls the onSubmit on click submit button", async () => {
    let componentView: "form" | "confirmation" = "form";
    const onSubmit = jest.fn(() => {
      componentView = "confirmation";
    });
    const { rerender } = render(
      <NewsletterSignup
        onSubmit={onSubmit}
        onChange={onChange}
        view={componentView}
        confirmationHeading="Thank you for signing up!"
        confirmationText="You can update your email subscription preferences at any time using the links at the bottom of the email."
      />
    );

    expect(onSubmit).toHaveBeenCalledTimes(0);
    userEvent.type(screen.getByRole("textbox"), "test@email.com");
    userEvent.click(screen.getByRole("button", { name: "Submit" }));
    expect(onSubmit).toHaveBeenCalledTimes(1);
    rerender(
      <NewsletterSignup
        onSubmit={onSubmit}
        onChange={onChange}
        view={componentView}
        confirmationHeading="Thank you for signing up!"
        confirmationText="You can update your email subscription preferences at any time using the links at the bottom of the email."
      />
    );
    expect(screen.getByText("Thank you for signing up!")).toBeInTheDocument();
  });

  describe("Renders the Feedback Views", () => {
    it("Renders the error view", () => {
      render(
        <NewsletterSignup
          view="error"
          onSubmit={onSubmit}
          onChange={onChange}
          valueEmail={valueEmail}
          confirmationHeading="Thank you for signing up!"
          confirmationText="You can update your email subscription preferences at any time using the links at the bottom of the email."
        />
      );
      expect(
        screen.getByText(/Oops! Something went wrong./i)
      ).toBeInTheDocument();
      expect(screen.getByTitle("errorFilled icon")).toBeInTheDocument();
    });

    it("Renders the confirmation view", () => {
      render(
        <NewsletterSignup
          view="confirmation"
          onSubmit={onSubmit}
          onChange={onChange}
          valueEmail={valueEmail}
          confirmationHeading="Thank you for signing up!"
          confirmationText="You can update your email subscription preferences at any time using the links at the bottom of the email."
        />
      );
      expect(
        screen.getByText(/Thank you for signing up!/i)
      ).toBeInTheDocument();
      expect(
        screen.getByTitle("actionCheckCircleFilled icon")
      ).toBeInTheDocument();
    });

    it("Renders the bad email view", () => {
      render(
        <NewsletterSignup
          view="form"
          isInvalidEmail={true}
          onSubmit={onSubmit}
          onChange={onChange}
          valueEmail={valueEmail}
          confirmationHeading="Thank you for signing up!"
          confirmationText="You can update your email subscription preferences at any time using the links at the bottom of the email."
        />
      );
      expect(
        screen.getByText(/Please enter a valid email address./i)
      ).toBeInTheDocument();
      expect(screen.getByRole("form")).toBeInTheDocument();
      expect(screen.getByRole("textbox")).toBeInTheDocument();
      expect(screen.getByRole("button")).toBeInTheDocument();
    });
  }); // Close feedback tests
}); // Close unit tests.

describe("NewsletterSignup Snapshots", () => {
  const onSubmit = jest.fn();
  const onChange = jest.fn();
  const valueEmail = "";
  it("Renders the default form UI snapshot correctly", () => {
    const view = renderer
      .create(
        <NewsletterSignup
          onSubmit={onSubmit}
          onChange={onChange}
          valueEmail={valueEmail}
          confirmationHeading="Thank you for signing up!"
          confirmationText="You can update your email subscription preferences at any time using the links at the bottom of the email."
        />
      )
      .toJSON();
    expect(view).toMatchSnapshot();
  });

  it("Renders the form UI with formHelperText snapshot correctly", () => {
    const view = renderer
      .create(
        <NewsletterSignup
          onSubmit={onSubmit}
          onChange={onChange}
          valueEmail={valueEmail}
          formHelperText="You need help."
          confirmationHeading="Thank you for signing up!"
          confirmationText="You can update your email subscription preferences at any time using the links at the bottom of the email."
        />
      )
      .toJSON();
    expect(view).toMatchSnapshot();
  });

  it("Renders the form UI with description snapshot correctly", () => {
    const view = renderer
      .create(
        <NewsletterSignup
          onSubmit={onSubmit}
          onChange={onChange}
          valueEmail={valueEmail}
          descriptionText="Why not?"
          confirmationHeading="Thank you for signing up!"
          confirmationText="You can update your email subscription preferences at any time using the links at the bottom of the email."
        />
      )
      .toJSON();
    expect(view).toMatchSnapshot();
  });

  it("Renders the bad email UI snapshot correctly", () => {
    const view = renderer
      .create(
        <NewsletterSignup
          onSubmit={onSubmit}
          onChange={onChange}
          valueEmail={valueEmail}
          isInvalidEmail={true}
          confirmationHeading="Thank you for signing up!"
          confirmationText="You can update your email subscription preferences at any time using the links at the bottom of the email."
        />
      )
      .toJSON();
    expect(view).toMatchSnapshot();
  });

  it("Renders the submitting state snapshot correctly", () => {
    const view = renderer
      .create(
        <NewsletterSignup
          onSubmit={onSubmit}
          onChange={onChange}
          valueEmail={valueEmail}
          view="submitting"
          confirmationHeading="Thank you for signing up!"
          confirmationText="You can update your email subscription preferences at any time using the links at the bottom of the email."
        />
      )
      .toJSON();
    expect(view).toMatchSnapshot();
  });

  it("Renders the default error state snapshot correctly", () => {
    const view = renderer
      .create(
        <NewsletterSignup
          onSubmit={onSubmit}
          onChange={onChange}
          valueEmail={valueEmail}
          view="error"
          confirmationHeading="Thank you for signing up!"
          confirmationText="You can update your email subscription preferences at any time using the links at the bottom of the email."
        />
      )
      .toJSON();
    expect(view).toMatchSnapshot();
  });

  it("Renders the custom error state snapshot correctly", () => {
    const view = renderer
      .create(
        <NewsletterSignup
          onSubmit={onSubmit}
          onChange={onChange}
          valueEmail={valueEmail}
          view="error"
          confirmationHeading="Thank you for signing up!"
          confirmationText="You can update your email subscription preferences at any time using the links at the bottom of the email."
          errorHeading="Oh no! Something went wrong."
          errorText={
            <div>
              If the error persists,
              <a href="mailto:enews@nypl.org?subject=Please re-activate my e-mail address">
                contact our e-mail team
              </a>
            </div>
          }
        />
      )
      .toJSON();
    expect(view).toMatchSnapshot();
  });

  it("Renders the default confirmation state snapshot correctly", () => {
    const view = renderer
      .create(
        <NewsletterSignup
          onSubmit={onSubmit}
          onChange={onChange}
          valueEmail={valueEmail}
          view="confirmation"
          confirmationHeading="Thank you for signing up!"
          confirmationText="You can update your email subscription preferences at any time using the links at the bottom of the email."
        />
      )
      .toJSON();
    expect(view).toMatchSnapshot();
  });

  it("Renders the confirmation UI with confirmationText snapshot correctly", () => {
    const view = renderer
      .create(
        <NewsletterSignup
          onSubmit={onSubmit}
          onChange={onChange}
          valueEmail={valueEmail}
          view="confirmation"
          confirmationHeading="Thank you for signing up!"
          confirmationText="You can update your email subscription preferences at any time using the links at the bottom of the email."
        />
      )
      .toJSON();
    expect(view).toMatchSnapshot();
  });

  describe("Renders each color for each newsletterSignupType correctly", () => {
    // The newsletterSignupType values are determined by the types contained in
    // the sectionColorsDataMap. So it is safe to use the map directly.
    Object.keys(sectionColorsDataMap).map((section) => {
      it(
        "Renders " +
          section +
          " color band with " +
          sectionColorsDataMap[section].primary,
        () => {
          const view = renderer
            .create(
              <NewsletterSignup
                onSubmit={onSubmit}
                onChange={onChange}
                valueEmail={valueEmail}
                newsletterSignupType={section}
                confirmationHeading="Thank you for signing up!"
                confirmationText="You can update your email subscription preferences at any time using the links at the bottom of the email."
              />
            )
            .toJSON();
          expect(view).toMatchSnapshot();
        }
      );
    });
  }); // Close colors snapshots
}); // Close snapshots
