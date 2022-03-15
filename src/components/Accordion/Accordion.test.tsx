import * as React from "react";
import { axe } from "jest-axe";
import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import userEvent from "@testing-library/user-event";

import Accordion from "./Accordion";
import Card, { CardContent, CardHeading } from "../Card/Card";
import { CardLayouts } from "../Card/CardTypes";
import { HeadingLevels } from "../Heading/HeadingTypes";
import { ImageRatios } from "../Image/ImageTypes";

describe("Accordion Accessibility", () => {
  it("passes axe accessibility test for one item", async () => {
    const { container } = render(
      <Accordion
        contentData={[
          {
            label: "Tom Nook",
            panel: (
              <p>
                Tom Nook, <b>known in Japan as Tanukichi</b>, is a fictional
                character in the Animal Crossing series who operates the village
                store.
              </p>
            ),
          },
        ]}
      />
    );
    expect(await axe(container)).toHaveNoViolations();
  });

  it("passes axe accessibility test for multiple items", async () => {
    const { container } = render(
      <Accordion
        contentData={[
          {
            label: "Tom Nook",
            panel: (
              <p>
                Tom Nook, <b>known in Japan as Tanukichi</b>, is a fictional
                character in the Animal Crossing series who operates the village
                store.
              </p>
            ),
          },
          {
            label: "Isabelle",
            panel:
              "Isabelle, known as Shizue in Japan, is a fictional character " +
              "from the Animal Crossing series of video games. She is a kindly Shih " +
              "Tzu that debuted in the 2012 release Animal Crossing: New Leaf, where " +
              "she serves as the secretary to the player character.",
          },
        ]}
      />
    );
    expect(await axe(container)).toHaveNoViolations();
  });
});

export const contentData = [
  {
    label: "Tom Nook",
    panel: (
      <p>
        Tom Nook, <b>known in Japan as Tanukichi</b>, is a fictional character
        in the Animal Crossing series who operates the village store.
      </p>
    ),
  },
  {
    label: "Isabelle",
    panel:
      "Isabelle, known as Shizue in Japan, is a fictional character " +
      "from the Animal Crossing series of video games. She is a kindly Shih " +
      "Tzu that debuted in the 2012 release Animal Crossing: New Leaf, where " +
      "she serves as the secretary to the player character.",
  },
  {
    label: "K.K. Slider",
    panel:
      "<p>Totakeke, more commonly known as <b>K.K. Slider or K.K.</b>, is a " +
      "fictional character within the Animal Crossing franchise. One of the " +
      "franchise's most popular characters, he debuted in the title Animal " +
      "Crossing, and has appeared in every installment since.</p>",
  },
];

describe("Accordion", () => {
  it("renders a visible button with a label to click on", () => {
    render(<Accordion contentData={[contentData[0]]} />);
    const accordionLabel = screen.getByRole("button", { name: "Tom Nook" });

    expect(accordionLabel).toBeInTheDocument();
    // Closed by default.
    expect(accordionLabel).toHaveAttribute("aria-expanded", "false");
    expect(screen.getByText(/known in Japan as Tanukichi/i)).not.toBeVisible();
  });

  it("opens the panel by default with isDefaultOpen passed", () => {
    render(<Accordion isDefaultOpen contentData={[contentData[0]]} />);
    const accordionLabel = screen.getByRole("button", { name: "Tom Nook" });

    expect(accordionLabel).toBeInTheDocument();
    expect(accordionLabel).toHaveAttribute("aria-expanded", "true");
  });

  it("opens the accordion when the label is clicked", () => {
    render(<Accordion contentData={[contentData[0]]} />);

    const accordionLabel = screen.getByRole("button", { name: "Tom Nook" });
    expect(accordionLabel).toHaveAttribute("aria-expanded", "false");
    userEvent.click(accordionLabel);
    expect(accordionLabel).toHaveAttribute("aria-expanded", "true");
  });

  it("renders multiple accordion items grouped together", () => {
    render(<Accordion contentData={contentData} />);

    const accordion1 = screen.getByRole("button", { name: "Tom Nook" });
    const accordion2 = screen.getByRole("button", { name: "Isabelle" });
    const accordion3 = screen.getByRole("button", { name: "K.K. Slider" });

    expect(accordion1).toHaveAttribute("aria-expanded", "false");
    expect(accordion2).toHaveAttribute("aria-expanded", "false");
    expect(accordion3).toHaveAttribute("aria-expanded", "false");
  });

  it("opens each accordion item independently of each other", () => {
    render(<Accordion contentData={contentData} />);

    const accordion1 = screen.getByRole("button", { name: "Tom Nook" });
    const accordion2 = screen.getByRole("button", { name: "Isabelle" });
    const accordion3 = screen.getByRole("button", { name: "K.K. Slider" });

    expect(accordion1).toHaveAttribute("aria-expanded", "false");
    expect(accordion2).toHaveAttribute("aria-expanded", "false");
    expect(accordion3).toHaveAttribute("aria-expanded", "false");

    userEvent.click(accordion1);
    expect(accordion1).toHaveAttribute("aria-expanded", "true");
    expect(accordion2).toHaveAttribute("aria-expanded", "false");
    expect(accordion3).toHaveAttribute("aria-expanded", "false");

    userEvent.click(accordion2);
    expect(accordion1).toHaveAttribute("aria-expanded", "true");
    expect(accordion2).toHaveAttribute("aria-expanded", "true");
    expect(accordion3).toHaveAttribute("aria-expanded", "false");

    userEvent.click(accordion3);
    userEvent.click(accordion1);
    expect(accordion1).toHaveAttribute("aria-expanded", "false");
    expect(accordion2).toHaveAttribute("aria-expanded", "true");
    expect(accordion3).toHaveAttribute("aria-expanded", "true");
  });

  it("Renders the UI snapshot correctly", () => {
    const contentData = [
      {
        label: "Gerry Kellman",
        panel: (
          <Card
            id="card"
            imageAlt="Alt text"
            imageAspectRatio={ImageRatios.TwoByOne}
            imageSrc={`https://cdn.onebauer.media/one/media/6176/76fd/405b/ab5f/f20f/2d52/gerri-1500-1.jpg?format=jpg&quality=80&width=850&ratio=1-1&resize=aspectfit`}
            layout={CardLayouts.Row}
          >
            <CardHeading id="heading1" level={HeadingLevels.Four}>
              Gerry Kellman
            </CardHeading>
            <CardContent>
              Gerri is <b>one of Logan's most trusted confidantes</b>, one who
              serves many roles within the company. She's one of the most
              powerful people at Waystar Royco outside of the family itself.
            </CardContent>
          </Card>
        ),
      },
    ];

    const primary = renderer
      .create(<Accordion contentData={contentData} id="accordian" />)
      .toJSON();
    const defaultOpen = renderer
      .create(
        <Accordion contentData={contentData} id="accordian" isDefaultOpen />
      )
      .toJSON();
    const withChakraProps = renderer
      .create(
        <Accordion
          contentData={contentData}
          id="accordian"
          p="s"
          color="ui.error.primary"
        />
      )
      .toJSON();

    expect(primary).toMatchSnapshot();
    expect(defaultOpen).toMatchSnapshot();
    expect(withChakraProps).toMatchSnapshot();
  });
});
