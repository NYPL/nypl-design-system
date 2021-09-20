import * as React from "react";
import {
  Box,
  Tabs as ChakraTabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  useMultiStyleConfig,
} from "@chakra-ui/react";

import generateUUID from "../../helpers/generateUUID";
import { IconNames, IconRotationTypes } from "../Icons/IconTypes";
import Icon from "../Icons/Icon";
import { ButtonTypes } from "../Button/ButtonTypes";
import Button from "../Button/Button";

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
 * This returns an object with `Tab` and `TabPanel` components to render in
 * `TabList` and `TabPanels` components respectively.
 */
const getElementsFromContentData = (data, useHash) => {
  const tabs = [];
  const panels = [];

  if (!data?.length) {
    return {};
  }

  if (data?.length > 6) {
    console.warn(
      "We recommend to use no more than six tabs. If more than six tabs are " +
        "needed, consider other navigational patterns."
    );
  }

  data.map((tab, index) => {
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
          key={index}
          dangerouslySetInnerHTML={{ __html: tab.content }}
        />
      );
    } else {
      tempPanel = <TabPanel key={index}>{tab.content}</TabPanel>;
    }

    tabs.push(tempTab);
    panels.push(tempPanel);
  });

  return { tabs, panels };
};

/**
 * This returns an object with `TabList` and `TabPanels` components to help format
 * the DOM when building up the `Tabs` component using child component.
 */
const getElementsFromChildren = (children) => {
  const tabs = [];
  const panels = [];

  if (!children?.length) {
    return {};
  }

  children.map((child) => {
    if (child.type === TabList || child.props.mdxType === "TabList") {
      tabs.push(child);

      const childTabs = React.Children.count(child.props.children);
      if (childTabs > 6) {
        console.warn(
          "We recommend to use no more than six tabs. If more than six tabs are " +
            "needed, consider other navigational patterns."
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
  const { tabs, panels } = contentData
    ? getElementsFromContentData(contentData, useHash)
    : getElementsFromChildren(children);

  if (children && contentData?.length) {
    console.warn(
      "Only pass children or data in the `data` props but not both."
    );
  }

  return (
    <ChakraTabs
      id={id}
      // The following lazy loads each panel whenever it is needed.
      isLazy
      onChange={onChange}
      defaultIndex={defaultIndex}
      variant="enclosed"
    >
      {contentData ? (
        <>
          <Box
            __css={styles.tablistWrapper}
            sx={{
              "&::-webkit-scrollbar": {
                display: "none",
              },
            }}
          >
            <Button
              buttonType={ButtonTypes.Primary}
              attributes={{
                "aria-label": "Previous",
                ...styles.buttonArrows,
              }}
            >
              <Icon
                name={IconNames.arrow}
                decorative={true}
                iconRotation={IconRotationTypes.rotate90}
                modifiers={["small"]}
              />
            </Button>
            <TabList>{tabs}</TabList>
            <Button
              buttonType={ButtonTypes.Primary}
              attributes={{
                "aria-label": "Next",
                ...styles.buttonArrows,
              }}
            >
              <Icon
                name={IconNames.arrow}
                decorative={true}
                iconRotation={IconRotationTypes.rotate270}
                modifiers={["small"]}
              />
            </Button>
          </Box>
          <TabPanels>{panels}</TabPanels>
        </>
      ) : (
        <>
          <Box
            __css={styles.tablistWrapper}
            sx={{
              "&::-webkit-scrollbar": {
                display: "none",
              },
            }}
          >
            {tabs}
          </Box>
          {panels}
        </>
      )}
    </ChakraTabs>
  );
}

export { Tabs, TabList, Tab, TabPanels, TabPanel };
