import * as React from "react";
import {
  Tabs as ChakraTabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  // useStyleConfig,
  chakra,
  useStyles,
  useTab,
} from "@chakra-ui/react";

import bem from "../../utils/bem";
import generateUUID from "../../helpers/generateUUID";

// TODO: later when styling
// enum TabsType {
//   Primary = "primary",
//   Secondary = "secondary",
// };

// Type for tab alignment, values available through Chakra.
type tabsAlign = "start" | "center" | "end";

// The general shape of the data object for each Tab.
export interface TabsData {
  label: string;
  content: string | React.ReactNode;
}

export interface TabsProps {
  /** How to align the tabs provided by Chakra. */
  align?: tabsAlign;
  /** Additional className for use with BEM. See how to work with blockNames
   * and BEM here: http://getbem.com/introduction/ */
  className?: string;
  /** Array of data to display */
  data?: TabsData[];
  /** ID that other components can cross reference for accessibility purposes */
  id?: string;
  /** The index of the tab to display for controlled situations. */
  index?: number;
  /** Render the tabs to span the container's full width, provided by Chakra. */
  isFitted?: boolean;
  /** The callback function invoked on every tab change event. */
  onChange?: (index: number) => any;
  /** The kind of Tab assigned through the `TabsType` enum.  */
  // tabsType?: TabsType;
  /** Render a hash in the url for each tab. Only available when data is
   * passed through the `data` props.
   */
  useHash?: boolean;
}

// TODO: later when styling
// Used to map between TabsType enum values and Chakra variant options.
// const variantMap = {};
// for (const type in TabsType) {
//   variantMap[TabsType[type]] = TabsType[type];
// }
/**
 * Map the TabsType to the Tabs Chakra theme variant object. If a wrong
 * value is passed (typically in non-Typescript scenarios), then the default
 * is the "primary" variant.
 */
// const getVariant = (tabsType) =>
//  variantMap[tabsType] || TabsType.Primary;

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
const getElementsFromData = (data, useHash) => {
  const tabs = [];
  const panels = [];

  if (!data?.length) {
    return {};
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
    className = "",
    data,
    id = generateUUID(),
    isFitted = false,
    useHash = false,
    onChange,
    index = 0,
    align = "start",
  } = props;
  const baseClass = "tabs";
  // TODO: later when styling
  // const variant = getVariant(tabsType);
  // const styles = useStyleConfig("Tabs", { variant });
  // line,enclosed, enclosed-colored, soft-rounded, solid-rounded, unstyled

  if (children && data?.length) {
    console.warn(
      "Only pass children or data in the `data` props but not both."
    );
  }

  const { tabs, panels } = getElementsFromData(data, useHash);

  return (
    <ChakraTabs
      id={id}
      align={align}
      className={bem(baseClass, [], "", [className])}
      isFitted={isFitted}
      // The following lazy loads each panel whenever it is needed.
      isLazy
      onChange={onChange}
      defaultIndex={index}
      variant="enclosed"
      // __css={styles}
    >
      {data ? (
        <>
          <TabList>{tabs}</TabList>
          <TabPanels>{panels}</TabPanels>
        </>
      ) : (
        children
      )}
    </ChakraTabs>
  );
}

export { Tabs, TabList, Tab, TabPanels, TabPanel };
