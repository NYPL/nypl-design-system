import { Box, chakra, useMultiStyleConfig } from "@chakra-ui/react";
import React, { forwardRef } from "react";

import Icon, { IconNames } from "../Icons/Icon";
import Image from "../Image/Image";
import Link from "../Link/Link";
import List from "../List/List";
import Logo from "../Logo/Logo";
import linkData from "./footerLinks";

interface FooterProps {
  /** Additional class name to add. */
  className?: string;
  /** ID that other components can cross reference for accessibility purposes */
  id?: string;
}

/**
 * This `Footer` component renders the NYPL-branded footer elements such
 * as navigational NYPL.org links, social media links, copyright, and
 * NYPL building facade image.
 */
export const Footer = chakra(
  forwardRef<HTMLDivElement, FooterProps>(
    ({ className, id = "footer", ...rest }, ref?) => {
      const styles = useMultiStyleConfig("Footer", {});

      const nyplLinks = linkData.nyplLinks.map((links, index) => (
        <List
          key={index}
          listItems={links.map((link) => (
            <Link href={link.href} key={link.text}>
              {link.text}
            </Link>
          ))}
          noStyling
          type="ul"
          __css={styles.footerLinksInner}
        />
      ));
      const socialLinks = linkData.socialMedia.map((link, index) => (
        <Link href={link.href} key={index}>
          <Icon
            decorative={false}
            name={link.iconName as IconNames}
            size="small"
            title={link.title}
          />
        </Link>
      ));

      return (
        <Box
          as="footer"
          className={className}
          id={id}
          ref={ref}
          role="contentinfo"
          {...rest}
          __css={styles}
        >
          <Box __css={styles.listsContainer}>
            <List
              data-testid="text-links"
              listItems={nyplLinks}
              noStyling
              type="ul"
              __css={styles.footerLinksList}
            />
            <List
              data-testid="social-media-links"
              listItems={socialLinks}
              noStyling
              type="ul"
              __css={styles.socialMediaList}
            />
          </Box>
          <Box __css={styles.nyplInfoContainer}>
            <Box>
              <Image
                alt="NYPL Main Building Facade"
                src="https://cdn-d8.nypl.org/s3fs-public/2020-05/NYPL_MainFacadeRev2Cam2.png"
              />
            </Box>
            <Box __css={styles.copyright}>
              <p>© The New York Public Library, {new Date().getFullYear()}</p>
              <p>The New York Public Library is a 501(c)(3) | EIN 13-1887440</p>
            </Box>
          </Box>
          <Box __css={styles.logoContainer}>
            <Logo
              decorative={false}
              name="nyplTextWhite"
              size="small"
              title="The New York Public Library"
            />
          </Box>
        </Box>
      );
    }
  )
);

export default Footer;
