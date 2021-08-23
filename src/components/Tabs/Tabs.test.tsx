import * as React from "react";
import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import userEvent from "@testing-library/user-event";

import { Tabs, TabList, Tab, TabPanels, TabPanel } from "./Tabs";

const animalCrossing = [
  {
    label: "Tom Nook",
    content:
      "Tom Nook, known in Japan as Tanukichi, is a fictional character" +
      " in the Animal Crossing series who operates the village store.",
  },
  {
    label: "Isabelle",
    content:
      "Isabelle, known as Shizue in Japan, is a fictional character " +
      "from the Animal Crossing series of video games. She is a kindly Shih " +
      "Tzu that debuted in the 2012 release Animal Crossing: New Leaf, where " +
      "sheserves as the secretary to the player character.",
  },
  {
    label: "K.K. Slider",
    content:
      "Totakeke, more commonly known as K.K. Slider or K.K., is a " +
      "fictional character within the Animal Crossing franchise. One of the " +
      "franchise's most popular characters, he debuted in the title Animal " +
      "Crossing, and has appeared in every installment since.",
  },
];

describe("Tabs Accessibility", () => {
  it("passes axe accessibility test with the data prop", async () => {
    const { container } = render(<Tabs data={animalCrossing} />);
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

  it("renders all tabs but only one panel at a time with data prop", () => {
    render(<Tabs data={animalCrossing} />);

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

  it("switches between tabs", () => {
    render(<Tabs data={animalCrossing} />);
    const isabelleTab = getTabByName("Isabelle");
    const kkSliderTab = getTabByName("K.K. Slider");

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

    userEvent.click(isabelleTab);
    expect(isabelleTab).toHaveAttribute("aria-selected", "true");

    expect(
      screen.queryByText(/Tom Nook, known in Japan as Tanukichi/i)
    ).not.toBeInTheDocument();
    expect(
      screen.queryByText(/Isabelle, known as Shizue in Japan,/i)
    ).toBeInTheDocument();
    expect(
      screen.queryByText(
        /Totakeke, more commonly known as K.K. Slider or K.K./i
      )
    ).not.toBeInTheDocument();

    userEvent.click(kkSliderTab);
    expect(kkSliderTab).toHaveAttribute("aria-selected", "true");

    expect(
      screen.queryByText(/Tom Nook, known in Japan as Tanukichi/i)
    ).not.toBeInTheDocument();
    expect(
      screen.queryByText(/Isabelle, known as Shizue in Japan,/i)
    ).not.toBeInTheDocument();
    expect(
      screen.queryByText(
        /Totakeke, more commonly known as K.K. Slider or K.K./i
      )
    ).toBeInTheDocument();
  });

  it("renders the specified initial index value", () => {
    render(<Tabs data={animalCrossing} index={2} />);
    let tomTab = getTabByName("Tom Nook");
    let isabelleTab = getTabByName("Isabelle");
    let kkSliderTab = getTabByName("K.K. Slider");

    expect(tomTab).toHaveAttribute("aria-selected", "false");
    expect(isabelleTab).toHaveAttribute("aria-selected", "false");
    expect(kkSliderTab).toHaveAttribute("aria-selected", "true");
  });

  it("invokes the callback function", () => {
    let selectedIndex = 0;
    const tabsOnClick = (index) => (selectedIndex = index);

    render(<Tabs data={animalCrossing} tabsOnClick={tabsOnClick} />);

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

  it("should throw warning when fewer than 4 options", () => {
    const warn = jest.spyOn(console, "warn");
    render(
      <Tabs data={animalCrossing}>
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
});
