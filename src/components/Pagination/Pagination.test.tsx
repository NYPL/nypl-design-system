import * as React from "react";
import { render, screen, within } from "@testing-library/react";
import { axe } from "jest-axe";
import userEvent from "@testing-library/user-event";
import renderer from "react-test-renderer";

import Pagination from "./Pagination";

describe("Pagination Accessibility", () => {
  const getPageHref = (page: number) => `page=${page}`;

  it("passes axe accessibility on the first page", async () => {
    const { container } = render(
      <Pagination pageCount={20} currentPage={1} getPageHref={getPageHref} />
    );
    expect(await axe(container)).toHaveNoViolations();
  });
  it("passes axe accessibility on a middle page", async () => {
    const { container } = render(
      <Pagination pageCount={20} currentPage={10} getPageHref={getPageHref} />
    );
    expect(await axe(container)).toHaveNoViolations();
  });
  it("passes axe accessibility on the last page", async () => {
    const { container } = render(
      <Pagination pageCount={20} currentPage={20} getPageHref={getPageHref} />
    );
    expect(await axe(container)).toHaveNoViolations();
  });
});

describe("Pagination", () => {
  const getPageHref = (page: number) => `page=${page}`;

  describe("Rendering", () => {
    it("renders a nav element with an unordered list and links", () => {
      render(
        <Pagination pageCount={5} currentPage={3} getPageHref={getPageHref} />
      );
      const nav = screen.getByRole("navigation");

      expect(nav).toBeInTheDocument();
      expect(nav).toHaveAttribute("aria-label", "Pagination");
      // Chakra renders other lists so we only want the list we
      // created within the nav element.
      const { getByRole } = within(nav);
      expect(getByRole("list")).toBeInTheDocument();
      // Previous/Next links + truncated item list = 7 total items
      expect(screen.getAllByRole("listitem")).toHaveLength(7);
      // Pagination should show:
      // Previous 1 2 3 4 5 Next
      expect(screen.getAllByRole("link")).toHaveLength(7);
    });

    it("does not render the Previous link on the first page", () => {
      render(
        <Pagination pageCount={5} currentPage={1} getPageHref={getPageHref} />
      );
      // Pagination should show:
      // 1 2 3 4 5 Next
      const links = screen.getAllByRole("link");

      expect(links).toHaveLength(6);
      expect(screen.queryByText("Previous")).not.toBeInTheDocument();
      expect(screen.getByText("Next")).toBeInTheDocument();
    });

    it("does not render the Next link on the last page", () => {
      render(
        <Pagination pageCount={5} currentPage={5} getPageHref={getPageHref} />
      );
      // Pagination should show:
      // Previous 1 2 3 4 5
      const links = screen.getAllByRole("link");

      expect(links).toHaveLength(6);
      expect(screen.getByText("Previous")).toBeInTheDocument();
      expect(screen.queryByText("Next")).not.toBeInTheDocument();
    });

    it("renders an ellipsis at the end of the list", () => {
      render(
        <Pagination pageCount={10} currentPage={1} getPageHref={getPageHref} />
      );
      // Pagination should show:
      // 1 2 3 4 5 ... 10 Next
      const listitem = screen.getAllByRole("listitem");

      expect(listitem).toHaveLength(8);
      // The ellipsis is not a link
      expect(screen.getAllByRole("link")).toHaveLength(7);
      expect(listitem[4].textContent).toEqual("5");
      expect(listitem[5].textContent).toEqual("...");
      expect(listitem[6].textContent).toEqual("10");
      expect(screen.getByText("...")).toBeInTheDocument();
    });

    it("renders an ellipsis at the start of the list", () => {
      render(
        <Pagination pageCount={10} currentPage={10} getPageHref={getPageHref} />
      );
      // Pagination should show:
      // Previous 1 ... 6 7 8 9 10
      const listitem = screen.getAllByRole("listitem");

      expect(listitem).toHaveLength(8);
      // The ellipsis is not a link
      expect(screen.getAllByRole("link")).toHaveLength(7);
      expect(listitem[1].textContent).toEqual("1");
      expect(listitem[2].textContent).toEqual("...");
      expect(listitem[3].textContent).toEqual("6");
      expect(screen.getByText("...")).toBeInTheDocument();
    });

    it("renders two ellipsis when the current page is in the middle", () => {
      render(
        <Pagination pageCount={10} currentPage={5} getPageHref={getPageHref} />
      );
      // Pagination should show:
      // Previous 1 ... 4 5 6 ... 10 Next
      const listitem = screen.getAllByRole("listitem");

      expect(listitem).toHaveLength(9);
      // The ellipses are not links
      expect(screen.getAllByRole("link")).toHaveLength(7);
      expect(listitem[0].textContent).toEqual("Previous");
      expect(listitem[1].textContent).toEqual("1");
      expect(listitem[2].textContent).toEqual("...");
      expect(listitem[3].textContent).toEqual("4");
      expect(listitem[4].textContent).toEqual("5");
      expect(listitem[5].textContent).toEqual("6");
      expect(listitem[6].textContent).toEqual("...");
      expect(listitem[7].textContent).toEqual("10");
      expect(listitem[8].textContent).toEqual("Next");
      expect(screen.getAllByText("...")).toHaveLength(2);
    });

    it("adds aria-current to the active page", () => {
      render(
        <Pagination pageCount={5} currentPage={3} getPageHref={getPageHref} />
      );
      // Pagination should show:
      // Previous 1 2 3 4 5 Next
      const links = screen.getAllByRole("link");
      const page2 = links[2].getAttribute("aria-current");
      const page3 = links[3].getAttribute("aria-current");
      const page4 = links[4].getAttribute("aria-current");

      expect(page2).toEqual(null);
      // Only the current page has `aria-current="page"` for accessibility.
      expect(page3).toEqual("page");
      expect(page4).toEqual(null);
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

    it("Renders the UI snapshot correctly", () => {
      const firstPage = renderer
        .create(
          <Pagination
            id="firstPage"
            pageCount={10}
            currentPage={1}
            getPageHref={getPageHref}
          />
        )
        .toJSON();
      const lastPage = renderer
        .create(
          <Pagination
            id="lastPage"
            pageCount={10}
            currentPage={10}
            getPageHref={getPageHref}
          />
        )
        .toJSON();
      const middlePage = renderer
        .create(
          <Pagination
            id="middlePage"
            pageCount={10}
            currentPage={5}
            getPageHref={getPageHref}
          />
        )
        .toJSON();

      expect(firstPage).toMatchSnapshot();
      expect(lastPage).toMatchSnapshot();
      expect(middlePage).toMatchSnapshot();
    });
  });

  describe("Behavior", () => {
    it("updates the links href value when getPageHref is used", () => {
      const getPageHref = (page: number) => `?page=${page}`;
      render(
        <Pagination pageCount={10} currentPage={5} getPageHref={getPageHref} />
      );
      // Pagination should show:
      // Previous 1 ... 4 5 6 ... 10 Next
      const links = screen.getAllByRole("link");

      expect(screen.getByText("Previous")).toBeInTheDocument();
      expect(screen.getByText("Next")).toBeInTheDocument();

      // Previous link
      expect(links[0].getAttribute("href")).toEqual("?page=4");
      expect(links[1].getAttribute("href")).toEqual("?page=1");
      expect(links[2].getAttribute("href")).toEqual("?page=4");
      expect(links[3].getAttribute("href")).toEqual("?page=5");
      expect(links[4].getAttribute("href")).toEqual("?page=6");
      expect(links[5].getAttribute("href")).toEqual("?page=10");
      // Next link
      expect(links[6].getAttribute("href")).toEqual("?page=6");
    });

    // In this scenario, we need to update the current page ourselves
    // since we stay on the same page.
    it("When page item is selected, runs the onPageChange callback", () => {
      const onPageChange = (page: number) => (currentPage = page);
      let currentPage = 5;
      const { rerender } = render(
        <Pagination
          pageCount={10}
          currentPage={currentPage}
          onPageChange={onPageChange}
        />
      );
      // Pagination should show:
      // Previous 1 ... 4 5 6 ... 10 Next
      let links = screen.getAllByRole("link");

      // Links all have "#" for their href value.
      // Previous link
      expect(links[0].getAttribute("href")).toEqual("#");
      expect(links[1].getAttribute("href")).toEqual("#");
      expect(links[2].getAttribute("href")).toEqual("#");
      expect(links[3].getAttribute("href")).toEqual("#");
      expect(links[4].getAttribute("href")).toEqual("#");
      expect(links[5].getAttribute("href")).toEqual("#");
      // Next link
      expect(links[6].getAttribute("href")).toEqual("#");

      // Page 4
      userEvent.click(links[2]);
      expect(currentPage).toEqual(4);

      rerender(
        <Pagination
          pageCount={10}
          currentPage={currentPage}
          onPageChange={onPageChange}
        />
      );
      // Pagination should show:
      // Previous 1 2 3 4 5 ... 10 Next
      links = screen.getAllByRole("link");

      // Previous link
      userEvent.click(links[0]);
      expect(currentPage).toEqual(3);

      rerender(
        <Pagination
          pageCount={10}
          currentPage={currentPage}
          onPageChange={onPageChange}
        />
      );
      // Pagination should show:
      // Previous 1 2 3 4 5 ... 10 Next
      links = screen.getAllByRole("link");

      // Page 10
      userEvent.click(links[6]);
      expect(currentPage).toEqual(10);

      rerender(
        <Pagination
          pageCount={10}
          currentPage={currentPage}
          onPageChange={onPageChange}
        />
      );
      // Pagination should show:
      // Previous 1 ... 6 7 8 9 10
      links = screen.getAllByRole("link");

      // Page 6
      userEvent.click(links[2]);
      expect(currentPage).toEqual(6);
    });
  });
});
