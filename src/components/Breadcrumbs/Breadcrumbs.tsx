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

export type BreadcrumbsTypes =
  | "blogs"
  | "booksAndMore"
  | "brand"
  | "education"
  | "locations"
  | "research"
  | "whatsOn";
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

// Truncate breadcrumb text if beyond 40 characters then add ellipsis at the end.
const breadcrumbText = (text) => {
  if (text.length <= breadcrumbTextLength) {
    return text;
  }

  return truncateText(text, breadcrumbTextLength);
};

const tooltipWrapperOrText = (
  breadcrumbsData: BreadcrumbsDataProps,
  breadcrumbsID,
  renderIcon = false,
  isCurrentPage = false
) => {
  const renderTooltip =
    (breadcrumbsData.text as string).length >= breadcrumbTextLength;
  const linkWrapper = (
    <BreadcrumbLink
      href={breadcrumbsData.url}
      aria-current={isCurrentPage ? "page" : undefined}
    >
      {renderIcon && (
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
        {breadcrumbText(breadcrumbsData.text)}
      </span>
    </BreadcrumbLink>
  );
  const wrapper = renderTooltip ? (
    <Tooltip
      content={breadcrumbsData.text}
      id={`breadcrumb-${breadcrumbsID}-tooltip`}
    >
      {linkWrapper}
    </Tooltip>
  ) : (
    <>{linkWrapper}</>
  );

  return wrapper;
};

const getElementsFromData = (
  data: BreadcrumbsDataProps[],
  breadcrumbsID?: string
) => {
  if (!data?.length) {
    return {};
  }

  const breadcrumbsItems = data.map((breadcrumbsData, index) => (
    <BreadcrumbItem key={index}>
      {tooltipWrapperOrText(
        breadcrumbsData,
        breadcrumbsID,
        index === data.length,
        index === data.length - 1 ? true : false
      )}
    </BreadcrumbItem>
  ));

  return breadcrumbsItems;
};

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
