import * as React from "react";
import { render } from "@testing-library/react";
import { axe } from "jest-axe";
import renderer from "react-test-renderer";

import SimpleGrid from "./SimpleGrid";
import Card, { CardHeading, CardContent } from "../Card/Card";
import { CardImageRatios } from "../Card/CardTypes";
import { HeadingLevels } from "../Heading/HeadingTypes";

describe("Grid Accessibility", () => {
  it("passes axe accessibility test with children components", async () => {
    const { container } = render(
      <SimpleGrid>
        <Card
          imageSrc="https://placeimg.com/500/200/animals"
          imageAlt="Alt text"
          imageAspectRatio={CardImageRatios.TwoByOne}
        >
          <CardHeading level={HeadingLevels.Two}>Card Heading</CardHeading>
          <CardContent>
            Vestibulum id ligula porta felis euismod semper. Nulla vitae elit
            libero, a pharetra augue.
          </CardContent>
        </Card>
        <Card
          imageSrc="https://placeimg.com/400/220/animals"
          imageAlt="Alt text"
          imageAspectRatio={CardImageRatios.TwoByOne}
        >
          <CardHeading level={HeadingLevels.Three}>Card Heading</CardHeading>
          <CardContent>
            Vestibulum id ligula porta felis euismod semper. Nulla vitae elit
            libero, a pharetra augue.
          </CardContent>
        </Card>
        <Card
          imageSrc="https://placeimg.com/400/240/animals"
          imageAlt="Alt text"
          imageAspectRatio={CardImageRatios.TwoByOne}
        >
          <CardHeading level={HeadingLevels.Three}>Card Heading</CardHeading>
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
    expect(tree).toMatchSnapshot();
  });

  it("Renders SimpleGrid component", () => {
    const utils = render(<SimpleGrid id="test-grid-render" />);
    expect(
      utils.container.querySelector("#test-grid-render")
    ).toBeInTheDocument();
  });

  // it("Renders SimpleGrid component with custom column count", () => {
  //   const { container } = render(
  //     <SimpleGrid id="test-grid-cols" columnCount={5}>
  //       <div>Marty</div>
  //       <div>Brutvan</div>
  //       <div>Marty</div>
  //       <div>Brutvan</div>
  //       <div>Marty</div>
  //     </SimpleGrid>
  //   );
  //   expect(container.querySelector("#test-grid-cols")).toBeInTheDocument();
  //   expect(container.firstChild).toHaveStyle(
  //     "grid-template-columns: repeat(5, minmax(0, 1fr))"
  //   );
  // });
});
