import * as React from "react";
import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import userEvent from "@testing-library/user-event";
import renderer from "react-test-renderer";

import { Tabs, TabList, Tab, TabPanels, TabPanel } from "./Tabs";

export const animalCrossing = [
  {
    label: "Tom Nook",
    content: (
      <p>
        Tom Nook, <b>known in Japan as Tanukichi</b>, is a fictional character
        in the Animal Crossing series who operates the village store.
      </p>
    ),
  },
  {
    label: "Isabelle",
    content:
      "Isabelle, known as Shizue in Japan, is a fictional character " +
      "from the Animal Crossing series of video games. She is a kindly Shih " +
      "Tzu that debuted in the 2012 release Animal Crossing: New Leaf, where " +
      "she serves as the secretary to the player character.",
  },
  {
    label: "K.K. Slider",
    content:
      "<p>Totakeke, more commonly known as <b>K.K. Slider or K.K.</b>, is a " +
      "fictional character within the Animal Crossing franchise. One of the " +
      "franchise's most popular characters, he debuted in the title Animal " +
      "Crossing, and has appeared in every installment since.</p>",
  },
];

describe("Tabs Accessibility", () => {
  it("passes axe accessibility test with the data prop", async () => {
    const { container } = render(<Tabs contentData={animalCrossing} />);
    expect(await axe(container)).toHaveNoViolations();
  });

  it("passes axe accessibility test with children components", async () => {
    const { container } = render(
      <Tabs>
        <TabList>
          <Tab>Tom Nook</Tab>
          <Tab>Isabelle</Tab>
          <Tab>K.K. Slider</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            Tom Nook, known in Japan as Tanukichi, is a fictional character in
            the Animal Crossing series who operates the village store.
          </TabPanel>
          <TabPanel>
            Isabelle, known as Shizue in Japan, is a fictional character from
            the Animal Crossing series of video games. She is a kindly Shih Tzu
            that debuted in the 2012 release Animal Crossing: New Leaf, where
            she serves as the secretary to the player character.
          </TabPanel>
          <TabPanel>
            Totakeke, more commonly known as K.K. Slider or K.K., is a fictional
            character within the Animal Crossing franchise. One of the
            franchise's most popular characters, he debuted in the title Animal
            Crossing, and has appeared in every installment since.
          </TabPanel>
        </TabPanels>
      </Tabs>
    );
    expect(await axe(container)).toHaveNoViolations();
  });
});

