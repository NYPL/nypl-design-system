import {
  Breadcrumb as ChakraBreadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  chakra,
  useStyleConfig,
} from "@chakra-ui/react";
import * as React from "react";

import Icon from "../Icons/Icon";
import {
  IconNames,
  IconRotationTypes,
  IconSizes,
  IconTypes,
} from "../Icons/IconTypes";
import { BreadcrumbsTypes } from "./BreadcrumbsTypes";
import { getVariant } from "../../utils/utils";

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
            name={IconNames.Arrow}
            size={IconSizes.Small}
            iconRotation={IconRotationTypes.Rotate90}
            id={`${breadcrumbsID}__backarrow`}
            className="breadcrumbs-icon"
            type={IconTypes.Breadcrumbs}
          />
        )}
        <span className="breadcrumb-label">{breadcrumbData.text}</span>
      </BreadcrumbLink>
    </BreadcrumbItem>
  ));

  return breadcrumbItems;
};

export const Breadcrumbs = chakra((props: BreadcrumbProps) => {
  const { breadcrumbsData, breadcrumbsType, className, id, ...rest } = props;
  const variant = getVariant(breadcrumbsType, BreadcrumbsTypes);

  if (!breadcrumbsData || breadcrumbsData.length === 0) {
    throw new Error(
      "NYPL Reservoir Breadcrumbs: No data was passed to the `breadcrumbsData` prop."
    );
  }

  const styles = useStyleConfig("Breadcrumb", { variant });
  const breadcrumbItems = getElementsFromData(breadcrumbsData, id);

  return (
    <ChakraBreadcrumb
      aria-label="Breadcrumb"
      className={className}
      id={id}
      __css={styles}
      {...rest}
    >
      {breadcrumbItems}
    </ChakraBreadcrumb>
  );
});

export default Breadcrumbs;
