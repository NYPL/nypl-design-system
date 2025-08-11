import {
  BoxProps,
  Breadcrumb as ChakraBreadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  chakra,
  useStyleConfig,
  ChakraComponent,
} from "@chakra-ui/react";
import React, { forwardRef } from "react";

import Icon from "../Icons/Icon";
import Tooltip from "../Tooltip/Tooltip";
import { truncateText } from "../../utils/utils";

export const breadcrumbVariantsArray = [
  "blogs",
  "booksAndMore",
  "brand",
  "connect",
  "digitalCollections",
  "education",
  "locations",
  "research",
  "whatsOn",
] as const;
export type BreadcrumbsVariants = typeof breadcrumbVariantsArray[number];
export interface BreadcrumbsDataProps {
  url: string;
  text: string | React.ReactNode;
  linkProps?: any;
}

export interface BreadcrumbProps extends BoxProps {
  /** Breadcrumb links as an array */
  breadcrumbsData: BreadcrumbsDataProps[];
  /** Custom Link component for apps with internal routing, defaults to BreadcrumbLink if not passed */
  customLinkComponent?: React.ElementType;
  /** Used to control how the `Breadcrumbs` component will be rendered. */
  variant?: BreadcrumbsVariants;
}

const breadcrumbTextLength = 40;

/**
 * Truncate breadcrumb text if it is more than 40 characters in length and
 * then add ellipsis at the end.
 */
const tooltipWrapperOrText = ({
  breadcrumbsData,
  customLinkComponent,
  renderIcon = false,
  id,
  isCurrentPage = false,
}: {
  breadcrumbsData: BreadcrumbsDataProps;
  customLinkComponent: React.ElementType;
  renderIcon?: boolean;
  id?: string;
  isCurrentPage?: boolean;
}) => {
  const textLength = (breadcrumbsData.text as string).length;
  const renderTooltip = textLength >= breadcrumbTextLength;
  // If the text is more than 40 characters in length, truncate it.
  const updatedText =
    textLength <= breadcrumbTextLength
      ? breadcrumbsData.text
      : truncateText(breadcrumbsData.text as string, breadcrumbTextLength);
  const linkWrapper = (
    <BreadcrumbLink
      as={customLinkComponent}
      href={breadcrumbsData.url}
      aria-current={isCurrentPage ? "page" : undefined}
      {...breadcrumbsData.linkProps}
    >
      {renderIcon && (
        <Icon
          data-testid="ds-breadcrumbs-backarrow"
          iconRotation="rotate90"
          id={id ? `${id}-ds-breadcrumbs-backarrow` : undefined}
          name="arrow"
          size="small"
          variant="breadcrumbs"
        />
      )}
      <span className="ds-breadcrumbs-link-label">{updatedText}</span>
    </BreadcrumbLink>
  );
  // If the text is more than 40 characters in length, we need a ToolTip
  // component wrapped *directly* around the anchor element for
  // accessibility purposes.
  const breadcrumbLink = renderTooltip ? (
    <Tooltip
      content={breadcrumbsData.text}
      id={id ? `${id}-breadcrumbs-tooltip` : undefined}
    >
      {linkWrapper}
    </Tooltip>
  ) : (
    <>{linkWrapper}</>
  );

  return breadcrumbLink;
};

const getElementsFromData = ({
  data,
  customLinkComponent,
  id,
}: {
  data: BreadcrumbsDataProps[];
  customLinkComponent?: React.ElementType;
  id?: string;
}) => {
  if (!data?.length) {
    return null;
  }

  const breadcrumbsItems = data.map((breadcrumbsData, index) => {
    // The icon renders only on mobile and it should be
    // part of the second to last element in the nav.
    const renderIcon = index === data.length - 2;
    // The current page is the last item in the breadcrumbs
    // and needs an additional aria attribute.
    const isCurrentPage = index === data.length - 1;
    return (
      <BreadcrumbItem key={index}>
        {tooltipWrapperOrText({
          breadcrumbsData,
          customLinkComponent,
          renderIcon,
          id: `${id ? `${id}-${index}` : undefined}`,
          isCurrentPage,
        })}
      </BreadcrumbItem>
    );
  });

  return breadcrumbsItems;
};

/**
 * The `Breadcrumbs` component is a navigation element that provides a
 * breadcrumb path that reflects the site structure and allows a user to
 * navigate to any page available in the breadcrumb hierarchy.
 */

export const Breadcrumbs: ChakraComponent<
  React.ForwardRefExoticComponent<
    BreadcrumbProps & React.RefAttributes<HTMLDivElement>
  >,
  BreadcrumbProps
> = chakra(
  forwardRef<HTMLDivElement, BreadcrumbProps>((props, ref?) => {
    const {
      breadcrumbsData,
      customLinkComponent,
      id,
      variant = "whatsOn",
      ...rest
    } = props;

    if (!breadcrumbsData || breadcrumbsData.length === 0) {
      console.warn(
        "NYPL Reservoir Breadcrumbs: No data was passed to the `breadcrumbsData` prop."
      );
    }

    const styles = useStyleConfig("ReservoirBreadcrumb", {
      variant,
    });
    const breadcrumbItems = getElementsFromData({
      data: breadcrumbsData,
      customLinkComponent,
      id,
    });

    return (
      <ChakraBreadcrumb
        aria-label="Breadcrumb"
        data-testid="ds-breadcrumbs"
        id={id}
        ref={ref}
        __css={styles}
        {...rest}
      >
        {breadcrumbItems}
      </ChakraBreadcrumb>
    );
  })
);

export default Breadcrumbs;
