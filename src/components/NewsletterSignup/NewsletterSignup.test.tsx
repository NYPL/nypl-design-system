import { render, screen } from "@testing-library/react";
//import userEvent from "@testing-library/user-event";
import { axe } from "jest-axe";
import * as React from "react";
import renderer from "react-test-renderer";
import NewsletterSignup from "./NewsletterSignup";
import { sectionDataMap } from "../../helpers/types";

// If you want to see what's happening, insert below render()
// screen.debug();

describe("NewsletterSignup Accessibility", () => {
  const onSubmit = jest.fn();
  const onChange = jest.fn();
  const valueEmail = "";
  it("Form state w/ all optional props (displayed and undisplayed) passes accessibility", async () => {
    const { container } = render(
      <NewsletterSignup
        className={"my-class"}
        id={"my-id"}
        title="Testing"
        formHelperText={"Form helper"}
        onSubmit={onSubmit}
        onChange={onChange}
        valueEmail={valueEmail}
      />
    );
    expect(await axe(container)).toHaveNoViolations();
  });

  it("Submitting state w/ all optional props (displayed and undisplayed) passes accessibility", async () => {
    const { container } = render(
      <NewsletterSignup
        className={"my-class"}
        id={"my-id"}
        title="Testing"
        formHelperText={"Form helper"}
        onSubmit={onSubmit}
        onChange={onChange}
        valueEmail={valueEmail}
        view={"submitting"}
      />
    );
    expect(await axe(container)).toHaveNoViolations();
  });

  it("Error state w/ all optional props (displayed and undisplayed) passes accessibility", async () => {
    const { container } = render(
      <NewsletterSignup
        className={"my-class"}
        id={"my-id"}
        title="Testing"
        formHelperText={"Form helper."}
        onSubmit={onSubmit}
        onChange={onChange}
        valueEmail={valueEmail}
        view={"error"}
      />
    );
    expect(await axe(container)).toHaveNoViolations();
  });

  it("Confirmation state w/ all optional props (displayed and undisplayed) passes accessibility", async () => {
    const { container } = render(
      <NewsletterSignup
        className={"my-class"}
        id={"my-id"}
        title="Testing"
        formHelperText={"Form helper"}
        onSubmit={onSubmit}
        onChange={onChange}
        valueEmail={valueEmail}
        view={"confirmation"}
      />
    );
    expect(await axe(container)).toHaveNoViolations();
  });

  it("Bad email state w/ all optional props (displayed and undisplayed) passes accessibility", async () => {
    const { container } = render(
      <NewsletterSignup
        className={"my-class"}
        id={"my-id"}
        title="Testing"
        formHelperText={"Form helper"}
        onSubmit={onSubmit}
        onChange={onChange}
        valueEmail={valueEmail}
        view={"form"}
        isInvalidEmail={true}
      />
    );
    expect(await axe(container)).toHaveNoViolations();
  });
});

describe("NewsletterSignup Unit Tests", () => {
  /** Notes
   *
   * 1. The newsletterSignupType tests are covered in the snapshot tests below.
   * 2. Because the functionality of the submit click is handled entirely by the consuming app, there seems to be no
   *    way to test that the component does what it should when the button is clicked.
   */

  const onSubmit = jest.fn();
  const onChange = jest.fn();
  const valueEmail = "";
  it("Renders the Minimum Required Elements for the Form", () => {
    render(
      <NewsletterSignup
        title="Testing"
        onSubmit={onSubmit}
        onChange={onChange}
        valueEmail={valueEmail}
      />
    );
    expect(screen.getByRole("form")).toBeInTheDocument();
    expect(screen.getByRole("textbox")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Submit" })).toBeInTheDocument();
    expect(screen.getByText(/Testing/i)).toBeInTheDocument();
    expect(screen.getByText(/Privacy Policy/i)).toBeInTheDocument();
  });

  it("Renders the Optional descriptionText and formHelperText Values for the Form", () => {
    const testNewsletterSignup = (
      <NewsletterSignup
        descriptionText="Do not send cash."
        formHelperText={"Just trying to help"}
        onSubmit={onSubmit}
        onChange={onChange}
        valueEmail={valueEmail}
      />
    );
    render(testNewsletterSignup);
    expect(screen.getByText(/Do not send cash./i)).toBeInTheDocument();
    expect(screen.getByText(/Just trying to help/i)).toBeInTheDocument();
  });

  describe("Renders the Feedback Views", () => {
    it("Renders the error view", () => {
      render(
        <NewsletterSignup
          view={"error"}
          onSubmit={onSubmit}
          onChange={onChange}
          valueEmail={valueEmail}
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
          view={"confirmation"}
          onSubmit={onSubmit}
          onChange={onChange}
          valueEmail={valueEmail}
          confirmationText={"Fantastic!"}
        />
      );
      expect(screen.getByText(/Fantastic/i)).toBeInTheDocument();
      expect(
        screen.getByTitle("actionCheckCircleFilled icon")
      ).toBeInTheDocument();
    });

    it("Renders the bad email view", () => {
      render(
        <NewsletterSignup
          view={"form"}
          isInvalidEmail={true}
          onSubmit={onSubmit}
          onChange={onChange}
          valueEmail={valueEmail}
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
          formHelperText={"You need help."}
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
          descriptionText={"Why not?"}
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
          view={"submitting"}
        />
      )
      .toJSON();
    expect(view).toMatchSnapshot();
  });

  it("Renders the error state snapshot correctly", () => {
    const view = renderer
      .create(
        <NewsletterSignup
          onSubmit={onSubmit}
          onChange={onChange}
          valueEmail={valueEmail}
          view={"error"}
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
          view={"confirmation"}
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
          view={"confirmation"}
          confirmationText={"You did great!"}
        />
      )
      .toJSON();
    expect(view).toMatchSnapshot();
  });

  describe("Renders each color for each newsletterSignupType correctly", () => {
    // The newsletterSignupType values are determined by the types contained in the sectionDataMap.
    // So it is safe to use the map directly.
    Object.keys(sectionDataMap).map((section) => {
      it(
        "Renders " +
          section +
          " color band with " +
          sectionDataMap[section].primary,
        () => {
          const view = renderer
            .create(
              <NewsletterSignup
                onSubmit={onSubmit}
                onChange={onChange}
                valueEmail={valueEmail}
                newsletterSignupType={section}
              />
            )
            .toJSON();
          expect(view).toMatchSnapshot();
        }
      );
    });
  }); // Close colors snapshots
}); // Close snapshots
