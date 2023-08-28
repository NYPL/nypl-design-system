import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import * as React from "react";
import renderer from "react-test-renderer";

import SocialMediaLinks from "./SocialMediaLinks";

// @todo If I try and use this as a linkData prop in any of the SocialMediaLinks components being rendered below, I get a type error.
// I have no idea why, so I am just going to use the array directly each time.
// const smlData = [
//   { labelText: "Alt Twitter", type: "twitter", url: "twitter.com/elsewhere", },
//   { labelText: "NYPL Facebook", type: "facebook", url: 'facebook.com/nypl', },
// ];

describe("SocialMediaLinks Accessibility", () => {
  describe("Labels", () => {
    it("passes axe accessibility test without visible labels", async () => {
      const { container } = render(<SocialMediaLinks />);
      expect(await axe(container)).toHaveNoViolations();
    });
    it("passes axe accessibility test with labels set to true", async () => {
      const { container } = render(<SocialMediaLinks showLabels={true} />);
      expect(await axe(container)).toHaveNoViolations();
    });
  });
  describe("Colors", () => {
    it("passes axe accessibility test with link color & labels", async () => {
      const { container } = render(
        <SocialMediaLinks showLabels={true} color={"link"} />
      );
      expect(await axe(container)).toHaveNoViolations();
    });
    it("passes axe accessibility test with textInverse color & labels", async () => {
      const { container } = render(
        <SocialMediaLinks showLabels={true} color={"link"} />
      );
      expect(await axe(container)).toHaveNoViolations();
    });
  });
  describe("Borders", () => {
    it("passes axe accessibility test with straight borders & labels", async () => {
      const { container } = render(
        <SocialMediaLinks showLabels={true} border={"straight"} />
      );
      expect(await axe(container)).toHaveNoViolations();
    });
    it("passes axe accessibility test with circular borders", async () => {
      const { container } = render(<SocialMediaLinks border={"circular"} />);
      expect(await axe(container)).toHaveNoViolations();
    });
  });
});

describe("SocialMediaLinks", () => {
  it("Renders selected tags", () => {
    render(
      <SocialMediaLinks
        layout={"column"}
        linksData={[
          {
            labelText: "Alt Twitter",
            type: "twitter",
            url: "twitter.com/elsewhere",
          },
          {
            labelText: "NYPL Facebook",
            type: "facebook",
            url: "facebook.com/nypl",
          },
        ]}
      />
    );

    // @todo In general, how can you be sure that the thing that matches the role is not a false positive?
    // @todo There could be two links, for example, to other things. How do you target these queries?

    // @todo Do we need to test if the icons are in a row or column?

    // There should be two links. @todo Do we need to test if they are the correct URL?
    expect(screen.getAllByRole("link")).toHaveLength(2);
    // The label text we desire should be in the document. @todo Do we need to test if it is visible when it should be? Should we test that both labels ore there?
    expect(screen.getByText("Alt Twitter")).toBeInTheDocument();
    // There should be at least one icon. @todo Do we need to test if it is the correct icon? Or that there are two correct icons?
    expect(screen.getByTitle("socialFacebook icon")).toBeInTheDocument();
  });
});

