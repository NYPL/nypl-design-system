import { render, screen } from "@testing-library/react";
import { getTextFromElement } from "./utils";
import Text from "../components/Text/Text";

describe("getTextFromElement", () => {
  it("extracts plain text from nested DOM elements", () => {
    const domElement = (
      <Text>
        A DOM element with <strong>nested elements</strong>!
      </Text>
    );
    const text = getTextFromElement(domElement);

    render(domElement);

    expect(
      screen.queryByText(/A DOM element with nested elements!/i)
    ).not.toBeInTheDocument();
    expect(text).toEqual("A DOM element with nested elements!");
  });
});
