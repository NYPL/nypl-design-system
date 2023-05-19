import {
  Breadcrumb as ChakraBreadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  chakra,
  useStyleConfig,
} from "@chakra-ui/react";
import React, { forwardRef } from "react";

import Icon from "../Icons/Icon";
import Tooltip from "../Tooltip/Tooltip";
import { truncateText } from "../../utils/utils";

export const breadcrumbTypeArray = [
  "blogs",
  "booksAndMore",
  "brand",
  "education",
  "locations",
  "research",
  "whatsOn",
] as const;
export type BreadcrumbsTypes = typeof breadcrumbTypeArray[number];
export interface BreadcrumbsDataProps {
  url: string;
  text: string | React.ReactNode;
}

export interface BreadcrumbProps {
  /** Breadcrumb links as an array */
  breadcrumbsData: BreadcrumbsDataProps[];
  /** Used to control how the `Hero` component will be rendered. */
  breadcrumbsType?: BreadcrumbsTypes;
  /** className you can add in addition to 'input' */
  className?: string;
  /** ID that other components can cross reference for accessibility purposes */
  id?: string;
}

const breadcrumbTextLength = 40;

/**
 * Truncate breadcrumb text if beyond 40 characters then add ellipsis at the end.
 */
const breadcrumbText = (text, id) => {
  if (text.length <= breadcrumbTextLength) {
    return text;
  }

  return (
    <Tooltip content={text} id={`breadcrumb-${id}-tooltip`}>
      {truncateText(text, breadcrumbTextLength)}
    </Tooltip>
  );
};

const getElementsFromData = (
  data: BreadcrumbsDataProps[],
  breadcrumbsID?: string
) => {
  if (!data?.length) {
    return {};
  }

  const breadcrumbItems = data.map((breadcrumbData, index) => (
    <BreadcrumbItem
      key={index}
      isCurrentPage={index === data.length - 1 ? true : false}
    >
      <BreadcrumbLink href={breadcrumbData.url}>
        {index === data.length - 2 && (
          <Icon
            name="arrow"
            size="small"
            iconRotation="rotate90"
            id={`${breadcrumbsID}__backarrow`}
            className="breadcrumbs-icon"
            type="breadcrumbs"
          />
        )}
        <span className="breadcrumb-label">
          {breadcrumbText(breadcrumbData.text, breadcrumbsID)}
        </span>
      </BreadcrumbLink>
    </BreadcrumbItem>
  ));

  return breadcrumbItems;
};

/**
 * The `Breadcrumbs` component is a navigation element that provides a
 * breadcrumb path that reflects the site structure and allows a user to
 * navigate to any page available in the breadcrumb hierarchy.
 */
export const Breadcrumbs = chakra(
  forwardRef<HTMLDivElement, BreadcrumbProps>((props, ref?) => {
    const {
      breadcrumbsData,
      breadcrumbsType = "whatsOn",
      className,
      id,
      ...rest
    } = props;

    if (!breadcrumbsData || breadcrumbsData.length === 0) {
      throw new Error(
        "NYPL Reservoir Breadcrumbs: No data was passed to the `breadcrumbsData` prop."
      );
    }

    const styles = useStyleConfig("Breadcrumb", { variant: breadcrumbsType });
    const breadcrumbItems = getElementsFromData(breadcrumbsData, id);

    return (
      <ChakraBreadcrumb
        aria-label="Breadcrumb"
        className={className}
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