describe("Tabs", () => {
  const getTabByName = (name) => screen.getByRole("tab", { name });

  it("renders all tabs but only one panel at a time with children", () => {
    render(
      <Tabs>
        <TabList>
          <Tab>Tom Nook</Tab>
          <Tab>Isabelle</Tab>
          <Tab>K.K. Slider</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            Tom Nook, known in Japan as Tanukichi, is a fictional character in
            the Animal Crossing series who operates the village store.
          </TabPanel>
          <TabPanel>
            Isabelle, known as Shizue in Japan, is a fictional character from
            the Animal Crossing series of video games. She is a kindly Shih Tzu
            that debuted in the 2012 release Animal Crossing: New Leaf, where
            she serves as the secretary to the player character.
          </TabPanel>
          <TabPanel>
            Totakeke, more commonly known as K.K. Slider or K.K., is a fictional
            character within the Animal Crossing franchise. One of the
            franchise's most popular characters, he debuted in the title Animal
            Crossing, and has appeared in every installment since.
          </TabPanel>
        </TabPanels>
      </Tabs>
    );

    expect(getTabByName("Tom Nook")).toBeInTheDocument();
    expect(getTabByName("Isabelle")).toBeInTheDocument();
    expect(getTabByName("K.K. Slider")).toBeInTheDocument();
    expect(
      screen.getByText(/Tom Nook, known in Japan as Tanukichi/i)
    ).toBeInTheDocument();
    expect(
      screen.queryByText(/Isabelle, known as Shizue in Japan,/i)
    ).not.toBeInTheDocument();
    expect(
      screen.queryByText(
        /Totakeke, more commonly known as K.K. Slider or K.K./i
      )
    ).not.toBeInTheDocument();
  });

  it("renders all tabs but only one visible panel at a time with data prop", () => {
    render(<Tabs contentData={animalCrossing} />);
    expect(getTabByName("Tom Nook")).toBeInTheDocument();
    expect(getTabByName("Isabelle")).toBeInTheDocument();
    expect(getTabByName("K.K. Slider")).toBeInTheDocument();
    expect(
      screen.getByText(/known in Japan as Tanukichi/i)
    ).toBeInTheDocument();
    expect(
      screen.queryByText(/Isabelle, known as Shizue in Japan,/i)
    ).not.toBeVisible();
    expect(
      screen.queryByText(/Totakeke, more commonly known as/i)
    ).not.toBeVisible();
  });

  it("switches between tabs", () => {
    render(<Tabs contentData={animalCrossing} />);
    const isabelleTab = getTabByName("Isabelle");
    const kkSliderTab = getTabByName("K.K. Slider");

    expect(
      screen.getByText(/known in Japan as Tanukichi/i)
    ).toBeInTheDocument();
    expect(
      screen.queryByText(/Isabelle, known as Shizue in Japan,/i)
    ).not.toBeVisible();
    expect(
      screen.queryByText(/Totakeke, more commonly known as/i)
    ).not.toBeVisible();

    userEvent.click(isabelleTab);
    expect(isabelleTab).toHaveAttribute("aria-selected", "true");

    expect(
      screen.queryByText(/known in Japan as Tanukichi/i)
    ).not.toBeInTheDocument();
    expect(
      screen.queryByText(/Isabelle, known as Shizue in Japan,/i)
    ).toBeInTheDocument();
    expect(
      screen.queryByText(/Totakeke, more commonly known/i)
    ).not.toBeVisible();

    userEvent.click(kkSliderTab);
    expect(kkSliderTab).toHaveAttribute("aria-selected", "true");

    expect(
      screen.queryByText(/known in Japan as Tanukichi/i)
    ).not.toBeInTheDocument();
    expect(
      screen.queryByText(/Isabelle, known as Shizue in Japan,/i)
    ).not.toBeVisible();
    expect(
      screen.queryByText(/Totakeke, more commonly known/i)
    ).toBeInTheDocument();
  });

  it("renders the specified initial index value", () => {
    render(<Tabs contentData={animalCrossing} defaultIndex={2} />);
    let tomTab = getTabByName("Tom Nook");
    let isabelleTab = getTabByName("Isabelle");
    let kkSliderTab = getTabByName("K.K. Slider");

    expect(tomTab).toHaveAttribute("aria-selected", "false");
    expect(isabelleTab).toHaveAttribute("aria-selected", "false");
    expect(kkSliderTab).toHaveAttribute("aria-selected", "true");
  });

  it("invokes the callback function", () => {
    let selectedIndex = 0;
    const onChange = (index) => (selectedIndex = index);

    render(<Tabs contentData={animalCrossing} onChange={onChange} />);

    const tomTab = getTabByName("Tom Nook");
    const isabelleTab = getTabByName("Isabelle");
    const kkSliderTab = getTabByName("K.K. Slider");

    userEvent.click(kkSliderTab);
    expect(selectedIndex).toEqual(2);

    userEvent.click(tomTab);
    expect(selectedIndex).toEqual(0);

    userEvent.click(isabelleTab);
    expect(selectedIndex).toEqual(1);
  });

  it("should throw warning when both the 'data' probp and children are passed", () => {
    const warn = jest.spyOn(console, "warn");
    render(
      <Tabs contentData={animalCrossing}>
        <TabList>
          <Tab>Tom Nook</Tab>
          <Tab>Isabelle</Tab>
          <Tab>K.K. Slider</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            Tom Nook, known in Japan as Tanukichi, is a fictional character in
            the Animal Crossing series who operates the village store.
          </TabPanel>
          <TabPanel>
            Isabelle, known as Shizue in Japan, is a fictional character from
            the Animal Crossing series of video games. She is a kindly Shih Tzu
            that debuted in the 2012 release Animal Crossing: New Leaf, where
            she serves as the secretary to the player character.
          </TabPanel>
          <TabPanel>
            Totakeke, more commonly known as K.K. Slider or K.K., is a fictional
            character within the Animal Crossing franchise. One of the
            franchise's most popular characters, he debuted in the title Animal
            Crossing, and has appeared in every installment since.
          </TabPanel>
        </TabPanels>
      </Tabs>
    );
    expect(warn).toHaveBeenCalledWith(
      "Only pass children or data in the `data` props but not both."
    );
  });

  it("should throw warning when more than six object tabs are passed", () => {
    const warn = jest.spyOn(console, "warn");
    render(
      <Tabs
        contentData={[
          ...animalCrossing,
          ...[
            { label: "Another character 1", content: "Text" },
            { label: "Another character 2", content: "Text" },
            { label: "Another character 3", content: "Text" },
            { label: "Another character 4", content: "Text" },
          ],
        ]}
      />
    );
    expect(warn).toHaveBeenCalledWith(
      "We recommend to use no more than six tabs. If more than six tabs are needed, consider other navigational patterns."
    );
  });

  it("Renders the UI snapshot correctly", () => {
    const primary = renderer
      .create(<Tabs contentData={animalCrossing} />)
      .toJSON();

    expect(primary).toMatchSnapshot();
  });
});
