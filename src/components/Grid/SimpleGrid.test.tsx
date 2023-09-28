import { render } from "@testing-library/react";
import { axe } from "jest-axe";
import * as React from "react";
import renderer from "react-test-renderer";

import Card, { CardHeading, CardContent } from "../Card/Card";
import SimpleGrid from "./SimpleGrid";

describe("Grid Accessibility", () => {
  it("passes axe accessibility test with children components", async () => {
    const { container } = render(
      <SimpleGrid>
        <Card
          imageProps={{
            alt: "Alt text",
            aspectRatio: "twoByOne",
            src: "//placekitten.com/500/200",
          }}
        >
          <CardHeading level="h2">Card Heading</CardHeading>
          <CardContent>
            Vestibulum id ligula porta felis euismod semper. Nulla vitae elit
            libero, a pharetra augue.
          </CardContent>
        </Card>
        <Card
          imageProps={{
            alt: "Alt text",
            aspectRatio: "twoByOne",
            src: "//placekitten.com/400/220",
          }}
        >
          <CardHeading level="h3">Card Heading</CardHeading>
          <CardContent>
            Vestibulum id ligula porta felis euismod semper. Nulla vitae elit
            libero, a pharetra augue.
          </CardContent>
        </Card>
        <Card
          imageProps={{
            alt: "Alt text",
            aspectRatio: "twoByOne",
            src: "//placekitten.com/400/240",
          }}
        >
          <CardHeading level="h3">Card Heading</CardHeading>
          <CardContent>
            Vestibulum id ligula porta felis euismod semper. Nulla vitae elit
            libero, a pharetra augue.
          </CardContent>
        </Card>
      </SimpleGrid>
    );

    expect(await axe(container)).toHaveNoViolations();
  });
});

describe("SimpleGrid", () => {
  it("Renders the SimpleGrid UI snapshot correctly", () => {
    const tree = renderer.create(<SimpleGrid id="test-grid" />).toJSON();
    const withChakraProps = renderer
      .create(<SimpleGrid id="chakra" p="20px" color="ui.error.primary" />)
      .toJSON();
    const withOtherProps = renderer
      .create(<SimpleGrid id="props" data-testid="props" />)
      .toJSON();

    expect(tree).toMatchSnapshot();
    expect(withChakraProps).toMatchSnapshot();
    expect(withOtherProps).toMatchSnapshot();
  });

  it("Renders SimpleGrid component", () => {
    const utils = render(<SimpleGrid id="test-grid-render" />);
    expect(
      utils.container.querySelector("#test-grid-render")
    ).toBeInTheDocument();
  });

  it("passes a ref to the div element", () => {
    const ref = React.createRef<HTMLDivElement>();
    const { container } = render(
      <SimpleGrid id="grid-ref" ref={ref}>
        <p>test1</p>
        <p>test2</p>
      </SimpleGrid>
    );

    expect(container.querySelector("div")).toBe(ref.current);
  });
});
