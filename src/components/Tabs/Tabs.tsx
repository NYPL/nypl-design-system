import * as React from "react";
import {
  chakra,
  Box,
  Tabs as ChakraTabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  useMultiStyleConfig,
  useStyles,
  useTab,
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

/** Internal anchor element that uses styled props. */
const StyledAnchorTab = chakra("a");
/**
 * Internal anchor element used in as a `Tab` component. This allows
 * hashes to appear in the URL on every tab click/press event.
 */
const CustomAnchorTab = React.forwardRef((props: any, _ref) => {
  const tabProps = useTab(props);
  const { hashKey, ...rest } = tabProps as any;
  const href = `#tab${hashKey + 1}`;
  const styles = useStyles();
  return (
    <StyledAnchorTab __css={styles.tab} {...rest} href={href}>
      {tabProps.children}
    </StyledAnchorTab>
  );
});

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
    // For URL hash enabled tabs, we want to use the custom anchor component.
    const tempTab = useHash ? (
      <CustomAnchorTab key={index} hashKey={index}>
        {tab.label}
      </CustomAnchorTab>
    ) : (
      <Tab key={index}>{tab.label}</Tab>
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
  const { tabs, panels } = getElementsFromContentData(contentData, useHash);

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
          <Box __css={styles.tablistWrapper}>
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
        children
      )}
    </ChakraTabs>
  );
}

export { Tabs, TabList, Tab, TabPanels, TabPanel };
