import * as React from "react";
import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import userEvent from "@testing-library/user-event";

import Pagination from "./Pagination";

describe("Pagination Accessibility", () => {
  it("passes axe accessibility test", async () => {
    const getPageHref = (page: number) => `page=${page}`;
    const { container } = render(
      <Pagination pageCount={20} currentPage={6} getPageHref={getPageHref} />
    );
    expect(await axe(container)).toHaveNoViolations();
  });
});

describe("Pagination with getPageHref", () => {
  const getPageHref = (page: number) => `page=${page}`;

  it("Renders a nav element with items and links", () => {
    const { container } = render(
      <Pagination pageCount={20} currentPage={6} getPageHref={getPageHref} />
    );

    expect(screen.getByRole("navigation")).toBeInTheDocument();
    expect(container.querySelector(".pagination__list")).toBeInTheDocument();
    // Previous/Next buttons + truncated item list = 11 total items
    expect(screen.getAllByRole("listitem")).toHaveLength(11);
    // Each element links to anotherpage.
    // Each link has a `role="button"` attribute.
    const links = screen.getAllByRole("button");

    // Pagination should show
    // Previous 1 ... 4 5 6 7 8 ... 20 Next
    expect(links).toHaveLength(9);
    // Previous Page
    expect(links[0]).toHaveAttribute("href", "page=5");
    expect(links[1]).toHaveAttribute("href", "page=1");
    expect(links[2]).toHaveAttribute("href", "page=4");
    expect(links[3]).toHaveAttribute("href", "page=5");
    expect(links[4]).toHaveAttribute("href", "page=6");
    expect(links[5]).toHaveAttribute("href", "page=7");
    expect(links[6]).toHaveAttribute("href", "page=8");
    expect(links[7]).toHaveAttribute("href", "page=20");
    // Next Page
    expect(links[8]).toHaveAttribute("href", "page=7");
  });

  it("Previous link is disabled when on the first page item", () => {
    render(
      <Pagination pageCount={11} currentPage={1} getPageHref={getPageHref} />
    );
    const links = screen.getAllByRole("button");
    expect(links[0]).toHaveAttribute("aria-disabled");
    const linkClass = links[0].getAttribute("class");
    expect(linkClass).toContain("pagination__link disabled");
  });

  it("Next link is disabled when on the last page item", () => {
    render(
      <Pagination pageCount={11} currentPage={11} getPageHref={getPageHref} />
    );
    const links = screen.getAllByRole("button");
    expect(links[9]).toHaveAttribute("aria-disabled");
    const linkClass = links[9].getAttribute("class");
    expect(linkClass).toContain("pagination__link disabled");
  });

  it("Current page item has active class", () => {
    render(
      <Pagination pageCount={11} currentPage={5} getPageHref={getPageHref} />
    );
    const links = screen.getAllByRole("button");
    const linkClass = links[5].getAttribute("class");
    expect(linkClass).toContain("pagination__link selected");
  });

  it("When pagination has 1 element, pagination is not shown", () => {
    render(
      <Pagination pageCount={1} currentPage={1} getPageHref={getPageHref} />
    );
    expect(screen.queryByRole("navigation")).not.toBeInTheDocument();
  });

  it("When pagination has 0 elements, pagination is not shown", () => {
    render(
      <Pagination pageCount={0} currentPage={1} getPageHref={getPageHref} />
    );
    expect(screen.queryByRole("navigation")).not.toBeInTheDocument();
  });
});

describe("Pagination with changeCallback", () => {
  const changeCallback = jest.fn();

  it("Renders a nav element with an unordered list of items", () => {
    const { container } = render(
      <Pagination
        pageCount={11}
        currentPage={6}
        onPageChange={changeCallback}
      />
    );
    expect(screen.getByRole("navigation")).toBeInTheDocument();
    expect(container.querySelector(".pagination__list")).toBeInTheDocument();
    expect(screen.getAllByRole("listitem")).toHaveLength(11);
  });

  it("Previous link is disabled when on the first page item", () => {
    render(
      <Pagination
        pageCount={11}
        currentPage={1}
        onPageChange={changeCallback}
      />
    );
    const links = screen.getAllByRole("button");
    expect(links[0]).toHaveAttribute("aria-disabled");
    const linkClass = links[0].getAttribute("class");
    expect(linkClass).toContain("pagination__link disabled");
  });

  it("Next link is disabled when on the last page item", () => {
    render(
      <Pagination
        pageCount={11}
        currentPage={11}
        onPageChange={changeCallback}
      />
    );
    const links = screen.getAllByRole("button");
    expect(links[9]).toHaveAttribute("aria-disabled");
    const linkClass = links[9].getAttribute("class");
    expect(linkClass).toContain("pagination__link disabled");
  });

  it("Current page item has active class", () => {
    render(
      <Pagination
        pageCount={11}
        currentPage={5}
        onPageChange={changeCallback}
      />
    );
    const links = screen.getAllByRole("button");
    const linkClass = links[5].getAttribute("class");
    expect(linkClass).toContain("pagination__link selected");
  });

  it("When page item is selected, runs the onPageChange callback", () => {
    render(
      <Pagination
        pageCount={11}
        currentPage={5}
        onPageChange={changeCallback}
      />
    );
    const links = screen.getAllByRole("button");
    expect(changeCallback).toHaveBeenCalledTimes(0);
    userEvent.click(links[2]);
    expect(changeCallback).toHaveBeenCalledTimes(1);
  });

  it("When pagination has 1 element, pagination is not shown", () => {
    render(
      <Pagination pageCount={1} currentPage={1} onPageChange={changeCallback} />
    );
    expect(screen.queryByRole("navigation")).not.toBeInTheDocument();
  });

  it("When pagination has 0 elements, pagination is not shown", () => {
    render(
      <Pagination pageCount={0} currentPage={1} onPageChange={changeCallback} />
    );
    expect(screen.queryByRole("navigation")).not.toBeInTheDocument();
  });
});
