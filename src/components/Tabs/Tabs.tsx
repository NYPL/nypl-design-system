import * as React from "react";
import {
  Box,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
  Tabs as ChakraTabs,
  useMultiStyleConfig,
} from "@chakra-ui/react";

import generateUUID from "../../helpers/generateUUID";
import { IconNames, IconRotationTypes, IconSizes } from "../Icons/IconTypes";
import Icon from "../Icons/Icon";
import { ButtonTypes } from "../Button/ButtonTypes";
import Button from "../Button/Button";
import useCarouselStyles from "../../hooks/useCarouselStyles";
import useWindowSize from "../../hooks/useWindowSize";

// Internal interface used for rendering `Tabs` tab and panel
// elements, either from data or from children.
interface TabPanelProps {
  tabs: React.ReactNode[] | React.ReactNode;
  panels: React.ReactNode[] | React.ReactNode;
}
// The general shape of the data object for each Tab.
export interface TabsContentDataProps {
  label: string;
  content: string | React.ReactNode;
}

export interface TabsProps {
  /** Array of data to display */
  contentData?: TabsContentDataProps[];
  /** The index of the tab to display for controlled situations. */
  defaultIndex?: number;
  /** ID that other components can cross reference for accessibility purposes */
  id?: string;
  /** The callback function invoked on every tab change event. */
  onChange?: (index: number) => any;
  /** Render a hash in the url for each tab. Only available when data is
   * passed through the `data` props. */
  useHash?: boolean;
}

/**
 * An internal function used to update the hash in the URL.
 * This function is only used when `useHash` is `true`.
 */
const onClickHash = (tabHash) => {
  window.location.hash = tabHash;
};

/**
 * This returns an object with `Tab` and `TabPanel` components to rendered in
 * `TabList` and `TabPanels` components respectively.
 */
const getElementsFromContentData = (data, useHash): TabPanelProps => {
  const tabs = [];
  const panels = [];

  if (!data?.length) {
    return { tabs: [], panels: [] };
  }

  if (data?.length > 6) {
    console.warn(
      "NYPL Reservoir Tabs: it is recommended to use no more than six tabs. If " +
        "more than six tabs are needed, consider other navigational patterns."
    );
  }
  data.forEach((tab, index) => {
    let tempPanel;
    // For URL hash enabled tabs, we need to add a custom `onClick` to handle the URL hash.
    const tempTab = (
      <Tab
        fontSize={["0", null, "1"]}
        key={index}
        onClick={useHash ? () => onClickHash(`tab${index + 1}`) : null}
      >
        {tab.label}
      </Tab>
    );
    if (typeof tab.content === "string") {
      tempPanel = (
        <TabPanel
          dangerouslySetInnerHTML={{ __html: tab.content }}
          key={index}
        />
      );
    } else {
      tempPanel = <TabPanel key={index}>{tab.content}</TabPanel>;
    }

    tabs.push(tempTab);
    panels.push(tempPanel);
  });

  return {
    tabs: [<TabList key="list">{tabs}</TabList>],
    panels: [<TabPanels key="panels">{panels}</TabPanels>],
  };
};

/**
 * This returns an object with `TabList` and `TabPanels` components to help format
 * the DOM when building up the `Tabs` component using child component.
 */
const getElementsFromChildren = (children): TabPanelProps => {
  const tabs = [];
  const panels = [];

  if (!children?.length) {
    return { tabs: [], panels: [] };
  }

  children.forEach((child) => {
    if (child.type === TabList || child.props.mdxType === "TabList") {
      tabs.push(child);

      const childTabs = React.Children.count(child.props.children);
      if (childTabs > 6) {
        console.warn(
          "NYPL Reservoir Tabs: It is recommended to use no more than six tabs. " +
            "If more than six tabs are needed, consider other navigational patterns."
        );
      }
    }

    if (child.type === TabPanels || child.props.mdxType === "TabPanels") {
      panels.push(child);
    }
  });

  return { tabs, panels };
};

/**
 * Renders Chakra's `Tab` component with specific variants, props,
 * and controlled styling.
 */
function Tabs(props: React.PropsWithChildren<TabsProps>) {
  const {
    children,
    contentData,
    defaultIndex = 0,
    id = generateUUID(),
    onChange,
    useHash = false,
  } = props;
  const styles = useMultiStyleConfig("Tabs", {});
  // Just an estimate of the tab width for the mobile carousel.
  const initTabWidth = 65;
  // An estimate for the tab width for larger device widths.
  const mediumTabWidth = 40;
  const [tabWidth, setTabWidth] = React.useState(initTabWidth);
  const windowDimensions = useWindowSize();
  const { tabs, panels }: any = contentData
    ? getElementsFromContentData(contentData, useHash)
    : getElementsFromChildren(children);

  if (tabs.length === 0 || panels.length === 0) {
    console.warn(
      "NYPL Reservoir Tabs: Pass data in the `contentData` props or as children."
    );
  }

  // `tabs` is an array for the children component approach but an object for
  // the `contentData` prop approach. We need to get the right props key value
  // to set the carousel's length.
  const tabProps = tabs[0] ? tabs[0]?.props : (tabs as any).props;
  const { prevSlide, nextSlide, carouselStyle, goToStart } = useCarouselStyles(
    tabProps?.children?.length,
    tabWidth
  );
  React.useEffect(() => {
    if (windowDimensions.width > 320) {
      setTabWidth(mediumTabWidth);
    } else {
      setTabWidth(initTabWidth);
    }
    // If we are on larger viewports, reset the carousel so all tabs display.
    if (windowDimensions.width > 600) {
      goToStart();
    }
  }, [goToStart, windowDimensions.width]);
  const previousButton = (
    <Button
      attributes={{
        "aria-label": "Previous",
        ...styles.buttonArrows,
        left: "0",
      }}
      buttonType={ButtonTypes.Primary}
      id={`tabs-previous-${id}`}
      onClick={prevSlide}
    >
      <Icon
        iconRotation={IconRotationTypes.Rotate90}
        id={`tabs-previous-icon-${id}`}
        name={IconNames.Arrow}
        size={IconSizes.Small}
      />
    </Button>
  );
  const nextButton = (
    <Button
      attributes={{
        "aria-label": "Next",
        ...styles.buttonArrows,
        right: "0",
      }}
      buttonType={ButtonTypes.Primary}
      id={`tabs-next-${id}`}
      onClick={nextSlide}
    >
      <Icon
        iconRotation={IconRotationTypes.Rotate270}
        id={`tabs-next-icon-${id}`}
        name={IconNames.Arrow}
        size={IconSizes.Small}
      />
    </Button>
  );

  if (children && contentData?.length) {
    console.warn(
      "NYPL Reservoir Tabs: Only pass children or data in the `contentData` " +
        "prop. Do not pass both."
    );
  }

  return (
    <ChakraTabs
      defaultIndex={defaultIndex}
      id={id}
      // The following lazy loads each panel whenever it is needed.
      isLazy
      onChange={onChange}
      variant="enclosed"
    >
      <Box
        __css={styles.tablistWrapper}
        sx={{
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        {previousButton}
        <Box __css={styles.carouselParent}>
          <Box {...carouselStyle}>{tabs}</Box>
        </Box>
        {nextButton}
      </Box>
      {panels}
    </ChakraTabs>
  );
}

export { Tabs, TabList, Tab, TabPanels, TabPanel };
