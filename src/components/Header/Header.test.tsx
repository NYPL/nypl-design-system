import * as React from "react";
import Cookies from "js-cookie";
import { render, screen, waitFor, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe } from "jest-axe";
import renderer from "react-test-renderer";

import Header from "./Header";
import {
  mockErrorResponseData,
  mockExpiredResponseData,
  mockLoginCookie,
  mockResponseData,
} from "./authApiMockResponse";
import { refineryResponse } from "./components/SitewideAlertsMocks";

describe("Header Accessibility", () => {
  afterAll(() => {
    jest.clearAllMocks();
  });
  it("passes axe accessibility test", async () => {
    // Mock the fetch API call in `SitewideAlerts`.
    (global as any).fetch = jest.fn(() =>
      Promise.resolve({
        status: 200,
        json: () => Promise.resolve(refineryResponse),
      })
    ) as jest.Mock;

    const { container } = await waitFor(() => render(<Header />));
    expect(await axe(container)).toHaveNoViolations();
  });
});

// TODO: These tests do not currently test the mobile web view.
// We need to determine a way of doing this for all responsive
// components, and will add this in at a later date.
describe("Header", () => {
  beforeEach(async () => {
    // Mock the fetch API call in `SitewideAlerts`.
    (global as any).fetch = jest.fn(() =>
      Promise.resolve({
        status: 200,
        json: () => Promise.resolve(refineryResponse),
      })
    ) as jest.Mock;

    await waitFor(() => render(<Header />));
  });
  afterAll(() => {
    jest.clearAllMocks();
  });
  it("renders a skip navigation", () => {
    const skipNavigation = screen.getAllByRole("navigation")[0];
    const { getByRole } = within(skipNavigation);

    expect(skipNavigation).toBeInTheDocument();
    expect(skipNavigation).toHaveAttribute("aria-label", "Skip Navigation");
    expect(getByRole("list")).toBeInTheDocument();
  });
  it("renders a notification", () => {
    const notification = screen.getByRole("complementary");
    const { getByText } = within(notification);

    expect(notification).toBeInTheDocument();
    expect(getByText(/masks are encouraged/i)).toBeInTheDocument();
  });

  it("renders the NYPL logo", () => {
    const { container } = render(<Header />);

    expect(container.querySelectorAll("svg")[0]).toHaveAttribute(
      "title",
      "NYPL Header Logo"
    );
  });

  it("renders the upper links", () => {
    // Removes automatically added, unused Chakra toast elements.
    document.getElementById("chakra-toast-portal")?.remove();

    // The first list is the skip navigation.
    // The second list is the list of alerts in the `SitewideAlerts` component.
    // The third list is the upper navigation.
    const upperList = screen.getAllByRole("list")[2];
    const upperLinks = within(upperList).getAllByRole("listitem");

    expect(upperLinks.length).toEqual(6);
    expect(upperLinks[0]).toHaveTextContent(/log in/i);
    expect(upperLinks[5]).toHaveTextContent(/shop/i);
  });

  it("renders the lower links", () => {
    // Removes automatically added, unused Chakra toast elements.
    document.getElementById("chakra-toast-portal")?.remove();

    // The first list is the skip navigation.
    // The second list is the list of alerts in the `SitewideAlerts` component.
    // The third list is the upper navigation.
    // The fourth list is the lower navigation.
    const lowerList = screen.getAllByRole("list")[3];
    const lowerLinks = within(lowerList).getAllByRole("listitem");

    expect(lowerLinks.length).toEqual(8);
    expect(lowerLinks[0]).toHaveTextContent(/books/i);
    expect(lowerLinks[7]).toHaveTextContent(/search/i);
  });

  it("opens the login menu", () => {
    // Removes automatically added, unused Chakra toast elements.
    document.getElementById("chakra-toast-portal")?.remove();

    // The third list is the upper navigation links.
    let upperList = screen.getAllByRole("list")[2];
    let upperLinks = within(upperList).getAllByRole("listitem");

    expect(upperLinks.length).toEqual(6);

    const logInButton = within(upperLinks[0]).getByRole("button");
    expect(upperLinks[0]).toHaveTextContent(/log in/i);
    expect(upperLinks[1]).toHaveTextContent(/locations/i);

    userEvent.click(logInButton);

    upperList = screen.getAllByRole("list")[2];
    upperLinks = within(upperList).getAllByRole("listitem");

    // Login menu opens, revealing two additional list items.
    expect(upperLinks.length).toEqual(8);
    expect(upperLinks[0]).toHaveTextContent(/close/i);
    expect(upperLinks[1]).toHaveTextContent(/log into/i);
  });

  it("renders the horizontal rule", () => {
    expect(screen.getByRole("separator")).toBeInTheDocument();
  });

  it("renders the UI snapshot correctly", () => {
    const header = renderer.create(<Header />).toJSON();

    expect(header).toMatchSnapshot();
  });
});