describe("SocialMediaLinks Snapshot", () => {
  it("Renders the UI snapshot correctly", () => {
    const socialMediaLinksSnapshot = renderer
      .create(<SocialMediaLinks id="socialmedialinks-test" />)
      .toJSON();
    const socialMediaLinksVariantLinksColor = renderer
      .create(<SocialMediaLinks id="socialmedialinks-test" color={"link"} />)
      .toJSON();
    const socialMediaLinksVariantLinksColorWithLabels = renderer
      .create(
        <SocialMediaLinks
          id="socialmedialinks-test"
          color={"link"}
          showLabels={true}
        />
      )
      .toJSON();
    const socialMediaLinksVariantLinksColorStraightBorders = renderer
      .create(
        <SocialMediaLinks
          id="socialmedialinks-test"
          color={"link"}
          borders={"straight"}
        />
      )
      .toJSON();
    const socialMediaLinksVariantLinksColorCircularBorders = renderer
      .create(
        <SocialMediaLinks
          id="socialmedialinks-test"
          color={"link"}
          borders={"circular"}
        />
      )
      .toJSON();
    const socialMediaLinksVariantLinksColorWithLabelsStraightBorders = renderer
      .create(
        <SocialMediaLinks
          id="socialmedialinks-test"
          color={"link"}
          showLabels={true}
          borders={"straight"}
        />
      )
      .toJSON();
    const socialMediaLinksVariantTextInverseColor = renderer
      .create(
        <SocialMediaLinks id="socialmedialinks-test" color={"textInverse"} />
      )
      .toJSON();
    const socialMediaLinksVariantTextInverseColorWithLabels = renderer
      .create(
        <SocialMediaLinks
          id="socialmedialinks-test"
          color={"textInverse"}
          showLabels={true}
        />
      )
      .toJSON();
    const socialMediaLinksVariantTextInverseColorStraightBorders = renderer
      .create(
        <SocialMediaLinks
          id="socialmedialinks-test"
          color={"textInverse"}
          borders={"straight"}
        />
      )
      .toJSON();
    const socialMediaLinksVariantTextInverseColorCircularBorders = renderer
      .create(
        <SocialMediaLinks
          id="socialmedialinks-test"
          color={"textInverse"}
          borders={"circular"}
        />
      )
      .toJSON();
    const socialMediaLinksVariantTextInverseColorWithLabelsStraightBorders =
      renderer
        .create(
          <SocialMediaLinks
            id="socialmedialinks-test"
            color={"textInverse"}
            showLabels={true}
            borders={"straight"}
          />
        )
        .toJSON();
    const socialMediaLinksVariantWithLabels = renderer
      .create(<SocialMediaLinks id="socialmedialinks-test" showLabels={true} />)
      .toJSON();
    const socialMediaLinksVariantStraightBorder = renderer
      .create(
        <SocialMediaLinks id="socialmedialinks-test" borders={"straight"} />
      )
      .toJSON();
    const socialMediaLinksVariantWithLabelsStraightBorder = renderer
      .create(
        <SocialMediaLinks
          id="socialmedialinks-test"
          borders={"circular"}
          showLabels={true}
        />
      )
      .toJSON();
    const socialMediaLinksVariantCircularBorder = renderer
      .create(
        <SocialMediaLinks id="socialmedialinks-test" borders={"circular"} />
      )
      .toJSON();
    const socialMediaLinksVariantLinksDataOverride = renderer
      .create(
        <SocialMediaLinks
          id="socialmedialinks-test"
          linksData={[
            {
              labelText: "Alt Twitter",
              type: "twitter",
              url: "twitter.com/elsewhere",
            },
            {
              labelText: "NYPL Facebook",
              type: "facebook",
              url: "facebook.com/nypl",
            },
          ]}
        />
      )
      .toJSON();

    expect(socialMediaLinksSnapshot).toMatchSnapshot();
    expect(socialMediaLinksVariantLinksColor).toMatchSnapshot();
    expect(socialMediaLinksVariantLinksColorWithLabels).toMatchSnapshot();
    expect(socialMediaLinksVariantLinksColorStraightBorders).toMatchSnapshot();
    expect(socialMediaLinksVariantLinksColorCircularBorders).toMatchSnapshot();
    expect(
      socialMediaLinksVariantLinksColorWithLabelsStraightBorders
    ).toMatchSnapshot();
    expect(socialMediaLinksVariantTextInverseColor).toMatchSnapshot();
    expect(socialMediaLinksVariantTextInverseColorWithLabels).toMatchSnapshot();
    expect(
      socialMediaLinksVariantTextInverseColorStraightBorders
    ).toMatchSnapshot();
    expect(
      socialMediaLinksVariantTextInverseColorCircularBorders
    ).toMatchSnapshot();
    expect(
      socialMediaLinksVariantTextInverseColorWithLabelsStraightBorders
    ).toMatchSnapshot();
    expect(socialMediaLinksVariantWithLabels).toMatchSnapshot();
    expect(socialMediaLinksVariantStraightBorder).toMatchSnapshot();
    expect(socialMediaLinksVariantWithLabelsStraightBorder).toMatchSnapshot();
    expect(socialMediaLinksVariantCircularBorder).toMatchSnapshot();
    expect(socialMediaLinksVariantLinksDataOverride).toMatchSnapshot();
  });
});
