import { Box, chakra, useStyleConfig } from "@chakra-ui/react";
import * as React from "react";

import Link from "../Link/Link";
import List from "../List/List";

interface SkipNavigationProps {
  /** Additional CSS class name to render in the `nav` element. */
  className?: string;
  /** ID that other components can cross reference for accessibility purposes */
  id?: string;
  /** The anchor target for the main skip link. The default is "#mainContent". */
  target?: string;
}

/**
 * SkipNavigation is a component that is used to provide a navigational list of
 * links. The first link is used to skip to the main content of the page using
 * the `#mainContent` id, and the second link points to accessibility information
 * on NYPL.org. These links are visually hidden but can be read by screenreaders.
 */
export const SkipNavigation = chakra(
  (props: React.PropsWithChildren<SkipNavigationProps>) => {
    const { className, id, target = "#mainContent", ...rest } = props;
    const styles = useStyleConfig("SkipNavigation");

    return (
      <Box
        as="nav"
        aria-label="Skip Navigation"
        className={className}
        id={id}
        __css={styles}
        {...rest}
      >
        <List inline noStyling type="ul">
          <li>
            <Link href={target}>Skip to Main Content</Link>
          </li>
          <li>
            <Link href="https://www.nypl.org/accessibility">
              Click to learn about accessibility at the Library
            </Link>
          </li>
        </List>
      </Box>
    );
  }
);

export default SkipNavigation;