describe("Patron API call succeeds", () => {
  const realGet = Cookies.get;
  beforeAll(async () => {
    Cookies.get = jest.fn().mockReturnValue(mockLoginCookie);
    // This is assuming that the sitewide alerts fetch call runs
    // before the patron information call. If the alerts call runs
    // after the patron information call, the wrong response will be
    // returned for each and this test will fail.

    // TODO: Fix the indeterministic fetch calls.
    (global as any).fetch = jest
      .fn()
      // Mock the fetch API call for sitewide alerts.
      .mockReturnValueOnce(
        Promise.resolve({
          status: 200,
          json: () => Promise.resolve(refineryResponse),
        })
      )
      // Mock the fetch API call for patron data (succeed).
      .mockReturnValueOnce(
        Promise.resolve({
          status: 200,
          json: () => Promise.resolve(mockResponseData),
        })
      );

    await waitFor(() => render(<Header />));
  });

  afterAll(() => {
    Cookies.get = realGet;
    jest.clearAllMocks();
  });

  it("displays the logged in view when call succeeds", async () => {
    document.getElementById("chakra-toast-portal")?.remove();

    expect(Cookies.get).toHaveBeenCalledWith("nyplIdentityPatron");

    // The third list is the upper navigation links.
    const upperList = await screen.getAllByRole("list")[2];
    const upperLinks = within(upperList).getAllByRole("listitem");
    const firstListElement = within(upperLinks[0]).getByRole("button");
    let greeting = screen.queryByText(/jane/i);
    let logoutButton = screen.queryByRole("link", { name: /log out/i });

    expect(greeting).not.toBeInTheDocument();
    expect(logoutButton).not.toBeInTheDocument();

    expect(firstListElement).toHaveTextContent(/account/i);

    userEvent.click(firstListElement);

    greeting = screen.queryByText(/jane/i);
    logoutButton = screen.queryByRole("link", { name: /log out/i });

    expect(greeting).toBeInTheDocument();
    expect(logoutButton).toBeInTheDocument();
  });
});

describe("Patron API call fails", () => {
  const realGet = Cookies.get;
  beforeAll(async () => {
    Cookies.get = jest.fn().mockReturnValue(mockLoginCookie);
    (global as any).fetch = jest
      .fn()
      // Mock the fetch API call for sitewide alerts.
      .mockReturnValueOnce(
        Promise.resolve({
          status: 200,
          json: () => Promise.resolve(refineryResponse),
        })
      )
      // Mock the fetch API call for patron data (fail).
      .mockReturnValueOnce(
        Promise.reject({
          status: 500,
          json: () => Promise.resolve(mockErrorResponseData),
        })
      );

    await waitFor(() => render(<Header />));
  });

  afterAll(() => {
    Cookies.get = realGet;
    jest.clearAllMocks();
  });

  it("logs warning and displays the logged out view if call fails", async () => {
    const warn = jest.spyOn(console, "warn");
    expect(warn).toHaveBeenCalledWith(
      "NYPL Reservoir Header: There was an error fetching NYPL patron data."
    );

    document.getElementById("chakra-toast-portal")?.remove();

    // If the call fails, the Header should render the logged out state.
    const upperList = await screen.getAllByRole("list")[2];
    const upperLinks = within(upperList).getAllByRole("listitem");
    const firstListElement = within(upperLinks[0]).getByRole("button");

    expect(firstListElement).toHaveTextContent(/log in/i);
  });
});

