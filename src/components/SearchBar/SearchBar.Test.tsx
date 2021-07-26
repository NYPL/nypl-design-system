import * as React from "react";
import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";

import Button from "../Button/Button";
import { ButtonTypes } from "../Button/ButtonTypes";
import SearchBar from "./SearchBar";

describe("SearchBar Accessibility", () => {
  it("passes axe accessibility test", async () => {
    const { container } = render(
      <SearchBar id="id" ariaLabel="searchbar" onSubmit={jest.fn()} />
    );
    expect(await axe(container)).toHaveNoViolations();
  });
});

// describe("SearchBar", () => {
//   let searchBarSubmit, buttonCallback;
//   beforeEach(() => {
//     searchBarSubmit = jest.fn();
//   });

//   it("Renders SearchBar", () => {
//     const wrapper = render(
//       <SearchBar id="id" ariaLabel="searchbar" onSubmit={searchBarSubmit} />
//     );
//     expect(wrapper.find(".searchbar")).to.have.lengthOf(1);
//     expect(wrapper.find(".searchbar").prop("aria-label")).toEqual("searchbar");
//   });

//   it("Search Bar calls call back on Submit ", () => {
//     const mounted = render(
//       <SearchBar ariaLabel="searchBar" id="id" onSubmit={searchBarSubmit}>
//         <Button
//           buttonType={ButtonTypes.Primary}
//           id="button"
//           onClick={buttonCallback}
//           type="submit"
//         >
//           Search
//         </Button>
//       </SearchBar>
//     );
//     mounted.find("Button").simulate("click");
//     expect(searchBarSubmit.callCount).toEqual(1);
//   });
// });
