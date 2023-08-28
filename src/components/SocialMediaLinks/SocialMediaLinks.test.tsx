import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import * as React from "react";
import renderer from "react-test-renderer";
import SocialMediaLinks from "./SocialMediaLinks";
import { socialMediaDataMap } from "./SocialMediaDataMap";

// If you want to see what's happening.
// screen.debug();

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
        <SocialMediaLinks showLabels={true} color={"textInverse"} />
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
  it("Renders default", () => {
    render(
      <SocialMediaLinks />
    );

    const links = screen.getAllByRole("link");

    // All the links should be there.
    // @todo I dunno. Isn't this kinda cheating? It will always be true, so why bother?
    //   But I am trying to avoid changing the test if/when the socialMediaDataMap gets updated.
    expect(links).toHaveLength(socialMediaDataMap.length);

    // The links should be what we assigned, above.
    // @todo Again, I could do this most easily by looping through the links array and mapping
    //   each type to the socialMediaDataMap to ensure there is a match. But what is the point?
    //   It will never fail since the data sets are both from the same source.
    //   Are we doing this just to demonstrate that the component is rendered at all?
    //   Don't the other accessibility tests and snapshots do that?

    // The label text we desire should be in the document.
    // @todo. See above.

    // There should be a ([variable]) icon.
    // @todo ibid.

  });


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

    // @todo Do we need to test if the icons are in a row or column?
    // @todo Or if the colors are correct?
    // @todo Or if the borders are correct?

    const links = screen.getAllByRole("link");

    // There should be two links.
    expect(links).toHaveLength(2);

    // The links should be what we assigned, above.
    expect(links[0]).toHaveAttribute("href", "twitter.com/elsewhere");
    expect(links[1]).toHaveAttribute("href", "facebook.com/nypl");

    // The label text we desire should be in the document.
    expect(screen.getByText("Alt Twitter")).toBeInTheDocument();
    expect(screen.getByText("NYPL Facebook")).toBeInTheDocument();

    // There should be a (Facebook) icon.
    expect(screen.getByTitle("socialFacebook icon")).toBeInTheDocument();

    // There should be a (Twitter) icon.
    expect(screen.getByTitle("socialTwitter icon")).toBeInTheDocument();
  });

  it("logs an error if border='circular' and showLabels=true", () => {
    const error = jest.spyOn(console, "error");
    screen.debug();
    render(
      <SocialMediaLinks
        borders={'circular'}
        showLabels={true}
        />
    );
    expect(error).toHaveBeenCalledWith(
      "NYPL Reservoir SocialMediaLinks: 'showLabels' is set to true, but labels can not be shown with a circular border."
    );
  });
});

describe("SocialMediaLinks Snapshot", () => {
  it("Renders the UI snapshot correctly when the layout is in a row.", () => {
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
          borders={"straight"}
          showLabels={true}
        />
      )
      .toJSON();
    const socialMediaLinksVariantWithLabelsCircularBorder = renderer
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
    expect(socialMediaLinksVariantWithLabelsCircularBorder).toMatchSnapshot();
    expect(socialMediaLinksVariantCircularBorder).toMatchSnapshot();
  });

  it("Renders the UI snapshot correctly when the layout is in a column.", () => {
    const socialMediaLinksSnapshot = renderer
      .create(<SocialMediaLinks id="socialmedialinks-test" layout={"column"}/>)
      .toJSON();
    const socialMediaLinksVariantLinksColor = renderer
      .create(<SocialMediaLinks id="socialmedialinks-test" color={"link"} layout={"column"}/>)
      .toJSON();
    const socialMediaLinksVariantLinksColorWithLabels = renderer
      .create(
        <SocialMediaLinks
          id="socialmedialinks-test"
          color={"link"}
          layout={"column"}
          showLabels={true}
        />
      )
      .toJSON();
    const socialMediaLinksVariantLinksColorStraightBorders = renderer
      .create(
        <SocialMediaLinks
          id="socialmedialinks-test"
          color={"link"}
          layout={"column"}
          borders={"straight"}
        />
      )
      .toJSON();
    const socialMediaLinksVariantLinksColorCircularBorders = renderer
      .create(
        <SocialMediaLinks
          id="socialmedialinks-test"
          color={"link"}
          layout={"column"}
          borders={"circular"}
        />
      )
      .toJSON();
    const socialMediaLinksVariantLinksColorWithLabelsStraightBorders = renderer
      .create(
        <SocialMediaLinks
          id="socialmedialinks-test"
          color={"link"}
          layout={"column"}
          showLabels={true}
          borders={"straight"}
        />
      )
      .toJSON();
    const socialMediaLinksVariantTextInverseColor = renderer
      .create(
        <SocialMediaLinks id="socialmedialinks-test" color={"textInverse"} layout={"column"}/>
      )
      .toJSON();
    const socialMediaLinksVariantTextInverseColorWithLabels = renderer
      .create(
        <SocialMediaLinks
          id="socialmedialinks-test"
          color={"textInverse"}
          layout={"column"}
          showLabels={true}
        />
      )
      .toJSON();
    const socialMediaLinksVariantTextInverseColorStraightBorders = renderer
      .create(
        <SocialMediaLinks
          id="socialmedialinks-test"
          borders={"straight"}
          color={"textInverse"}
          layout={"column"}
        />
      )
      .toJSON();
    const socialMediaLinksVariantTextInverseColorCircularBorders = renderer
      .create(
        <SocialMediaLinks
          id="socialmedialinks-test"
          color={"textInverse"}
          borders={"circular"}
          layout={"column"}
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
            layout={"column"}
          />
        )
        .toJSON();
    const socialMediaLinksVariantWithLabels = renderer
      .create(<SocialMediaLinks id="socialmedialinks-test" showLabels={true} layout={"column"}/>)
      .toJSON();
    const socialMediaLinksVariantStraightBorder = renderer
      .create(
        <SocialMediaLinks id="socialmedialinks-test" borders={"straight"} layout={"column"}/>
      )
      .toJSON();
    const socialMediaLinksVariantWithLabelsStraightBorder = renderer
      .create(
        <SocialMediaLinks
          id="socialmedialinks-test"
          borders={"straight"}
          showLabels={true}
          layout={"column"}
        />
      )
      .toJSON();
    const socialMediaLinksVariantWithLabelsCircularBorder = renderer
      .create(
        <SocialMediaLinks
          id="socialmedialinks-test"
          borders={"circular"}
          showLabels={true}
          layout={"column"}
        />
      )
      .toJSON();
    const socialMediaLinksVariantCircularBorder = renderer
      .create(
        <SocialMediaLinks id="socialmedialinks-test" borders={"circular"} layout={"column"}/>
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
    expect(socialMediaLinksVariantWithLabelsCircularBorder).toMatchSnapshot();
    expect(socialMediaLinksVariantCircularBorder).toMatchSnapshot();

  });

  it("Renders the UI snapshot correctly when linksData has a value.", () => {
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

    expect(socialMediaLinksVariantLinksDataOverride).toMatchSnapshot();
  });
});
