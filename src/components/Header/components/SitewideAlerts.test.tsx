import { render, screen, waitFor, within } from "@testing-library/react";
import { axe } from "jest-axe";
import * as React from "react";
import renderer from "react-test-renderer";

import SitewideAlerts from "./SitewideAlerts";
import { expiredAlertsReponse, refineryResponse } from "./SitewideAlertsMocks";

describe("SitewideAlerts Accessibility", () => {
  it("passes axe accessibility test", async () => {
    (global as any).fetch = jest.fn(() =>
      Promise.resolve({
        status: 200,
        json: () => Promise.resolve(refineryResponse),
      })
    ) as jest.Mock;

    const { container } = await waitFor(() => render(<SitewideAlerts />));
    expect(await axe(container)).toHaveNoViolations();
  });
});

describe("SitewideAlerts", () => {
  describe("Successful API request", () => {
    beforeEach(async () => {
      (global as any).fetch = jest.fn(() =>
        Promise.resolve({
          status: 200,
          json: () => Promise.resolve(refineryResponse),
        })
      ) as jest.Mock;

      await waitFor(() => render(<SitewideAlerts />));
    });

    it("renders a notification", () => {
      const notification = screen.getByRole("complementary");

      expect(notification).toHaveAttribute("aria-label", "Sitewide alerts");
      expect(notification).toHaveAttribute("data-type", "standard");
    });

    it("renders a list with text", () => {
      const notification = screen.getByRole("complementary");
      const { getByText, getAllByRole } = within(notification);
      const list = getAllByRole("list");

      expect(list.length).toBe(1);
      expect(getByText(/masks are encouraged/i)).toBeInTheDocument();
    });

    it("renders the UI snapshot correctly", () => {
      const sitewideAlerts = renderer.create(<SitewideAlerts />).toJSON();

      expect(sitewideAlerts).toMatchSnapshot();
    });
  });

  // Since alerts are expired, the component should not render.
  describe("Successful API request but expired alerts", () => {
    it("renders a notification", async () => {
      (global as any).fetch = jest.fn(() =>
        Promise.resolve({
          status: 200,
          json: () => Promise.resolve(expiredAlertsReponse),
        })
      ) as jest.Mock;
      await waitFor(() => render(<SitewideAlerts />));

      expect(screen.queryByRole("complementary")).not.toBeInTheDocument();
    });
  });

  // If there was an API request error, the component should not render.
  describe("Unsuccessful API request", () => {
    it("does not render HTML", async () => {
      const warn = jest.spyOn(console, "warn");
      (global as any).fetch = jest.fn(() =>
        Promise.reject(new Error("API request failed"))
      ) as jest.Mock;
      await waitFor(() => render(<SitewideAlerts />));

      expect(screen.queryByRole("complementary")).not.toBeInTheDocument();
      expect(warn).toHaveBeenCalledWith(
        "NYPL Reservoir SitewideAlerts: There was an error fetching NYPL sitewide alerts."
      );
    });
  });
});
