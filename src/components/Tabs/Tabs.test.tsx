import * as React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe } from "jest-axe";
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
    const { container } = render(<Tabs tabsData={animalCrossing} />);
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
  const getTabByName = (name: string) => screen.getByRole("tab", { name });

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
    render(<Tabs tabsData={animalCrossing} />);
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
    render(<Tabs tabsData={animalCrossing} />);
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
    render(<Tabs tabsData={animalCrossing} defaultIndex={2} />);
    let tomTab = getTabByName("Tom Nook");
    let isabelleTab = getTabByName("Isabelle");
    let kkSliderTab = getTabByName("K.K. Slider");

    expect(tomTab).toHaveAttribute("aria-selected", "false");
    expect(isabelleTab).toHaveAttribute("aria-selected", "false");
    expect(kkSliderTab).toHaveAttribute("aria-selected", "true");
  });

  it("invokes the callback function", () => {
    let selectedIndex = 0;
    const onChange = (index: number) => (selectedIndex = index);

    render(<Tabs tabsData={animalCrossing} onChange={onChange} />);

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

  it("should throw a warning when no data is passed", () => {
    const warn = jest.spyOn(console, "warn");
    render(<Tabs />);
    expect(warn).toHaveBeenCalledWith(
      "NYPL Reservoir Tabs: Pass data in the `contentData` props or as children."
    );
  });

  it("should throw a warning when both the 'data' prop and children are passed", () => {
    const warn = jest.spyOn(console, "warn");
    render(
      <Tabs tabsData={animalCrossing}>
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
      "NYPL Reservoir Tabs: Only pass children or data in the `contentData` " +
        "prop. Do not pass both."
    );
  });

  it("should throw a warning when more than six object tabs are passed", () => {
    const warn = jest.spyOn(console, "warn");
    render(
      <Tabs
        tabsData={[
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
      "NYPL Reservoir Tabs: it is recommended to use no more than six tabs. If " +
        "more than six tabs are needed, consider other navigational patterns."
    );
  });

  it("renders the UI snapshot correctly", () => {
    const basic = renderer
      .create(<Tabs tabsData={animalCrossing} id="basic" />)
      .toJSON();
    const withChakraProps = renderer
      .create(
        <Tabs
          tabsData={animalCrossing}
          id="chakra"
          p="20px"
          color="ui.error.primary"
        />
      )
      .toJSON();
    const withOtherProps = renderer
      .create(<Tabs tabsData={animalCrossing} id="props" data-testid="props" />)
      .toJSON();

    expect(basic).toMatchSnapshot();
    expect(withChakraProps).toMatchSnapshot();
    expect(withOtherProps).toMatchSnapshot();
  });
});
