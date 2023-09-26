import { render, screen } from "@testing-library/react";
//import userEvent from "@testing-library/user-event";
import { axe } from "jest-axe";
import * as React from "react";
import renderer from "react-test-renderer";

import NewsletterSignup from "./NewsletterSignup";
import { sectionDataMap } from "../../helpers/types";

describe("NewsletterSignup Accessibility", () => {
  const onSubmit = jest.fn();
  it("Form state passes accessibility", async () => {
    const { container } = render(
      <NewsletterSignup
        title="Testing"
        onSubmit={onSubmit}
        formHelperText={"Form helper."}
      />
    );
    expect(await axe(container)).toHaveNoViolations();
  });

  it("Error state passes accessibility", async () => {
    const { container } = render(
      <NewsletterSignup title="Testing" onSubmit={onSubmit} view={"error"} />
    );
    expect(await axe(container)).toHaveNoViolations();
  });

  it("Confirmation state passes accessibility", async () => {
    const { container } = render(
      <NewsletterSignup
        title="Testing"
        onSubmit={onSubmit}
        view={"confirmation"}
      />
    );
    expect(await axe(container)).toHaveNoViolations();
  });

  it("Bad email state passes accessibility", async () => {
    const { container } = render(
      <NewsletterSignup
        title="Testing"
        onSubmit={onSubmit}
        view={"form"}
        isInvalidEmail={true}
        formHelperText={"That is not allowed."}
      />
    );
    expect(await axe(container)).toHaveNoViolations();
  });
});

describe("NewsletterSignup Unit Tests", () => {
  // If you want to see what's happening, insert below render()
  // screen.debug();
  let onSubmit = jest.fn();
  describe("Renders the Minimum Required Elements", () => {
    it("Renders the form", () => {
      render(<NewsletterSignup title="Testing" onSubmit={onSubmit} />);
      expect(screen.getByRole("form")).toBeInTheDocument();
    });
    it("Renders the input textbox", () => {
      render(<NewsletterSignup title="Testing" onSubmit={onSubmit} />);
      expect(screen.getByRole("textbox")).toBeInTheDocument();
    });
    it("Renders the button", () => {
      render(<NewsletterSignup title="Testing" onSubmit={onSubmit} />);
      expect(
        screen.getByRole("button", { name: "Submit" })
      ).toBeInTheDocument();
    });
    it("Renders the title", () => {
      render(<NewsletterSignup title="Testing" onSubmit={onSubmit} />);
      expect(screen.getByText(/Testing/i)).toBeInTheDocument();
    });
  }); // Close minimum elements tests

  describe("Renders the Optional descriptionText and formHelperText Values", () => {
    // Note: newsletterSignupType tests are covered in the snapshot tests below.
    const testNewsletterSignup = (
      <NewsletterSignup
        descriptionText="Do not send cash."
        formHelperText={"Just trying to help"}
        title="Testing"
        onSubmit={onSubmit}
      />
    );
    it("Renders the description", () => {
      render(testNewsletterSignup);
      expect(screen.getByText(/Do not send cash./i)).toBeInTheDocument();
    });

    it("Renders the helper text", () => {
      render(testNewsletterSignup);
      expect(screen.getByText(/Just trying to help/i)).toBeInTheDocument();
    });
  }); // Close optional text elements test

  describe("Renders the Feedback Views", () => {
    it("Renders the error view", () => {
      render(
        <NewsletterSignup view={"error"} title="Testing" onSubmit={onSubmit} />
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
          title="Testing"
          onSubmit={onSubmit}
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
          title="Testing"
          onSubmit={onSubmit}
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

  // @todo These will likely need to be rewritten under the new specs
  // describe("Behaviors on Button Click", () => {
  //   it("Disables the button when clicked", () => {
  //     render(<NewsletterSignup title="Testing" onSubmit={onSubmit} />);
  //     //screen.debug();
  //     const button = screen.getByRole("button", { name: "Submit" });
  //     expect(button).not.toHaveAttribute("disabled");
  //     button.click();
  //     //screen.debug();
  //     expect(button).toHaveAttribute("");
  //   });
  //
  //   it("Adds hidden fields data to the submitted data", () => {
  //     const hiddenFields = {
  //       "hidden-field-1": "hidden-field-value-1",
  //       "hidden-field-2": "hidden-field-value-2",
  //     };
  //     let submittedValues;
  //     let onSubmit = (values) => {
  //       submittedValues = values;
  //     };
  //     render(
  //       <NewsletterSignup
  //         hiddenFields={hiddenFields}
  //         title="Testing"
  //         onSubmit={onSubmit}
  //       />
  //     );
  //
  //     const emailField = screen.getByLabelText(/email/i);
  //     userEvent.type(emailField, "email@email.com");
  //
  //     const button = screen.getByRole("button", { name: "Submit" });
  //
  //     button.click();
  //
  //     expect(submittedValues).toEqual({
  //       email: "email@email.com",
  //       "hidden-field-1": "hidden-field-value-1",
  //       "hidden-field-2": "hidden-field-value-2",
  //     });
  //   });
  // }); // Close behaviors on button click
}); // Close unit tests.

describe("NewsletterSignup Snapshots", () => {
  const onSubmit = jest.fn();
  it("Renders the default form UI snapshot correctly", () => {
    const view = renderer
      .create(<NewsletterSignup title="Testing" onSubmit={onSubmit} />)
      .toJSON();
    expect(view).toMatchSnapshot();
  });

  it("Renders the form UI with formHelperText snapshot correctly", () => {
    const view = renderer
      .create(
        <NewsletterSignup
          title="Testing"
          onSubmit={onSubmit}
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
          title="Testing"
          onSubmit={onSubmit}
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
          title="Testing"
          onSubmit={onSubmit}
          isInvalidEmail={true}
        />
      )
      .toJSON();
    expect(view).toMatchSnapshot();
  });

  it("Renders the error UI snapshot correctly", () => {
    const view = renderer
      .create(
        <NewsletterSignup title="Testing" onSubmit={onSubmit} view={"error"} />
      )
      .toJSON();
    expect(view).toMatchSnapshot();
  });

  it("Renders the default confirmation UI snapshot correctly", () => {
    const view = renderer
      .create(
        <NewsletterSignup
          title="Testing"
          onSubmit={onSubmit}
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
          title="Testing"
          onSubmit={onSubmit}
          view={"confirmation"}
          confirmationText={"You did great!"}
        />
      )
      .toJSON();
    expect(view).toMatchSnapshot();
  });

  describe("Renders each color for each newsletterSignupType correctly", () => {
    // newsletterSignupType values are determined by the types contained in the sectionDataMap. So it is safe to use the map directly.
    sectionDataMap.map((section) => {
      it(
        "Renders " +
          section.type +
          " color band with " +
          section.colorVals.primary,
        () => {
          const view = renderer
            .create(
              <NewsletterSignup
                title="Testing"
                onSubmit={onSubmit}
                newsletterSignupType={section.type}
              />
            )
            .toJSON();
          expect(view).toMatchSnapshot();
        }
      );
    });
  }); // Close colors snapshots
}); // Close snapshots