describe("Patron API returns wrong data", () => {
  const realGet = Cookies.get;
  beforeAll(async () => {
    Cookies.get = jest.fn().mockReturnValue(mockLoginCookie);

    (global as any).fetch = jest
      .fn()
      // Mock the fetch API call for sitewide alerts.
      .mockReturnValueOnce(
        Promise.resolve({
          status: 200,
          json: () => Promise.resolve(refineryResponse),
        })
      )
      // Mock the fetch API call for patron data (wrong data).
      .mockReturnValueOnce(
        Promise.resolve({
          status: 200,
          json: () => Promise.resolve({}),
        })
      );

    await waitFor(() => render(<Header />));
  });

  afterAll(() => {
    Cookies.get = realGet;
    jest.clearAllMocks();
  });

  it("displays the logged out view if wrong data is received", async () => {
    document.getElementById("chakra-toast-portal")?.remove();

    // Without the correct data, the Header should render the logged out state.
    const upperList = await screen.getAllByRole("list")[2];
    const upperLinks = within(upperList).getAllByRole("listitem");
    const firstListElement = within(upperLinks[0]).getByRole("button");

    expect(firstListElement).toHaveTextContent(/log in/i);
  });
});

describe("Patron API returns expired data, but refreshes the token successfully", () => {
  const realGet = Cookies.get;

  beforeAll(async () => {
    Cookies.get = jest.fn().mockReturnValue(mockLoginCookie);

    (global as any).fetch = jest
      .fn()
      // Mock the fetch API call for sitewide alerts.
      .mockReturnValueOnce(
        Promise.resolve({
          status: 200,
          json: () => Promise.resolve(refineryResponse),
        })
      )
      // Mock the fetch API call for patron data (token expired).
      .mockReturnValueOnce(
        Promise.resolve({
          status: 401,
          json: () => Promise.resolve(mockExpiredResponseData),
        })
      )
      // Mock the fetch API call to refresh accessToken (succeed)
      .mockReturnValueOnce(
        Promise.resolve({
          status: 200,
        })
      )
      // Mock the fetch API call for patron data (succeed).
      .mockReturnValueOnce(
        Promise.resolve({
          status: 200,
          json: () => Promise.resolve(mockResponseData),
        })
      );

    await waitFor(() => render(<Header />));
  });

  afterAll(() => {
    Cookies.get = realGet;
    jest.clearAllMocks();
  });

  it("displays logged in view if refresh is successful", async () => {
    document.getElementById("chakra-toast-portal")?.remove();

    // The third list is the upper navigation links.
    const upperList = await screen.getAllByRole("list")[2];
    const upperLinks = within(upperList).getAllByRole("listitem");
    const firstListElement = within(upperLinks[0]).getByRole("button");
    let greeting = screen.queryByText(/jane/i);
    let logoutButton = screen.queryByRole("link", { name: /log out/i });

    expect(greeting).not.toBeInTheDocument();
    expect(logoutButton).not.toBeInTheDocument();

    expect(firstListElement).toHaveTextContent(/account/i);

    userEvent.click(firstListElement);

    greeting = screen.queryByText(/jane/i);
    logoutButton = screen.queryByRole("link", { name: /log out/i });

    expect(greeting).toBeInTheDocument();
    expect(logoutButton).toBeInTheDocument();
  });
});

describe("Patron API returns expired data and cannot refresh the token successfully", () => {
  const realGet = Cookies.get;

  beforeAll(async () => {
    Cookies.get = jest.fn().mockReturnValue(mockLoginCookie);

    (global as any).fetch = jest
      .fn()
      // Mock the fetch API call for sitewide alerts.
      .mockReturnValueOnce(
        Promise.resolve({
          status: 200,
          json: () => Promise.resolve(refineryResponse),
        })
      )
      // Mock the fetch API call for patron data (token expired).
      .mockReturnValueOnce(
        Promise.resolve({
          status: 401,
          json: () => Promise.resolve(mockExpiredResponseData),
        })
      )
      // Mock the fetch API call to refresh accessToken (fail)
      .mockReturnValueOnce(
        Promise.resolve({
          status: 500,
        })
      );

    await waitFor(() => render(<Header />));
  });

  afterAll(() => {
    Cookies.get = realGet;
    jest.clearAllMocks();
  });

  it("displays logged out view if refresh is unsuccessful", async () => {
    document.getElementById("chakra-toast-portal")?.remove();

    // If the access token is expired, the Header should render the logged out state.
    const upperList = await screen.getAllByRole("list")[2];
    const upperLinks = within(upperList).getAllByRole("listitem");
    const firstListElement = within(upperLinks[0]).getByRole("button");

    expect(firstListElement).toHaveTextContent(/log in/i);
  });
});
